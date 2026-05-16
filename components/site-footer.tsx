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
