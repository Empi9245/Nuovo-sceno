import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { CtaSection } from "@/components/cta-section";
import { EnvironmentMap } from "@/components/environment-map";
import { MotionLink } from "@/components/motion/motion-link";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SplitPageHero } from "@/components/split-page-hero";
import { sectors } from "@/data/site";

export const metadata: Metadata = {
  title: "Settori",
  description:
    "Scenografica lavora per produzioni TV e cinema, eventi, fiere, congressi, musei, mostre, retail e spazi commerciali.",
};

export default function SectorsPage() {
  return (
    <>
      <SplitPageHero
        eyebrow="Settori"
        titleLead="Dove vive il lavoro: camera, pubblico, percorso e"
        titleAccent="spazio commerciale."
        className="environments-video-hero"
        summary="La stessa tecnologia cambia senso in base al contesto. Materiali, tempi e leggibilita vengono decisi dal luogo in cui il lavoro sara usato."
        backgroundVideo={{
          src: "/images/tinyvid_optimized_1_download.mp4",
          poster: "/images/download.png",
          pauseMs: 2000,
        }}
        image={{
          src: "/images/allestimenti-scenografici.jpg",
          alt: "Allestitori al lavoro su materiali scenografici in laboratorio.",
        }}
        imagePosition="50% 54%"
        mobileImagePosition="50% 52%"
        actions={
          <MotionLink href="/contatti" className="button button--primary">
            Racconta il tuo contesto <ArrowRight size={18} aria-hidden="true" />
          </MotionLink>
        }
      >
        <span className="split-page-hero__panel-label">Contesti</span>
        <div className="split-page-hero__panel-list">
          {sectors.map((sector, index) => (
            <a href={sector.href} key={sector.slug}>
              <span className="split-page-hero__panel-index">{String(index + 1).padStart(2, "0")}</span>
              <strong>{sector.title}</strong>
              <small>{sector.eyebrow}</small>
            </a>
          ))}
        </div>
      </SplitPageHero>

      <section className="page-section page-section--dark environments-section">
        <SectionHeading eyebrow="Contesti" title="Ogni settore chiede un modo diverso di costruire.">
          <p>
            Chi arriva dal cinema, dagli eventi, dalle mostre o dal retail deve trovare il proprio linguaggio operativo:
            non una griglia di prodotti, ma una mappa di ambienti.
          </p>
        </SectionHeading>
        <EnvironmentMap sectors={sectors} />
      </section>

      <section className="page-section sector-comparison">
        <div className="sector-comparison__head">
          <p className="eyebrow">Confronto operativo</p>
          <h2>Stessi reparti, pressioni diverse.</h2>
        </div>
        <div className="sector-comparison__grid">
          {sectors.map((sector, index) => (
            <Reveal className="sector-comparison__item" key={sector.slug} delay={index * 0.04}>
              <div className="sector-comparison__meta">
                <span className="sector-comparison__index">{String(index + 1).padStart(2, "0")}</span>
                <span>{sector.eyebrow}</span>
              </div>
              <h3>{sector.title}</h3>
              <ul>
                {sector.needs.map((need) => (
                  <li key={need}>{need}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
