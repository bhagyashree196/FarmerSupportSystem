from flask import Flask, render_template, request, jsonify, session, redirect, url_for, flash
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import os, json, requests

app = Flask(__name__)
app.secret_key = 'kisansahayata_secret_2024'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///kisansahayata.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# LibreTranslate – change URL to http://localhost:5000 if self-hosted
LIBRE_TRANSLATE_URL = "https://libretranslate.com/translate"
LIBRE_TRANSLATE_KEY = ""   # add your key if using libretranslate.com

# ─── MODELS ────────────────────────────────────────────────────────────────────

class Scheme(db.Model):
    id           = db.Column(db.Integer, primary_key=True)
    title        = db.Column(db.String(200), nullable=False)
    category     = db.Column(db.String(50), nullable=False)   # govt / financial / insurance
    scheme_type  = db.Column(db.String(50), default='Central') # Central / Maharashtra
    description  = db.Column(db.Text, nullable=False)
    eligibility  = db.Column(db.Text)
    benefits     = db.Column(db.Text)
    how_to_apply = db.Column(db.Text)
    documents    = db.Column(db.Text)   # JSON list
    faqs         = db.Column(db.Text)   # JSON list
    deadline     = db.Column(db.String(100))
    start_date   = db.Column(db.String(50))
    end_date     = db.Column(db.String(50))
    phone        = db.Column(db.String(50))
    official_url = db.Column(db.String(300))
    status       = db.Column(db.String(20), default='active')
    tags         = db.Column(db.String(300), default='')
    created_at   = db.Column(db.DateTime, default=datetime.utcnow)

    def to_dict(self):
        return {
            'id': self.id, 'title': self.title, 'category': self.category,
            'scheme_type': self.scheme_type, 'description': self.description,
            'eligibility': self.eligibility, 'benefits': self.benefits,
            'how_to_apply': self.how_to_apply,
            'documents': json.loads(self.documents) if self.documents else [],
            'faqs': json.loads(self.faqs) if self.faqs else [],
            'deadline': self.deadline, 'start_date': self.start_date,
            'end_date': self.end_date, 'phone': self.phone,
            'official_url': self.official_url, 'status': self.status,
            'tags': self.tags,
            'created_at': self.created_at.strftime('%d-%m-%Y') if self.created_at else ''
        }

class Admin(db.Model):
    id       = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)

# ─── SEED DATA ──────────────────────────────────────────────────────────────────

