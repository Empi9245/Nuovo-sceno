import type { ReactNode } from "react";
import { Reveal, motionStagger } from "@/components/motion/reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  align?: "start" | "split";
};

export function SectionHeading({ eyebrow, title, children, align = "split" }: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <div>
        {eyebrow ? (
          <Reveal className="section-heading__eyebrow" delay={0}>
            <span className="section-heading__eyebrow-rule" aria-hidden="true" />
            <p className="eyebrow">{eyebrow}</p>
          </Reveal>
        ) : null}
        <h2>{title}</h2>
      </div>
      {children ? (
        <Reveal className="section-heading__copy" delay={motionStagger.tight * 2}>
          {children}
        </Reveal>
      ) : null}
    </div>
  );
}
