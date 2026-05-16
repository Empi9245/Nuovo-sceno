import { ParallaxMediaFrame } from "@/components/motion/parallax-media";
import { Reveal } from "@/components/motion/reveal";
import type { ImageAsset } from "@/data/site";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  accentTitle: string;
  summary: string;
  image?: ImageAsset;
  meta?: string[];
};

function getTitleFlags(title: string) {
  const words = title.trim().split(/\s+/);
  return {
    isLongTitle: words.length >= 6,
  };
}

function splitAccentTitle(title: string, accentTitle: string) {
  const accent = accentTitle.trim();
  const titleText = title.trimEnd();

  if (!accent || !titleText.endsWith(accent)) {
    return null;
  }

  return {
    lead: titleText.slice(0, -accent.length).trimEnd(),
    accent,
  };
}

export function PageHero({ eyebrow, title, accentTitle, summary, image, meta }: PageHeroProps) {
  const { isLongTitle } = getTitleFlags(title);
  const titleParts = splitAccentTitle(title, accentTitle);
  const heroClassName = [
    "page-hero",
    isLongTitle ? "page-hero--long-title" : "",
    "page-hero--paper-support",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={heroClassName}>
      <div className="page-hero__copy">
        <Reveal className="page-hero__eyebrow" delay={0}>
          <span className="page-hero__eyebrow-rule" aria-hidden="true" />
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
        <div className="page-hero__title-stack">
          <h1 className="page-hero__title" aria-label={title}>
            {titleParts ? (
              <>
                {titleParts.lead ? <span className="page-hero__title-main">{titleParts.lead}</span> : null}
                <span className="page-hero__title-accent">{titleParts.accent}</span>
              </>
            ) : (
              <span className="page-hero__title-main">{title}</span>
            )}
          </h1>
        </div>
        <Reveal className="page-hero__support" delay={0.18}>
          <p>{summary}</p>
          {meta?.length ? (
            <ul className="page-hero__meta" aria-label="Informazioni principali">
              {meta.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
        </Reveal>
      </div>
      {image ? <ParallaxMediaFrame image={image} priority className="page-hero__media" /> : null}
    </section>
  );
}
