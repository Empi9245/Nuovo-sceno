"use client";

import Link from "next/link";
import { motion, type MotionStyle, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import type { CSSProperties, MouseEvent, PointerEvent, ReactNode } from "react";
import { easeOut, motionDurations } from "@/components/motion/reveal";

type MotionLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
  draggable?: boolean;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
  style?: CSSProperties;
  tabIndex?: number;
  hoverY?: number;
  hoverRotate?: number;
  tapScale?: number;
  tilt?: boolean;
  tiltMax?: number;
  tiltScale?: number;
};

const MotionAnchor = motion.create(Link);

function AnimatedLink({
  href,
  children,
  className,
  ariaLabel,
  draggable,
  onClick,
  style,
  tabIndex,
  hoverY = -2,
  hoverRotate = 0,
  tapScale = 0.98,
  tilt = false,
  tiltMax = 5,
  tiltScale = 1.018,
}: MotionLinkProps) {
  const shouldReduceMotion = useReducedMotion();
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const scale = useMotionValue(1);
  const spring = { stiffness: 220, damping: 28, mass: 0.5 };
  const tiltStyle = {
    rotateX: useSpring(rotateX, spring),
    rotateY: useSpring(rotateY, spring),
    scale: useSpring(scale, spring),
    transformPerspective: 1000,
  };
  const hoverState = hoverRotate ? { y: hoverY, rotate: hoverRotate } : { y: hoverY };
  const classNames = tilt ? [className, "motion-tilt-card"].filter(Boolean).join(" ") : className;
  const mergedStyle = tilt ? ({ ...style, ...tiltStyle } as MotionStyle) : style;

  const resetTilt = () => {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
  };

  const handlePointerMove = (event: PointerEvent<HTMLAnchorElement>) => {
    if (!tilt || shouldReduceMotion || event.pointerType === "touch") {
      return;
    }

    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - left;
    const y = event.clientY - top;

    rotateX.set(((y - height / 2) / (height / 2)) * -tiltMax);
    rotateY.set(((x - width / 2) / (width / 2)) * tiltMax);
    scale.set(tiltScale);
  };

  return (
    <MotionAnchor
      href={href}
      aria-label={ariaLabel}
      className={classNames}
      draggable={draggable}
      onClick={onClick}
      style={mergedStyle}
      tabIndex={tabIndex}
      onPointerMove={tilt ? handlePointerMove : undefined}
      onPointerLeave={tilt ? resetTilt : undefined}
      onPointerCancel={tilt ? resetTilt : undefined}
      onBlur={tilt ? resetTilt : undefined}
      whileHover={shouldReduceMotion || tilt ? undefined : hoverState}
      whileTap={shouldReduceMotion || tilt ? undefined : { scale: tapScale }}
      transition={{ duration: motionDurations.hover, ease: easeOut }}
    >
      {children}
    </MotionAnchor>
  );
}

export function MotionLink(props: MotionLinkProps) {
  return <AnimatedLink {...props} />;
}

export function MotionCardLink({ tilt = true, ...props }: Omit<MotionLinkProps, "hoverY" | "tapScale">) {
  return <AnimatedLink {...props} hoverY={-2} tapScale={0.985} tilt={tilt} tiltMax={3} tiltScale={1.006} />;
}
