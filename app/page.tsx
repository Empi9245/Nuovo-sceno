import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { CtaSection } from "@/components/cta-section";
import { DepartmentBoard } from "@/components/department-board";
import { EnvironmentMap } from "@/components/environment-map";
import { MotionCardLink, MotionLink } from "@/components/motion/motion-link";
import { Reveal } from "@/components/motion/reveal";
import { HomeHero } from "@/components/sections/home-hero";
import { SectionHeading } from "@/components/section-heading";
import { clients, portfolioProjects, sectors, servicePillars, trustPoints } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <section className="page-section home-departments">
        <SectionHeading eyebrow="Servizi" title="Quattro reparti, un solo flusso produttivo.">
          <p>
            Scenografica unisce stampa, grafica, costruzione e posa. La forza non e solo produrre supporti, ma farli
            funzionare dentro scene, percorsi, stand e spazi reali.
          </p>
        </SectionHeading>
        <DepartmentBoard services={servicePillars} compact />
      </section>

      <section className="page-section page-section--dark home-environments">
        <SectionHeading eyebrow="Settori" title="Per chi lavora con spazi, camera e pubblico.">
          <p>
            Produzioni, agenzie, curatori e brand cercano fornitori che capiscano tempi, materiali e vincoli di scena.
            Qui il progetto viene tradotto in oggetti fisici pronti per essere montati.
          </p>
        </SectionHeading>
        <EnvironmentMap sectors={sectors} compact />
      </section>

      <section className="page-section home-archive">
        <SectionHeading eyebrow="Portfolio" title="Lavori reali, materiali visibili.">
          <p>
            Il portfolio non anticipa promesse astratte: mostra laboratorio, stampa, wrapping e produzione attraverso
            immagini reali disponibili nel progetto.
          </p>
        </SectionHeading>
        <div className="home-archive__grid">
          {portfolioProjects.slice(0, 4).map((project, index) => (
            <Reveal className={`home-archive__item home-archive__item--${index + 1}`} key={project.slug} delay={index * 0.05}>
              <MotionCardLink href={project.href}>
                <div>
                  <Image src={project.image.src} alt={project.image.alt} fill sizes="(min-width: 900px) 38vw, 100vw" />
                </div>
                <span>{project.category}</span>
                <h3>{project.title}</h3>
              </MotionCardLink>
            </Reveal>
          ))}
        </div>
        <div className="home-archive__action">
          <MotionLink href="/portfolio" className="button button--primary">
            Apri il portfolio <ArrowRight size={18} aria-hidden="true" />
          </MotionLink>
        </div>
      </section>

      <section className="page-section page-section--tight credibility-strip">
        <SectionHeading eyebrow="Credibilita" title="Un laboratorio dentro la filiera dello spettacolo.">
          <p>
            Scenografica lavora vicino a produzioni e realta note. La credibilita del sito arriva da sede, materiali,
            metodo e clienti, non da frasi generiche.
          </p>
        </SectionHeading>
        <div className="trust-grid">
          {trustPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <Reveal as="article" className="trust-item" key={point.title} delay={index * 0.045}>
                <div className="trust-item__header">
                  <div className="trust-item__number">{point.number}</div>
                  <Icon className="trust-item__icon" size={28} aria-hidden="true" />
                </div>
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </Reveal>
            );
          })}
        </div>
        <div className="client-strip" aria-label="Alcuni clienti e produzioni citati dal sito attuale">
          {clients.map((client, index) => (
            <Reveal as="span" key={client} delay={index * 0.035}>
              {client}
            </Reveal>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
