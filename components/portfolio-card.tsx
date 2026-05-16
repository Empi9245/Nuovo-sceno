import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { MotionCardLink } from "@/components/motion/motion-link";
import type { PortfolioProject } from "@/data/site";

type PortfolioCardProps = {
  project: PortfolioProject;
};

export function PortfolioCard({ project }: PortfolioCardProps) {
  return (
    <MotionCardLink href={project.href} className="portfolio-card" hoverRotate={0.3}>
      <div className="portfolio-card__media">
        <Image src={project.image.src} alt={project.image.alt} fill sizes="(min-width: 900px) 33vw, 100vw" />
      </div>
      <div className="portfolio-card__body">
        <span>{project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <span className="text-link">
          Dettaglio <ArrowUpRight size={16} aria-hidden="true" />
        </span>
      </div>
    </MotionCardLink>
  );
}
