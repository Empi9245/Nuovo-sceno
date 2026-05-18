import "@fontsource-variable/archivo";
import "@fontsource-variable/manrope";
import type { Metadata } from "next";
import { ScrollToTop } from "@/components/scroll-to-top";
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
        <ScrollToTop />
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
