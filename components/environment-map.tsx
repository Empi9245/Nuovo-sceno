import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { EnvironmentContextCarousel } from "@/components/environment-context-carousel";
import { MotionCardLink } from "@/components/motion/motion-link";
import { Reveal } from "@/components/motion/reveal";
import type { Sector } from "@/data/site";

type EnvironmentMapProps = {
  sectors: Sector[];
  compact?: boolean;
};

export function EnvironmentMap({ sectors, compact = false }: EnvironmentMapProps) {
  if (!compact) {
    const carouselSectors = sectors.map(({ icon: _icon, ...sector }) => sector);

    return <EnvironmentContextCarousel sectors={carouselSectors} />;
  }

  return (
    <div className={`environment-map ${compact ? "environment-map--compact" : ""}`}>
      {sectors.map((sector, index) => {
        const Icon = sector.icon;

        return (
          <Reveal
            key={sector.slug}
            className={`environment-map__item environment-map__item--${index + 1}`}
            delay={index * 0.045}
          >
            <MotionCardLink href={sector.href} className="environment-map__link" tilt={false}>
              <div className="environment-map__image">
                <Image src={sector.image.src} alt={sector.image.alt} fill sizes="(min-width: 1000px) 44vw, 100vw" />
              </div>
              <div className="environment-map__content">
                <span className="environment-map__index">Scenario {String(index + 1).padStart(2, "0")}</span>
                <div className="environment-map__title">
                  <span className="icon-chip">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <div>
                    <p>{sector.eyebrow}</p>
                    <h3>{sector.title}</h3>
                  </div>
                </div>
                <p>{sector.summary}</p>
                <ul aria-label={`Esigenze per ${sector.title}`}>
                  {sector.needs.slice(0, compact ? 2 : 3).map((need) => (
                    <li key={need}>{need}</li>
                  ))}
                </ul>
                <span className="text-link">
                  Apri il brief <ArrowUpRight size={16} aria-hidden="true" />
                </span>
              </div>
            </MotionCardLink>
          </Reveal>
        );
      })}
    </div>
  );
}
