"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export const easeOut = [0.22, 1, 0.36, 1] as const;

export const motionDurations = {
  hover: 0.2,
  tap: 0.18,
  section: 0.5,
  hero: 0.56,
} as const;

export const motionStagger = {
  tight: 0.045,
  normal: 0.06,
} as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
  as?: "div" | "section" | "article" | "li" | "span";
};

export function Reveal({ children, className, delay = 0, id, as = "div" }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      id={id}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px 0px -80px 0px" }}
      transition={{
        duration: shouldReduceMotion ? 0 : motionDurations.section,
        delay: shouldReduceMotion ? 0 : delay,
        ease: easeOut,
      }}
    >
      {children}
    </MotionTag>
  );
}

type LineRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  maskClassName?: string;
};

export function LineReveal({ children, className, delay = 0, maskClassName }: LineRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <span className={["motion-line-mask", maskClassName].filter(Boolean).join(" ")}>
      <motion.span
        className={["motion-line", className].filter(Boolean).join(" ")}
        initial={shouldReduceMotion ? { y: "0%", opacity: 1 } : { y: "112%", opacity: 0.96 }}
        whileInView={{ y: "0%", opacity: 1 }}
        viewport={{ once: true, margin: "-80px 0px -80px 0px" }}
        transition={{
          duration: shouldReduceMotion ? 0 : motionDurations.hero,
          delay: shouldReduceMotion ? 0 : delay,
          ease: easeOut,
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}
