"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { MotionLink } from "@/components/motion/motion-link";
import type { PortfolioProject } from "@/data/site";

type PortfolioFilterProps = {
  projects: PortfolioProject[];
};

export function PortfolioFilter({ projects }: PortfolioFilterProps) {
  const [active, setActive] = useState("Tutti");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const categories = useMemo(() => ["Tutti", ...Array.from(new Set(projects.map((project) => project.category)))], [projects]);
  const filtered = active === "Tutti" ? projects : projects.filter((project) => project.category === active);
  const selectedProject = selectedIndex === null ? null : filtered[selectedIndex] ?? null;

  function closeLightbox() {
    setSelectedIndex(null);
  }

  function goToLightboxProject(direction: "previous" | "next") {
    setSelectedIndex((current) => {
      if (current === null || filtered.length === 0) {
        return current;
      }

      const delta = direction === "previous" ? -1 : 1;
      return (current + delta + filtered.length) % filtered.length;
    });
  }

  useEffect(() => {
    if (selectedIndex !== null && selectedIndex >= filtered.length) {
      setSelectedIndex(filtered.length > 0 ? 0 : null);
    }
  }, [filtered.length, selectedIndex]);

  useEffect(() => {
    if (!selectedProject) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        goToLightboxProject("previous");
      }

      if (event.key === "ArrowRight") {
        goToLightboxProject("next");
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [filtered.length, selectedProject]);

  return (
    <section className="portfolio-filter visual-archive" aria-label="Portfolio filtrabile">
      <div className="visual-archive__toolbar">
        <p>
          Archivio fotografico con lavori reali, organizzato per area produttiva. Le immagini restano il primo livello
          di lettura, i metadati servono a capire contesto e responsabilita.
        </p>
        <div className="filter-bar" role="tablist" aria-label="Filtra lavori per categoria">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={active === category}
            className={active === category ? "is-active" : ""}
            onClick={() => setActive(category)}
          >
            {category}
          </button>
        ))}
        </div>
      </div>

      <motion.div className="archive-grid" layout>
        <AnimatePresence mode="popLayout">
          {filtered.map((project, index) => (
            <motion.div
              key={project.slug}
              layout
              className={`archive-card-wrap archive-card-wrap--${(index % 4) + 1}`}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <article className="archive-card">
                <button
                  aria-label={`Apri immagine ${project.title} in galleria`}
                  className="archive-card__image archive-card__image-button"
                  onClick={() => setSelectedIndex(index)}
                  type="button"
                >
                  <Image src={project.image.src} alt={project.image.alt} fill sizes="(min-width: 1000px) 34vw, 100vw" />
                  <span className="archive-card__overlay" aria-hidden="true" />
                  <span className="archive-card__arrow" aria-hidden="true">
                    <ZoomIn size={20} />
                  </span>
                </button>
                <div className="archive-card__body">
                  <div className="archive-card__meta">
                    <h3>{project.title}</h3>
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                  </div>
                  <p>{project.summary}</p>
                  <MotionLink href={project.href} className="text-link">
                    Apri dossier <ArrowUpRight size={16} aria-hidden="true" />
                  </MotionLink>
                </div>
              </article>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selectedProject ? (
          <motion.div
            animate={{ opacity: 1 }}
            aria-labelledby="portfolio-lightbox-title"
            aria-modal="true"
            className="portfolio-lightbox"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            onClick={closeLightbox}
            role="dialog"
            transition={{ duration: shouldReduceMotion ? 0 : 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="portfolio-lightbox__dialog"
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
              onClick={(event) => event.stopPropagation()}
              transition={{ duration: shouldReduceMotion ? 0 : 0.34, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                aria-label="Chiudi galleria portfolio"
                className="portfolio-lightbox__close"
                onClick={closeLightbox}
                type="button"
              >
                <X size={20} aria-hidden="true" />
              </button>

              {filtered.length > 1 ? (
                <div className="portfolio-lightbox__controls" aria-label="Navigazione immagini portfolio">
                  <button aria-label="Immagine precedente" onClick={() => goToLightboxProject("previous")} type="button">
                    <ChevronLeft size={22} aria-hidden="true" />
                  </button>
                  <button aria-label="Immagine successiva" onClick={() => goToLightboxProject("next")} type="button">
                    <ChevronRight size={22} aria-hidden="true" />
                  </button>
                </div>
              ) : null}

              <div className="portfolio-lightbox__image">
                <Image
                  alt={selectedProject.image.alt}
                  fill
                  sizes="(min-width: 1000px) 78vw, 94vw"
                  src={selectedProject.image.src}
                />
              </div>

              <div className="portfolio-lightbox__caption">
                <span>
                  {selectedProject.category} / {selectedProject.year}
                </span>
                <h3 id="portfolio-lightbox-title">{selectedProject.title}</h3>
                <p>{selectedProject.summary}</p>
                <MotionLink href={selectedProject.href} className="text-link">
                  Apri dossier <ArrowUpRight size={16} aria-hidden="true" />
                </MotionLink>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
