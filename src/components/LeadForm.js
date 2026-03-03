import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { translations } from '../data/translations';
// Uvezi tvoje nove komponente (proveri putanju do fajla gde si ih definisala)
import { HBInput, HBButton } from './UIComponents'; 

const LeadForm = ({ onNext, errorMsg, onPrivacyClick, language, setLanguage }) => {
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

  const LanguagePicker = () => (
    <div style={{
      position: 'absolute', top: '20px', right: '40px', zIndex: 100,
      display: 'flex', gap: '15px', background: 'rgba(255,255,255,0.05)',
      padding: '8px 15px', borderRadius: '20px', backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255,255,255,0.1)',
      width: 'fit-content'
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
    <div className="bars-question-container" style={{ marginLeft: 100, position: 'relative' }}>
      <LanguagePicker />

      <span className="category-tag">{t.tag}</span>
      <h2 className="question-text" style={{ marginBottom: '40px' }}>{t.title}</h2>

      <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>

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

        {/* RED 1 */}
        <HBInput 
          required 
          placeholder={t.firstName} 
          value={formData.firstName}
          onChange={e => handleChange('firstName', e.target.value)} 
        />
        <HBInput 
          required 
          placeholder={t.lastName} 
          value={formData.lastName}
          onChange={e => handleChange('lastName', e.target.value)} 
        />

        {/* RED 2 */}
        <HBInput 
          required 
          type="email" 
          placeholder={t.email} 
          value={formData.email}
          onChange={e => handleChange('email', e.target.value)} 
        />
        <HBInput 
          required 
          type="tel" 
          placeholder={t.phone} 
          value={formData.phoneNumber}
          onChange={e => handleChange('phoneNumber', e.target.value)} 
        />

        {/* RED 3 */}
        <HBInput 
          placeholder={t.company} 
          value={formData.company}
          onChange={e => handleChange('company', e.target.value)} 
        />
        <HBInput 
          placeholder={t.jobTitle} 
          value={formData.jobTitle}
          onChange={e => handleChange('jobTitle', e.target.value)} 
        />

        {/* GDPR - Pun red */}
        <div style={{ gridColumn: 'span 2', display: 'flex', gap: '12px', marginTop: '10px', alignItems: 'flex-start' }}>
          <input
            type="checkbox"
            required
            id="gdpr-consent"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            style={{ marginTop: '4px', cursor: 'pointer', accentColor: '#fff' }}
          />
          <div style={{ fontSize: '12px', color: '#888', lineHeight: '1.6' }}>
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
                display: 'inline-block'
              }}
            >
              {t.privacyLink}
            </span>
          </div>
        </div>

        {/* DUGME - Pun red */}
        <div style={{ gridColumn: 'span 2' }}>
          <HBButton 
            type="submit" 
            isLoading={isLoading}
          >
            {t.btn}
          </HBButton>
        </div>

        <p style={{ gridColumn: 'span 2', textAlign: 'center', fontSize: '11px', color: '#666', marginTop: '10px' }}>
          {t.footerNote}
        </p>
      </form>
    </div>
  );
};

export default LeadForm;