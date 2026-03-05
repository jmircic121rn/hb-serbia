import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { translations } from '../data/translations';
import { HBButton } from './UIComponents';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const h = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', h);
    return () => window.removeEventListener('resize', h);
  }, []);
  return isMobile;
};

// --- POMOĆNA KOMPONENTA ZA SLIKE (Centrirana) ---
const ImageAccent = ({ src, width = '300px', margin = '0 auto 40px auto' }) => {
  const isPhoto = src.toLowerCase().endsWith('.jpg') || src.toLowerCase().endsWith('.jpeg');
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={{
        width: width,
        margin: margin,
        zIndex: 2,
        maxWidth: '100%'
      }}
    >
      <img src={src} alt="" style={{
        width: '100%',
        height: 'auto',
        filter: isPhoto ? 'brightness(1.1) contrast(1.05) saturate(1.1)' : 'grayscale(100%) brightness(1.1)',
        borderRadius: '2px',
        display: 'block',
        boxShadow: isPhoto ? '0 20px 40px rgba(0,0,0,0.4)' : 'none'
      }} />
    </motion.div>
  );
};

// --- DETALJAN PRIKAZ ---
const DetailView = ({ type, t, onBack, onProceed }) => {
  const data = type === 'LEADER' ? t.leader : t.employee;

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      <button onClick={onBack} style={{
        background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)',
        cursor: 'pointer', marginBottom: '40px', fontWeight: 'bold',
        fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase'
      }}>
        ← {t.common.back}
      </button>

      <h4 style={{ color: '#888', letterSpacing: '4px', textTransform: 'uppercase', fontSize: '11px', marginBottom: '15px' }}>
        {type} PATHWAY
      </h4>
      <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: '900', marginBottom: '20px', lineHeight: '1.1' }}>{data.title}</h1>
      <h3 style={{ color: 'rgba(255,255,255,0.6)', fontSize: '20px', fontWeight: '400', marginBottom: '40px' }}>{data.subtitle}</h3>

      <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#ccc', marginBottom: '50px' }}>
        {data.mainDescription}
      </p>

      <div style={{ display: 'grid', gap: '20px', marginBottom: '60px', textAlign: 'left' }}>
        {(type === 'LEADER' ? data.capabilities : data.vbcFeatures).map((item, i) => (
          <div key={i} style={{
            padding: '30px',
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.05)',
            borderLeft: '2px solid #fff'
          }}>
            <strong style={{ color: '#fff', display: 'block', marginBottom: '8px', fontSize: '18px' }}>{item.title}</strong>
            <span style={{ color: '#888', fontSize: '15px', lineHeight: '1.6' }}>{item.text}</span>
          </div>
        ))}
      </div>

      <div style={{ paddingBottom: '100px' }}>
        <HBButton onClick={onProceed}>
          {t.common.startBtn}
        </HBButton>
      </div>
    </div>
  );
};

