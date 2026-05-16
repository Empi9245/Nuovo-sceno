# Components

Shared UI components with full source used by the navigation and linked card surfaces.

### components/service-card.tsx

```tsx
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
      <MotionCardLink href={service.href} className="service-card__link">
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

```

### components/sector-card.tsx

```tsx
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

```

### components/portfolio-card.tsx

```tsx
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { MotionCardLink } from "@/components/motion/motion-link";
import type { PortfolioProject } from "@/data/site";

type PortfolioCardProps = {
  project: PortfolioProject;
};

export function PortfolioCard({ project }: PortfolioCardProps) {
  return (
    <MotionCardLink href={project.href} className="portfolio-card">
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

```

### components/page-hero.tsx

```tsx
import { ParallaxMediaFrame } from "@/components/motion/parallax-media";
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
        <p className="eyebrow">{eyebrow}</p>
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
        <div className="page-hero__support">
          <p>{summary}</p>
          {meta?.length ? (
            <ul className="page-hero__meta" aria-label="Informazioni principali">
              {meta.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
      {image ? <ParallaxMediaFrame image={image} priority className="page-hero__media" /> : null}
    </section>
  );
}

```

### components/section-heading.tsx

```tsx
import type { ReactNode } from "react";

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
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2>{title}</h2>
      </div>
      {children ? <div className="section-heading__copy">{children}</div> : null}
    </div>
  );
}

```

### components/cta-section.tsx

```tsx
import { ArrowRight } from "lucide-react";
import { MotionLink } from "@/components/motion/motion-link";
import { Reveal } from "@/components/motion/reveal";

type CtaSectionProps = {
  title?: string;
  text?: string;
};

export function CtaSection({
  title = "Hai un progetto da mettere in produzione?",
  text = "Raccontaci formato, tempi, luogo e materiali disponibili. Ti aiutiamo a capire il percorso più concreto per arrivare alla scena.",
}: CtaSectionProps) {
  return (
    <Reveal as="section" className="cta-section">
      <div>
        <p className="eyebrow">Preventivo</p>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <MotionLink href="/contatti" className="button button--primary">
        Parla con Scenografica <ArrowRight size={18} aria-hidden="true" />
      </MotionLink>
    </Reveal>
  );
}

```

### components/media-frame.tsx

```tsx
import Image from "next/image";
import type { ImageAsset } from "@/data/site";

type MediaFrameProps = {
  image: ImageAsset;
  priority?: boolean;
  className?: string;
  sizes?: string;
};

export function MediaFrame({ image, priority = false, className = "", sizes = "(min-width: 900px) 50vw, 100vw" }: MediaFrameProps) {
  return (
    <div className={`media-frame ${className}`}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        sizes={sizes}
        className="media-frame__image"
      />
    </div>
  );
}

```

### components/contact-form.tsx

