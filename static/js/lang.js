// ═══════════════════════════════════════════════════════════════════
//  KISAN SAHAYATA – Universal Multilanguage Engine
//  Works on ALL pages: index, govscheme, financial, insurance,
//  scheme_detail. Uses LibreTranslate via Flask proxy /api/translate
//  Falls back to built-in static translations when API unavailable.
// ═══════════════════════════════════════════════════════════════════

// ── 1. FULL STATIC TRANSLATIONS (all UI strings for all pages) ──────
const UI = {
  en: {
    // Navbar / common
    home: "Home",
    back: "Back",
    adminLogin: "Admin Login",
    footerTagline: "Your trusted partner in agricultural growth",
    footerHelp: "Helpline",
    rights: "© 2025 Kisan Sahayata. All rights reserved.",

    // Hero
    heroTitle: "🌾 Kisan Sahayata",
    heroSubtitle: "Empowering Farmers with Government Schemes & Financial Support",
    searchPlaceholder: "Search schemes, loans, insurance...",
    searchBtn: "Search",

    // Stats
    totalSchemes: "Total Schemes",
    govtSchemes: "Govt Schemes",
    financial: "Financial",
    insurance: "Insurance",
    active: "Active",

    // Feature cards
    govtTitle: "📋 Government Schemes",
    govtDesc: "Explore PM-KISAN, RKVY, Maharashtra state schemes with eligibility and application details.",
    finTitle: "💰 Financial Support",
    finDesc: "Discover KCC loans, PM-KMY pension, AIF infrastructure fund and subsidy programs.",
    insTitle: "🛡️ Insurance",
    insDesc: "Get PMFBY crop insurance, life insurance and relief schemes to protect against losses.",

    // Quick links
    quickAccess: "⚡ Quick Access",
    pmKisanTitle: "PM-KISAN Scheme",
    pmKisanDesc: "Direct income support of ₹6000/year",
    pmfbyTitle: "Crop Insurance (PMFBY)",
    pmfbyDesc: "Protect your crops against losses",
    kccTitle: "Kisan Credit Card",
    kccDesc: "Easy loans at 4% interest",
    irrTitle: "Irrigation Schemes",
    irrDesc: "Subsidy for drip/sprinkler systems",

    // Testimonials
    happyFarmers: "😊 Happy Farmers",
    t1: '"Got PM-KISAN benefits easily through this portal"',
    t2: '"Understood KCC loan process in my language"',
    t3: '"Applied for PMFBY crop insurance in Marathi, very helpful!"',

    // Scheme listing pages
    govtPageTitle: "Government Schemes",
    govtPageSubtitle: "Explore Central & Maharashtra Government Agricultural Schemes",
    finPageTitle: "Financial Support",
    finPageSubtitle: "Loans, subsidies, grants & financial assistance for farmers",
    insPageTitle: "Insurance Schemes",
    insPageSubtitle: "Crop, life, livestock & accident insurance for farmers",

    // Filter buttons
    filterAll: "All Schemes",
    filterCentral: "Central",
    filterMaharashtra: "Maharashtra",

    // Scheme card labels
    eligibility: "Eligibility",
    benefits: "Benefits",
    deadline: "Deadline",
    ongoing: "Ongoing",
    applyNow: "Apply Now",
    viewDetails: "View Details",
    loading: "Loading schemes...",
    noSchemes: "No schemes found",
    seeDetails: "See details",

    // Scheme detail page
    description: "Description",
    howToApply: "How to Apply",
    importantInfo: "Important Information",
    eligibilityLabel: "Eligibility",
    benefitsLabel: "Benefits",
    period: "Period",
    helpline: "Helpline",
    documentsRequired: "Documents Required",
    officialWebsite: "Official Website",
    startDate: "Start",
    endDate: "End",

    // Modals
    farmerDetails: "🌾 Select Scheme Type",
    farmerName: "Farmer Name",
    farmerNamePH: "Enter your name",
    location: "Location (District/Village)",
    locationPH: "Enter district or village",
    schemeType: "Scheme Type",
    selectType: "-- Select Scheme Type --",
    submitViewSchemes: "View Schemes →",
    financialSupport: "💰 Financial Support",
    supportType: "Support Type",
    selectSupport: "-- Select Type --",
    submitViewFin: "View Financial Schemes →",
    insuranceSchemes: "🛡️ Insurance Schemes",
    insuranceType: "Insurance Type",
    submitViewIns: "View Insurance →",

    // Chatbot
    chatbotWelcome: "Namaskar 🙏 I am Kisan Mitra! I can help you find government schemes, loans, and insurance. Ask me anything!",
    chatbotPH: "Ask about schemes...",
    chatSend: "Send",
  },

  hi: {
    home: "होम",
    back: "वापस",
    adminLogin: "एडमिन लॉगिन",
    footerTagline: "कृषि विकास में आपका विश्वसनीय साथी",
    footerHelp: "हेल्पलाइन",
    rights: "© 2025 किसान सहायता। सर्वाधिकार सुरक्षित।",
    heroTitle: "🌾 किसान सहायता",
    heroSubtitle: "सरकारी योजनाओं और वित्तीय सहायता से किसानों को सशक्त बनाना",
    searchPlaceholder: "योजनाएं, ऋण, बीमा खोजें...",
    searchBtn: "खोजें",
    totalSchemes: "कुल योजनाएं",
    govtSchemes: "सरकारी योजनाएं",
    financial: "वित्तीय",
    insurance: "बीमा",
    active: "सक्रिय",
    govtTitle: "📋 सरकारी योजनाएं",
    govtDesc: "पीएम-किसान, आरकेवीवाई, महाराष्ट्र की योजनाओं की जानकारी पाएं।",
    finTitle: "💰 वित्तीय सहायता",
    finDesc: "केसीसी लोन, पीएम-केएमवाई पेंशन, एआईएफ और सब्सिडी प्रोग्राम खोजें।",
    insTitle: "🛡️ बीमा",
    insDesc: "पीएमएफबीवाई फसल बीमा और जीवन बीमा योजनाएं जानें।",
    quickAccess: "⚡ त्वरित पहुंच",
    pmKisanTitle: "पीएम-किसान योजना",
    pmKisanDesc: "₹6000/वर्ष का सीधा आय समर्थन",
    pmfbyTitle: "फसल बीमा (पीएमएफबीवाई)",
    pmfbyDesc: "अपनी फसलों को नुकसान से बचाएं",
    kccTitle: "किसान क्रेडिट कार्ड",
    kccDesc: "4% ब्याज पर आसान ऋण",
    irrTitle: "सिंचाई योजनाएं",
    irrDesc: "ड्रिप/स्प्रिंकलर सिस्टम के लिए सब्सिडी",
    happyFarmers: "😊 खुश किसान",
    t1: '"इस पोर्टल से PM-KISAN लाभ आसानी से मिला"',
    t2: '"अपनी भाषा में KCC लोन प्रक्रिया समझी"',
    t3: '"मराठी में PMFBY के लिए आवेदन किया, बहुत उपयोगी!"',
    govtPageTitle: "सरकारी योजनाएं",
    govtPageSubtitle: "केंद्रीय और महाराष्ट्र सरकारी कृषि योजनाएं देखें",
    finPageTitle: "वित्तीय सहायता",
    finPageSubtitle: "किसानों के लिए ऋण, सब्सिडी और अनुदान",
    insPageTitle: "बीमा योजनाएं",
    insPageSubtitle: "किसानों के लिए फसल, जीवन और दुर्घटना बीमा",
    filterAll: "सभी योजनाएं",
    filterCentral: "केंद्रीय",
    filterMaharashtra: "महाराष्ट्र",
    eligibility: "पात्रता",
    benefits: "लाभ",
    deadline: "अंतिम तिथि",
    ongoing: "जारी",
    applyNow: "अभी आवेदन करें",
    viewDetails: "विवरण देखें",
    loading: "योजनाएं लोड हो रही हैं...",
    noSchemes: "कोई योजना नहीं मिली",
    seeDetails: "विवरण देखें",
    description: "विवरण",
    howToApply: "आवेदन कैसे करें",
    importantInfo: "महत्वपूर्ण जानकारी",
    eligibilityLabel: "पात्रता",
    benefitsLabel: "लाभ",
    period: "अवधि",
    helpline: "हेल्पलाइन",
    documentsRequired: "आवश्यक दस्तावेज",
    officialWebsite: "आधिकारिक वेबसाइट",
    startDate: "शुरुआत",
    endDate: "अंत",
    farmerDetails: "🌾 योजना प्रकार चुनें",
    farmerName: "किसान का नाम",
    farmerNamePH: "अपना नाम दर्ज करें",
    location: "स्थान (जिला/गांव)",
    locationPH: "जिला या गांव दर्ज करें",
    schemeType: "योजना प्रकार",
    selectType: "-- योजना प्रकार चुनें --",
    submitViewSchemes: "योजनाएं देखें →",
    financialSupport: "💰 वित्तीय सहायता",
    supportType: "सहायता प्रकार",
    selectSupport: "-- प्रकार चुनें --",
    submitViewFin: "वित्तीय योजनाएं देखें →",
    insuranceSchemes: "🛡️ बीमा योजनाएं",
    insuranceType: "बीमा प्रकार",
    submitViewIns: "बीमा देखें →",
    chatbotWelcome: "नमस्कार 🙏 मैं किसान मित्र हूं! मैं आपको सरकारी योजनाएं, ऋण और बीमा खोजने में मदद कर सकता हूं।",
    chatbotPH: "योजनाओं के बारे में पूछें...",
    chatSend: "भेजें",
  },

  mr: {
    home: "होम",
    back: "मागे",
    adminLogin: "अ‍ॅडमिन लॉगिन",
    footerTagline: "कृषी विकासातील तुमचा विश्वासू भागीदार",
    footerHelp: "हेल्पलाइन",
    rights: "© 2025 शेतकरी सहाय्यता. सर्व हक्क राखीव.",
    heroTitle: "🌾 शेतकरी सहाय्यता",
    heroSubtitle: "सरकारी योजना आणि आर्थिक मदतीद्वारे शेतकऱ्यांना सक्षम बनवणे",
    searchPlaceholder: "योजना, कर्ज, विमा शोधा...",
    searchBtn: "शोधा",
    totalSchemes: "एकूण योजना",
    govtSchemes: "सरकारी योजना",
    financial: "आर्थिक",
    insurance: "विमा",
    active: "सक्रिय",
    govtTitle: "📋 सरकारी योजना",
    govtDesc: "पीएम-किसान, आरकेव्हीवाय, महाराष्ट्र योजनांची माहिती मिळवा.",
    finTitle: "💰 आर्थिक मदत",
    finDesc: "केसीसी कर्ज, पीएम-केएमवाय पेन्शन, एआयएफ आणि अनुदान कार्यक्रम.",
    insTitle: "🛡️ विमा",
    insDesc: "पीएमएफबीवाय पीक विमा आणि जीवन विमा योजना जाणून घ्या.",
    quickAccess: "⚡ जलद प्रवेश",
    pmKisanTitle: "पीएम-किसान योजना",
    pmKisanDesc: "₹6000/वर्ष थेट उत्पन्न सहाय्य",
    pmfbyTitle: "पीक विमा (पीएमएफबीवाय)",
    pmfbyDesc: "तुमच्या पिकांचे नुकसानापासून संरक्षण",
    kccTitle: "किसान क्रेडिट कार्ड",
    kccDesc: "4% व्याजदरावर सोपे कर्ज",
    irrTitle: "सिंचन योजना",
    irrDesc: "ठिबक/फवारणी प्रणालीसाठी अनुदान",
    happyFarmers: "😊 समाधानी शेतकरी",
    t1: '"या पोर्टलद्वारे PM-KISAN लाभ सहज मिळाला"',
    t2: '"माझ्या भाषेत KCC कर्ज प्रक्रिया समजली"',
    t3: '"मराठीत PMFBY साठी अर्ज केला, खूप उपयुक्त!"',
    govtPageTitle: "सरकारी योजना",
    govtPageSubtitle: "केंद्र आणि महाराष्ट्र सरकारच्या कृषी योजना पाहा",
    finPageTitle: "आर्थिक मदत",
    finPageSubtitle: "शेतकऱ्यांसाठी कर्ज, अनुदान आणि आर्थिक सहाय्य",
    insPageTitle: "विमा योजना",
    insPageSubtitle: "शेतकऱ्यांसाठी पीक, जीवन आणि अपघात विमा",
    filterAll: "सर्व योजना",
    filterCentral: "केंद्रीय",
    filterMaharashtra: "महाराष्ट्र",
    eligibility: "पात्रता",
    benefits: "लाभ",
    deadline: "अंतिम तारीख",
    ongoing: "चालू",
    applyNow: "अर्ज करा",
    viewDetails: "तपशील पाहा",
    loading: "योजना लोड होत आहेत...",
    noSchemes: "कोणतीही योजना सापडली नाही",
    seeDetails: "तपशील पाहा",
    description: "वर्णन",
    howToApply: "अर्ज कसा करावा",
    importantInfo: "महत्त्वाची माहिती",
    eligibilityLabel: "पात्रता",
    benefitsLabel: "लाभ",
    period: "कालावधी",
    helpline: "हेल्पलाइन",
    documentsRequired: "आवश्यक कागदपत्रे",
    officialWebsite: "अधिकृत वेबसाइट",
    startDate: "सुरुवात",
    endDate: "समाप्ती",
    farmerDetails: "🌾 योजना प्रकार निवडा",
    farmerName: "शेतकऱ्याचे नाव",
    farmerNamePH: "तुमचे नाव टाका",
    location: "स्थान (जिल्हा/गाव)",
    locationPH: "जिल्हा किंवा गाव टाका",
    schemeType: "योजना प्रकार",
    selectType: "-- योजना प्रकार निवडा --",
    submitViewSchemes: "योजना पाहा →",
    financialSupport: "💰 आर्थिक मदत",
    supportType: "मदत प्रकार",
    selectSupport: "-- प्रकार निवडा --",
    submitViewFin: "आर्थिक योजना पाहा →",
    insuranceSchemes: "🛡️ विमा योजना",
    insuranceType: "विमा प्रकार",
    submitViewIns: "विमा पाहा →",
    chatbotWelcome: "नमस्कार 🙏 मी किसान मित्र आहे! सरकारी योजना, कर्ज आणि विमा शोधण्यात मी तुम्हाला मदत करतो.",
    chatbotPH: "योजनांबद्दल विचारा...",
    chatSend: "पाठवा",
  },

  pa: {
    home: "ਹੋਮ", back: "ਵਾਪਸ", adminLogin: "ਐਡਮਿਨ ਲੌਗਿਨ",
    footerTagline: "ਖੇਤੀਬਾੜੀ ਵਿਕਾਸ ਵਿੱਚ ਤੁਹਾਡਾ ਭਰੋਸੇਯੋਗ ਭਾਈਵਾਲ",
    footerHelp: "ਹੈਲਪਲਾਈਨ", rights: "© 2025 ਕਿਸਾਨ ਸਹਾਇਤਾ। ਸਾਰੇ ਅਧਿਕਾਰ ਸੁਰੱਖਿਅਤ।",
    heroTitle: "🌾 ਕਿਸਾਨ ਸਹਾਇਤਾ",
    heroSubtitle: "ਸਰਕਾਰੀ ਯੋਜਨਾਵਾਂ ਅਤੇ ਵਿੱਤੀ ਸਹਾਇਤਾ ਨਾਲ ਕਿਸਾਨਾਂ ਨੂੰ ਸਸ਼ਕਤ ਕਰਨਾ",
    searchPlaceholder: "ਯੋਜਨਾਵਾਂ, ਕਰਜ਼, ਬੀਮਾ ਖੋਜੋ...", searchBtn: "ਖੋਜੋ",
    totalSchemes: "ਕੁੱਲ ਯੋਜਨਾਵਾਂ", govtSchemes: "ਸਰਕਾਰੀ ਯੋਜਨਾਵਾਂ",
    financial: "ਵਿੱਤੀ", insurance: "ਬੀਮਾ", active: "ਸਰਗਰਮ",
    govtTitle: "📋 ਸਰਕਾਰੀ ਯੋਜਨਾਵਾਂ", finTitle: "💰 ਵਿੱਤੀ ਸਹਾਇਤਾ", insTitle: "🛡️ ਬੀਮਾ",
    govtDesc: "ਪੀਐਮ-ਕਿਸਾਨ, ਆਰਕੇਵੀਵਾਈ ਅਤੇ ਹੋਰ ਯੋਜਨਾਵਾਂ ਜਾਣੋ।",
    finDesc: "ਕੇਸੀਸੀ ਕਰਜ਼, ਪੈਨਸ਼ਨ ਅਤੇ ਸਬਸਿਡੀ ਪ੍ਰੋਗਰਾਮ।",
    insDesc: "ਪੀਐਮਐਫਬੀਵਾਈ ਫਸਲ ਬੀਮਾ ਅਤੇ ਜੀਵਨ ਬੀਮਾ।",
    quickAccess: "⚡ ਤੇਜ਼ ਪਹੁੰਚ",
    pmKisanTitle: "ਪੀਐਮ-ਕਿਸਾਨ", pmKisanDesc: "₹6000/ਸਾਲ ਸਿੱਧੀ ਆਮਦਨੀ ਸਹਾਇਤਾ",
    pmfbyTitle: "ਫਸਲ ਬੀਮਾ", pmfbyDesc: "ਆਪਣੀਆਂ ਫਸਲਾਂ ਨੂੰ ਬਚਾਓ",
    kccTitle: "ਕਿਸਾਨ ਕ੍ਰੈਡਿਟ ਕਾਰਡ", kccDesc: "4% ਵਿਆਜ 'ਤੇ ਆਸਾਨ ਕਰਜ਼",
    irrTitle: "ਸਿੰਚਾਈ ਯੋਜਨਾਵਾਂ", irrDesc: "ਡ੍ਰਿਪ/ਸਪ੍ਰਿੰਕਲਰ ਲਈ ਸਬਸਿਡੀ",
    happyFarmers: "😊 ਖੁਸ਼ ਕਿਸਾਨ",
    t1: '"ਇਸ ਪੋਰਟਲ ਤੋਂ PM-KISAN ਲਾਭ ਆਸਾਨੀ ਨਾਲ ਮਿਲਿਆ"',
    t2: '"ਆਪਣੀ ਭਾਸ਼ਾ ਵਿੱਚ KCC ਕਰਜ਼ ਪ੍ਰਕਿਰਿਆ ਸਮਝੀ"',
    t3: '"PMFBY ਲਈ ਅਰਜ਼ੀ ਦਿੱਤੀ, ਬਹੁਤ ਮਦਦਗਾਰ!"',
    govtPageTitle: "ਸਰਕਾਰੀ ਯੋਜਨਾਵਾਂ", govtPageSubtitle: "ਕੇਂਦਰ ਅਤੇ ਮਹਾਰਾਸ਼ਟਰ ਸਰਕਾਰੀ ਖੇਤੀ ਯੋਜਨਾਵਾਂ",
    finPageTitle: "ਵਿੱਤੀ ਸਹਾਇਤਾ", finPageSubtitle: "ਕਿਸਾਨਾਂ ਲਈ ਕਰਜ਼, ਸਬਸਿਡੀ ਅਤੇ ਗ੍ਰਾਂਟ",
    insPageTitle: "ਬੀਮਾ ਯੋਜਨਾਵਾਂ", insPageSubtitle: "ਕਿਸਾਨਾਂ ਲਈ ਫਸਲ, ਜੀਵਨ ਅਤੇ ਦੁਰਘਟਨਾ ਬੀਮਾ",
    filterAll: "ਸਾਰੀਆਂ ਯੋਜਨਾਵਾਂ", filterCentral: "ਕੇਂਦਰੀ", filterMaharashtra: "ਮਹਾਰਾਸ਼ਟਰ",
    eligibility: "ਯੋਗਤਾ", benefits: "ਲਾਭ", deadline: "ਆਖਰੀ ਮਿਤੀ", ongoing: "ਚੱਲ ਰਿਹਾ",
    applyNow: "ਹੁਣੇ ਅਰਜ਼ੀ ਦਿਓ", viewDetails: "ਵੇਰਵੇ ਦੇਖੋ",
    loading: "ਯੋਜਨਾਵਾਂ ਲੋਡ ਹੋ ਰਹੀਆਂ ਹਨ...", noSchemes: "ਕੋਈ ਯੋਜਨਾ ਨਹੀਂ ਮਿਲੀ", seeDetails: "ਵੇਰਵੇ ਦੇਖੋ",
    description: "ਵੇਰਵਾ", howToApply: "ਅਰਜ਼ੀ ਕਿਵੇਂ ਦੇਣੀ", importantInfo: "ਮਹੱਤਵਪੂਰਨ ਜਾਣਕਾਰੀ",
    eligibilityLabel: "ਯੋਗਤਾ", benefitsLabel: "ਲਾਭ", period: "ਸਮਾਂ", helpline: "ਹੈਲਪਲਾਈਨ",
    documentsRequired: "ਲੋੜੀਂਦੇ ਦਸਤਾਵੇਜ਼", officialWebsite: "ਅਧਿਕਾਰਿਕ ਵੈੱਬਸਾਈਟ", startDate: "ਸ਼ੁਰੂਆਤ", endDate: "ਅੰਤ",
    farmerDetails: "🌾 ਯੋਜਨਾ ਪ੍ਰਕਾਰ ਚੁਣੋ", farmerName: "ਕਿਸਾਨ ਦਾ ਨਾਮ", farmerNamePH: "ਆਪਣਾ ਨਾਮ ਦਰਜ ਕਰੋ",
    location: "ਸਥਾਨ (ਜ਼ਿਲ੍ਹਾ/ਪਿੰਡ)", locationPH: "ਜ਼ਿਲ੍ਹਾ ਜਾਂ ਪਿੰਡ ਦਰਜ ਕਰੋ",
    schemeType: "ਯੋਜਨਾ ਪ੍ਰਕਾਰ", selectType: "-- ਯੋਜਨਾ ਪ੍ਰਕਾਰ ਚੁਣੋ --",
    submitViewSchemes: "ਯੋਜਨਾਵਾਂ ਦੇਖੋ →", financialSupport: "💰 ਵਿੱਤੀ ਸਹਾਇਤਾ",
    supportType: "ਸਹਾਇਤਾ ਪ੍ਰਕਾਰ", selectSupport: "-- ਪ੍ਰਕਾਰ ਚੁਣੋ --",
    submitViewFin: "ਵਿੱਤੀ ਯੋਜਨਾਵਾਂ ਦੇਖੋ →", insuranceSchemes: "🛡️ ਬੀਮਾ ਯੋਜਨਾਵਾਂ",
    insuranceType: "ਬੀਮਾ ਪ੍ਰਕਾਰ", submitViewIns: "ਬੀਮਾ ਦੇਖੋ →",
    chatbotWelcome: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ 🙏 ਮੈਂ ਕਿਸਾਨ ਮਿੱਤਰ ਹਾਂ! ਸਰਕਾਰੀ ਯੋਜਨਾਵਾਂ, ਕਰਜ਼ ਅਤੇ ਬੀਮਾ ਖੋਜਣ ਵਿੱਚ ਮੈਂ ਮਦਦ ਕਰਦਾ ਹਾਂ।",
    chatbotPH: "ਯੋਜਨਾਵਾਂ ਬਾਰੇ ਪੁੱਛੋ...", chatSend: "ਭੇਜੋ",
  },

  te: {
    home: "హోమ్", back: "వెనుకకు", adminLogin: "అడ్మిన్ లాగిన్",
    footerTagline: "వ్యవసాయ వృద్ధిలో మీ నమ్మకమైన భాగస్వామి",
    footerHelp: "హెల్ప్‌లైన్", rights: "© 2025 కిసాన్ సహాయత. అన్ని హక్కులు రక్షించబడ్డాయి.",
    heroTitle: "🌾 కిసాన్ సహాయత",
    heroSubtitle: "ప్రభుత్వ పథకాలు మరియు ఆర్థిక మద్దతుతో రైతులను సాధికారత చేయడం",
    searchPlaceholder: "పథకాలు, రుణాలు, బీమా వెతకండి...", searchBtn: "వెతకండి",
    totalSchemes: "మొత్తం పథకాలు", govtSchemes: "ప్రభుత్వ పథకాలు",
    financial: "ఆర్థిక", insurance: "బీమా", active: "చురుకుగా",
    govtTitle: "📋 ప్రభుత్వ పథకాలు", finTitle: "💰 ఆర్థిక మద్దతు", insTitle: "🛡️ బీమా",
    govtDesc: "PM-కిసాన్, RKVY మరియు మహారాష్ట్ర పథకాల సమాచారం తెలుసుకోండి.",
    finDesc: "KCC రుణాలు, పెన్షన్ మరియు సబ్సిడీ పథకాలు కనుగొనండి.",
    insDesc: "PMFBY పంట బీమా మరియు జీవిత బీమా పథకాలు తెలుసుకోండి.",
    quickAccess: "⚡ త్వరిత యాక్సెస్",
    pmKisanTitle: "PM-కిసాన్ పథకం", pmKisanDesc: "₹6000/సంవత్సరం ప్రత్యక్ష ఆదాయ మద్దతు",
    pmfbyTitle: "పంట బీమా (PMFBY)", pmfbyDesc: "మీ పంటలను నష్టాల నుండి రక్షించండి",
    kccTitle: "కిసాన్ క్రెడిట్ కార్డ్", kccDesc: "4% వడ్డీపై సులభ రుణాలు",
    irrTitle: "నీటిపారుదల పథకాలు", irrDesc: "డ్రిప్/స్ప్రింక్లర్ సిస్టమ్‌లకు సబ్సిడీ",
    happyFarmers: "😊 సంతోషకరమైన రైతులు",
    t1: '"ఈ పోర్టల్ ద్వారా PM-KISAN ప్రయోజనాలు సులభంగా పొందాను"',
    t2: '"నా భాషలో KCC రుణ ప్రక్రియ అర్థమైంది"',
    t3: '"PMFBY కోసం తెలుగులో దరఖాస్తు చేశాను, చాలా ఉపయోగకరం!"',
    govtPageTitle: "ప్రభుత్వ పథకాలు", govtPageSubtitle: "కేంద్ర మరియు మహారాష్ట్ర వ్యవసాయ పథకాలు",
    finPageTitle: "ఆర్థిక మద్దతు", finPageSubtitle: "రైతులకు రుణాలు, సబ్సిడీలు మరియు గ్రాంట్లు",
    insPageTitle: "బీమా పథకాలు", insPageSubtitle: "రైతులకు పంట, జీవిత మరియు ప్రమాద బీమా",
    filterAll: "అన్ని పథకాలు", filterCentral: "కేంద్ర", filterMaharashtra: "మహారాష్ట్ర",
    eligibility: "అర్హత", benefits: "ప్రయోజనాలు", deadline: "చివరి తేదీ", ongoing: "కొనసాగుతోంది",
    applyNow: "ఇప్పుడే దరఖాస్తు", viewDetails: "వివరాలు చూడండి",
    loading: "పథకాలు లోడ్ అవుతున్నాయి...", noSchemes: "పథకాలు కనుగొనబడలేదు", seeDetails: "వివరాలు చూడండి",
    description: "వివరణ", howToApply: "ఎలా దరఖాస్తు చేయాలి", importantInfo: "ముఖ్యమైన సమాచారం",
    eligibilityLabel: "అర్హత", benefitsLabel: "ప్రయోజనాలు", period: "వ్యవధి", helpline: "హెల్ప్‌లైన్",
    documentsRequired: "అవసరమైన పత్రాలు", officialWebsite: "అధికారిక వెబ్‌సైట్", startDate: "ప్రారంభం", endDate: "ముగింపు",
    farmerDetails: "🌾 పథకం రకాన్ని ఎంచుకోండి", farmerName: "రైతు పేరు", farmerNamePH: "మీ పేరు నమోదు చేయండి",
    location: "స్థానం (జిల్లా/గ్రామం)", locationPH: "జిల్లా లేదా గ్రామం నమోదు చేయండి",
    schemeType: "పథకం రకం", selectType: "-- పథకం రకాన్ని ఎంచుకోండి --",
    submitViewSchemes: "పథకాలు చూడండి →", financialSupport: "💰 ఆర్థిక మద్దతు",
    supportType: "మద్దతు రకం", selectSupport: "-- రకాన్ని ఎంచుకోండి --",
    submitViewFin: "ఆర్థిక పథకాలు చూడండి →", insuranceSchemes: "🛡️ బీమా పథకాలు",
    insuranceType: "బీమా రకం", submitViewIns: "బీమా చూడండి →",
    chatbotWelcome: "నమస్కారం 🙏 నేను కిసాన్ మిత్ర! ప్రభుత్వ పథకాలు, రుణాలు మరియు బీమా కనుగొనడంలో నేను సహాయం చేస్తాను.",
    chatbotPH: "పథకాల గురించి అడగండి...", chatSend: "పంపండి",
  },

  ta: {
    home: "முகப்பு", back: "பின்னால்", adminLogin: "நிர்வாகி உள்நுழைவு",
    footerTagline: "விவசாய வளர்ச்சியில் உங்கள் நம்பகமான பங்காளர்",
    footerHelp: "உதவி எண்", rights: "© 2025 கிசான் சஹாயதா. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
    heroTitle: "🌾 கிசான் சஹாயதா",
    heroSubtitle: "அரசு திட்டங்கள் மற்றும் நிதி ஆதரவுடன் விவசாயிகளை வலுவடையச் செய்தல்",
    searchPlaceholder: "திட்டங்கள், கடன்கள், காப்பீடு தேடுக...", searchBtn: "தேடுக",
    totalSchemes: "மொத்த திட்டங்கள்", govtSchemes: "அரசு திட்டங்கள்",
    financial: "நிதி", insurance: "காப்பீடு", active: "செயலில்",
    govtTitle: "📋 அரசு திட்டங்கள்", finTitle: "💰 நிதி ஆதரவு", insTitle: "🛡️ காப்பீடு",
    govtDesc: "PM-கிசான், RKVY மற்றும் மகாராஷ்டிரா திட்டங்களை அறிந்துகொள்ளுங்கள்.",
    finDesc: "KCC கடன்கள், ஓய்வூதியம் மற்றும் மானியத் திட்டங்களை கண்டறியுங்கள்.",
    insDesc: "PMFBY பயிர் காப்பீடு மற்றும் ஆயுள் காப்பீட்டுத் திட்டங்களை அறிந்துகொள்ளுங்கள்.",
    quickAccess: "⚡ விரைவு அணுகல்",
    pmKisanTitle: "PM-கிசான் திட்டம்", pmKisanDesc: "ஆண்டுக்கு ₹6000 நேரடி வருமான ஆதரவு",
    pmfbyTitle: "பயிர் காப்பீடு (PMFBY)", pmfbyDesc: "உங்கள் பயிர்களை இழப்புகளிலிருந்து பாதுகாக்கவும்",
    kccTitle: "கிசான் கடன் அட்டை", kccDesc: "4% வட்டியில் எளிய கடன்கள்",
    irrTitle: "நீர்ப்பாசன திட்டங்கள்", irrDesc: "சொட்டு நீர் பாசனத்திற்கு மானியம்",
    happyFarmers: "😊 மகிழ்ச்சியான விவசாயிகள்",
    t1: '"இந்த தளம் மூலம் PM-KISAN பலன்களை எளிதாக பெற்றேன்"',
    t2: '"என் மொழியில் KCC கடன் செயல்முறை புரிந்தது"',
    t3: '"PMFBY க்கு தமிழில் விண்ணப்பித்தேன், மிகவும் பயனுள்ளது!"',
    govtPageTitle: "அரசு திட்டங்கள்", govtPageSubtitle: "மத்திய மற்றும் மகாராஷ்டிரா வேளாண் திட்டங்கள்",
    finPageTitle: "நிதி ஆதரவு", finPageSubtitle: "விவசாயிகளுக்கு கடன்கள், மானியங்கள் மற்றும் நிதி உதவி",
    insPageTitle: "காப்பீட்டு திட்டங்கள்", insPageSubtitle: "விவசாயிகளுக்கு பயிர், ஆயுள் மற்றும் விபத்து காப்பீடு",
    filterAll: "அனைத்து திட்டங்கள்", filterCentral: "மத்திய", filterMaharashtra: "மகாராஷ்டிரா",
    eligibility: "தகுதி", benefits: "பலன்கள்", deadline: "கடைசி தேதி", ongoing: "நடந்து வருகிறது",
    applyNow: "இப்போதே விண்ணப்பிக்கவும்", viewDetails: "விவரங்கள் காண்க",
    loading: "திட்டங்கள் ஏற்றப்படுகின்றன...", noSchemes: "திட்டங்கள் கிடைக்கவில்லை", seeDetails: "விவரங்கள் காண்க",
    description: "விளக்கம்", howToApply: "எப்படி விண்ணப்பிப்பது", importantInfo: "முக்கியமான தகவல்",
    eligibilityLabel: "தகுதி", benefitsLabel: "பலன்கள்", period: "காலம்", helpline: "உதவி எண்",
    documentsRequired: "தேவையான ஆவணங்கள்", officialWebsite: "அதிகாரப்பூர்வ இணையதளம்", startDate: "தொடக்கம்", endDate: "முடிவு",
    farmerDetails: "🌾 திட்ட வகையை தேர்வு செய்யுங்கள்", farmerName: "விவசாயியின் பெயர்", farmerNamePH: "உங்கள் பெயரை உள்ளிடுக",
    location: "இடம் (மாவட்டம்/கிராமம்)", locationPH: "மாவட்டம் அல்லது கிராமத்தை உள்ளிடுக",
    schemeType: "திட்ட வகை", selectType: "-- திட்ட வகையை தேர்வு செய்யுங்கள் --",
    submitViewSchemes: "திட்டங்கள் காண்க →", financialSupport: "💰 நிதி ஆதரவு",
    supportType: "ஆதரவு வகை", selectSupport: "-- வகையை தேர்வு செய்யுங்கள் --",
    submitViewFin: "நிதி திட்டங்கள் காண்க →", insuranceSchemes: "🛡️ காப்பீட்டு திட்டங்கள்",
    insuranceType: "காப்பீடு வகை", submitViewIns: "காப்பீடு காண்க →",
    chatbotWelcome: "வணக்கம் 🙏 நான் கிசான் மித்ரா! அரசு திட்டங்கள், கடன்கள் மற்றும் காப்பீடு கண்டுபிடிக்க உதவுகிறேன்.",
    chatbotPH: "திட்டங்களைப் பற்றி கேளுங்கள்...", chatSend: "அனுப்பு",
  }
};

