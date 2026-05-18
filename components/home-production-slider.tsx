"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { animate, motion, useMotionValue, useReducedMotion } from "motion/react";
import { type MouseEvent, useEffect, useMemo, useRef, useState } from "react";
import { MotionCardLink } from "@/components/motion/motion-link";
import type { PortfolioProject } from "@/data/site";

type HomeProductionSliderProps = {
  projects: PortfolioProject[];
};

export function HomeProductionSlider({ projects }: HomeProductionSliderProps) {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const didDragRef = useRef(false);
  const x = useMotionValue(0);
  const shouldReduceMotion = useReducedMotion();
  const [dragLimit, setDragLimit] = useState(0);
  const [segmentWidth, setSegmentWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const loopedProjects = useMemo(() => [...projects, ...projects], [projects]);

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) {
      return;
    }

    const updateDragLimit = () => {
      const nextSegmentWidth = track.scrollWidth / 2;
      const nextLimit = Math.max(nextSegmentWidth, 0);
      setSegmentWidth(nextSegmentWidth);
      setDragLimit(nextLimit);
      x.set(normalizeX(x.get(), nextSegmentWidth));
    };

    updateDragLimit();

    const resizeObserver = new ResizeObserver(updateDragLimit);
    resizeObserver.observe(viewport);
    resizeObserver.observe(track);

    return () => resizeObserver.disconnect();
  }, [loopedProjects.length, x]);

  useEffect(() => {
    if (isDragging || shouldReduceMotion || segmentWidth <= 0) {
      return;
    }

    let frameId = 0;
    let previousTime = performance.now();
    const speed = 34;

    const tick = (time: number) => {
      const elapsedSeconds = (time - previousTime) / 1000;
      previousTime = time;
      x.set(normalizeX(x.get() - elapsedSeconds * speed, segmentWidth));
      frameId = window.requestAnimationFrame(tick);
    };

    frameId = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(frameId);
  }, [isDragging, segmentWidth, shouldReduceMotion, x]);

  function scrollTrack(direction: "left" | "right") {
    const viewport = viewportRef.current;
    if (!viewport) {
      return;
    }

    const currentX = x.get();
    const scrollAmount = viewport.offsetWidth * 0.82;
    const nextX = direction === "left" ? currentX + scrollAmount : currentX - scrollAmount;
    const clampedX = normalizeX(nextX, segmentWidth || dragLimit);

    animate(x, clampedX, {
      type: "spring",
      stiffness: 260,
      damping: 32,
      mass: 0.8,
    });
  }

  function handleDragStart() {
    didDragRef.current = true;
    setIsDragging(true);
  }

  function handleDragEnd() {
    x.set(normalizeX(x.get(), segmentWidth || dragLimit));
    setIsDragging(false);
    window.setTimeout(() => {
      didDragRef.current = false;
    }, 80);
  }

  function handleCardClick(event: MouseEvent<HTMLAnchorElement>) {
    if (didDragRef.current) {
      event.preventDefault();
    }
  }

  return (
    <div className="home-production-slider">
      <div className="home-production-slider__controls" aria-label="Navigazione archivio in home">
        <button aria-label="Scorri lavori precedenti" onClick={() => scrollTrack("left")} type="button">
          <ArrowLeft size={18} aria-hidden="true" />
        </button>
        <button aria-label="Scorri lavori successivi" onClick={() => scrollTrack("right")} type="button">
          <ArrowRight size={18} aria-hidden="true" />
        </button>
      </div>

      <motion.div
        className="home-production-slider__viewport"
        ref={viewportRef}
        whileTap={shouldReduceMotion ? undefined : { cursor: "grabbing" }}
      >
        <motion.div
        className="home-production-slider__track"
        drag={dragLimit > 0 ? "x" : false}
        dragConstraints={{ left: -dragLimit, right: 0 }}
        dragElastic={0.08}
        onDragEnd={handleDragEnd}
        onDragStart={handleDragStart}
        ref={trackRef}
        style={{ x }}
      >
          {loopedProjects.map((project, index) => (
            <motion.article
              className="home-production-slider__item"
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
              key={`${project.slug}-${index}`}
              transition={{ duration: shouldReduceMotion ? 0 : 0.42, delay: shouldReduceMotion ? 0 : index * 0.045 }}
              viewport={{ once: true, margin: "-80px" }}
              whileHover={shouldReduceMotion ? undefined : { y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <MotionCardLink
                ariaLabel={`Apri il dossier ${project.title}`}
                className="home-production-slider__card"
                draggable={false}
                href={project.href}
                onClick={handleCardClick}
                tilt={false}
              >
                <div className="home-production-slider__image">
                  <Image
                    alt={project.image.alt}
                    draggable={false}
                    fill
                    sizes="(min-width: 1000px) 32vw, 82vw"
                    src={project.image.src}
                  />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div className="home-production-slider__overlay" aria-hidden="true">
                    <strong>Apri dossier</strong>
                  </div>
                </div>
                <div className="home-production-slider__body">
                  <div className="home-production-slider__meta">
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <span className="text-link">
                    Apri dossier <ArrowUpRight size={16} aria-hidden="true" />
                  </span>
                </div>
              </MotionCardLink>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

function normalizeX(value: number, width: number) {
  if (width <= 0) {
    return 0;
  }

  let nextValue = value;

  while (nextValue <= -width) {
    nextValue += width;
  }

  while (nextValue > 0) {
    nextValue -= width;
  }

  return nextValue;
}