```tsx
"use client";

import { useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Check, Upload } from "lucide-react";

type FormState = {
  projectType: string;
  fullName: string;
  company: string;
  email: string;
  phone: string;
  description: string;
  timing: string;
  fileName: string;
};

const initialState: FormState = {
  projectType: "",
  fullName: "",
  company: "",
  email: "",
  phone: "",
  description: "",
  timing: "",
  fileName: "",
};

type Errors = Partial<Record<keyof FormState, string>>;

export function ContactForm() {
  const [values, setValues] = useState(initialState);
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);
  const firstInvalidRef = useRef<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const errors = useMemo(() => validate(values), [values]);
  const visibleErrors = Object.fromEntries(
    Object.entries(errors).filter(([key]) => touched[key as keyof FormState] || submitted),
  ) as Errors;

  function updateValue(name: keyof FormState, value: string) {
    setValues((current) => ({ ...current, [name]: value }));
  }

  function markTouched(name: keyof FormState) {
    setTouched((current) => ({ ...current, [name]: true }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);

    const nextErrors = validate(values);
    if (Object.keys(nextErrors).length > 0) {
      firstInvalidRef.current?.focus();
      return;
    }

    setValues(initialState);
    setTouched({});
  }

  function fieldRef(name: keyof FormState) {
    return (element: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null) => {
      if (!element) return;
      if (visibleErrors[name] && !firstInvalidRef.current) {
        firstInvalidRef.current = element;
      }
      if (!visibleErrors[name] && firstInvalidRef.current === element) {
        firstInvalidRef.current = null;
      }
    };
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <Field label="Tipo di progetto" error={visibleErrors.projectType}>
          <select
            ref={fieldRef("projectType")}
            id="projectType"
            name="projectType"
            value={values.projectType}
            onChange={(event) => updateValue("projectType", event.target.value)}
            onBlur={() => markTouched("projectType")}
            aria-invalid={Boolean(visibleErrors.projectType)}
            aria-describedby={visibleErrors.projectType ? "projectType-error" : undefined}
            required
          >
            <option value="">Seleziona un ambito</option>
            <option>Stampa digitale grande formato</option>
            <option>Pubblicità dinamica e wrapping</option>
            <option>Allestimenti scenografici</option>
            <option>Accessori di scena</option>
            <option>Progetto integrato</option>
          </select>
        </Field>

        <Field label="Nome e cognome" error={visibleErrors.fullName}>
          <input
            ref={fieldRef("fullName")}
            id="fullName"
            name="fullName"
            value={values.fullName}
            onChange={(event) => updateValue("fullName", event.target.value)}
            onBlur={() => markTouched("fullName")}
            aria-invalid={Boolean(visibleErrors.fullName)}
            aria-describedby={visibleErrors.fullName ? "fullName-error" : undefined}
            autoComplete="name"
            required
          />
        </Field>

        <Field label="Azienda" helper="Opzionale, utile per produzioni, agenzie e brand.">
          <input
            id="company"
            name="company"
            value={values.company}
            onChange={(event) => updateValue("company", event.target.value)}
            onBlur={() => markTouched("company")}
            autoComplete="organization"
          />
        </Field>

        <Field label="Email" error={visibleErrors.email}>
          <input
            ref={fieldRef("email")}
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={(event) => updateValue("email", event.target.value)}
            onBlur={() => markTouched("email")}
            aria-invalid={Boolean(visibleErrors.email)}
            aria-describedby={visibleErrors.email ? "email-error" : undefined}
            autoComplete="email"
            required
          />
        </Field>

        <Field label="Telefono" helper="Utile se i tempi sono stretti.">
          <input
            id="phone"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={(event) => updateValue("phone", event.target.value)}
            onBlur={() => markTouched("phone")}
            autoComplete="tel"
          />
        </Field>

        <Field label="Tempistiche" error={visibleErrors.timing}>
          <input
            ref={fieldRef("timing")}
            id="timing"
            name="timing"
            value={values.timing}
            onChange={(event) => updateValue("timing", event.target.value)}
            onBlur={() => markTouched("timing")}
            aria-invalid={Boolean(visibleErrors.timing)}
            aria-describedby={visibleErrors.timing ? "timing-error" : undefined}
            placeholder="Esempio: consegna entro due settimane"
            required
          />
        </Field>
      </div>

      <Field label="Descrizione del progetto" error={visibleErrors.description} full>
        <textarea
          ref={fieldRef("description")}
          id="description"
          name="description"
          rows={6}
          value={values.description}
          onChange={(event) => updateValue("description", event.target.value)}
          onBlur={() => markTouched("description")}
          aria-invalid={Boolean(visibleErrors.description)}
          aria-describedby={visibleErrors.description ? "description-error" : "description-helper"}
          placeholder="Formato, quantità, materiali, luogo di installazione, reference e urgenze."
          required
        />
      </Field>

      <div className="file-field">
        <label htmlFor="file">
          <Upload size={18} aria-hidden="true" />
          <span>{values.fileName || "Upload file, disegni o reference"}</span>
        </label>
        <input
          id="file"
          name="file"
          type="file"
          onChange={(event) => updateValue("fileName", event.target.files?.[0]?.name || "")}
        />
        <p>PDF, immagini o file compressi aiutano a valutare tempi e materiali.</p>
      </div>

      <div className="form-footer">
        <p>Rispondiamo con una prima valutazione tecnica. Per urgenze di set è meglio indicare data e luogo.</p>
        <button className="button button--primary" type="submit">
          Invia richiesta
        </button>
      </div>

      {submitted && Object.keys(errors).length === 0 ? (
        <motion.div
          className="form-success"
          role="status"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, transform: "translateY(8px)" }}
          animate={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.22, ease: [0.22, 1, 0.36, 1] }}
        >
          <Check size={18} aria-hidden="true" />
          Richiesta pronta. In un progetto reale il modulo verrebbe collegato al sistema di invio scelto.
        </motion.div>
      ) : null}
    </form>
  );
}

function Field({
  label,
  helper,
  error,
  full = false,
  children,
}: {
  label: string;
  helper?: string;
  error?: string;
  full?: boolean;
  children: React.ReactElement<{ id?: string }>;
}) {
  const id = children.props.id;

  return (
    <div className={`field ${full ? "field--full" : ""}`}>
      <label htmlFor={id}>{label}</label>
      {children}
      {helper ? <p className="field__helper">{helper}</p> : null}
      {error ? (
        <p className="field__error" id={`${id}-error`} role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function validate(values: FormState): Errors {
  const errors: Errors = {};
  if (!values.projectType) errors.projectType = "Seleziona il tipo di progetto.";
  if (values.fullName.trim().length < 3) errors.fullName = "Inserisci nome e cognome.";
  if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = "Inserisci un indirizzo email valido.";
  if (values.timing.trim().length < 4) errors.timing = "Indica una tempistica di massima.";
  if (values.description.trim().length < 20) errors.description = "Aggiungi almeno qualche dettaglio sul progetto.";
  return errors;
}

```

