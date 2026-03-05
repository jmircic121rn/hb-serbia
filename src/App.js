import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar'; // Dodaj ovaj import

// Importi komponenti
import LandingPage from './components/LandingPage';
import LeadForm from './components/LeadForm';
import LoadingScreen from './components/LoadingScreen';
import ResultView from './components/ResultView';
import Assessment from './components/Assessment';
import EclipseIntro from './components/EclipseIntro';
import OpenTrainings from './components/OpenTrainings';
import SuccessLine from './components/SuccessLine';
import ValueBasedClosing from './components/ValueBasedClosing';
import PerceptionBasedConversation from './components/PerceptionBasedConversation';
import PersonalResponsibility from './components/PersonalResponsibility';
import AboutUs from './components/AboutUs';
import Trainers from './components/Trainers';
import PrivacyPolicy from './components/PrivacyPolicy';
import VerifyEmail from './components/VerifyEmail';
import { translations } from './data/translations';
import InternalTrainings from './components/InternalTrainings';
import AssessmentIntro from './components/AssessmentIntro';
import PdfDebugger from './components/PdfDebugger';


const AssessmentLayout = ({ children, isMobile }) => (
  <div className="main-layout-wrapper">
    <div className="pd-split-container" style={{
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      minHeight: '100vh',
      overflow: 'visible'
    }}>
      <main className="pd-content" style={{
        flex: 1,
        overflow: 'visible',
        paddingTop: isMobile ? '80px' : '120px'
      }}>
        {children}
      </main>
    </div>
  </div>
);

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [language, setLanguage] = useState(localStorage.getItem('appLanguage') || 'sr');
  const [assessmentType, setAssessmentType] = useState(localStorage.getItem('hb_assessmentType') || null);
  const [userData, setUserData] = useState(() => {
    const saved = localStorage.getItem('hb_userData');
    return saved ? JSON.parse(saved) : null;
  });
  const [report, setReport] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const API_BASE_URL = process.env.REACT_APP_API_URL;
  const checkIntervalRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // POLLING ZA VERIFIKACIJU (Prati rutu /assessment/verify)
  useEffect(() => {
    if (location.pathname === '/assessment/verify' && userData?.email) {
      checkIntervalRef.current = setInterval(async () => {
        try {
          const res = await fetch(`${API_BASE_URL}/api/public-assessment/check-status?email=${userData.email}`);
          const data = await res.json();
          if (data.isVerified) {
            clearInterval(checkIntervalRef.current);
            navigate('/');
          }
        } catch (err) { console.error("Polling error:", err); }
      }, 3000);
    }
    return () => { if (checkIntervalRef.current) clearInterval(checkIntervalRef.current); };
  }, [location.pathname, userData, API_BASE_URL, navigate]);

  const handleLeadSubmit = async (data) => {
    setErrorMsg(null);
    try {
      const response = await fetch(`${API_BASE_URL}/api/public-assessment/check-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, lang: language })
      });
      const result = await response.json();
      if (response.ok) {
        setUserData(data);
        localStorage.setItem('hb_userData', JSON.stringify(data));
        navigate('/assessment/verify');
      } else {
        setErrorMsg(result.code === 'ALREADY_DONE' ? translations[language].form.alreadyDone : translations[language].form.serverError);
      }
    } catch (error) { setErrorMsg(translations[language].form.serverError); }
  };

  const handleFinish = async (finalAnswers) => {
    navigate('/assessment/loading');
    try {
      const response = await fetch(`${API_BASE_URL}/api/public-assessment/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...userData, responses: finalAnswers, type: assessmentType, lang: language })
      });
      const data = await response.json();
      if (response.ok) {
        setReport(data.report);
        localStorage.removeItem('hb_userData');
        localStorage.removeItem('hb_assessmentType');
        navigate('/assessment/results');
      } else {
        navigate('/assessment/form');
      }
    } catch (error) { navigate('/assessment'); }
  };

  return (
    <div className="app-main-wrapper" style={{ backgroundColor: '#0a0a0a', minHeight: '100vh' }}>

  <Navbar language={language} setLanguage={setLanguage} />
      <Routes>
        <Route path="/debug-pdf" element={<PdfDebugger />} />
        {/* 1. PLANETE (Pre-intro) */}
        <Route path="/" element={
          <EclipseIntro
            onProceed={(choice) => {
              if (choice === 'ABOUT') navigate('/about');
              else if (choice === 'TRAINERS') navigate('/trainers');
              else if (choice === 'OPEN_TRAININGS') navigate('/open-trainings');
              else if (choice === 'INTERNAL_TRAININGS') navigate('/internal-trainings'); // 2. DODATA PUTANJA
              else navigate('/assessment'); // OVO SADA VODI NA URL /assessment
            }}
            language={language}
            setLanguage={setLanguage}
          />
        } />
        <Route path="/internal-trainings" element={<InternalTrainings language={language} />} />

        {/* 2. LANDING PAGE (Sada ima svoj URL /assessment) */}
        <Route path="/assessment" element={
          <AssessmentLayout isMobile={isMobile}>
            <LandingPage
              onStart={(type) => { setAssessmentType(type); localStorage.setItem('hb_assessmentType', type); navigate('/assessment/form'); }}
              language={language}
            />
          </AssessmentLayout>
        } />

        {/* 3. FORMA */}
        <Route path="/assessment/form" element={
          <AssessmentLayout isMobile={isMobile}>
            <LeadForm
              language={language}
              errorMsg={errorMsg}
              onNext={handleLeadSubmit}
              onPrivacyClick={() => navigate('/politika-privatnosti')}
            />
          </AssessmentLayout>
        } />

        {/* 4. VERIFIKACIJA */}
        <Route path="/assessment/verify" element={
          <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px' }}>
            <div style={{ textAlign: 'center', maxWidth: '500px', width: '100%' }}>
              {/* Email ikonica */}
              <div style={{ marginBottom: '40px', position: 'relative', display: 'inline-block' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="rgba(255, 255, 255, 0.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="M2 7l10 7 10-7"/>
                  </svg>
                </div>
                {/* Pulsing ring */}
                <div style={{ position: 'absolute', inset: '-8px', borderRadius: '50%', border: '1px solid rgba(255,180,120,0.12)', animation: 'pulse 2s ease-in-out infinite' }} />
              </div>

              <p style={{ fontSize: '11px', letterSpacing: '5px', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '16px' }}>
                {language === 'sr' ? 'Korak 2 od 3' : 'Step 2 of 3'}
              </p>
              <h1 style={{ fontSize: isMobile ? '32px' : '42px', fontWeight: '900', color: '#fff', marginBottom: '20px', lineHeight: 1.15 }}>
                {language === 'sr' ? 'Proverite mejl.' : 'Check your email.'}
              </h1>
              <p style={{ fontSize: '16px', color: '#888', lineHeight: '1.7', marginBottom: '32px' }}>
                {language === 'sr'
                  ? 'Poslali smo vam link za potvrdu na adresu:'
                  : 'We sent a confirmation link to:'}
              </p>
              {userData?.email && (
                <div style={{ display: 'inline-block', padding: '12px 24px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px', marginBottom: '32px' }}>
                  <span style={{ color: '#fff', fontSize: '15px', fontWeight: '500', letterSpacing: '0.5px' }}>{userData.email}</span>
                </div>
              )}
              <p style={{ fontSize: '13px', color: '#555', lineHeight: '1.6' }}>
                {language === 'sr'
                  ? 'Kliknite na link u mejlu — test će se otvoriti automatski. Ova stranica se može zatvoriti.'
                  : 'Click the link in the email — the test will open automatically. You may close this page.'}
              </p>
              <div style={{ marginTop: '48px', padding: '20px', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.6)', animation: 'dot-pulse 1.4s ease-in-out infinite' }} />
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.6)', animation: 'dot-pulse 1.4s ease-in-out 0.2s infinite' }} />
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.6)', animation: 'dot-pulse 1.4s ease-in-out 0.4s infinite' }} />
                <span style={{ marginLeft: '12px', fontSize: '11px', color: '#444', letterSpacing: '2px', textTransform: 'uppercase' }}>
                  {language === 'sr' ? 'Čekamo potvrdu' : 'Waiting for confirmation'}
                </span>
              </div>
            </div>
            <style>{`
              @keyframes dot-pulse { 0%, 80%, 100% { opacity: 0.2; transform: scale(0.8); } 40% { opacity: 1; transform: scale(1); } }
              @keyframes pulse { 0%, 100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 0.6; transform: scale(1.08); } }
            `}</style>
          </div>
        } />

        <Route path="/assessment/intro" element={
    <AssessmentLayout isMobile={isMobile}>
      <AssessmentIntro
        language={language} 
        onStart={() => navigate('/assessment/test')} 
      />
    </AssessmentLayout>
  } />

        {/* 5. TEST */}
        <Route path="/assessment/test" element={
          <AssessmentLayout isMobile={isMobile}>
            <Assessment language={language} type={assessmentType} onFinish={handleFinish} />
          </AssessmentLayout>
        } />

        {/* 6. LOADING & REZULTAT */}
        <Route path="/assessment/loading" element={<LoadingScreen language={language} />} />
        <Route path="/assessment/results" element={<AssessmentLayout isMobile={isMobile}><ResultView report={report} userData={userData} language={language} /></AssessmentLayout>} />

        {/* --- OSTALE RUTE --- */}
        <Route path="/about" element={<AboutUs onBack={() => navigate('/')} language={language} />} />
        <Route path="/trainers" element={<Trainers onBack={() => navigate('/')} />} />
        <Route path="/open-trainings" element={<OpenTrainings onNavigate={(path) => navigate(path)} />} />
        <Route path="/success-line" element={<SuccessLine />} />
        <Route path="/value-based-closing" element={<ValueBasedClosing />} />
        <Route path="/perception-based" element={<PerceptionBasedConversation />} />
        <Route path="/personal-responsibility" element={<PersonalResponsibility />} />
        <Route path="/politika-privatnosti" element={<PrivacyPolicy language={language} onBack={() => navigate(-1)} />} />
        <Route path="/verify" element={<VerifyEmail />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;