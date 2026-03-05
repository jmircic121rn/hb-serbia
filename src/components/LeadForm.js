import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { translations } from '../data/translations';
import { HBInput, HBButton } from './UIComponents'; 

const LeadForm = ({ onNext, errorMsg, onPrivacyClick, language }) => {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', company: '', jobTitle: '', phoneNumber: ''
  });

  const [agreed, setAgreed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const t = translations[language].form;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agreed) {
      alert(t.gdprAlert);
      return;
    }

    setIsLoading(true);
    localStorage.setItem('appLanguage', language); 
    
    try {
      await onNext(formData);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    /* GLAVNI KONTEJNER - CENTRIRAN */
    <div style={{ 
        width: '100%', 
        maxWidth: '800px', // Širina forme
        margin: '0 auto',  // Centriranje horizontalno
        padding: '40px 20px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center' // Centriranje sadržaja unutra
    }}>
      
      <div style={{ width: '100%', position: 'relative', textAlign: 'center' }}>
        <span style={{ 
            display: 'block', 
            fontSize: '11px', 
            letterSpacing: '4px', 
            textTransform: 'uppercase', 
            color: 'rgba(255,255,255,0.4)', 
            marginBottom: '15px' 
        }}>
            {t.tag}
        </span>
        
        <h2 style={{ 
            fontSize: 'clamp(28px, 4vw, 42px)', 
            fontWeight: '900', 
            marginBottom: '50px', 
            lineHeight: '1.2',
            color: '#fff'
        }}>
            {t.title}
        </h2>

        <form onSubmit={handleSubmit} style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '20px', 
            textAlign: 'left',
            width: '100%' 
        }}>

          {errorMsg && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                gridColumn: 'span 2',
                color: '#ff6b6b',
                fontSize: '13px',
                marginBottom: '20px',
                padding: '12px',
                border: '1px solid rgba(255,107,107,0.2)',
                background: 'rgba(255,107,107,0.05)',
                textAlign: 'center',
                borderRadius: '4px'
              }}
            >
              <strong>{t.errorHeader}</strong> <br /> {errorMsg}
            </motion.div>
          )}

          {/* INPUT POLJA */}
          <HBInput required placeholder={t.firstName} value={formData.firstName} onChange={e => handleChange('firstName', e.target.value)} />
          <HBInput required placeholder={t.lastName} value={formData.lastName} onChange={e => handleChange('lastName', e.target.value)} />
          <HBInput required type="email" placeholder={t.email} value={formData.email} onChange={e => handleChange('email', e.target.value)} />
          <HBInput required type="tel" placeholder={t.phone} value={formData.phoneNumber} onChange={e => handleChange('phoneNumber', e.target.value)} />
          <HBInput placeholder={t.company} value={formData.company} onChange={e => handleChange('company', e.target.value)} />
          <HBInput placeholder={t.jobTitle} value={formData.jobTitle} onChange={e => handleChange('jobTitle', e.target.value)} />

          {/* GDPR */}
          <div style={{ gridColumn: 'span 2', display: 'flex', gap: '12px', marginTop: '10px', alignItems: 'flex-start' }}>
            <input
              type="checkbox"
              required
              id="gdpr-consent"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              style={{ marginTop: '4px', cursor: 'pointer', accentColor: '#fff' }}
            />
            <div style={{ fontSize: '12px', color: '#666', lineHeight: '1.6' }}>
              <span style={{ color: '#ffb478', marginRight: '6px', fontWeight: 'bold' }}>*</span>
              {t.gdprText}
              <span
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onPrivacyClick();
                }}
                style={{
                  color: '#ffb478',
                  textDecoration: 'underline',
                  marginLeft: '4px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                }}
              >
                {t.privacyLink}
              </span>
            </div>
          </div>

          {/* DUGME */}
          <div style={{ gridColumn: 'span 2', marginTop: '20px' }}>
            <HBButton type="submit" isLoading={isLoading}>
              {t.btn}
            </HBButton>
          </div>

          <p style={{ gridColumn: 'span 2', textAlign: 'center', fontSize: '11px', color: '#444', marginTop: '10px' }}>
            {t.footerNote}
          </p>
        </form>
      </div>
    </div>
  );
};

export default LeadForm;