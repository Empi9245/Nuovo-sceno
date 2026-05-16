"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { MotionCardLink } from "@/components/motion/motion-link";
import type { PortfolioProject } from "@/data/site";

type PortfolioFilterProps = {
  projects: PortfolioProject[];
};

export function PortfolioFilter({ projects }: PortfolioFilterProps) {
  const [active, setActive] = useState("Tutti");
  const shouldReduceMotion = useReducedMotion();
  const categories = useMemo(() => ["Tutti", ...Array.from(new Set(projects.map((project) => project.category)))], [projects]);
  const filtered = active === "Tutti" ? projects : projects.filter((project) => project.category === active);

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
              <MotionCardLink href={project.href} className="archive-card" ariaLabel={`Apri dossier ${project.title}`}>
                <div className="archive-card__image">
                  <Image src={project.image.src} alt={project.image.alt} fill sizes="(min-width: 1000px) 34vw, 100vw" />
                  <span className="archive-card__overlay" aria-hidden="true" />
                  <span className="archive-card__arrow" aria-hidden="true">
                    <ArrowUpRight size={20} />
                  </span>
                </div>
                <div className="archive-card__body">
                  <div className="archive-card__meta">
                    <h3>{project.title}</h3>
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                  </div>
                  <p>{project.summary}</p>
                </div>
              </MotionCardLink>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
