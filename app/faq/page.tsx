import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { FaqList } from "@/components/faq-list";
import { MotionLink } from "@/components/motion/motion-link";
import { SplitPageHero } from "@/components/split-page-hero";
import { faqCategories } from "@/data/site";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Risposte pratiche sui servizi Scenografica, dai file necessari ai tempi di produzione e montaggio.",
};

export default function FaqPage() {
  return (
    <>
      <SplitPageHero
        className="split-page-hero--manual"
        eyebrow="FAQ"
        titleLead="Manuale rapido prima di mandare un"
        titleAccent="brief."
        summary="Le risposte sono ordinate come una guida operativa: cosa realizziamo, quali file servono, come gestire tempi e montaggi, quando coinvolgere il laboratorio."
        image={{
          src: "/images/team-produzione.jpg",
          alt: "Ufficio Scenografica per coordinamento, accoglienza e gestione dei progetti.",
        }}
        imagePosition="54% 50%"
        mobileImagePosition="55% 50%"
      />

      <section className="page-section page-section--tight faq-manual" id="faq-list" aria-labelledby="faq-manual-title">
        <div className="faq-manual__head">
          <div>
            <p className="eyebrow">Manuale operativo</p>
            <h2 id="faq-manual-title">Risposte ordinate per fase del brief.</h2>
          </div>
          <nav className="faq-manual__nav" aria-label="Categorie FAQ">
            {faqCategories.map((category, index) => (
              <a href={`#manual-${index + 1}`} key={category}>
                {category}
              </a>
            ))}
          </nav>
        </div>

        <div className="faq-manual__action">
          <p>Hai gia misure, luogo, tempi o reference? Usa il modulo come una scheda di produzione.</p>
          <MotionLink href="/contatti" className="text-link">
            Apri una richiesta <ArrowRight size={16} aria-hidden="true" />
          </MotionLink>
        </div>

        <FaqList />
      </section>
    </>
  );
}
