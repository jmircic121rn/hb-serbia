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
    title: "HB Kompas — Saznajte gde se nalazite. Saznajte kako da budete bolji.",
    description: "Većina profesionalaca ima iskrenu, ali nepotpunu sliku o sebi. Poznajete svoje prednosti — barem one kojih ste svesni. Poznajete oblasti koje su vam izazovne. Ali jaz između toga kako vidite sebe i toga kako se vaš rad zapravo odražava na druge, kako vaše razmišljanje oblikuje vaše odluke i kako vaše prisustvo utiče na ljude oko vas — u tom jazu se kriju najdragoceniji uvidi za vaš razvoj.",
    subquote: "HB Kompas je model za profesionalni razvoj zasnovan na jednostavnoj, ali moćnoj ideji: ono što nekoga čini istinski izvrsnim u poslu nije jedna stvar — već četiri međusobno povezane stavke koje deluju zajedno. Većina razvojnih alata fokusira se na veštine ili rezultate. HB Kompas ide korak dalje, procenjujući potpunu sliku onoga što pokreće profesionalnu efikasnost — jer održiva izvrsnost nikada nije samo u onome što umete da uradite. Ona je podjednako i u tome kako razmišljate, ko ste u odnosima sa drugima i kakav uticaj ostavljate na ljude i okruženje oko sebe.",
    dimensions: {
        mindset: {
            title: "Mindset (Način razmišljanja) — Osnova",
            text: "To kako razmišljate oblikuje sve ostalo. Vaša uverenja o sopstvenom kapacitetu za rast, vaša otpornost kada postane teško, vaša otvorenost za povratne informacije i osećaj odgovornosti prema poslu — to nisu fiksne osobine ličnosti. To su obrasci koji se mogu razumeti, razvijati i namerno menjati. Dimenzija \"Mindset\" pomaže vam da jasno vidite šta pokreće vaše ponašanje, kako biste gradili na svojim snagama i rešili obrasce koji vas koče."
        },
        skills: {
            title: "Skills (Veštine) — Alat",
            text: "Veštine su praktične sposobnosti koje donosite u svoju ulogu — kako upravljate vremenom i prioritetima, kako komunicirate, rešavate probleme i kako razvijate ljude oko sebe. Ova dimenzija ne procenjuje samo da li posedujete neku sposobnost, već koliko je pouzdano i sofisticirano primenjujete u realnoj složenosti vašeg posla."
        },
        results: {
            title: "Results (Rezultati) — Metrika",
            text: "Rezultati su ishodi koje stvarate — kratkoročno kroz efikasno izvršenje i postizanje ciljeva, a dugoročno kroz strateško razmišljanje, inovacije i izgradnju kapaciteta koji nastavljaju da žive posle svakog pojedinačnog projekta. Dimenzija \"Results\" povezuje vaš svakodnevni rad sa širim doprinosom koji dajete i pomaže vam da vidite gde je vaše učešće u ukupnom rezultatu najjače, a gde bi moglo biti veće."
        },
        influence: {
            title: "Influence (Uticaj) — Multiplikator",
            text: "To kako utičete na ljude oko vas određuje da li vaš profesionalni doprinos ostaje samo na vama ili se umnožava kroz druge. Dimenzija \"Influence\" ispituje kako se ljudi osećaju pored vas, da li ulivate poverenje i osećaj pripadnosti, i da li ste u stanju da pokrenete druge na akciju — ne kroz autoritet, već kroz istinsku povezanost i kredibilitet."
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
    finalCall: "Želite li da otkrijete svoje snage i oblasti za razvoj? Uradite našu samoprocenu zasnovanu na HB Kompasu i započnite putovanje ka profesionalnoj izvrsnosti. Saznajte gde ste sada i kuda možete da idete!",
    whyTitle: "Zašto uraditi samo-procenu?",
    whyText: "Razumevanje toga gde se trenutno nalazite je najpraktičnija stvar koju možete uraditi za svoj profesionalni razvoj. Ne tamo gde se nadate da ste, ili gde mislite da bi trebalo da budete — već tamo gde zaista jeste, iskreno procenjeni u odnosu na jasan opis kako izgleda izvrsnost u vašoj specifičnoj ulozi.\n\nKada to znate, razvoj prestaje da bude nejasan. Umesto da pokušavate da unapredite sve odjednom ili ulažete energiju u oblasti koje deluju produktivno ali ne donose pomak, dobijate specifičnu sliku svojih stvarnih snaga i najvrednijih prilika za rast. Dobijate polaznu tačku.\n\nHB Kompas samo-procena vam daje tu polaznu tačku — utemeljenu u modelu koji odražava punu realnost profesionalne izvrsnosti, a ne samo delove koje je najlakše izmeriti.",
    chooseTitle: "Izaberite svoj profil da biste počeli",
    chooseText: "HB Kompas je izgrađen oko idealnih profila — opisa vrhunskog učinka specifičnih za svaku ulogu, na svakom nivou razvoja. Vaša samo-procena je uvek vezana za profil koji odgovara vašoj ulozi, tako da su povratne informacije koje dobijate relevantne i konkretne — a ne generički rezultat u odnosu na apstraktni standard.",
    chooseLabel: "Izaberite profil koji najbolje odražava vašu trenutnu ulogu kako biste započeli samo-procenu:"
},
        leader: {
    title: "Lider za kojim drugi dobrovoljno idu",
    subtitle: "HB Kompas — Profil inspirativnog liderstva",
    mainDescription: "Postoji razlika između toga da se zauzima liderska pozicija i toga da se zaista vodi. Većina ljudi koji upravljaju timovima, vode projekte ili snose odgovornost za tuđe rezultate ovo razume instinktivno — jer su i sami iskusili obe vrste lidera. Radili su za nekoga ko ih je terao da daju sve od sebe, i radili su za nekoga ko ih je terao da odu. Razlika između ta dva iskustva nije iskustvo, inteligencija ni tehnička stručnost. To je liderstvo.\n\nProfil inspirativnog liderstva opisuje kako izgleda zaista efikasno liderstvo danas — ne kao apstraktni ideal, već kao skup vidljivih, razvijenih sposobnosti koje pravi lideri na svakom nivou mogu da razumeju, procene i razvijaju.",
    whatTitle: "Kako izgleda inspirativan lider?",
    whatText: "Profil inspirativnog liderstva izgrađen je na jasnom i iskrenom pogledu na ono što liderstvo zahteva u današnjim organizacijama. On daleko prevazilazi upravljanje realizacijom ili postizanje ciljeva. Inspirativan lider istovremeno čini četiri stvari — i upravo kombinacija sve četiri pravi razliku između nekoga ko zauzima lidersku ulogu i nekoga ko zaista vodi.",
    capabilities: [
        {
            title: "Postižu rezultate — i grade kapacitet za buduće rezultate",
            text: "Inspirativan lider postiže stvari. Postavlja jasne, ambiciozne ciljeve koje njegov tim razume i kojima je posvećen. Donosi dobre odluke pod pritiskom. Upravlja realizacijom s iskrenošću i brigom istovremeno — drži ljude na visokim standardima, a istovremeno ulaže u njihov razvoj. Kada stvari krenu po zlu, reaguje smireno i rešava uzroke, a ne simptome.\n\nAli ne staje na kratkoročnim rezultatima. Strateški razmišlja o tome kuda treba da idu njegov tim i organizacija. Vodi promenu umesto da je samo prati. Gradi sposobnosti u ljudima oko sebe kako bi rezultati bili održivi — a ne zavisni od njegovog stalnog prisustva i napora.\n\nOva kombinacija — postizanje rezultata danas uz istovremenu gradnju za sutra — jedan je od najzahtevnijih aspekata liderstva, i jedan od najvažnijih."
        },
        {
            title: "Vode iz ispravnog načina razmišljanja",
            text: "Način na koji lider razmišlja oblikuje sve što njegov tim doživljava. Inspirativan lider donosi razvojni način razmišljanja u svoju ulogu — veruje da se sposobnosti razvijaju kroz trud i učenje, a ne da su fiksirane talentom ili okolnostima. Ovo uverenje modeluje kroz sopstveni odnos prema izazovima i neuspesima, i stvara okruženje u kome se tim oseća bezbedno da preuzima rizike, pravi greške i uči.\n\nSamosvestan je — iskreno, a ne za javnost. Razume sopstvene snage i granice tih snaga. Traži povratne informacije i koristi ih. Prihvata odgovornost za svoje odluke i rezultate, bez prebacivanja krivice na okolnosti ili druge ljude.\n\nTakođe je otporan i prilagodljiv — ne u smislu da ga pritisak ne dotiče, već u smislu da zadržava efikasnost i perspektivu kada su stvari teške, i oporavlja se dovoljno brzo da nastavi da vodi dobro.\n\nIskreno je posvećen misiji i vrednostima organizacije — ne zato što se to od njega očekuje, već zato što razume šta gradi i zašto to ima smisla."
        },
        {
            title: "Poseduju veštine koje liderstvo zaista zahteva",
            text: "Tehnička stručnost dovodi ljude do liderskih uloga. Ono što ih čini efikasnim je potpuno drugačiji skup sposobnosti.\n\nInspirativan lider upravlja svojim vremenom i prioritetima sa pravom sofisticiranošću — ne samo ostajući zauzet, već se dosledno fokusirajući na ono što je najvažnije. Komunicira na načine koji se povezuju s različitim auditorijumima i podstiču pravo razumevanje, a ne samo formalnu saglasnost. Delegira s namerom — ne prebacujući zadatke, već stvarajući osećaj vlasništva. Vodi teške razgovore bez narušavanja odnosa. Razvija ljude namerno i prepoznaje njihove doprinose na načine koji zaista motivišu.\n\nOve veštine se mogu naučiti. Ali zahtevaju iskren uvid u to gde se trenutno nalazite — jer razlika između uverenja da ste dobri u delegiranju i stvarnog bavljenja delegiranjem jedan je od najčešćih slepih tačaka u liderstvu."
        },
        {
            title: "Stvaraju okruženje u kome drugi žele da budu",
            text: "Poslednja dimenzija inspirativnog liderstva je možda najmanje opipljiva — i najmoćnija. To je iskustvo koje lider stvara za ljude oko sebe.\n\nInspirativan lider čini da se njegov tim oseća iskreno cenjeno — ne kroz generičke pohvale, već kroz autentičnu prisutnost, pravo empatiju i vrstu uključenosti koja osigurava da svaki glas doprinosi ishodima. Gradi poverenje kroz doslednost — radi ono što kaže, govori ono što misli i isti je čovek u teškim razgovorima kao i u lakim.\n\nI pokreće ljude na akciju — ne pritiskom ili autoritetom stečenim putem pozicije, već vizijom koja čini rad smislenim, osnaživanjem koje čini vlasništvo prirodnim i uticajem koji inspiriše posvećenost, a ne samo poslušnost.\n\nTo je ono što odvaja menadžera od lidera za kojim ljudi zaista dobrovoljno idu."
        }
    ],
    levelsTitle: "Pet nivoa razvoja liderstva",
    levelsIntro: "Profil inspirativnog liderstva ne opisuje liderstvo kao nešto što ili imate ili nemate. Opisuje razvojni put — put na kome se svaki lider negde nalazi i koji nikada zapravo ne završava. Kroz svaku sposobnost u profilu, razvoj je opisan na pet nivoa:",
    levels: [
        { name: "U nastajanju", text: "Gradite temeljno razumevanje i počinjete da razvijate novu sposobnost. Vaš pristup može biti nedosledan i koristite se od vođenja i strukturirane podrške." },
        { name: "U razvoju", text: "Napredujete u ovoj oblasti i demonstrirate sposobnost u jednostavnim situacijama. Gradite samopouzdanje i doslednost, mada vas složene situacije još uvek mogu izazvati." },
        { name: "Kompetentni", text: "Demonstrirate ovu sposobnost pouzdano i efikasno u većini situacija. Ovo je prava snaga na kojoj možete da gradite i na koju se drugi mogu osloniti." },
        { name: "Napredni", text: "Demonstrirate sofisticiranu, nijansiranu sposobnost koja prevazilazi efikasan učinak. Anticipirate složenost, spretno se prilagođavate i pomažete drugima da se razvijaju u ovoj oblasti." },
        { name: "Ekspertski", text: "Demonstrirate majstorsku, prepoznatljivu sposobnost koja oblikuje način na koji drugi razmišljaju i praktikuju ovaj aspekt liderstva. Vi ste prepoznati resurs i model za druge." }
    ],
    levelsFootnote: "Većina lidera će se naći na različitim nivoima u različitim sposobnostima — i upravo ta varijacija je ono što samo-procenu čini korisnom. Pokazuje vam ne samo gde ste jaki, već i gde leži najvrednije razvojno žarište upravo za vas.",
    whoTitle: "Za koga je ovaj profil?",
    whoText: "Profil inspirativnog liderstva dizajniran je za svakoga ko nosi odgovornost za druge — formalno ili neformalno. To uključuje lidere timova i menadžere na svakom nivou, visoko rangiranih individualnih saradnika koji vode kroz uticaj, a ne autoritet, profesionalce koji se pripremaju za svoju prvu lidersku ulogu, i iskusne lidere koji žele iskren, strukturiran uvid u to gde se danas nalaze.\n\nLiderstvo nije titula. Ako oblikujete pravac, realizaciju ili razvoj drugih — ovaj profil je za vas.",
    assessTitle: "Uradite samo-procenu",
    assessText: "Samo-ocenjivanje traje otprilike 30 minuta. Predstavlja vam realne liderske scenarije i pita vas da odaberete odgovor koji najiskrenije odražava kako se tipično ponašate — ne kako težite da se ponašate i ne kako mislite da biste trebali da se ponašate.\n\nVaši rezultati će vam pokazati gde se nalazite u svakoj dimenziji Profila inspirativnog liderstva, gde se vaša slika o sebi poklapa sa opisom svakog nivoa, i gde leže vaše najvrednije razvojne prilike.\n\nNema tačnih ni pogrešnih odgovora. Postoji samo iskrena slika o tome gde jeste — i jasan pogled na to gde možete da odete.",
    privacyNote: "Samo-procena je alat za lični razvoj. Vaši odgovori su privatni i koriste se isključivo za generisanje vaših individualnih rezultata. Nikakvi podaci se ne dele sa vašom organizacijom ni trećim stranama.",
    footer: "Započnite svoje putovanje ka izvanrednom liderstvu danas i otkrijte svoj pun potencijal da inspirišete, vodite i stvarate trajnu promenu!"
},
        employee: {
    title: "Idealni profil modernog zaposlenog",
    subtitle: "Više od transakcija – Komunikacija zasnovana na vrednostima (VBC)",
    mainDescription: "U današnjem brzom i složenom poslovnom okruženju, definicija 'idealnog zaposlenog' se menja. Biti tehnički vešt ili fokusiran na zadatke više nije dovoljno — moderni uspeh zahteva sposobnost navigacije ljudskim interakcijama, razumevanje svrhe i stvaranje istinske vrednosti u svakoj komunikaciji.",
    vbcFeaturesTitle: "Predstavljamo idealni profil modernog zaposlenog, kreiran na osnovu okvira HB Kompasa i duboko ukorenjenog u principima Komunikacije zasnovane na vrednostima (VBC). Šta karakteriše idealnog zaposlenog 'Više od transakcija'?",
    vbcFeatures: [
        { title: "Savladava VBC", text: "Sposoban je da privuče pažnju, natera druge da razmišljaju o istinskoj vrednosti i efikasno podstakne akciju — premošćujući komunikacijske praznine i prevazilazeći inerciju." },
        { title: "Radikalna empatija i strateško slušanje", text: "Duboko razume potrebe, motivacije i strahove drugih, 'čuje neizrečeno' i gradi smislene veze koje su temelj uspešne saradnje." },
        { title: "Artikuliše vrednost i jasnoću", text: "Prevodi složene ideje u jasne, koncizne poruke koje rezonuju sa primaocem, uvek objašnjavajući 'zašto je to važno' iz perspektive druge strane." },
        { title: "Proaktivan i agilan", text: "Pokreće inicijative, proaktivno zastupa promene i dosledno transformiše povratne informacije (čak i odbijanje) u vredne podatke za kontinuirano učenje, adaptaciju i poboljšanje." },
        { title: "Gradi poverenje i inkluzivnost", text: "Stvara okruženje u kome se osećaju sigurnost i pripadnost, gde se cene različite perspektive, a poverenje je temelj svih odnosa." }
    ],
    summary: "Ovo je profil pojedinca koji ne samo da uspeva, već i inspiriše, sarađuje i pokreće organizaciju napred — pretvarajući izazove u prilike i promovišući kulturu stalnog rasta.",
    assessmentCall: "Gde ste vi na ovom putu? Pozivamo vas da uradite našu detaljnu samo-procenu i uporedite svoj trenutni profil sa ovim idealnim. Kao rezultat testa, dobićete preciznu procenu:",
    assessmentOutcomes: [
        "Vaše pozicije u odnosu na idealni profil: Jasno ćete videti kako se vaše sposobnosti uklapaju u tražene karakteristike.",
        "Vaših jakih strana: Identifikovaćete veštine i načine razmišljanja gde ste već izvrsni.",
        "Oblast za razvoj: Precizno ćete locirati gde možete dodatno raditi na sebi kako biste maksimizirali svoj potencijal."
    ],
    footer: "Započnite svoje putovanje ka izvanrednosti danas i otkrijte kako možete postati pokretač promena u svojoj organizaciji!"
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