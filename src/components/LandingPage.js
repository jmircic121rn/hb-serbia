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


// --- DETALJAN PRIKAZ ---
const DetailView = ({ type, t, onBack, onProceed }) => {
  const data = type === 'LEADER' ? t.leader : t.employee;

  const SectionTitle = ({ children }) => (
    <h2 style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: '900', color: '#fff', marginBottom: '24px', marginTop: '60px' }}>
      {children}
    </h2>
  );

  const BodyText = ({ text }) => (
    <>
      {text.split('\n\n').map((para, i) => (
        <p key={i} style={{ fontSize: '17px', lineHeight: '1.85', color: 'rgba(255,255,255,0.65)', marginBottom: '18px' }}>
          {para}
        </p>
      ))}
    </>
  );

  return (
    <div style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'left', padding: '80px 10% 100px' }}>
      <button onClick={onBack} style={{
        background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)',
        cursor: 'pointer', marginBottom: '50px', fontWeight: 'bold',
        fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', display: 'block'
      }}>
        ← {t.common.back}
      </button>

      <p style={{ color: 'rgba(255,255,255,0.35)', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '11px', marginBottom: '16px' }}>
        {data.subtitle}
      </p>
      <h1 style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: '900', marginBottom: '40px', lineHeight: '1.1', color: '#fff' }}>
        {data.title}
      </h1>

      <BodyText text={data.mainDescription} />

      {type === 'LEADER' ? (
        <>
          <SectionTitle>{data.whatTitle}</SectionTitle>
          <p style={{ fontSize: '17px', lineHeight: '1.85', color: 'rgba(255,255,255,0.65)', marginBottom: '40px' }}>
            {data.whatText}
          </p>

          <div style={{ display: 'grid', gap: '2px', marginBottom: '20px' }}>
            {data.capabilities.map((item, i) => (
              <div key={i} style={{
                padding: '36px 32px',
                background: 'rgba(255,255,255,0.02)',
                borderLeft: '2px solid rgba(255,255,255,0.15)'
              }}>
                <strong style={{ color: '#fff', display: 'block', marginBottom: '16px', fontSize: '17px', lineHeight: '1.3' }}>{item.title}</strong>
                <BodyText text={item.text} />
              </div>
            ))}
          </div>

          <SectionTitle>{data.levelsTitle}</SectionTitle>
          <p style={{ fontSize: '17px', lineHeight: '1.85', color: 'rgba(255,255,255,0.65)', marginBottom: '28px' }}>
            {data.levelsIntro}
          </p>
          <div style={{ display: 'grid', gap: '2px', marginBottom: '20px' }}>
            {data.levels.map((lvl, i) => (
              <div key={i} style={{ padding: '24px 32px', background: 'rgba(255,255,255,0.02)', borderLeft: '2px solid rgba(255,255,255,0.08)' }}>
                <strong style={{ color: '#fff', fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>{lvl.name}</strong>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '15px', lineHeight: '1.7', margin: 0 }}>{lvl.text}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '15px', lineHeight: '1.75', color: 'rgba(255,255,255,0.4)', marginBottom: '20px', fontStyle: 'italic' }}>
            {data.levelsFootnote}
          </p>

          <SectionTitle>{data.whoTitle}</SectionTitle>
          <BodyText text={data.whoText} />

          <SectionTitle>{data.assessTitle}</SectionTitle>
          <BodyText text={data.assessText} />
        </>
      ) : (
        <div style={{ display: 'grid', gap: '2px', marginBottom: '40px' }}>
          {data.vbcFeatures.map((item, i) => (
            <div key={i} style={{ padding: '30px 32px', background: 'rgba(255,255,255,0.02)', borderLeft: '2px solid rgba(255,255,255,0.15)' }}>
              <strong style={{ color: '#fff', display: 'block', marginBottom: '8px', fontSize: '17px' }}>{item.title}</strong>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '15px', lineHeight: '1.7', margin: 0 }}>{item.text}</p>
            </div>
          ))}
        </div>
      )}

      <div style={{ marginTop: '60px', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '40px' }}>
        <HBButton onClick={onProceed}>
          {t.common.startBtn}
        </HBButton>
        {type === 'LEADER' && data.privacyNote && (
          <p style={{ marginTop: '20px', fontSize: '13px', color: 'rgba(255,255,255,0.25)', lineHeight: '1.6' }}>
            {data.privacyNote}
          </p>
        )}
      </div>
    </div>
  );
};

