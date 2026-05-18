import {
  ArrowRight,
  Brush,
  Building2,
  Clapperboard,
  Factory,
  GalleryHorizontalEnd,
  MapPin,
  Megaphone,
  PackageOpen,
  Palette,
  ShieldCheck,
  Sparkles,
  Truck,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ImageAsset = {
  src: string;
  alt: string;
};

export type Service = {
  slug: string;
  title: string;
  heroAccent: string;
  eyebrow: string;
  summary: string;
  short: string;
  image: ImageAsset;
  icon: LucideIcon;
  href: string;
  capabilities: string[];
  process: string[];
  outcomes: string[];
  relatedSectors: string[];
};

export type Sector = {
  slug: string;
  title: string;
  heroAccent: string;
  eyebrow: string;
  summary: string;
  image: ImageAsset;
  icon: LucideIcon;
  href: string;
  needs: string[];
  services: string[];
};

export type PortfolioProject = {
  slug: string;
  title: string;
  heroAccent: string;
  category: string;
  year: string;
  summary: string;
  image: ImageAsset;
  href: string;
  services: string[];
  details: string[];
};

export type NavChildItem = {
  href: string;
  label: string;
  eyebrow?: string;
  description?: string;
};

export type NavItem = {
  href: string;
  label: string;
  eyebrow?: string;
  description?: string;
  children?: NavChildItem[];
};

export const contactInfo = {
  company: "Scenografica Srl",
  address: "Via Tuscolana 1055, presso Studi di Cinecittà, 00173 Roma",
  emailPrimary: "s.dignazio@scenografica.it",
  emailSecondary: "info@scenografica.it",
  phoneOffice: "06 72293660",
  phoneMobileOne: "331 2083134",
  phoneMobileTwo: "335 8100941",
};

export const servicePillars: Service[] = [
  {
    slug: "stampa-digitale",
    title: "Stampa digitale grande formato",
    heroAccent: "grande formato",
    eyebrow: "Produzione grafica",
    summary:
      "Stampa UV diretta su supporti rigidi, alta risoluzione su materiali flessibili, pannellistica, gigantografie e grafiche per interni.",
    short:
      "Dal file alla posa: pannelli, insegne, murales, vetrine, banner, totem e mockup prodotti nel laboratorio di Cinecittà.",
    image: {
      src: "/images/controllo-stampe-laboratorio.jpg",
      alt: "Operatore al banco di lavoro durante il controllo di stampe e campioni colore nel laboratorio Scenografica.",
    },
    icon: Factory,
    href: "/servizi/stampa-digitale",
    capabilities: [
      "Stampa diretta UV su supporti rigidi",
      "Stampa ad alta risoluzione su supporti flessibili",
      "Gigantografie, banner, floor graphics e window graphics",
      "Cartellonistica, pannellistica informativa e pubblicitaria",
      "Lettere, logotipi prespaziati, elementi sagomati e 3D",
      "Grafiche per pareti, vetrine, stand e spazi espositivi",
    ],
    process: [
      "Controllo file, impaginazione e prova tecnica dei materiali",
      "Produzione interna con tecnologie UV e finiture dedicate",
      "Preparazione per montaggio, trasporto e posa in opera",
    ],
    outcomes: [
      "Output coerente su formati molto diversi",
      "Tempi più controllabili grazie alla produzione interna",
      "Materiali adatti a set, eventi, negozi e mostre",
    ],
    relatedSectors: ["TV e cinema", "Eventi e fiere", "Retail", "Musei e mostre"],
  },
  {
    slug: "pubblicita-dinamica",
    title: "Pubblicità dinamica e wrapping",
    heroAccent: "wrapping",
    eyebrow: "Veicoli e flotte",
    summary:
      "Decorazione integrale o parziale di veicoli, autobus, treni, mezzi speciali e flotte commerciali con grafiche ad alto impatto.",
    short:
      "Wrapping, decorazioni adesive e grafiche mobili per portare il messaggio fuori dagli spazi statici.",
    image: {
      src: "/images/posa-wrapping-furgone-bianco.jpg",
      alt: "Tecnico che applica pellicola adesiva su un furgone bianco durante una lavorazione di wrapping.",
    },
    icon: Truck,
    href: "/servizi/pubblicita-dinamica",
    capabilities: [
      "Decorazione integrale di veicoli commerciali",
      "Wrapping parziale, lettering e grafiche sagomate",
      "Applicazioni su flotte, autobus, treni e mezzi speciali",
      "Preparazione file e controllo cromatico per superfici mobili",
      "Montaggio con tecnici specializzati",
    ],
    process: [
      "Analisi del mezzo, misure e vincoli di applicazione",
      "Adattamento grafico sulle superfici reali",
      "Stampa, laminazione e posa con finitura professionale",
    ],
    outcomes: [
      "Veicoli leggibili in movimento e riconoscibili da lontano",
      "Applicazioni progettate per resistere all'uso quotidiano",
      "Coerenza tra immagine aziendale, campagna e supporto fisico",
    ],
    relatedSectors: ["Agenzie di comunicazione", "Retail", "Eventi"],
  },
  {
    slug: "allestimenti-scenografici",
    title: "Allestimenti grafici e scenografici",
    heroAccent: "scenografici",
    eyebrow: "Set e spazi",
    summary:
      "Costruzione e posa di impianti grafici e scenografici per produzioni televisive e cinematografiche, eventi, musei, teatri, fiere e spazi commerciali.",
    short:
      "Elementi scenici, pavimenti riprodotti, falegnameria, carpenteria metallica, sculture e montaggi in tutta Italia.",
    image: {
      src: "/images/montaggio-pannello-scenografico-palco.jpg",
      alt: "Montaggio di un grande pannello scenografico su palco con scala e struttura tecnica.",
    },
    icon: Wrench,
    href: "/servizi/allestimenti-scenografici",
    capabilities: [
      "Costruzione di impianti grafici e scenografici",
      "Riproduzione pavimenti in qualsiasi formato",
      "Falegnameria, carpenteria metallica e sculture",
      "Montaggio per produzioni, teatri, musei, eventi e spazi commerciali",
      "Consegne e installazioni sul territorio nazionale",
    ],
    process: [
      "Lettura del concept, dei disegni tecnici e delle esigenze di scena",
      "Produzione coordinata tra grafica, materiali e struttura",
      "Preallestimento, trasporto, posa e verifica finale",
    ],
    outcomes: [
      "Soluzioni fisiche credibili davanti alla camera e dal vivo",
      "Un unico interlocutore per grafica, costruzione e montaggio",
      "Risposte rapide quando una produzione cambia in corsa",
    ],
    relatedSectors: ["TV e cinema", "Musei e mostre", "Eventi", "Retail"],
  },
  {
    slug: "accessori-di-scena",
    title: "Accessori di scena",
    heroAccent: "scena",
    eyebrow: "Oggetti narrativi",
    summary:
      "Riproduzione e restyling digitale di documenti, foto, manifesti, giornali d'epoca, cartellini, loghi e oggettistica grafica per la scena.",
    short:
      "Dettagli stampati e personalizzazioni grafiche per film, fiction, programmi TV, spot e videoclip.",
    image: {
      src: "/images/props-documenti-giornali-scena.jpg",
      alt: "Documenti, giornali e cartelli stampati come accessori grafici di scena.",
    },
    icon: PackageOpen,
    href: "/servizi/accessori-di-scena",
    capabilities: [
      "Documenti, foto, manifesti e giornali d'epoca",
      "Stampe su tessuto per riproduzione di opere e quadri",
      "Cartellini conduttori e oggettistica grafica di scena",
      "Scritte, loghi e immagini sagomate su supporti rigidi o adesivi",
      "Restyling digitale e fotoritocco per coerenza narrativa",
    ],
    process: [
      "Raccolta reference, epoca, formato e vincoli di ripresa",
      "Elaborazione grafica, prove materiche e finitura",
      "Consegna pronta per set, scena o esposizione",
    ],
    outcomes: [
      "Oggetti credibili anche nelle riprese ravvicinate",
      "Coerenza visiva tra epoca, personaggio e ambiente",
      "Produzione rapida per urgenze di set",
    ],
    relatedSectors: ["TV e cinema", "Musei e mostre", "Eventi"],
  },
];

export const sectors: Sector[] = [
  {
    slug: "tv-cinema",
    title: "TV e cinema",
    heroAccent: "cinema",
    eyebrow: "Produzioni",
    summary:
      "Un laboratorio dentro Cinecittà, pensato per produzioni che hanno bisogno di prove rapide, dettagli credibili e montaggi puntuali.",
    image: {
      src: "/images/set-tv-scenografia-colorata.jpg",
      alt: "Set televisivo con scenografia colorata, luci di studio e grafiche sceniche installate.",
    },
    icon: Clapperboard,
    href: "/settori/tv-cinema",
    needs: [
      "Tempi stretti e cambi di produzione",
      "Materiali che funzionano davanti alla camera",
      "Accessori, insegne, pavimenti e fondali coerenti con la scena",
    ],
    services: ["Allestimenti scenografici", "Accessori di scena", "Stampa grande formato"],
  },
  {
    slug: "eventi-fiere-congressi",
    title: "Eventi, fiere e congressi",
    heroAccent: "congressi",
    eyebrow: "Spazi temporanei",
    summary:
      "Allestimenti, grafiche e strutture per ambienti temporanei che devono essere chiari, montabili e riconoscibili in poche ore.",
    image: {
      src: "/images/allestimento-grafico-area-evento.jpg",
      alt: "Allestimento grafico in area evento con pareti decorate e percorso pubblico.",
    },
    icon: Megaphone,
    href: "/settori/eventi-fiere-congressi",
    needs: [
      "Identità visiva leggibile in ambienti affollati",
      "Produzione coordinata tra grafica, supporti e montaggio",
      "Finiture resistenti al trasporto e alla posa",
    ],
    services: ["Stampa grande formato", "Allestimenti scenografici", "Pubblicità dinamica"],
  },
  {
    slug: "musei-mostre",
    title: "Musei e mostre",
    heroAccent: "mostre",
    eyebrow: "Percorsi espositivi",
    summary:
      "Pannelli, supporti, riproduzioni e ambienti scenici per percorsi espositivi che richiedono precisione, leggibilità e cura materica.",
    image: {
      src: "/images/props-documenti-giornali-scena.jpg",
      alt: "Documenti, giornali e materiali grafici riprodotti per percorsi espositivi e contesti di scena.",
    },
    icon: GalleryHorizontalEnd,
    href: "/settori/musei-mostre",
    needs: [
      "Pannellistica chiara e durevole",
      "Riproduzioni coerenti con opere, epoche e materiali",
      "Allestimenti capaci di guidare il pubblico senza rumore visivo",
    ],
    services: ["Stampa grande formato", "Accessori di scena", "Allestimenti scenografici"],
  },
  {
    slug: "retail-spazi-commerciali",
    title: "Retail e spazi commerciali",
    heroAccent: "spazi commerciali",
    eyebrow: "Brand fisici",
    summary:
      "Grafiche, vetrine, pareti, insegne e spazi promozionali per marchi che vogliono trasformare il punto vendita in esperienza concreta.",
    image: {
      src: "/images/furgone-wrapping-scenografica-cortile.jpg",
      alt: "Furgone commerciale decorato con wrapping, esempio di identità applicata su superfici fisiche.",
    },
    icon: Building2,
    href: "/settori/retail-spazi-commerciali",
    needs: [
      "Identità visiva applicata su superfici reali",
      "Materiali resistenti all'uso quotidiano",
      "Coerenza tra comunicazione, vetrine e spazi interni",
    ],
    services: ["Stampa grande formato", "Pubblicità dinamica", "Allestimenti scenografici"],
  },
];

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "laboratorio-cinecitta",
    title: "Laboratorio a Cinecittà",
    heroAccent: "Cinecittà",
    category: "Laboratorio",
    year: "Roma",
    summary:
      "Un ambiente produttivo attrezzato per coordinare grafica, materiali e allestimenti scenici nello stesso luogo.",
    image: {
      src: "/images/laboratorio-wide-stampa-materiali.jpg",
      alt: "Vista ampia del laboratorio Scenografica con stampante grande formato, scaffali di materiali e tecnici al lavoro.",
    },
    href: "/portfolio/laboratorio-cinecitta",
    services: ["Produzione interna", "Stampa", "Allestimento"],
    details: [
      "Laboratorio presso gli Studi di Cinecittà",
      "Macchinari per grande formato e superfici rigide",
      "Area materiali per pannelli, supporti e lavorazioni sceniche",
    ],
  },
  {
    slug: "stampa-uv-grande-formato",
    title: "Stampa UV grande formato",
    heroAccent: "grande formato",
    category: "Stampa",
    year: "Produzione",
    summary:
      "Pannelli, insegne e superfici grafiche prodotti su supporti rigidi e flessibili per scena, eventi e spazi commerciali.",
    image: {
      src: "/images/stampa-supporto-flessibile-dettaglio.jpg",
      alt: "Dettaglio di una stampa su supporto flessibile in uscita dalla lavorazione.",
    },
    href: "/portfolio/stampa-uv-grande-formato",
    services: ["Stampa UV", "Pannellistica", "Finitura"],
    details: [
      "Controllo dei file prima della stampa",
      "Produzione di grafiche lineari e sagomate",
      "Supporti selezionati in base a posa, luce e durata",
    ],
  },
  {
    slug: "allestimento-produzioni",
    title: "Allestimenti per produzioni",
    heroAccent: "produzioni",
    category: "Allestimenti",
    year: "Set",
    summary:
      "Costruzione, adattamento e montaggio di elementi scenografici per produzioni audiovisive e ambienti temporanei.",
    image: {
      src: "/images/allestimento-scenografico-palco-led.jpg",
      alt: "Allestimento scenografico su palco con pannelli verticali, luci e tecnici in posa.",
    },
    href: "/portfolio/allestimento-produzioni",
    services: ["Scenografia", "Montaggio", "Falegnameria"],
    details: [
      "Elementi preparati per installazioni rapide",
      "Coordinamento tra tecnici, grafici e allestitori",
      "Soluzioni pensate per resistere a trasporto e riprese",
    ],
  },
  {
    slug: "pubblicita-dinamica",
    title: "Pubblicità dinamica",
    heroAccent: "dinamica",
    category: "Wrapping",
    year: "Flotte",
    summary:
      "Applicazioni grafiche su veicoli e mezzi commerciali, con attenzione a leggibilità, resistenza e identità del marchio.",
    image: {
      src: "/images/furgone-wrapping-scenografica-cortile.jpg",
      alt: "Furgone Scenografica decorato con wrapping nel cortile operativo del laboratorio.",
    },
    href: "/portfolio/pubblicita-dinamica",
    services: ["Wrapping", "Decorazione veicoli", "Applicazione"],
    details: [
      "Rilievo del mezzo e adattamento grafico",
      "Stampa e finitura su materiali adesivi",
      "Posa tecnica per superfici mobili",
    ],
  },
  {
    slug: "coordinamento-produzione",
    title: "Coordinamento di produzione",
    heroAccent: "produzione",
    category: "Metodo",
    year: "Ufficio",
    summary:
      "Gestione del dialogo con produzioni, agenzie e clienti, dal brief alla consegna dei materiali pronti per il montaggio.",
    image: {
      src: "/images/campionatura-stampe-tavolo-laboratorio.jpg",
      alt: "Campionature, stampe e prove colore distese sul tavolo di lavoro per il controllo produzione.",
    },
    href: "/portfolio/coordinamento-produzione",
    services: ["Brief", "Preventivo", "Consegna"],
    details: [
      "Interlocutori dedicati per richieste e urgenze",
      "Controllo di tempi, materiali e file",
      "Supporto in sede e fuori sede",
    ],
  },
  {
    slug: "pannelli-set-design",
    title: "Pannelli e set design",
    heroAccent: "set design",
    category: "Stampa",
    year: "Set design",
    summary:
      "Pannelli e insegne di scena prodotti con attenzione a scala, luce e distanza di lettura.",
    image: {
      src: "/images/studio-tv-pavimento-scenografico.jpg",
      alt: "Pavimento e pannelli scenografici installati in uno studio televisivo con operatori in scena.",
    },
    href: "/portfolio/pannelli-set-design",
    services: ["Pannelli", "Insegne", "Set design"],
    details: [
      "Prove su supporti rigidi e finiture",
      "Lavorazioni per lettura ravvicinata o da lontano",
      "Produzione integrata con il reparto stampa",
    ],
  },
];

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/chi-siamo", label: "Chi siamo" },
  {
    href: "/servizi",
    label: "Servizi",
    eyebrow: "Aree operative",
    description: "Produzione, stampa, set e oggetti scenici.",
    children: servicePillars.map((service) => ({
      href: service.href,
      label: service.title,
      eyebrow: service.eyebrow,
      description: service.short,
    })),
  },
  {
    href: "/portfolio",
    label: "Portfolio",
    eyebrow: "Archivio lavori",
    description: "Casi e riferimenti fotografici reali.",
    children: portfolioProjects.map((project) => ({
      href: project.href,
      label: project.title,
      eyebrow: project.category,
      description: project.summary,
    })),
  },
  {
    href: "/settori",
    label: "Settori",
    eyebrow: "Contesti",
    description: "Produzioni, eventi, mostre e brand fisici.",
    children: sectors.map((sector) => ({
      href: sector.href,
      label: sector.title,
      eyebrow: sector.eyebrow,
      description: sector.summary,
    })),
  },
  { href: "/faq", label: "FAQ" },
  { href: "/contatti", label: "Contatti" },
];

