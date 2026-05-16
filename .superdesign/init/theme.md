# Theme

Existing design tokens and global styles.

### app/globals.css

```css
:root {
  --color-ink: oklch(17% 0.012 72);
  --color-ink-soft: oklch(27% 0.016 72);
  --color-ash: oklch(44% 0.015 75);
  --color-paper: oklch(94% 0.012 78);
  --color-paper-deep: oklch(88% 0.017 78);
  --color-panel: oklch(20% 0.012 72);
  --color-panel-soft: oklch(24% 0.014 72);
  --color-line: oklch(42% 0.017 74 / 0.34);
  --color-line-light: oklch(80% 0.016 78 / 0.62);
  --color-orange: oklch(63% 0.145 49);
  --color-orange-strong: oklch(44% 0.14 47);
  --color-cyan: oklch(67% 0.09 210);
  --color-success: oklch(66% 0.12 145);
  --shadow-soft: 0 24px 60px oklch(11% 0.01 72 / 0.2);
  --radius-xs: 4px;
  --radius-sm: 6px;
  --radius-md: 8px;
  --container: min(100% - clamp(32px, 6vw, 96px), 1440px);
  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);
  --header-height: 78px;
  color-scheme: light;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  background: var(--color-paper);
}

body {
  margin: 0;
  background: var(--color-paper);
  color: var(--color-ink);
  font-family: "Manrope Variable", "Segoe UI", sans-serif;
  font-size: 16px;
  line-height: 1.6;
  letter-spacing: 0;
  text-rendering: optimizeLegibility;
}

body::before {
  content: "";
  position: fixed;
  inset: 0;
  z-index: 1000;
  pointer-events: none;
  opacity: 0.06;
  background-image:
    linear-gradient(90deg, var(--color-ink) 1px, transparent 1px),
    linear-gradient(0deg, var(--color-ink) 1px, transparent 1px);
  background-size: 34px 34px;
  mask-image: linear-gradient(180deg, black, transparent 42%);
}

img,
svg {
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
textarea,
select {
  font: inherit;
}

button {
  cursor: pointer;
}

button:disabled {
  cursor: not-allowed;
}

::selection {
  background: var(--color-orange);
  color: var(--color-ink);
}

:focus-visible {
  outline: 3px solid var(--color-cyan);
  outline-offset: 4px;
}

.skip-link {
  position: fixed;
  left: 16px;
  top: 16px;
  z-index: 1200;
  transform: translateY(-140%);
  background: var(--color-paper);
  color: var(--color-ink);
  border: 1px solid var(--color-ink);
  border-radius: var(--radius-sm);
  padding: 10px 14px;
  transition: transform 180ms var(--ease-out);
}

.skip-link:focus {
  transform: translateY(0);
}

h1,
h2,
h3,
h4,
.brand-mark strong {
  font-family: "Archivo Variable", "Arial Narrow", sans-serif;
  line-height: 0.98;
  letter-spacing: 0;
  margin: 0;
}

h1 {
  font-size: clamp(3rem, 7.4vw, 7.8rem);
  max-width: 11ch;
}

h2 {
  font-size: clamp(2.25rem, 4.8vw, 5.2rem);
  max-width: 12ch;
}

h3 {
  font-size: clamp(1.35rem, 2vw, 2rem);
}

p {
  margin: 0;
}

main {
  overflow: clip;
}

.eyebrow {
  color: var(--color-orange-strong);
  font-family: "Archivo Variable", sans-serif;
  font-size: 0.88rem;
  font-weight: 720;
  line-height: 1.2;
  margin: 0 0 18px;
}

.home-hero .eyebrow,
.page-hero .eyebrow,
.page-section--dark .eyebrow,
.cta-section .eyebrow {
  color: var(--color-orange);
}

.page-hero .eyebrow {
  position: relative;
  z-index: 2;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  min-height: var(--header-height);
  border-bottom: 1px solid oklch(93% 0.008 76 / 0.12);
  background: oklch(17% 0.012 72 / 0.84);
  color: var(--color-paper);
  backdrop-filter: blur(18px);
}

.site-header__inner {
  width: var(--container);
  min-height: var(--header-height);
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  align-items: center;
  gap: 22px;
}

.brand-mark {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  min-height: 48px;
}

.brand-mark__symbol {
  position: relative;
  width: 34px;
  height: 30px;
}

.brand-mark__symbol span {
  position: absolute;
  width: 13px;
  height: 13px;
  border-radius: 999px;
  background: var(--color-paper);
}

.brand-mark__symbol span:nth-child(1) {
  left: 0;
  top: 8px;
}

.brand-mark__symbol span:nth-child(2) {
  left: 13px;
  top: 0;
  background: var(--color-orange);
}

.brand-mark__symbol span:nth-child(3) {
  left: 13px;
  bottom: 0;
  background: oklch(74% 0.025 210);
}

.brand-mark strong {
  display: block;
  font-size: 1.13rem;
  line-height: 1;
}

.brand-mark small {
  display: block;
  color: oklch(88% 0.012 78 / 0.74);
  font-size: 0.72rem;
  line-height: 1.35;
}

.desktop-nav {
  justify-self: center;
  display: flex;
  align-items: center;
  gap: 4px;
}

.desktop-nav a,
.nav-quote,
.mobile-nav-toggle {
  min-height: 44px;
  border-radius: var(--radius-sm);
}

.desktop-nav a {
  display: inline-flex;
  align-items: center;
  color: oklch(90% 0.012 78 / 0.75);
  padding: 0 11px;
  font-size: 0.92rem;
  transition: color 180ms var(--ease-out), background 180ms var(--ease-out);
}

.desktop-nav a:hover,
.desktop-nav a.is-active {
  color: var(--color-paper);
  background: oklch(95% 0.008 78 / 0.08);
}

.nav-quote {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid oklch(90% 0.012 78 / 0.24);
  color: var(--color-paper);
  padding: 0 16px;
  font-size: 0.92rem;
  transition: border-color 180ms var(--ease-out), background 180ms var(--ease-out), transform 180ms var(--ease-out);
}

.nav-quote:hover {
  border-color: var(--color-orange);
  background: oklch(63% 0.145 49 / 0.12);
}

.nav-quote:active,
.mobile-nav-toggle:active,
.button:active {
  transform: scale(0.98);
}

.mobile-nav-toggle {
  display: none;
  place-items: center;
  width: 48px;
  border: 1px solid oklch(90% 0.012 78 / 0.2);
  background: transparent;
  color: var(--color-paper);
}

.mobile-nav {
  position: fixed;
  left: 16px;
  right: 16px;
  top: calc(var(--header-height) + 10px);
  z-index: 110;
  display: grid;
  gap: 4px;
  padding: 14px;
  border: 1px solid oklch(88% 0.012 78 / 0.16);
  border-radius: var(--radius-md);
  background: oklch(18% 0.012 72 / 0.96);
  box-shadow: var(--shadow-soft);
}

.mobile-nav a {
  min-height: 46px;
  display: flex;
  align-items: center;
  border-radius: var(--radius-sm);
  color: var(--color-paper);
  padding: 0 12px;
}

.mobile-nav a:hover {
  background: oklch(90% 0.012 78 / 0.08);
}

.mobile-nav__cta {
  background: var(--color-orange);
  color: var(--color-ink);
  justify-content: center;
  font-weight: 760;
}

.button {
  min-height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 1px solid transparent;
  border-radius: var(--radius-sm);
  padding: 13px 18px;
  font-weight: 760;
  line-height: 1.1;
  transition:
    transform 180ms var(--ease-out),
    background 180ms var(--ease-out),
    border-color 180ms var(--ease-out),
    color 180ms var(--ease-out);
}

.button--primary {
  background: var(--color-orange);
  color: var(--color-ink);
}

.button--primary:hover {
  background: oklch(68% 0.14 50);
}

.button--secondary {
  border-color: oklch(93% 0.01 78 / 0.34);
  color: var(--color-paper);
  background: oklch(18% 0.012 72 / 0.3);
}

.button--secondary:hover {
  border-color: var(--color-orange);
  background: oklch(63% 0.145 49 / 0.12);
}

.home-hero {
  position: relative;
  min-height: min(880px, calc(100dvh - var(--header-height)));
  display: grid;
  align-items: end;
  padding: clamp(72px, 11vw, 150px) 0 32px;
  color: var(--color-paper);
  isolation: isolate;
}

.home-hero__image {
  position: absolute;
  inset: 0;
  z-index: -2;
  overflow: hidden;
}

.home-hero__image img {
  object-fit: cover;
  transform: scale(1.05);
}

.home-hero__scrim {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, oklch(13% 0.012 72 / 0.92) 0, oklch(13% 0.012 72 / 0.78) 38%, oklch(13% 0.012 72 / 0.18) 76%),
    linear-gradient(180deg, oklch(13% 0.012 72 / 0.2) 0, oklch(13% 0.012 72 / 0.84) 100%);
}

.home-hero__content {
  width: var(--container);
  margin: 0 auto;
  padding-bottom: clamp(40px, 8vw, 96px);
}

.home-hero__lead {
  max-width: 680px;
  margin-top: 28px;
  color: oklch(92% 0.012 78 / 0.88);
  font-size: clamp(1.1rem, 2vw, 1.45rem);
  line-height: 1.55;
}

.home-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 34px;
}

.home-hero__stats {
  width: var(--container);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  border-top: 1px solid oklch(90% 0.012 78 / 0.18);
}

.home-hero__stats div {
  padding: 22px 24px 0 0;
  border-right: 1px solid oklch(90% 0.012 78 / 0.14);
}

.home-hero__stats div:last-child {
  border-right: 0;
}

.home-hero__stats strong {
  display: block;
  font-family: "Archivo Variable", sans-serif;
  font-size: clamp(1.45rem, 3vw, 2.4rem);
  line-height: 1;
}

.home-hero__stats span {
  display: block;
  color: oklch(90% 0.012 78 / 0.66);
  margin-top: 6px;
}

.page-section,
.page-hero,
.cta-section,
.site-footer {
  width: var(--container);
  margin-inline: auto;
}

.page-section {
  padding: clamp(72px, 10vw, 136px) 0;
}

.page-section--tight {
  padding-top: clamp(46px, 7vw, 92px);
}

.page-section--dark {
  width: 100%;
  max-width: none;
  background: var(--color-ink);
  color: var(--color-paper);
  padding: clamp(80px, 10vw, 140px) max(16px, calc((100vw - 1440px) / 2 + clamp(32px, 6vw, 96px)));
}

.section-heading {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(300px, 0.8fr);
  gap: clamp(28px, 6vw, 92px);
  align-items: end;
  margin-bottom: clamp(34px, 6vw, 72px);
}

.section-heading--start {
  display: block;
  max-width: 760px;
}

.section-heading__copy {
  color: var(--color-ash);
  font-size: clamp(1rem, 1.35vw, 1.14rem);
  max-width: 65ch;
}

.page-section--dark .section-heading__copy {
  color: oklch(90% 0.012 78 / 0.68);
}

.service-rhythm {
  display: grid;
  grid-template-columns: 1.1fr 0.72fr;
  gap: clamp(18px, 3vw, 32px);
  align-items: stretch;
}

.service-rhythm > :first-child {
  grid-row: span 2;
}

.service-card {
  min-height: 100%;
}

.service-card__link,
.portfolio-card {
  height: 100%;
  display: grid;
  background: oklch(96% 0.01 78);
  border: 1px solid var(--color-line-light);
  border-radius: var(--radius-md);
  overflow: hidden;
  transition: border-color 220ms var(--ease-out), box-shadow 220ms var(--ease-out);
  will-change: transform;
}

.service-card__link:hover,
.portfolio-card:hover {
  border-color: oklch(63% 0.145 49 / 0.45);
  box-shadow: 0 18px 40px oklch(26% 0.014 72 / 0.12);
}

.service-card__media,
.portfolio-card__media {
  position: relative;
  min-height: 260px;
  overflow: hidden;
  background: var(--color-paper-deep);
}

.service-card--featured .service-card__media {
  min-height: 520px;
}

.service-card__media img,
.portfolio-card__media img {
  object-fit: cover;
  transition: transform 420ms var(--ease-out);
}

.service-card__link:hover img,
.portfolio-card:hover img,
.sector-card__link:hover img {
  transform: scale(1.045);
}

.service-card__body,
.portfolio-card__body {
  padding: clamp(22px, 3vw, 32px);
}

.service-card__kicker {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--color-ash);
  margin-bottom: 22px;
  font-size: 0.92rem;
}

.icon-chip {
  width: 38px;
  height: 38px;
  display: inline-grid;
  place-items: center;
  border: 1px solid oklch(63% 0.145 49 / 0.45);
  border-radius: var(--radius-sm);
  background: oklch(63% 0.145 49 / 0.1);
  color: var(--color-orange-strong);
  flex: 0 0 auto;
}

.service-card h3,
.portfolio-card h3 {
  margin-bottom: 14px;
}

.service-card p,
.portfolio-card p {
  color: var(--color-ash);
}

.text-link {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  margin-top: 22px;
  color: var(--color-orange-strong);
  font-weight: 780;
}

.sector-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(16px, 2.4vw, 30px);
}

.sector-card {
  min-height: 360px;
}

.sector-card:nth-child(2),
.sector-card:nth-child(3) {
  transform: translateY(38px);
}

.sector-card__link {
  position: relative;
  min-height: 100%;
  display: block;
  overflow: hidden;
  border-radius: var(--radius-md);
  background: var(--color-ink);
  color: var(--color-paper);
  border: 1px solid oklch(92% 0.012 78 / 0.16);
  will-change: transform;
}

.sector-card__link img {
  object-fit: cover;
  opacity: 0.74;
  transition: transform 420ms var(--ease-out), opacity 220ms var(--ease-out);
}

.sector-card__link:hover img {
  opacity: 0.92;
}

.sector-card__overlay {
  position: absolute;
  inset: auto 0 0;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: end;
  gap: 16px;
  padding: clamp(20px, 3vw, 34px);
  background: linear-gradient(180deg, transparent, oklch(13% 0.012 72 / 0.9));
}

.sector-card__overlay p {
  color: oklch(91% 0.012 78 / 0.75);
  margin-bottom: 5px;
}

.trust-grid,
.detail-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1px;
  background: var(--color-line-light);
  border: 1px solid var(--color-line-light);
}

.trust-item,
.detail-panel {
  background: var(--color-paper);
  padding: clamp(22px, 3vw, 34px);
}

.page-section--dark .trust-grid {
  background: oklch(90% 0.012 78 / 0.14);
  border-color: oklch(90% 0.012 78 / 0.14);
}

.page-section--dark .trust-item {
  background: var(--color-panel);
}

.trust-item svg {
  color: var(--color-orange);
  margin-bottom: 26px;
}

.trust-item h3,
.detail-panel h3 {
  margin-bottom: 12px;
  font-size: 1.25rem;
}

.trust-item p,
.detail-panel p,
.detail-panel li {
  color: var(--color-ash);
}

.page-section--dark .trust-item p {
  color: oklch(90% 0.012 78 / 0.68);
}

.client-strip {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 36px;
}

.client-strip span,
.pill-list li,
.page-hero__meta li,
.portfolio-card__body span:first-child {
  display: inline-flex;
  align-items: center;
  min-height: 34px;
  border: 1px solid var(--color-line-light);
  border-radius: 999px;
  padding: 6px 12px;
  color: var(--color-ash);
  font-size: 0.86rem;
}

.page-section--dark .client-strip span {
  border-color: oklch(90% 0.012 78 / 0.16);
  color: oklch(90% 0.012 78 / 0.72);
}

.media-frame {
  position: relative;
  min-height: 520px;
  border-radius: var(--radius-md);
  overflow: hidden;
  background: var(--color-paper-deep);
  border: 1px solid var(--color-line-light);
}

.media-frame__image {
  object-fit: cover;
}

.media-frame__parallax {
  position: absolute;
  inset: -8%;
}

.page-hero {
  --page-hero-padding-top: clamp(54px, 7vw, 96px);
  --page-hero-dark-overhang: calc(var(--page-hero-padding-top) + 3rem);
  position: relative;
  isolation: isolate;
  min-height: min(650px, calc(100dvh - var(--header-height)));
  display: grid;
  grid-template-columns: minmax(0, 0.88fr) minmax(320px, 0.68fr);
  gap: clamp(24px, 5vw, 74px);
  align-items: end;
  padding: var(--page-hero-padding-top) 0 clamp(34px, 4.8vw, 62px);
  color: var(--color-paper);
}

.page-hero__copy {
  align-self: start;
}

.page-hero__title-stack {
  font-family: "Archivo Variable", "Arial Narrow", sans-serif;
  font-size: clamp(3rem, 7.4vw, 7.8rem);
  font-weight: 760;
  line-height: 0.98;
  letter-spacing: 0;
  max-width: min(11ch, 100%);
}

.page-hero--long-title .page-hero__title-stack {
  font-size: clamp(3rem, 6.25vw, 6.8rem);
  max-width: min(13.7ch, 100%);
}

.page-hero__title {
  display: block;
  font: inherit;
  color: var(--color-paper);
  letter-spacing: 0;
  isolation: isolate;
  margin: 0;
  max-width: none;
}

.page-hero__title-main {
  display: block;
  position: relative;
  z-index: 0;
  margin-bottom: 0.035em;
}

.page-hero__title-main::before {
  content: "";
  position: absolute;
  left: -100vmax;
  right: -100vmax;
  top: calc(-1 * var(--page-hero-dark-overhang));
  bottom: -0.035em;
  z-index: -1;
  background: oklch(18% 0.012 72);
}

.page-hero__title-accent {
  position: relative;
  z-index: 1;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  background: var(--color-orange);
  color: var(--color-ink);
  padding: 0 0.1em 0.045em;
}

.page-hero__support {
  max-width: 700px;
  color: oklch(91% 0.012 78 / 0.78);
  margin-top: clamp(18px, 2.4vw, 28px);
}

.page-hero--paper-support .page-hero__support {
  color: var(--color-ink-soft);
}

.page-hero__support p {
  font-size: clamp(1.08rem, 1.6vw, 1.28rem);
  line-height: 1.55;
}

.page-hero__media {
  align-self: end;
  min-height: clamp(300px, 35vw, 480px);
}

.page-hero__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  list-style: none;
  padding: 0;
  margin: 28px 0 0;
}

.page-hero__meta li {
  border-color: oklch(90% 0.012 78 / 0.18);
  background: oklch(23% 0.012 72 / 0.72);
  color: var(--color-paper);
}

.page-hero--paper-support .page-hero__meta li {
  border-color: var(--color-line-light);
  background: transparent;
  color: var(--color-ash);
}

.detail-layout {
  display: grid;
  grid-template-columns: minmax(0, 0.86fr) minmax(320px, 0.55fr);
  gap: clamp(28px, 5vw, 72px);
  align-items: start;
}

.detail-copy {
  display: grid;
  gap: 28px;
}

.detail-copy p {
  color: var(--color-ash);
  font-size: 1.08rem;
}

.detail-stack {
  display: grid;
  gap: 18px;
}

.detail-panel ul,
.pill-list {
  display: grid;
  gap: 11px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.detail-panel li {
  position: relative;
  padding-left: 20px;
}

.detail-panel li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.75em;
  width: 7px;
  height: 7px;
  border-radius: 999px;
  background: var(--color-orange);
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(16px, 2.2vw, 28px);
}

.portfolio-card {
  color: var(--color-ink);
}

.portfolio-card__body span:first-child {
  margin-bottom: 18px;
}

.portfolio-filter {
  display: grid;
  gap: 28px;
}

.filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.filter-bar button {
  min-height: 44px;
  border: 1px solid var(--color-line-light);
  border-radius: 999px;
  padding: 0 15px;
  background: transparent;
  color: var(--color-ash);
  transition: color 180ms var(--ease-out), background 180ms var(--ease-out), border-color 180ms var(--ease-out);
}

.filter-bar button:hover,
.filter-bar button.is-active {
  border-color: var(--color-orange);
  background: oklch(63% 0.145 49 / 0.12);
  color: var(--color-ink);
}

.cta-section {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: end;
  gap: 28px;
  margin-top: clamp(60px, 8vw, 100px);
  margin-bottom: clamp(70px, 10vw, 130px);
  padding: clamp(34px, 6vw, 64px);
  border-radius: var(--radius-md);
  background: var(--color-ink);
  color: var(--color-paper);
  overflow: hidden;
}

.cta-section h2 {
  max-width: 820px;
}

.cta-section p:not(.eyebrow) {
  max-width: 680px;
  margin-top: 18px;
  color: oklch(90% 0.012 78 / 0.72);
}

.contact-layout {
  display: grid;
  grid-template-columns: minmax(280px, 0.45fr) minmax(0, 0.85fr);
  gap: clamp(28px, 6vw, 92px);
  align-items: start;
}

.contact-aside {
  display: grid;
  gap: 22px;
}

.contact-card {
  border: 1px solid var(--color-line-light);
  border-radius: var(--radius-md);
  padding: 24px;
  background: oklch(96% 0.01 78);
}

.contact-card h2 {
  font-size: 1.38rem;
  margin-bottom: 14px;
}

.contact-card a,
.contact-card p {
  color: var(--color-ash);
}

.contact-form {
  display: grid;
  gap: 20px;
  border: 1px solid var(--color-line-light);
  border-radius: var(--radius-md);
  padding: clamp(20px, 4vw, 34px);
  background: oklch(96% 0.01 78);
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}

.field {
  display: grid;
  gap: 8px;
}

.field--full {
  grid-column: 1 / -1;
}

.field label,
.file-field label {
  font-weight: 760;
  color: var(--color-ink-soft);
}

.field input,
.field textarea,
.field select {
  width: 100%;
  min-height: 48px;
  border: 1px solid var(--color-line-light);
  border-radius: var(--radius-sm);
  background: var(--color-paper);
  color: var(--color-ink);
  padding: 12px 13px;
  transition: border-color 180ms var(--ease-out), box-shadow 180ms var(--ease-out), background 180ms var(--ease-out);
}

.field textarea {
  resize: vertical;
  min-height: 150px;
}

.field input:focus,
.field textarea:focus,
.field select:focus {
  border-color: var(--color-orange);
  box-shadow: 0 0 0 4px oklch(63% 0.145 49 / 0.15);
  outline: 0;
}

.field input[aria-invalid="true"],
.field textarea[aria-invalid="true"],
.field select[aria-invalid="true"] {
  border-color: oklch(58% 0.18 28);
}

.field__helper,
.field__error,
.file-field p,
.form-footer p {
  color: var(--color-ash);
  font-size: 0.9rem;
}

.field__error {
  color: oklch(47% 0.16 28);
}

.file-field {
  display: grid;
  gap: 8px;
}

.file-field label {
  min-height: 58px;
  display: flex;
  align-items: center;
  gap: 12px;
  border: 1px dashed oklch(63% 0.145 49 / 0.5);
  border-radius: var(--radius-sm);
  padding: 14px;
  background: oklch(63% 0.145 49 / 0.08);
  cursor: pointer;
}

.file-field input {
  position: absolute;
  inline-size: 1px;
  block-size: 1px;
  opacity: 0;
  pointer-events: none;
}

.form-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  border-top: 1px solid var(--color-line-light);
  padding-top: 20px;
}

.form-success {
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid oklch(66% 0.12 145 / 0.45);
  border-radius: var(--radius-sm);
  background: oklch(66% 0.12 145 / 0.12);
  color: oklch(35% 0.08 145);
  padding: 12px 14px;
}

.faq-list {
  display: grid;
  gap: 10px;
}

.faq-list details {
  border: 1px solid var(--color-line-light);
  border-radius: var(--radius-md);
  background: oklch(96% 0.01 78);
  padding: 0 20px;
}

.faq-list summary {
  min-height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  cursor: pointer;
  font-family: "Archivo Variable", sans-serif;
  font-size: 1.16rem;
  font-weight: 720;
}

.faq-list summary::-webkit-details-marker {
  display: none;
}

.faq-list details p {
  border-top: 1px solid var(--color-line-light);
  color: var(--color-ash);
  padding: 18px 0 22px;
}

.site-footer {
  border-top: 1px solid var(--color-line-light);
  padding: clamp(54px, 8vw, 92px) 0 34px;
}

.site-footer__grid {
  display: grid;
  grid-template-columns: minmax(260px, 1.2fr) minmax(220px, 0.8fr) minmax(180px, 0.6fr) minmax(180px, 0.6fr);
  gap: clamp(28px, 5vw, 70px);
}

.site-footer h2 {
  font-size: 1rem;
  margin-bottom: 18px;
}

.site-footer nav,
.footer-contact {
  display: grid;
  gap: 10px;
}

.site-footer nav a,
.footer-contact a,
.footer-contact span,
.site-footer__brand p,
.site-footer__bottom {
  color: var(--color-ash);
}

.site-footer__brand p {
  max-width: 360px;
  margin-top: 18px;
}

.brand-mark--footer small {
  color: var(--color-ash);
}

.footer-contact {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-contact li {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
}

.footer-contact svg {
  color: var(--color-orange-strong);
  margin-top: 3px;
}

.site-footer__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: clamp(42px, 7vw, 84px);
  border-top: 1px solid var(--color-line-light);
  padding-top: 24px;
  font-size: 0.9rem;
}

.site-footer__bottom div {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.footer-inline-action {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: var(--color-orange-strong);
}

@media (hover: hover) and (pointer: fine) {
  .button:hover,
  .nav-quote:hover {
    transform: translateY(-2px);
  }
}

@media (max-width: 1100px) {
  .desktop-nav,
  .nav-quote {
    display: none;
  }

  .mobile-nav-toggle {
    display: grid;
    justify-self: end;
  }

  .site-header__inner {
    grid-template-columns: auto 1fr;
  }

  .service-rhythm,
  .detail-layout,
  .contact-layout,
  .page-hero {
    grid-template-columns: 1fr;
  }

  .service-rhythm > :first-child {
    grid-row: auto;
  }

  .service-card--featured .service-card__media {
    min-height: 360px;
  }

  .page-hero {
    --page-hero-padding-top: clamp(46px, 7vw, 78px);
    align-items: start;
    gap: clamp(22px, 4vw, 36px);
    min-height: auto;
    padding-top: var(--page-hero-padding-top);
    padding-bottom: clamp(34px, 6vw, 58px);
  }

  .page-hero__media {
    max-width: 680px;
    min-height: clamp(250px, 46vw, 390px);
  }

  .portfolio-grid,
  .trust-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .site-footer__grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 760px) {
  :root {
    --container: min(100% - 32px, 1440px);
    --header-height: 70px;
  }

  body::before {
    opacity: 0.035;
  }

  h1 {
    font-size: clamp(2.85rem, 17vw, 4.8rem);
  }

  h2 {
    font-size: clamp(2.05rem, 11vw, 3.4rem);
  }

  .brand-mark small {
    display: none;
  }

  .home-hero {
    min-height: auto;
    padding-top: 82px;
  }

  .home-hero__scrim {
    background:
      linear-gradient(180deg, oklch(13% 0.012 72 / 0.4), oklch(13% 0.012 72 / 0.92)),
      linear-gradient(90deg, oklch(13% 0.012 72 / 0.78), oklch(13% 0.012 72 / 0.24));
  }

  .home-hero__content {
    padding-bottom: 42px;
  }

  .home-hero__actions,
  .form-footer,
  .site-footer__bottom {
    align-items: stretch;
    flex-direction: column;
  }

  .button {
    width: 100%;
  }

  .home-hero__stats,
  .section-heading,
  .sector-grid,
  .portfolio-grid,
  .trust-grid,
  .form-grid,
  .site-footer__grid {
    grid-template-columns: 1fr;
  }

  .home-hero__stats div {
    border-right: 0;
    border-bottom: 1px solid oklch(90% 0.012 78 / 0.14);
    padding: 18px 0;
  }

  .home-hero__stats div:last-child {
    border-bottom: 0;
  }

  .section-heading {
    gap: 18px;
  }

  .sector-card:nth-child(2),
  .sector-card:nth-child(3) {
    transform: none;
  }

  .sector-card,
  .media-frame {
    min-height: 320px;
  }

  .page-hero {
    --page-hero-padding-top: 42px;
    min-height: auto;
    gap: 22px;
    padding-top: var(--page-hero-padding-top);
    padding-bottom: 30px;
  }

  .page-hero__title-stack,
  .page-hero--long-title .page-hero__title-stack {
    font-size: clamp(2.75rem, 15vw, 4.15rem);
  }

  .page-hero__title-accent {
    padding-inline: 0.075em;
  }

  .page-hero__support {
    margin-top: 20px;
  }

  .page-hero--paper-support .page-hero__support {
    color: var(--color-ink-soft);
  }

  .page-hero__media {
    min-height: clamp(220px, 62vw, 300px);
  }

  .page-section,
  .page-section--dark {
    padding-top: 66px;
    padding-bottom: 66px;
  }

  .cta-section {
    grid-template-columns: 1fr;
    padding: 28px;
  }

  .contact-form {
    padding: 18px;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

```

### package.json

```tsx
{
  "name": "scenografica-website",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@fontsource-variable/archivo": "^5.2.8",
    "@fontsource-variable/manrope": "^5.2.8",
    "lucide-react": "^1.16.0",
    "motion": "^12.38.0",
    "next": "^16.2.6",
    "react": "^19.2.6",
    "react-dom": "^19.2.6"
  },
  "devDependencies": {
    "@types/node": "^25.8.0",
    "@types/react": "^19.2.14",
    "@types/react-dom": "^19.2.3",
    "eslint": "^9.39.4",
    "eslint-config-next": "^16.2.6",
    "typescript": "^6.0.3"
  }
}

```

### next.config.ts

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;

```
