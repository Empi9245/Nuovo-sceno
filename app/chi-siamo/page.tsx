import Image from "next/image";
import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { CtaSection } from "@/components/cta-section";
import { KineticText } from "@/components/motion/kinetic-text";
import { MotionLink } from "@/components/motion/motion-link";
import { ParallaxMediaFrame } from "@/components/motion/parallax-media";
import { Reveal } from "@/components/motion/reveal";
import { clients, trustPoints } from "@/data/site";
import { AboutKineticHero } from "./about-kinetic-hero";

export const metadata: Metadata = {
  title: "Chi siamo",
  description:
    "Scenografica e un laboratorio di stampa grande formato e set design presso gli Studi di Cinecitta a Roma.",
};

const productionPath = [
  "Brief, reference e vincoli di scena",
  "Scelta di materiali, scala e finiture",
  "Produzione interna tra stampa e costruzione",
  "Consegna, posa e verifica nello spazio",
];

const aboutStats = [
  { label: "Attivita", value: "10+ anni", detail: "Esperienza su produzioni grafiche, scenografiche e installazioni fisiche." },
  { label: "Sede operativa", value: "Cinecitta", detail: "Una posizione utile per dialogare con set, reparti artistici e produzione." },
  { label: "Montaggi", value: "Italia", detail: "Consegne e posa seguono il progetto fuori dal laboratorio." },
  { label: "Indirizzo", value: "Via Tuscolana 1055", detail: "Un luogo reale dove portare brief, reference, materiali e urgenze." },
];

const aboutRoute = ["Brief", "Materiali", "Produzione", "Montaggio"];

const galleryImages = [
  {
    src: "/images/montaggio-pannello-spazio-eventi.jpg",
    alt: "Tecnici durante il montaggio di un pannello grafico in uno spazio interno per allestimento.",
    caption: "Montaggio e verifica del supporto in ambiente di posa.",
  },
  {
    src: "/images/wall-graphics-spazio-sportivo.jpg",
    alt: "Grande murale fotografico applicato su parete in uno spazio sportivo.",
    caption: "Wall graphics e superfici finite nel contesto reale.",
  },
];