export const clients = [
  "RAI",
  "Cinecittà",
  "Cinecittà Luce",
  "Palomar",
  "Indiana Production",
  "Lucky Red",
  "RTI",
  "Cattleya",
  "Fascino",
  "Fremantle Media",
  "EndemolShine Italy",
  "Wildside",
  "Orange Media",
  "Rodeo Drive",
  "Banijay Studios Italy",
  "Picomedia",
  "Centro Sperimentale di Cinematografia",
  "Eagle Pictures",
  "Stand by Me",
];

export const faqItems = [
  {
    category: "Brief e materiali",
    question: "Che tipo di progetti realizzate?",
    answer:
      "Lavoriamo su produzioni cinematografiche e televisive, eventi, fiere, congressi, musei, mostre e spazi commerciali. Possiamo occuparci di stampa grande formato, allestimenti, accessori di scena e applicazioni grafiche su veicoli o superfici.",
  },
  {
    category: "Tempi e produzione",
    question: "Potete seguire anche progetti urgenti?",
    answer:
      "Sì, quando materiali, file e tempi sono chiari. La produzione interna a Cinecittà aiuta a ridurre passaggi intermedi e a gestire modifiche rapide, soprattutto per set e allestimenti temporanei.",
  },
  {
    category: "Collaborazione",
    question: "Collaborate con agenzie e reparti artistici?",
    answer:
      "Sì. Possiamo partire da un concept, da un esecutivo grafico o da reference di scena. Il lavoro viene tradotto in supporti, materiali, finiture e modalità di montaggio adatte al contesto reale.",
  },
  {
    category: "Tempi e produzione",
    question: "Fornite posa e montaggio?",
    answer:
      "Sì. Una squadra di tecnici allestitori può occuparsi di consegne e montaggi in sede, fuori sede e su territorio nazionale, in base alla natura del progetto.",
  },
  {
    category: "Brief e materiali",
    question: "Quali file servono per un preventivo?",
    answer:
      "Sono utili misure, quantità, immagini di riferimento, disegni tecnici, file grafici se disponibili, tempi di consegna e luogo di installazione. Se il progetto è ancora in fase iniziale, basta una descrizione chiara per orientare la prima valutazione.",
  },
];

