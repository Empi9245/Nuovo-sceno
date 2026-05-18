# Prompt Studio Card/UI Scenografica

Devi migliorare le card, le liste-card e gli accordion FAQ del sito Scenografica. Non partire aggiungendo decorazioni. Prima devi capire perche le superfici attuali non funzionano e poi scegliere la soluzione migliore per il brand.

## Contesto da leggere prima

Leggi questi file prima di toccare codice:

1. `PRODUCT.md`
2. `DESIGN.md`
3. `docs/AI_HANDOFF.md`
4. `app/globals.css`
5. Componenti interessati:
   - `components/environment-map.tsx`
   - `components/faq-list.tsx`
   - `app/settori/page.tsx`
   - `app/faq/page.tsx`

## Problema reale

Alcune superfici sembrano deboli o generiche:

- Card con solo bordo scuro e fondo piatto, come `Confronto operativo` in `/settori`.
- Card/righe `Contesti` troppo basiche, senza una gerarchia fisica o editoriale chiara.
- Caselle FAQ troppo semplici: sembrano elementi da UI generica, non una produzione/manuale tecnico Scenografica.

Il problema NON e che mancano effetti. Il problema e che manca una logica visiva coerente: gerarchia, ritmo, rapporto tra testo e bordo, stati hover/open, e una qualita da dossier industriale.

## Feedback utente da rispettare

Un tentativo precedente non e piaciuto per due ragioni:

- Ha introdotto superfici percepite come viola/pink, fuori brand.
- Ha aggiunto micro-decorazioni e motion senza risolvere davvero la qualita delle card.

Quindi non ripetere quella strada.

## Vincoli non negoziabili

- Usa solo le fondazioni Scenografica gia presenti:
  - `--color-ink`
  - `--color-ink-soft`
  - `--color-ash`
  - `--color-paper`
  - `--color-paper-deep`
  - `--color-panel`
  - `--color-panel-soft`
  - `--color-line`
  - `--color-line-light`
  - `--color-orange`
  - `--color-orange-strong`
- Non introdurre viola, purple, pink, blu neon, gradienti decorativi, glassmorphism o palette nuove.
- Se una superficie appare anche solo leggermente viola/pink, correggila verso `paper`, `paper-deep`, `panel`, `ink`, trasparente o un accento arancione molto controllato.
- Radius massimo: 8px. Usa 4px, 6px o 8px.
- Niente pill grandi. Niente card super arrotondate.
- Niente bento/SaaS look. Niente "dashboard premium" generica.
- Le immagini devono restare reali e centrali dove gia presenti.

## Metodo richiesto

Prima di implementare:

1. Ispeziona `/settori` e `/faq` in browser su desktop, tablet e mobile.
2. Fai una diagnosi scritta di massimo 8 punti:
   - quali superfici sono deboli;
   - perche sembrano generiche;
   - dove il contrasto o il colore tradisce il brand;
   - quale ruolo deve avere ogni tipo di card.
3. Proponi 2 o 3 direzioni possibili, ma scegline una tu. Non chiedere all'utente di scegliere.
4. Spiega perche la direzione scelta e la migliore per Scenografica.

Solo dopo questa diagnosi modifica il codice.

## Direzione consigliata

La direzione piu probabile e una "scheda di produzione" sobria:

- Superfici quasi piatte, ma non vuote.
- Bordi hairline ben dosati.
- Fondi `paper` o `paper-deep` sulle pagine chiare; `panel` o `ink` sulle sezioni scure.
- Arancione usato come elemento funzionale: indice, accento, stato attivo/open, non come decorazione diffusa.
- Gerarchia interna piu forte: titolo, breve testo, lista o risposta devono avere rapporti chiari.
- Le card devono sembrare pezzi di un manuale operativo, non riquadri marketing.

## Cosa evitare

Evita questi errori anche se sembrano soluzioni rapide:

- Aggiungere ombre grandi per "rendere moderne" le card.
- Aggiungere chip ovunque.
- Usare `color-mix` in modo casuale fino a ottenere tinte violacee.
- Usare hover troppo visibili o giocosi.
- Trasformare tutte le card nello stesso componente visivo.
- Rendere FAQ, contesti e confronto operativo identici.
- Aggiungere gradienti decorativi.
- Usare box arancioni pesanti dietro troppo testo.

## Motion

La motion deve essere quasi invisibile:

- Usa solo `transform`, `opacity`, `border-color`, `background`, `box-shadow`.
- Durata consigliata: 160-240ms.
- Easing: `var(--ease-out)`.
- Su hover: massimo `translateY(-2px)` o un cambio bordo/fondo. Non tilt aggressivo.
- Su FAQ open: stato chiaro e stabile. Niente animazioni che fanno saltare il layout.
- Rispetta `prefers-reduced-motion` dove serve.

## Superfici da migliorare

Lavora in modo mirato su:

- `/settori`
  - `EnvironmentMap`
  - `.environment-map__link`
  - `.split-page-hero__panel-list`
  - `.sector-comparison__item`
- `/faq`
  - `.faq-list details`
  - `.faq-list summary`
  - `.manual-group`
  - eventuale layout tra gruppi FAQ

Non cambiare hero, header, footer, copy o contenuti se non serve alla leggibilita della card.

## Criterio di successo

Il risultato deve sembrare:

- piu Scenografica;
- piu fisico e tecnico;
- piu chiaro nella gerarchia;
- meno generico;
- privo di viola/pink;
- moderno senza sembrare SaaS;
- motion sobria, utile, non ornamentale.

Se devi scegliere tra "piu bello ma meno coerente" e "piu sobrio ma perfettamente Scenografica", scegli Scenografica.

## Verifica finale obbligatoria

1. Esegui:

```powershell
npm.cmd run build
```

2. Poi esegui:

```powershell
npm.cmd run preview:win
```

3. Verifica in browser:
   - `/settori`
   - `/faq`
   - desktop
   - tablet
   - mobile

4. Prima di finalizzare, controlla visivamente che non ci siano superfici viola/pink e che le FAQ non sembrino una UI generica.
