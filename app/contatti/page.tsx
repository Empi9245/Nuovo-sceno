import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/motion/reveal";
import { contactInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Contatta Scenografica a Roma, presso gli Studi di Cinecitta, per richiedere un preventivo su stampa, allestimenti, wrapping e accessori di scena.",
};

const briefChecklist = ["Ambito e formato", "Misure o reference", "Luogo di installazione", "Tempistiche", "File disponibili"];

export default function ContactPage() {
  return (
    <section className="work-order-page">
      <div className="work-order-page__layout">
        <aside className="work-order-page__panel" aria-label="Informazioni di contatto">
          <Reveal className="work-order-page__intro">
            <p className="eyebrow">Contatti</p>
            <h1>Trasforma il progetto in un brief di produzione.</h1>
            <p>
              Un preventivo utile parte da poche informazioni chiare: ambito, formato, tempi, luogo, materiali
              disponibili e file di riferimento.
            </p>
          </Reveal>

          <div className="work-order-page__contact">
            <h2>Contatti diretti</h2>
            <p>
              <MapPin size={18} aria-hidden="true" />
              {contactInfo.address}
            </p>
            <p>
              <Phone size={18} aria-hidden="true" />
              <a href="tel:+390672293660">{contactInfo.phoneOffice}</a>
            </p>
            <p>
              <a href="tel:+393312083134">{contactInfo.phoneMobileOne}</a>
            </p>
            <p>
              <a href="tel:+393358100941">{contactInfo.phoneMobileTwo}</a>
            </p>
            <p>
              <Mail size={18} aria-hidden="true" />
              <a href={`mailto:${contactInfo.emailPrimary}`}>{contactInfo.emailPrimary}</a>
            </p>
            <p>
              <a href={`mailto:${contactInfo.emailSecondary}`}>{contactInfo.emailSecondary}</a>
            </p>
          </div>

          <div className="work-order-page__checklist">
            <h2>Prima di inviare</h2>
            <ul>
              {briefChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </aside>

        <Reveal className="work-order-page__form" delay={0.08}>
          <div className="work-order-page__form-head">
            <span>Work order</span>
            <h2>Richiesta di produzione</h2>
          </div>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
