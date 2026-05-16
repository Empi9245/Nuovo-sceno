# Extractable Components

## SiteHeader
- Source: components/site-header.tsx
- Category: layout
- Description: Sticky top navigation with brand mark, desktop nav, quote CTA, and mobile overlay.
- Extractable props: activePath (string), isOpen (boolean)
- Hardcoded: brand symbol, nav text from data/site.ts, lucide icons, CSS class names.

## SiteFooter
- Source: components/site-footer.tsx
- Category: layout
- Description: Global footer with contact details and mapped service/sector links.
- Extractable props: none
- Hardcoded: brand mark, contact data, nav data.

## PageHero
- Source: components/page-hero.tsx
- Category: basic
- Description: Responsive page hero with split headline accent, metadata pills, and image frame.
- Extractable props: eyebrow, title, accentTitle, summary, image, meta
- Hardcoded: class names and title splitting behavior.

## ServiceCard / SectorCard / PortfolioCard
- Source: components/service-card.tsx, components/sector-card.tsx, components/portfolio-card.tsx
- Category: basic
- Description: Clickable card patterns that link to detail pages.
- Extractable props: data object, variant, index
- Hardcoded: icon treatment, image treatment, hover motion.
