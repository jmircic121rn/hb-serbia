import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = ({ language, setLanguage }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Zatvori meni pri promeni rute
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  const hiddenRoutes = ['/', '/menu=assessment', '/assessment/verify', '/assessment/intro', '/assessment/test', '/assessment/loading', '/assessment/results'];
  if (hiddenRoutes.includes(location.pathname)) return null;

  const menuItems = [
    { name: language === 'sr' ? 'Procena' : 'Assessment', path: '/assessment' },
    { name: language === 'sr' ? 'O nama' : 'About Us', path: '/about' },
    { name: language === 'sr' ? 'Otvoreni Treninzi' : 'Open Trainings', path: '/open-trainings' },
    { name: language === 'sr' ? 'Interni Treninzi' : 'Internal Trainings', path: '/internal-trainings' },
  ];

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000,
        background: 'rgba(22, 22, 22, 0.95)', backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)', padding: '7px 0'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' }}>

          <div onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
            <img src="/whitetransparent.png" alt="HB Compass Logo" style={{ height: '50px', display: 'block' }} />
          </div>

          {isMobile ? (
            /* HAMBURGER DUGME */
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '8px', display: 'flex', flexDirection: 'column', gap: '5px' }}
              aria-label="Toggle menu"
            >
              <span style={{ display: 'block', width: '22px', height: '2px', background: menuOpen ? 'transparent' : '#fff', transition: '0.3s' }} />
              <span style={{ display: 'block', width: '22px', height: '2px', background: '#fff', transition: '0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
              <span style={{ display: 'block', width: '22px', height: '2px', background: '#fff', transition: '0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none', marginTop: menuOpen ? '-7px' : '0' }} />
            </button>
          ) : (
            /* DESKTOP LINKS */
            <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
              {menuItems.map((item) => (
                <span
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  style={{
                    cursor: 'pointer', color: location.pathname === item.path ? '#ffffff' : '#7c7c7c',
                    fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', transition: '0.3s'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                  onMouseLeave={(e) => e.target.style.color = location.pathname === item.path ? '#ffffff' : '#7c7c7c'}
                >
                  {item.name}
                </span>
              ))}
              <button
                onClick={() => setLanguage(language === 'sr' ? 'en' : 'sr')}
                style={{ background: 'transparent', border: '1px solid #444', color: '#fff', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer', fontSize: '10px' }}
              >
                {language === 'sr' ? 'EN' : 'SR'}
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* MOBILNI DROPDOWN MENI */}
      {isMobile && menuOpen && (
        <div style={{
          position: 'fixed', top: '64px', left: 0, width: '100%', zIndex: 999,
          background: 'rgba(10, 10, 10, 0.98)', backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          display: 'flex', flexDirection: 'column', padding: '20px 0'
        }}>
          {menuItems.map((item) => (
            <span
              key={item.path}
              onClick={() => { navigate(item.path); setMenuOpen(false); }}
              style={{
                cursor: 'pointer', padding: '16px 24px',
                color: location.pathname === item.path ? '#ffffff' : '#7c7c7c',
                fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px',
                borderBottom: '1px solid rgba(255,255,255,0.05)'
              }}
            >
              {item.name}
            </span>
          ))}
          <div style={{ padding: '16px 24px' }}>
            <button
              onClick={() => setLanguage(language === 'sr' ? 'en' : 'sr')}
              style={{ background: 'transparent', border: '1px solid #444', color: '#fff', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', fontSize: '11px', fontWeight: '700', letterSpacing: '1px' }}
            >
              {language === 'sr' ? 'EN' : 'SR'}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;