def seed_data():
    if Admin.query.count() == 0:
        db.session.add(Admin(username='admin', password='admin123'))

    if Scheme.query.count() == 0:
        schemes = [
            # GOVT
            dict(title="Mahatma Jyotirao Phule Karj Mafi Yojana", category="govt", scheme_type="Maharashtra",
                 description="Farm loan waiver scheme for Maharashtra farmers. Reduces burden of outstanding crop loans from nationalized, cooperative, and rural banks.",
                 eligibility="Eligible farmers of Maharashtra with outstanding crop loans",
                 benefits="Farm loan waiver up to ₹2 lakh",
                 how_to_apply="Visit official portal. Login using Aadhar-linked mobile. Upload documents and submit.",
                 documents='["Aadhar Card","Bank Passbook","Loan Account Statement","Land Ownership (7/12 extract)","Mobile linked with Aadhar"]',
                 faqs='["Only farmers with crop loans are covered","Waiver depends on eligibility","Bank and Aadhar must be linked"]',
                 start_date="01-01-2022", end_date="31-03-2026", phone="1800-233-0222",
                 official_url="https://mjpsky.maharashtra.gov.in", deadline="31-03-2026",
                 tags="loan waiver,maharashtra,karj mafi,crop loan", status="active"),
            dict(title="Baliraja Chetna Abhiyan", category="govt", scheme_type="Maharashtra",
                 description="Awareness and counseling initiative for Maharashtra farmers facing financial and psychological stress. Free training and mental health support.",
                 eligibility="All farmers in Maharashtra",
                 benefits="Free counseling and training programs",
                 how_to_apply="Visit nearest Agriculture Office or Gram Panchayat to register.",
                 documents='["Aadhar Card","Farmer ID","Land Proof (7/12)","Mobile Number","Residence Proof"]',
                 faqs='["Available for all Maharashtra farmers","Counseling is free","Multiple programs available"]',
                 start_date="01-01-2006", end_date="Ongoing", phone="1800-233-0222",
                 official_url="https://maharashtra.gov.in", deadline="Ongoing",
                 tags="awareness,counseling,maharashtra,farmer support", status="active"),
            dict(title="Magel Tyala Shettale Yojana", category="govt", scheme_type="Maharashtra",
                 description="Financial assistance for farm pond construction to promote water conservation and improve irrigation for Maharashtra farmers.",
                 eligibility="Farmers with land ownership in Maharashtra",
                 benefits="Subsidy for farm pond (Shettale) construction",
                 how_to_apply="Visit MahaDBT portal, register with Aadhar, select scheme and submit.",
                 documents='["Aadhar Card","Land Ownership (7/12)","Bank Passbook","Passport Photo","Mobile linked with Aadhar"]',
                 faqs='["Subsidy depends on pond size","Valid land ownership required","Technical inspection before approval"]',
                 start_date="01-01-2016", end_date="Ongoing", phone="022-49150800",
                 official_url="https://mahadbt.maharashtra.gov.in", deadline="Ongoing",
                 tags="farm pond,water conservation,maharashtra,irrigation subsidy,shettale", status="active"),
            dict(title="PM-KISAN Samman Nidhi", category="govt", scheme_type="Central",
                 description="Direct income support of Rs 6000 per year to small and marginal farmers in three equal installments to help meet agricultural expenses.",
                 eligibility="Small and marginal farmers with less than 2 hectares land",
                 benefits="Rs 6000 per year in 3 installments of Rs 2000 each",
                 how_to_apply="Apply at pmkisan.gov.in or nearest CSC. Register with Aadhar and bank details.",
                 documents='["Aadhar Card","Bank Account Details","Land Ownership Records","Mobile Number"]',
                 faqs='["Rs 6000 per year in three installments","Only landholding farmers eligible","Payments credited directly to bank"]',
                 start_date="01-02-2019", end_date="Ongoing", phone="155261",
                 official_url="https://pmkisan.gov.in", deadline="Ongoing",
                 tags="pm kisan,income support,central,6000,direct benefit,samman nidhi", status="active"),
            dict(title="Pradhan Mantri Krishi Sinchai Yojana", category="govt", scheme_type="Central",
                 description="Har Khet Ko Pani – ensures irrigation water to every field. Provides subsidy on micro-irrigation for improved water use efficiency.",
                 eligibility="All farmers, priority to water-stressed regions",
                 benefits="55% subsidy for small farmers, 45% for others on micro-irrigation",
                 how_to_apply="Apply at State Agriculture Department or official portal.",
                 documents='["Aadhar Card","Land Records","Bank Account","Photograph"]',
                 faqs='["Promotes drip and sprinkler irrigation","Higher subsidy for small farmers","Apply through state departments"]',
                 start_date="01-07-2015", end_date="Ongoing", phone="1800-180-1551",
                 official_url="https://pmksy.gov.in", deadline="Ongoing",
                 tags="irrigation,drip,sprinkler,pmksy,water,micro irrigation", status="active"),
            dict(title="Dr. Punjabrao Deshmukh Interest Subsidy", category="govt", scheme_type="Maharashtra",
                 description="Maharashtra government scheme providing interest subsidy on short-term crop loans for timely repaying farmers.",
                 eligibility="Farmers with crop loans from nationalized or cooperative banks in Maharashtra",
                 benefits="Interest subsidy on timely repayment of crop loans",
                 how_to_apply="Obtain crop loan from bank and repay on time. Bank applies subsidy automatically.",
                 documents='["Aadhar Card","Bank Passbook","Crop Loan Sanction Letter","Repayment Proof","Land Records"]',
                 faqs='["Only short-term crop loans eligible","Must repay within due date","Subsidy credited via banking system"]',
                 start_date="01-01-2005", end_date="Ongoing", phone="1800-233-0222",
                 official_url="https://maharashtra.gov.in", deadline="Ongoing",
                 tags="interest subsidy,crop loan,maharashtra,punjabrao deshmukh", status="active"),
            # FINANCIAL
            dict(title="Kisan Credit Card (KCC)", category="financial", scheme_type="Central",
                 description="Provides adequate and timely credit to farmers for agricultural needs including cultivation, post-harvest expenses, and allied activities at low interest.",
                 eligibility="All farmers, sharecroppers, tenant farmers, and SHGs",
                 benefits="Credit up to Rs 3 lakh at 4% interest with interest subvention",
                 how_to_apply="Apply at any nationalized bank, cooperative bank, or regional rural bank.",
                 documents='["Aadhar Card","PAN Card","Land Records","Bank Account","Passport Photograph"]',
                 faqs='["Credit limit based on cultivation area","4% interest after subvention","Valid 5 years with annual renewal"]',
                 start_date="01-08-1998", end_date="Ongoing", phone="1800-11-1109",
                 official_url="https://www.nabard.org", deadline="Ongoing",
                 tags="kcc,credit card,loan,kisan credit,working capital,bank,4 percent", status="active"),
            dict(title="PM Kisan Maandhan Yojana (PM-KMY)", category="financial", scheme_type="Central",
                 description="Voluntary pension scheme for small and marginal farmers providing Rs 3000 per month pension after age 60.",
                 eligibility="Small and marginal farmers aged 18-40 years",
                 benefits="Rs 3000 per month pension after 60 years of age",
                 how_to_apply="Visit PM-KMY portal or nearest CSC. Fill registration and start monthly contribution.",
                 documents='["Aadhar Card","Bank Account","Age Proof","Land Records"]',
                 faqs='["Monthly contribution depends on entry age","Equal contribution by government","Minimum 20 years of contribution"]',
                 start_date="12-09-2019", end_date="Ongoing", phone="1800-267-6888",
                 official_url="https://www.pmkmy.gov.in", deadline="Ongoing",
                 tags="pension,maandhan,retirement,monthly income,pm kmy,3000", status="active"),
            dict(title="Agriculture Infrastructure Fund (AIF)", category="financial", scheme_type="Central",
                 description="Medium to long-term debt financing for post-harvest management infrastructure including cold storage, warehouses, and processing units.",
                 eligibility="Farmers, FPOs, PACS, SHGs, and Agri-entrepreneurs",
                 benefits="Rs 1 lakh crore fund with 3% interest subvention for 7 years",
                 how_to_apply="Apply through scheduled commercial banks or cooperative banks with project proposal.",
                 documents='["Aadhar Card","PAN Card","Land Documents","Bank Details","Project Proposal","FPO Certificate"]',
                 faqs='["Covers cold storage and warehouse","3% interest subvention","Credit guarantee also available"]',
                 start_date="09-08-2020", end_date="31-03-2032", phone="011-23382366",
                 official_url="https://agriinfra.dac.gov.in", deadline="31-03-2032",
                 tags="infrastructure,cold storage,warehouse,post harvest,aif", status="active"),
            # INSURANCE
            dict(title="Pradhan Mantri Fasal Bima Yojana (PMFBY)", category="insurance", scheme_type="Central",
                 description="Crop insurance scheme providing financial support to farmers for crop loss due to natural calamities, pests, and diseases.",
                 eligibility="All farmers with registered land holdings growing notified crops",
                 benefits="Comprehensive crop insurance at low premium – Kharif 2%, Rabi 1.5%",
                 how_to_apply="Apply through banks, insurance companies, or CSC centers before sowing season.",
                 documents='["Aadhar Card","Land Records","Bank Account","Crop Loan Details","Passport Photograph"]',
                 faqs='["Very low premium rates","Covers natural calamities pests diseases","Claim based on crop cutting experiments"]',
                 start_date="13-01-2016", end_date="Ongoing", phone="1800-200-7710",
                 official_url="https://pmfby.gov.in", deadline="Before sowing season",
                 tags="pmfby,fasal bima,crop insurance,kharif,rabi,natural calamity,pest", status="active"),
            dict(title="Pradhan Mantri Jeevan Jyoti Bima Yojana", category="insurance", scheme_type="Central",
                 description="Life insurance scheme providing Rs 2 lakh coverage to farmers and citizens at a very low annual premium of Rs 436.",
                 eligibility="Bank account holders aged 18-50 years",
                 benefits="Rs 2 lakh life insurance at Rs 436 per year premium",
                 how_to_apply="Enroll through bank branch or banking app. Premium auto-debited from account.",
                 documents='["Aadhar Card","Bank Account","Mobile Number","Consent Form"]',
                 faqs='["Affordable premium of Rs 436","Auto-renewable annually","Coverage on death from any cause"]',
                 start_date="09-05-2015", end_date="Ongoing", phone="1800-180-1111",
                 official_url="https://www.jansuraksha.gov.in", deadline="31 May every year",
                 tags="life insurance,jeevan jyoti,pmjjby,death benefit,436", status="active"),
            dict(title="Maharashtra Shetkari Sahayata Yojana", category="insurance", scheme_type="Maharashtra",
                 description="Maharashtra government relief for farmers affected by natural calamities like drought, flood, and unseasonal rain.",
                 eligibility="Maharashtra farmers affected by natural calamities",
                 benefits="Compensation up to Rs 25000 per hectare for crop damage",
                 how_to_apply="Apply through Talathi/Gram Sevak within 30 days of calamity.",
                 documents='["Aadhar Card","Land Records (7/12)","Bank Passbook","Photograph","Calamity Proof"]',
                 faqs='["Apply within 30 days of calamity","Covers drought flood unseasonal rain","Compensation per hectare after damage assessment"]',
                 start_date="01-01-2015", end_date="Ongoing", phone="1800-233-0222",
                 official_url="https://maharashtra.gov.in", deadline="Within 30 days of calamity",
                 tags="maharashtra,relief,natural calamity,drought,flood,shetkari sahayata", status="active"),
        ]
        for s in schemes:
            db.session.add(Scheme(**s))
    db.session.commit()

