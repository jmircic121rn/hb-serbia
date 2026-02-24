import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Target, Users } from 'lucide-react';
import { translations } from '../data/translations';

// POMOĆNA KOMPONENTA ZA KARTICE NA POČETNOJ
const RoleCard = ({ title, desc, onClick, icon, t }) => (
  <div onClick={onClick} style={{ 
    padding: '30px', 
    background: 'rgba(255,255,255,0.02)', 
    border: '1px solid rgba(255,255,255,0.1)',
    cursor: 'pointer', 
    transition: '0.3s'
  }} className="role-card-hover">
    {icon}
    <h3 style={{ marginTop: '20px', marginBottom: '10px' }}>{title}</h3>
    <p style={{ color: '#666', fontSize: '14px' }}>{desc}</p>
    <div style={{ marginTop: '20px', color: '#ffffff', fontSize: '12px', fontWeight: 'bold' }}> {/* Vraćeno na original narandžastu */}
      {t.common.learnMore}
    </div>
  </div>
);

// DETALJAN PRIKAZ LIDERA ILI ZAPOSLENOG
const DetailView = ({ type, t, onBack, onProceed }) => {
  const data = type === 'LEADER' ? t.leader : t.employee;
  
  return (
    <div style={{ maxWidth: '900px', padding: '40px 0' }}>
      <button onClick={onBack} style={{ background: 'none', border: 'none', color: '#ffffff', cursor: 'pointer', marginBottom: '30px', fontWeight: 'bold' }}>
        ← {t.common.back}
      </button>
      
      <h1 style={{ fontSize: '42px', fontWeight: '900', marginBottom: '10px' }}>{data.title}</h1>
      <h3 style={{ color: '#ffffff', marginBottom: '30px' }}>{data.subtitle}</h3>
      
      <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#ccc', marginBottom: '30px' }}>
        {data.mainDescription}
      </p>

      {/* Specifično za lidera: HB framework info */}
      {type === 'LEADER' && data.frameworkInfo && (
        <p style={{ color: '#888', fontStyle: 'italic', marginBottom: '40px' }}>{data.frameworkInfo}</p>
      )}

      <h4 style={{ marginBottom: '20px', color: '#fff' }}>
        {type === 'LEADER' ? data.capabilitiesTitle : data.vbcFeaturesTitle}
      </h4>

      {/* Lista karakteristika / stubova */}
      <div style={{ display: 'grid', gap: '20px', marginBottom: '40px' }}>
        {(type === 'LEADER' ? data.capabilities : data.vbcFeatures).map((item, i) => (
          <div key={i} style={{ padding: '20px', background: 'rgba(255,255,255,0.02)', borderLeft: '3px solid #ffffff' }}>
            <strong style={{ color: '#fff', display: 'block', marginBottom: '5px' }}>{item.title}</strong>
            <span style={{ color: '#888', fontSize: '14px' }}>{item.text}</span>
          </div>
        ))}
      </div>

      <p style={{ fontSize: '18px', color: '#fff', marginBottom: '20px' }}>
        {type === 'LEADER' ? data.transformTitle : data.summary}
      </p>
      
      {/* Lista za transformaciju (samo za lidera) */}
      {type === 'LEADER' && (
        <ul style={{ color: '#888', marginBottom: '40px', paddingLeft: '20px' }}>
          {data.transformItems.map((item, i) => (
            <li key={i} style={{ marginBottom: '10px' }}>{item}</li>
          ))}
        </ul>
      )}

      <p style={{ color: '#ffffff', fontWeight: 'bold', marginBottom: '20px' }}>
        {type === 'LEADER' ? data.assessmentGoal : data.assessmentCall}
      </p>
      
      {/* Ishodi procene (bullets) */}
      <div style={{ marginBottom: '50px' }}>
        {data.assessmentOutcomes?.map((outcome, i) => (
          <div key={i} style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>• {outcome}</div>
        ))}
      </div>

      <motion.button 
        whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
        onClick={onProceed}
        style={{ 
          padding: '25px 50px', 
          background: '#fff', 
          color: '#000', 
          border: 'none', 
          fontWeight: '900', 
          cursor: 'pointer', 
          fontSize: '16px',
          letterSpacing: '2px'
        }}
      >
        {t.common.startBtn}
      </motion.button>

      <p style={{ marginTop: '40px', color: '#333', fontSize: '12px', lineHeight: '1.6' }}>
        {data.footer}
      </p>
    </div>
  );
};