export const faqCategories = ["Brief e materiali", "Tempi e produzione", "Collaborazione"];

export const trustPoints = [
  {
    number: "01",
    title: "10+ anni di attività",
    text: "Oltre un decennio di esperienza nella produzione scenografica e grafica per il settore audiovisivo, eventi e spazi commerciali. Un laboratorio che ha costruito la propria credibilità attraverso progetti reali per produzioni televisive, cinematografiche e allestimenti complessi.",
    icon: MapPin,
  },
  {
    number: "02",
    title: "Cinecittà sede operativa",
    text: "La sede presso gli Studi di Cinecittà mette il laboratorio vicino a produzioni, set e professionisti dell'audiovisivo. Una posizione strategica che permette tempi di risposta rapidi e un dialogo diretto con scenografi, art director e reparti di produzione.",
    icon: Factory,
  },
  {
    number: "03",
    title: "Italia montaggi e consegne",
    text: "Una squadra di tecnici specializzati abituata a montaggi, consegne e cambi rapidi su tutto il territorio nazionale. Dal laboratorio al set, dall'evento alla mostra: ogni progetto viene seguito fino alla posa finale, dove il dettaglio deve reggere davanti alla camera e al pubblico.",
    icon: ShieldCheck,
  },
];

export const homepageStats = [
  { value: "10+", label: "anni di attività", detail: "Produzione grafica e scenografica per set, eventi e spazi fisici." },
  { value: "Cinecittà", label: "sede operativa", detail: "Laboratorio vicino a reparti artistici, produzioni e urgenze di scena." },
  { value: "Italia", label: "montaggi e consegne", detail: "Squadre e materiali seguono il lavoro fino alla posa nello spazio finale." },
];

export const quickActions = [
  { href: "/portfolio", label: "Guarda i lavori", icon: Sparkles },
  { href: "/contatti", label: "Richiedi un preventivo", icon: ArrowRight },
];
