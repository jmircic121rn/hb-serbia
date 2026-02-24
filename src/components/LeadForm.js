import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { translations } from '../data/translations';

const LeadForm = ({ onNext, errorMsg, onPrivacyClick, language, setLanguage }) => {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', company: '', jobTitle: '', phoneNumber: ''
  });

  const [agreed, setAgreed] = useState(false);

  // Preuzimanje prevoda na osnovu jezika
  const t = translations[language].form;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreed) {
      alert(t.gdprAlert);
      return;
    }
    onNext(formData);
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  // KOMPONENTA ZA PROMENU JEZIKA (Ista kao na ostalim stranicama)
  const LanguagePicker = () => (
    <div style={{
      position: 'absolute', top: '20px', right: '40px', zIndex: 100,
      display: 'flex', gap: '15px', background: 'rgba(255,255,255,0.05)',
      padding: '8px 15px', borderRadius: '20px', backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255,255,255,0.1)',
      width: 'fit-content' // Jako bitno da ne blokira ostatak forme
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
      {/* Dodat birač jezika */}
      <LanguagePicker />

      <span className="category-tag">{t.tag}</span>
      <h2 className="question-text">{t.title}</h2>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

        {errorMsg && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
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

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          <input required placeholder={t.firstName} className="hb-input"
            onChange={e => handleChange('firstName', e.target.value)} />
          <input required placeholder={t.lastName} className="hb-input"
            onChange={e => handleChange('lastName', e.target.value)} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          <input required type="email" placeholder={t.email} className="hb-input"
            onChange={e => handleChange('email', e.target.value)} />
          <input required type="tel" placeholder={t.phone} className="hb-input"
            onChange={e => handleChange('phoneNumber', e.target.value)} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          <input placeholder={t.company} className="hb-input"
            onChange={e => handleChange('company', e.target.value)} />
          <input placeholder={t.jobTitle} className="hb-input"
            onChange={e => handleChange('jobTitle', e.target.value)} />
        </div>

        <div style={{ display: 'flex', gap: '12px', marginTop: '20px', alignItems: 'flex-start' }}>
          <input
            type="checkbox"
            required
            id="gdpr-consent"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            style={{ marginTop: '4px', cursor: 'pointer', accentColor: '#f8f8f8' }}
          />
          {/* Koristimo div umesto label-a za ceo tekst da izbegnemo automatsko okidanje checkboxa na klik linka */}
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
                display: 'inline-block' // Povećava zonu klika
              }}
            >
              {t.privacyLink}
            </span>
          </div>
        </div>

        <button type="submit" className="hb-primary-btn" style={{ marginTop: '20px' }}>
          {t.btn}
        </button>

        <p style={{ textAlign: 'center', fontSize: '11px', color: '#999', marginTop: '15px' }}>
          {t.footerNote}
        </p>
      </form>
    </div>
  );
};

export default LeadForm;