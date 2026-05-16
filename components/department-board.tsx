import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { MotionCardLink } from "@/components/motion/motion-link";
import { Reveal } from "@/components/motion/reveal";
import type { Service } from "@/data/site";

type DepartmentBoardProps = {
  services: Service[];
  compact?: boolean;
};

export function DepartmentBoard({ services, compact = false }: DepartmentBoardProps) {
  return (
    <div className={`department-board ${compact ? "department-board--compact" : ""}`}>
      {services.map((service, index) => {
        const Icon = service.icon;

        return (
          <Reveal
            key={service.slug}
            className={`department-board__item ${index === 0 ? "is-featured" : ""}`}
            delay={index * 0.04}
          >
            <MotionCardLink href={service.href} className="department-board__link">
              <span className="department-board__number">{String(index + 1).padStart(2, "0")}</span>
              <div className="department-board__media">
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  fill
                  sizes={index === 0 ? "(min-width: 1000px) 42vw, 100vw" : "(min-width: 1000px) 20vw, 100vw"}
                />
              </div>
              <div className="department-board__body">
                <div className="department-board__kicker">
                  <span className="icon-chip">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <span>{service.eyebrow}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.short}</p>
                <ul className="department-board__capabilities" aria-label={`Capacita principali per ${service.title}`}>
                  {service.capabilities.slice(0, index === 0 ? 4 : 2).map((capability) => (
                    <li key={capability}>{capability}</li>
                  ))}
                </ul>
              </div>
              <div className="department-board__footer">
                <span>{service.relatedSectors.slice(0, 2).join(" / ")}</span>
                <span className="text-link">
                  Scheda tecnica <ArrowUpRight size={16} aria-hidden="true" />
                </span>
              </div>
            </MotionCardLink>
          </Reveal>
        );
      })}
    </div>
  );
}
