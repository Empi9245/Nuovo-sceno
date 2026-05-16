"use client";

import { useEffect, useRef, useState } from "react";

export function PortfolioCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (finePointer.matches && !reducedMotion.matches) {
      setIsEnabled(true);
    }
  }, []);

  useEffect(() => {
    if (!isEnabled) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    let targetX = -100;
    let targetY = -100;
    let currentX = targetX;
    let currentY = targetY;
    let frame = 0;

    const moveCursor = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;

      const target = event.target instanceof Element ? event.target : null;
      const isInsidePortfolio = Boolean(target?.closest(".portfolio-page"));
      const isInteractive = Boolean(target?.closest(".portfolio-page a, .portfolio-page button"));

      cursor.classList.toggle("is-visible", isInsidePortfolio);
      cursor.classList.toggle("is-expanded", isInteractive);
    };

    const hideCursor = () => {
      cursor.classList.remove("is-visible", "is-expanded");
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;
      cursor.style.setProperty("--portfolio-cursor-x", `${currentX}px`);
      cursor.style.setProperty("--portfolio-cursor-y", `${currentY}px`);
      frame = requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", moveCursor);
    window.addEventListener("pointerleave", hideCursor);
    frame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", moveCursor);
      window.removeEventListener("pointerleave", hideCursor);
      cancelAnimationFrame(frame);
    };
  }, [isEnabled]);

  if (!isEnabled) return null;

  return <div ref={cursorRef} className="portfolio-cursor" aria-hidden="true" />;
}
