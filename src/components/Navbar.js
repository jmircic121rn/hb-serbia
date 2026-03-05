import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = ({ language, setLanguage }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Ako smo na EclipseIntro stranici, ne prikazujemo Navbar
  if (location.pathname === '/' || location.pathname === '/menu=assessment') return null;

  const menuItems = [
    { name: language === 'sr' ? 'Procena' : 'Assessment', path: '/assessment' },
    { name: language === 'sr' ? 'O nama' : 'About Us', path: '/about' },
    { name: language === 'sr' ? 'Otvoreni Treninzi' : 'Open Trainings', path: '/open-trainings' },
    { name: language === 'sr' ? 'Interni Treninzi' : 'Internal Trainings', path: '/internal-trainings' },
  ];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000,
      background: 'rgba(22, 22, 22, 0.8)', backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)', padding: '7px 0'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' }}>
        
        {/* LOGO (Tekstualni ili slika) */}
        <div 
          onClick={() => navigate('/')} 
          style={{ cursor: 'pointer', fontWeight: 'bold', letterSpacing: '2px', color: '#fff', fontSize: '14px' }}
        >
          <img src="/whitetransparent.png" alt="HB Compass Logo" style={{ height: '50px' }} />
        </div>

        {/* LINKS (Desktop) */}
        <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
          {menuItems.map((item) => (
            <span
              key={item.path}
              onClick={() => navigate(item.path)}
              style={{
                cursor: 'pointer', color: location.pathname === item.path ? '#ffffff' : '#7c7c7c',
                fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px',
                transition: '0.3s'
              }}
              onMouseEnter={(e) => e.target.style.color = '#ffffff'}
              onMouseLeave={(e) => e.target.style.color = location.pathname === item.path ? '#ffffff' : '#7c7c7c'}
            >
              {item.name}
            </span>
          ))}

          {/* Language Switcher u Navbaru */}
          <button 
            onClick={() => setLanguage(language === 'sr' ? 'en' : 'sr')}
            style={{
              background: 'transparent', border: '1px solid #444', color: '#fff',
              padding: '5px 10px', borderRadius: '4px', cursor: 'pointer', fontSize: '10px'
            }}
          >
            {language === 'sr' ? 'EN' : 'SR'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;