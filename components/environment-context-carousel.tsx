"use client";

import Image from "next/image";
import { ArrowRight, Building2, ChevronLeft, ChevronRight, Clapperboard, GalleryHorizontalEnd, Megaphone } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import { MotionLink } from "@/components/motion/motion-link";
import type { Sector } from "@/data/site";

type EnvironmentContextItem = Omit<Sector, "icon">;

type EnvironmentContextCarouselProps = {
  sectors: EnvironmentContextItem[];
};

const AUTO_PLAY_DELAY = 5600;

const iconBySectorSlug = {
  "eventi-fiere-congressi": Megaphone,
  "musei-mostre": GalleryHorizontalEnd,
  "retail-spazi-commerciali": Building2,
  "tv-cinema": Clapperboard,
};

function wrapIndex(index: number, length: number) {
  return ((index % length) + length) % length;
}

function getWrappedDistance(index: number, currentIndex: number, length: number) {
  let distance = index - currentIndex;

  if (distance > length / 2) {
    distance -= length;
  }

  if (distance < -length / 2) {
    distance += length;
  }

  return distance;
}

export function EnvironmentContextCarousel({ sectors }: EnvironmentContextCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const activeSector = sectors[activeIndex];

  const goTo = useCallback(
    (nextIndex: number) => {
      setActiveIndex(wrapIndex(nextIndex, sectors.length));
    },
    [sectors.length],
  );

  const goNext = useCallback(() => {
    goTo(activeIndex + 1);
  }, [activeIndex, goTo]);

  const goPrevious = useCallback(() => {
    goTo(activeIndex - 1);
  }, [activeIndex, goTo]);

  useEffect(() => {
    if (isPaused || shouldReduceMotion || sectors.length < 2) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => wrapIndex(current + 1, sectors.length));
    }, AUTO_PLAY_DELAY);

    return () => window.clearInterval(timer);
  }, [isPaused, sectors.length, shouldReduceMotion]);

  if (!activeSector) {
    return null;
  }

  return (
    <div
      className="environment-carousel"
      onBlur={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="environment-carousel__rail" role="tablist" aria-label="Seleziona contesto">
        {sectors.map((sector, index) => {
          const Icon = iconBySectorSlug[sector.slug as keyof typeof iconBySectorSlug] ?? Clapperboard;
          const isActive = index === activeIndex;

          return (
            <motion.button
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: isActive ? 1 : 0.58 }}
              aria-controls="environment-carousel-panel"
              aria-selected={isActive}
              className={isActive ? "is-active" : ""}
              id={`environment-carousel-tab-${sector.slug}`}
              key={sector.slug}
              onClick={() => goTo(index)}
              role="tab"
              transition={{ duration: shouldReduceMotion ? 0 : 0.22 }}
              type="button"
            >
              <span className="environment-carousel__rail-index">{String(index + 1).padStart(2, "0")}</span>
              <span className="environment-carousel__rail-icon">
                <Icon size={18} aria-hidden="true" />
              </span>
              <span>
                <strong>{sector.title}</strong>
                <small>{sector.eyebrow}</small>
              </span>
            </motion.button>
          );
        })}
      </div>

      <div
        aria-labelledby={`environment-carousel-tab-${activeSector.slug}`}
        className="environment-carousel__stage"
        id="environment-carousel-panel"
        role="tabpanel"
      >
        <div className="environment-carousel__visual-stack">
          {sectors.map((sector, index) => {
            const distance = getWrappedDistance(index, activeIndex, sectors.length);
            const isActive = index === activeIndex;
            const isAdjacent = Math.abs(distance) === 1;

            return (
              <motion.div
                animate={{
                  opacity: shouldReduceMotion ? (isActive ? 1 : 0) : isActive ? 1 : isAdjacent ? 0.34 : 0,
                  rotate: shouldReduceMotion ? 0 : isActive ? 0 : distance < 0 ? -2 : 2,
                  scale: shouldReduceMotion ? 1 : isActive ? 1 : isAdjacent ? 0.9 : 0.8,
                  x: shouldReduceMotion ? 0 : isActive ? 0 : distance < 0 ? -62 : 62,
                  zIndex: isActive ? 3 : isAdjacent ? 2 : 1,
                }}
                aria-hidden={!isActive}
                className="environment-carousel__visual-card"
                key={sector.slug}
                transition={{ type: "spring", stiffness: 240, damping: 28, mass: 0.85 }}
              >
                <Image alt={sector.image.alt} fill sizes="(min-width: 1000px) 54vw, 100vw" src={sector.image.src} />
                <span className="environment-carousel__shade" aria-hidden="true" />
              </motion.div>
            );
          })}
        </div>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className={`environment-carousel__copy environment-carousel__copy--${activeSector.slug}`}
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
          key={activeSector.slug}
          transition={{ duration: shouldReduceMotion ? 0 : 0.34, ease: [0.22, 1, 0.36, 1] }}
        >
          <span>
            Scenario {String(activeIndex + 1).padStart(2, "0")} / {activeSector.eyebrow}
          </span>
          <h3>{activeSector.title}</h3>
          <p>{activeSector.summary}</p>
          <ul aria-label={`Vincoli principali per ${activeSector.title}`}>
            {activeSector.needs.map((need) => (
              <li key={need}>{need}</li>
            ))}
          </ul>
          <MotionLink className="text-link" href={activeSector.href}>
            Apri il brief <ArrowRight size={16} aria-hidden="true" />
          </MotionLink>
        </motion.div>

        <div className="environment-carousel__controls" aria-label="Navigazione contesti">
          <button aria-label="Contesto precedente" onClick={goPrevious} type="button">
            <ChevronLeft size={18} aria-hidden="true" />
          </button>
          <button aria-label="Contesto successivo" onClick={goNext} type="button">
            <ChevronRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
