import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { MotionCardLink } from "@/components/motion/motion-link";
import { Reveal } from "@/components/motion/reveal";
import type { Sector } from "@/data/site";

type SectorCardProps = {
  sector: Sector;
  index?: number;
};

export function SectorCard({ sector, index = 0 }: SectorCardProps) {
  const Icon = sector.icon;

  return (
    <Reveal className="sector-card" delay={index * 0.045}>
      <MotionCardLink href={sector.href} className="sector-card__link">
        <Image src={sector.image.src} alt={sector.image.alt} fill sizes="(min-width: 900px) 45vw, 100vw" />
        <div className="sector-card__overlay">
          <span className="icon-chip">
            <Icon size={18} aria-hidden="true" />
          </span>
          <div>
            <p>{sector.eyebrow}</p>
            <h3>{sector.title}</h3>
          </div>
          <ArrowUpRight size={18} aria-hidden="true" />
        </div>
      </MotionCardLink>
    </Reveal>
  );
}
