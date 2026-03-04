import React, { useState } from 'react';
import { HBButton } from './UIComponents'; // Koristimo tvoje dugme

const PdfDebugger = () => {
  const [loading, setLoading] = useState(false);

  const openPdfPreview = () => {
    setLoading(true);
    // Otvaramo backend rutu direktno u novom prozoru
    // window.open će pokrenuti GET zahtev i browser će sam prikazati PDF
    const backendUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
    window.open(`${backendUrl}/api/public-assessment/debug-pdf-preview`, '_blank');
    setLoading(false);
  };

  return (
    <div style={{ 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      backgroundColor: '#0a0a0a',
      color: '#fff'
    }}>
      <h1 style={{ marginBottom: '20px', fontWeight: '300' }}>HB Report Debugger</h1>
      <p style={{ color: '#666', marginBottom: '40px' }}>
        Klikom na dugme generiše se PDF sa testnim setom od 40 odgovora.
      </p>
      
      <HBButton onClick={openPdfPreview}>
        {loading ? 'GENERATING...' : 'OPEN PDF PREVIEW'}
      </HBButton>

      <div style={{ marginTop: '20px', fontSize: '12px', color: '#444' }}>
        Target: /api/debug-pdf-preview
      </div>
    </div>
  );
};

export default PdfDebugger;