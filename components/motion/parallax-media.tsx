"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import type { ImageAsset } from "@/data/site";

type ParallaxMediaFrameProps = {
  image: ImageAsset;
  priority?: boolean;
  className?: string;
  sizes?: string;
  amount?: number;
};

export function ParallaxMediaFrame({
  image,
  priority = false,
  className = "",
  sizes = "(min-width: 900px) 50vw, 100vw",
  amount = 42,
}: ParallaxMediaFrameProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0px", "0px"] : [`-${amount}px`, `${amount}px`],
  );

  return (
    <div ref={ref} className={`media-frame ${className}`}>
      <motion.div className="media-frame__parallax" style={{ y, scale: shouldReduceMotion ? 1 : 1.08 }}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          sizes={sizes}
          className="media-frame__image"
        />
      </motion.div>
    </div>
  );
}
