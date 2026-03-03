import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const AboutUs = ({ onBack }) => {
  const [language, setLanguage] = useState('sr');

  const content = {
    sr: {
      heroTag: "Globalni Eksperti",
      heroTitle: "Hansen Beck je globalni ekspert i partner za kreiranje pozitivne i održive poslovne transformacije.",
      purposeTitle: "Zašto to radimo - Svrha",
      purposeText: "Naša strast je stvaranje trenutaka učenja koji menjaju život jer verujemo da svako ima potencijal da briljira.",
      visionTitle: "Čemu težimo – Vizija",
      visionText: "Bićemo preferirani globalni partner za one koji traže odlične rezultate kroz impresivna iskustva učenja, koja omogućavaju pozitivne promene u ponašanju.",
      missionTitle: "Šta radimo - Misija",
      missionText: "Omogućavamo preduzećima da rastu razvijajući ljude da imaju pozitivan način razmišljanja, unapređene veštine i poboljšan uticaj.",
      valuesTitle: "Ko smo mi i kako se ponašamo - Naše vrednosti",
      weAre: "Mi smo...",
      weBelieve: "Verujemo u...",
      v1: ["Autentični", "Iskreni smo, empatični i aktivno gradimo poverenje. Otvoreni smo i delimo svoje ranjivosti."],
      v2: ["Pokretači (Driven)", "Završavamo stvari. Lično doprinosimo i aktivno angažujemo druge. Upravljamo i isporučujemo rezultate."],
      v3: ["Volimo ono što radimo", "Volimo svoj posao i to pokazujemo!"],
      v4: ["Istraživanje", "Dosledno smo radoznali, sa mentalitetom rasta. Napredujemo u promenama i imamo hrabrosti da zakoračimo u nepoznato."],
      v5: ["Buđenje heroja", "Mi smo skromni izazivači. Otkrivamo i prepoznajemo potencijal u drugima. Omogućavamo ljudima da napreduju."],
      v6: ["Vrednovanje različitosti", "Inkluzivni smo. Uživamo i obogaćeni smo različitošću. Pokazujemo poštovanje prema svima."],
      teamTitle: "Naš tim eksperata u Srbiji",
      teamIntro: "Mi smo Hansen Beck. Osnovani od strane strastvenih poslovnih eksperata u 25 zemalja na 5 kontinenata sa preko 400 godina kolektivnog poslovnog iskustva. Kao globalni provajder poslovnih obuka, nismo se spojili slučajno. Okupili smo se zbog zajedničke strasti prema ličnom i profesionalnom razvoju. Naša svrha omogućavanja ljudima da postanu bolje verzije sebe proizašla je iz godina zajedničkog iskustva.",
      contact: "Kontakt",
      specialties: "Specijalnosti",
      historyTitle: "KAKO SMO ODABRALI IME",
      historyText: "Početkom 20. veka trka je bila u toku – ko će prvi stići do Južnog pola. Roald Amundsen je 14. decembra 1911. podigao zastavu, ali mi smo izabrali da odamo počast dvojici zaboravljenih ljudi – članovima posade i pilotima na ledu. Bez njihove stručnosti u navigaciji opasnim vodama, tim ne bi pobedio. Ta dva čoveka u pozadini fotografije bili su Ludvig Hansen i Andreas Beck. Kao i oni, mi imamo stručnost da vas opremimo za vaše uspešno putovanje. Zajedno vam omogućavamo da istražite svoje snage, savladate veštine i isporučite opipljive rezultate.",
      trainers: [
        {
          name: "Nikola Mirčić",
          title: "Suosnivač Hansen Beck | Master of Science in Global HRM",
          bio: [
            "Master of Science in Global Human Resource Management, University of Liverpool.",
            "Suosnivač globalne kompanije za trening i razvoj zaposlenih Hansen Beck. Aktivan Hansen Beck trener.",
            "Počevši od 1993. godine, Nikola je skupljao svoja iskustva kroz saradnju sa različitim IT kompanijama. Od 1998. do 2001. radio je kao sertifikovani Microsoft trener za infrastrukturna rešenja. U martu 2001. je postao deo Microsoft tima u Srbiji, sa zadatkom edukacije lokalnog tržišta o novim tehnologijama. U julu 2002. postao je jedan od prvih zaposlenih u novo-otvorenoj firmi Microsoft Srbija.",
            "Tokom sledećih 7 godina vodio je prodaju u segmentu malih i srednjih preduzeća, razvijajući i vodeći tim od 15 ljudi. Poslednju godinu u Microsoftu proveo je u Ukrajini na poziciji menadžera za borbu protiv softverske piraterije.",
            "Od januara 2010. godine Nikola se pridružio kompaniji Gustav Kaeser Training International otvaranjem franšize za teritoriju Srbije i Crne Gore. Od 2019. Nikola je suosnivač internacionalne treninge kompanije Hansen Beck GmbH."
          ],
          specialties: ["Komunikacija kao alat: Navesti druge na akciju!", "Uticaj kao preduslov za postizanje natprosečnih uspeha.", "Razvoj i transformacija organizacione kulture.", "Razvoj i vođenje timova visokih performansi.", "Prodaja rešenja.", "Veština pripreme i vođenja uspešnih pregovora.", "Držanje uverljivih prezentacija.", "Upravljanje projektima.", "Insights Discovery analiza ličnih preferenci."]
        },
        {
          name: "Ivana Bojović",
          title: "Biznis Trener | Magistar nauka internacionalnog menadžmenta",
          bio: [
            "Magistar nauka internacionalnog menadžmenta (Beograd, London). Počev od 2003. godine skupljala je svoja iskustva kao šef prodaje mt:s u Telekom-u Srbija, uz učešće u različitim projektima kao što su uspostavljanje prodajnih kanala m:tel-a u Crnoj Gori ili kontakt centra Univerzijade u Beogradu. 2008. godine uspostavlja i rukovodi trening centrom u Telekom-u Srbija.",
            "Interno je sertifikovan trener za usluge mobilne i fiksne telefonije. 2010. godine prelazi u Orion telekom i bavi se prodajom, brigom o korisnicima, upravljanjem kvalitetom menadžmenta, treninzima, a zatim preuzima odgovornost izvršnog direktora operacija.",
            "Nakon što se pridružila SBB-u i timu United Group-e, u narednih 9 godina uspostavlja i razvija trening centre i UG Akademiju kao krovni strateški i operativni hub, podržavajući poslovne napore grupe na 7 različitih telko tržišta. Ivana je organizovala i isporučila mnogobrojne biznis treninge. U decembru 2024, Ivana se pridružila Hansen Beck timu kao biznis trener."
          ],
          specialties: ["Prodajna komunikacija.", "Prezentacione veštine.", "Vođenje ljudi.", "Customer journey setup.", "Upravljanje procesima.", "Transformacija kompanijske kulture u cilju unapređenja korisničkog iskustva.", "Korporativna edukacija i alati za razvoj treninga."]
        }
      ],
      legalTitle: "Pravni podaci i kontakt",
legalPartner: "Hansen Beck partner za teritoriju Republike Srbije:",
companyName: "Training & Development d.o.o.",
address: "Tošin Bunar 188/1, 11070 Novi Beograd",
taxId: "PIB: 106602940",
contactPerson: "Kontakt osoba: Nikola Mirčić",
    },
    en: {
      heroTag: "Global Experts",
      heroTitle: "Hansen Beck is a global expert and partner for creating positive and sustainable business transformation.",
      purposeTitle: "Why we do it - Purpose",
      purposeText: "Our passion is creating life-changing learning moments because we believe everyone has the potential to excel.",
      visionTitle: "What we strive for – Vision",
      visionText: "We will be the preferred global partner for those seeking excellent results through impressive learning experiences that enable positive changes in behavior.",
      missionTitle: "What we do - Mission",
      missionText: "We enable businesses to grow by developing people to have a positive mindset, enhanced skills, and improved impact.",
      valuesTitle: "Who we are and how we behave - Our Values",
      weAre: "We are...",
      weBelieve: "We believe in...",
      v1: ["Authentic", "We are honest, empathetic, and actively build trust. We are open and share our vulnerabilities."],
      v2: ["Driven", "We get things done. We contribute personally and actively engage others. We manage and deliver results."],
      v3: ["Passionate", "We love our work and we show it!"],
      v4: ["Exploration", "We are consistently curious, with a growth mindset. We thrive on change and have the courage to step into the unknown."],
      v5: ["Awakening the hero", "We are humble challengers. We discover and recognize potential in others. We enable people to progress."],
      v6: ["Valuing diversity", "We are inclusive. We enjoy and are enriched by diversity. We show respect to everyone."],
      teamTitle: "Our team of experts in Serbia",
      teamIntro: "We are Hansen Beck. Founded by passionate business experts in 25 countries across 5 continents with over 400 years of collective business experience. As a global business training provider, we didn't come together by chance. We united due to a shared passion for personal and professional development. Our purpose of enabling people to become better versions of themselves grew from years of shared experience.",
      contact: "Contact",
      specialties: "Specialties",
      historyTitle: "HOW WE CHOSE OUR NAME",
      historyText: "At the beginning of the 20th century, the race was on – who would reach the South Pole first. Roald Amundsen raised the flag on December 14, 1911, but we chose to honor two forgotten men – crew members and ice pilots. Without their expertise in navigating dangerous waters, the team would not have won. Those two men in the background of the photograph were Ludvig Hansen and Andreas Beck. Like them, we have the expertise to equip you for your successful journey. Together we enable you to explore your strengths, master skills, and deliver tangible results.",
      trainers: [
        {
          name: "Nikola Mirčić",
          title: "Hansen Beck Co-founder | Master of Science in Global HRM",
          bio: [
            "Master of Science in Global Human Resource Management, University of Liverpool.",
            "Co-founder of the global training and employee development company Hansen Beck. Active Hansen Beck trainer.",
            "Starting from 1993, Nikola gathered his experience through collaboration with various IT companies. From 1998 to 2001, he worked as a certified Microsoft trainer for infrastructure solutions. In March 2001, he became part of the Microsoft team in Serbia, with the task of educating the local market about new technologies.",
            "During the next 7 years, he led sales in the SME segment, developing and leading a team of 15 people. He spent his last year at Microsoft in Ukraine as an anti-piracy manager.",
            "From January 2010, Nikola joined Gustav Kaeser Training International by opening a franchise for Serbia and Montenegro. Since 2019, Nikola is a co-founder of the international training company Hansen Beck GmbH."
          ],
          specialties: ["Communication as a tool: Get others to take action!", "Impact as a prerequisite for achieving above-average success.", "Development and transformation of organizational culture.", "Development and leadership of high-performance teams.", "Solution selling.", "Skills of preparing and leading successful negotiations.", "Delivering convincing presentations.", "Project management.", "Insights Discovery analysis of personal preferences."]
        },
        {
          name: "Ivana Bojović",
          title: "Business Trainer | Master of Science in International Management",
          bio: [
            "Master of Science in International Management (Belgrade, London). Starting from 2003, she gathered experience as Head of Sales for mt:s at Telekom Serbia, participating in projects such as establishing m:tel sales channels in Montenegro. In 2008, she established and managed the training center at Telekom Serbia.",
            "She is an internally certified trainer for mobile and fixed telephony services. In 2010, she moved to Orion Telekom, handling sales, customer care, quality management, and training, later taking over as Executive Operations Director.",
            "After joining SBB and the United Group team, over the next 9 years she established and developed training centers and the UG Academy as a strategic hub, supporting the group's business efforts in 7 different telco markets. Ivana has organized and delivered numerous business trainings. In December 2024, Ivana joined the Hansen Beck team as a business trainer."
          ],
          specialties: ["Sales communication.", "Presentation skills.", "Leading people.", "Customer journey setup.", "Process management.", "Transformation of company culture to improve customer experience.", "Corporate education and training development tools."]
        }
      ],
      legalTitle: "Legal Information & Contact",
legalPartner: "Hansen Beck partner for the territory of the Republic of Serbia:",
companyName: "Training & Development d.o.o.",
address: "Tosin Bunar 188/1, 11070 New Belgrade",
taxId: "VAT: 106602940",
contactPerson: "Contact person: Nikola Mircic",
    }
  };

  const videoRef = useRef(null); // Referenca za video element

  // Logika za Play/Pause na scroll
  useEffect(() => {
    // 1. Kopiramo trenutnu vrednost reference u lokalnu varijablu
    const currentVideoRef = videoRef.current;

    const options = {
      root: null,
      threshold: 0.5,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (currentVideoRef) {
          if (entry.isIntersecting) {
            currentVideoRef.play().catch(err => console.log("Autoplay prevented"));
          } else {
            currentVideoRef.pause();
          }
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    
    if (currentVideoRef) {
      observer.observe(currentVideoRef);
    }

    // 2. U cleanup funkciji koristimo lokalnu varijablu, ne ref.current
    return () => {
      if (currentVideoRef) {
        observer.unobserve(currentVideoRef);
      }
    };
  }, []); // Dependency niz ostaje prazan jer želimo da se ovo desi samo pri mount-u

  const t = content[language];
  const trainers = t.trainers.map((trainer, index) => ({
    ...trainer,
    image: index === 0 ? "/nikolamircic.jpeg" : "/ivana.jpg",
    phone: index === 0 ? "+381 63 221910" : "+381 64 151 34 30",
    linkedin: index === 0 ? "https://www.linkedin.com/in/nikmir/" : "https://www.linkedin.com/in/ivana-bojovic-m-sc-04316326"
  }));

  return (
    <div style={{ minHeight: '100vh', width: '100%', backgroundColor: '#000', color: '#fff', padding: '80px 20px', overflowX: 'hidden', position: 'relative' }}>

      {/* Switcher */}
      <div style={{ position: 'fixed', top: '30px', right: '40px', zIndex: 9999, display: 'flex', gap: '15px', color: '#fff', fontSize: '12px', letterSpacing: '2px', fontWeight: 'bold', background: 'rgba(0,0,0,0.5)', padding: '10px 20px', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.2)' }}>
        <span onClick={() => setLanguage('sr')} style={{ cursor: 'pointer', opacity: language === 'sr' ? 1 : 0.4, transition: '0.3s' }}>SR</span>
        <span style={{ opacity: 0.2 }}>|</span>
        <span onClick={() => setLanguage('en')} style={{ cursor: 'pointer', opacity: language === 'en' ? 1 : 0.4, transition: '0.3s' }}>EN</span>
      </div>

      <motion.button onClick={onBack} whileHover={{ x: -5 }} style={{ position: 'fixed', top: '40px', left: '40px', background: 'transparent', border: 'none', color: '#666', cursor: 'pointer', fontSize: '12px', letterSpacing: '2px', zIndex: 100 }}></motion.button>

      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h2 style={{ fontSize: '10px', letterSpacing: '5px', color: 'rgba(255, 255, 255, 0.42)', textTransform: 'uppercase' }}>{t.heroTag}</h2>
          <h1 style={{ fontSize: '48px', fontWeight: '900', margin: '20px 0' }}>{t.heroTitle}</h1>
        </motion.div>

        {/* VIDEO SEKCIJA NA KRAJU */}
        <section style={{ padding: '10px 0 60px 0' }}>
          <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    style={{ 
      width: '100%', 
      position: 'relative', 
      borderRadius: '8px', // Malo zaobljenije za moderniji izgled
      overflow: 'hidden', 
      backgroundColor: '#050505',
      // --- DODAT OKVIR ---
      border: '1px solid rgba(255, 255, 255, 0.12)', // Suptilna bela linija
      padding: '12px', // Razmak između okvira i samog videa (kao paspartu)
      boxShadow: '0 30px 60px rgba(0,0,0,0.8), inset 0 0 20px rgba(255,255,255,0.02)',
    }}
  >
            <video
              ref={videoRef} // DODATA REFERENCA
              controls
              muted // Mora biti muted da bi autoplay radio na većini browsera
              loop
              playsInline
              style={{
                width: '100%',
                display: 'block',
                filter: 'grayscale(30%) contrast(1.1)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
              }}
            >
              <source src="/Hansen-Beck-Brand-Story.mp4" type="video/mp4" />
              Vaš pregledač ne podržava video tag.
            </video>

            <div style={{ marginTop: '20px', textAlign: 'right' }}>
              <p style={{
                fontFamily: "'PT Serif', serif",
                fontSize: '12px',
                letterSpacing: '3px',
                color: '#666',
                textTransform: 'uppercase'
              }}>
                {language === 'sr' ? 'Pogledajte našu priču' : 'Watch our story'}
              </p>
            </div>
          </motion.div>
        </section>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '120px' }}>
          {[
            { title: t.purposeTitle, text: t.purposeText },
            { title: t.visionTitle, text: t.visionText },
            { title: t.missionTitle, text: t.missionText }
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }} style={{ padding: '30px', borderLeft: '1px solid rgba(252, 252, 252, 0.3)', background: 'rgba(255,255,255,0.02)' }}>
              <h4 style={{ fontSize: '12px', letterSpacing: '2px', color: '#666', marginBottom: '15px' }}>{item.title}</h4>
              <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#ccc' }}>{item.text}</p>
            </motion.div>
          ))}
        </div>

        

        <section style={{ marginBottom: '120px' }}>
          <h3 style={{ fontSize: '24px', textAlign: 'center', marginBottom: '60px' }}>{t.valuesTitle}</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
            <div>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontWeight: 'bold' }}>{t.weAre}</p>
              <ValueItem title={t.v1[0]} desc={t.v1[1]} />
              <ValueItem title={t.v2[0]} desc={t.v2[1]} />
              <ValueItem title={t.v3[0]} desc={t.v3[1]} />
            </div>
            <div>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontWeight: 'bold' }}>{t.weBelieve}</p>
              <ValueItem title={t.v4[0]} desc={t.v4[1]} />
              <ValueItem title={t.v5[0]} desc={t.v5[1]} />
              <ValueItem title={t.v6[0]} desc={t.v6[1]} />
            </div>
          </div>
        </section>

        <motion.section style={{ marginBottom: '120px', background: 'rgba(198, 198, 198, 0.06)', padding: '60px', borderRadius: '2px' }}>
          <h3 style={{ fontSize: '28px', marginBottom: '30px', color: 'rgba(255, 255, 255, 0.8)' }}>{t.teamTitle}</h3>
          <p style={{ lineHeight: '1.8', color: '#ccc', fontSize: '17px' }}>{t.teamIntro}</p>

          <div style={{ width: '100%', backgroundColor: 'transparent', color: '#fff', paddingTop: '80px', position: 'relative' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '150px' }}>
                {trainers.map((trainer, index) => (
                  <motion.div key={index} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ display: 'flex', flexDirection: index % 2 === 0 ? 'row' : 'row-reverse', gap: '80px', flexWrap: 'wrap', alignItems: 'start' }}>
                    <div style={{ position: 'relative', width: '320px', height: '400px', flexShrink: 0 }}>
                      <div style={{ position: 'absolute', top: '15px', left: index % 2 === 0 ? '-15px' : '15px', width: '100%', height: '100%', border: '1px solid rgba(198, 198, 198, 0.39)', zIndex: 0 }} />
                      <div style={{ width: '100%', height: '100%', backgroundColor: '#111', overflow: 'hidden', position: 'relative', zIndex: 1, border: '1px solid rgba(255,255,255,0.05)' }}>
                        <img src={trainer.image} alt={trainer.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                    </div>
                    <div style={{ flex: 1, minWidth: '300px' }}>
                      <h3 style={{ fontSize: '36px', fontWeight: '900', margin: '0' }}>{trainer.name}</h3>
                      <h4 style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', margin: '10px 0 30px 0' }}>{trainer.title}</h4>
                      <div style={{ fontSize: '16px', lineHeight: '1.8', color: '#aaa', marginBottom: '40px' }}>
                        {trainer.bio.map((para, i) => (<p key={i} style={{ marginBottom: '15px' }}>{para}</p>))}
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '30px', borderTop: '1px solid #222', paddingTop: '30px' }}>
                        <div>
                          <p style={{ fontSize: '11px', color: '#555', textTransform: 'uppercase', marginBottom: '10px' }}>{t.contact}</p>
                          <p style={{ fontSize: '14px', color: '#ccc', margin: '5px 0' }}>{trainer.phone}</p>
                          <a href={trainer.linkedin} target="_blank" rel="noreferrer" style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none' }}>LinkedIn Profil →</a>
                        </div>
                        <div>
                          <p style={{ fontSize: '11px', color: '#555', textTransform: 'uppercase', marginBottom: '10px' }}>{t.specialties}</p>
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

        <section style={{ paddingBottom: '100px' }}>
          <h4 style={{ color: '#666', letterSpacing: '3px', marginBottom: '20px' }}>{t.historyTitle}</h4>
          <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start' }}>
            <div style={{ flex: 1, fontSize: '15px', lineHeight: '1.8', color: '#aaa' }}>
              {t.historyText}
            </div>
            <div style={{ width: '300px', height: '375px', background: '#111', border: '1px solid #333', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#444' }}>
              <img src="/aboutus.jpg" alt="Hansen Beck Crew" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            </div>
          </div>
        </section>

        {/* NOVA SEKCIJA NA SAMOM KRAJU */}
<section style={{ 
  marginTop: '0px', 
  paddingTop: '60px', 
  borderTop: '1px solid rgba(255,255,255,0.05)', 
  paddingBottom: '40px' 
}}>
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
    
    {/* Kolona 1: Kompanija */}
    <div>
      <h4 style={{ fontSize: '11px', letterSpacing: '3px', color: '#666', marginBottom: '20px', textTransform: 'uppercase' }}>
        {t.legalTitle}
      </h4>
      <p style={{ color: '#888', fontSize: '14px', marginBottom: '10px' }}>{t.legalPartner}</p>
      <p style={{ color: '#fff', fontSize: '18px', fontWeight: 'bold', marginBottom: '5px' }}>{t.companyName}</p>
      <p style={{ color: '#888', fontSize: '14px' }}>{t.address}</p>
      <p style={{ color: '#444', fontSize: '13px', marginTop: '10px' }}>{t.taxId}</p>
    </div>

    {/* Kolona 2: Direktni kontakt */}
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
      <p style={{ color: '#ccc', fontSize: '15px', marginBottom: '0px' }}>{t.contactPerson}</p>
      <a 
        href="mailto:nikola.mircic@traininganddevelopment.rs" 
        style={{ color: '#fff', fontSize: '16px', textDecoration: 'none', marginBottom: '5px', borderBottom: '1px solid rgba(255,255,255,0.1)', width: 'fit-content' }}
      >
        nikola.mircic@traininganddevelopment.rs
      </a>
      <p style={{ color: '#fff', fontSize: '16px', marginTop: '5px' }}>+381-63-221-910</p>
    </div>

  </div>
</section>
        
      </div>
    </div>
  );
};

const ValueItem = ({ title, desc }) => (
  <div style={{ margin: '25px 0' }}>
    <h5 style={{ fontSize: '18px', marginBottom: '5px', color: '#fff' }}>{title}</h5>
    <p style={{ fontSize: '14px', color: '#888', lineHeight: '1.5' }}>{desc}</p>
  </div>
);

export default AboutUs;