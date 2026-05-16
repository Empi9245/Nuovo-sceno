# Layouts

### app/layout.tsx

```tsx
import "@fontsource-variable/archivo";
import "@fontsource-variable/manrope";
import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Scenografica, stampa grande formato e set design a Cinecittà",
    template: "%s | Scenografica",
  },
  description:
    "Scenografica produce stampa digitale grande formato, allestimenti scenografici, pubblicità dinamica e accessori di scena presso gli Studi di Cinecittà a Roma.",
  metadataBase: new URL("https://www.scenografica.com"),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it">
      <body>
        <a className="skip-link" href="#contenuto">
          Salta al contenuto
        </a>
        <SiteHeader />
        <main id="contenuto">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

```

### components/site-header.tsx

```tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="brand-mark" aria-label="Scenografica, torna alla homepage">
          <span className="brand-mark__symbol" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span>
            <strong>Scenografica</strong>
            <small>wide format & set design</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Navigazione principale">
          {navItems.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link key={item.href} href={item.href} className={active ? "is-active" : ""}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link href="/contatti" className="nav-quote">
          Preventivo
        </Link>

        <button
          className="mobile-nav-toggle"
          type="button"
          aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.nav
            className="mobile-nav"
            aria-label="Navigazione mobile"
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, transform: "translateY(-8px)" }}
            animate={{ opacity: 1, transform: "translateY(0px)" }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, transform: "translateY(-8px)" }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link href="/contatti" className="mobile-nav__cta">
              Richiedi un preventivo
            </Link>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

```

### components/site-footer.tsx

```tsx
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { contactInfo, navItems, servicePillars, sectors } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div className="site-footer__brand">
          <Link href="/" className="brand-mark brand-mark--footer" aria-label="Scenografica, homepage">
            <span className="brand-mark__symbol" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span>
              <strong>Scenografica</strong>
              <small>wide format & set design</small>
            </span>
          </Link>
          <p>
            Produzione grafica, allestimenti scenografici e accessori di scena presso gli Studi di Cinecittà.
          </p>
        </div>

        <div>
          <h2>Contatti</h2>
          <ul className="footer-contact">
            <li>
              <MapPin size={18} aria-hidden="true" />
              <span>{contactInfo.address}</span>
            </li>
            <li>
              <Phone size={18} aria-hidden="true" />
              <a href={`tel:+390672293660`}>{contactInfo.phoneOffice}</a>
            </li>
            <li>
              <Mail size={18} aria-hidden="true" />
              <a href={`mailto:${contactInfo.emailPrimary}`}>{contactInfo.emailPrimary}</a>
            </li>
          </ul>
        </div>

        <nav aria-label="Servizi nel footer">
          <h2>Servizi</h2>
          {servicePillars.map((service) => (
            <Link key={service.slug} href={service.href}>
              {service.title}
            </Link>
          ))}
        </nav>

        <nav aria-label="Settori nel footer">
          <h2>Settori</h2>
          {sectors.map((sector) => (
            <Link key={sector.slug} href={sector.href}>
              {sector.title}
            </Link>
          ))}
        </nav>
      </div>

      <div className="site-footer__bottom">
        <span>© 2026 {contactInfo.company}</span>
        <div>
          {navItems.slice(1, 4).map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="/contatti" className="footer-inline-action">
            Preventivo <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

```
