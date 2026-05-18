import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { Reveal } from "@/components/motion/reveal";
import { SplitPageHeroBackgroundVideo } from "@/components/split-page-hero-background-video";
import type { ImageAsset } from "@/data/site";

type SplitPageHeroProps = {
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  summary: string;
  image?: ImageAsset;
  backgroundVideo?: {
    src: string;
    poster?: string;
    pauseMs?: number;
  };
  className?: string;
  imagePosition?: string;
  mobileImagePosition?: string;
  actions?: ReactNode;
  children?: ReactNode;
  caption?: {
    label: string;
    title: string;
  };
};

export function SplitPageHero({
  eyebrow,
  titleLead,
  titleAccent,
  summary,
  image,
  backgroundVideo,
  className,
  imagePosition,
  mobileImagePosition,
  actions,
  children,
  caption,
}: SplitPageHeroProps) {
  const title = `${titleLead} ${titleAccent}`.trim();
  const heroClassName = [
    "split-page-hero",
    backgroundVideo ? "split-page-hero--video-background" : "",
    className,
    children || image ? "" : "split-page-hero--no-panel",
  ]
    .filter(Boolean)
    .join(" ");
  const heroStyle = {
    ...(imagePosition ? { "--split-hero-image-position": imagePosition } : {}),
    ...(mobileImagePosition ? { "--split-hero-image-position-mobile": mobileImagePosition } : {}),
  } as CSSProperties;

  const showPaperSection = image || children;

  return (
    <section className={heroClassName} style={heroStyle}>
      <div className="split-page-hero__ink">
        {backgroundVideo ? (
          <SplitPageHeroBackgroundVideo
            src={backgroundVideo.src}
            poster={backgroundVideo.poster}
            pauseMs={backgroundVideo.pauseMs}
          />
        ) : null}
        <div className="split-page-hero__ink-inner">
          <div className="split-page-hero__copy">
            <Reveal className="split-page-hero__eyebrow" delay={0}>
              <span className="split-page-hero__eyebrow-rule" aria-hidden="true" />
              <p className="eyebrow">{eyebrow}</p>
            </Reveal>
            <h1 className="split-page-hero__title" aria-label={title}>
              <span className="split-page-hero__title-main">{titleLead}</span>
              <span className="split-page-hero__title-accent">{titleAccent}</span>
            </h1>
            <Reveal className="split-page-hero__summary" delay={0.18}>
              <p>{summary}</p>
            </Reveal>
            {actions ? (
              <Reveal className="split-page-hero__actions" delay={0.24}>
                {actions}
              </Reveal>
            ) : null}
          </div>
        </div>
      </div>

      {showPaperSection ? (
        <div className="split-page-hero__paper">
          <div className="split-page-hero__paper-inner">
            {image ? (
              <Reveal className="split-page-hero__visual" delay={0.08}>
                <Image src={image.src} alt={image.alt} fill priority sizes="(min-width: 1000px) 62vw, 100vw" />
                {caption ? (
                  <div className="split-page-hero__caption">
                    <span>{caption.label}</span>
                    <strong>{caption.title}</strong>
                  </div>
                ) : null}
              </Reveal>
            ) : null}

            {children ? (
              <Reveal className="split-page-hero__panel" delay={0.12}>
                {children}
              </Reveal>
            ) : null}
          </div>
        </div>
      ) : null}
    </section>
  );
}