export default function AboutPage() {
  return (
    <div className="about-editorial-page">
      <AboutKineticHero
        eyebrow="Chi siamo"
        titleLead="Un laboratorio romano dove grafica e scena diventano"
        titleAccent="materia."
        summary="Scenografica lavora dentro una filiera fisica: file, supporti, macchine, tecnici, trasporto e montaggio. La sede presso Cinecitta rende naturale il dialogo con produzioni, set e reparti artistici."
        image={{
          src: "/images/ingresso-cinecitta-sera.jpg",
          alt: "Ingresso degli Studi di Cinecitta al tramonto, sede operativa del laboratorio Scenografica.",
        }}
      />

      <section className="about-stat-band" aria-label="Dati sintetici su Scenografica">
        <div className="about-stat-band__shell">
          <Reveal className="about-stat-band__intro">
            <p className="eyebrow">Dossier rapido</p>
            <h2>
              <KineticText text="Non numeri isolati, ma prove di laboratorio." delay={0.04} />
            </h2>
            <p>
              La pagina chi-siamo deve leggere come una scheda di affidabilita: luogo, tempi, metodo e lavoro fisico.
            </p>
          </Reveal>
          <div className="about-stat-band__grid">
            {aboutStats.map((stat, index) => (
              <Reveal as="article" className="about-stat-band__cell" key={stat.label} delay={index * 0.08}>
                <span className="about-stat-band__index">{String(index + 1).padStart(2, "0")}</span>
                <span className="about-stat-band__label">
                  <KineticText text={stat.label} delay={0.12 + index * 0.04} />
                </span>
                <strong>
                  <KineticText text={stat.value} delay={0.22 + index * 0.06} />
                </strong>
                <p>{stat.detail}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="about-stat-band__route" delay={0.08}>
            <span>Dal brief alla scena</span>
            <ol>
              {aboutRoute.map((step, index) => (
                <li key={step} style={{ "--about-route-index": index } as CSSProperties}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {step}
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="page-section about-editorial-block about-editorial-block--method">
        <Reveal className="about-editorial-block__index">
          <span>01</span>
          <h2>Metodo</h2>
        </Reveal>
        <div className="about-editorial-block__body">
          <Reveal className="about-editorial-block__lead">
            <p>Dal brief alla scena, senza separare tecnica e immaginario.</p>
          </Reveal>
          <Reveal className="about-editorial-block__copy" delay={0.06}>
            <p>
              La credibilita nasce dalla prossimita tra stampa digitale, lavorazioni grafiche, costruzione scenografica e
              posa. Ogni passaggio resta collegato al luogo in cui il lavoro verra visto.
            </p>
          </Reveal>
          <div className="workshop-path__grid about-workshop-grid">
            {productionPath.map((item, index) => (
              <Reveal className="workshop-path__step about-workshop-grid__step" key={item} delay={index * 0.1}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </Reveal>
            ))}
          </div>
          <MotionLink href="/servizi" className="about-editorial-link">
            Vedi le aree operative <ArrowRight size={17} aria-hidden="true" />
          </MotionLink>
        </div>
      </section>

      <section className="page-section page-section--tight about-panorama">
        <Reveal className="about-panorama__shell">
          <ParallaxMediaFrame
            image={{
              src: "/images/installazione-grafica-scenografica-notte.jpg",
              alt: "Installazione grafica Scenografica illuminata in esterno, vista su larga scala.",
            }}
            className="about-panorama__media"
            sizes="100vw"
            amount={34}
          />
          <p>Grafica applicata e installata nel contesto reale.</p>
        </Reveal>
      </section>

      <section className="page-section page-section--dark about-editorial-block about-editorial-block--proof">
        <Reveal className="about-editorial-block__index">
          <span>02</span>
          <h2>Credibilita</h2>
        </Reveal>
        <div className="about-editorial-block__body">
          <Reveal className="about-editorial-block__lead">
            <p>Perche una produzione sceglie Scenografica.</p>
          </Reveal>
          <Reveal className="about-editorial-block__copy" delay={0.06}>
            <p>
              Il sito deve mostrare capacita operativa, non solo raccontarla. Qui sede, clienti e metodo diventano una
              scheda di affidabilita.
            </p>
          </Reveal>
          <div className="about-trust-ledger">
            {trustPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <Reveal as="article" className="about-trust-ledger__item" key={point.title} delay={index * 0.1}>
                  <span>{point.number}</span>
                  <Icon size={22} aria-hidden="true" />
                  <div>
                    <h3>{point.title}</h3>
                    <p>{point.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <div className="client-strip about-client-strip" aria-label="Clienti e produzioni citati">
            {clients.map((client) => (
              <span key={client}>{client}</span>
            ))}
          </div>
          <MotionLink href="/portfolio" className="about-editorial-link about-editorial-link--dark">
            Guarda l'archivio lavori <ArrowRight size={17} aria-hidden="true" />
          </MotionLink>
        </div>
      </section>

      <section className="page-section about-gallery" aria-label="Immagini del laboratorio e dei lavori realizzati">
        <div className="about-gallery__grid">
          {galleryImages.map((image, index) => (
            <Reveal className="about-gallery__item" key={image.src} delay={index * 0.1}>
              <Image src={image.src} alt={image.alt} fill sizes="(min-width: 900px) 46vw, 100vw" />
              <span className="about-gallery__shade" aria-hidden="true" />
              <span className="about-gallery__caption">{image.caption}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="page-section about-bridge about-bridge--editorial">
        <div>
          <p className="eyebrow">Prossimo passo</p>
          <h2>Porta un brief in laboratorio.</h2>
        </div>
        <p>
          Da un file tecnico, da un riferimento fotografico o da una necessita di scena possiamo costruire un percorso
          operativo.
        </p>
        <MotionLink href="/contatti" className="button button--primary">
          Apri una richiesta <ArrowRight size={18} aria-hidden="true" />
        </MotionLink>
      </section>

      <CtaSection title="Hai bisogno di un laboratorio operativo?" text="Raccontaci tempi, luogo, materiali e vincoli. La risposta utile parte dal contesto reale." />
    </div>
  );
}
