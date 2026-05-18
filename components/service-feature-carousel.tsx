"use client";

import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, Factory, PackageOpen, Truck, Wrench } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import { MotionLink } from "@/components/motion/motion-link";
import type { Service } from "@/data/site";

type ServiceFeatureItem = Omit<Service, "icon">;

type ServiceFeatureCarouselProps = {
  services: ServiceFeatureItem[];
};

const AUTO_PLAY_DELAY = 5200;
const ITEM_HEIGHT = 86;
const iconByServiceSlug = {
  "accessori-di-scena": PackageOpen,
  "allestimenti-scenografici": Wrench,
  "pubblicita-dinamica": Truck,
  "stampa-digitale": Factory,
};
const tabLabelByServiceSlug = {
  "accessori-di-scena": "Accessori di scena",
  "allestimenti-scenografici": "Allestimenti",
  "pubblicita-dinamica": "Wrapping",
  "stampa-digitale": "Stampa digitale",
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

export function ServiceFeatureCarousel({ services }: ServiceFeatureCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const activeService = services[activeIndex];

  const goTo = useCallback(
    (nextIndex: number) => {
      setActiveIndex(wrapIndex(nextIndex, services.length));
    },
    [services.length],
  );

  const goNext = useCallback(() => {
    goTo(activeIndex + 1);
  }, [activeIndex, goTo]);

  const goPrevious = useCallback(() => {
    goTo(activeIndex - 1);
  }, [activeIndex, goTo]);

  useEffect(() => {
    if (isPaused || shouldReduceMotion || services.length < 2) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => wrapIndex(current + 1, services.length));
    }, AUTO_PLAY_DELAY);

    return () => window.clearInterval(timer);
  }, [isPaused, services.length, shouldReduceMotion]);

  if (!activeService) {
    return null;
  }

  return (
    <div
      className="service-feature-carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="service-feature-carousel__head">
        <div>
          <p className="eyebrow">Reparti in sequenza</p>
          <h2 id="service-feature-carousel-title">Dal file al supporto, senza cambiare filiera.</h2>
        </div>
        <p>
          Ogni lavoro puo attraversare piu reparti: controllo file, materiali, finitura, trasporto e posa. La lettura
          resta pratica, prima della scheda tecnica.
        </p>
      </div>

      <div className="service-feature-carousel__stage" aria-labelledby="service-feature-carousel-title">
        <div className="service-feature-carousel__tabs" role="tablist" aria-label="Seleziona reparto produttivo">
          <div className="service-feature-carousel__tabs-viewport">
            {services.map((service, index) => {
              const Icon = iconByServiceSlug[service.slug as keyof typeof iconByServiceSlug] ?? Wrench;
              const tabLabel = tabLabelByServiceSlug[service.slug as keyof typeof tabLabelByServiceSlug] ?? service.title;
              const isActive = index === activeIndex;
              const distance = getWrappedDistance(index, activeIndex, services.length);

              return (
                <motion.button
                  animate={{
                    opacity: shouldReduceMotion ? 1 : Math.max(0.42, 1 - Math.abs(distance) * 0.18),
                    scale: shouldReduceMotion || !isActive ? 1 : 1.015,
                    y: shouldReduceMotion ? 0 : distance * ITEM_HEIGHT,
                  }}
                  aria-controls="service-feature-carousel-panel"
                  aria-selected={isActive}
                  className={isActive ? "is-active" : ""}
                  id={`service-feature-carousel-tab-${service.slug}`}
                  key={service.slug}
                  onClick={() => goTo(index)}
                  role="tab"
                  transition={{ type: "spring", stiffness: 120, damping: 24, mass: 0.9 }}
                  type="button"
                >
                  <span className="service-feature-carousel__index">{String(index + 1).padStart(2, "0")}</span>
                  <span className="service-feature-carousel__icon">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <span>
                    <strong>{tabLabel}</strong>
                    <small>{service.eyebrow}</small>
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>

        <div
          aria-labelledby={`service-feature-carousel-tab-${activeService.slug}`}
          className="service-feature-carousel__panel"
          id="service-feature-carousel-panel"
          role="tabpanel"
        >
          <div className="service-feature-carousel__card-stage">
            {services.map((service, index) => {
              const distance = getWrappedDistance(index, activeIndex, services.length);
              const isActive = index === activeIndex;
              const isAdjacent = Math.abs(distance) === 1;

              return (
                <motion.article
                  animate={{
                    opacity: shouldReduceMotion ? (isActive ? 1 : 0) : isActive ? 1 : isAdjacent ? 0.42 : 0,
                    pointerEvents: isActive ? "auto" : "none",
                    rotate: shouldReduceMotion ? 0 : isActive ? 0 : distance < 0 ? -2.6 : 2.6,
                    scale: shouldReduceMotion ? 1 : isActive ? 1 : isAdjacent ? 0.88 : 0.78,
                    x: shouldReduceMotion ? 0 : isActive ? 0 : distance < 0 ? -92 : 92,
                    zIndex: isActive ? 3 : isAdjacent ? 2 : 1,
                  }}
                  aria-hidden={!isActive}
                  className="service-feature-carousel__card"
                  key={service.slug}
                  transition={{ type: "spring", stiffness: 260, damping: 28, mass: 0.85 }}
                >
                  <div className="service-feature-carousel__image">
                    <Image
                      alt={service.image.alt}
                      fill
                      sizes="(min-width: 1000px) 42vw, 100vw"
                      src={service.image.src}
                    />
                  </div>
                  <div className="service-feature-carousel__copy">
                    <span>
                      {String(index + 1).padStart(2, "0")} / {service.eyebrow}
                    </span>
                    <h3>{service.title}</h3>
                    <p>{service.summary}</p>
                    <ul aria-label={`Capacita principali per ${service.title}`}>
                      {service.capabilities.slice(0, 4).map((capability) => (
                        <li key={capability}>{capability}</li>
                      ))}
                    </ul>
                    <MotionLink className="text-link" href={service.href} tabIndex={isActive ? 0 : -1}>
                      Apri scheda tecnica <ArrowRight size={16} aria-hidden="true" />
                    </MotionLink>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <div className="service-feature-carousel__controls" aria-label="Navigazione reparti">
            <button aria-label="Reparto precedente" onClick={goPrevious} type="button">
              <ChevronLeft size={18} aria-hidden="true" />
            </button>
            <button aria-label="Reparto successivo" onClick={goNext} type="button">
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
