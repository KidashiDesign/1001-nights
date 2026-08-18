# 1001 Nights — Website

Website für das persische Restaurant **1001 Nights**, Kote Apkhazi 9, Tiflis.
Vier Sprachen, gebaut mit **[Astro](https://astro.build)**. Herauskommt reines
HTML: kein Framework im Browser, keine Hydration, nur die zwei kleinen Skripte,
die es für Lightbox, Suche und Filter wirklich braucht.

```bash
npm install
npm run dev       # Entwicklungsserver auf http://localhost:4321
npm run build     # erzeugt dist/ — das ist die Seite
npm run preview   # dist/ ansehen, wie der Server sie ausliefert
npm run check     # Astro- und TypeScript-Prüfung
```

## Sprachen

| Sprache | Pfad | Richtung |
| --- | --- | --- |
| English (Standard) | `/` | ltr |
| فارسی | `/fa/` | **rtl** |
| Русский | `/ru/` | ltr |
| ქართული | `/ka/` | ltr |

Jede Sprache hat eine Startseite und eine Speisekarte — acht Seiten insgesamt,
alle statisch, alle mit `hreflang` untereinander verknüpft, dazu `sitemap.xml`.
Der Sprachumschalter im Kopf springt immer auf dieselbe Seite in der anderen
Sprache. Er ist ein `<details>`-Aufklapper und funktioniert ohne JavaScript.

## Aufbau

```
astro.config.mjs        Domain, URL-Form, Inhaltsprüfung

src/data/ui.js          Oberflächen- und Seitentexte, ein Block je Sprache
src/data/menu.js        alle Gerichte, in allen vier Sprachen

src/pages/[...lang]/index.astro   Startseite — einmal geschrieben, viermal gebaut
src/pages/[...lang]/menu.astro    Speisekarte, ebenso
src/pages/sitemap.xml.js          sitemap.xml mit hreflang

src/layouts/Base.astro      Kopf, Navigation, Fuß — das Gerüst jeder Seite
src/components/             Nav, Footer, LangSwitch, Dish, Icon
src/components/home/        die acht Abschnitte der Startseite

src/lib/site.js         Wege (URLs, Bildpfade) und Kennzahlen
src/lib/normalize.js    Suchnormalisierung — für Build und Browser dieselbe
src/lib/validate.js     bricht den Build ab, wenn ein Inhalt fehlt
src/lib/types.ts        Typen, aus den Daten abgeleitet

src/styles/style.css    Design-System-Tokens und alle Komponenten
src/styles/fonts.css    selbst gehostete Schriften (@font-face)
src/assets/fonts/       woff2: Italiana, Cormorant Garamond, Lora,
                        Noto Serif Georgian, Vazirmatn, Noto Naskh Arabic
src/scripts/site.js     Navigation, Scroll-Animationen, Lightbox, Zähler
src/scripts/menu.js     Suche, Filter, Scrollspy — liest ausschließlich aus dem DOM

public/media/           Originalfotos (1280 px) + md (900 px) + sm (480 px)
```

`npm run build` legt die fertige Seite in **`dist/`** — acht HTML-Dateien plus
`sitemap.xml`, genau dort, wo sie vorher lagen:

```
dist/index.html          dist/menu.html          English (Standard)
dist/fa/index.html       dist/fa/menu.html       فارسی
dist/ru/index.html       dist/ru/menu.html       Русский
dist/ka/index.html       dist/ka/menu.html       ქართული
```

Dafür sorgt `build.format: 'preserve'` in `astro.config.mjs`. Die Umstellung auf
Astro hat also **keine einzige URL verändert** — alte Links, Lesezeichen und die
Einträge in den Suchmaschinen bleiben gültig.

`dist/` gehört nicht ins Repository; es entsteht beim Bauen neu.

### Was die Umstellung geändert hat

Das Markup der acht Seiten ist bis auf drei Stellen zeichengleich mit dem, was
das alte Node-Skript erzeugt hat:

* Interne Links laufen jetzt ab der Wurzel (`/menu.html`) statt relativ
  (`../menu.html`). Damit stimmt der Sprachumschalter aus jeder Tiefe.
* Auf der **englischen** Speisekarte zeigten „Restaurant“, „Experience“ und
  „Visit“ auf `#restaurant` — also auf einen Anker, den es dort gar nicht gibt.
  Sie führen jetzt zur Startseite zurück, wie in den anderen drei Sprachen.
* Die Lightbox beschriftete ihren Schließen-Knopf überall auf Deutsch, obwohl
  die Übersetzung (`ui[…].lightbox.close`) längst in den Inhalten stand. Sie
  wird jetzt benutzt.

---

## Speisekarte pflegen

Alle Gerichte stehen in **`src/data/menu.js`**, jedes mit Name, Beschreibung
und Suchbegriffen in allen vier Sprachen:

```js
{
  id: 'kabab-barg', img: 'Kabab_Barg.webp', price: null, tags: ['chef', 'gf'],
  name: { en: 'Kabāb-e Barg', fa: 'کباب برگ', ru: 'Кебаб Барг', ka: 'ქაბაბ ბარგი' },
  desc: { en: '…', fa: '…', ru: '…', ka: '…' },
  kw:   { en: 'kebab kebap beef grill', fa: '…', ru: '…', ka: '…' }
}
```

| Feld | Bedeutung |
| --- | --- |
| `id` | Anker in der URL, sprachunabhängig, muss eindeutig sein |
| `img` | Dateiname in `public/media/` — muss auch in `sm/` und `md/` liegen |
| `price` | Zahl in GEL, oder `null` |
| `tags` | `veg`, `vegan`, `gf`, `spicy`, `chef` — Beschriftungen in `tagLabels` |
| `name`, `desc` | je Sprache, alle vier Pflicht |
| `kw` | zusätzliche Suchbegriffe, nie sichtbar (z. B. „kebap" für „Kabāb") |

Der Build bricht ab, wenn eine Sprache fehlt, eine `id` doppelt vergeben ist,
ein Kennzeichen unbekannt ist oder ein Foto in einer der drei Größen fehlt —
`src/lib/validate.js` prüft das, bevor irgendetwas gerendert wird.

Die englische Schreibweise und die englischen Suchbegriffe landen zusätzlich im
Suchindex **jeder** Sprachfassung — wer auf der georgischen Karte „kebab" tippt,
findet die Spieße trotzdem.

### Preise

**Alle `price`-Felder stehen auf `null`.** Die Quelle
(oddmenu.com/p/1001-nights) war aus der Build-Umgebung nicht erreichbar, und
erfundene Preise gehören nicht auf die Seite eines echten Restaurants.
Karten ohne Preis rendern sauber weiter; über der Karte steht ein Hinweis in
der jeweiligen Sprache.

Sobald die Zahlen eingetragen sind und `npm run build` gelaufen ist,
verschwindet der Hinweis auf allen acht Seiten automatisch.

### Neue Fotos

Bilder nach `public/media/` legen und die zwei kleineren Größen erzeugen
(sonst bricht der nächste Build ab und nennt das fehlende Foto beim Namen):

```bash
python3 - <<'PY'
from PIL import Image
import glob, os
for d, tw, q in (('sm', 480, 70), ('md', 900, 74)):
    os.makedirs(f'public/media/{d}', exist_ok=True)
    for f in glob.glob('public/media/*.webp'):
        im = Image.open(f).convert('RGB'); w, h = im.size
        out = f'public/media/{d}/' + os.path.basename(f)
        (im if w <= tw else im.resize((tw, round(h*tw/w)), Image.LANCZOS)).save(out, 'WEBP', quality=q, method=6)
PY
```

---

## Design

Grundlage ist der Styleguide **„Classical"**, überschrieben mit den
Marken-Tokens aus `1001 Nights - Styleguide.dc.html`:

| Rolle | Wert |
| --- | --- |
| Hintergrund / Fläche | `#F9F8ED` / `#F1EFDD` |
| Text, Nacht | `#232326`, Kolophon `#1A1A1C` |
| Akzent (Oliv) | `#6E7A3A` |
| Akzent 2 (Gold) | `#C7A94A` |
| Zweite dunkle Fläche (Petrol) | `#3A4E4A` |

Die Regeln des Systems werden durchgehalten: Farbe erscheint als Kontur,
nicht als Fläche; Buttons sind umrandet statt gefüllt; Haarlinien tragen die
Struktur; jedes Foto sitzt in einem Passepartout (`.plate`); Schatten bleiben
ein Flüstern. Alle Werte kommen aus den Variablen am Kopf von
`src/styles/style.css` — dort wird umgestellt, nicht in den Komponenten.

### Schrift je Schriftsystem

Italiana kann nur Latein. Jede Sprache bekommt deshalb ein Display, das ihre
Zeichen wirklich hat — gesetzt über `:root:lang(…)`:

| Sprache | Display | Überschrift | Fließtext |
| --- | --- | --- | --- |
| en | Italiana | Cormorant Garamond | Lora |
| ru | Cormorant Garamond | Cormorant Garamond | Lora |
| ka | Noto Serif Georgian | Noto Serif Georgian | Noto Serif Georgian |
| fa | Vazirmatn | Vazirmatn | Vazirmatn |

Die Wortmarke „1001 Nights" bleibt überall in Italiana und lateinisch — das
Schild vor der Tür und die Seite sollen dasselbe sagen. Im persischen Satz
ist sie zusätzlich mit `unicode-bidi: isolate` gegen die Bidi-Umsortierung
geschützt, sonst würde daraus „Nights 1001".

### Laufweite

Versalsperrung ist eine lateinische Geste. Arabische Schrift **verbindet**
ihre Buchstaben — jede Sperrung reißt die Verbindungen auf. Alle
Kapitälchen-Stellen lesen deshalb aus `--track-wide` / `--track-kicker` /
`--track-caps`, und auf der persischen Fassung stehen diese Token auf `0`.

### Rechts nach links

Die persische Fassung läuft mit `dir="rtl"`. Kanten sind durchgehend logisch
gesetzt (`inset-inline-start`, `padding-inline`, `text-align: start`), sodass
das Layout ohne Sonderregeln spiegelt. Ausdrücklich gedreht werden nur:
Pfeil-Icons (`.dir-flip`), die Unterstrich-Wischer, der Farbverlauf über dem
Hero, die Abblendkante der Chip-Leiste und das Burger-Kreuz. Telefonnummer,
E-Mail, Uhrzeiten und Preise stehen in `dir="ltr"`-Inseln.

## Bewegung

Die Interaktionen der mitgelieferten Webflow-Vorlage wurden nachgebaut, aber
ohne jQuery und ohne Webflow-Runtime — mit `IntersectionObserver` und
CSS-Transitions:

| Was | Wie |
| --- | --- |
| Hero-Einstieg | `[data-enter="up\|left\|right\|fade"]`, gestaffelt über `data-delay` |
| Scroll-Reveal | `[data-reveal="up\|left\|right\|fade\|mask"]` |
| Foto-Zoom beim Erscheinen | `[data-shrink]` — Bild fährt von `scale(1.16)` zurück |
| Gestaffelte Gruppen | `[data-stagger="70"]` am Container verteilt die Verzögerungen |
| Zeilenweiser Text | `.line-mask > span` |
| Zähler | `[data-count="27"]` |
| Hero-Parallax | nur ab 900 px, `requestAnimationFrame`-gedrosselt |
| Laufband | reine CSS-Animation, pausiert beim Überfahren |

`prefers-reduced-motion: reduce` schaltet alles ab und zeigt jeden Inhalt
sofort. Ohne JavaScript sind ebenfalls alle Inhalte sichtbar (`.no-js`).

## Performance

* Bilder in drei Größen mit `srcset`/`sizes`; alles außer dem Hero ist `lazy`.
* Der Hero wird mit `imagesrcset` vorgeladen, damit auf dem Handy nicht die
  Desktop-Fassung gezogen wird.
* Schriften liegen selbst gehostet daneben — kein Drittanbieter-Request. Über
  `unicode-range` lädt jede Sprachfassung nur ihre eigenen Schnitte; die
  Bezeichnungen im Sprachumschalter nennen zuerst Systemschriften, damit
  keine Seite 63 KB Georgisch nachlädt, nur um ein Wort zu setzen.
  Astro versieht Schriften und Stylesheet mit einem Inhalts-Hash — sie dürfen
  damit dauerhaft zwischengespeichert werden. Vorgeladen wird genau die URL,
  die das Stylesheet später anfragt, also nie zweimal dieselbe Datei.
* Die Speisekarte steht fertig im HTML; der Browser lädt zur Laufzeit weder
  die Gerichtedaten noch einen Renderer — rund 5 KB JavaScript auf der
  Startseite, rund 8 KB auf der Karte.
* Lange Kategorielisten nutzen `content-visibility: auto`.

**Auf dem Server gzip oder brotli aktivieren** — HTML und CSS schrumpfen
damit auf rund ein Fünftel.

## Barrierefreiheit

Sprunglink zum Inhalt, sichtbarer Fokusring (`:focus-visible`, 2 px Akzent),
`aria-expanded` am Burger-Menü, `aria-pressed` an den Filtern, `aria-current`
in Navigation und Sprachumschalter, Escape schließt Lightbox und
Sprachaufklapper und gibt den Fokus zurück, alle Fotos haben Alternativtexte
in der Seitensprache, fremdsprachige Einschübe sind mit `lang` und `dir`
ausgezeichnet.

## Noch zu prüfen

* **Übersetzungen** sollten von Muttersprachlern gegengelesen werden —
  besonders die georgische und die persische Fassung.
* **Öffnungszeiten und E-Mail** sind angenommen, nicht bestätigt.
  Adresse und Telefonnummer stammen vom eigenen Nowruz-Plakat des Hauses.
* **Domain**: `site` in `astro.config.mjs` steht auf `https://1001nights.ge`
  und speist canonical, hreflang und sitemap. Bei einer anderen Domain wird
  nur dort umgestellt.
