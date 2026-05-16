"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Check, Upload } from "lucide-react";

type FormState = {
  projectType: string;
  fullName: string;
  company: string;
  email: string;
  phone: string;
  description: string;
  timing: string;
  fileName: string;
};

const initialState: FormState = {
  projectType: "",
  fullName: "",
  company: "",
  email: "",
  phone: "",
  description: "",
  timing: "",
  fileName: "",
};

type Errors = Partial<Record<keyof FormState, string>>;

export function ContactForm() {
  const [values, setValues] = useState(initialState);
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const errors = useMemo(() => validate(values), [values]);
  const visibleErrors = Object.fromEntries(
    Object.entries(errors).filter(([key]) => touched[key as keyof FormState] || submitted),
  ) as Errors;

  function updateValue(name: keyof FormState, value: string) {
    setValues((current) => ({ ...current, [name]: value }));
  }

  function markTouched(name: keyof FormState) {
    setTouched((current) => ({ ...current, [name]: true }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);

    const nextErrors = validate(values);
    if (Object.keys(nextErrors).length > 0) {
      const firstInvalidName = Object.keys(nextErrors)[0] as keyof FormState;
      const firstInvalidField = event.currentTarget.elements.namedItem(firstInvalidName);
      if (
        firstInvalidField instanceof HTMLInputElement ||
        firstInvalidField instanceof HTMLTextAreaElement ||
        firstInvalidField instanceof HTMLSelectElement
      ) {
        firstInvalidField.focus();
      }
      return;
    }

    setValues(initialState);
    setTouched({});
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <Field label="Tipo di progetto" error={visibleErrors.projectType}>
          <select
            id="projectType"
            name="projectType"
            value={values.projectType}
            onChange={(event) => updateValue("projectType", event.target.value)}
            onBlur={() => markTouched("projectType")}
            aria-invalid={Boolean(visibleErrors.projectType)}
            aria-describedby={visibleErrors.projectType ? "projectType-error" : undefined}
            required
          >
            <option value="">Seleziona un ambito</option>
            <option>Stampa digitale grande formato</option>
            <option>Pubblicità dinamica e wrapping</option>
            <option>Allestimenti scenografici</option>
            <option>Accessori di scena</option>
            <option>Progetto integrato</option>
          </select>
        </Field>

        <Field label="Nome e cognome" error={visibleErrors.fullName}>
          <input
            id="fullName"
            name="fullName"
            value={values.fullName}
            onChange={(event) => updateValue("fullName", event.target.value)}
            onBlur={() => markTouched("fullName")}
            aria-invalid={Boolean(visibleErrors.fullName)}
            aria-describedby={visibleErrors.fullName ? "fullName-error" : undefined}
            autoComplete="name"
            required
          />
        </Field>

        <Field label="Azienda" helper="Opzionale, utile per produzioni, agenzie e brand.">
          <input
            id="company"
            name="company"
            value={values.company}
            onChange={(event) => updateValue("company", event.target.value)}
            onBlur={() => markTouched("company")}
            autoComplete="organization"
          />
        </Field>

        <Field label="Email" error={visibleErrors.email}>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={(event) => updateValue("email", event.target.value)}
            onBlur={() => markTouched("email")}
            aria-invalid={Boolean(visibleErrors.email)}
            aria-describedby={visibleErrors.email ? "email-error" : undefined}
            autoComplete="email"
            required
          />
        </Field>

        <Field label="Telefono" helper="Utile se i tempi sono stretti.">
          <input
            id="phone"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={(event) => updateValue("phone", event.target.value)}
            onBlur={() => markTouched("phone")}
            autoComplete="tel"
          />
        </Field>

        <Field label="Tempistiche" error={visibleErrors.timing}>
          <input
            id="timing"
            name="timing"
            value={values.timing}
            onChange={(event) => updateValue("timing", event.target.value)}
            onBlur={() => markTouched("timing")}
            aria-invalid={Boolean(visibleErrors.timing)}
            aria-describedby={visibleErrors.timing ? "timing-error" : undefined}
            placeholder="Esempio: consegna entro due settimane"
            required
          />
        </Field>
      </div>

      <Field label="Descrizione del progetto" error={visibleErrors.description} full>
        <textarea
          id="description"
          name="description"
          rows={6}
          value={values.description}
          onChange={(event) => updateValue("description", event.target.value)}
          onBlur={() => markTouched("description")}
          aria-invalid={Boolean(visibleErrors.description)}
          aria-describedby={visibleErrors.description ? "description-error" : "description-helper"}
          placeholder="Formato, quantità, materiali, luogo di installazione, reference e urgenze."
          required
        />
      </Field>

      <div className="file-field">
        <label htmlFor="file">
          <Upload size={18} aria-hidden="true" />
          <span>{values.fileName || "Upload file, disegni o reference"}</span>
        </label>
        <input
          id="file"
          name="file"
          type="file"
          onChange={(event) => updateValue("fileName", event.target.files?.[0]?.name || "")}
        />
        <p>PDF, immagini o file compressi aiutano a valutare tempi e materiali.</p>
      </div>

      <div className="form-footer">
        <p>Rispondiamo con una prima valutazione tecnica. Per urgenze di set è meglio indicare data e luogo.</p>
        <button className="button button--primary" type="submit">
          Invia richiesta
        </button>
      </div>

      {submitted && Object.keys(errors).length === 0 ? (
        <motion.div
          className="form-success"
          role="status"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, transform: "translateY(8px)" }}
          animate={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.22, ease: [0.22, 1, 0.36, 1] }}
        >
          <Check size={18} aria-hidden="true" />
          Richiesta pronta. In un progetto reale il modulo verrebbe collegato al sistema di invio scelto.
        </motion.div>
      ) : null}
    </form>
  );
}

function Field({
  label,
  helper,
  error,
  full = false,
  children,
}: {
  label: string;
  helper?: string;
  error?: string;
  full?: boolean;
  children: React.ReactElement<{ id?: string }>;
}) {
  const id = children.props.id;

  return (
    <div className={`field ${full ? "field--full" : ""}`}>
      <label htmlFor={id}>{label}</label>
      {children}
      {helper ? <p className="field__helper">{helper}</p> : null}
      {error ? (
        <p className="field__error" id={`${id}-error`} role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function validate(values: FormState): Errors {
  const errors: Errors = {};
  if (!values.projectType) errors.projectType = "Seleziona il tipo di progetto.";
  if (values.fullName.trim().length < 3) errors.fullName = "Inserisci nome e cognome.";
  if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = "Inserisci un indirizzo email valido.";
  if (values.timing.trim().length < 4) errors.timing = "Indica una tempistica di massima.";
  if (values.description.trim().length < 20) errors.description = "Aggiungi almeno qualche dettaglio sul progetto.";
  return errors;
}
