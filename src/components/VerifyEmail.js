import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState('verifying');
  const navigate = useNavigate();

  useEffect(() => {
    const token = searchParams.get('token');
    // Koristimo direktan URL da izbegnemo bilo kakav problem sa ENV varijablama
    const API_BASE_URL = process.env.REACT_APP_API_URL;

    console.log("🔍 PROVERA: Pokrećem verifikaciju za token:", token);

    if (token) {
      fetch(`${API_BASE_URL}/api/public-assessment/verify-token?token=${token}`)
        .then(async (res) => {
          console.log("🔍 SERVER ODGOVORIO: Status", res.status);
          const data = await res.json();
          if (res.ok && data.success) {
            console.log("✅ VERIFIKACIJA USPELA!");
            navigate('/assessment/intro');
          } else {
            console.error("❌ VERIFIKACIJA NEUSPELA:", data.message);
            setStatus('error');
          }
        })
        .catch(err => {
          console.error("❌ MREŽNA GREŠKA:", err);
          setStatus('error');
        });
    } else {
      console.error("❌ NEMA TOKENA U URL-u");
      setStatus('error');
    }
  }, [searchParams, navigate]);

  return (
    <div style={{ backgroundColor: '#0a0a0a', height: '100vh', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        {status === 'verifying' && <h2>Verifikacija u toku...</h2>}
        {status === 'error' && (
          <div>
            <h2 style={{ color: '#ff6b6b' }}>Link nije ispravan</h2>
            <p>Moguće je da je link istekao ili ste već iskorišćen.</p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default VerifyEmail;