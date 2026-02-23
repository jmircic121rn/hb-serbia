import React from 'react';
import { motion } from 'framer-motion';
import { 
  Compass, Target, Zap, Shield, Users, Rocket, 
  Lightbulb, TrendingUp, MessageSquare, ArrowRight,
  Layers, Brain, BarChart3, Star
} from 'lucide-react';

const LandingPage = ({ onStart }) => {
  return (
    <div className="landing-scroll-container" style={{ 
      textAlign: 'left', color: '#fff', backgroundColor: '#0a0a0a', minHeight: '100vh',
      padding: '60px 40px', position: 'relative', width: '100%', boxSizing: 'border-box', overflowX: 'hidden'
    }}>
      
      {/* BACKGROUND DEKORACIJA */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: '100%', height: '100%',
        background: 'radial-gradient(circle at 80% 20%, rgba(255, 180, 120, 0.05) 0%, transparent 50%)',
        filter: 'blur(60px)', zIndex: 0, pointerEvents: 'none'
      }} />

      

      {/* 2. SEKCIJA: HB KOMPAS (Tvoj Vodič) */}
      <section style={{ marginBottom: '120px', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
          <Compass size={32} color="#ffb478" />
          <h2 style={{ fontSize: '32px', fontWeight: '900' }}>HB Kompas – Vaš Vodič kroz Profesionalni Razvoj</h2>
        </div>
        <p style={{ color: '#aaa', lineHeight: '1.8', maxWidth: '900px', marginBottom: '40px' }}>
          U današnjem dinamičnom poslovnom svetu, uspeh ne zavisi samo od onoga što znate, već i od načina na koji razmišljate. HB Kompas je sveobuhvatan okvir, razvijen od strane HubX tima, za procenu i razvoj profesionalne izvrsnosti.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
          {[
            { Icon: Brain, title: "Način razmišljanja (Mindset)", text: "Istražuje vaš unutrašnji svet – samopercepciju, uverenja i stavove." },
            { Icon: Layers, title: "Veštine (Skills)", text: "Fokusira se na praktične sposobnosti i znanja potrebna za rad." },
            { Icon: BarChart3, title: "Rezultati (Results)", text: "Meri vaš doprinos ishodima, od ciljeva do dugoročnih promena." },
            { Icon: Star, title: "Uticaj (Influence)", text: "Proučava kako interaktujete sa drugima i kako ih inspirišete." }
          ].map((item, i) => (
            <div key={i} style={{ padding: '25px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
              <item.Icon size={24} color="#ffb478" style={{ marginBottom: '15px' }} />
              <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '10px' }}>{item.title}</h4>
              <p style={{ fontSize: '13px', color: '#777', lineHeight: '1.5' }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SEKCIJA: INSPIRATIVNO LIDERSTVO 2.0 */}
      <section style={{ marginBottom: '120px', position: 'relative', zIndex: 1 }}>
        <h2 style={{ fontSize: '32px', fontWeight: '900', marginBottom: '30px' }}>Inspirativno Liderstvo 2.0</h2>
        <p style={{ color: '#aaa', lineHeight: '1.8', maxWidth: '900px', marginBottom: '40px' }}>
          Inspirativno Liderstvo 2.0 je detaljan profil lidera budućnosti, razvijen na osnovu okvira HB Kompasa i temeljen na principima VBC komunikacije. Fokusiramo se na lidere koji:
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {[
            { Icon: Target, title: "Jasna vizija i strategija", text: "Razumeju širi kontekst i usklađuju timske napore sa dugoročnom vizijom." },
            { Icon: Zap, title: "Majstori upravljanja promenama", text: "Uspešno sprovode inicijative dok upravljaju otporom i angažovanjem." },
            { Icon: Shield, title: "Kultura rasta i otpornosti", text: "Neguju duboku samosvest i efikasno se oporavljaju od neuspeha." },
            { Icon: Users, title: "Poverenje i inkluzivnost", text: "Praktikuju radikalnu empatiju i stvaraju okruženje gde se svi osećaju vrednovanim." },
            { Icon: Rocket, title: "Podsticanje akcije i osnaživanje", text: "Inspirišu vizijom, efikasno delegiraju i promovišu vlasništvo." }
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '20px', padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <item.Icon size={24} color="#ffb478" style={{ flexShrink: 0 }} />
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '5px' }}>{item.title}</h4>
                <p style={{ fontSize: '14px', color: '#777' }}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SEKCIJA: VIŠE OD TRANSAKCIJA (Moderni Zaposleni) */}
      <section style={{ marginBottom: '120px', padding: '60px 40px', background: 'rgba(255,180,120,0.02)', border: '1px solid rgba(255,180,120,0.1)', position: 'relative', zIndex: 1 }}>
        <h2 style={{ fontSize: '28px', fontWeight: '900', marginBottom: '20px' }}>Idealni Profil Modernog Zaposlenog</h2>
        <p style={{ color: '#ffb478', fontWeight: '700', marginBottom: '40px' }}>Više od Transakcija – Komunikacija Zasnovana na Vrednostima (VBC)</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          {[
            { Icon: MessageSquare, title: "Ovladavanje VBC-om", text: "Privlači pažnju i nagoni druge na razmišljanje o istinskoj vrednosti." },
            { Icon: Users, title: "Radikalna empatija", text: "Duboko razume potrebe i strahove drugih, 'čuje neizrečeno'." },
            { Icon: Lightbulb, title: "Artikulacija vrednosti", text: "Prevodite složene ideje u jasne poruke koje rezoniraju." },
            { Icon: TrendingUp, title: "Proaktivnost i agilnost", text: "Dosledno transformiše odbijanje u podatke za kontinuirano učenje." }
          ].map((item, i) => (
            <div key={i}>
              <item.Icon size={20} color="#ffb478" style={{ marginBottom: '15px' }} />
              <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '10px' }}>{item.title}</h4>
              <p style={{ fontSize: '13px', color: '#aaa', lineHeight: '1.5' }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. SEKCIJA: SAMOPROCENA & CTA */}
      <section style={{ textAlign: 'center', paddingBottom: '100px', position: 'relative', zIndex: 1 }}>
        <h3 style={{ fontSize: '26px', fontWeight: '900', marginBottom: '40px' }}>Spremni da otkrijete gde se nalazite?</h3>
        <div style={{ display: 'inline-grid', textAlign: 'left', gap: '20px', marginBottom: '60px' }}>
          {[
            "Precizna analiza vaših trenutnih veština i načina razmišljanja.",
            "Identifikacija jakih strana gde već pokazujete izvanrednost.",
            "Konkretne oblasti za dalji razvoj sa jasnim smernicama."
          ].map((text, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <ArrowRight size={18} color="#ffb478" />
              <p style={{ fontSize: '16px', color: '#ccc', margin: 0 }}>{text}</p>
            </div>
          ))}
        </div>
        <br />
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} onClick={onStart} 
          style={{ padding: '20px 60px', background: '#ffb478', color: '#000', border: 'none', fontWeight: '900', letterSpacing: '2px', cursor: 'pointer' }}
        >
          START MY JOURNEY
        </motion.button>
      </section>

      {/* NOISE TEKSTURA */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.02, pointerEvents: 'none', backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')`, zIndex: 5 }} />
    </div>
  );
};

export default LandingPage;