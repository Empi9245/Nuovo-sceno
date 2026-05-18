# Scenografica Agent Guide

Read these files before changing UI or copy:

1. `PRODUCT.md`: brand, audience, IA, content source, tone.
2. `DESIGN.md`: visual system, page archetypes, hard constraints, responsive rules.
3. `docs/AI_HANDOFF.md`: current implementation state, known issues, QA checklist.

Do not start by rereading the whole codebase unless one of these docs is stale or contradicted by the current files.

## Project

- Next.js App Router site.
- Brand/register: Scenografica, industrial/editorial production website for a Cinecitta workshop.
- Fonts: Archivo Variable for headings/brand, Manrope Variable for body/UI.
- Main content source: `data/site.ts`.
- Global visual system: `app/globals.css`.
- Real image assets: `public/images/*`.

## Non-Negotiable Design Constraints

- Use only existing Scenografica foundations: ink, paper, panel, burnt orange, ash/line tokens.
- No violet, purple, neon, blue-led palette, glassmorphism, decorative gradients, abstract fake visuals, SaaS/bento sameness, or large rounded UI.
- Radius limit: 4px, 6px, 8px. Avoid pill UI unless it is part of the existing brand mark or a necessary tiny control.
- Images must be real workshop/material/production images, not stock-like abstraction.
- Coherence comes from typography, tokens, hairline dividers, real-image treatment, navigation, restrained motion.
- Page uniqueness comes from page-specific layout logic, not random decoration.

## Important Current Direction

The main static pages must have a split hero with dark upper field and light lower field:

- `/chi-siamo`
- `/servizi`
- `/portfolio`
- `/settori`
- `/faq`

The split hero must manually separate title text:

- lead title: light text on dark background;
- final title words: burnt-orange rectangle with dark text;
- no clip-path or unstable masking;
- no light text over light background;
- no cropped words at resize.

Do not apply that split hero to dynamic detail pages:

- `/servizi/[slug]`
- `/portfolio/[slug]`
- `/settori/[slug]`
- dropdown detail destinations.

## Verification

Primary Codex build-and-browser workflow. When the goal is to see the production build in the browser, use this single escalated Windows command:

```powershell
cmd.exe /c start "Scenografica preview" /min cmd.exe /k "cd /d C:\Progetti Exeva\Nuovo sceno && npm.cmd run preview:window"
```

Run it with `sandbox_permissions: "require_escalated"` and this justification: "Vuoi aprire una finestra terminale minimizzata per tenere acceso il server Next.js mentre lo visualizzi nel browser?" The command opens a real Windows terminal, runs the production build through `preview:window`, then keeps `next start` alive for browser preview. Do not replace this with PowerShell jobs, raw `Start-Process`, background shell snippets, or the old two-step `build` + `preview:win` flow. Then verify with:

```powershell
Invoke-WebRequest -UseBasicParsing http://127.0.0.1:3000/ | Select-Object StatusCode,StatusDescription
```

Use `npm.cmd run build` by itself only for compile-only checks when browser preview is not needed. The plain `preview` script still exists as `next build && next start`, but it is not the primary workflow for future agents.

If Next reports `Another next build process is already running`, a previous `build` or `preview` command is still active or did not exit cleanly. Stop the running command or wait for it to finish before starting another build.

`npm run lint` currently fails because the script uses `next lint`, which Next 16 no longer handles as expected in this project. Do not treat that as a UI regression until the lint script is updated.

Before finalizing frontend work, verify representative pages in browser:

- `/`
- `/chi-siamo`
- `/servizi`
- `/servizi/stampa-digitale`
- `/settori`
- `/settori/tv-cinema`
- `/portfolio`
- `/portfolio/laboratorio-cinecitta`
- `/faq`
- `/contatti`
