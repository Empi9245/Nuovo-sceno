import type { Metadata } from "next";
import { CtaSection } from "@/components/cta-section";
import { PortfolioCursor } from "@/components/portfolio-cursor";
import { PortfolioFilter } from "@/components/portfolio-filter";
import { PortfolioHero, PortfolioMarquee } from "@/components/portfolio-hero";
import { portfolioProjects } from "@/data/site";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Portfolio Scenografica con immagini reali del laboratorio, della stampa grande formato, degli allestimenti e della pubblicita dinamica.",
};

export default function PortfolioPage() {
  const featured = portfolioProjects[0];

  return (
    <div className="portfolio-page">
      <PortfolioCursor />
      <PortfolioHero
        eyebrow="Portfolio"
        titleLead="Archivio visivo di materiali, macchine e lavori"
        titleAccent="reali."
        summary="Una galleria fotografica iniziale costruita sulle immagini reali del progetto. Ogni voce resta leggibile come record produttivo: area, servizio e contesto d'uso."
        image={featured.image}
        imagePosition="52% 46%"
        mobileImagePosition="56% 50%"
        caption={{
          label: featured.category,
          title: featured.title,
        }}
        projects={portfolioProjects}
      />

      <PortfolioMarquee projects={portfolioProjects} />

      <section className="page-section archive-section">
        <PortfolioFilter projects={portfolioProjects} />
      </section>

      <CtaSection />
    </div>
  );
}
