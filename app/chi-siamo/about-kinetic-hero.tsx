"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { animate, motion, type MotionStyle, useMotionValue, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "motion/react";
import { easeOut } from "@/components/motion/reveal";
import type { ImageAsset } from "@/data/site";

type AboutKineticHeroProps = {
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  summary: string;
  image: ImageAsset;
};

const COLLAPSE_EASE = [0.16, 1, 0.3, 1] as const;

export function AboutKineticHero({
  eyebrow,
  titleLead,
  titleAccent,
  summary,
  image,
}: AboutKineticHeroProps) {
  const ref = useRef<HTMLElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const [collapsed, setCollapsed] = useState(false);
  const colorProgress = useMotionValue(1);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setCollapsed(latest > 40);
  });

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const visualY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? ["0px", "0px"] : ["38px", "-118px"]);
  const titleY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? ["0px", "0px"] : ["-38px", "118px"]);
  const imageY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? ["0px", "0px"] : ["-18px", "22px"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [1.045, 1.045] : [1.035, 1.12]);
  const dotOpacity = useTransform(scrollYProgress, [0, 0.45, 1], shouldReduceMotion ? [0.24, 0.24, 0.24] : [0.18, 0.46, 0.3]);
  const dotY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? ["0px", "0px"] : ["-10px", "18px"]);
  const title = `${titleLead} ${titleAccent}`.trim();
  const colorTransition = useMemo(
    () => (shouldReduceMotion ? { duration: 0 } : { duration: 0.85, ease: COLLAPSE_EASE }),
    [shouldReduceMotion],
  );
  const frameTransition = useMemo(
    () =>
      shouldReduceMotion
        ? { duration: 0 }
        : collapsed
          ? {
              clipPath: { duration: 0.95, ease: COLLAPSE_EASE },
              opacity: { duration: 0.22, delay: 0.72, ease: COLLAPSE_EASE },
            }
          : {
              clipPath: { duration: 0.85, ease: COLLAPSE_EASE },
              opacity: { duration: 0.18, ease: COLLAPSE_EASE },
            },
    [collapsed, shouldReduceMotion],
  );
  const titleMaskTransition = useMemo(
    () => (shouldReduceMotion ? { duration: 0 } : { duration: 0.5, ease: COLLAPSE_EASE }),
    [shouldReduceMotion],
  );

  useEffect(() => {
    setCollapsed(window.scrollY > 40);
  }, []);

  useEffect(() => {
    const controls = animate(colorProgress, collapsed ? 0 : 1, colorTransition);

    return () => controls.stop();
  }, [collapsed, colorProgress, colorTransition]);

  const reveal = {
    initial: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px 0px -80px 0px" },
    transition: { duration: shouldReduceMotion ? 0 : 1, ease: easeOut },
  };

  return (
    <section ref={ref} className="about-kinetic-hero">
      <div className="about-kinetic-hero__ink">
        <motion.div
          className="about-kinetic-hero__visual"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: shouldReduceMotion ? 0 : 1, delay: 0.22, ease: easeOut }}
        >
          <motion.div
            className="about-kinetic-hero__clip-frame"
            animate={{
              clipPath: collapsed ? "inset(50% 50% 50% 50% round 18px)" : "inset(0% 0% 0% 0% round 0px)",
              opacity: collapsed ? 0 : 1,
            }}
            transition={frameTransition}
          >
            <motion.div className="about-kinetic-hero__visual-media" style={{ y: imageY, scale: imageScale }}>
              <Image src={image.src} alt={image.alt} fill priority sizes="100vw" />
            </motion.div>
            <motion.span className="about-kinetic-hero__dot-screen" aria-hidden="true" style={{ opacity: dotOpacity, y: dotY }} />
          </motion.div>
        </motion.div>

        <div className="about-kinetic-hero__inner">
          <motion.div className="about-kinetic-hero__eyebrow" {...reveal}>
            <span aria-hidden="true" />
            <p className="eyebrow">{eyebrow}</p>
          </motion.div>

          <div className="about-kinetic-hero__stage">
            <motion.div className="about-kinetic-hero__copy" {...reveal} transition={{ ...reveal.transition, delay: 0.08 }}>
              <motion.h1
                className="about-kinetic-hero__title"
                aria-label={title}
                style={{ "--color-progress": colorProgress } as MotionStyle}
              >
                <span className="about-kinetic-hero__title-main">{titleLead}</span>
                <span className="about-kinetic-hero__title-accent">{titleAccent}</span>
              </motion.h1>
              <p className="about-kinetic-hero__summary">{summary}</p>
            </motion.div>

            <motion.div
              className="about-kinetic-hero__type-mask"
              aria-hidden="true"
              style={{ y: visualY }}
              animate={{ opacity: collapsed ? 0 : 1 }}
              transition={titleMaskTransition}
            >
              <motion.h1 className="about-kinetic-hero__image-title" aria-hidden="true" style={{ y: titleY }}>
                <span className="about-kinetic-hero__title-main">{titleLead}</span>
                <span className="about-kinetic-hero__title-accent">{titleAccent}</span>
              </motion.h1>
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
}
