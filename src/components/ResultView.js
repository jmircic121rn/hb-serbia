import React from 'react';
import { motion } from 'framer-motion';

const ResultView = ({ userData }) => {
  return (
    <div style={{ 
      height: '100vh', display: 'flex', flexDirection: 'column', 
      justifyContent: 'center', alignItems: 'center', textAlign: 'center', 
      padding: '0 20px', backgroundColor: '#0a0a0a' 
    }}>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div style={{ 
          fontSize: '60px', marginBottom: '30px', 
          filter: 'drop-shadow(0 0 15px rgba(255,180,120,0.3))' 
        }}>📬</div>
        
        <h1 style={{ fontSize: '36px', fontWeight: '900', color: '#fff', marginBottom: '20px', letterSpacing: '-1px' }}>
            Expedition Completed.
        </h1>
        
        <p style={{ fontSize: '18px', color: '#aaa', maxWidth: '550px', lineHeight: '1.7', fontWeight: '300' }}>
            Thank you, <strong>{userData?.firstName}</strong>. Your personalized Strategic Insight Report has been generated and sent to:
            <br />
            <span style={{ color: '#ffb478', fontWeight: '600', borderBottom: '1px solid rgba(255,180,120,0.3)' }}>
                {userData?.email}
            </span>
        </p>
        
        <div style={{ marginTop: '40px', padding: '20px', borderTop: '1px solid #222' }}>
            <p style={{ fontSize: '13px', color: '#555', fontStyle: 'italic' }}>
                Please check your inbox (and spam folder) within the next few minutes. 
                The analysis is being processed by our AI engine.
            </p>
        </div>

        <button 
          onClick={() => window.location.href = '/'}
          style={{
            marginTop: '30px', padding: '12px 35px', background: 'transparent',
            border: '1px solid #333', color: '#888', borderRadius: '50px', 
            cursor: 'pointer', fontSize: '12px', fontWeight: '600', letterSpacing: '1px',
            transition: 'all 0.3s'
          }}
          onMouseEnter={(e) => e.target.style.borderColor = '#ffb478'}
          onMouseLeave={(e) => e.target.style.borderColor = '#333'}
        >
          RETURN TO PORTAL
        </button>
      </motion.div>
    </div>
  );
};

export default ResultView;