// --- GLAVNA LANDING PAGE KOMPONENTA ---
const LandingPage = ({ onStart, language }) => {
  const [view, setView] = useState('MAIN');
  const isMobile = useIsMobile();
  const t = translations[language];
  const circleSize = isMobile ? Math.min(window.innerWidth * 0.85, 350) : 500;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  return (
    <div style={{
      backgroundColor: '#050505',
      color: '#fff',
      minHeight: '100vh',
      width: '100vw',           // Uzima punu širinu viewporta
      marginLeft: 'calc(-50vw + 50%)', // Neutrališe potencijalne očeve kontejnere
      marginRight: 'calc(-50vw + 50%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxSizing: 'border-box',
      fontFamily: "'PT Sans', sans-serif",
      position: 'relative',
      overflowX: 'hidden'
    }}>
      <AnimatePresence mode="wait">
        {view === 'MAIN' ? (
          <motion.div
            key="main"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{ maxWidth: '900px', width: '100%', textAlign: 'center' }}
          >
            {/* HERO SEKCIJA SA EKLIPSOM I HB KOMPAS TEKSTOM */}
            <section style={{
              height: '100vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              padding: '0 10%',
              position: 'relative',
              overflow: 'hidden',
              backgroundColor: '#050505',
              marginBottom: '60px'
            }}>
              {/* EKLIPSA KONTEJNER */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                style={{
                  position: 'relative',
                  width: `${circleSize}px`,
                  height: `${circleSize}px`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '-20px',
                  zIndex: 5
                }}
              >
                {/* Glow efekti */}
                <motion.div animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 6, repeat: Infinity }} style={{ position: 'absolute', width: '120%', height: '120%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255, 180, 120, 0.15) 0%, rgba(255, 100, 50, 0) 70%)', filter: 'blur(60px)', zIndex: 1 }} />

                {/* Horizontalna linija */}
                <div style={{ position: 'absolute', width: `${circleSize * 0.6}px`, height: '5px', background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.9) 50%, transparent)', clipPath: 'polygon(0% 50%, 50% 0%, 100% 50%, 50% 100%)', filter: 'blur(1px)', zIndex: 7, right: `${-circleSize * 0.2}px`, top: '51%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />

                {/* Svetlosni prstenovi */}
                <div style={{ position: 'absolute', width: `${circleSize * 0.808}px`, height: `${circleSize * 0.808}px`, borderRadius: '50%', background: 'conic-gradient(from 260deg at 50% 50%, transparent 0%, rgba(255, 255, 255, 0.8) 15%, transparent 30%)', filter: 'blur(2px)', transform: 'rotate(80deg)', zIndex: 4 }} />
                <div style={{ position: 'absolute', width: `${circleSize * 0.808}px`, height: `${circleSize * 0.808}px`, borderRadius: '50%', background: 'conic-gradient(from 80deg at 50% 50%, transparent 0%, rgba(255, 255, 255, 0.8) 15%, transparent 30%)', filter: 'blur(2px)', transform: 'rotate(80deg)', zIndex: 4 }} />

                {/* Diamond/Sparkle tačka */}
                <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }} transition={{ duration: 3, repeat: Infinity }} style={{ position: 'absolute', right: `${circleSize * 0.09}px`, top: '50%', transform: 'translateY(-50%)', width: '10px', height: '10px', backgroundColor: '#fff', borderRadius: '50%', zIndex: 10, boxShadow: '0 0 30px 10px rgba(255, 255, 255, 0.9)' }} />

                {/* CENTRALNI CRNI DISK */}
                <div style={{
                  position: 'relative',
                  width: `${circleSize * 0.8}px`,
                  height: `${circleSize * 0.8}px`,
                  backgroundColor: '#000',
                  borderRadius: '50%',
                  zIndex: 5,
                  boxShadow: '0 0 20px rgba(0,0,0,1)'
                }} />
              </motion.div>

              {/* TEKST HERO SEKCIJE KOJI PREKLAPA EKLIPSU */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                style={{
                  zIndex: 10,
                  marginTop: isMobile ? `-${circleSize * 0.35}px` : '-160px',
                  position: 'relative',
                  padding: isMobile ? '0 16px' : '0'
                }}
              >
                <h4 style={{ color: 'rgba(255, 255, 255, 0.8)', letterSpacing: '5px', textTransform: 'uppercase', fontSize: '12px', marginBottom: '20px' }}>
                  {t.form.tag}
                </h4>
                <h1 style={{
                  fontSize: isMobile ? 'clamp(24px, 7vw, 40px)' : 'clamp(30px, 4vw, 72px)',
                  fontWeight: '900',
                  lineHeight: '1.1',
                  maxWidth: '900px',
                  marginBottom: '20px',
                  textShadow: '0 0 30px rgba(0,0,0,0.8)'
                }}>
                  {t.compass.title}
                </h1>
                <p style={{
                  fontSize: isMobile ? '16px' : '20px',
                  lineHeight: '1.8',
                  color: '#ccc',
                  maxWidth: '750px',
                  margin: '0 auto',
                  textShadow: '0 0 10px rgba(0,0,0,0.5)'
                }}>
                  {t.compass.description}
                </p>
              </motion.div>
            </section>

            {/* CITAT */}
            <div style={{
              marginBottom: '120px',
              padding: '80px 40px',
              borderTop: '1px solid rgba(255,255,255,0.1)',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
            }}>
              <p style={{ fontSize: 'clamp(20px, 4vw, 28px)', fontStyle: 'italic', color: '#fff', lineHeight: '1.5', opacity: 0.9, maxWidth: '750px', margin: '0 auto' }}>
                "{t.compass.subquote}"
              </p>
            </div>

            {/* DIMENZIJE */}
            <div style={{ marginBottom: '120px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                {Object.values(t.compass.dimensions).map((dim, i) => (
                  <div key={i} style={{
                    padding: '40px',
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    textAlign: 'left'
                  }}>
                    <h5 style={{ fontWeight: '900', letterSpacing: '2px', marginBottom: '15px', color: '#fff', textTransform: 'uppercase', fontSize: '13px' }}>
                      {dim.title}
                    </h5>
                    <p style={{ color: '#777', fontSize: '15px', lineHeight: '1.7' }}>
                      {dim.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* PATH SELECTION */}
<div style={{ textAlign: 'center', paddingBottom: '100px' }}>
  <ImageAccent src="/images/t10.jpg" width="80%" />
  <h3 style={{ fontSize: '12px', letterSpacing: '4px', color: 'rgba(255,255,255,0.4)', marginBottom: '50px', textTransform: 'uppercase' }}>
    {t.common.selectPath}
  </h3>

  <motion.div
    whileHover={{ scale: 1.02, backgroundColor: '#111' }}
    whileTap={{ scale: 0.98 }}
    onClick={() => setView('LEADER')}
    style={{
      padding: '40px 30px',           // Smanjen padding (bilo je 80x40)
      background: '#0e0e0e',             // Crna pozadina
      color: '#fff',                  // Beli tekst
      cursor: 'pointer',
      transition: '0.3s',
      width: '100%',
      maxWidth: '400px',              // Smanjena maksimalna širina
      margin: '0 auto',
      border: '1px solid rgba(255,255,255,0.1)', // Suptilna ivica da se dugme uoči
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
      borderRadius: '4px'             // Blago zaobljene ivice za moderniji izgled
    }}
  >
    {/* Ikona (filter invert je tu ako je originalna ikona crna, da postane bela) */}
    <img src="/leader.png" alt="" style={{ width: '120px', marginBottom: '20px', filter: 'invert(1)' }} />
    
    <h3 style={{ fontSize: '24px', fontWeight: '900', marginBottom: '10px' }}>
        {t.leader.title}
    </h3>
    
    <p style={{ color: '#888', fontSize: '15px', fontWeight: '400', marginBottom: '0' }}>
        {t.leader.subtitle}
    </p>

    <div style={{ 
        marginTop: '30px', 
        fontSize: '11px', 
        fontWeight: '900', 
        letterSpacing: '3px', 
        textTransform: 'uppercase', 
        borderTop: '1px solid rgb(255, 255, 255)', 
        paddingTop: '20px',
        color: '#fff'
    }}>
      {t.common.learnMore} →
    </div>
  </motion.div>
</div>
          </motion.div>
        ) : (
          <motion.div key="details" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
            <DetailView type={view} t={t} onBack={() => setView('MAIN')} onProceed={() => onStart(view)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LandingPage;