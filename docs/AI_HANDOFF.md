# Scenografica AI Handoff

This file is for future AI sessions. Read it after `PRODUCT.md` and `DESIGN.md`.

## Stack

- Next.js 16 App Router.
- React 19.
- Motion via `motion/react`.
- Icons via `lucide-react`.
- Fonts loaded in `app/layout.tsx`: Montserrat 300, 400, and 700 via Fontsource.
- Global CSS only, in `app/globals.css`.

## Core Files

- `data/site.ts`: content model and all repeatable business data.
- `app/layout.tsx`: global shell.
- `components/site-header.tsx`: navigation and dropdowns.
- `components/site-footer.tsx`: footer.
- `components/sections/home-hero.tsx`: home hero.
- `components/department-board.tsx`: services/departments board.
- `components/environment-map.tsx`: sector/environment map.
- `components/service-detail.tsx`: service technical sheet.
- `components/sector-detail.tsx`: sector contextual brief.
- `components/portfolio-filter.tsx`: visual archive filter/grid.
- `components/portfolio-detail.tsx`: project dossier.
- `components/faq-list.tsx`: grouped production manual questions.
- `components/contact-form.tsx`: work-order form.

## Routes

- `/`: home, production overview.
- `/chi-siamo`: main static page, must use split hero.
- `/servizi`: main static page, must use split hero.
- `/servizi/[slug]`: dynamic detail, do not use split main-page hero.
- `/settori`: main static page, must use split hero.
- `/settori/[slug]`: dynamic detail, do not use split main-page hero.
- `/portfolio`: main static page, must use split hero.
- `/portfolio/[slug]`: dynamic detail, do not use split main-page hero.
- `/faq`: main static page, must use split hero.
- `/contatti`: work-order page, not required to use split hero.

## Current User Feedback To Preserve

The user already approved the idea that pages should feel different, but flagged these specific problems to fix:

1. Some cards/panels look violet or pink. Remove those backgrounds. Use transparent/paper/panel and only a few orange accents.
2. `/contatti` breaks on scroll: sticky text overlaps form fields. Fix sticky behavior or remove it.
3. `/faq` has an ugly middle sticky index card. Replace with a simpler manual/category layout.
4. `/servizi` has a similar sticky/card issue. Avoid intrusive sticky panels.
5. `/servizi` and `/settori` hero images are too low/cropped badly on initial load. Fix object-position and hero sizing.
6. Interior pages are too large overall. First viewport should show the complete hero/top section better; reduce heading scale and vertical padding outside home.
7. Restore split hero with orange final words on `/chi-siamo`, `/servizi`, `/portfolio`, `/settori`, `/faq`.

These are not optional polish items. Treat them as the next cleanup backlog before expanding features.

## Build, Preview, And QA

Primary Codex workflow for future agents. When the goal is to see the production build in the browser, use this single escalated Windows command:

```powershell
cmd.exe /c start "Scenografica preview" /min cmd.exe /k "cd /d C:\Progetti Exeva\Nuovo sceno && npm.cmd run preview:window"
```

Use `sandbox_permissions: "require_escalated"` with this justification: "Vuoi aprire una finestra terminale minimizzata per tenere acceso il server Next.js mentre lo visualizzi nel browser?" This opens a real Windows terminal, runs the production build through `preview:window`, then keeps `next start` alive for browser preview. Do not use PowerShell jobs, raw `Start-Process` snippets, detached shell commands, or the old two-step `npm.cmd run build` + `npm.cmd run preview:win` flow as the normal browser-preview workflow. Then verify:

```powershell
Invoke-WebRequest -UseBasicParsing http://127.0.0.1:3000/ | Select-Object StatusCode,StatusDescription
```

Use `npm.cmd run build` alone only for compile-only checks when browser preview is not needed. The plain `preview` script still exists as `next build && next start`, but it is not the primary workflow for future agents.

Verified current behavior:

- `npm.cmd run build` passes on Next.js 16.2.6.
- The single escalated `cmd.exe /c start ... preview:window` command is the primary browser-preview workflow in Codex because it keeps the server alive outside the sandboxed tool call.
- `npm.cmd run preview:win` can still exist, but it is not the preferred Codex browser-preview path.
- A local HTTP request to `http://127.0.0.1:3000/` returns `200 OK` while the server is running.

If Next reports `Another next build process is already running`, do not assume a code regression. It usually means another `build` or `preview` command is already active, or a previous build did not exit cleanly. Stop the running command or wait for it to finish before retrying.

Known tooling issue:

```powershell
npm.cmd run lint
```

currently fails because `next lint` is treated as an invalid project directory by this Next 16 setup. Update lint tooling separately if needed.

## Browser QA Checklist

Desktop and mobile:

- no violet/purple surfaces;
- no text/input overlap on contact;
- no sticky element covering content;
- first viewport communicates page role;
- main static split heroes have stable dark/light split and orange title tail;
- dynamic detail pages do not use split main-page hero;
- service and sector hero images show useful subject matter immediately;
- no oversized internal H1 that pushes all useful content below fold;
- mobile nav opens, scrolls, and closes;
- dropdown links remain reachable;
- form fields are focusable and errors remain visible.

Representative URLs:

- `/`
- `/chi-siamo`
- `/servizi`
- `/servizi/stampa-digitale`
- `/servizi/pubblicita-dinamica`
- `/servizi/allestimenti-scenografici`
- `/servizi/accessori-di-scena`
- `/settori`
- `/settori/tv-cinema`
- `/portfolio`
- `/portfolio/laboratorio-cinecitta`
- `/faq`
- `/contatti`
