import React from 'react';

export const translations = {
    sr: {
        common: {
            back: "Nazad",
            startBtn: "Započni samoprocenu i vidi rezultat",
            startJourney: "START MY JOURNEY",
            selectPath: "Odaberite vašu putanju:",
            learnMore: "SAZNAJ VIŠE →"
        },
        eclipse: {
            mainTitle: <>Great Conquests <br /> Are Won in the <span style={{ color: '#444' }}>Backseat.</span></>,
            selectDest: "Izaberite vašu destinaciju",
            selectSys: "Odaberite vaš sistem",
            planets: {
                whoWeAre: { title: "Hansen Beck", subtitle: "Vaši vodiči na putovanju" },
                explore: { title: "Destinacija: Izvrsnost", subtitle: "Vaše putovanje" },
                b2b: { title: "TIMSKI RAZVOJ", subtitle: "Interni treninzi za kompanije" },
                individual: { title: "Individualni razvoj", subtitle: "Treninzi otvorenog tipa" },
                analysis: { title: "Uradi samoprocenu sposobnosti", subtitle: "Moj profesionalni profil" }
            }
        },
        intro: {
      title: "HB Compass — Vodič za pripremu",
      subtitle: "Za čitanje ove stranice biće vam potrebno oko 3 minuta. Molimo pročitajte pre početka.",
      whatTitle: "Šta ćete raditi",
      whatText: "Čitaćete seriju realističnih scenarija sa radnog mesta — situacija sa kojima se ljudi u određenoj ulozi redovno suočavaju. Za svaki od njih, izabraćete opis koji najbolje odgovara načinu na koji ZAISTA reagujete. Ne postoje tačni ili netačni odgovori. Tri opcije u svakom pitanju predstavljaju različite pristupe istoj situaciji — ne različite nivoe moralne ili profesionalne vrednosti.",
      importantTitle: "Najvažnija stvar",
      importantText: "Odgovarajte na osnovu toga kako ZAISTA radite — ne kako mislite da bi trebalo. Primamljivo je izabrati najimpresivniju opciju na svakom pitanju. Molimo vas da to ne radite — iz praktičnog razloga. Svaki scenario je uparen sa dodatnim pitanjem koje pita šta se zapravo dogodilo kao rezultat vašeg pristupa. Ako vaš prvi odgovor opisuje ponašanje koje tipično ne pokazujete, drugo pitanje će otkriti taj jaz. Osvojićete manje poena nego da ste bili iskreni od početka. Iskrena 3 je korisnija od naduvane 5-ice.",
      optionsTitle: "Šta znače tri opcije",
      optionA: "Opcija A — Profesionalac u ranijoj fazi razvoja u ovoj oblasti. Nije „loš“ odgovor. Legitiman pristup koji koriste mnogi sposobni ljudi, posebno u oblastima koje još uvek grade.",
      optionB: "Opcija B — Stabilan, kompetentan profesionalac koji radi dosledno i samostalno. Za većinu ljudi u većini oblasti, ovo je realističan i tačan opis.",
      optionC: "Opcija C — Visoko kvalifikovan profesionalac koji nastupa izvrsno i počinje da podiže druge oko sebe. Izaberite ovo samo ako to zaista odražava vaš tipičan pristup — ne vaš najbolji dan.",
      howTitle: "Kako čitati svako pitanje",
      howText: "Zapitajte se: „Tokom tipične nedelje, u ovakvim situacijama — koji opis najtačnije opisuje šta ja zapravo radim?“ Razmišljajte o obrascima, ne o izuzecima. Vaša najimpresivnija interakcija nije vaša tipična interakcija.",
      rememberTitle: "5 stvari koje treba zapamtiti",
      rememberItems: [
        "Razmišljajte o obrascima, ne o izuzecima — birajte šta je tipično, ne izvanredno",
        "Opcije A i B su respektabilne — opisuju prave profesionalce, ne neuspehe",
        "Varijacije su zdrave — profil sa A, B i C je iskreniji i korisniji od svih C-ova",
        "Ako se dvoumite — izaberite nižu opciju; naknadno pitanje vam daje prostor da pokažete nijanse",
        "Možete pauzirati i vratiti se — vaš napredak se čuva automatski; koristite isti link da nastavite"
      ],
      readyTitle: "Kada budete spremni",
      readyText: "Pronađite mirno mesto. Odvojite oko 20 minuta bez prekida. Vaša iskrena refleksija je najvrednija stvar koju donosite u ovu procenu — vrednija od bilo kog pojedinačnog rezultata.",
      startBtn: "ZAPOČNI ASSESSMENT"
    },
        form: {
            alreadyDone: "Iskoristili ste jedan free report. Javi nam se mejlom za dalje korake.",
      serverError: "Serverska greška. Pokušajte kasnije.",
            tag: "Strateški unos",
            title: "Personalizujte svoju analizu.",
            firstName: "Ime",
            lastName: "Prezime",
            email: "Poslovni Email",
            phone: "Broj telefona",
            company: "Kompanija",
            jobTitle: "Pozicija",
            gdprText: "Prihvatam uslove obrade podataka za moj personalizovani izveštaj u skladu sa",
            privacyLink: "Politikom privatnosti",
            btn: "Započni procenu",
            footerNote: "Nastavkom se slažete da primate svoj strateški izveštaj i profesionalne uvide.",
            gdprAlert: "Molimo prihvatite uslove obrade podataka da biste nastavili.",
            errorHeader: "Pristup ograničen:"
        },
        privacy: {
            title: "Politika privatnosti",
            updated: "Poslednji put ažurirano: Februar 2026.",
            sections: [
                {
                    h: "1. Pregled",
                    p: "Hansen Beck Srbija ('mi', 'nas' ili 'naš') je posvećen zaštiti vaše privatnosti. Ova Politika privatnosti objašnjava kako prikupljamo, koristimo i štitimo vaše lične podatke kada koristite naš alat za stratešku procenu i uslugu izveštavanja generisanu veštačkom inteligencijom."
                },
                {
                    h: "2. Podaci koje prikupljamo",
                    p: "Da bismo vam pružili personalizovanu stratešku analizu, prikupljamo sledeće informacije:",
                    list: [
                        "Podaci o identitetu: Ime i prezime.",
                        "Kontakt podaci: Poslovna e-mail adresa i broj telefona.",
                        "Profesionalni podaci: Naziv kompanije i pozicija.",
                        "Podaci o proceni: Vaši odgovori na bihevioralna i strateška pitanja."
                    ]
                },
                {
                    h: "3. AI Obrada",
                    p: "Naš alat koristi veštačku inteligenciju (AI) za interpretaciju vaših odgovora i generisanje profesionalnih uvida. Važno: Vaši lični podaci se nikada ne koriste za treniranje globalnih AI modela. Podaci se obrađuju bezbedno i isključivo radi generisanja vašeg individualnog izveštaja."
                },
                {
                    h: "4. Zadržavanje podataka i vaša prava",
                    p: "Vaše podatke zadržavamo samo onoliko dugo koliko je potrebno za pružanje naših usluga i profesionalno praćenje. Prema GDPR-u, imate pravo na:",
                    list: [
                        "Pristup vašim ličnim podacima.",
                        "Ispravku ili brisanje vaših podataka.",
                        "Prigovor na obradu vaših podataka."
                    ],
                    footer: "Da biste ostvarili ova prava, kontaktirajte nas putem naše zvanične e-mail adrese."
                }
            ],
            backBtn: "Nazad"
        },
        compass: {
            title: "HB Kompas – Vaš Vodič kroz Profesionalni Razvoj",
            description: "U današnjem dinamičnom poslovnom svetu, uspeh ne zavisi samo od onoga što znate ili umete, već i od načina na koji razmišljate i utičete na druge. Brze promene i složeni izazovi zahtevaju od nas da budemo više od pukih izvršilaca zadataka – zahtevaju da budemo celoviti profesionalci koji razumeju svoj doprinos i inspirišu druge.",
            subquote: "HB Kompas je sveobuhvatan okvir, razvijen od strane HubX tima, za procenu i razvoj profesionalne izvrsnosti. On nije samo još jedan alat za upravljanje performansama, već predstavlja promenu paradigme u razmišljanju o tome šta zaista čini izvanrednog zaposlenog. Njegova snaga leži u holističkom pristupu, koji obuhvata četiri ključne dimenzije:",
            dimensions: {
                mindset: {
                    title: "1. Način razmišljanja (Mindset)",
                    text: "Istražuje vaš unutrašnji svet – samopercepciju, uverenja, stavove i pristupe radu i životu."
                },
                skills: {
                    title: "2. Veštine (Skills)",
                    text: "Fokusira se na praktične sposobnosti i znanja koja su vam potrebna za efikasno obavljanje posla."
                },
                results: {
                    title: "3. Rezultati (Results)",
                    text: "Meri vaš doprinos ishodima i efikasnoj egzekuciji, od kratkoročnih ciljeva do dugoročnih promena."
                },
                influence: {
                    title: "4. Uticaj (Influence)",
                    text: "Proučava kako interaktujete sa drugima i kako ih inspirišete i vodite."
                }
            },
            extraInfo: "Svaka od ovih dimenzija se dalje deli na stubove i detaljne fasete, sa precizno definisanim nivoima veštine, što vam omogućava da jasno vidite gde se nalazite i kuda možete da idete.",
            benefitsTitle: "Zašto je HB Kompas važan za vas? Pružajući detaljnu mapu profesionalnih sposobnosti, HB Kompas vam omogućava da:",
            benefits: [
                "Razumete sebe u celosti: Sagledate svoje talente, ne samo kroz veštine i rezultate, već i kroz način razmišljanja i sposobnost uticaja.",
                "Identifikujete jasne puteve za rast: Precizno odredite oblasti za razvoj i postavite merljive ciljeve za napredovanje.",
                "Dobijete objektivnu perspektivu: Razumete svoj učinak i potencijal u kontekstu savremenih poslovnih zahteva."
            ],
            footer: "Bilo da ste početnik u karijeri, želite da napredujete, ili ste iskusni lider, HB Kompas je vaš svestrani instrument. On vas osnažuje da strateški upravljate svojim profesionalnim razvojem i uskladite ga sa organizacionim ciljevima, podstičući kulturu kontinuiranog poboljšanja.",
            finalCall: "Želite li da otkrijete svoje snage i oblasti za razvoj? Uradite našu samoprocenu zasnovanu na HB Kompasu i započnite putovanje ka profesionalnoj izvrsnosti. Saznajte gde ste sada i kuda možete da idete!"
        },
        leader: {
            title: "Inspirativno Liderstvo 2.0",
            subtitle: "Vodič za Transformaciju Lidera u Modernom Dobu",
            mainDescription: "Uloga lidera u savremenom poslovnom svetu prevazilazi tradicionalno upravljanje i nadgledanje. Današnji lideri moraju biti vizionari, stratezi i mentori – sposobni da inspirišu akciju, neguju poverenje i oblikuju kulturu neprekidnog rasta. U svetu koji se neprestano menja, prava moć lidera leži u sposobnosti da se prilagođavaju, inoviraju i motivišu svoje timove ka zajedničkom uspehu.",
            frameworkInfo: "Inspirativno Liderstvo 2.0 je detaljan profil lidera budućnosti, razvijen na osnovu sveobuhvatnog okvira HB Kompasa i temeljen na principima Komunikacije Zasnovane na Vrednostima (Value-Based Communication - VBC). Ovaj profil pruža jasnu mapu sposobnosti koje su ključne za lidera koji želi da ostvari značajan uticaj i transformiše svoju organizaciju.",
            capabilitiesTitle: "Fokusiramo se na lidere koji ne samo da upravljaju, već i:",
            capabilities: [
                { title: "Poseduju jasnu viziju i strateško razmišljanje", text: "Lideri koji razumeju širi kontekst, predviđaju buduće trendove i efikasno usklađuju timske napore sa ubedljivom dugoročnom vizijom." },
                { title: "Majstori su u upravljanju promenama", text: "Lideri koji uspešno planiraju, sprovode i održavaju inicijative za promene, dok upravljaju otporom i osiguravaju angažovanje svih zainteresovanih strana." },
                { title: "Neguju kulturu rasta i otpornosti", text: "Lideri koji pokazuju duboku samosvest, veruju u kontinuirani razvoj, uče iz grešaka i efikasno se oporavljaju od neuspeha, održavajući fokus i pozitivan stav." },
                { title: "Izgrađuju poverenje i inkluzivnost", text: "Lideri koji praktikuju radikalnu empatiju, podstiču timsku posvećenost i saradnju, rešavaju konflikte konstruktivno i stvaraju okruženje gde se svi osećaju vrednovanim i osnaženim." },
                { title: "Podstiču akciju i osnaživanje", text: "Lideri koji inspirišu vizijom, efikasno delegiraju, promovišu vlasništvo i odgovornost, i aktivno zastupaju promene, ubeđujući druge jasnim argumentima." }
            ],
            transformTitle: "Želite li da pređete sa upravljanja na inspirisanje? Ovaj profil nije samo skup karakteristika; to je poziv na transformaciju vašeg liderstva. On vam pomaže da shvatite kako da:",
            transformItems: [
                "Jasno artikulišete svoje strateške ciljeve i osigurate da ceo tim razume 'zašto' stoji iza svakog zadatka.",
                "Efikasno upravljate kriznim situacijama i transformišete ih u prilike za rast i učenje.",
                "Razvijete sposobnost da motivišete i osnažite članove tima da preuzmu inicijativu i odgovornost.",
                "Izgradite snažne, poverljive odnose i negujete inkluzivnu kulturu gde se svaki glas ceni."
            ],
            assessmentGoal: "Gde ste vi na ovom putu ka Inspirativnom Liderstvu 2.0? Uradite našu samoprocenu 'Inspirativni Lider 2.0' i dobijte jasnu sliku svojih liderskih sposobnosti. Naša procena će vam pružiti:",
            assessmentOutcomes: [
                "Preciznu analizu vaših trenutnih liderskih veština i načina razmišljanja.",
                "Identifikaciju vaših jakih strana, gde već pokazujete izvanrednost.",
                "Konkretne oblasti za dalji razvoj, sa jasnim smernicama kako da unapredite svoje sposobnosti da biste postali transformativni lider."
            ],
            footer: "Započnite svoje putovanje ka izvanrednom liderstvu danas i otkrijte svoj pun potencijal da inspirišete, vodite i stvarate trajnu promenu!"
        },
        employee: {
            title: "Idealni Profil Modernog Zaposlenog",
            subtitle: "Više od Transakcija – Komunikacija Zasnovana na Vrednostima (VBC)",
            mainDescription: "U današnjem brzom i složenom poslovnom okruženju, definicija 'idealnog zaposlenog' se menja. Nije dovoljno biti samo tehnički vešt ili fokusiran na zadatke; moderni uspeh zahteva sposobnost navigacije ljudskim interakcijama, razumevanje svrhe i stvaranje istinske vrednosti u svakoj komunikaciji.",
            vbcFeaturesTitle: "Predstavljamo Idealni Profil Modernog Zaposlenog, kreiran na osnovu okvira HB Kompasa i duboko ukorenjenog u principima Komunikacije Zasnovane na Vrednostima (VBC). Šta karakteriše idealnog zaposlenog 'Više od Transakcija'?",
            vbcFeatures: [
                { title: "Ovladava VBC-om", text: "Sposoban je da privuče pažnju drugih, natera ih da razmišljaju o istinskoj vrednosti i efikasno podstakne akciju, premošćujući komunikacijske praznine i prevazilazeći inerciju." },
                { title: "Radikalna empatija i strateško slušanje", text: "Duboko razume potrebe, motivacije i strahove drugih, 'čuje neizrečeno' i gradi smislene veze koje su temelj za uspešnu saradnju." },
                { title: "Artikuliše vrednost i jasnoću", text: "Prevodite složene ideje u jasne, koncizne poruke koje rezoniraju sa primaocem, uvek objašnjavajući 'zašto je to važno' iz perspektive druge strane." },
                { title: "Proaktivan je i agilan", text: "Pokreće inicijative, proaktivno zastupa promene i dosledno transformiše povratne informacije (čak i odbijanje) u vredne podatke za kontinuirano učenje, adaptaciju i poboljšanje." },
                { title: "Gradi poverenje i inkluzivnost", text: "Stvara okruženje gde se osećaju sigurnost i pripadnost, gde se cene različite perspektive, a poverenje je temelj svih odnosa." }
            ],
            summary: "Ovo je profil pojedinca koji ne samo da uspeva, već i inspiriše, sarađuje i pokreće organizaciju napred, pretvarajući izazove u prilike i promovišući kulturu stalnog rasta.",
            assessmentCall: "Gde ste vi na ovom putu? Pozivamo vas da uradite našu detaljnu samoprocenu i uporedite svoj trenutni profil sa ovim idealnim. Kao rezultat testa, dobićete preciznu procenu:",
            assessmentOutcomes: [
                "Vaše pozicije u odnosu na idealni profil: Jasno ćete videti kako se vaše sposobnosti uklapaju u tražene karakteristike.",
                "Vaših jakih strana: Identifikovaćete veštine i načine razmišljanja gde ste već izvrsni.",
                "Oblasti za razvoj: Precizno ćete locirati gde možete dodatno raditi na sebi kako biste maksimizirali svoj potencijal."
            ],
            footer: "Započnite svoje putovanje ka izvanrednosti danas i otkrijte kako možete postati agent promene u svojoj organizaciji!"
        }
    },
    en: {
        common: {
            back: "Back",
            startBtn: "Start self-assessment and see results",
            startJourney: "START MY JOURNEY",
            selectPath: "Choose Your Profile to Begin",
            learnMore: "LEARN MORE →"
        },
        eclipse: {
            mainTitle: <>Great Conquests <br /> Are Won in the <span style={{ color: '#444' }}>Backseat.</span></>,
            selectDest: "Choose your destination",
            selectSys: "Select your system",
            planets: {
                whoWeAre: { title: "Hansen Beck", subtitle: "Your guides" },
                explore: { title: "Destination: Excellence", subtitle: "My journey" },
                b2b: { title: "Team Development", subtitle: "For My Team" },
                individual: { title: "Individual Development", subtitle: "Join the Party" },
                analysis: { title: "UNLOCK YOUR COMPASS", subtitle: "How Good I Am" }
            }
        },
        intro: {
      title: "HB Compass Self-Assessment — Preparation Guide",
      subtitle: "This page will take you about 3 minutes to read. Please read it before you begin.",
      whatTitle: "What you are about to do",
      whatText: "You are going to read a series of realistic workplace scenarios — situations that people in the particular role regularly face. For each one, you will choose the description that best fits how you actually respond. There are no right or wrong answers. The three options in each question represent different approaches to the same situation — not different levels of moral worth or professional value.",
      importantTitle: "The single most important thing",
      importantText: "Answer based on how you actually work — not how you think you should work. It is tempting to choose the most impressive-sounding option on every question. We'd ask you not to — for a practical reason. Each scenario is paired with a follow-up question that asks what actually happened as a result of your approach. If your first answer describes behaviour you don't typically exhibit, the follow-up will reveal the gap. You'll score lower than if you'd been honest from the start. An honest 3 is more useful than an inflated 5.",
      optionsTitle: "What the three options mean",
      optionA: "Option A — A professional at an earlier stage of development in this area. Not the \"bad\" answer. A legitimate approach that many capable people use, especially in areas they're still building.",
      optionB: "Option B — A solid, competent professional performing consistently and independently. For most people in most areas, this is a realistic and accurate description.",
      optionC: "Option C — A highly skilled professional who performs excellently and begins to elevate others around them. Select this only if it genuinely reflects your typical approach — not your best day.",
      howTitle: "How to read each question",
      howText: "Ask yourself: \"Across a typical week, in situations like this — which description most accurately captures what I actually do?\" Think about patterns, not highlights. Your most impressive interaction is not your typical one.",
      rememberTitle: "Five things to remember while answering",
      rememberItems: [
        "Think patterns, not highlights — choose what's typical, not exceptional",
        "Both options A and B are respectable — they describe real professionals, not failures",
        "Variation is healthy — a profile with some A's, B's and C's is more honest and more useful than wall-to-wall C's",
        "If you're between two options — choose the lower one; the follow-up question gives you room to show nuance",
        "You can pause and return — your progress saves automatically; use the same link to continue"
      ],
      readyTitle: "When you're ready",
      readyText: "Find a quiet place. Set aside 20 minutes without interruptions. Your honest reflection is the most valuable thing you can bring to this assessment — more valuable than any particular score.",
      startBtn: "BEGIN ASSESSMENT"
    },
        form: {
            alreadyDone: "You have already used your free report. Please contact us via email for further steps.",
      serverError: "Server error. Please try again later.",
            tag: "Strategic Intake",
            title: "Personalize your analysis.",
            firstName: "First Name",
            lastName: "Last Name",
            email: "Professional Email",
            phone: "Phone Number",
            company: "Company",
            jobTitle: "Job Title",
            gdprText: "I accept the data processing terms for my personalized report according to the",
            privacyLink: "Privacy Policy",
            btn: "Access Assessment",
            footerNote: "By continuing, you agree to receive your strategic report and professional insights.",
            gdprAlert: "Please accept the data processing terms to continue.",
            errorHeader: "Access limited:"
        },
        privacy: {
            title: "Privacy Policy",
            updated: "Last Updated: February 2026",
            sections: [
                {
                    h: "1. Overview",
                    p: "Hansen Beck Serbia ('we', 'us', or 'our') is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our Strategic Assessment tool and AI-generated reporting service."
                },
                {
                    h: "2. Data We Collect",
                    p: "To provide you with a personalized strategic analysis, we collect the following information:",
                    list: [
                        "Identity Data: First name and last name.",
                        "Contact Data: Professional email address and phone number.",
                        "Professional Data: Company name and job title.",
                        "Assessment Data: Your responses to the behavioral and strategic questions."
                    ]
                },
                {
                    h: "3. AI Processing",
                    p: "Our tool uses Artificial Intelligence (AI) to interpret your assessment responses and generate professional insights. Important: Your personal identity data is never used to train global AI models. The data is processed securely and used solely to generate your individual report."
                },
                {
                    h: "4. Data Retention & Your Rights",
                    p: "We retain your data only for as long as necessary to provide our services and for professional follow-up. Under GDPR, you have the right to:",
                    list: [
                        "Request access to your personal data.",
                        "Request correction or deletion of your data.",
                        "Object to the processing of your data."
                    ],
                    footer: "To exercise these rights, please contact us at our official office email."
                }
            ],
            backBtn: "Go Back"
        },
        compass: {
            title: "HB Compass — Know Where You Stand. Know Where to Grow.",
            description: "Most professionals have a genuine but incomplete picture of themselves. You know your strengths — at least the ones you are aware of. You know the areas you find challenging. But the gap between how you see yourself and how your work actually lands with others, how your thinking shapes your decisions, how your presence influences the people around you — that gap is where the most valuable development insight lives. The HB Compass self-assessment is designed to close that gap.",
            subquote: "HB Compass is a professional development framework built on a simple but powerful idea: what makes someone genuinely excellent at their work is not one thing — it is four interconnected things, working together. Most development tools focus on skills or results. HB Compass goes further, assessing the full picture of what drives professional effectiveness — because sustainable excellence is never just about what you can do. It is equally about how you think, who you are in your relationships, and the impact you have on the people and environment around you.",
            dimensions: {
                mindset: {
                    title: "Mindset — The Foundation",
                    text: "How you think shapes everything else. Your beliefs about your own capacity to grow, your resilience when things get difficult, your openness to feedback, your sense of ownership over your work — these are not personality traits you are stuck with. They are patterns that can be understood, developed, and deliberately changed. The Mindset dimension helps you see clearly what is driving your behaviour, so you can build from your strengths and address the patterns that are holding you back."
                },
                skills: {
                    title: "Skills — The Toolkit",
                    text: "Skills are the practical capabilities you bring to your role — how you manage your time and priorities, how you communicate, how you solve problems, how you develop the people around you. The Skills dimension assesses not just whether you have a capability, but how reliably and sophisticatedly you apply it in the real complexity of your work."
                },
                results: {
                    title: "Results — The Measure",
                    text: "Results are the outcomes you create — in the short term through effective execution and goal achievement, and in the long term through strategic thinking, innovation, and building capability that outlasts any individual project. The Results dimension connects your day-to-day work to the larger contribution you make and helps you see where your impact is strongest and where it could be greater."
                },
                influence: {
                    title: "Influence — The Multiplier",
                    text: "How you affect the people around you determines whether your professional contribution stays with you or multiplies through others. The Influence dimension examines how you make people feel, whether you inspire trust and belonging, and whether you are able to move others toward action — not through authority, but through genuine connection and credibility."
                }
            },
            extraInfo: "Each of these dimensions is further divided into pillars and detailed facets, with precisely defined proficiency levels, allowing you to clearly see where you stand and where you can go.",
            benefitsTitle: "Why is HB Compass important for you? By providing a detailed map of professional capabilities, HB Compass allows you to:",
            benefits: [
                "Understand yourself holistically: See your talents not just through skills and results, but also through mindset and influence capabilities.",
                "Identify clear paths for growth: Pinpoint specific areas for development and set measurable goals for advancement.",
                "Gain an objective perspective: Understand your performance and potential within the context of modern business demands."
            ],
            footer: "Whether you are starting your career, looking to advance, or are an experienced leader, HB Compass is your versatile instrument. It empowers you to strategically manage your professional development and align it with organizational goals, fostering a culture of continuous improvement.",
            finalCall: "Do you want to discover your strengths and areas for development? Take our self-assessment based on HB Compass and begin your journey toward professional excellence. Find out where you are now and where you can go next!",
            whyTitle: "Why Take a Self-Assessment?",
            whyText: "Understanding where you currently are is the most practical thing you can do for your professional development. Not where you hope you are, or where you think you should be — where you actually are, honestly assessed against a clear description of what excellent looks like in your specific role.\n\nWhen you know that, development stops being vague. Instead of trying to improve everything at once, or investing energy in areas that feel productive but do not move the needle, you have a specific picture of your genuine strengths and your most valuable growth opportunities. You have a starting point.\n\nThe HB Compass self-assessment gives you that starting point — grounded in a framework that reflects the full reality of professional excellence, not just the parts that are easiest to measure.",
            chooseTitle: "Choose Your Profile to Begin",
            chooseText: "The HB Compass is built around ideal profiles — role-specific descriptions of what excellent performance looks like across every dimension, at every level of development. Your self-assessment is always anchored to the profile that matches your role, so the feedback you receive is relevant and specific — not a generic score against an abstract benchmark.",
            chooseLabel: "Select the profile that best reflects your current role to begin your self-assessment:"
        },
        leader: {
            title: "The Leader Others Choose to Follow",
            subtitle: "HB Compass — Inspiring Leadership Profile",
            mainDescription: "There is a difference between holding a leadership position and actually leading. Most people who manage teams, run projects, or carry responsibility for others' performance understand this instinctively — because they have experienced both kinds of leader themselves. They have worked for someone who made them want to give their best, and they have worked for someone who made them want to leave. The difference between those two experiences is not seniority, intelligence, or technical expertise. It is leadership.\n\nThe Inspiring Leadership profile describes what genuinely effective leadership looks like today — not as an abstract ideal, but as a set of observable, developable capabilities that real leaders at every level can understand, assess, and grow.",
            whatTitle: "What Does an Inspiring Leader Look Like?",
            whatText: "The Inspiring Leadership profile is built on a clear and honest view of what leadership demands in today's organisations. It goes well beyond managing performance or hitting targets. An inspiring leader does four things simultaneously — and the combination of all four is what makes the difference between someone who occupies a leadership role and someone who genuinely leads.",
            capabilities: [
                {
                    title: "They Deliver Results — and Build the Capacity for Future Results",
                    text: "An inspiring leader gets things done. They set clear, ambitious goals that their team understands and commits to. They make good decisions under pressure. They manage performance with both honesty and care — holding people to high standards while investing in their development. When things go wrong, they respond with composure and address root causes rather than symptoms.\n\nBut they do not stop at short-term delivery. They think strategically about where their team and organisation need to go. They lead change rather than simply managing it. They build capability in the people around them so that results are sustainable — not dependent on their own constant presence and effort.\n\nThis combination — delivering today while building for tomorrow — is one of the most demanding aspects of leadership, and one of the most important."
                },
                {
                    title: "They Lead From the Right Mindset",
                    text: "How a leader thinks shapes everything their team experiences. An inspiring leader brings a growth mindset to their role — they believe that capability is developed through effort and learning, not fixed by talent or circumstance. They model this belief in how they respond to their own challenges and setbacks, and they create an environment where their team feels safe to take risks, make mistakes, and learn.\n\nThey are self-aware — genuinely so, not performatively. They understand their own strengths and the edges of those strengths. They seek feedback and use it. They own their decisions and their outcomes without deflecting blame onto circumstances or other people.\n\nThey are also resilient and adaptable — not in the sense of being unaffected by pressure, but in the sense of maintaining effectiveness and perspective when things are difficult, and recovering quickly enough to keep leading well.\n\nAnd they are anchored in something beyond their own performance. They are genuinely committed to the organisation's mission and values — not because it is expected of them, but because they understand what they are building and why it matters."
                },
                {
                    title: "They Have the Skills That Leadership Actually Requires",
                    text: "Technical expertise gets people into leadership roles. What keeps them effective is a different set of capabilities entirely.\n\nAn inspiring leader manages their time and priorities with real sophistication — not just staying busy, but consistently focusing on what matters most. They communicate in ways that connect with different audiences and drive genuine understanding rather than mere compliance. They delegate with intention — not offloading tasks, but creating ownership. They have difficult conversations without damaging the relationship. They develop people deliberately and recognise their contributions in ways that actually motivate.\n\nThese skills are learnable. But they require honest assessment of where you currently are — because the gap between thinking you are good at delegation and actually being good at it is one of the most common and consequential blind spots in leadership."
                },
                {
                    title: "They Create an Environment Others Want to Be Part Of",
                    text: "The final dimension of inspiring leadership is perhaps the least tangible — and the most powerful. It is the experience a leader creates for the people around them.\n\nAn inspiring leader makes their team feel genuinely valued — not through generic praise, but through authentic presence, real empathy, and the kind of inclusion that ensures every voice contributes to outcomes. They build trust through consistency — doing what they say, saying what they mean, and being the same person in difficult conversations as they are in easy ones.\n\nAnd they move people to action — not through pressure or positional authority, but through vision that makes the work meaningful, empowerment that makes ownership feel natural, and influence that inspires commitment rather than compliance.\n\nThis is what separates a manager from a leader that people genuinely want to follow."
                }
            ],
            levelsTitle: "The Five Levels of Leadership Development",
            levelsIntro: "The Inspiring Leadership profile does not describe leadership as something you either have or do not have. It describes a developmental journey — one that every leader is somewhere on, and one that never truly ends. Across every capability in the profile, development is described at five levels:",
            levels: [
                { name: "Emerging", text: "You are building foundational understanding and beginning to develop this capability. Your approach may be inconsistent, and you benefit from guidance and structured support." },
                { name: "Developing", text: "You are growing in this area and demonstrating the capability in straightforward situations. You are building confidence and consistency, though complex situations may still stretch you." },
                { name: "Proficient", text: "You demonstrate this capability reliably and effectively across most situations. This is a genuine strength you can build on and that others can depend on." },
                { name: "Advanced", text: "You demonstrate sophisticated, nuanced capability that goes beyond effective performance. You anticipate complexity, adapt skilfully, and help others develop in this area." },
                { name: "Expert", text: "You demonstrate masterful, distinctive capability that shapes how others think about and practice this aspect of leadership. You are a recognised resource and a model for others." }
            ],
            levelsFootnote: "Most leaders will find themselves at different levels across different capabilities — and that variation is exactly what makes the self-assessment useful. It shows you not just where you are strong, but where the most valuable development focus lies for you specifically.",
            whoTitle: "Who This Profile Is For",
            whoText: "The Inspiring Leadership profile is designed for anyone who carries responsibility for others — formally or informally. That includes team leaders and managers at every level, senior individual contributors who lead through influence rather than authority, professionals preparing for their first leadership role, and experienced leaders who want an honest, structured picture of where they stand today.\n\nLeadership is not a title. If you shape the direction, performance, or development of others — this profile is for you.",
            assessTitle: "Take the Self-Assessment",
            assessText: "The self-assessment takes approximately 30–40 minutes to complete. It presents realistic leadership scenarios and asks you to select the response that most honestly reflects how you typically behave — not how you aspire to behave, and not how you think you should behave.\n\nYour results will show you where you sit across every dimension of the Inspiring Leadership profile, where your self-perception aligns with how the framework describes each level, and where your most valuable development opportunities lie.\n\nThere are no right or wrong answers. There is only an honest picture of where you are — and a clear view of where you could go.",
            privacyNote: "The self-assessment is a personal development tool. Your responses are private and used only to generate your individual results. No data is shared with your organisation or any third party.",
            footer: "Start your journey toward exceptional leadership today and discover your full potential to inspire, lead, and create lasting change!"
        },
        employee: {
            title: "The Ideal Profile of the Modern Employee",
            subtitle: "Beyond Transactions – Value-Based Communication (VBC)",
            mainDescription: "In today's fast-paced and complex business environment, the definition of the 'ideal employee' is changing. Being technically skilled or task-focused is no longer enough; modern success requires the ability to navigate human interactions, understand purpose, and create genuine value in every communication.",
            vbcFeaturesTitle: "We present the Ideal Profile of the Modern Employee, created based on the HB Compass framework and deeply rooted in the principles of Value-Based Communication (VBC). What characterizes the 'Beyond Transactions' ideal employee?",
            vbcFeatures: [
                { title: "Master VBC", text: "They are capable of capturing attention, making others think about true value, and effectively inducing action, bridging communication gaps and overcoming inertia." },
                { title: "Radical empathy and strategic listening", text: "They deeply understand the needs, motivations, and fears of others, 'hearing the unsaid' and building meaningful connections that are the foundation for successful collaboration." },
                { title: "Articulate value and clarity", text: "They translate complex ideas into clear, concise messages that resonate with the recipient, always explaining 'why this matters' from the other party's perspective." },
                { title: "Proactive and agile", text: "They launch initiatives, proactively advocate for change, and consistently transform feedback (even rejection) into valuable data for continuous learning, adaptation, and improvement." },
                { title: "Build trust and inclusivity", text: "They create an environment where safety and belonging are felt, where diverse perspectives are valued, and trust is the foundation of all relationships." }
            ],
            summary: "This is a profile of an individual who does not just succeed, but inspires, collaborates, and moves the organization forward, turning challenges into opportunities and promoting a culture of constant growth.",
            assessmentCall: "Where are you on this path? We invite you to take our detailed self-assessment and compare your current profile with this ideal one. As a result of the test, you will receive a precise assessment of:",
            assessmentOutcomes: [
                "Your position relative to the ideal profile: You will clearly see how your capabilities fit into the required characteristics.",
                "Your strengths: You will identify the skills and mindsets where you already excel.",
                "Areas for development: You will precisely locate where you can work further on yourself to maximize your potential."
            ],
            footer: "Start your journey toward excellence today and discover how you can become an agent of change in your organization!"
        }
    }
};