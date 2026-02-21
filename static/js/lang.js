// ─── lang.js — Static 3-Language Support (English, Hindi, Marathi) ──────────
// No API needed. All translations hardcoded — instant, offline, zero cost.
// Covers ALL pages: index, govscheme, financial, insurance, scheme_detail
// ─────────────────────────────────────────────────────────────────────────────

const LANG = {

  // ══════════════════════════════════════════════════════════════════════════
  // ENGLISH (default — also used as fallback)
  // ══════════════════════════════════════════════════════════════════════════
  en: {
    // ── Navbar / base ──
    navBrand: "🌾 Kisan Sahayata",
    navHome: "Home",
    navAdmin: "Admin Login",
    helplineBar: "PM-KISAN Helpline: 155261 | PMFBY: 1800-200-7710",

    // ── Footer ──
    footerTagline: "Your trusted partner in agricultural growth",
    footerSchemes: "Schemes",
    footerGovt: "Government Schemes",
    footerFinancial: "Financial Support",
    footerInsurance: "Insurance",
    footerHelpline: "Helpline",
    rightsText: "© 2025 Kisan Sahayata. All rights reserved.",

    // ── Chatbot ──
    chatbotTitle: "Kisan Mitra",
    chatbotSubtitle: "AI Farming Assistant",
    chatbotWelcome: "Namaskar 🙏 I am Kisan Mitra! I can help you find government schemes, loans, and insurance. Ask me anything!",
    chatbotPlaceholder: "Ask about schemes...",

    // ── Index page ──
    welcomeText: "🌾 Kisan Sahayata",
    heroSubtitle: "Empowering Farmers with Government Schemes & Financial Support",
    searchPlaceholder: "Search schemes, loans, insurance...",
    searchBtn: "Search",
    statLabelTotal: "Total Schemes",
    statLabelGovt: "Govt Schemes",
    statLabelFin: "Financial",
    statLabelIns: "Insurance",
    statLabelActive: "Active",
    featureGovtTitle: "📋 Government Schemes",
    featureGovtDesc: "Explore PM-KISAN, RKVY, Maharashtra state schemes and more with eligibility and application details.",
    featureFinTitle: "💰 Financial Support",
    featureFinDesc: "Discover KCC loans, PM-KMY pension, AIF infrastructure fund and subsidy programs at low interest.",
    featureInsTitle: "🛡️ Insurance",
    featureInsDesc: "Get PMFBY crop insurance, life insurance and relief schemes to protect against unexpected losses.",
    quickAccessTitle: "⚡ Quick Access",
    pmkisanTitle: "PM-KISAN Scheme",
    pmkisanDesc: "Direct income support of ₹6000/year",
    pmfbyTitle: "Crop Insurance (PMFBY)",
    pmfbyDesc: "Protect your crops against losses",
    kccTitle: "Kisan Credit Card",
    kccDesc: "Easy loans at 4% interest",
    irrigationTitle: "Irrigation Schemes",
    irrigationDesc: "Subsidy for drip/sprinkler systems",
    happyFarmersTitle: "😊 Happy Farmers",

    // ── Modals (Index) ──
    modalGovtTitle: "🌾 Select Scheme Type",
    modalFinTitle: "💰 Financial Support",
    modalInsTitle: "🛡️ Insurance Schemes",
    labelFarmerName: "Farmer Name",
    labelLocation: "Location (District/Village)",
    labelSchemeType: "Scheme Type",
    labelSupportType: "Support Type",
    labelInsType: "Insurance Type",
    placeholderName: "Enter your name",
    placeholderLoc: "Enter district or village",
    selectDefault: "-- Select Scheme Type --",
    selectDefaultFin: "-- Select Type --",
    optCentral: "Central",
    optMaharashtra: "State (Maharashtra)",
    optAll: "All Schemes",
    btnViewSchemes: "View Schemes",
    btnViewFin: "View Financial Schemes",
    btnViewIns: "View Insurance",

    // ── Govt Schemes page ──
    govPageTitle: "📋 Government Schemes",
    govPageSubtitle: "Explore Central & Maharashtra Government Agricultural Schemes",
    filterAll: "All Schemes",
    filterCentral: "Central",
    filterMaharashtra: "Maharashtra",
    loadingText: "Loading schemes...",
    labelEligibility: "Eligibility:",
    labelBenefits: "Benefits:",
    labelDeadline: "Deadline:",
    labelStatus: "Active",
    labelInactive: "Inactive",
    btnApply: "Apply Now",
    btnDetails: "View Details",
    noSchemes: "No schemes found",

    // ── Financial page ──
    finPageTitle: "💰 Financial Support",
    finPageSubtitle: "Loans, subsidies, grants & financial assistance for farmers",

    // ── Insurance page ──
    insPageTitle: "🛡️ Insurance Schemes",
    insPageSubtitle: "Crop, life, livestock & accident insurance for farmers",

    // ── Scheme Detail page ──
    detailDeadline: "Deadline:",
    detailOfficialBtn: "Official Website",
    detailDescTitle: "Description",
    detailHowTitle: "How to Apply",
    detailFaqTitle: "Important Information",
    detailEligTitle: "Eligibility",
    detailBenTitle: "Benefits",
    detailPeriodTitle: "Period",
    detailStart: "Start:",
    detailEnd: "End:",
    detailHelpTitle: "Helpline",
    detailDocsTitle: "Documents Required",
    detailBackBtn: "Back",
    detailLoadingText: "Loading scheme details...",
    detailError: "Scheme not found.",
    detailNoId: "No scheme ID provided.",
    detailNoApply: "Contact your nearest Agriculture Office",
    detailNoHelpline: "Contact Agriculture Office",
    detailNoDocs: "Aadhar Card, Land Records",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // HINDI (हिंदी)
  // ══════════════════════════════════════════════════════════════════════════
  hi: {
    // ── Navbar / base ──
    navBrand: "🌾 किसान सहायता",
    navHome: "होम",
    navAdmin: "एडमिन लॉगिन",
    helplineBar: "पीएम-किसान हेल्पलाइन: 155261 | पीएमएफबीवाई: 1800-200-7710",

    // ── Footer ──
    footerTagline: "कृषि विकास में आपका विश्वसनीय साथी",
    footerSchemes: "योजनाएं",
    footerGovt: "सरकारी योजनाएं",
    footerFinancial: "वित्तीय सहायता",
    footerInsurance: "बीमा",
    footerHelpline: "हेल्पलाइन",
    rightsText: "© 2025 किसान सहायता। सर्वाधिकार सुरक्षित।",

    // ── Chatbot ──
    chatbotTitle: "किसान मित्र",
    chatbotSubtitle: "कृषि सहायक",
    chatbotWelcome: "नमस्कार 🙏 मैं किसान मित्र हूँ! मैं आपको सरकारी योजनाएं, ऋण और बीमा खोजने में मदद कर सकता हूँ।",
    chatbotPlaceholder: "योजनाओं के बारे में पूछें...",

    // ── Index page ──
    welcomeText: "🌾 किसान सहायता",
    heroSubtitle: "सरकारी योजनाओं और वित्तीय सहायता से किसानों को सशक्त बनाना",
    searchPlaceholder: "योजनाएं, ऋण, बीमा खोजें...",
    searchBtn: "खोजें",
    statLabelTotal: "कुल योजनाएं",
    statLabelGovt: "सरकारी योजनाएं",
    statLabelFin: "वित्तीय",
    statLabelIns: "बीमा",
    statLabelActive: "सक्रिय",
    featureGovtTitle: "📋 सरकारी योजनाएं",
    featureGovtDesc: "पीएम-किसान, आरकेवीवाई, महाराष्ट्र राज्य योजनाएं और अन्य पात्रता और आवेदन विवरण के साथ देखें।",
    featureFinTitle: "💰 वित्तीय सहायता",
    featureFinDesc: "केसीसी ऋण, पीएम-केएमवाई पेंशन, एआईएफ इन्फ्रास्ट्रक्चर फंड और कम ब्याज पर सब्सिडी कार्यक्रम।",
    featureInsTitle: "🛡️ बीमा",
    featureInsDesc: "पीएमएफबीवाई फसल बीमा, जीवन बीमा और अप्रत्याशित नुकसान से बचाने की राहत योजनाएं।",
    quickAccessTitle: "⚡ त्वरित पहुँच",
    pmkisanTitle: "पीएम-किसान योजना",
    pmkisanDesc: "₹6000/वर्ष की प्रत्यक्ष आय सहायता",
    pmfbyTitle: "फसल बीमा (पीएमएफबीवाई)",
    pmfbyDesc: "अपनी फसलों को नुकसान से बचाएं",
    kccTitle: "किसान क्रेडिट कार्ड",
    kccDesc: "4% ब्याज पर आसान ऋण",
    irrigationTitle: "सिंचाई योजनाएं",
    irrigationDesc: "ड्रिप/स्प्रिंकलर सिस्टम पर सब्सिडी",
    happyFarmersTitle: "😊 खुश किसान",

    // ── Modals ──
    modalGovtTitle: "🌾 योजना का प्रकार चुनें",
    modalFinTitle: "💰 वित्तीय सहायता",
    modalInsTitle: "🛡️ बीमा योजनाएं",
    labelFarmerName: "किसान का नाम",
    labelLocation: "स्थान (जिला/गांव)",
    labelSchemeType: "योजना का प्रकार",
    labelSupportType: "सहायता का प्रकार",
    labelInsType: "बीमा का प्रकार",
    placeholderName: "अपना नाम दर्ज करें",
    placeholderLoc: "जिला या गांव दर्ज करें",
    selectDefault: "-- योजना का प्रकार चुनें --",
    selectDefaultFin: "-- प्रकार चुनें --",
    optCentral: "केंद्रीय",
    optMaharashtra: "राज्य (महाराष्ट्र)",
    optAll: "सभी योजनाएं",
    btnViewSchemes: "योजनाएं देखें",
    btnViewFin: "वित्तीय योजनाएं देखें",
    btnViewIns: "बीमा देखें",

    // ── Govt Schemes page ──
    govPageTitle: "📋 सरकारी योजनाएं",
    govPageSubtitle: "केंद्र और महाराष्ट्र सरकार की कृषि योजनाएं देखें",
    filterAll: "सभी योजनाएं",
    filterCentral: "केंद्रीय",
    filterMaharashtra: "महाराष्ट्र",
    loadingText: "योजनाएं लोड हो रही हैं...",
    labelEligibility: "पात्रता:",
    labelBenefits: "लाभ:",
    labelDeadline: "अंतिम तिथि:",
    labelStatus: "सक्रिय",
    labelInactive: "निष्क्रिय",
    btnApply: "अभी आवेदन करें",
    btnDetails: "विवरण देखें",
    noSchemes: "कोई योजना नहीं मिली",

    // ── Financial page ──
    finPageTitle: "💰 वित्तीय सहायता",
    finPageSubtitle: "किसानों के लिए ऋण, सब्सिडी, अनुदान और वित्तीय सहायता",

    // ── Insurance page ──
    insPageTitle: "🛡️ बीमा योजनाएं",
    insPageSubtitle: "किसानों के लिए फसल, जीवन, पशुधन और दुर्घटना बीमा",

    // ── Scheme Detail page ──
    detailDeadline: "अंतिम तिथि:",
    detailOfficialBtn: "आधिकारिक वेबसाइट",
    detailDescTitle: "विवरण",
    detailHowTitle: "आवेदन कैसे करें",
    detailFaqTitle: "महत्वपूर्ण जानकारी",
    detailEligTitle: "पात्रता",
    detailBenTitle: "लाभ",
    detailPeriodTitle: "अवधि",
    detailStart: "शुरू:",
    detailEnd: "समाप्त:",
    detailHelpTitle: "हेल्पलाइन",
    detailDocsTitle: "आवश्यक दस्तावेज",
    detailBackBtn: "वापस",
    detailLoadingText: "योजना विवरण लोड हो रहा है...",
    detailError: "योजना नहीं मिली।",
    detailNoId: "कोई योजना आईडी नहीं दी गई।",
    detailNoApply: "अपने निकटतम कृषि कार्यालय से संपर्क करें",
    detailNoHelpline: "कृषि कार्यालय से संपर्क करें",
    detailNoDocs: "आधार कार्ड, भूमि अभिलेख",
  },

  // ══════════════════════════════════════════════════════════════════════════
  // MARATHI (मराठी)
  // ══════════════════════════════════════════════════════════════════════════
  mr: {
    // ── Navbar / base ──
    navBrand: "🌾 किसान सहायता",
    navHome: "मुख्यपृष्ठ",
    navAdmin: "अॅडमिन लॉगिन",
    helplineBar: "पीएम-किसान हेल्पलाइन: 155261 | पीएमएफबीवाय: 1800-200-7710",

    // ── Footer ──
    footerTagline: "कृषी विकासातील तुमचा विश्वासू भागीदार",
    footerSchemes: "योजना",
    footerGovt: "सरकारी योजना",
    footerFinancial: "आर्थिक सहाय्य",
    footerInsurance: "विमा",
    footerHelpline: "हेल्पलाइन",
    rightsText: "© 2025 किसान सहायता. सर्व हक्क राखीव.",

    // ── Chatbot ──
    chatbotTitle: "किसान मित्र",
    chatbotSubtitle: "कृषी सहाय्यक",
    chatbotWelcome: "नमस्कार 🙏 मी किसान मित्र आहे! मी तुम्हाला सरकारी योजना, कर्ज आणि विमा शोधण्यात मदत करू शकतो.",
    chatbotPlaceholder: "योजनांबद्दल विचारा...",

    // ── Index page ──
    welcomeText: "🌾 किसान सहायता",
    heroSubtitle: "सरकारी योजना आणि आर्थिक मदतीद्वारे शेतकऱ्यांना सक्षम बनवणे",
    searchPlaceholder: "योजना, कर्ज, विमा शोधा...",
    searchBtn: "शोधा",
    statLabelTotal: "एकूण योजना",
    statLabelGovt: "सरकारी योजना",
    statLabelFin: "आर्थिक",
    statLabelIns: "विमा",
    statLabelActive: "सक्रिय",
    featureGovtTitle: "📋 सरकारी योजना",
    featureGovtDesc: "पीएम-किसान, आरकेव्हीवाय, महाराष्ट्र राज्य योजना आणि इतर पात्रता व अर्ज तपशीलांसह पाहा.",
    featureFinTitle: "💰 आर्थिक सहाय्य",
    featureFinDesc: "केसीसी कर्ज, पीएम-केएमवाय पेन्शन, एआयएफ पायाभूत सुविधा निधी आणि कमी व्याजावर अनुदान कार्यक्रम.",
    featureInsTitle: "🛡️ विमा",
    featureInsDesc: "पीएमएफबीवाय पीक विमा, जीवन विमा आणि अनपेक्षित नुकसानापासून संरक्षण करणाऱ्या योजना.",
    quickAccessTitle: "⚡ जलद प्रवेश",
    pmkisanTitle: "पीएम-किसान योजना",
    pmkisanDesc: "₹6000/वर्ष थेट उत्पन्न सहाय्य",
    pmfbyTitle: "पीक विमा (पीएमएफबीवाय)",
    pmfbyDesc: "तुमच्या पिकांना नुकसानापासून वाचवा",
    kccTitle: "किसान क्रेडिट कार्ड",
    kccDesc: "4% व्याजावर सहज कर्ज",
    irrigationTitle: "सिंचन योजना",
    irrigationDesc: "ठिबक/तुषार सिंचनावर अनुदान",
    happyFarmersTitle: "😊 आनंदी शेतकरी",

    // ── Modals ──
    modalGovtTitle: "🌾 योजनेचा प्रकार निवडा",
    modalFinTitle: "💰 आर्थिक सहाय्य",
    modalInsTitle: "🛡️ विमा योजना",
    labelFarmerName: "शेतकऱ्याचे नाव",
    labelLocation: "स्थान (जिल्हा/गाव)",
    labelSchemeType: "योजनेचा प्रकार",
    labelSupportType: "सहाय्याचा प्रकार",
    labelInsType: "विम्याचा प्रकार",
    placeholderName: "तुमचे नाव प्रविष्ट करा",
    placeholderLoc: "जिल्हा किंवा गाव प्रविष्ट करा",
    selectDefault: "-- योजनेचा प्रकार निवडा --",
    selectDefaultFin: "-- प्रकार निवडा --",
    optCentral: "केंद्रीय",
    optMaharashtra: "राज्य (महाराष्ट्र)",
    optAll: "सर्व योजना",
    btnViewSchemes: "योजना पाहा",
    btnViewFin: "आर्थिक योजना पाहा",
    btnViewIns: "विमा पाहा",

    // ── Govt Schemes page ──
    govPageTitle: "📋 सरकारी योजना",
    govPageSubtitle: "केंद्र आणि महाराष्ट्र सरकारच्या कृषी योजना पाहा",
    filterAll: "सर्व योजना",
    filterCentral: "केंद्रीय",
    filterMaharashtra: "महाराष्ट्र",
    loadingText: "योजना लोड होत आहेत...",
    labelEligibility: "पात्रता:",
    labelBenefits: "फायदे:",
    labelDeadline: "अंतिम तारीख:",
    labelStatus: "सक्रिय",
    labelInactive: "निष्क्रिय",
    btnApply: "आता अर्ज करा",
    btnDetails: "तपशील पाहा",
    noSchemes: "कोणतीही योजना सापडली नाही",

    // ── Financial page ──
    finPageTitle: "💰 आर्थिक सहाय्य",
    finPageSubtitle: "शेतकऱ्यांसाठी कर्ज, अनुदान, अनुदान आणि आर्थिक सहाय्य",

    // ── Insurance page ──
    insPageTitle: "🛡️ विमा योजना",
    insPageSubtitle: "शेतकऱ्यांसाठी पीक, जीवन, पशुधन आणि अपघात विमा",

    // ── Scheme Detail page ──
    detailDeadline: "अंतिम तारीख:",
    detailOfficialBtn: "अधिकृत वेबसाइट",
    detailDescTitle: "वर्णन",
    detailHowTitle: "अर्ज कसा करावा",
    detailFaqTitle: "महत्त्वाची माहिती",
    detailEligTitle: "पात्रता",
    detailBenTitle: "फायदे",
    detailPeriodTitle: "कालावधी",
    detailStart: "सुरुवात:",
    detailEnd: "समाप्ती:",
    detailHelpTitle: "हेल्पलाइन",
    detailDocsTitle: "आवश्यक कागदपत्रे",
    detailBackBtn: "मागे",
    detailLoadingText: "योजनेचे तपशील लोड होत आहेत...",
    detailError: "योजना सापडली नाही.",
    detailNoId: "कोणताही योजना आयडी दिला नाही.",
    detailNoApply: "तुमच्या जवळच्या कृषी कार्यालयाशी संपर्क साधा",
    detailNoHelpline: "कृषी कार्यालयाशी संपर्क साधा",
    detailNoDocs: "आधार कार्ड, जमीन नोंदी",
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// TRANSLATION ENGINE — maps translation keys to DOM elements by page
// ─────────────────────────────────────────────────────────────────────────────

let currentLang = localStorage.getItem('kisanLang') || 'en';

// Helper: set text of element by ID
function t(id, key) {
  const el = document.getElementById(id);
  if (el) el.textContent = T(key);
}

// Helper: get translated string (falls back to English)
function T(key) {
  return (LANG[currentLang] || LANG['en'])[key] || (LANG['en'][key] || '');
}

// Helper: set placeholder by ID
function ph(id, key) {
  const el = document.getElementById(id);
  if (el) el.placeholder = T(key);
}

// Helper: set text of first element matching selector
function tq(selector, key) {
  const el = document.querySelector(selector);
  if (el) el.textContent = T(key);
}

// Helper: set all elements matching selector
function tAll(selector, key) {
  document.querySelectorAll(selector).forEach(el => el.textContent = T(key));
}

function applyAllTranslations() {
  const pg = detectPage();

  // ── SHARED (all pages) ──────────────────────────────────────────────────
  t('footerTagline', 'footerTagline');
  t('rightsText', 'rightsText');

  // Footer links
  tq('footer h6:first-of-type', 'footerSchemes');
  tq('footer a[href*="govscheme"]', 'footerGovt');
  tq('footer a[href*="financial"]', 'footerFinancial');
  tq('footer a[href*="insurance"]', 'footerInsurance');

  // Chatbot
  tq('.chatbot-header .fw-bold', 'chatbotTitle');
  tq('.chatbot-header small', 'chatbotSubtitle');
  ph('user-input', 'chatbotPlaceholder');

  // ── INDEX page ─────────────────────────────────────────────────────────
  if (pg === 'index') {
    t('welcomeText', 'welcomeText');
    t('heroSubtitle', 'heroSubtitle');
    ph('searchInput', 'searchPlaceholder');
    tq('#searchInput + button', 'searchBtn');
    tq('.btn[onclick="performSearch()"]', 'searchBtn');

    // Stat labels
    tq('#statTotal + .stat-label', 'statLabelTotal');
    tq('#statGovt + .stat-label', 'statLabelGovt');
    tq('#statFin + .stat-label', 'statLabelFin');
    tq('#statIns + .stat-label', 'statLabelIns');
    tq('#statActive + .stat-label', 'statLabelActive');
    // stat labels via iteration since they follow the stat-number divs
    const statLabels = document.querySelectorAll('.stat-label');
    const statKeys = ['statLabelTotal', 'statLabelGovt', 'statLabelFin', 'statLabelIns', 'statLabelActive'];
    statLabels.forEach((el, i) => { if (statKeys[i]) el.textContent = T(statKeys[i]); });

    // Feature cards
    const fcards = document.querySelectorAll('.feature-card');
    if (fcards[0]) {
      fcards[0].querySelector('h3').textContent = T('featureGovtTitle');
      fcards[0].querySelector('p').textContent = T('featureGovtDesc');
    }
    if (fcards[1]) {
      fcards[1].querySelector('h3').textContent = T('featureFinTitle');
      fcards[1].querySelector('p').textContent = T('featureFinDesc');
    }
    if (fcards[2]) {
      fcards[2].querySelector('h3').textContent = T('featureInsTitle');
      fcards[2].querySelector('p').textContent = T('featureInsDesc');
    }

    // Quick access title
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(el => {
      if (el.textContent.includes('Quick') || el.textContent.includes('त्वरित') || el.textContent.includes('जलद'))
        el.textContent = T('quickAccessTitle');
      if (el.textContent.includes('Happy') || el.textContent.includes('खुश') || el.textContent.includes('आनंदी'))
        el.textContent = T('happyFarmersTitle');
    });

    // Quick link cards
    const linkCards = document.querySelectorAll('.link-card');
    const linkData = [
      ['pmkisanTitle', 'pmkisanDesc'],
      ['pmfbyTitle', 'pmfbyDesc'],
      ['kccTitle', 'kccDesc'],
      ['irrigationTitle', 'irrigationDesc']
    ];
    linkCards.forEach((card, i) => {
      if (!linkData[i]) return;
      const h5 = card.querySelector('h5');
      const p = card.querySelector('p');
      if (h5) h5.textContent = T(linkData[i][0]);
      if (p) p.textContent = T(linkData[i][1]);
    });

    // Modal titles
    tq('#schemeModal .modal-title', 'modalGovtTitle');
    tq('#financialModal .modal-title', 'modalFinTitle');
    tq('#insuranceModal .modal-title', 'modalInsTitle');

    // Modal form labels
    const schemeLabels = document.querySelectorAll('#schemeModal .form-label');
    if (schemeLabels[0]) schemeLabels[0].textContent = T('labelFarmerName');
    if (schemeLabels[1]) schemeLabels[1].textContent = T('labelLocation');
    if (schemeLabels[2]) schemeLabels[2].textContent = T('labelSchemeType');

    const finLabels = document.querySelectorAll('#financialModal .form-label');
    if (finLabels[0]) finLabels[0].textContent = T('labelFarmerName');
    if (finLabels[1]) finLabels[1].textContent = T('labelLocation');
    if (finLabels[2]) finLabels[2].textContent = T('labelSupportType');

    const insLabels = document.querySelectorAll('#insuranceModal .form-label');
    if (insLabels[0]) insLabels[0].textContent = T('labelFarmerName');
    if (insLabels[1]) insLabels[1].textContent = T('labelLocation');
    if (insLabels[2]) insLabels[2].textContent = T('labelInsType');

    // Modal placeholders
    ph('farmerName', 'placeholderName');
    ph('farmerLocation', 'placeholderLoc');
    ph('financialFarmerName', 'placeholderName');
    ph('financialLocation', 'placeholderLoc');
    ph('insuranceFarmerName', 'placeholderName');
    ph('insuranceLocation', 'placeholderLoc');

    // Dropdown options
    translateSelectOptions('schemeType',
      ['', T('optCentral'), T('optMaharashtra'), T('optAll')],
      T('selectDefault'));
    translateSelectOptions('financialType',
      ['', T('optCentral'), T('optMaharashtra'), T('optAll')],
      T('selectDefaultFin'));
    translateSelectOptions('insuranceType',
      ['', T('optCentral'), T('optMaharashtra'), T('optAll')],
      T('selectDefaultFin'));

    // Modal submit buttons
    const schemBtn = document.querySelector('#schemeForm button[type="submit"]');
    const finBtn = document.querySelector('#financialForm button[type="submit"]');
    const insBtn = document.querySelector('#insuranceForm button[type="submit"]');
    if (schemBtn) schemBtn.innerHTML = T('btnViewSchemes') + ' <i class="fas fa-arrow-right ms-1"></i>';
    if (finBtn) finBtn.innerHTML = T('btnViewFin') + ' <i class="fas fa-arrow-right ms-1"></i>';
    if (insBtn) insBtn.innerHTML = T('btnViewIns') + ' <i class="fas fa-arrow-right ms-1"></i>';
  }

  // ── GOVSCHEME page ─────────────────────────────────────────────────────
  if (pg === 'govscheme') {
    tq('.scheme-title', 'govPageTitle');
    t('selectedTypeText', 'govPageSubtitle');
    translateFilterBtns();
  }

  // ── FINANCIAL page ─────────────────────────────────────────────────────
  if (pg === 'financial') {
    tq('.scheme-title', 'finPageTitle');
    tq('.scheme-subtitle', 'finPageSubtitle');
    translateFilterBtns();
  }

  // ── INSURANCE page ─────────────────────────────────────────────────────
  if (pg === 'insurance') {
    tq('.scheme-title', 'insPageTitle');
    tq('.scheme-subtitle', 'insPageSubtitle');
    translateFilterBtns();
  }

  // ── SCHEME DETAIL page ─────────────────────────────────────────────────
  // (detail text is dynamic — handled by translateDetailCard() called after render)
}

// Translate filter buttons (All / Central / Maharashtra)
function translateFilterBtns() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    const v = btn.dataset.type;
    if (v === 'All') btn.textContent = T('filterAll');
    if (v === 'Central') btn.textContent = T('filterCentral');
    if (v === 'Maharashtra') btn.textContent = T('filterMaharashtra');
  });
}