# ─── ADMIN ROUTES ───────────────────────────────────────────────────────────────

@app.route('/admin/login', methods=['GET', 'POST'])
def admin_login():
    if request.method == 'POST':
        admin = Admin.query.filter_by(username=request.form.get('username'),
                                      password=request.form.get('password')).first()
        if admin:
            session['admin_logged_in'] = True
            return redirect(url_for('admin_dashboard'))
        flash('Invalid credentials', 'error')
    return render_template('admin_login.html')

@app.route('/admin/logout')
def admin_logout():
    session.clear()
    return redirect(url_for('admin_login'))

@app.route('/admin')
@app.route('/admin/dashboard')
def admin_dashboard():
    if not session.get('admin_logged_in'):
        return redirect(url_for('admin_login'))
    schemes = Scheme.query.order_by(Scheme.created_at.desc()).all()
    stats = {
        'total': Scheme.query.count(),
        'active': Scheme.query.filter_by(status='active').count(),
        'inactive': Scheme.query.filter_by(status='inactive').count(),
        'govt': Scheme.query.filter_by(category='govt').count(),
        'financial': Scheme.query.filter_by(category='financial').count(),
        'insurance': Scheme.query.filter_by(category='insurance').count(),
    }
    return render_template('admin_dashboard.html', schemes=schemes, stats=stats)

