# Scenografica Design System

## Design Position

Industrial/editorial, physical, production-focused, Cinecitta workshop. The interface should feel like a technical production index or dossier, not a SaaS landing page.

Use restrained surfaces, strong typography, real images, hairline dividers, and purposeful asymmetry. Avoid repeated card grids as the default answer.

## Foundations

### Typography

- Headings and brand: Montserrat Bold.
- Body and UI: Montserrat Regular, with Montserrat Light for descriptive copy.
- Display headings should be strong but not so large that the first viewport becomes unusable.
- Interior pages must fit the hero message and primary image/action in the first viewport on desktop where practical.
- Body line length target: 65-75ch.
- Letter spacing: 0.

### Colors

Use only existing brand tokens from `app/globals.css`:

- `--color-ink`
- `--color-ink-soft`
- `--color-ash`
- `--color-paper`
- `--color-paper-deep`
- `--color-panel`
- `--color-panel-soft`
- `--color-line`
- `--color-line-light`
- `--color-orange`
- `--color-orange-strong`

Do not introduce violet, purple, neon, blue-led palettes, decorative gradient palettes, or random tints. If a surface currently looks pink/violet, change it to transparent, paper, paper-deep, panel, or a very restrained orange accent.

### Radius

- `--radius-xs`: 4px.
- `--radius-sm`: 6px.
- `--radius-md`: 8px.

No large rounded cards. Avoid pill-shaped UI except tiny controls where unavoidable or existing brand-mark circles.

### Lines and Surfaces

- Hairline borders are part of the identity.
- Prefer transparent or paper surfaces with line borders.
- Use panel/dark surfaces for deliberate production contrast.
- Use orange sparingly: action buttons, title accent blocks, small labels, important rules.

### Images

Images must be real and central. Use current assets:

- `/images/laboratorio-cinecitta.jpg`
- `/images/hero-laboratorio.jpg`
- `/images/stampa-grande-formato.jpg`
- `/images/allestimenti-scenografici.jpg`
- `/images/pubblicita-dinamica.jpg`
- `/images/team-produzione.jpg`

Image treatment:

- object-fit: cover;
- object-position must be checked per page so machines, people, panels, or vehicles are not awkwardly cropped;
- use restrained hover scale;
- no dark blurred abstract stock-style crops when the user needs to inspect the real thing.

## Main Static Page Hero Contract

Apply only to:

- `/chi-siamo`
- `/servizi`
- `/portfolio`
- `/settori`
- `/faq`

Required structure:

- split background: dark upper field, light lower field;
- lead title text in the dark area, in paper/light color;
- final title words in a burnt-orange rectangular label with ink text;
- title parts must be manually controlled in JSX, not inferred by fragile string splitting;
- no clip-path, vertical masks, or text that crosses from dark to light unpredictably;
- robust at resize, no cut words;
- image crop must be useful in the opening viewport.

Do not use this hero for:

- service detail pages;
- sector detail pages;
- portfolio detail pages;
- article/detail pages reached from dropdown navigation.

## Page Archetypes

### Home

Role: production overview and editorial index.

Use:

- strong image-led hero;
- production proof strip;
- service rhythm;
- sector image blocks;
- portfolio preview;
- credibility/client strip.

Avoid:

- plain sequence of repeated grids.

### Chi Siamo

Role: workshop credibility dossier.

Use:

- split hero;
- large opening statement;
- Cinecitta location proof;
- from-brief-to-scene path;
- client/production proof;
- lab/team imagery.

Avoid:

- generic about cards;
- oversized intro that hides all supporting info.

### Servizi Listing

Role: production departments board.

Use:

- split hero;
- one large featured department or board rhythm;
- compact technical panels;
- capability rows;
- material/process cues.

Avoid:

- four identical cards in a basic grid;
- photo crops that place important machinery too low.

### Servizio Detail

Role: technical service sheet.

Use:

- practical hero, not split main-page hero;
- sticky side index only if it does not overlap or crowd content;
- capability matrix;
- process steps;
- outcomes;
- related sectors;
- real image evidence.

Service-specific emphasis:

- Stampa digitale: material/spec grid, output formats, production accuracy.
- Pubblicita dinamica: vehicle/wrapping flow, movement/readability, before/after logic.
- Allestimenti scenografici: construction sequence, set/install constraints.
- Accessori di scena: detail/archive logic, object credibility, close-up proof.

### Settori Listing

Role: environments map.

Use:

- split hero;
- where-the-work-lives map;
- scenario panels;
- camera/public/space framing;
- sector comparison.

Avoid:

- same card grid as services;
- photo crops that hide the physical scenario.

### Settore Detail

Role: contextual production brief.

Use:

- image-led scenario;
- needs vs services matrix;
- practical constraints;
- relevant projects.

Sector-specific emphasis:

- TV e cinema: urgency, camera credibility, Cinecitta proximity.
- Eventi e fiere: temporary space, install speed, visibility.
- Musei e mostre: legibility, material care, visitor path.
- Retail: brand surfaces, durability, identity in physical space.

### Portfolio Listing

Role: production archive and visual index.

Use:

- split hero;
- filters;
- asymmetric or masonry-like grid;
- metadata tags;
- strong image hierarchy.

Avoid:

- uniform three-column repeated cards only.

### Portfolio Detail

Role: project dossier.

Use:

- large image hero;
- metadata rail;
- services used;
- production details;
- related projects.

Avoid:

- generic article layout;
- invented outcomes or fake metrics.

### FAQ

Role: production manual.

Use:

- split hero;
- grouped questions;
- compact accordion system;
- simple category navigation if helpful.

Avoid:

- ugly central sticky index card;
- long undifferentiated accordion list;
- heavy colored panels.

### Contatti

Role: work-order brief.

Use:

- form as main tool;
- contact panel and checklist;
- upload/reference area;
- urgency cues.

Avoid:

- generic contact page;
- sticky behavior that lets text overlap form fields;
- hiding form below oversized intro.

## Motion

Use motion consistently but subtly:

- major headings: cinematic slide-up;
- sections: scroll reveal with small stagger;
- images: slow parallax or restrained hover scale;
- panels: border/image reveal, no noisy tilt;
- always respect `prefers-reduced-motion`.

Motion must not make pages feel more similar. It should support each page's layout logic.

## UX Risks

- Do not make every page unique by breaking usability.
- Navigation must remain predictable.
- CTAs must remain easy to find.
- Important content should not be hidden behind decorative interactions.
- Mobile must be clear and linear.
- Text contrast over images must be checked.
- Avoid layout shift and heavy effects.
- First viewport must make page purpose obvious.
