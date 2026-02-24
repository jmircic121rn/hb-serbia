import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = ({ onBack }) => {
    const trainers = [
    {
      name: "Nikola Mirčić",
      image: "/nikolamircic.jpeg", 
      title: "Suosnivač Hansen Beck | Master of Science in Global HRM",
      phone: "+381 63 221910",
      linkedin: "https://www.linkedin.com/in/nikmir/", 
      bio: [
        "Master of Science in Global Human Resource Management, University of Liverpool.",
        "Suosnivač globalne kompanije za trening i razvoj zaposlenih Hansen Beck. Aktivan Hansen Beck trener.",
        "Počevši od 1993. godine, Nikola je skupljao svoja iskustva kroz saradnju sa različitim IT kompanijama. Od 1998. do 2001. radio je kao sertifikovani Microsoft trener za infrastrukturna rešenja. U martu 2001. je postao deo Microsoft tima u Srbiji, sa zadatkom edukacije lokalnog tržišta o novim tehnologijama. U julu 2002. postao je jedan od prvih zaposlenih u novo-otvorenoj firmi Microsoft Srbija.",
        "Tokom sledećih 7 godina vodio je prodaju u segmentu malih i srednjih preduzeća, razvijajući i vodeći tim od 15 ljudi. Poslednju godinu u Microsoftu proveo je u Ukrajini na poziciji menadžera za borbu protiv softverske piraterije.",
        "Od januara 2010. godine Nikola se pridružio kompaniji Gustav Kaeser Training International otvaranjem franšize za teritoriju Srbije i Crne Gore. Od 2019. Nikola je suosnivač internacionalne treninge kompanije Hansen Beck GmbH."
      ],
      specialties: [
        "Komunikacija kao alat: Navesti druge na akciju!",
        "Uticaj kao preduslov za postizanje natprosečnih uspeha.",
        "Razvoj i transformacija organizacione kulture.",
        "Razvoj i vođenje timova visokih performansi.",
        "Prodaja rešenja.",
        "Veština pripreme i vođenja uspešnih pregovora.",
        "Držanje uverljivih prezentacija.",
        "Upravljanje projektima.",
        "Insights Discovery analiza ličnih preferenci."
      ]
    },
    {
      name: "Ivana Bojović",
      image: "/ivana.jpg", 
      title: "Biznis Trener | Magistar nauka internacionalnog menadžmenta",
      phone: "+381 64 151 34 30",
      linkedin: "https://www.linkedin.com/in/ivana-bojovic-m-sc-04316326",
      bio: [
        "Magistar nauka internacionalnog menadžmenta (Beograd, London). Počev od 2003. godine skupljala je svoja iskustva kao šef prodaje mt:s u Telekom-u Srbija, uz učešće u različitim projektima kao što su uspostavljanje prodajnih kanala m:tel-a u Crnoj Gori ili kontakt centra Univerzijade u Beogradu. 2008. godine uspostavlja i rukovodi trening centrom u Telekom-u Srbija.",
        "Interno je sertifikovan trener za usluge mobilne i fiksne telefonije. 2010. godine prelazi u Orion telekom i bavi se prodajom, brigom o korisnicima, upravljanjem kvalitetom menadžmenta, treninzima, a zatim preuzima odgovornost izvršnog direktora operacija.",
        "Nakon što se pridružila SBB-u i timu United Group-e, u narednih 9 godina uspostavlja i razvija trening centre i UG Akademiju kao krovni strateški i operativni hub, podržavajući poslovne napore grupe na 7 različitih telko tržišta. Ivana je organizovala i isporučila mnogobrojne biznis treninge. U decembru 2024, Ivana se pridružila Hansen Beck timu kao biznis trener."
      ],
      specialties: [
        "Prodajna komunikacija.",
        "Prezentacione veštine.",
        "Vođenje ljudi.",
        "Customer journey setup.",
        "Upravljanje procesima.",
        "Transformacija kompanijske kulture u cilju unapređenja korisničkog iskustva.",
        "Korporativna edukacija i alati za razvoj treninga."
      ]
    }
  ];
  return (
    <div style={{
      minHeight: '100vh',
      width: '100%',
      backgroundColor: '#000',
      color: '#fff',
      padding: '80px 20px',
      overflowX: 'hidden',
      position: 'relative'
    }}>
      {/* Dugme za nazad */}
      <motion.button
        onClick={onBack}
        whileHover={{ x: -5 }}
        style={{
          position: 'fixed',
          top: '40px',
          left: '40px',
          background: 'transparent',
          border: 'none',
          color: '#666',
          cursor: 'pointer',
          fontSize: '12px',
          letterSpacing: '2px',
          zIndex: 100
        }}
      >
        ← NAZAD
      </motion.button>

      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        
        {/* UVOD */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', marginBottom: '100px' }}
        >
          <h2 style={{ fontSize: '10px', letterSpacing: '5px', color: '#rgba(255, 180, 120, 0.8)', textTransform: 'uppercase' }}>Globalni Eksperti</h2>
          <h1 style={{ fontSize: '48px', fontWeight: '900', margin: '20px 0' }}>
            Hansen Beck je globalni ekspert i partner za kreiranje pozitivne i održive poslovne transformacije.
          </h1>
        </motion.div>

        

        {/* PURPOSE, VISION, MISSION */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '120px' }}>
          {[
            { title: "Zašto to radimo - Svrha", text: "Naša strast je stvaranje trenutaka učenja koji menjaju život jer verujemo da svako ima potencijal da briljira." },
            { title: "Čemu težimo – Vizija", text: "Bićemo preferirani globalni partner za one koji traže odlične rezultate kroz impresivna iskustva učenja, koja omogućavaju pozitivne promene u ponašanju." },
            { title: "Šta radimo - Misija", text: "Omogućavamo preduzećima da rastu razvijajući ljude da imaju pozitivan način razmišljanja, unapređene veštine i poboljšan uticaj." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              style={{ padding: '30px', borderLeft: '1px solid rgba(252, 252, 252, 0.3)', background: 'rgba(255,255,255,0.02)' }}
            >
              <h4 style={{ fontSize: '12px', letterSpacing: '2px', color: '#666', marginBottom: '15px' }}>{item.title}</h4>
              <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#ccc' }}>{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* VALUES */}
        <section style={{ marginBottom: '120px' }}>
          <h3 style={{ fontSize: '24px', textAlign: 'center', marginBottom: '60px' }}>Ko smo mi i kako se ponašamo - Naše vrednosti</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
            <div>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontWeight: 'bold' }}>Mi smo...</p>
              <ValueItem title="Autentični" desc="Iskreni smo, empatični i aktivno gradimo poverenje. Otvoreni smo i delimo svoje ranjivosti." />
              <ValueItem title="Pokretači (Driven)" desc="Završavamo stvari. Lično doprinosimo i aktivno angažujemo druge. Upravljamo i isporučujemo rezultate." />
              <ValueItem title="Volimo ono što radimo" desc="Volimo svoj posao i to pokazujemo!" />
            </div>
            <div>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontWeight: 'bold' }}>Verujemo u...</p>
              <ValueItem title="Istraživanje" desc="Dosledno smo radoznali, sa mentalitetom rasta. Napredujemo u promenama i imamo hrabrosti da zakoračimo u nepoznato." />
              <ValueItem title="Buđenje heroja" desc="Mi smo skromni izazivači. Otkrivamo i prepoznajemo potencijal u drugima. Omogućavamo ljudima da napreduju." />
              <ValueItem title="Vrednovanje različitosti" desc="Inkluzivni smo. Uživamo i obogaćeni smo različitošću. Pokazujemo poštovanje prema svima." />
            </div>
          </div>
        </section>

        {/* TIM EKSPERATA */}
        <motion.section style={{ marginBottom: '120px', background: 'rgba(198, 198, 198, 0.06)', padding: '60px', borderRadius: '2px' }}>
          <h3 style={{ fontSize: '28px', marginBottom: '30px' , color: 'rgba(255, 255, 255, 0.8)'}}>Naš tim eksperata u Srbiji</h3>
          <p style={{ lineHeight: '1.8', color: '#ccc', fontSize: '17px' }}>
            Mi smo Hansen Beck. Osnovani od strane strastvenih poslovnih eksperata u 25 zemalja na 5 kontinenata sa preko 400 godina kolektivnog poslovnog iskustva.
            <br /><br />
            Kao globalni provajder poslovnih obuka, nismo se spojili slučajno. Okupili smo se zbog zajedničke strasti prema ličnom i profesionalnom razvoju. Naša svrha omogućavanja ljudima da postanu bolje verzije sebe proizašla je iz godina zajedničkog iskustva.
          </p>
          <div style={{
                minHeight: '100vh',
                width: '100%',
                backgroundColor: '#0a0a0a',
                color: '#fff',
                padding: '120px 20px',
                position: 'relative',
                overflowX: 'hidden'
              }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                  
                  {/* NASLOV STRANICE */}
                  <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ textAlign: 'center', marginBottom: '0px' }}
                  >
                     </motion.div>
          
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '150px' }}>
                    {trainers.map((trainer, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                          display: 'flex',
                          flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                          gap: '80px',
                          flexWrap: 'wrap',
                          alignItems: 'start'
                        }}
                      >
                        {/* VIZUELNI DEO SA OKVIROM (SUCCESS LINE STIL) */}
                        <div style={{ position: 'relative', width: '320px', height: '400px', flexShrink: 0 }}>
                          {/* Narandžasti okvir u pozadini */}
                          <div style={{ 
                            position: 'absolute', 
                            top: '15px', 
                            left: index % 2 === 0 ? '-15px' : '15px', 
                            width: '100%', 
                            height: '100%', 
                            border: '1px solid rgba(198, 198, 198, 0.39)', 
                            zIndex: 0 
                          }} />
                          
                          {/* Slika trenera */}
                          <div style={{ 
                            width: '100%', 
                            height: '100%', 
                            backgroundColor: '#111', 
                            overflow: 'hidden',
                            position: 'relative',
                            zIndex: 1,
                            border: '1px solid rgba(255,255,255,0.05)'
                          }}>
                            <img 
                              src={trainer.image} 
                              alt={trainer.name} 
                              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                            />
                          </div>
                        </div>
          
                        {/* TEKSTUALNI DEO */}
                        <div style={{ flex: 1, minWidth: '300px' }}>
                          <h3 style={{ fontSize: '36px', fontWeight: '900', margin: '0' }}>{trainer.name}</h3>
                          <h4 style={{ 
                            color: 'rgba(255, 255, 255, 0.9)', 
                            fontSize: '13px', 
                            letterSpacing: '2px', 
                            textTransform: 'uppercase', 
                            margin: '10px 0 30px 0' 
                          }}>
                            {trainer.title}
                          </h4>
                          
                          <div style={{ fontSize: '16px', lineHeight: '1.8', color: '#aaa', marginBottom: '40px' }}>
                            {trainer.bio.map((para, i) => (
                              <p key={i} style={{ marginBottom: '15px' }}>{para}</p>
                            ))}
                          </div>
          
                          {/* Kontakt i Specijalnosti */}
                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '30px', borderTop: '1px solid #222', paddingTop: '30px' }}>
                             <div>
                                <p style={{ fontSize: '11px', color: '#555', textTransform: 'uppercase', marginBottom: '10px' }}>Kontakt</p>
                                <p style={{ fontSize: '14px', color: '#ccc', margin: '5px 0' }}>{trainer.phone}</p>
                                <a href={trainer.linkedin} target="_blank" rel="noreferrer" style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none' }}>LinkedIn Profil →</a>
                             </div>
                             <div>
                                <p style={{ fontSize: '11px', color: '#555', textTransform: 'uppercase', marginBottom: '10px' }}>Specijalnosti</p>
                                <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px', color: '#ccc' }}>
                                  {trainer.specialties.map((s, i) => <li key={i} style={{ marginBottom: '5px' }}>• {s}</li>)}
                                </ul>
                             </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
        </motion.section>

        {/* IME - ISTORIJA */}
        <section style={{ paddingBottom: '100px' }}>
          <h4 style={{ color: '#666', letterSpacing: '3px', marginBottom: '20px' }}>KAKO SMO ODABRALI IME</h4>
          <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start' }}>
            <div style={{ flex: 1, fontSize: '15px', lineHeight: '1.8', color: '#aaa' }}>
              Početkom 20. veka trka je bila u toku – ko će prvi stići do Južnog pola. Roald Amundsen je 14. decembra 1911. podigao zastavu, ali mi smo izabrali da odamo počast dvojici zaboravljenih ljudi – članovima posade i pilotima na ledu. Bez njihove stručnosti u navigaciji opasnim vodama, tim ne bi pobedio. Ta dva čoveka u pozadini fotografije bili su <strong>Ludvig Hansen i Andreas Beck</strong>.
              <br /><br />
              Kao i oni, mi imamo stručnost da vas opremimo za vaše uspešno putovanje. Zajedno vam omogućavamo da istražite svoje snage, savladate veštine i isporučite opipljive rezultate.
            </div>
            <div style={{ width: '300px', height: '375px', background: '#111', border: '1px solid #333', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#444' }}>
              <img src="/aboutus.jpg" alt="Hansen Beck Crew" style={{ maxWidth: '100%', maxHeight: '100%' }} /> 
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

// Pomoćna komponenta za vrednosti
const ValueItem = ({ title, desc }) => (
  <div style={{ margin: '25px 0' }}>
    <h5 style={{ fontSize: '18px', marginBottom: '5px', color: '#fff' }}>{title}</h5>
    <p style={{ fontSize: '14px', color: '#888', lineHeight: '1.5' }}>{desc}</p>
  </div>
);

export default AboutUs;