// ── 2. CURRENT LANGUAGE STATE ────────────────────────────────────────
let currentLang = localStorage.getItem('kisanLang') || 'en';

// ── 3. TRANSLATE TEXT VIA LIBRETRANSLATE (for scheme card content) ───
async function translateText(text, targetLang) {
  if (!text || targetLang === 'en') return text;
  try {
    const res = await fetch('/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ q: text, source: 'en', target: targetLang })
    });
    const data = await res.json();
    return data.translatedText || text;
  } catch (e) {
    return text;
  }
}

// Batch translate array of strings
async function translateBatch(texts, targetLang) {
  if (targetLang === 'en') return texts;
  return Promise.all(texts.map(t => translateText(t, targetLang)));
}

// ── 4. APPLY STATIC UI STRINGS ───────────────────────────────────────
function applyUI(lang) {
  const t = UI[lang] || UI['en'];

  // Map: data-i18n attribute → translation key
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) {
      // For inputs: update placeholder
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t[key];
      } else {
        el.textContent = t[key];
      }
    }
  });

  // Map: data-i18n-ph → placeholder on inputs
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // Update chatbot welcome message text (first bot-msg)
  const firstBotMsg = document.querySelector('.chatbot-messages .bot-msg');
  if (firstBotMsg && t.chatbotWelcome) firstBotMsg.textContent = t.chatbotWelcome;

  // Update chatbot input placeholder
  const chatInput = document.getElementById('user-input');
  if (chatInput && t.chatbotPH) chatInput.placeholder = t.chatbotPH;

  // Update send button
  const sendBtn = document.getElementById('send-btn');
  // keep icon only
}

