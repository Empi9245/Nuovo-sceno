"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems, type NavChildItem, type NavItem } from "@/data/site";

function isPathActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

function isPathCurrent(pathname: string, href: string) {
  return pathname === href;
}

function isNavItemActive(pathname: string, item: NavItem) {
  return isPathActive(pathname, item.href) || Boolean(item.children?.some((child) => isPathActive(pathname, child.href)));
}

function describeChild(child: NavChildItem) {
  if (!child.description) {
    return null;
  }

  return child.description.length > 92 ? `${child.description.slice(0, 89).trim()}...` : child.description;
}

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
          <span className="brand-mark__logo-frame" aria-hidden="true">
            <Image
              src="/images/Logo.png"
              alt=""
              width={1024}
              height={1024}
              priority
              sizes="176px"
              className="brand-mark__logo"
            />
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Navigazione principale">
          {navItems.map((item) => {
            const ownCurrent = isPathCurrent(pathname, item.href);
            const active = isNavItemActive(pathname, item);
            const hasChildren = Boolean(item.children?.length);
            const panelClassName = [
              "desktop-nav__panel",
              item.children && item.children.length > 4 ? "desktop-nav__panel--wide" : "",
            ]
              .filter(Boolean)
              .join(" ");

            return (
              <div key={item.href} className={`desktop-nav__item${hasChildren ? " has-submenu" : ""}`}>
                <Link
                  href={item.href}
                  className={`desktop-nav__trigger${active ? " is-active" : ""}`}
                  aria-current={ownCurrent ? "page" : undefined}
                >
                  <span>{item.label}</span>
                  {hasChildren ? <ChevronDown size={13} aria-hidden="true" /> : null}
                </Link>

                {hasChildren ? (
                  <div className={panelClassName} aria-label={`${item.label}: sottopagine`}>
                    <div className="desktop-nav__panel-head">
                      <div>
                        <span>{item.eyebrow}</span>
                        {item.description ? <p>{item.description}</p> : null}
                      </div>
                      <Link href={item.href} className="desktop-nav__overview">
                        Panoramica <ArrowUpRight size={14} aria-hidden="true" />
                      </Link>
                    </div>

                    <div className="desktop-nav__submenu-grid">
                      {item.children?.map((child) => {
                        const childActive = isPathActive(pathname, child.href);
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`desktop-nav__submenu-link${childActive ? " is-active" : ""}`}
                            aria-current={childActive ? "page" : undefined}
                          >
                            {child.eyebrow ? <span>{child.eyebrow}</span> : null}
                            <strong>{child.label}</strong>
                            {describeChild(child) ? <small>{describeChild(child)}</small> : null}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ) : null}
              </div>
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
            {navItems.map((item) => {
              const ownCurrent = isPathCurrent(pathname, item.href);
              const active = isNavItemActive(pathname, item);
              const hasChildren = Boolean(item.children?.length);

              if (!hasChildren) {
                return (
                  <Link key={item.href} href={item.href} className={active ? "is-active" : ""}>
                    {item.label}
                  </Link>
                );
              }

              return (
                <div key={item.href} className="mobile-nav__group">
                  <Link
                    href={item.href}
                    className={`mobile-nav__parent${active ? " is-active" : ""}`}
                    aria-current={ownCurrent ? "page" : undefined}
                  >
                    <span>{item.label}</span>
                    <span>Panoramica</span>
                  </Link>
                  <div className="mobile-nav__children" aria-label={`${item.label}: sottopagine`}>
                    {item.children?.map((child) => {
                      const childActive = isPathActive(pathname, child.href);
                      return (
                        <Link key={child.href} href={child.href} className={childActive ? "is-active" : ""}>
                          {child.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
            <Link href="/contatti" className="mobile-nav__cta">
              Richiedi un preventivo
            </Link>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
