import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const InternalTrainings = () => {
    const [language, setLanguage] = useState('sr');
    const API_BASE_URL = process.env.REACT_APP_API_URL;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const content = {
        en: {
            category: "INTERNAL TRAININGS",
            title: "Hansen Beck — Who We Are & How We Work",
            subtitle: "Your next conquest is within.",
            p1: "Your company's next great conquest isn't out there. It's within. It lives in the untapped potential of your people — in the way they communicate, collaborate, and lead one another through complexity. In a world demanding constant evolution, sustained success is rarely a matter of strategy alone. It is a matter of people: how they behave, how they connect, and how they grow.",
            p2: "You've heard it before — the endless promises of 'people development.' Programs that sound transformational but deliver little more than a day away from the office. The gap between rhetoric and real change is where most organizations quietly lose ground.",
            p3: "We believe it doesn't have to be that way. We believe that when you awaken the hero in every individual, the organization moves forward — measurably, sustainably, and on its own terms.",
            section2Title: "We are Ice Pilots.",
            p4: "Like Hansen and Beck — the two Ice Pilots who guided Amundsen's ships through the Antarctic ice so that others could conquer the South Pole — our role is not to be in the spotlight. It is to make sure you reach yours.",
            p5: "We call ourselves Ice Pilots because that is exactly what we do: we navigate alongside your people — not as outside observers, but as an integrated part of your team — combining strategic foresight with ground-level pragmatism. We don't hand you a map and wish you well. We stay until your people have become the heroes of their own story.",
            p6: "And to navigate the ice, you need the right instrument. That is why we place the HB Compass in your hands. Our proprietary model maps the leadership and communication competencies that define great organizations in the 21st century — and it's not just something we use on you. It is a tool we share with you, one that stays in your organization long after our journey together ends.",
            section3Title: "Four ways to work with us.",
            p7: "Every organization's ice is different. That is why we offer four distinct levels of engagement — each one designed to meet you exactly where you are and take you precisely where you need to go.",

            levels: [
                {
                    id: 1,
                    name: "Ice Pilot Training Programmes",
                    dur: "5+ Days",
                    sub: "Becoming the navigator of your own journey",
                    desc: "Our flagship programmes are built for those who are ready to truly change — not just learn. Spanning five or more training days with three to four weeks between each session, these programmes on topics such as sales, negotiation, management, and leadership are fully tailored to your team's specific context and challenges.",
                    detail: "Groups are kept intimate — up to ten participants — because real transformation doesn't happen in an auditorium. There are no slides, no passive listening. Every session is driven by live discussion, real scenarios, and role plays that put participants in the situations that actually matter to them.",
                    desc1: "But the most important part of every programme doesn't happen in the room. Between sessions, participants carry back structured homework — because what changes a person is not what they hear, but what they practice. By the end, your people don't just know the tools. They are ready to take the Ice Pilot's role into their own hands — navigating their teams and their work with the same skill, confidence, and calm that takes a ship through the ice."
                },
                {
                    id: 2,
                    name: "Level-Up",
                    dur: "1-2 Days",
                    sub: "A simulator for your next specific challenge",
                    desc: "The ice is never the same twice. Every journey brings new situations, new pressures, and new decisions that demand sharp preparation.",
                    detail: "Level-Up is designed for teams and individuals who have already completed a Hansen Beck programme and want to prepare for a very specific challenge ahead — a high-stakes negotiation, a critical vendor meeting, a difficult internal conversation. Together, we build the scenario, map the risks, and rehearse the response.",
                    desc1: "Think of it as a simulator: we draw the route together before you sail it, so that when the moment comes, your team is not navigating blind — they are navigating ready."
                },
                {
                    id: 3,
                    name: "Partners in Development",
                    dur: "Ongoing",
                    sub: "Building your own fleet of Ice Pilots",
                    desc: "For medium and large organizations, the most powerful investment is not an external training provider. It is the capacity to develop your own people — continuously, consistently, and from within.",
                    detail: "As your Partners in Development, we help you build your own internal academy: a structured, sustainable environment where growth is no longer dependent on outside interventions, but becomes part of how your organization operates every day.",
                    desc1: "We make this possible in three ways: by introducing the HB Compass — Talent Navigator as your internal competence framework, by developing your in-house trainers through a dedicated Train the Trainer programme, and by co-creating the curricula your organization needs to grow on its own terms.",
                    desc2: "The result is not a dependency on us — it is the opposite. You get your own internal academy, your own Ice Pilots, your own routes, and your own capacity to take your people through the ice whenever the journey demands it."
                },
                {
                    id: 4,
                    name: "Interim Ice Pilot",
                    dur: "1+ Days/Month",
                    sub: "Expert navigation, when and where you need it",
                    desc: "Sometimes you don't need a full programme. You need an Ice Pilot in the room.",
                    detail: "Through our Interim Management offering, a Hansen Beck Ice Pilot joins your operations for one or more days per month — embedded in your team's daily work, thinking alongside your leaders, and applying real expertise to real challenges as they emerge. It is not consulting from a distance. It is experienced, hands-on navigation, available to your organization exactly when and where the ice gets thick."
                }
            ],
            finalMessage: "The question is not whether your people have what it takes. The question is whether you are ready to help them find it. Let's navigate together.",
            copyright: "© 2026 HANSEN BECK SERBIA. ALL RIGHTS RESERVED.",
            formTitle: "Begin Your Expedition",
            formSubtitle: "Choose how you want us to navigate together",
            labels: {
                firstName: "First Name",
                lastName: "Last Name",
                email: "Email",
                phone: "Phone",
                company: "Company",
                interest: "4 Ways to Work with Us",
                message: "Message",
                submit: "Send Application",
                placeholderInterest: "Select an option...",
                options: [
                    "Ice Pilot Training Programmes",
                    "Level-Up Simulator",
                    "Partners in Development",
                    "Interim Ice Pilot"
                ]
            },
        },
        sr: {
            category: "INTERNI TRENINZI",
            title: "Hansen Beck — Ko smo mi i kako radimo",
            subtitle: "Vaše sledeće osvajanje je unutra.",
            p1: "Sledeća velika pobeda vaše kompanije nije negde tamo. Ona je unutra. Ona živi u neiskorišćenom potencijalu vaših ljudi — u načinu na koji komuniciraju, sarađuju i vode jedni druge kroz kompleksnost. U svetu koji zahteva neprestanu evoluciju, trajan uspeh retko je pitanje same strategije. To je pitanje ljudi: kako se ponašaju, kako se povezuju i kako rastu.",
            p2: "Čuli ste to već ranije — beskrajna obećanja o 'razvoju ljudi'. Programi koji zvuče transformaciono, ali donose malo više od dana provedenog van kancelarije. Jaz između retorike i stvarne promene je mesto gde većina organizacija tiho gubi tlo pod nogama.",
            p3: "Verujemo da ne mora biti tako. Verujemo da kada probudite heroja u svakom pojedincu, organizacija ide napred — merljivo, održivo i pod sopstvenim uslovima.",
            section2Title: "Mi smo Ice Pilots.",
            p4: "Poput Hansena i Becka — dvojice Ledenih Pilota koji su vodili Amundsenove brodove kroz antarktički led kako bi drugi mogli da osvoje Južni pol — naša uloga nije da budemo u centru pažnje. Naša uloga je da osiguramo da vi dostignete svoju.",
            p5: "Nazivamo sebe Ice Pilots jer je to upravo ono što radimo: navigiramo zajedno sa vašim ljudima — ne kao spoljni posmatrači, već kao integrisani deo vašeg tima — kombinujući strateško predviđanje sa pragmatizmom na terenu. Mi vam ne uručujemo mapu uz lepe želje. Ostajemo dok vaši ljudi ne postanu heroji sopstvene priče.",
            p6: "A da biste navigirali kroz led, potreban vam je pravi instrument. Zato vam u ruke stavljamo HB Compass. Naš vlasnički model mapira liderske i komunikacione kompetencije koje definišu velike organizacije u 21. veku — i to nije nešto što samo primenjujemo na vama. To je alat koji delimo sa vama, onaj koji ostaje u vašoj organizaciji dugo nakon što se naše zajedničko putovanje završi.",
            section3Title: "Četiri načina saradnje sa nama.",
            p7: "Led svake organizacije je drugačiji. Zato nudimo četiri različita nivoa angažovanja — svaki dizajniran da vas sretne tačno tamo gde se nalazite i odvede vas precizno tamo gde treba da stignete.",

            levels: [
                {
                    id: 1,
                    name: "Ice Pilot Programi Treninga",
                    dur: "5+ Dana",
                    sub: "Postanite navigator sopstvenog putovanja",
                    desc: "Naši vodeći programi su kreirani za one koji su spremni za istinsku promenu — ne samo za učenje. Obuhvatajući pet ili više dana treninga sa razmakom od tri do četiri nedelje između sesija, ovi programi na teme kao što su prodaja, pregovaranje, menadžment i liderstvo su potpuno prilagođeni specifičnom kontekstu i izazovima vašeg tima.",
                    detail: "Grupe su intimne — do deset učesnika — jer se prava transformacija ne dešava u dvoranama. Nema slajdova, nema pasivnog slušanja. Svaku sesiju vode živa diskusija, stvarni scenariji i igranje uloga koje učesnike stavlja u situacije koje su im zaista važne.",
                    desc1: "Ali najvažniji deo svakog programa se ne dešava u sali. Između sesija, učesnici nose strukturirani domaći zadatak — jer čoveka ne menja ono što čuje, već ono što praktikuje. Na kraju, vaši ljudi ne znaju samo alate. Oni su spremni da preuzmu ulogu Ledenog Pilota u sopstvene ruke — vodeći svoje timove i svoj rad sa istom veštinom, samopouzdanjem i smirenošću kojom se brod vodi kroz led."
                },
                {
                    id: 2,
                    name: "Level-Up",
                    dur: "1-2 Dana",
                    sub: "Simulator za vaš sledeći specifičan izazov",
                    desc: "Led nikada nije isti dva puta. Svako putovanje donosi nove situacije, nove pritiske i nove odluke koje zahtevaju oštru pripremu.",
                    detail: "Level-Up je dizajniran za timove i pojedince koji su već prošli Hansen Beck program i žele da se pripreme za vrlo specifičan izazov koji im predstoji — pregovore visokog uloga, kritičan sastanak sa dobavljačima ili težak interni razgovor. Zajedno gradimo scenario, mapiramo rizike i uvežbavamo odgovor.",
                    desc1: "Zamislite ovo kao simulator: zajednički iscrtavamo rutu pre nego što zaplovite, tako da kada dođe trenutak, vaš tim ne navigira naslepo — već navigira spreman."
                },
                {
                    id: 3,
                    name: "Partneri u Razvoju",
                    dur: "Kontinuirano",
                    sub: "Izgradnja sopstvene flote Ledenih Pilota",
                    desc: "Za srednje i velike organizacije, najmoćnija investicija nije spoljni pružalac obuka. To je sposobnost da razvijate sopstvene ljude — kontinuirano, dosledno i iznutra.",
                    detail: "Kao vaši Partneri u Razvoju, pomažemo vam da izgradite sopstvenu internu akademiju: strukturirano, održivo okruženje u kojem rast više ne zavisi od spoljnih intervencija, već postaje deo svakodnevnog poslovanja vaše organizacije.",
                    desc1: "Ovo omogućavamo na tri načina: uvođenjem HB Compass-a — Talent Navigatora kao vašeg internog okvira kompetencija, razvojem vaših internih trenera kroz namenski Train the Trainer program, i zajedničkim kreiranjem kurikuluma koji su vašoj organizaciji potrebni da raste pod sopstvenim uslovima.",
                    desc2: "Rezultat nije zavisnost od nas — naprotiv. Dobijate sopstvenu internu akademiju, sopstvene Ledene Pilote, sopstvene rute i sopstvenu sposobnost da vodite svoje ljude kroz led kad god putovanje to zahteva."
                },
                {
                    id: 4,
                    name: "Interim Ice Pilot",
                    dur: "1+ Dana/Mesečno",
                    sub: "Ekspertska navigacija, kada i gde vam je potrebna",
                    desc: "Ponekad vam nije potreban ceo program. Potreban vam je Ledeni Pilot u prostoriji.",
                    detail: "Kroz našu ponudu Interim Management-a, Hansen Beck Ledeni Pilot se pridružuje vašim operacijama na jedan ili više dana mesečno — ugrađen u svakodnevni rad vašeg tima, razmišljajući zajedno sa vašim liderima i primenjujući stručnost na stvarne izazove onako kako se oni pojavljuju. To nije konsalting sa distance. To je iskusna, praktična navigacija, dostupna vašoj organizaciji tačno tamo i tada gde led postane gust."
                }
            ],
            finalMessage: "Pitanje nije da li vaši ljudi imaju ono što je potrebno. Pitanje je da li ste spremni da im pomognete da to pronađu. Navigirajmo zajedno.",
            copyright: "© 2026 HANSEN BECK SRBIJA. SVA PRAVA ZADRŽANA.",
            formTitle: "Započnite svoju ekspediciju",
            formSubtitle: "Izaberite način na koji želite da sarađujemo",
            labels: {
                firstName: "Ime",
                lastName: "Prezime",
                email: "Email",
                phone: "Telefon",
                company: "Kompanija",
                interest: "Način saradnje (4 Ways to Work)",
                message: "Poruka",
                submit: "Pošalji prijavu",
                placeholderInterest: "Izaberite opciju...",
                options: [
                    "Ice Pilot Programi Treninga",
                    "Level-Up Simulator",
                    "Partneri u Razvoju (Interna Akademija)",
                    "Interim Ice Pilot"
                ]
            },
        }
    };

    const [formData, setFormData] = useState({
        FirstName: '',
        LastName: '',
        Email: '',
        PhoneNumber: '',
        CompanyName: '',
        TrainingName: 'Internal Trainings Page',
        TrainingDate: '', // Prazno prema zahtevu (null u bazi)
        TrainingTime: '', // Prazno prema zahtevu (null u bazi)
        FourWaysToWorkWithUs: '', // NOVA KOLONA
        Message: ''
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${API_BASE_URL}/api/training/signup`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert(language === 'sr' ? "Prijava uspešno poslata!" : "Application sent successfully!");
                setFormData({ ...formData, FirstName: '', LastName: '', Email: '', PhoneNumber: '', CompanyName: '', Message: '', FourWaysToWorkWithUs: '' });
            } else {
                alert("Error sending application.");
            }
        } catch (error) {
            console.error("Greška:", error);
        }
    };

    const t = content[language];

    const inputStyle = {
        background: 'transparent',
        border: 'none',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        padding: '15px 0',
        color: '#fff',
        fontSize: '16px',
        outline: 'none',
        width: '100%',
        marginBottom: '30px',
        fontFamily: 'inherit'
    };

    // Mala komponenta za prefinjenu sliku (akcenat)
    const ImageAccent = ({ src, float = 'none', width = '300px', margin = '0' }) => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} // Povećao sam opacity na 1 za bolju vidljivost
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
                width: width,
                float: float,
                margin: margin,
                clear: float === 'none' ? 'both' : 'none'
            }}
        >
            <img
                src={src}
                alt=""
                style={{
                    width: '100%',
                    height: 'auto',
                    // FILTERI ZA BOLJI KVALITET:
                    filter: 'grayscale(90%) brightness(1.1) contrast(1.05)',
                    imageRendering: 'crisp-edges', // Pomaže kod oštrine na nekim browserima
                    borderRadius: '2px',
                    display: 'block'
                }}
            />
        </motion.div>
    );

    return (
        <div style={{ backgroundColor: '#050505', color: '#fff', minHeight: '100vh' }}>

            {/* LANGUAGE SWITCHER */}
            <div style={{ position: 'fixed', top: '30px', right: '40px', zIndex: 99999, display: 'flex', alignItems: 'center', gap: '15px', color: '#fff', fontSize: '12px', letterSpacing: '2px', fontWeight: 'bold', background: 'rgba(0,0,0,0.5)', padding: '10px 20px', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.2)' }}>
                <span onClick={() => setLanguage('sr')} style={{ cursor: 'pointer', opacity: language === 'sr' ? 1 : 0.4, transition: '0.3s' }}>SR</span>
                <span style={{ opacity: 0.2 }}>|</span>
                <span onClick={() => setLanguage('en')} style={{ cursor: 'pointer', opacity: language === 'en' ? 1 : 0.4, transition: '0.3s' }}>EN</span>
            </div>

            {/* HERO SEKCIJA */}
            <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '0 10%', position: 'relative', overflow: 'hidden' }}>
                <motion.div style={{ position: 'relative', width: '350px', height: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '-20px', zIndex: 5 }}>
                    <motion.div animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.05, 1] }} transition={{ duration: 6, repeat: Infinity }} style={{ position: 'absolute', width: '110%', height: '110%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255, 180, 120, 0.12) 0%, rgba(255, 100, 50, 0) 70%)', filter: 'blur(40px)', zIndex: 1 }} />
                    <div style={{ position: 'absolute', width: '200px', height: '5px', background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.9) 50%, transparent)', clipPath: 'polygon(0% 50%, 50% 0%, 100% 50%, 50% 100%)', filter: 'blur(1px)', zIndex: 7, right: '-65px', top: '51%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                    <div style={{ position: 'absolute', width: '284px', height: '284px', borderRadius: '50%', background: 'conic-gradient(from 260deg at 50% 50%, transparent 0%, rgba(255, 255, 255, 0.8) 15%, transparent 30%)', filter: 'blur(2px)', transform: 'rotate(80deg)', zIndex: 4 }} />
                    <div style={{ position: 'absolute', width: '284px', height: '284px', borderRadius: '50%', background: 'conic-gradient(from 80deg at 50% 50%, transparent 0%, rgba(255, 255, 255, 0.8) 15%, transparent 30%)', filter: 'blur(2px)', transform: 'rotate(80deg)', zIndex: 4 }} />
                    <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }} transition={{ duration: 3, repeat: Infinity }} style={{ position: 'absolute', right: '30px', top: '50%', transform: 'translateY(-50%)', width: '8px', height: '8px', backgroundColor: '#fff', borderRadius: '50%', zIndex: 10, boxShadow: '0 0 25px 8px rgba(255, 255, 255, 0.9)' }} />
                    <div style={{ position: 'relative', width: '280px', height: '280px', backgroundColor: '#000', borderRadius: '50%', zIndex: 5, boxShadow: '0 0 15px rgba(0,0,0,1)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                        <motion.img src="/logo.png" initial={{ opacity: 0 }} animate={{ opacity: 0.2 }} transition={{ delay: 1, duration: 2 }} style={{ width: '220px', height: 'auto', objectFit: 'contain', filter: 'grayscale(100%) brightness(1.5)' }} />
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} style={{ zIndex: 10 }}>
                    <h4 style={{ color: 'rgba(255, 255, 255, 0.8)', letterSpacing: '5px', textTransform: 'uppercase', fontSize: '12px', marginBottom: '20px' }}>{t.category}</h4>
                    <h1 style={{ fontSize: 'clamp(32px, 5vw, 64px)', fontWeight: '900', lineHeight: '1.1', maxWidth: '1000px', marginBottom: '20px' }}>{t.title}</h1>
                    <h2 style={{ fontSize: '24px', color: '#888', fontWeight: '400', letterSpacing: '1px' }}>{t.subtitle}</h2>
                </motion.div>
            </section>

            {/* MAIN CONTENT */}
            <section style={{ padding: '100px 10%', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>

                    {/* Intro */}
                    <div style={{ marginBottom: '100px' }}>
                        <ImageAccent src="/images/1.png" float="right" width="220px" margin="0 0 30px 40px" />
                        <p style={{ fontSize: '20px', lineHeight: '1.8', marginBottom: '40px' }}>{t.p1}</p>
                        <p style={{ fontSize: '18px', color: '#888', lineHeight: '1.8', marginBottom: '40px' }}>{t.p2}</p>
                        <p style={{ fontSize: '22px', fontWeight: '600', borderLeft: '3px solid rgba(255, 255, 255, 0.4)', paddingLeft: '30px' }}>{t.p3}</p>
                    </div>

                    {/* Ice Pilots */}
                    <div style={{ marginBottom: '100px', clear: 'both' }}>
                        <h2 style={{ fontSize: '42px', fontWeight: '900', marginBottom: '40px' }}>{t.section2Title}</h2>
                        <p style={{ fontSize: '18px', color: '#aaa', lineHeight: '1.8', marginBottom: '30px' }}>{t.p4}</p>
                        <p style={{ fontSize: '18px', color: '#aaa', lineHeight: '1.8', marginBottom: '30px' }}>{t.p5}</p>
                        <ImageAccent src="/images/3.png" width="400px" margin="60px auto" />

                        <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', padding: '40px', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px' }}>
                            <ImageAccent src="/images/4.png" float="right" width="180px" margin="0 0 10px 20px" />
                            <p style={{ fontSize: '18px', lineHeight: '1.8' }}>{t.p6}</p>
                        </div>
                    </div>

                    {/* Engagement Levels Detail */}
                    <div style={{ marginBottom: '100px', clear: 'both' }}>
                        <h2 style={{ fontSize: '42px', fontWeight: '900', marginBottom: '20px' }}>{t.section3Title}</h2>
                        <p style={{ fontSize: '18px', color: '#888', marginBottom: '60px' }}>{t.p7}</p>

                        {t.levels.map((level, idx) => (
                            <motion.div
                                key={level.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                style={{
                                    padding: '60px 40px',
                                    background: 'rgba(255,255,255,0.02)',
                                    border: '1px solid rgba(255,255,255,0.05)',
                                    marginBottom: '40px',
                                    borderRadius: '4px',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                            >
                                {/* Slike 5, 6, 7, 8 kao mali "peek" akcenti unutar ili pored kartica */}
                                {idx === 0 && <ImageAccent src="/images/5.png" float="right" width="200px" margin="0 0 20px 20px" />}
                                {idx === 1 && <ImageAccent src="/images/6.png" float="right" width="200px" margin="0 0 20px 20px" />}
                                {idx === 2 && <ImageAccent src="/images/7.png" float="right" width="200px" margin="0 0 20px 20px" />}
                                {idx === 3 && <ImageAccent src="/images/8.png" float="right" width="200px" margin="0 0 20px 20px" />}

                                <div style={{ fontSize: '12px', color: 'rgb(255, 255, 255)', fontWeight: 'bold', marginBottom: '15px', letterSpacing: '2px' }}>
                                    LEVEL 0{level.id} — {level.dur}
                                </div>
                                <h3 style={{ fontSize: '32px', fontWeight: '900', marginBottom: '10px' }}>{level.name}</h3>
                                <h4 style={{ fontSize: '18px', color: '#888', marginBottom: '30px', fontStyle: 'italic' }}>{level.sub}</h4>
                                <p style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '20px', color: '#fff' }}>{level.desc}</p>
                                <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#aaa' }}>{level.detail}</p>
                                <p style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '20px', color: '#fff' }}>{level.desc1}</p>
                                {level.desc2 && <p style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '20px', color: '#fff' }}>{level.desc2}</p>}
                            </motion.div>
                        ))}
                    </div>

                    {/* FINAL MESSAGE */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        style={{ textAlign: 'center', marginTop: '120px', padding: '80px 40px', borderTop: '1px solid rgba(255, 255, 255, 0.3)', borderBottom: '1px solid rgba(255, 255, 255, 0.3)', position: 'relative' }}
                    >
                        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', height: '60%', background: 'radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%)', zIndex: -1 }} />
                        <h3 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: '300', color: '#fff', lineHeight: '1.5', fontStyle: 'italic', maxWidth: '800px', margin: '0 auto' }}>
                            "{t.finalMessage}"
                        </h3>
                    </motion.div>
                </div>
            </section>

            {/* FORMA SEKCIJA */}
            <section style={{ padding: '100px 10%', backgroundColor: '#080808' }}>
                <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '36px', fontWeight: '900', marginBottom: '10px' }}>{t.formTitle}</h2>
                        <p style={{ color: '#888' }}>{t.formSubtitle}</p>
                    </div>

                    <form onSubmit={handleFormSubmit}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                            <input type="text" name="FirstName" placeholder={t.labels.firstName} value={formData.FirstName} onChange={handleInputChange} style={inputStyle} required />
                            <input type="text" name="LastName" placeholder={t.labels.lastName} value={formData.LastName} onChange={handleInputChange} style={inputStyle} required />
                        </div>
                        
                        <input type="email" name="Email" placeholder={t.labels.email} value={formData.Email} onChange={handleInputChange} style={inputStyle} required />
                        <input type="text" name="PhoneNumber" placeholder={t.labels.phone} value={formData.PhoneNumber} onChange={handleInputChange} style={inputStyle} />
                        <input type="text" name="CompanyName" placeholder={t.labels.company} value={formData.CompanyName} onChange={handleInputChange} style={inputStyle} />

                        {/* SELECT ZA 4 WAYS TO WORK */}
                        <div style={{ marginBottom: '30px' }}>
                            <label style={{ fontSize: '12px', color: '#555', textTransform: 'uppercase', letterSpacing: '1px' }}>{t.labels.interest}</label>
                            <select 
                                name="FourWaysToWorkWithUs" 
                                value={formData.FourWaysToWorkWithUs} 
                                onChange={handleInputChange} 
                                style={{ ...inputStyle, cursor: 'pointer', appearance: 'none' }}
                                required
                            >
                                <option value="" disabled>{t.labels.placeholderInterest}</option>
                                {t.labels.options.map((opt, i) => (
                                    <option key={i} value={opt}>{opt}</option>
                                ))}
                            </select>
                        </div>

                        <textarea name="Message" placeholder={t.labels.message} value={formData.Message} onChange={handleInputChange} style={{ ...inputStyle, minHeight: '100px', resize: 'vertical' }} />

                        <motion.button
                            whileHover={{ scale: 1.02, backgroundColor: '#fff', color: '#000' }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            style={{
                                width: '100%',
                                padding: '20px',
                                background: 'transparent',
                                border: '1px solid #fff',
                                color: '#fff',
                                fontSize: '14px',
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                                letterSpacing: '2px',
                                cursor: 'pointer',
                                marginTop: '20px',
                                transition: '0.3s'
                            }}
                        >
                            {t.labels.submit}
                        </motion.button>
                    </form>
                </div>
            </section>

            <footer style={{
                padding: '50px 10%',
                borderTop: '1px solid rgba(255,255,255,0.05)',
                textAlign: 'center',
                fontSize: '12px',
                color: '#444',
                textTransform: 'uppercase', // Opciono, da uvek bude velikim slovima
                letterSpacing: '1px'
            }}>
                {t.copyright}
            </footer>
        </div>
    );
};

export default InternalTrainings;