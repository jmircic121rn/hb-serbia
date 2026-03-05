import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { translations } from '../data/translations';

const PrivacyPolicy = ({ language = 'sr' }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const t = translations[language].privacy;

  return (
    <div style={{ 
      backgroundColor: '#0a0a0a', 
      color: '#fff', 
      minHeight: '100vh', 
      padding: '120px 10% 60px 10%',
      lineHeight: '1.6',
      position: 'relative'
    }}>
      <motion.div
        key={language}
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