@app.route('/admin/scheme/add', methods=['GET', 'POST'])
def admin_add_scheme():
    if not session.get('admin_logged_in'):
        return redirect(url_for('admin_login'))
    if request.method == 'POST':
        docs_list = [d.strip() for d in request.form.get('documents','').split('\n') if d.strip()]
        faqs_list = [f.strip() for f in request.form.get('faqs','').split('\n') if f.strip()]
        db.session.add(Scheme(
            title=request.form['title'], category=request.form['category'],
            scheme_type=request.form.get('scheme_type','Central'),
            description=request.form['description'],
            eligibility=request.form.get('eligibility',''),
            benefits=request.form.get('benefits',''),
            how_to_apply=request.form.get('how_to_apply',''),
            documents=json.dumps(docs_list), faqs=json.dumps(faqs_list),
            deadline=request.form.get('deadline',''), start_date=request.form.get('start_date',''),
            end_date=request.form.get('end_date',''), phone=request.form.get('phone',''),
            official_url=request.form.get('official_url',''), tags=request.form.get('tags',''),
            status=request.form.get('status','active'),
        ))
        db.session.commit()
        flash('✅ Scheme added successfully!', 'success')
        return redirect(url_for('admin_dashboard'))
    return render_template('admin_add_scheme.html', scheme=None)