// Translate a <select>'s options (keeps values intact)
function translateSelectOptions(id, texts, defaultText) {
  const sel = document.getElementById(id);
  if (!sel) return;
  const opts = sel.querySelectorAll('option');
  if (opts[0]) opts[0].textContent = defaultText;
  texts.slice(1).forEach((txt, i) => {
    if (opts[i + 1]) opts[i + 1].textContent = txt;
  });
}

// Translate scheme cards after they are dynamically rendered
function translateSchemeCards(container) {
  if (!container) return;
  container.querySelectorAll('.scheme-card-modern').forEach(card => {
    // Bold label inside <p><b>...</b>
    card.querySelectorAll('p b').forEach(b => {
      const raw = b.textContent.trim();
      if (raw === 'Eligibility:') b.textContent = T('labelEligibility');
      if (raw === 'Benefits:') b.textContent = T('labelBenefits');
      if (raw === 'Deadline:') b.textContent = T('labelDeadline');
      // Hindi/Marathi — idempotent, already translated value
    });
    // Status badge text
    card.querySelectorAll('.badge').forEach(badge => {
      if (badge.textContent.trim() === 'Active') badge.textContent = T('labelStatus');
      if (badge.textContent.trim() === 'Inactive') badge.textContent = T('labelInactive');
    });
    // Buttons
    const applyBtn = card.querySelector('.btn-apply');
    const detailBtn = card.querySelector('.btn-details');
    if (applyBtn) applyBtn.textContent = T('btnApply');
    if (detailBtn) detailBtn.textContent = T('btnDetails');
  });
}

