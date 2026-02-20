# 🌾 KisanSahayata – Farmer Support Portal

## Project Overview
A complete Flask-based web application that simplifies farmer access to government schemes, insurance, and financial support. Features an Admin Panel for managing live schemes and a Farmer Portal for browsing active schemes with a multilingual AI chatbot.

---

## 📁 File Structure

```
KisanSahayata/
├── app.py                          # Flask main app (all routes, DB, APIs)
├── requirements.txt
├── instance/
│   └── kisansahayata.db            # SQLite DB (auto-created on first run)
│
├── templates/
│   ├── base.html                   # Base layout (navbar, chatbot, footer)
│   ├── index.html                  # Farmer Home Page
│   ├── govscheme.html              # Government Schemes (Farmer)
│   ├── financial.html              # Financial Support (Farmer)
│   ├── insurance.html              # Insurance Schemes (Farmer)
│   ├── scheme_detail.html          # Scheme Detail View
│   ├── admin_login.html            # Admin Login
│   ├── admin_dashboard.html        # Admin Dashboard
│   └── admin_add_scheme.html       # Add/Edit Scheme Form
│
└── static/
    ├── css/
    │   ├── style.css               # Main styles (hero, chatbot, etc.)
    │   └── style2.css              # Scheme card styles (from your original)
    ├── js/
    │   ├── chatbot.js              # Chatbot UI + Flask API integration
    │   └── lang.js                 # LibreTranslate multilanguage support
    └── images/
        └── logo.png                # Your logo
```

---

## 🚀 Setup on XAMPP (Windows)

### Step 1: Install Python dependencies
Open Command Prompt in the `KisanSahayata/` folder:
```bash
pip install -r requirements.txt
```

### Step 2: Run the Flask app
```bash
python app.py
```

The app will start at: **http://localhost:5000**

### Step 3: Access the portals
| Panel | URL |
|-------|-----|
| Farmer Portal | http://localhost:5000 |
| Government Schemes | http://localhost:5000/govscheme |
| Financial Support | http://localhost:5000/financial |
| Insurance | http://localhost:5000/insurance |
| **Admin Login** | http://localhost:5000/admin/login |
| Admin Dashboard | http://localhost:5000/admin |

**Default Admin Credentials:**
- Username: `admin`
- Password: `admin123`

---

## 🤖 Chatbot – Multilanguage via LibreTranslate

The chatbot uses **LibreTranslate** (open-source, no Google API key needed).

### Option A: Use Self-Hosted LibreTranslate (Recommended for Hackathon)
```bash
# Install LibreTranslate
pip install libretranslate

# Run it (it downloads language models)
libretranslate --host 0.0.0.0 --port 5001
```

Then in `app.py`, change:
```python
LIBRE_TRANSLATE_URL = "http://localhost:5001/translate"
LIBRE_TRANSLATE_KEY = ""
```

### Option B: Use libretranslate.com (Cloud, needs API key)
1. Get free API key from https://libretranslate.com
2. In `app.py`:
```python
LIBRE_TRANSLATE_URL = "https://libretranslate.com/translate"
LIBRE_TRANSLATE_KEY = "your-api-key-here"
```

### Supported Languages:
- 🇬🇧 English (en)
- 🇮🇳 Hindi (hi)
- महाराष्ट्र Marathi (mr)
- Punjabi (pa)
- Telugu (te)
- Tamil (ta)

---

## 👨‍💼 Admin Panel Features

1. **Dashboard** – View stats (total, active, inactive, by category)
2. **Add Scheme** – Add govt/financial/insurance schemes with full details
3. **Edit Scheme** – Update any scheme
4. **Delete Scheme** – Permanently remove a scheme
5. **Toggle Status** – Activate/deactivate schemes (farmer sees only active)
6. **Filter & Search** – Filter by category, status; search by name

---

## 👨‍🌾 Farmer Portal Features

1. **Home Page** – Stats, feature cards, quick links, testimonials
2. **Government Schemes** – Browse with Central/Maharashtra filter
3. **Financial Support** – Loans, subsidies, grants
4. **Insurance** – Crop, life, livestock insurance
5. **Scheme Detail** – Full details, documents, application process, FAQs
6. **Search** – Search across all schemes by keyword
7. **Multilingual Chatbot** – Select language, ask about any scheme

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/schemes` | Get active schemes (filter by `category`, `type`) |
| GET | `/api/schemes/<id>` | Get single scheme detail |
| POST | `/api/chatbot` | Chat with AI (`message`, `lang` in JSON body) |
| POST | `/api/translate` | Proxy translate text via LibreTranslate |

---

## 📦 Placing Your Logo & Images
Put your images in:
- `static/images/logo.png` – Main logo
- `static/images/` – Any other images

---

## 🗄️ Database
- SQLite database auto-created at first run
- Located at `instance/kisansahayata.db`
- Pre-seeded with 12 real schemes (govt, financial, insurance)
- Admin: `admin / admin123`

---

## Tech Stack
- **Backend:** Python Flask + SQLAlchemy (SQLite)
- **Frontend:** HTML5 + Bootstrap 5.3 + Custom CSS
- **Translation:** LibreTranslate API
- **Chatbot:** Custom rule-based + DB keyword matching
- **Server:** XAMPP (runs Python Flask alongside Apache)
