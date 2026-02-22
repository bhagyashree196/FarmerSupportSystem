// ─── KISAN MITRA CHATBOT WITH VOICE ASSISTANCE ────────────────────────────────

document.addEventListener('DOMContentLoaded', function () {

  const chatBtn   = document.getElementById('chatbotToggle');
  const chatBox   = document.getElementById('chatbot-box');
  const closeBtn  = document.getElementById('close-chatbot');
  const sendBtn   = document.getElementById('send-btn');
  const userInput = document.getElementById('user-input');
  const messages  = document.getElementById('chatbot-messages');
  const langSel   = document.getElementById('chatLangSelect');

  if (!chatBtn) return;

  // ─── LANGUAGE CONFIG ─────────────────────────────────────────────────────────
  const LANG_MAP = {
    'en': { speech: 'en-IN', tts: 'en-IN', name: 'English' },
    'hi': { speech: 'hi-IN', tts: 'hi-IN', name: 'हिंदी'   },
    'mr': { speech: 'mr-IN', tts: 'mr-IN', name: 'मराठी'   },
    'pa': { speech: 'pa-IN', tts: 'pa-IN', name: 'ਪੰਜਾਬੀ'  },
    'te': { speech: 'te-IN', tts: 'te-IN', name: 'తెలుగు'  },
    'ta': { speech: 'ta-IN', tts: 'ta-IN', name: 'தமிழ்'   },
  };

  // ─── VOICE STATE ─────────────────────────────────────────────────────────────
  let isListening  = false;
  let isSpeaking   = false;
  let recognition  = null;
  let currentUtter = null;
  let voiceEnabled = true;

  const hasSpeechRecog = 'webkitSpeechRecognition' in window || 'SpeechRecognition' in window;
  const hasTTS         = 'speechSynthesis' in window;

  // ─── INJECT VOICE STYLES ─────────────────────────────────────────────────────
  const style = document.createElement('style');
  style.textContent = `
    .voice-wave {
      display: inline-block;
      animation: wave 0.8s ease-in-out infinite;
      margin: 0 2px; font-size: 1.2rem;
    }
    .voice-wave:nth-child(2) { animation-delay: 0.1s; }
    .voice-wave:nth-child(3) { animation-delay: 0.2s; }
    .voice-wave:nth-child(4) { animation-delay: 0.3s; }
    .voice-wave:nth-child(5) { animation-delay: 0.4s; }
    @keyframes wave {
      0%, 100% { transform: scaleY(1); opacity: 0.5; }
      50%       { transform: scaleY(2); opacity: 1;   }
    }
    #mic-btn {
      background: linear-gradient(135deg, #2e7d32, #66bb6a);
      border: none; border-radius: 50%; width: 40px; height: 40px;
      font-size: 1rem; cursor: pointer; transition: all 0.2s;
      flex-shrink: 0; color: white;
    }
    #mic-btn:hover { transform: scale(1.1); }
    #mic-btn.listening {
      background: linear-gradient(135deg, #e53935, #ef9a9a) !important;
      animation: pulse 1s ease-in-out infinite;
    }
    @keyframes pulse {
      0%, 100% { box-shadow: 0 0 0 0 rgba(229,57,53,0.4); }
      50%       { box-shadow: 0 0 0 8px rgba(229,57,53,0); }
    }
    #voice-bar {
      display: flex; align-items: center; justify-content: space-between;
      padding: 5px 12px; background: #e8f5e9; border-top: 1px solid #c8e6c9;
      font-size: 0.73rem; color: #2e7d32;
    }
    #listening-overlay {
      display: none; position: absolute; bottom: 130px; left: 10px; right: 10px;
      background: rgba(46,125,50,0.96); color: white; text-align: center;
      padding: 15px; font-size: 0.9rem; z-index: 10; border-radius: 12px;
    }
    .speak-btn {
      background: none; border: 1px solid #c8e6c9; border-radius: 12px;
      color: #2e7d32; font-size: 0.68rem; padding: 2px 8px;
      cursor: pointer; margin-top: 5px; display: inline-block;
    }
    .speak-btn:hover { background: #e8f5e9; }
  `;
  document.head.appendChild(style);

  // ─── BUILD VOICE UI ──────────────────────────────────────────────────────────
  function buildVoiceUI() {
    // Mic button next to send
    const micBtn = document.createElement('button');
    micBtn.id        = 'mic-btn';
    micBtn.title     = 'Press to speak your question';
    micBtn.innerHTML = '🎤';
    sendBtn.parentNode.insertBefore(micBtn, sendBtn);

    // Voice toggle bar above input
    const voiceBar = document.createElement('div');
    voiceBar.id = 'voice-bar';
    voiceBar.innerHTML = `
      <span id="voice-status">🔊 Voice replies ON</span>
      <label style="display:flex;align-items:center;gap:5px;cursor:pointer;margin:0;">
        <input type="checkbox" id="voice-toggle" checked style="accent-color:#2e7d32;">
        Auto-speak
      </label>
    `;
    const inputArea = document.querySelector('.chatbot-input');
    inputArea.parentNode.insertBefore(voiceBar, inputArea);

    // Listening overlay
    const overlay = document.createElement('div');
    overlay.id = 'listening-overlay';
    overlay.innerHTML = `
      <div style="font-size:2rem;margin-bottom:5px;">🎤</div>
      <div id="listening-text">Listening... speak now / बोलिए...</div>
      <div style="margin-top:8px;">
        <span class="voice-wave">▁</span><span class="voice-wave">▃</span>
        <span class="voice-wave">▅</span><span class="voice-wave">▃</span>
        <span class="voice-wave">▁</span>
      </div>
      <button id="stop-listen-btn" style="margin-top:10px;background:white;
        color:#2e7d32;border:none;border-radius:20px;padding:5px 15px;
        cursor:pointer;font-weight:bold;">✋ Stop</button>
    `;
    chatBox.style.position = 'relative';
    chatBox.appendChild(overlay);

    // Events
    micBtn.addEventListener('click', toggleListening);
    document.getElementById('stop-listen-btn').addEventListener('click', stopListening);
    document.getElementById('voice-toggle').addEventListener('change', function () {
      voiceEnabled = this.checked;
      document.getElementById('voice-status').textContent =
        voiceEnabled ? '🔊 Voice replies ON' : '🔇 Voice replies OFF';
      if (!voiceEnabled) stopSpeaking();
    });
  }

  // ─── SPEECH RECOGNITION ──────────────────────────────────────────────────────
  function initRecognition() {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SR();
    recognition.continuous     = false;
    recognition.interimResults = true;

    recognition.onstart = () => {
      isListening = true;
      document.getElementById('mic-btn').classList.add('listening');
      document.getElementById('mic-btn').innerHTML = '⏹️';
      document.getElementById('listening-overlay').style.display = 'block';
      userInput.placeholder = 'Listening... / सुन रहा हूं...';
    };

    recognition.onresult = (e) => {
      let interim = '', final = '';
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const t = e.results[i][0].transcript;
        if (e.results[i].isFinal) final += t;
        else interim += t;
      }
      userInput.value = final || interim;
      const heard = final || interim;
      if (heard) document.getElementById('listening-text').textContent = `Heard: "${heard}"`;
    };

    recognition.onend = () => {
      stopListening();
      if (userInput.value.trim()) setTimeout(() => sendMessage(), 400);
    };

    recognition.onerror = (e) => {
      stopListening();
      const errors = {
        'not-allowed'  : '❌ Microphone access denied. Please allow mic in your browser settings.',
        'no-speech'    : '🔇 Nothing heard. Please speak louder and try again.',
        'network'      : '❌ Network error during voice recognition.',
        'audio-capture': '❌ No microphone detected on this device.',
      };
      appendMsg(errors[e.error] || `Voice error: ${e.error}`, 'bot');
    };
  }

  function toggleListening() {
    if (isListening) stopListening();
    else startListening();
  }

  function startListening() {
    if (!hasSpeechRecog) {
      appendMsg('❌ Voice input is not supported in this browser. Please use Google Chrome or Microsoft Edge.', 'bot');
      return;
    }
    stopSpeaking();
    const lang   = langSel ? langSel.value : 'en';
    const locale = LANG_MAP[lang]?.speech || 'en-IN';
    if (!recognition) initRecognition();
    recognition.lang = locale;
    try { recognition.start(); } catch (e) {}
  }

  function stopListening() {
    isListening = false;
    const btn = document.getElementById('mic-btn');
    if (btn) { btn.classList.remove('listening'); btn.innerHTML = '🎤'; }
    const ov = document.getElementById('listening-overlay');
    if (ov) ov.style.display = 'none';
    userInput.placeholder = 'बोलें या टाइप करें... / Speak or type...';
    if (recognition) try { recognition.stop(); } catch (e) {}
  }

  // ─── TEXT TO SPEECH ──────────────────────────────────────────────────────────
  function speak(text, lang) {
    if (!hasTTS || !voiceEnabled) return;
    stopSpeaking();

    // Clean text before speaking
    const clean = text
      .replace(/\*\*(.*?)\*\*/g, '$1')
      .replace(/\*(.*?)\*/g, '$1')
      .replace(/https?:\/\/\S+/g, 'official website')
      .replace(/[#_`~<>]/g, '')
      .replace(/<br\s*\/?>/gi, '. ')
      .replace(/\s+/g, ' ')
      .trim();

    const locale = LANG_MAP[lang]?.tts || 'en-IN';
    currentUtter         = new SpeechSynthesisUtterance(clean);
    currentUtter.lang    = locale;
    currentUtter.rate    = 0.85;
    currentUtter.pitch   = 1.0;
    currentUtter.volume  = 1.0;

    // Pick best matching voice
    const voices = window.speechSynthesis.getVoices();
    const match  = voices.find(v => v.lang === locale)
                || voices.find(v => v.lang.startsWith(lang))
                || voices.find(v => v.lang.startsWith('en'));
    if (match) currentUtter.voice = match;

    currentUtter.onend = currentUtter.onerror = () => {
      isSpeaking = false; currentUtter = null;
    };

    isSpeaking = true;
    window.speechSynthesis.speak(currentUtter);
  }

  function stopSpeaking() {
    if (hasTTS) window.speechSynthesis.cancel();
    isSpeaking = false; currentUtter = null;
  }

  // ─── SEND MESSAGE ────────────────────────────────────────────────────────────
  function sendMessage() {
    const text = userInput.value.trim();
    if (!text) return;
    stopSpeaking();
    appendMsg(text, 'user');
    userInput.value = '';
    showTyping();

    const lang = langSel ? langSel.value : 'en';

    fetch('/api/chatbot', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: text, lang: lang })
    })
    .then(r => r.json())
    .then(data => {
      removeTyping();
      const reply = data.reply || 'Sorry, I could not understand that.';
      appendMsg(reply, 'bot', lang);
      if (voiceEnabled) speak(reply, lang);
    })
    .catch(() => {
      removeTyping();
      appendMsg('Connection error. Please check the server.', 'bot');
    });
  }

  // ─── APPEND MESSAGE ──────────────────────────────────────────────────────────
  function appendMsg(text, type, lang) {
    const div = document.createElement('div');
    div.className = type === 'user' ? 'user-msg' : 'bot-msg';

    if (type === 'bot') {
      div.innerHTML = text
        .replace(/\n/g, '<br>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<strong>$1</strong>');

      // 🔊 Speak button on every bot message
      if (hasTTS) {
        const btn = document.createElement('button');
        btn.className   = 'speak-btn';
        btn.textContent = '🔊 Speak again';
        btn.onclick     = () => speak(text, lang || (langSel ? langSel.value : 'en'));
        div.appendChild(document.createElement('br'));
        div.appendChild(btn);
      }
    } else {
      div.innerHTML = escapeHtml(text);
    }

    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }

  function showTyping() {
    const div = document.createElement('div');
    div.className = 'bot-msg typing-indicator';
    div.id = 'typingIndicator';
    div.innerHTML = '<span></span><span></span><span></span>';
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }

  function removeTyping() {
    const t = document.getElementById('typingIndicator');
    if (t) t.remove();
  }

  function escapeHtml(text) {
    const d = document.createElement('div');
    d.appendChild(document.createTextNode(text));
    return d.innerHTML;
  }

  // ─── CHATBOT OPEN / CLOSE ────────────────────────────────────────────────────
  chatBtn.addEventListener('click', () => {
    chatBox.classList.toggle('show');
    chatBtn.classList.toggle('active');
    if (chatBox.classList.contains('show')) userInput.focus();
  });

  closeBtn.addEventListener('click', () => {
    stopListening(); stopSpeaking();
    chatBox.classList.remove('show');
    chatBtn.classList.remove('active');
  });

  sendBtn.addEventListener('click', sendMessage);
  userInput.addEventListener('keypress', e => { if (e.key === 'Enter') sendMessage(); });
  userInput.addEventListener('input',    () => { if (isSpeaking) stopSpeaking(); });

  // Chrome loads voices async
  if (hasTTS) window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();

  // ─── INIT ────────────────────────────────────────────────────────────────────
  buildVoiceUI();
  userInput.placeholder = 'बोलें या टाइप करें... / Speak or type...';

});

// ─── QUICK REPLY BUTTONS ─────────────────────────────────────────────────────
function sendQuick(text) {
  document.getElementById('user-input').value = text;
  document.getElementById('send-btn').click();
}