// Translate the scheme detail card after it renders
function translateDetailCard(container) {
  if (!container) return;
  // Section headings
  container.querySelectorAll('h5.text-success, h6.text-success').forEach(h => {
    const txt = h.textContent.trim();
    if (txt.includes('Description')) h.innerHTML = '<i class="fas fa-info-circle me-2"></i>' + T('detailDescTitle');
    if (txt.includes('How to Apply')) h.innerHTML = '<i class="fas fa-list-ol me-2"></i>' + T('detailHowTitle');
    if (txt.includes('Important')) h.innerHTML = '<i class="fas fa-question-circle me-2"></i>' + T('detailFaqTitle');
    if (txt.includes('Eligibility')) h.innerHTML = '<i class="fas fa-check-circle me-2"></i>' + T('detailEligTitle');
    if (txt.includes('Benefits')) h.innerHTML = '<i class="fas fa-gift me-2"></i>' + T('detailBenTitle');
    if (txt.includes('Period')) h.innerHTML = '<i class="fas fa-calendar me-2"></i>' + T('detailPeriodTitle');
    if (txt.includes('Helpline')) h.innerHTML = '<i class="fas fa-phone me-2"></i>' + T('detailHelpTitle');
    if (txt.includes('Documents')) h.innerHTML = '<i class="fas fa-file-alt me-2"></i>' + T('detailDocsTitle');
  });
  // Official Website button
  const btn = container.querySelector('.btn-warning');
  if (btn) btn.innerHTML = '<i class="fas fa-external-link-alt me-1"></i>' + T('detailOfficialBtn');
  // Back button in navbar
  const backBtn = document.querySelector('.nav-home-btn');
  if (backBtn && (backBtn.textContent.includes('Back') || backBtn.textContent.includes('मागे') || backBtn.textContent.includes('वापस')))
    backBtn.innerHTML = '<i class="fas fa-arrow-left me-1"></i>' + T('detailBackBtn');
}

