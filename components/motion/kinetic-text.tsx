"use client";

import { motion, useReducedMotion } from "motion/react";
import { easeOut } from "@/components/motion/reveal";

type KineticTextProps = {
  text: string;
  className?: string;
  delay?: number;
};

export function KineticText({ text, className, delay = 0 }: KineticTextProps) {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(" ");
  let runningIndex = 0;

  return (
    <span className={["kinetic-text", className].filter(Boolean).join(" ")} aria-label={text}>
      {words.map((word, wordIndex) => {
        const wordStartIndex = runningIndex;
        runningIndex += word.length + 1;

        return (
          <span className="kinetic-text__word" aria-hidden="true" key={`${text}-${word}-${wordIndex}`}>
            {Array.from(word).map((character, characterIndex) => (
              <motion.span
                className="kinetic-text__char"
                key={`${text}-${word}-${character}-${characterIndex}`}
                initial={shouldReduceMotion ? { opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" } : { opacity: 0, y: "0.62em", rotateX: 54, filter: "blur(3px)" }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-80px 0px -80px 0px" }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.48,
                  delay: shouldReduceMotion ? 0 : delay + (wordStartIndex + characterIndex) * 0.018,
                  ease: easeOut,
                }}
              >
                {character}
              </motion.span>
            ))}
            {wordIndex < words.length - 1 ? <span className="kinetic-text__space" /> : null}
          </span>
        );
      })}
    </span>
  );
}
