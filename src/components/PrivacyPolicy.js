import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { translations } from '../data/translations';

const PrivacyPolicy = ({ language: initialLanguage = 'sr' }) => {
  // Koristimo lokalni state za jezik kako bi birač radio u novom tabu
  const [lang, setLang] = useState(initialLanguage);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const t = translations[lang].privacy;

  // Birač jezika prilagođen za stranicu Politike privatnosti
  const LanguagePicker = () => (
    <div style={{ 
      position: 'absolute', top: '40px', right: '10%', zIndex: 1000,
      display: 'flex', gap: '15px', background: 'rgba(255,255,255,0.05)',
      padding: '8px 15px', borderRadius: '20px', backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255,255,255,0.1)'
    }}>
      {['sr', 'en'].map((l) => (
        <span 
          key={l}
          onClick={() => setLang(l)}
          style={{ 
            cursor: 'pointer', fontSize: '12px', fontWeight: '900',
            color: lang === l ? '#ffffff' : '#666',
            transition: '0.3s'
          }}
        >
          {l.toUpperCase()}
        </span>
      ))}
    </div>
  );

  return (
    <div style={{ 
      backgroundColor: '#0a0a0a', 
      color: '#fff', 
      minHeight: '100vh', 
      padding: '120px 10% 60px 10%',
      lineHeight: '1.6',
      position: 'relative'
    }}>
      <LanguagePicker />

      <motion.div 
        key={lang} // Ovo resetuje animaciju kada se promeni jezik
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        style={{ maxWidth: '800px', margin: '0 auto' }}
      >
        <h1 style={{ fontSize: '42px', fontWeight: '900', marginBottom: '10px' }}>
          {t.title}
        </h1>
        <p style={{ color: '#9a9a9a', letterSpacing: '2px', fontSize: '12px', marginBottom: '60px', textTransform: 'uppercase' }}>
          {t.updated}
        </p>

        {t.sections.map((section, idx) => (
          <section key={idx} style={{ marginBottom: '40px' }}>
            <h2 style={{ color: '#fff', fontSize: '22px', marginBottom: '15px' }}>
              {section.h}
            </h2>
            <p style={{ color: '#aaa' }}>{section.p}</p>
            
            {section.list && (
              <ul style={{ color: '#aaa', paddingLeft: '20px', marginTop: '10px' }}>
                {section.list.map((item, i) => (
                  <li key={i} style={{ marginBottom: '8px' }}>{item}</li>
                ))}
              </ul>
            )}
            
            {section.footer && (
              <p style={{ color: '#aaa', marginTop: '15px' }}>{section.footer}</p>
            )}
          </section>
        ))}

      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;