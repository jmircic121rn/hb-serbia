import React, { useState } from 'react';
// 1. MORAŠ DA UVEZEŠ motion
import { motion } from 'framer-motion';

// 2. MORAŠ DA DODAŠ errorMsg u destrukturiranje props-a
const LeadForm = ({ onNext, errorMsg }) => {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', company: '', jobTitle: '', phoneNumber: ''
  });

  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreed) {
      alert("Please accept the data processing terms to continue.");
      return;
    }
    onNext(formData);
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="bars-question-container" style={{ marginLeft: 100 }}>
      <span className="category-tag">Strategic Intake</span>
      <h2 className="question-text">Personalize your analysis.</h2>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

        {/* GREŠKA SE PRIKAZUJE OVDE */}
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
            <strong>Pristup ograničen:</strong> <br /> {errorMsg}
          </motion.div>
        )}

        {/* Row 1 */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          <input required placeholder="First Name" className="hb-input"
            onChange={e => handleChange('firstName', e.target.value)} />
          <input required placeholder="Last Name" className="hb-input"
            onChange={e => handleChange('lastName', e.target.value)} />
        </div>

        {/* Row 2 */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          <input required type="email" placeholder="Professional Email" className="hb-input"
            onChange={e => handleChange('email', e.target.value)} />
          <input required type="tel" placeholder="Phone Number" className="hb-input"
            onChange={e => handleChange('phoneNumber', e.target.value)} />
        </div>

        {/* Row 3 */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          <input placeholder="Company" className="hb-input"
            onChange={e => handleChange('company', e.target.value)} />
          <input placeholder="Job Title" className="hb-input"
            onChange={e => handleChange('jobTitle', e.target.value)} />
        </div>

        {/* GDPR CHECKBOX SECTION */}
        <div style={{ display: 'flex', gap: '12px', marginTop: '20px', alignItems: 'flex-start' }}>
          <input
            type="checkbox"
            required
            id="gdpr-consent"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            style={{ marginTop: '4px', cursor: 'pointer', accentColor: '#ffb478' }}
          />
          <label htmlFor="gdpr-consent" style={{ fontSize: '12px', color: '#888', lineHeight: '1.5', cursor: 'pointer' }}>
            I consent to the processing of my personal data for the purpose of generating this strategic analysis and receiving professional insights via email, in accordance with the <a
              href="/privacy"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#ffb478', textDecoration: 'underline', marginLeft: '4px' }}
            >
              Privacy Policy
            </a>.
          </label>
        </div>

        <button type="submit" className="hb-primary-btn" style={{ marginTop: '20px' }}>
          Access Assessment
        </button>

        <p style={{ textAlign: 'center', fontSize: '11px', color: '#999', marginTop: '15px' }}>
          By continuing, you agree to receive your strategic report and professional insights.
        </p>
      </form>
    </div>
  );
};

export default LeadForm;