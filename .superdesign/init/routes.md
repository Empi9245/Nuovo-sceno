# Routes

Framework: Next.js App Router. Component library: custom React components with lucide-react icons. CSS approach: global CSS tokens and BEM-style classes.

- / -> app/page.tsx, root layout app/layout.tsx, home hero plus services, sectors, portfolio, trust, CTA
- /chi-siamo -> app/chi-siamo/page.tsx, about/brand credibility page
- /servizi -> app/servizi/page.tsx, listing page for all service cards
- /servizi/[slug] -> app/servizi/[slug]/page.tsx, generated from servicePillars in data/site.ts
- /portfolio -> app/portfolio/page.tsx, filterable portfolio cards
- /portfolio/[slug] -> app/portfolio/[slug]/page.tsx, generated from portfolioProjects in data/site.ts
- /settori -> app/settori/page.tsx, listing page for all sector cards
- /settori/[slug] -> app/settori/[slug]/page.tsx, generated from sectors in data/site.ts
- /faq -> app/faq/page.tsx
- /contatti -> app/contatti/page.tsx

## Data source

### data/site.ts

```ts
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

export const contactInfo = {
  company: "Scenografica Srl",
  address: "Via Tuscolana 1055, presso Studi di Cinecittà, 00173 Roma",
  emailPrimary: "s.dignazio@scenografica.it",
  emailSecondary: "info@scenografica.it",
  phoneOffice: "06 72293660",
  phoneMobileOne: "331 2083134",
  phoneMobileTwo: "335 8100941",
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/chi-siamo", label: "Chi siamo" },
  { href: "/servizi", label: "Servizi" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/settori", label: "Settori" },
  { href: "/faq", label: "FAQ" },
  { href: "/contatti", label: "Contatti" },
];

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
      src: "/images/stampa-grande-formato.jpg",
      alt: "Macchina da stampa UV grande formato con pannelli grafici in produzione nel laboratorio Scenografica.",
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
      src: "/images/pubblicita-dinamica.jpg",
      alt: "Furgone Scenografica decorato con grafiche di wrapping all'esterno del laboratorio.",
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
      src: "/images/allestimenti-scenografici.jpg",
      alt: "Tecnici Scenografica al lavoro in laboratorio su un allestimento scenografico.",
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
      src: "/images/hero-laboratorio.jpg",
      alt: "Pannello Scenografica e stampante grande formato, usati per produzioni grafiche e oggetti di scena.",
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
      src: "/images/laboratorio-cinecitta.jpg",
      alt: "Laboratorio Scenografica presso Cinecittà con stampante grande formato e materiali scenici.",
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
      src: "/images/allestimenti-scenografici.jpg",
      alt: "Tecnici al lavoro su materiali e strutture per un allestimento scenografico.",
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
      src: "/images/stampa-grande-formato.jpg",
      alt: "Dettaglio di stampa grande formato con grafiche e pannelli per allestimenti espositivi.",
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
      src: "/images/pubblicita-dinamica.jpg",
      alt: "Decorazione Scenografica su veicolo commerciale, esempio di applicazione grafica per brand fisici.",
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
      src: "/images/laboratorio-cinecitta.jpg",
      alt: "Vista del laboratorio Scenografica con macchinari e materiali scenici.",
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
      src: "/images/stampa-grande-formato.jpg",
      alt: "Dettaglio della stampa UV su supporti rigidi in laboratorio.",
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
      src: "/images/allestimenti-scenografici.jpg",
      alt: "Operatore Scenografica al lavoro su materiali per un allestimento.",
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
      src: "/images/pubblicita-dinamica.jpg",
      alt: "Furgone Scenografica con wrapping visto dall'ingresso del laboratorio.",
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
      src: "/images/team-produzione.jpg",
      alt: "Ufficio Scenografica con postazione di coordinamento e area accoglienza.",
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
      src: "/images/hero-laboratorio.jpg",
      alt: "Pannello Scenografica accanto alla stampante grande formato.",
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
    question: "Che tipo di progetti realizzate?",
    answer:
      "Lavoriamo su produzioni cinematografiche e televisive, eventi, fiere, congressi, musei, mostre e spazi commerciali. Possiamo occuparci di stampa grande formato, allestimenti, accessori di scena e applicazioni grafiche su veicoli o superfici.",
  },
  {
    question: "Potete seguire anche progetti urgenti?",
    answer:
      "Sì, quando materiali, file e tempi sono chiari. La produzione interna a Cinecittà aiuta a ridurre passaggi intermedi e a gestire modifiche rapide, soprattutto per set e allestimenti temporanei.",
  },
  {
    question: "Collaborate con agenzie e reparti artistici?",
    answer:
      "Sì. Possiamo partire da un concept, da un esecutivo grafico o da reference di scena. Il lavoro viene tradotto in supporti, materiali, finiture e modalità di montaggio adatte al contesto reale.",
  },
  {
    question: "Fornite posa e montaggio?",
    answer:
      "Sì. Una squadra di tecnici allestitori può occuparsi di consegne e montaggi in sede, fuori sede e su territorio nazionale, in base alla natura del progetto.",
  },
  {
    question: "Quali file servono per un preventivo?",
    answer:
      "Sono utili misure, quantità, immagini di riferimento, disegni tecnici, file grafici se disponibili, tempi di consegna e luogo di installazione. Se il progetto è ancora in fase iniziale, basta una descrizione chiara per orientare la prima valutazione.",
  },
];

export const trustPoints = [
  {
    title: "Dentro Cinecittà",
    text: "La sede presso gli Studi di Cinecittà mette il laboratorio vicino a produzioni, set e professionisti dell'audiovisivo.",
    icon: MapPin,
  },
  {
    title: "Produzione interna",
    text: "Stampa, grafica, materiali e allestimento dialogano nello stesso flusso, con meno dispersione tra progetto e consegna.",
    icon: Factory,
  },
  {
    title: "Tecnici specializzati",
    text: "Una squadra abituata a montaggi, consegne e cambi rapidi, dove il dettaglio deve reggere sul set e nello spazio fisico.",
    icon: ShieldCheck,
  },
  {
    title: "Dal file alla scena",
    text: "Fotoritocco, impaginazione, layout, stampa, costruzione e posa: ogni passaggio viene pensato per l'ambiente finale.",
    icon: Palette,
  },
];

export const homepageStats = [
  { value: "10+", label: "anni di attività" },
  { value: "Cinecittà", label: "sede operativa" },
  { value: "Italia", label: "montaggi e consegne" },
];

export const quickActions = [
  { href: "/portfolio", label: "Guarda i lavori", icon: Sparkles },
  { href: "/contatti", label: "Richiedi un preventivo", icon: ArrowRight },
];

```