// ── 5. TRANSLATE SCHEME CARDS (LibreTranslate for dynamic content) ───
async function translateSchemeCards(lang) {
  if (lang === 'en') return; // no translation needed
  const t = UI[lang] || UI['en'];

  const cards = document.querySelectorAll('.scheme-card-modern');
  if (cards.length === 0) return;

  // Show translating indicator
  const indicator = document.createElement('div');
  indicator.id = 'translating-indicator';
  indicator.className = 'text-center py-2 text-muted small';
  indicator.innerHTML = `<i class="fas fa-language me-1"></i>Translating to ${getLanguageName(lang)}...`;
  const container = cards[0].parentElement;
  if (container) container.insertBefore(indicator, container.firstChild);

  for (const card of cards) {
    // Translate title (h4)
    const h4 = card.querySelector('h4');
    if (h4 && h4.dataset.orig === undefined) {
      h4.dataset.orig = h4.textContent;
      h4.textContent = await translateText(h4.dataset.orig, lang);
    } else if (h4 && h4.dataset.orig) {
      h4.textContent = await translateText(h4.dataset.orig, lang);
    }

    // Translate all <p> tags (eligibility, benefits, deadline)
    for (const p of card.querySelectorAll('p')) {
      if (!p.dataset.orig) p.dataset.orig = p.innerHTML;
      // Only translate the value part (after the <b> label)
      const b = p.querySelector('b');
      if (b) {
        const labelKey = getLabelKey(b.textContent.replace(':','').trim());
        const labelTr = t[labelKey] || b.textContent;
        const valueText = p.dataset.orig.replace(/<b>[^<]*<\/b>\s*/, '');
        const translatedValue = await translateText(valueText, lang);
        p.innerHTML = `<b>${labelTr}:</b> ${translatedValue}`;
      }
    }

    // Translate buttons
    const applyBtn = card.querySelector('.btn-apply');
    if (applyBtn) applyBtn.textContent = t.applyNow || 'Apply Now';

    const detailBtn = card.querySelector('.btn-details');
    if (detailBtn) detailBtn.textContent = t.viewDetails || 'View Details';
  }

  const ind = document.getElementById('translating-indicator');
  if (ind) ind.remove();
}