@app.route('/admin/scheme/edit/<int:sid>', methods=['GET', 'POST'])
def admin_edit_scheme(sid):
    if not session.get('admin_logged_in'):
        return redirect(url_for('admin_login'))
    scheme = Scheme.query.get_or_404(sid)
    if request.method == 'POST':
        scheme.title = request.form['title']
        scheme.category = request.form['category']
        scheme.scheme_type = request.form.get('scheme_type','Central')
        scheme.description = request.form['description']
        scheme.eligibility = request.form.get('eligibility','')
        scheme.benefits = request.form.get('benefits','')
        scheme.how_to_apply = request.form.get('how_to_apply','')
        scheme.documents = json.dumps([d.strip() for d in request.form.get('documents','').split('\n') if d.strip()])
        scheme.faqs = json.dumps([f.strip() for f in request.form.get('faqs','').split('\n') if f.strip()])
        scheme.deadline = request.form.get('deadline','')
        scheme.start_date = request.form.get('start_date','')
        scheme.end_date = request.form.get('end_date','')
        scheme.phone = request.form.get('phone','')
        scheme.official_url = request.form.get('official_url','')
        scheme.tags = request.form.get('tags','')
        scheme.status = request.form.get('status','active')
        db.session.commit()
        flash('✅ Scheme updated successfully!', 'success')
        return redirect(url_for('admin_dashboard'))
    docs_text = '\n'.join(json.loads(scheme.documents)) if scheme.documents else ''
    faqs_text = '\n'.join(json.loads(scheme.faqs)) if scheme.faqs else ''
    return render_template('admin_add_scheme.html', scheme=scheme, docs_text=docs_text, faqs_text=faqs_text)

@app.route('/admin/scheme/delete/<int:sid>', methods=['POST'])
def admin_delete_scheme(sid):
    if not session.get('admin_logged_in'):
        return jsonify({'error': 'Unauthorized'}), 401
    s = Scheme.query.get_or_404(sid)
    title = s.title
    db.session.delete(s)
    db.session.commit()
    return jsonify({'success': True, 'message': f'"{title}" deleted.'})

@app.route('/admin/scheme/toggle/<int:sid>', methods=['POST'])
def admin_toggle_scheme(sid):
    if not session.get('admin_logged_in'):
        return jsonify({'error': 'Unauthorized'}), 401
    s = Scheme.query.get_or_404(sid)
    s.status = 'inactive' if s.status == 'active' else 'active'
    db.session.commit()
    return jsonify({'success': True, 'status': s.status})

# ─── FARMER ROUTES ──────────────────────────────────────────────────────────────

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/govscheme')
def govscheme():
    return render_template('govscheme.html')

@app.route('/financial')
def financial():
    return render_template('financial.html')

@app.route('/insurance')
def insurance():
    return render_template('insurance.html')

@app.route('/scheme_detail')
def scheme_detail():
    return render_template('scheme_detail.html')

# ─── APIs ───────────────────────────────────────────────────────────────────────

@app.route('/api/schemes')
def api_schemes():
    category = request.args.get('category','')
    stype = request.args.get('type','')
    q = Scheme.query.filter_by(status='active')
    if category:
        q = q.filter_by(category=category)
    if stype and stype != 'All':
        q = q.filter_by(scheme_type=stype)
    return jsonify([s.to_dict() for s in q.order_by(Scheme.created_at.desc()).all()])

@app.route('/api/schemes/<int:sid>')
def api_scheme_detail(sid):
    return jsonify(Scheme.query.get_or_404(sid).to_dict())

