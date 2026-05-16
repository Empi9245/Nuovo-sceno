# Scenografica AI Handoff

This file is for future AI sessions. Read it after `PRODUCT.md` and `DESIGN.md`.

## Stack

- Next.js 16 App Router.
- React 19.
- Motion via `motion/react`.
- Icons via `lucide-react`.
- Fonts loaded in `app/layout.tsx`: Archivo Variable and Manrope Variable.
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

Primary workflow for future agents. These two commands must be used together, in this order, when the goal is to see the production build in the browser:

```powershell
npm.cmd run build
```

```powershell
npm.cmd run preview:win
```

`npm.cmd run build` is the required compile step. `npm.cmd run preview:win` is the required browser preview step after the build. Do not run only one of them when the user asks to build and view the site: run both, as a single workflow, then verify `http://localhost:3000`. Do not substitute `npm.cmd run preview`, raw `next start`, PowerShell jobs, or custom background commands as the normal workflow.

Fallback Codex-specific server startup rule:

Use this only if `npm.cmd run preview:win` cannot keep the preview alive from the current Codex environment. Do not use PowerShell jobs, raw `Start-Process` snippets, or detached shell commands from a normal sandboxed tool call. In this environment those approaches can exit when the tool call ends or hit the Windows `Path`/`PATH` duplication issue.

Instead, open a real Windows terminal with an escalated shell command:

```powershell
cmd.exe /c start "Scenografica preview" /min cmd.exe /k "cd /d C:\Progetti Exeva\Nuovo sceno && npm.cmd run preview:window"
```

Use `sandbox_permissions: "require_escalated"` with a justification such as: "Vuoi aprire una finestra terminale minimizzata per tenere acceso il server Next.js mentre lo visualizzi nel browser?" Then verify:

```powershell
Invoke-WebRequest -UseBasicParsing http://127.0.0.1:3000/ | Select-Object StatusCode,StatusDescription
```

The plain `preview` script still exists as `next build && next start`, but it is not the primary workflow for future agents.

Verified current behavior:

- `npm.cmd run build` passes on Next.js 16.2.6.
- `npm.cmd run preview:win` is the primary preview command after a successful `npm.cmd run build`; use the two commands together to view the production build in the browser.
- `npm.cmd run preview:window` is only the fallback command used inside a persistent terminal window if Codex cannot keep `preview:win` alive.
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
