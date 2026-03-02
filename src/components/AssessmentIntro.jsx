import React from 'react';
import { motion } from 'framer-motion';
import { translations } from '../data/translations';

const AssessmentIntro = ({ onStart, language }) => {
  const t = translations[language].intro;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }} 
      animate={{ opacity: 1, y: 0 }}
      style={{ 
        maxWidth: '850px', margin: '0 auto', padding: '60px 20px', 
        color: '#fff', textAlign: 'left', lineHeight: '1.6' 
      }}
    >
      <h1 style={{ fontSize: '32px', fontWeight: '900', marginBottom: '10px' }}>{t.title}</h1>
      <p style={{ color: '#666', marginBottom: '40px', fontSize: '15px' }}>{t.subtitle}</p>

      <div style={{ display: 'grid', gap: '40px' }}>
        {/* Šta ćete raditi */}
        <section>
          <h3 style={{ color: '#fff', marginBottom: '12px', fontSize: '18px' }}>{t.whatTitle}</h3>
          <p style={{ color: '#ccc', fontSize: '16px' }}>{t.whatText}</p>
        </section>

        {/* Najvažnija stvar */}
        <section style={{ padding: '30px', background: 'rgba(255, 255, 255, 0.05)', borderLeft: '4px solid #ffffff88' }}>
          <h3 style={{ color: '#ffffff', marginTop: 0, marginBottom: '15px' }}>{t.importantTitle}</h3>
          <p style={{ color: '#eee', fontSize: '16px', whiteSpace: 'pre-line' }}>{t.importantText}</p>
        </section>

        {/* Opcije */}
        <section>
          <h3 style={{ color: '#fff', marginBottom: '20px', fontSize: '18px' }}>{t.optionsTitle}</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', color: '#ccc', fontSize: '15px' }}>
            <p><strong>{t.optionA.split(' — ')[0]}</strong> — {t.optionA.split(' — ')[1]}</p>
            <p><strong>{t.optionB.split(' — ')[0]}</strong> — {t.optionB.split(' — ')[1]}</p>
            <p><strong>{t.optionC.split(' — ')[0]}</strong> — {t.optionC.split(' — ')[1]}</p>
          </div>
        </section>

        {/* Kako čitati (Ask yourself) */}
        <section>
          <h3 style={{ color: '#fff', marginBottom: '12px', fontSize: '18px' }}>{t.howTitle}</h3>
          <p style={{ color: '#ccc', fontSize: '16px', fontStyle: 'italic', marginBottom: '10px' }}>{t.howText}</p>
        </section>

        {/* Bullet points */}
        <section>
          <h3 style={{ color: '#fff', marginBottom: '20px', fontSize: '18px' }}>{t.rememberTitle}</h3>
          <ul style={{ paddingLeft: '20px', color: '#ccc' }}>
            {t.rememberItems.map((item, i) => (
              <li key={i} style={{ marginBottom: '12px', fontSize: '15px' }}>
                <strong style={{ color: '#fff' }}>{item.split(' — ')[0]}</strong> — {item.split(' — ')[1]}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div style={{ marginTop: '60px', textAlign: 'center', borderTop: '1px solid #222', paddingTop: '40px' }}>
        <p style={{ marginBottom: '30px', color: '#888', fontSize: '15px' }}>{t.readyText}</p>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          style={{ 
            padding: '22px 60px', background: '#fff', color: '#000', 
            border: 'none', fontWeight: '900', cursor: 'pointer', fontSize: '16px',
            letterSpacing: '1px'
          }}
        >
          {t.startBtn}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default AssessmentIntro;