@app.route('/api/chatbot', methods=['POST'])
def chatbot():
    data = request.get_json()
    user_message = data.get('message','').strip()
    user_lang = data.get('lang','en')

    if not user_message:
        return jsonify({'reply': 'Please type a message.'})

    # Translate to English for processing
    msg_en = user_message
    if user_lang != 'en':
        try:
            r = requests.post(LIBRE_TRANSLATE_URL, json={
                'q': user_message, 'source': user_lang, 'target': 'en',
                'format': 'text', 'api_key': LIBRE_TRANSLATE_KEY}, timeout=5)
            if r.status_code == 200:
                msg_en = r.json().get('translatedText', user_message)
        except Exception:
            pass

    msg_lower = msg_en.lower()
    schemes = Scheme.query.filter_by(status='active').all()

    # Keyword match in DB
    matched = []
    for s in schemes:
        combined = f"{s.title} {s.tags} {s.description}".lower()
        words = [w for w in msg_lower.split() if len(w) > 2]
        if any(w in combined for w in words):
            matched.append(s)

    # Build English reply
    if any(k in msg_lower for k in ['hello','hi','namaste','namaskar','start','help']):
        reply_en = ("Namaskar! I am Kisan Mitra, your farming assistant.\n\n"
                    "I can help you find:\n- Government Schemes\n- Financial Support & Loans\n- Insurance Schemes\n\n"
                    "Try asking:\n- What is PM-KISAN?\n- Crop insurance scheme\n- KCC loan\n- Maharashtra farmer schemes")
    elif any(k in msg_lower for k in ['thank','thanks','dhanyawad']):
        reply_en = "You're welcome! Feel free to ask anything about farming schemes."
    elif matched:
        if len(matched) == 1:
            s = matched[0]
            reply_en = (f"{s.title}\n\n{s.description}\n\n"
                        f"Eligibility: {s.eligibility}\n"
                        f"Benefits: {s.benefits}\n"
                        f"Helpline: {s.phone or 'N/A'}\n"
                        f"Apply: {s.official_url or 'Contact agriculture office'}")
        else:
            names = "\n".join([f"- {s.title} ({s.category.upper()})" for s in matched[:5]])
            reply_en = f"Found {len(matched)} matching schemes:\n\n{names}\n\nAsk about any specific scheme for full details."
    elif any(k in msg_lower for k in ['govt','government','sarkari','yojana']):
        g = Scheme.query.filter_by(status='active',category='govt').limit(3).all()
        reply_en = "Active Government Schemes:\n" + "\n".join([f"- {s.title}" for s in g]) + "\n\nAsk me for details!"
    elif any(k in msg_lower for k in ['loan','finance','financial','money','paise']):
        f = Scheme.query.filter_by(status='active',category='financial').limit(3).all()
        reply_en = "Financial Support Schemes:\n" + "\n".join([f"- {s.title}" for s in f]) + "\n\nAsk me for details!"
    elif any(k in msg_lower for k in ['insurance','bima','crop loss','fasal']):
        i = Scheme.query.filter_by(status='active',category='insurance').limit(3).all()
        reply_en = "Insurance Schemes:\n" + "\n".join([f"- {s.title}" for s in i]) + "\n\nAsk me for details!"
    elif any(k in msg_lower for k in ['maharashtra','state','rajya']):
        m = Scheme.query.filter_by(status='active',scheme_type='Maharashtra').limit(4).all()
        reply_en = "Maharashtra State Schemes:\n" + "\n".join([f"- {s.title}" for s in m]) + "\n\nAsk for full details!"
    else:
        total = Scheme.query.filter_by(status='active').count()
        reply_en = (f"I couldn't find an exact match. We have {total} active schemes.\n"
                    "Try: 'PM-KISAN', 'crop insurance', 'KCC loan', 'Maharashtra schemes', 'loan schemes'")

    # Translate reply back to user language
    final_reply = reply_en
    if user_lang != 'en':
        try:
            r = requests.post(LIBRE_TRANSLATE_URL, json={
                'q': reply_en, 'source': 'en', 'target': user_lang,
                'format': 'text', 'api_key': LIBRE_TRANSLATE_KEY}, timeout=5)
            if r.status_code == 200:
                final_reply = r.json().get('translatedText', reply_en)
        except Exception:
            final_reply = reply_en

    return jsonify({'reply': final_reply, 'matched_count': len(matched)})

@app.route('/api/translate', methods=['POST'])
def translate_api():
    data = request.get_json()
    try:
        r = requests.post(LIBRE_TRANSLATE_URL, json={
            'q': data.get('q',''), 'source': data.get('source','en'),
            'target': data.get('target','en'), 'format': 'text', 'api_key': LIBRE_TRANSLATE_KEY
        }, timeout=5)
        return jsonify(r.json())
    except Exception as e:
        return jsonify({'translatedText': data.get('q',''), 'error': str(e)})

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
        seed_data()
    app.run(debug=True, host='0.0.0.0', port=5000)
