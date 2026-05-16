import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CtaSection } from "@/components/cta-section";
import { MotionCardLink, MotionLink } from "@/components/motion/motion-link";
import { Reveal } from "@/components/motion/reveal";
import { portfolioProjects, servicePillars, type Sector } from "@/data/site";

type SectorDetailProps = {
  sector: Sector;
};

type SectorProfile = {
  lens: string;
  pressure: string;
  constraints: string[];
  field: string;
};

const sectorProfiles: Record<string, SectorProfile> = {
  "tv-cinema": {
    lens: "Credibilita davanti alla camera, urgenze di set e vicinanza fisica a Cinecitta.",
    pressure: "Il materiale deve reggere a riprese, cambi e richieste rapide.",
    field: "Camera / set / reparto artistico",
    constraints: ["Luce e distanza di ripresa", "Tempi stretti", "Oggetti credibili da vicino"],
  },
  "eventi-fiere-congressi": {
    lens: "Spazi temporanei che devono essere montati in poco tempo e letti da molte persone.",
    pressure: "La grafica deve orientare, identificare e resistere al montaggio.",
    field: "Pubblico / flusso / installazione",
    constraints: ["Visibilita in ambienti affollati", "Trasporto e posa", "Smontaggio o riuso"],
  },
  "musei-mostre": {
    lens: "Percorsi in cui leggibilita, misura e cura dei materiali guidano il visitatore.",
    pressure: "L'allestimento deve sostenere il contenuto senza sovrastarlo.",
    field: "Percorso / opera / didascalia",
    constraints: ["Gerarchia informativa", "Finitura materica", "Durata dell'esposizione"],
  },
  "retail-spazi-commerciali": {
    lens: "Identita di marca applicata a superfici reali, usate ogni giorno.",
    pressure: "La comunicazione deve restare leggibile, resistente e coerente nello spazio.",
    field: "Vetrina / parete / brand surface",
    constraints: ["Usura quotidiana", "Coerenza visiva", "Superfici irregolari"],
  },
};

export function SectorDetail({ sector }: SectorDetailProps) {
  const Icon = sector.icon;
  const profile = sectorProfiles[sector.slug] ?? sectorProfiles["tv-cinema"];
  const relevantProjects = portfolioProjects.filter((project) =>
    project.services.some((service) => sector.services.some((sectorService) => sectorService.includes(service) || service.includes(sectorService.split(" ")[0]))),
  );
  const projects = relevantProjects.length ? relevantProjects.slice(0, 2) : portfolioProjects.slice(0, 2);

  return (
    <>
      <section className={`context-brief context-brief--${sector.slug}`}>
        <div className="context-brief__hero">
          <Reveal className="context-brief__copy">
            <span className="context-brief__label">
              <Icon size={18} aria-hidden="true" />
              {sector.eyebrow}
            </span>
            <h1>{sector.title}</h1>
            <p>{sector.summary}</p>
            <blockquote>{profile.lens}</blockquote>
            <MotionLink href="/contatti" className="button button--primary">
              Prepara un brief <ArrowRight size={18} aria-hidden="true" />
            </MotionLink>
          </Reveal>
          <Reveal className="context-brief__scenario" delay={0.08}>
            <Image src={sector.image.src} alt={sector.image.alt} fill priority sizes="(min-width: 1100px) 52vw, 100vw" />
            <div>
              <span>{profile.field}</span>
              <p>{profile.pressure}</p>
            </div>
          </Reveal>
        </div>

        <div className="context-brief__body">
          <aside className="context-brief__aside" aria-label="Dati del contesto">
            <span>Brief di contesto</span>
            {profile.constraints.map((constraint) => (
              <p key={constraint}>{constraint}</p>
            ))}
          </aside>

          <div className="context-brief__main">
            <section className="needs-matrix">
              <div className="needs-matrix__head">
                <p className="eyebrow">Esigenze / risposta</p>
                <h2>Il contesto decide il modo di produrre.</h2>
              </div>
              <div className="needs-matrix__grid">
                {sector.needs.map((need, index) => (
                  <Reveal className="needs-matrix__row" key={need} delay={index * 0.04}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{need}</p>
                    <strong>{sector.services[index % sector.services.length]}</strong>
                  </Reveal>
                ))}
              </div>
            </section>

            <section className="context-services">
              <div>
                <p className="eyebrow">Servizi piu richiesti</p>
                <h2>Reparti coinvolti in questo scenario.</h2>
              </div>
              <div className="context-services__grid">
                {sector.services.map((serviceName) => {
                  const service = servicePillars.find((item) => serviceName.toLowerCase().includes(item.title.split(" ")[0].toLowerCase()));
                  return (
                    <article key={serviceName}>
                      <CheckCircle2 size={20} aria-hidden="true" />
                      <h3>{serviceName}</h3>
                      <p>{service?.short ?? "Produzione calibrata su materiali, tempi e luogo di installazione."}</p>
                    </article>
                  );
                })}
              </div>
            </section>

            <section className="context-projects">
              <div>
                <p className="eyebrow">Riferimenti</p>
                <h2>Prove visive vicine a questo tipo di richiesta.</h2>
              </div>
              <div className="context-projects__grid">
                {projects.map((project) => (
                  <MotionCardLink href={project.href} className="context-project" key={project.slug}>
                    <div>
                      <Image src={project.image.src} alt={project.image.alt} fill sizes="(min-width: 900px) 28vw, 100vw" />
                    </div>
                    <span>{project.category}</span>
                    <h3>{project.title}</h3>
                  </MotionCardLink>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>

      <CtaSection
        title={`Stai preparando un progetto per ${sector.title.toLowerCase()}?`}
        text="Raccogliamo obiettivi, vincoli tecnici, tempi e materiali disponibili per proporre una soluzione concreta."
      />
    </>
  );
}
