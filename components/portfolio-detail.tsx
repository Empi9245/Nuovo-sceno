import Image from "next/image";
import { ArrowRight, Layers3, Ruler, Wrench } from "lucide-react";
import { CtaSection } from "@/components/cta-section";
import { MotionCardLink, MotionLink } from "@/components/motion/motion-link";
import { Reveal } from "@/components/motion/reveal";
import type { PortfolioProject } from "@/data/site";

type PortfolioDetailProps = {
  project: PortfolioProject;
  relatedProjects: PortfolioProject[];
};

export function PortfolioDetail({ project, relatedProjects }: PortfolioDetailProps) {
  return (
    <>
      <article className="project-dossier">
        <header className="project-dossier__hero">
          <Reveal className="project-dossier__media">
            <Image src={project.image.src} alt={project.image.alt} fill priority sizes="100vw" />
          </Reveal>
          <Reveal className="project-dossier__intro" delay={0.08}>
            <p className="eyebrow">{project.category}</p>
            <h1>{project.title}</h1>
            <p>{project.summary}</p>
            <MotionLink href="/contatti" className="button button--primary">
              Porta un lavoro simile <ArrowRight size={18} aria-hidden="true" />
            </MotionLink>
          </Reveal>
          <aside className="project-dossier__rail" aria-label="Metadati progetto">
            <span>Record produzione</span>
            <dl>
              <div>
                <dt>Ambito</dt>
                <dd>{project.category}</dd>
              </div>
              <div>
                <dt>Riferimento</dt>
                <dd>{project.year}</dd>
              </div>
              <div>
                <dt>Servizi</dt>
                <dd>{project.services.join(", ")}</dd>
              </div>
            </dl>
          </aside>
        </header>

        <div className="project-dossier__body">
          <section className="project-dossier__section">
            <div>
              <p className="eyebrow">Dettagli</p>
              <h2>Materiali, scala e uso finale messi in chiaro.</h2>
            </div>
            <div className="project-dossier__ledger">
              {project.details.map((detail, index) => (
                <Reveal className="project-dossier__ledger-row" key={detail} delay={index * 0.04}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{detail}</p>
                </Reveal>
              ))}
            </div>
          </section>

          <section className="project-dossier__section project-dossier__section--split">
            <article>
              <Ruler size={22} aria-hidden="true" />
              <h3>Scala</h3>
              <p>Distanza di lettura, luce, supporto e dimensione definiscono la produzione prima della finitura.</p>
            </article>
            <article>
              <Layers3 size={22} aria-hidden="true" />
              <h3>Reparti</h3>
              <p>{project.services.join(", ")} lavorano come un unico flusso quando il progetto richiede piu passaggi.</p>
            </article>
            <article>
              <Wrench size={22} aria-hidden="true" />
              <h3>Responsabilita</h3>
              <p>Coordinare file, supporti, finiture e montaggio con un approccio da laboratorio fisico.</p>
            </article>
          </section>
        </div>
      </article>

      <section className="page-section page-section--dark related-dossiers">
        <div className="related-dossiers__head">
          <p className="eyebrow">Altri dossier</p>
          <h2>Tre riferimenti per leggere il metodo Scenografica.</h2>
        </div>
        <div className="related-dossiers__grid">
          {relatedProjects.map((related, index) => (
            <Reveal key={related.slug} className="related-dossier" delay={index * 0.04}>
              <MotionCardLink href={related.href}>
                <span>{related.category}</span>
                <h3>{related.title}</h3>
                <p>{related.summary}</p>
              </MotionCardLink>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaSection
        title="Hai un lavoro simile da mettere in produzione?"
        text="Mandaci misure, foto dello spazio, tempi e materiali gia disponibili. La risposta migliore parte da vincoli concreti."
      />
    </>
  );
}
