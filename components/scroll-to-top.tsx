"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

function jumpToTop() {
  const root = document.documentElement;
  const previousScrollBehavior = root.style.scrollBehavior;

  root.style.scrollBehavior = "auto";
  window.scrollTo({ left: 0, top: 0, behavior: "auto" });
  root.style.scrollBehavior = previousScrollBehavior;
}

export function ScrollToTop() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    jumpToTop();
    const frame = window.requestAnimationFrame(jumpToTop);

    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  useLayoutEffect(() => {
    const handlePageShow = () => {
      jumpToTop();
    };

    window.addEventListener("pageshow", handlePageShow);

    return () => {
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, []);

  return null;
}
