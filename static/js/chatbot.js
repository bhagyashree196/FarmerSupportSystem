// ─── CHATBOT ───────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {

  const chatBtn   = document.getElementById('chatbotToggle');
  const chatBox   = document.getElementById('chatbot-box');
  const closeBtn  = document.getElementById('close-chatbot');
  const sendBtn   = document.getElementById('send-btn');
  const userInput = document.getElementById('user-input');
  const messages  = document.getElementById('chatbot-messages');
  const langSel   = document.getElementById('chatLangSelect');

  if (!chatBtn) return;

  // Toggle chatbot
  chatBtn.addEventListener('click', () => {
    chatBox.classList.toggle('show');
    chatBtn.classList.toggle('active');
    if (chatBox.classList.contains('show')) userInput.focus();
  });

  closeBtn.addEventListener('click', () => {
    chatBox.classList.remove('show');
    chatBtn.classList.remove('active');
  });

  // Send on button click or Enter
  sendBtn.addEventListener('click', sendMessage);
  userInput.addEventListener('keypress', e => { if (e.key === 'Enter') sendMessage(); });

  function sendMessage() {
    const text = userInput.value.trim();
    if (!text) return;
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
      appendMsg(data.reply || 'Sorry, I could not understand that.', 'bot');
    })
    .catch(() => {
      removeTyping();
      appendMsg('Connection error. Please check the server.', 'bot');
    });
  }

  function appendMsg(text, type) {
    const div = document.createElement('div');
    div.className = type === 'user' ? 'user-msg' : 'bot-msg';
    // Convert newlines to <br> for bot messages
    div.innerHTML = type === 'bot'
      ? text.replace(/\n/g, '<br>').replace(/\*(.*?)\*/g, '<strong>$1</strong>')
      : escapeHtml(text);
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
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(text));
    return div.innerHTML;
  }
});

// Quick reply buttons
function sendQuick(text) {
  document.getElementById('user-input').value = text;
  document.getElementById('send-btn').click();
}