const LandingPage = ({ onStart, language, setLanguage }) => {
  const [view, setView] = useState('MAIN');
  const t = translations[language];

  // Birač jezika
  const LanguagePicker = () => (
    <div style={{ 
      position: 'absolute', top: '20px', right: '40px', zIndex: 100,
      display: 'flex', gap: '15px', background: 'rgba(255,255,255,0.05)',
      padding: '8px 15px', borderRadius: '20px', backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255,255,255,0.1)'
    }}>
      {['sr', 'en'].map((l) => (
        <span 
          key={l}
          onClick={() => setLanguage(l)}
          style={{ 
            cursor: 'pointer', fontSize: '12px', fontWeight: '900',
            color: language === l ? '#ffffff' : '#666',
            transition: '0.3s'
          }}
        >
          {l.toUpperCase()}
        </span>
      ))}
    </div>
  );

  return (
    <div className="landing-scroll-container" style={{ 
      textAlign: 'left', color: '#fff', backgroundColor: '#0a0a0a', minHeight: '100vh',
      padding: '60px 40px', position: 'relative', width: '100%', boxSizing: 'border-box'
    }}>
      <LanguagePicker />

      <AnimatePresence mode="wait">
        {view === 'MAIN' ? (
          <motion.div key="main" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <section style={{ marginBottom: '80px', marginTop: '40px', maxWidth: '1000px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                <Compass size={32} color="#ffb478" /> {/* Sačuvana boja */}
                <h2 style={{ fontSize: '32px', fontWeight: '900' }}>{t.compass.title}</h2>
              </div>
              
              <p style={{ color: '#fff', fontSize: '18px', lineHeight: '1.8', marginBottom: '20px' }}>
                {t.compass.description}
              </p>
              
              <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '40px' }}>
                {t.compass.subquote}
              </p>

              {/* Dimenzije */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px' }}>
                {Object.values(t.compass.dimensions).map((dim, i) => (
                  <div key={i} style={{ padding: '15px', background: 'rgba(255,255,255,0.03)', borderRadius: '4px' }}>
                    <div style={{ color: '#ffffff', fontWeight: 'bold', marginBottom: '8px', fontSize: '14px' }}>{dim.title}</div>
                    <div style={{ color: '#666', fontSize: '13px' }}>{dim.text}</div>
                  </div>
                ))}
              </div>

              <p style={{ color: '#444', fontSize: '14px', fontStyle: 'italic', marginBottom: '60px' }}>
                {t.compass.extraInfo}
              </p>

              <h3 style={{ marginBottom: '30px', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '14px', color: '#444' }}>
                {t.common.selectPath}
              </h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
                <RoleCard 
                  title={t.leader.title} 
                  desc={t.leader.subtitle} 
                  onClick={() => setView('LEADER')} 
                  icon={<Target color="#ffb478" size={32} />}  /* Sačuvana boja */
                  t={t}
                />
                <RoleCard 
                  title={t.employee.title} 
                  desc={t.employee.subtitle} 
                  onClick={() => setView('EMPLOYEE')} 
                  icon={<Users color="#ffb478" size={32} />} /* Sačuvana boja */
                  t={t}
                />
              </div>
            </section>
          </motion.div>
        ) : (
          <motion.div key="details" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <DetailView type={view} t={t} onBack={() => setView('MAIN')} onProceed={() => onStart(view)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LandingPage;