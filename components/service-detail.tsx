import Image from "next/image";
import { ArrowRight, CheckCircle2, FileText, Ruler, Wrench } from "lucide-react";
import { CtaSection } from "@/components/cta-section";
import { MotionLink } from "@/components/motion/motion-link";
import { Reveal } from "@/components/motion/reveal";
import type { Service } from "@/data/site";

type ServiceDetailProps = {
  service: Service;
};

type ServiceProfile = {
  intent: string;
  sheetLabel: string;
  specs: Array<{ label: string; value: string }>;
  proof: string[];
  order: "spec-first" | "flow-first" | "archive-first";
};

const serviceProfiles: Record<string, ServiceProfile> = {
  "stampa-digitale": {
    intent: "Materiali, formati e controllo del file prima della produzione.",
    sheetLabel: "Scheda materiali",
    order: "spec-first",
    specs: [
      { label: "Supporti", value: "Rigidi, flessibili, adesivi, pannelli e superfici per interni." },
      { label: "Uso finale", value: "Set, vetrine, mostre, stand, pareti, insegne e fondali." },
      { label: "Controllo", value: "File, scala, distanza di lettura, luce e finitura." },
      { label: "Output", value: "Gigantografie, sagomati, lettering, banner, totem e grafiche ambientali." },
    ],
    proof: ["Precisione cromatica", "Supporto corretto", "Formato coerente", "Posa prevista"],
  },
  "pubblicita-dinamica": {
    intent: "Grafica leggibile su superfici mobili, con posa pensata per durata e movimento.",
    sheetLabel: "Flusso veicolo",
    order: "flow-first",
    specs: [
      { label: "Rilievo", value: "Misure del mezzo, superfici, curve, interruzioni e punti critici." },
      { label: "Lettura", value: "Gerarchie visive che restano chiare da lontano e in movimento." },
      { label: "Finitura", value: "Stampa, laminazione e applicazione su adesivi professionali." },
      { label: "Uso", value: "Flotte, mezzi speciali, furgoni, autobus, treni e campagne mobili." },
    ],
    proof: ["Rilievo mezzo", "Adattamento grafico", "Laminazione", "Posa tecnica"],
  },
  "allestimenti-scenografici": {
    intent: "Costruzione e montaggio di elementi che devono funzionare nello spazio reale.",
    sheetLabel: "Sequenza costruttiva",
    order: "spec-first",
    specs: [
      { label: "Struttura", value: "Grafica, falegnameria, carpenteria, sculture e supporti." },
      { label: "Vincoli", value: "Trasporto, tempi di montaggio, luce, pubblico e camera." },
      { label: "Scala", value: "Pavimenti, pareti, fondali, impianti scenici e ambienti temporanei." },
      { label: "Consegna", value: "Preallestimento, posa, verifica e interventi fuori sede." },
    ],
    proof: ["Disegni e reference", "Produzione coordinata", "Preallestimento", "Installazione"],
  },
  "accessori-di-scena": {
    intent: "Oggetti grafici credibili anche nelle riprese ravvicinate.",
    sheetLabel: "Archivio dettagli",
    order: "archive-first",
    specs: [
      { label: "Oggetti", value: "Documenti, manifesti, foto, giornali, cartellini, loghi e props grafici." },
      { label: "Credibilita", value: "Epoca, formato, usura, carta, supporto e distanza di ripresa." },
      { label: "Lavorazione", value: "Restyling digitale, fotoritocco, stampa, taglio e finitura." },
      { label: "Consegna", value: "Materiali pronti per set, scena, esposizione o ripresa ravvicinata." },
    ],
    proof: ["Reference", "Coerenza storica", "Finitura", "Dettaglio ravvicinato"],
  },
};

export function ServiceDetail({ service }: ServiceDetailProps) {
  const Icon = service.icon;
  const profile = serviceProfiles[service.slug] ?? serviceProfiles["stampa-digitale"];

  const capabilitySection = (
    <section className="technical-sheet__section" id="capabilities">
      <div className="technical-sheet__section-head">
        <p className="eyebrow">{profile.sheetLabel}</p>
        <h2>Cosa deve essere deciso prima di produrre.</h2>
      </div>
      <div className="spec-matrix">
        {profile.specs.map((spec) => (
          <article key={spec.label}>
            <span>{spec.label}</span>
            <p>{spec.value}</p>
          </article>
        ))}
      </div>
    </section>
  );

  const processSection = (
    <section className="technical-sheet__section" id="process">
      <div className="technical-sheet__section-head">
        <p className="eyebrow">Flusso</p>
        <h2>Dal brief alla consegna nello spazio reale.</h2>
      </div>
      <div className="process-sequence">
        {service.process.map((step, index) => (
          <Reveal as="div" className="process-sequence__step" key={step} delay={index * 0.04}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{step}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );

  return (
    <>
      <section className={`technical-sheet technical-sheet--${service.slug}`}>
        <div className="technical-sheet__hero">
          <Reveal className="technical-sheet__copy">
            <span className="technical-sheet__label">
              <Icon size={18} aria-hidden="true" />
              {service.eyebrow}
            </span>
            <h1>{service.title}</h1>
            <p>{service.summary}</p>
            <div className="technical-sheet__actions">
              <MotionLink href="/contatti" className="button button--primary">
                Invia un brief <ArrowRight size={18} aria-hidden="true" />
              </MotionLink>
              <a className="button button--ghost" href="#capabilities">
                Leggi la scheda
              </a>
            </div>
          </Reveal>

          <Reveal className="technical-sheet__evidence" delay={0.08}>
            <div className="technical-sheet__image">
              <Image src={service.image.src} alt={service.image.alt} fill priority sizes="(min-width: 1100px) 48vw, 100vw" />
            </div>
            <div className="technical-sheet__proof">
              {profile.proof.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="technical-sheet__body">
          <aside className="technical-sheet__index" aria-label="Indice della scheda tecnica">
            <span>Scheda tecnica</span>
            <a href="#capabilities">
              <Ruler size={16} aria-hidden="true" />
              Specifiche
            </a>
            <a href="#process">
              <Wrench size={16} aria-hidden="true" />
              Processo
            </a>
            <a href="#outcomes">
              <CheckCircle2 size={16} aria-hidden="true" />
              Risultati
            </a>
            <a href="#brief">
              <FileText size={16} aria-hidden="true" />
              Dati utili
            </a>
          </aside>

          <div className="technical-sheet__main">
            {profile.order === "flow-first" ? processSection : capabilitySection}
            {profile.order === "flow-first" ? capabilitySection : processSection}

            <section className="technical-sheet__section" id="outcomes">
              <div className="technical-sheet__section-head">
                <p className="eyebrow">Risultato</p>
                <h2>La misura non e solo il formato, e il contesto d'uso.</h2>
              </div>
              <div className="outcome-ledger">
                {service.outcomes.map((outcome) => (
                  <article key={outcome}>
                    <CheckCircle2 size={20} aria-hidden="true" />
                    <p>{outcome}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="technical-sheet__section" id="brief">
              <div className="brief-note">
                <div>
                  <p className="eyebrow">Per iniziare</p>
                  <h2>Servono vincoli concreti, non una presentazione perfetta.</h2>
                </div>
                <ul>
                  {service.capabilities.slice(0, 5).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        </div>
      </section>

      <CtaSection
        title={`Parliamo di ${service.title.toLowerCase()}.`}
        text="Invia misure, reference, tempi e luogo di installazione. Se il progetto e ancora aperto, basta un primo brief operativo."
      />
    </>
  );
}