// Detect which page we're on based on body or URL
function detectPage() {
  const path = window.location.pathname;
  if (path === '/' || path.includes('index')) return 'index';
  if (path.includes('govscheme')) return 'govscheme';
  if (path.includes('financial')) return 'financial';
  if (path.includes('insurance')) return 'insurance';
  if (path.includes('scheme_detail') || path.includes('scheme_detail')) return 'detail';
  // Fallback: check for key elements
  if (document.getElementById('welcomeText')) return 'index';
  if (document.getElementById('schemeContainer')) return 'govscheme';
  if (document.getElementById('financialContainer')) return 'financial';
  if (document.getElementById('insuranceContainer')) return 'insurance';
  if (document.getElementById('schemeDetailContainer')) return 'detail';
  return 'index';
}

// ─────────────────────────────────────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', function () {
  // Sync dropdowns
  ['languageSwitcher', 'chatLangSelect'].forEach(function (id) {
    const el = document.getElementById(id);
    if (el) el.value = currentLang;
  });

  // Remove unsupported language options (keep only en, hi, mr)
  ['languageSwitcher', 'chatLangSelect'].forEach(function (id) {
    const sel = document.getElementById(id);
    if (!sel) return;
    sel.querySelectorAll('option').forEach(function (opt) {
      if (!['en', 'hi', 'mr'].includes(opt.value)) opt.remove();
    });
  });

  // Apply translations on load
  applyAllTranslations();

  // Page language switcher listener
  const pageSwitcher = document.getElementById('languageSwitcher');
  if (pageSwitcher) {
    pageSwitcher.addEventListener('change', function () {
      currentLang = this.value;
      localStorage.setItem('kisanLang', currentLang);
      const chatSw = document.getElementById('chatLangSelect');
      if (chatSw) chatSw.value = currentLang;
      applyAllTranslations();
    });
  }

  // Chatbot language selector
  const chatSwitcher = document.getElementById('chatLangSelect');
  if (chatSwitcher) {
    chatSwitcher.addEventListener('change', function () {
      currentLang = this.value;
      localStorage.setItem('kisanLang', currentLang);
      const pageSw = document.getElementById('languageSwitcher');
      if (pageSw) pageSw.value = currentLang;
    });
  }
});

// ─────────────────────────────────────────────────────────────────────────────
// PUBLIC API — called by inline page scripts after dynamic renders
// ─────────────────────────────────────────────────────────────────────────────
window.kisanLang = {
  // Call after scheme cards are rendered (govscheme / financial / insurance pages)
  translateNewContent: function (container) {
    translateSchemeCards(container);
  },
  // Call after scheme detail card renders (scheme_detail page)
  translateDetailCard: function (container) {
    translateDetailCard(container);
  },
  getCurrent: function () { return currentLang; }
};