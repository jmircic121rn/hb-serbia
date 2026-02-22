import React, { useState } from 'react';

const LeadForm = ({ onNext }) => {
  const [formData, setFormData] = useState({ 
    firstName: '', lastName: '', email: '', company: '', jobTitle: '', phoneNumber: '' 
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(formData);
  };

  return (
    <div className="bars-question-container">
      <span className="category-tag">Strategic Intake</span>
      <h2 className="question-text">Personalize your analysis.</h2>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {/* Row 1 */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          <input required placeholder="First Name" className="hb-input" onChange={e => setFormData({...formData, firstName: e.target.value})} />
          <input required placeholder="Last Name" className="hb-input" onChange={e => setFormData({...formData, lastName: e.target.value})} />
        </div>

        {/* Row 2 */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          <input required type="email" placeholder="Professional Email" className="hb-input" onChange={e => setFormData({...formData, email: e.target.value})} />
          <input required type="tel" placeholder="Phone Number" className="hb-input" onChange={e => setFormData({...formData, phoneNumber: e.target.value})} />
        </div>

        {/* Row 3 */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          <input placeholder="Company" className="hb-input" onChange={e => setFormData({...formData, company: e.target.value})} />
          <input placeholder="Job Title" className="hb-input" onChange={e => setFormData({...formData, jobTitle: e.target.value})} />
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