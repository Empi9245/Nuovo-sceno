"use client";

import { useEffect, useRef } from "react";

type SplitPageHeroBackgroundVideoProps = {
  src: string;
  poster?: string;
  pauseMs?: number;
};

export function SplitPageHeroBackgroundVideo({ src, poster, pauseMs = 5000 }: SplitPageHeroBackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    let restartTimer: number | undefined;

    const clearRestartTimer = () => {
      if (restartTimer !== undefined) {
        window.clearTimeout(restartTimer);
        restartTimer = undefined;
      }
    };

    const playFromStart = () => {
      video.currentTime = 0;
      const playPromise = video.play();

      if (playPromise) {
        void playPromise.catch(() => undefined);
      }
    };

    const scheduleRestart = () => {
      clearRestartTimer();
      restartTimer = window.setTimeout(playFromStart, pauseMs);
    };

    video.addEventListener("ended", scheduleRestart);
    playFromStart();

    return () => {
      clearRestartTimer();
      video.removeEventListener("ended", scheduleRestart);
    };
  }, [pauseMs, src]);

  return (
    <video
      ref={videoRef}
      className="split-page-hero__background-video"
      autoPlay
      muted
      playsInline
      preload="auto"
      poster={poster}
      aria-hidden="true"
      tabIndex={-1}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
