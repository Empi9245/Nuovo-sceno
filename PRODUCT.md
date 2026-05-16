# Scenografica Product Context

## Register

Brand website. The design is part of the product: visitors must understand the physical competence, production method, and credibility of Scenografica without needing sales explanation.

## Brand Summary

Scenografica is a Roman production workshop based at the Cinecitta studios. It produces wide-format printing, scenic installations, vehicle/wrapping graphics, and graphic props for film, TV, events, museums, exhibitions, retail, and commercial spaces.

The site must feel like a workshop dossier: physical, technical, editorial, human, and production-focused.

## Audience

- Film and TV production teams.
- Art departments and set designers.
- Event, fair, and congress producers.
- Museum and exhibition teams.
- Retail and brand-space managers.
- Agencies that need a physical production partner.

These users care about:

- Can Scenografica make this physical object or environment?
- Can they handle short timelines and changing constraints?
- Do they understand camera, public, installation, material, and scale?
- What information do they need for a useful quote?
- Is the work real, not generic marketing?

## Primary Promise

From file, reference, or production need to a physical output that works in the final environment: set, vehicle, stand, museum path, retail surface, or public space.

## Tone

Use concrete production language. Prefer words such as:

- laboratorio
- produzione
- materiali
- supporti
- posa
- scena
- set
- vincoli
- formato
- finitura
- installazione
- brief
- riferimento fotografico
- distanza di lettura

Avoid generic marketing language:

- soluzioni innovative
- esperienze uniche
- creativita senza limiti
- design a 360 gradi
- eccellenza generica
- trasformiamo idee in realta, unless made specific by material/process context.

## Information Architecture

Top-level routes:

- `/`: production overview and editorial index.
- `/chi-siamo`: workshop credibility dossier.
- `/servizi`: operational departments board.
- `/servizi/[slug]`: technical service sheet.
- `/settori`: environments map.
- `/settori/[slug]`: contextual production brief.
- `/portfolio`: visual production archive.
- `/portfolio/[slug]`: project dossier.
- `/faq`: production manual.
- `/contatti`: work-order brief.

## Content Source

Core structured content lives in `data/site.ts`:

- `servicePillars`
- `sectors`
- `portfolioProjects`
- `navItems`
- `clients`
- `faqItems`
- `trustPoints`
- `contactInfo`

Prefer extending `data/site.ts` when adding repeatable content. Avoid scattering business copy across many components unless it is truly page-specific layout copy.

## Existing Services

1. Stampa digitale grande formato.
2. Pubblicita dinamica e wrapping.
3. Allestimenti grafici e scenografici.
4. Accessori di scena.

## Existing Sectors

1. TV e cinema.
2. Eventi, fiere e congressi.
3. Musei e mostre.
4. Retail e spazi commerciali.

## Existing Portfolio Types

- Laboratorio.
- Stampa.
- Allestimenti.
- Wrapping.
- Metodo.

The current portfolio uses a limited real image set. Do not invent case-study claims or fake metrics. If detail is sparse, present it honestly as a production record.

## CTA Strategy

Use operational CTA language:

- Richiedi un preventivo.
- Invia un brief.
- Apri una richiesta.
- Porta un lavoro simile.
- Racconta il tuo contesto.

Avoid generic:

- Scopri di piu everywhere.
- Contattaci as the only action.
- Book a demo / SaaS language.

