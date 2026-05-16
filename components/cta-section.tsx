import { ArrowRight } from "lucide-react";
import { MotionLink } from "@/components/motion/motion-link";
import { Reveal } from "@/components/motion/reveal";

type CtaSectionProps = {
  title?: string;
  text?: string;
};

export function CtaSection({
  title = "Hai un progetto da mettere in produzione?",
  text = "Raccontaci formato, tempi, luogo e materiali disponibili. Ti aiutiamo a capire il percorso più concreto per arrivare alla scena.",
}: CtaSectionProps) {
  return (
    <section className="cta-section">
      <Reveal>
        <p className="eyebrow">Preventivo</p>
        <h2>{title}</h2>
        <p>{text}</p>
      </Reveal>
      <Reveal delay={0.12}>
        <MotionLink href="/contatti" className="button button--primary">
          Parla con Scenografica <ArrowRight size={18} aria-hidden="true" />
        </MotionLink>
      </Reveal>
    </section>
  );
}
