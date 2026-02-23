import React, { useState } from 'react';
import './App.css';
import { motion } from 'framer-motion';
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

function App() {
  const [step, setStep] = useState('PREINTRO');
  const [userData, setUserData] = useState(null);
  const [report, setReport] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const API_BASE_URL = process.env.REACT_APP_API_URL;

  // Unutar App funkcije, pored ostalih funkcija:
  const goBack = () => {
    if (step === 'OPEN_TRAININGS') setStep('PREINTRO');
    else if (step === 'VALUE_BASED_CLOSING') setStep('OPEN_TRAININGS');
    else if (step === 'SUCCESS_LINE') setStep('OPEN_TRAININGS');
    else if (step === 'START') setStep('INTRO');
    else if (step === 'TEST') setStep('START');
    else if (step === 'PERCEPTION_BASED') setStep('OPEN_TRAININGS');
    else if (step === 'PERSONAL_RESPONSIBILITY') setStep('OPEN_TRAININGS');
    else if (step === 'INTRO') setStep('PREINTRO');

    // Možeš dodati i ostale korake po potrebi
  };

  const handlePortalChoice = (choice) => {
    if (choice === 'INTERNAL') {
      // Ovde stavi gde želiš da ide B2B (npr. poseban Landing ili neka druga komponenta)
      setStep('INTRO');
    } else if (choice === 'OPEN_TRAININGS') {
      // Ovo vodi na stranicu sa otvorenim treninzima
      setStep('OPEN_TRAININGS');
    } else if (choice === 'ASSESSMENT') {
      // Ovo vodi direktno na početak testiranja
      setStep('START');
    } else {
      // Default fallback
      setStep('INTRO');
    }
  };

  const handleFinish = async (finalAnswers) => {
    setStep('LOADING');
    setErrorMsg(null);
    try {
      const response = await fetch(`${API_BASE_URL}/api/public-assessment/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...userData, responses: finalAnswers })
      });
      const data = await response.json();
      if (response.ok) {
        setReport(data.report);
        setStep('RESULT');
      } else {
        // Server je vratio 400 (Email već postoji)
        if (response.status === 400 || (data.message && data.message.includes('postoji'))) {
          setErrorMsg("Iskoristili ste jedan besplatan izveštaj. Javite nam se za dalju saradnju.");
        } else {
          setErrorMsg(data.message || "Došlo je do greške pri čuvanju.");
        }

        // KLJUČNO: Vraćamo na START, ali resetujemo loading
        setStep('START');
      }
    } catch (error) {
      console.error("Greška:", error);
      setErrorMsg("Serverska greška. Pokušajte ponovo kasnije.");
      setStep('START');
    }
  };

  const handleLeadSubmit = async (data) => {
    setUserData(data);
    setErrorMsg(null); // Čistimo staru grešku

    try {
      const response = await fetch(`${API_BASE_URL}/api/public-assessment/check-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: data.email })
      });

      // Ako backend kaže da je mail slobodan (Status 200)
      if (response.ok) {
        console.log("Email je OK, prelazim na test...");
        window.scrollTo(0, 0);
        setStep('TEST'); // OVO ŠALJE NA PITANJA
      } else {
        // Ako je mail zauzet (Status 400)
        setErrorMsg("Iskoristili ste jedan besplatan izveštaj. Javite nam se za dalju saradnju.");
        // OVDE NE MENJAMO STEP, ostajemo na formi da korisnik vidi poruku
      }
    } catch (error) {
      console.error("Mreža/Server error:", error);
      // Fallback: Ako API ne radi, ipak ga pusti na test da ne kvariš prodaju
      setStep('TEST');
    }
  };

  // LOGIKA ZA PRIKAZ SIDEBARA
  // Sidebar se prikazuje SAMO za korake koji su deo Assessment procesa
  const showSidebar = ['INTRO', 'START', 'TEST', 'LOADING', 'RESULT'].includes(step);

  return (
    <div className="app-main-wrapper" style={{ backgroundColor: '#0a0a0a', minHeight: '100vh' }}>

      {step !== 'PREINTRO' && step !== 'LOADING' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={goBack}
          style={{
            position: 'fixed',
            top: '30px',
            left: '30px',
            zIndex: 9999, // Da bude iznad svega
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            color: 'rgba(255, 180, 120, 0.8)',
            backgroundColor: 'rgba(0,0,0,0.3)',
            padding: '10px 15px',
            borderRadius: '50px',
            backdropFilter: 'blur(5px)',
            fontSize: '12px',
            fontWeight: 'bold',
            letterSpacing: '1px'
          }}
        >
          <span>←</span> NAZAD
        </motion.div>
      )}

      {/* 1. FULLSCREEN EKRANI (Bez sidebara i split-containera) */}
      {step === 'PREINTRO' && (
        <EclipseIntro onProceed={handlePortalChoice} />
      )}

      {step === 'OPEN_TRAININGS' && (
        <div style={{ width: '100vw', minHeight: '100vh' }}>
          <OpenTrainings onNavigate={(target) => setStep(target)} />
        </div>
      )}

      {step === 'SUCCESS_LINE' && (
        <SuccessLine />
      )}

      {step === 'VALUE_BASED_CLOSING' && (
        <ValueBasedClosing />
      )}

      {step === 'PERCEPTION_BASED' && (
        <PerceptionBasedConversation />
      )}

      {step === 'PERSONAL_RESPONSIBILITY' && (
        <PersonalResponsibility />
      )}

      {/* 2. ASSESSMENT FLOW */}
      {showSidebar && (
        <div className="pd-split-container" style={{
          display: 'flex',
          width: '100%',
          minHeight: '100vh',
          flexDirection: window.innerWidth < 1024 ? 'column' : 'row' // Responsivnost
        }}>

          {/* SIDEBAR - Fiksna širina, ne dozvoljava skupljanje */}
          <div className="pd-sidebar" style={{
            width: window.innerWidth < 1024 ? '100%' : '380px', // Malo širi za bolji balans
            flexShrink: 0, // OVO JE KLJUČNO: Ne dozvoljava desnoj strani da ga "gura"
            backgroundColor: '#050505',
            borderRight: '1px solid rgba(255, 180, 120, 0.1)',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '60px 40px',
            position: window.innerWidth < 1024 ? 'relative' : 'sticky',
            top: 0,
            height: window.innerWidth < 1024 ? 'auto' : '100vh',
            zIndex: 100
          }}>
            <div className="sidebar-header">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ marginBottom: '50px' }}>
                <img src="/logo.png" alt="Hansen Beck" style={{ width: '160px', opacity: 0.9 }} />
              </motion.div>

              <div style={{ color: 'rgba(255, 180, 120, 0.6)', fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '15px' }}>
                The Expedition
              </div>
              <h1 style={{ fontSize: '24px', fontWeight: '900', lineHeight: '1.2', letterSpacing: '-1px', color: '#fff' }}>
                Ideal Profile <br /> Assessment
              </h1>

              {/* Kompas vizual sa stranama sveta */}
              <div className="sidebar-visual" style={{
                marginTop: '50px',
                height: '200px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}>
                {/* Rotirajući spoljni prsten */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  style={{
                    position: 'absolute',
                    width: '160px',
                    height: '160px',
                    border: '1px solid rgba(255, 180, 120, 0.05)',
                    borderRadius: '50%'
                  }}
                />

                {/* Unutrašnji krst i krug */}
                <div style={{ position: 'absolute', width: '120px', height: '120px', border: '1px solid rgba(255, 255, 255, 0.03)', borderRadius: '50%' }}>
                  <div style={{ position: 'absolute', left: '50%', top: '0', bottom: '0', width: '1px', background: 'rgba(255, 180, 120, 0.08)' }} />
                  <div style={{ position: 'absolute', top: '50%', left: '0', right: '0', height: '1px', background: 'rgba(255, 180, 120, 0.08)' }} />
                </div>

                {/* STRANE SVETA */}
                <div style={{ position: 'absolute', width: '140px', height: '140px', color: 'rgba(255, 180, 120, 0.4)', fontSize: '10px', fontWeight: '700', letterSpacing: '1px' }}>
                  <span style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)' }}>N</span>
                  <span style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)' }}>S</span>
                  <span style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)' }}>E</span>
                  <span style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)' }}>W</span>
                </div>

                {/* IGLE KOMPASA */}
                <motion.div
                  animate={{ rotate: [178, 182, 180] }}
                  transition={{ duration: 8, repeat: Infinity }}
                  style={{
                    position: 'relative',
                    width: '1px',
                    height: '100px',
                    background: 'linear-gradient(to bottom, rgba(255, 180, 120, 1) 50%, rgba(255, 255, 255, 0.1) 50%)',
                    zIndex: 2
                  }}
                >
                  {/* Sjajni vrh igle */}
                  <div style={{
                    position: 'absolute',
                    top: '-2px',
                    left: '-2.5px',
                    width: '6px',
                    height: '6px',
                    background: '#fff',
                    borderRadius: '50%',
                    boxShadow: '0 0 15px rgba(255, 180, 120, 1)'
                  }} />
                </motion.div>
              </div>

              <p style={{ marginTop: '50px', fontSize: '13px', color: '#555', fontStyle: 'italic', lineHeight: '1.6' }}>
                "Expertise to equip you for your successful journey."
              </p>
            </div>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '20px' }}>
              <p style={{ fontSize: '9px', color: '#333', textTransform: 'uppercase', letterSpacing: '2px' }}>© 2026 HansenBeck</p>
            </div>
          </div>

          {/* DESNI SADRŽAJ - flex: 1 ga tera da uzme sav preostali prostor */}
          <div className="pd-content" style={{
            flex: 1,
            backgroundColor: '#0a0a0a',
            position: 'relative',
            minWidth: 0,
            zIndex: 1 // Osiguravamo da sadržaj ima svoj sloj
          }}>
            {/* LOG ZA DEBUGGING - videćeš u konzoli svaki put kad se promeni step */}
            {console.log("Trenutni korak je:", step)}

            {step === 'INTRO' && (
              <LandingPage onStart={() => setStep('START')} />
            )}

            {step === 'START' && (
              <LeadForm
                errorMsg={errorMsg}
                onNext={handleLeadSubmit}
              />
            )}

            {step === 'TEST' && (
              <Assessment onFinish={handleFinish} />
            )}

            {step === 'LOADING' && (
              <LoadingScreen />
            )}

            {step === 'RESULT' && (
              <ResultView report={report} userData={userData} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;