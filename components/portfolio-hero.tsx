import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import type { ImageAsset, PortfolioProject } from "@/data/site";

type PortfolioHeroProps = {
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  summary: string;
  image: ImageAsset;
  imagePosition?: string;
  mobileImagePosition?: string;
  projects: PortfolioProject[];
  caption: {
    label: string;
    title: string;
  };
};

export function PortfolioHero({
  eyebrow,
  titleLead,
  titleAccent,
  summary,
  image,
  imagePosition,
  mobileImagePosition,
  projects,
  caption,
}: PortfolioHeroProps) {
  const title = `${titleLead} ${titleAccent}`.trim();
  const leadCharacterCount = Array.from(titleLead.replace(/\s/g, "")).length;
  const heroStyle = {
    ...(imagePosition ? { "--split-hero-image-position": imagePosition } : {}),
    ...(mobileImagePosition ? { "--split-hero-image-position-mobile": mobileImagePosition } : {}),
  } as CSSProperties;

  return (
    <section className="split-page-hero portfolio-page-hero" style={heroStyle}>
      <div className="split-page-hero__ink">
        <div className="split-page-hero__ink-inner">
          <div className="split-page-hero__copy">
            <div className="split-page-hero__eyebrow portfolio-page-hero__reveal">
              <span className="split-page-hero__eyebrow-rule" aria-hidden="true" />
              <p className="eyebrow">{eyebrow}</p>
            </div>
            <h1 className="split-page-hero__title portfolio-page-hero__title" aria-label={title}>
              <CharacterReveal className="split-page-hero__title-main" text={titleLead} />
              <span className="split-page-hero__title-accent">
                <CharacterReveal text={titleAccent} startIndex={leadCharacterCount} />
              </span>
            </h1>
            <p className="split-page-hero__summary portfolio-page-hero__summary">{summary}</p>
          </div>

          <div className="portfolio-page-hero__panel" aria-label="Record produzione in evidenza">
            <span className="portfolio-page-hero__panel-label">Record produzione</span>
            <div className="portfolio-page-hero__panel-list">
              {projects.slice(0, 3).map((project, index) => {
                const style = { "--portfolio-row-delay": `${320 + index * 90}ms` } as CSSProperties;

                return (
                  <Link className="portfolio-page-hero__panel-link" href={project.href} key={project.slug} style={style}>
                    <span className="portfolio-page-hero__panel-index">{String(index + 1).padStart(2, "0")}</span>
                    <strong>{project.title}</strong>
                    <small>{project.category}</small>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="split-page-hero__paper">
        <div className="split-page-hero__paper-inner">
          <div className="split-page-hero__visual portfolio-page-hero__visual">
            <Image src={image.src} alt={image.alt} fill priority sizes="(min-width: 1000px) 62vw, 100vw" />
            <div className="split-page-hero__caption">
              <span>{caption.label}</span>
              <strong>{caption.title}</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PortfolioMarquee({ projects }: { projects: PortfolioProject[] }) {
  return (
    <section className="portfolio-marquee" aria-label="Scorrimento lavori portfolio">
      <div className="portfolio-marquee__track">
        <div className="portfolio-marquee__group">
          {projects.map((project, index) => (
            <MarqueeCard key={project.slug} project={project} index={index} />
          ))}
        </div>
        <div className="portfolio-marquee__group" aria-hidden="true">
          {projects.map((project, index) => (
            <MarqueeCard key={`${project.slug}-duplicate`} project={project} index={index} isDuplicate />
          ))}
        </div>
      </div>
    </section>
  );
}

function CharacterReveal({
  text,
  className,
  startIndex = 0,
}: {
  text: string;
  className?: string;
  startIndex?: number;
}) {
  let characterIndex = startIndex;

  return (
    <span className={className} aria-hidden="true">
      {text.split(" ").map((word, wordIndex) => (
        <span className="portfolio-page-hero__word" key={`${word}-${wordIndex}`}>
          {Array.from(word).map((character, index) => {
            const style = { "--portfolio-char-delay": `${110 + characterIndex++ * 34}ms` } as CSSProperties;

            return (
              <span className="portfolio-page-hero__char" style={style} key={`${character}-${index}`}>
                {character}
              </span>
            );
          })}
        </span>
      ))}
    </span>
  );
}

function MarqueeCard({
  project,
  index,
  isDuplicate = false,
}: {
  project: PortfolioProject;
  index: number;
  isDuplicate?: boolean;
}) {
  return (
    <Link
      href={project.href}
      className={`portfolio-marquee__card portfolio-marquee__card--${(index % 3) + 1}`}
      tabIndex={isDuplicate ? -1 : undefined}
    >
      <span className="portfolio-marquee__image">
        <Image
          src={project.image.src}
          alt={isDuplicate ? "" : project.image.alt}
          fill
          sizes="(min-width: 1000px) 24vw, 72vw"
        />
      </span>
      <span className="portfolio-marquee__meta">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <strong>{project.title}</strong>
      </span>
    </Link>
  );
}