### components/faq-list.tsx

```tsx
import { faqItems } from "@/data/site";
import { Reveal } from "@/components/motion/reveal";

export function FaqList() {
  return (
    <div className="faq-list">
      {faqItems.map((item, index) => (
        <Reveal key={item.question} delay={index * 0.04}>
          <details>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        </Reveal>
      ))}
    </div>
  );
}

```

### components/portfolio-filter.tsx

```tsx
"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { PortfolioCard } from "@/components/portfolio-card";
import type { PortfolioProject } from "@/data/site";

type PortfolioFilterProps = {
  projects: PortfolioProject[];
};

export function PortfolioFilter({ projects }: PortfolioFilterProps) {
  const [active, setActive] = useState("Tutti");
  const shouldReduceMotion = useReducedMotion();
  const categories = useMemo(() => ["Tutti", ...Array.from(new Set(projects.map((project) => project.category)))], [projects]);
  const filtered = active === "Tutti" ? projects : projects.filter((project) => project.category === active);

  return (
    <section className="portfolio-filter" aria-label="Portfolio filtrabile">
      <div className="filter-bar" role="tablist" aria-label="Filtra lavori per categoria">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={active === category}
            className={active === category ? "is-active" : ""}
            onClick={() => setActive(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div className="portfolio-grid" layout>
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.24, ease: [0.22, 1, 0.36, 1] }}
            >
              <PortfolioCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

```

### components/motion/motion-link.tsx

```tsx
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type MotionLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
  hoverY?: number;
  tapScale?: number;
};

const MotionAnchor = motion.create(Link);

function AnimatedLink({ href, children, className, ariaLabel, hoverY = -2, tapScale = 0.98 }: MotionLinkProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <MotionAnchor
      href={href}
      aria-label={ariaLabel}
      className={className}
      whileHover={shouldReduceMotion ? undefined : { y: hoverY }}
      whileTap={shouldReduceMotion ? undefined : { scale: tapScale }}
      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionAnchor>
  );
}

export function MotionLink(props: MotionLinkProps) {
  return <AnimatedLink {...props} />;
}

export function MotionCardLink(props: Omit<MotionLinkProps, "hoverY" | "tapScale">) {
  return <AnimatedLink {...props} hoverY={-4} tapScale={0.985} />;
}

```

### components/motion/reveal.tsx

```tsx
"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li";
};

export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.46,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </MotionTag>
  );
}

```

### components/motion/parallax-media.tsx

```tsx
"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import type { ImageAsset } from "@/data/site";

type ParallaxMediaFrameProps = {
  image: ImageAsset;
  priority?: boolean;
  className?: string;
  sizes?: string;
  amount?: number;
};

export function ParallaxMediaFrame({
  image,
  priority = false,
  className = "",
  sizes = "(min-width: 900px) 50vw, 100vw",
  amount = 42,
}: ParallaxMediaFrameProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0px", "0px"] : [`-${amount}px`, `${amount}px`],
  );

  return (
    <div ref={ref} className={`media-frame ${className}`}>
      <motion.div className="media-frame__parallax" style={{ y, scale: shouldReduceMotion ? 1 : 1.08 }}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          sizes={sizes}
          className="media-frame__image"
        />
      </motion.div>
    </div>
  );
}

```
