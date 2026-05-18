import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { CtaSection } from "@/components/cta-section";
import { MotionLink } from "@/components/motion/motion-link";
import { Reveal } from "@/components/motion/reveal";
import { ServiceFeatureCarousel } from "@/components/service-feature-carousel";
import { SplitPageHero } from "@/components/split-page-hero";
import { servicePillars } from "@/data/site";

export const metadata: Metadata = {
  title: "Servizi",
  description:
    "Stampa digitale grande formato, pubblicita dinamica, allestimenti scenografici e accessori di scena per produzioni, eventi, musei e retail.",
};

export default function ServicesPage() {
  const carouselServices = servicePillars.map(({ icon: _icon, ...service }) => service);

  return (
    <>
      <SplitPageHero
        eyebrow="Servizi"
        titleLead="Quattro reparti operativi nello stesso"
        titleAccent="laboratorio."
        summary="La divisione per servizi orienta il brief, ma molti lavori attraversano piu reparti: stampa, finitura, costruzione, trasporto e montaggio."
        image={{
          src: "/images/hero-laboratorio.jpg",
          alt: "Stampante grande formato e pannello Scenografica nel laboratorio.",
        }}
        imagePosition="54% 48%"
        mobileImagePosition="62% 50%"
        actions={
          <MotionLink href="/contatti" className="button button--primary">
            Richiedi un preventivo <ArrowRight size={18} aria-hidden="true" />
          </MotionLink>
        }
      >
        <span className="split-page-hero__panel-label">Aree operative</span>
        <div className="split-page-hero__panel-list">
          {servicePillars.map((service, index) => (
            <a href={`#${service.slug}`} key={service.slug}>
              <span className="split-page-hero__panel-index">{String(index + 1).padStart(2, "0")}</span>
              <strong>{service.title}</strong>
              <small>{service.eyebrow}</small>
            </a>
          ))}
        </div>
      </SplitPageHero>

      <section className="page-section departments-section">
        <ServiceFeatureCarousel services={carouselServices} />
      </section>

      <section className="page-section department-ledger">
        <div className="department-ledger__head">
          <p className="eyebrow">Materiali e processo</p>
          <h2>La richiesta giusta parte da misure, supporti, tempi e luogo.</h2>
        </div>
        <div className="department-ledger__rows">
          {servicePillars.map((service, index) => (
            <Reveal className="department-ledger__row" id={service.slug} key={service.slug} delay={index * 0.04}>
              <span>{service.eyebrow}</span>
              <h3>{service.title}</h3>
              <p>{service.capabilities.slice(0, 3).join(" / ")}</p>
              <MotionLink href={service.href} className="text-link">
                Apri scheda tecnica <ArrowRight size={16} aria-hidden="true" />
              </MotionLink>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
