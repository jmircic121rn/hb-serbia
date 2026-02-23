import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ 
      backgroundColor: '#0a0a0a', 
  color: '#fff', 
  minHeight: '100vh', 
  padding: '120px 10% 60px 10%',
  fontFamily: 'Inter, sans-serif',
  lineHeight: '1.6',
  position: 'relative', // DODAJ OVO
  zIndex: 100,          // DODAJ OVO
  width: '100%'
    }}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ maxWidth: '800px', margin: '0 auto' }}
      >
        <h1 style={{ fontSize: '42px', fontWeight: '900', marginBottom: '10px' }}>Privacy Policy</h1>
        <p style={{ color: '#ffb478', letterSpacing: '2px', fontSize: '12px', marginBottom: '60px', textTransform: 'uppercase' }}>
          Last Updated: February 2026
        </p>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#fff', fontSize: '22px', marginBottom: '15px' }}>1. Overview</h2>
          <p style={{ color: '#aaa' }}>
            Hansen Beck Serbia ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our Strategic Assessment tool and AI-generated reporting service.
          </p>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#fff', fontSize: '22px', marginBottom: '15px' }}>2. Data We Collect</h2>
          <p style={{ color: '#aaa' }}>
            To provide you with a personalized strategic analysis, we collect the following information:
          </p>
          <ul style={{ color: '#aaa', paddingLeft: '20px', marginTop: '10px' }}>
            <li>Identity Data: First name and last name.</li>
            <li>Contact Data: Professional email address and phone number.</li>
            <li>Professional Data: Company name and job title.</li>
            <li>Assessment Data: Your responses to the behavioral and strategic questions.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#fff', fontSize: '22px', marginBottom: '15px' }}>3. AI Processing</h2>
          <p style={{ color: '#aaa' }}>
            Our tool uses Artificial Intelligence (AI) to interpret your assessment responses and generate professional insights. 
            <strong> Please note:</strong> Your personal identity data is never used to train global AI models. The data is processed securely and used solely to generate your individual report.
          </p>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#fff', fontSize: '22px', marginBottom: '15px' }}>4. Data Retention & Your Rights</h2>
          <p style={{ color: '#aaa' }}>
            We retain your data only for as long as necessary to provide our services and for professional follow-up. Under GDPR, you have the right to:
          </p>
          <ul style={{ color: '#aaa', paddingLeft: '20px', marginTop: '10px' }}>
            <li>Request access to your personal data.</li>
            <li>Request correction or deletion of your data.</li>
            <li>Object to the processing of your data.</li>
          </ul>
          <p style={{ color: '#aaa', marginTop: '15px' }}>
            To exercise these rights, please contact us at our official office email.
          </p>
        </section>

        <div style={{ borderTop: '1px solid #222', paddingTop: '40px', marginTop: '60px' }}>
          <button 
            onClick={() => window.history.back()}
            style={{
              padding: '12px 25px',
              backgroundColor: 'transparent',
              border: '1px solid #ffb478',
              color: '#ffb478',
              cursor: 'pointer',
              fontWeight: 'bold',
              borderRadius: '4px'
            }}
          >
            Go Back
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;