// ── 6. TRANSLATE SCHEME DETAIL PAGE ─────────────────────────────────
async function translateDetailPage(lang) {
  if (lang === 'en') return;
  const t = UI[lang] || UI['en'];

  // Translate section headings with data-i18n (already handled by applyUI)
  // Translate main scheme content dynamically rendered
  const detailContainer = document.getElementById('schemeDetailContainer');
  if (!detailContainer) return;

  // Wait for content to load (it's async)
  const waitForContent = () => new Promise(resolve => {
    const check = setInterval(() => {
      if (detailContainer.querySelector('h2')) {
        clearInterval(check);
        resolve();
      }
    }, 200);
    setTimeout(() => { clearInterval(check); resolve(); }, 5000);
  });

  await waitForContent();

  const h2 = detailContainer.querySelector('h2');
  if (h2 && !h2.dataset.orig) {
    h2.dataset.orig = h2.textContent;
    h2.textContent = await translateText(h2.dataset.orig, lang);
  }

  // Translate description paragraph
  const descP = detailContainer.querySelector('#schemeDesc');
  if (descP && !descP.dataset.orig) {
    descP.dataset.orig = descP.textContent;
    descP.textContent = await translateText(descP.dataset.orig, lang);
  }

  // Translate eligibility, benefits values
  for (const infoCard of detailContainer.querySelectorAll('.info-card p')) {
    if (!infoCard.dataset.orig) {
      infoCard.dataset.orig = infoCard.textContent;
      infoCard.textContent = await translateText(infoCard.dataset.orig, lang);
    }
  }

  // Translate apply steps
  for (const li of detailContainer.querySelectorAll('.apply-steps li')) {
    if (!li.dataset.orig) {
      li.dataset.orig = li.textContent;
      li.textContent = await translateText(li.dataset.orig, lang);
    }
  }

  // Translate FAQ items
  for (const li of detailContainer.querySelectorAll('.list-group-item')) {
    const textNode = li.childNodes[li.childNodes.length - 1];
    if (textNode && textNode.nodeType === 3 && !li.dataset.orig) {
      li.dataset.orig = textNode.textContent.trim();
      textNode.textContent = ' ' + await translateText(li.dataset.orig, lang);
    }
  }

  // Translate document list items
  for (const li of detailContainer.querySelectorAll('.list-group li, .list-group-item')) {
    if (!li.dataset.orig && li.textContent.trim()) {
      li.dataset.orig = li.textContent.trim();
      li.textContent = await translateText(li.dataset.orig, lang);
    }
  }
}

