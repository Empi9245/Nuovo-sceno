"use client";

import Image from "next/image";
import { type CSSProperties, type PointerEvent, useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { ArrowRight, GalleryHorizontalEnd } from "lucide-react";
import { MotionLink } from "@/components/motion/motion-link";
import { easeOut, motionDurations, motionStagger } from "@/components/motion/reveal";
import { homepageStats } from "@/data/site";

const headlineLines = ["Scenografica", "stampa, set e", "allestimenti", "pronti per la scena."];
const scopeItems = ["Stampa grande formato", "Allestimenti", "Set design", "Accessori di scena"];
const scopeFlapGlyphs = "SCENOGRAFICALABSETMATERIALIPOSA";

export function HomeHero() {
  const ref = useRef<HTMLElement | null>(null);
  const mediaRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? ["0px", "0px"] : ["-18px", "58px"]);
  const copyY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? ["0px", "0px"] : ["0px", "-18px"]);
  const mediaRotateX = useMotionValue(0);
  const mediaRotateY = useMotionValue(0);
  const mediaScale = useMotionValue(1);
  const mediaSpring = { stiffness: 220, damping: 28, mass: 0.5 };
  const mediaStyle = {
    rotateX: useSpring(mediaRotateX, mediaSpring),
    rotateY: useSpring(mediaRotateY, mediaSpring),
    scale: useSpring(mediaScale, mediaSpring),
    transformPerspective: 1000,
  };

  const fadeUp = shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 };
  const reveal = { opacity: 1, y: 0 };

  const handleMediaPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || event.pointerType === "touch" || !mediaRef.current) {
      return;
    }

    const { left, top, width, height } = mediaRef.current.getBoundingClientRect();
    const x = event.clientX - left;
    const y = event.clientY - top;
    const maxRotation = 6;

    mediaRotateX.set(((y - height / 2) / (height / 2)) * -maxRotation);
    mediaRotateY.set(((x - width / 2) / (width / 2)) * maxRotation);
    mediaScale.set(1.025);
  };

  const handleMediaPointerLeave = () => {
    mediaRotateX.set(0);
    mediaRotateY.set(0);
    mediaScale.set(1);
  };

  return (
    <section ref={ref} className="home-hero" aria-labelledby="home-hero-title">
      <motion.div
        className="home-hero__grid"
        aria-hidden="true"
        initial={{ opacity: shouldReduceMotion ? 1 : 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: shouldReduceMotion ? 0 : motionDurations.section, ease: easeOut }}
      />

      <div className="home-hero__shell">
        <motion.div className="home-hero__copy" style={{ y: copyY }}>
          <motion.div
            className="home-hero__eyebrow"
            initial={fadeUp}
            animate={reveal}
            transition={{ duration: shouldReduceMotion ? 0 : 0.46, ease: easeOut }}
          >
            <motion.span
              className="home-hero__eyebrow-line"
              aria-hidden="true"
              initial={{ scaleX: shouldReduceMotion ? 1 : 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: shouldReduceMotion ? 0 : motionDurations.section, ease: easeOut }}
            />
            <p className="eyebrow">Roma / Studi di Cinecittà / Produzione interna</p>
          </motion.div>

          <h1
            id="home-hero-title"
            className="home-hero__title"
            aria-label="Scenografica stampa, set e allestimenti pronti per la scena."
          >
            {headlineLines.map((line, index) => (
              <span className="home-hero__title-mask" aria-hidden="true" key={line}>
                <motion.span
                  className="home-hero__title-line"
                  initial={shouldReduceMotion ? { y: "0%", opacity: 1 } : { y: "112%", opacity: 0.92 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : motionDurations.hero,
                    delay: shouldReduceMotion ? 0 : 0.08 + index * motionStagger.normal,
                    ease: easeOut,
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="home-hero__lead"
            initial={fadeUp}
            animate={reveal}
            transition={{ duration: shouldReduceMotion ? 0 : 0.48, delay: shouldReduceMotion ? 0 : 0.28, ease: easeOut }}
          >
            Produciamo grafiche, pannelli, set, accessori e installazioni per cinema, televisione, eventi, musei e
            spazi commerciali.
          </motion.p>

          <motion.ul
            className="home-hero__scope"
            aria-label="Aree di produzione"
            initial={fadeUp}
            animate={reveal}
            transition={{ duration: shouldReduceMotion ? 0 : 0.46, delay: shouldReduceMotion ? 0 : 0.34, ease: easeOut }}
          >
            {scopeItems.map((item, index) => (
              <li key={item} style={{ "--scope-item": index } as CSSProperties}>
                <span className="home-hero__scope-index">{String(index + 1).padStart(2, "0")}</span>
                <SplitFlapLabel text={item} itemIndex={index} />
              </li>
            ))}
          </motion.ul>

          <div className="home-hero__actions">
            <motion.span
              className="home-hero__action"
              initial={fadeUp}
              animate={reveal}
              transition={{ duration: shouldReduceMotion ? 0 : 0.42, delay: shouldReduceMotion ? 0 : 0.4, ease: easeOut }}
            >
              <MotionLink href="/contatti" className="button button--primary">
                Richiedi un preventivo <ArrowRight size={18} aria-hidden="true" />
              </MotionLink>
            </motion.span>
            <motion.span
              className="home-hero__action"
              initial={fadeUp}
              animate={reveal}
              transition={{ duration: shouldReduceMotion ? 0 : 0.42, delay: shouldReduceMotion ? 0 : 0.47, ease: easeOut }}
            >
              <MotionLink href="/portfolio" className="button button--secondary">
                Guarda i lavori <GalleryHorizontalEnd size={18} aria-hidden="true" />
              </MotionLink>
            </motion.span>
          </div>
        </motion.div>

        <motion.div
          className="home-hero__media"
          initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.018 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: shouldReduceMotion ? 0 : motionDurations.hero,
            delay: shouldReduceMotion ? 0 : 0.1,
            ease: easeOut,
          }}
        >
          <motion.div
            ref={mediaRef}
            className="home-hero__media-plane"
            onPointerMove={handleMediaPointerMove}
            onPointerLeave={handleMediaPointerLeave}
            style={mediaStyle}
          >
            <div className="home-hero__media-index">
            <span>Archivio di produzione a Cinecittà</span>
            <span>Lab / stampa / allestimenti</span>
          </div>
          <motion.div className="home-hero__image-track" style={{ y: imageY }}>
            <Image
              src="/images/laboratorio-cinecitta.jpg"
              alt="Laboratorio Scenografica negli Studi di Cinecittà con stampante grande formato, materiali e tecnici in produzione."
              fill
              priority
              sizes="(min-width: 1100px) 48vw, 100vw"
            />
          </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="home-hero__production-strip"
        aria-label="Punti di forza"
        initial={{ opacity: shouldReduceMotion ? 1 : 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.28, delay: shouldReduceMotion ? 0 : 0.48, ease: easeOut }}
      >
        <motion.span
          className="home-hero__strip-rule"
          aria-hidden="true"
          initial={{ scaleX: shouldReduceMotion ? 1 : 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: shouldReduceMotion ? 0 : motionDurations.section,
            delay: shouldReduceMotion ? 0 : 0.5,
            ease: easeOut,
          }}
        />
        <div className="home-hero__stats">
          {homepageStats.map((stat, index) => (
            <motion.div
              className="home-hero__stat"
              key={stat.label}
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.38,
                delay: shouldReduceMotion ? 0 : 0.66 + index * motionStagger.normal,
                ease: easeOut,
              }}
            >
              <span className="home-hero__stat-index">{String(index + 1).padStart(2, "0")}</span>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function SplitFlapLabel({ text, itemIndex }: { text: string; itemIndex: number }) {
  return (
    <span className="home-hero__scope-label" aria-label={text}>
      {Array.from(text).map((character, index) => {
        if (character === " ") {
          return <span className="home-hero__scope-gap" aria-hidden="true" key={`${text}-gap-${index}`} />;
        }

        const style = { "--scope-char": index } as CSSProperties;

        return (
          <span className="home-hero__scope-char" aria-hidden="true" key={`${text}-${character}-${index}`} style={style}>
            <span className="home-hero__scope-char-base">{character}</span>
            <span className="home-hero__scope-reel">
              <span className="home-hero__scope-reel-hidden">{character}</span>
              <span>{character}</span>
            </span>
          </span>
        );
      })}
    </span>
  );
}
