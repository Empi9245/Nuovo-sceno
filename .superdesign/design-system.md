# Scenografica Design System

Register: brand/portfolio site. Physical scene: production managers, set designers, agencies, and curators scan the site on desktop during planning and on phones while moving between set, lab, and install site. The interface should feel like a precise production index, not a marketing brochure.

## Superdesign Prompt Direction
Selected prompt family from Superdesign search: Brutalist Style Ecommerce Page. Use it only as an industrial navigation reference: raw high-contrast structure, photographic confidence, utilitarian panels, burnt-orange accent. Keep the existing Scenografica system: Archivo Variable, Manrope Variable, warm ink/paper OKLCH palette, small radii, real images, no new gradients or fonts.

## Tokens
- Fonts: Archivo Variable for headings and brand, Manrope Variable for body and navigation.
- Primary ink: var(--color-ink), paper: var(--color-paper), panels: var(--color-panel), accent: var(--color-orange).
- Radius: var(--radius-xs), var(--radius-sm), var(--radius-md). Cards stay at 8px or less.
- Motion: 180-240ms with var(--ease-out), respect reduced motion.

## Navigation Pattern
Desktop menu should expose real child resources for Servizi, Portfolio, and Settori. Use grouped dropdown panels with a compact eyebrow, title, one-line description, and direct links. The dropdown should feel like a production directory: dark panel, fine separators, orange active/hover cues, no decorative glass blur beyond the existing sticky header.

Mobile menu should render the same hierarchy inline, with touch targets above 44px and visible parent links.