// ── 7. HELPERS ───────────────────────────────────────────────────────
function getLabelKey(label) {
  const map = {
    'Eligibility': 'eligibility', 'Benefits': 'benefits',
    'Deadline': 'deadline', 'Type': 'govtSchemes'
  };
  return map[label] || label.toLowerCase();
}

function getLanguageName(code) {
  const names = { en:'English', hi:'Hindi', mr:'Marathi', pa:'Punjabi', te:'Telugu', ta:'Tamil' };
  return names[code] || code;
}

// ── 8. MASTER SWITCH LANGUAGE FUNCTION ───────────────────────────────
async function switchLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('kisanLang', lang);

  // Apply all static UI strings instantly
  applyUI(lang);

  // Sync all language selectors on page
  document.querySelectorAll('#languageSwitcher, #chatLangSelect').forEach(el => {
    el.value = lang;
  });

  // Translate scheme cards if present (uses LibreTranslate)
  await translateSchemeCards(lang);

  // Translate scheme detail page if present
  await translateDetailPage(lang);
}

// ── 9. INIT ON DOM READY ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {

  // Set all selectors to saved language
  document.querySelectorAll('#languageSwitcher, #chatLangSelect').forEach(el => {
    el.value = currentLang;
  });

  // Apply static UI immediately
  applyUI(currentLang);

  // Listen for language selector changes (any selector on page)
  document.querySelectorAll('#languageSwitcher, #chatLangSelect').forEach(el => {
    el.addEventListener('change', function () {
      switchLanguage(this.value);
    });
  });

  // For scheme listing pages: translate after cards are loaded
  // Cards load asynchronously, so we watch for DOM changes
  const schemeContainers = ['schemeContainer', 'financialContainer', 'insuranceContainer'];
  schemeContainers.forEach(id => {
    const container = document.getElementById(id);
    if (!container) return;

    const observer = new MutationObserver((mutations) => {
      const hasCards = container.querySelectorAll('.scheme-card-modern').length > 0;
      if (hasCards && currentLang !== 'en') {
        observer.disconnect();
        translateSchemeCards(currentLang);
      }
    });
    observer.observe(container, { childList: true, subtree: true });
  });

  // For detail page: translate after content loads
  if (document.getElementById('schemeDetailContainer') && currentLang !== 'en') {
    translateDetailPage(currentLang);
  }
});

// Expose globally for use in page scripts
window.KisanLang = { switchLanguage, translateText, translateDetailPage, translateSchemeCards, currentLang: () => currentLang, UI };
