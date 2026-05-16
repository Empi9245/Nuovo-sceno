import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { MotionCardLink } from "@/components/motion/motion-link";
import { Reveal } from "@/components/motion/reveal";
import type { Service } from "@/data/site";

type ServiceCardProps = {
  service: Service;
  index?: number;
  variant?: "featured" | "compact";
};

export function ServiceCard({ service, index = 0, variant = "compact" }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <Reveal className={`service-card service-card--${variant}`} delay={index * 0.05}>
      <MotionCardLink
        href={service.href}
        className="service-card__link"
        hoverRotate={variant === "featured" ? -0.35 : 0.35}
      >
        <div className="service-card__media">
          <Image src={service.image.src} alt={service.image.alt} fill sizes="(min-width: 900px) 33vw, 100vw" />
        </div>
        <div className="service-card__body">
          <div className="service-card__kicker">
            <span className="icon-chip">
              <Icon size={18} aria-hidden="true" />
            </span>
            <span>{service.eyebrow}</span>
          </div>
          <h3>{service.title}</h3>
          <p>{service.short}</p>
          <span className="text-link">
            Approfondisci <ArrowUpRight size={16} aria-hidden="true" />
          </span>
        </div>
      </MotionCardLink>
    </Reveal>
  );
}