// --- GLAVNA LANDING PAGE KOMPONENTA ---
const LandingPage = ({ onStart, language }) => {
  const [view, setView] = useState('MAIN');
  const [carouselIdx, setCarouselIdx] = useState(0);
  const isMobile = useIsMobile();
  const t = translations[language];
  const circleSize = isMobile ? Math.min(window.innerWidth * 0.85, 350) : 500;
  const carouselImages = ['/images/t8.jpg', '/images/t9.jpg', '/images/t10.jpg'];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  useEffect(() => {
    const timer = setInterval(() => setCarouselIdx(i => (i + 1) % 3), 3800);
    return () => clearInterval(timer);
  }, []);

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
            style={{ width: '100%', textAlign: 'center' }}
          >
            {/* HERO — dark */}
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
            }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                style={{ position: 'relative', width: `${circleSize}px`, height: `${circleSize}px`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '-20px', zIndex: 5 }}
              >
                <motion.div animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 6, repeat: Infinity }} style={{ position: 'absolute', width: '120%', height: '120%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255, 180, 120, 0.15) 0%, rgba(255, 100, 50, 0) 70%)', filter: 'blur(60px)', zIndex: 1 }} />
                <div style={{ position: 'absolute', width: `${circleSize * 0.6}px`, height: '5px', background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.9) 50%, transparent)', clipPath: 'polygon(0% 50%, 50% 0%, 100% 50%, 50% 100%)', filter: 'blur(1px)', zIndex: 7, right: `${-circleSize * 0.2}px`, top: '51%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', width: `${circleSize * 0.808}px`, height: `${circleSize * 0.808}px`, borderRadius: '50%', background: 'conic-gradient(from 260deg at 50% 50%, transparent 0%, rgba(255, 255, 255, 0.8) 15%, transparent 30%)', filter: 'blur(2px)', transform: 'rotate(80deg)', zIndex: 4 }} />
                <div style={{ position: 'absolute', width: `${circleSize * 0.808}px`, height: `${circleSize * 0.808}px`, borderRadius: '50%', background: 'conic-gradient(from 80deg at 50% 50%, transparent 0%, rgba(255, 255, 255, 0.8) 15%, transparent 30%)', filter: 'blur(2px)', transform: 'rotate(80deg)', zIndex: 4 }} />
                <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }} transition={{ duration: 3, repeat: Infinity }} style={{ position: 'absolute', right: `${circleSize * 0.09}px`, top: '50%', transform: 'translateY(-50%)', width: '10px', height: '10px', backgroundColor: '#fff', borderRadius: '50%', zIndex: 10, boxShadow: '0 0 30px 10px rgba(255, 255, 255, 0.9)' }} />
                <div style={{ position: 'relative', width: `${circleSize * 0.8}px`, height: `${circleSize * 0.8}px`, backgroundColor: '#000', borderRadius: '50%', zIndex: 5, boxShadow: '0 0 20px rgba(0,0,0,1)' }} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                style={{ zIndex: 10, marginTop: isMobile ? `-${circleSize * 0.35}px` : '-160px', position: 'relative', padding: isMobile ? '0 16px' : '0' }}
              >
                <h4 style={{ color: 'rgba(255, 255, 255, 0.8)', letterSpacing: '5px', textTransform: 'uppercase', fontSize: '12px', marginBottom: '20px' }}>
                  {t.form.tag}
                </h4>
                <h1 style={{ fontSize: isMobile ? 'clamp(24px, 7vw, 40px)' : 'clamp(30px, 4vw, 72px)', fontWeight: '900', lineHeight: '1.1', maxWidth: '900px', marginBottom: '20px', textShadow: '0 0 30px rgba(0,0,0,0.8)' }}>
                  {t.compass.title}
                </h1>
                <p style={{ fontSize: isMobile ? '16px' : '20px', lineHeight: '1.8', color: '#ccc', maxWidth: '750px', margin: '0 auto', textShadow: '0 0 10px rgba(0,0,0,0.5)' }}>
                  {t.compass.description}
                </p>
              </motion.div>
            </section>

            {/* QUOTE */}
            <section style={{ backgroundColor: '#050505', padding: '80px 10%' }}>
              <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                <p style={{
                  fontSize: 'clamp(18px, 2.5vw, 24px)',
                  fontStyle: 'italic',
                  color: '#fff',
                  lineHeight: '1.7',
                  borderTop: '1px solid rgba(255,255,255,0.1)',
                  borderBottom: '1px solid rgba(255,255,255,0.1)',
                  padding: '60px 0',
                }}>
                  "{t.compass.subquote}"
                </p>
              </div>
            </section>

            {/* DIMENSIONS — white */}
            <section style={{ backgroundColor: '#fff', padding: '80px 10% 80px' }}>
              <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px' }}>
                  {Object.values(t.compass.dimensions).map((dim, i) => (
                    <div key={i} style={{ padding: '40px', background: 'rgba(0,0,0,0.02)', border: '1px solid rgba(0,0,0,0.07)', textAlign: 'left' }}>
                      <h5 style={{ fontWeight: '900', letterSpacing: '2px', marginBottom: '15px', color: '#111', textTransform: 'uppercase', fontSize: '13px' }}>
                        {dim.title}
                      </h5>
                      <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.7' }}>
                        {dim.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* PATH SELECTION */}
            <section style={{ backgroundColor: '#050505', padding: '100px 10%', textAlign: 'center' }}>
              <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

                {/* Why Take a Self-Assessment */}
                <div style={{ maxWidth: '780px', margin: '0 auto 80px', textAlign: 'left' }}>
                  <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '900', color: '#fff', marginBottom: '30px' }}>
                    {t.compass.whyTitle}
                  </h2>
                  {t.compass.whyText.split('\n\n').map((para, i) => (
                    <p key={i} style={{ fontSize: '17px', lineHeight: '1.85', color: 'rgba(255,255,255,0.65)', marginBottom: '20px' }}>
                      {para}
                    </p>
                  ))}
                </div>

                {/* Carousel */}
                <div style={{ maxWidth: '720px', margin: '0 auto 50px', position: 'relative' }}>
                  <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '4px' }}>
                    <AnimatePresence mode='wait'>
                      <motion.img
                        key={carouselIdx}
                        src={carouselImages[carouselIdx]}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.7 }}
                        style={{ width: '100%', height: 'auto', display: 'block', filter: 'brightness(1.05) contrast(1.1) saturate(1.1)', borderRadius: '4px' }}
                      />
                    </AnimatePresence>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '16px' }}>
                    {carouselImages.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCarouselIdx(i)}
                        style={{ width: '6px', height: '6px', borderRadius: '50%', background: i === carouselIdx ? '#fff' : 'rgba(255,255,255,0.25)', border: 'none', padding: 0, cursor: 'pointer', transition: 'background 0.3s' }}
                      />
                    ))}
                  </div>
                </div>

                {/* Choose Your Profile */}
                <div style={{ maxWidth: '780px', margin: '0 auto 50px', textAlign: 'left' }}>
                  <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '900', color: '#fff', marginBottom: '20px' }}>
                    {t.compass.chooseTitle}
                  </h2>
                  <p style={{ fontSize: '17px', lineHeight: '1.85', color: 'rgba(255,255,255,0.65)', marginBottom: '16px' }}>
                    {t.compass.chooseText}
                  </p>
                  <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.5px' }}>
                    {t.compass.chooseLabel}
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  {/* Leader card — active */}
                  <motion.div
                    whileHover={{ scale: 1.02, backgroundColor: '#111' }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setView('LEADER')}
                    style={{
                      padding: '25px 25px',
                      background: '#1a1a1a',
                      color: '#fff',
                      cursor: 'pointer',
                      width: '220px',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '4px'
                    }}
                  >
                    <img src="/leader.png" alt="" style={{ width: '142px', marginBottom: '0px', filter: 'invert(1)', opacity: 0.85 }} />
                    <h3 style={{ fontSize: '18px', fontWeight: '900', marginBottom: '12px' }}>
                      {t.leader.title}
                    </h3>
                    <p style={{ color: '#777', fontSize: '15px', fontWeight: '400', marginBottom: '0', lineHeight: '1.6' }}>
                      {t.leader.subtitle}
                    </p>
                    <div style={{ marginTop: '32px', fontSize: '11px', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '24px', color: 'rgba(255,255,255,0.4)' }}>
                      {t.common.learnMore}
                    </div>
                  </motion.div>

                  {/* Employee card — coming soon */}
                  <div
                    style={{
                      padding: '25px 25px',
                      background: '#2f2f2f61',
                      color: '#fff',
                      cursor: 'default',
                      width: '220px',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '4px',
                      opacity: 0.4, filter: 'grayscale(1)',
                      position: 'relative'
                    }}
                  >
                    <div style={{
                      position: 'absolute', top: '14px', right: '14px',
                      fontSize: '9px', fontWeight: '700', letterSpacing: '2px',
                      textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)',
                      background: 'rgba(255, 255, 255, 0.03)', padding: '4px 8px', borderRadius: '3px'
                    }}>
                      {language === 'en' ? 'Coming soon' : 'Uskoro'}
                    </div>
                    <img src="/zaposleni.png" alt="" style={{ width: '142px', marginBottom: '0px', opacity: 0.4 }} />
                    <h3 style={{ fontSize: '18px', fontWeight: '900', marginBottom: '12px' }}>
                      {t.employee.title}
                    </h3>
                    <p style={{ color: '#777', fontSize: '15px', fontWeight: '400', marginBottom: '0', lineHeight: '1.6' }}>
                      {t.employee.subtitle}
                    </p>
                    <div style={{ marginTop: '32px', fontSize: '11px', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '24px', color: 'rgba(255,255,255,0.3)' }}>
                      {t.common.learnMore}
                    </div>
                  </div>
                </div>
              </div>
            </section>
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