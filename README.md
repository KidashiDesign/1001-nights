# 1001 Nights — Website

Website für das persische Restaurant **1001 Nights**, Kote Apkhazi 9, Tiflis.
Statisches HTML/CSS/JS, kein Framework, kein Build-Zwang — nur ein kleines
Node-Skript, das die Speisekarte vorab rendert.

```
index.html          Startseite (Hero, Haus, Signature-Gerichte, Galerie, Erlebnis, Besuch)
speisekarte.html    Speisekarte — der Schwerpunkt der Seite
css/style.css       Design-System-Tokens + alle Komponenten
css/fonts.css       selbst gehostete Schriften (@font-face)
fonts/              woff2-Dateien (Italiana, Cormorant Garamond, Lora, Noto Naskh Arabic)
js/site.js          Navigation, Scroll-Animationen, Lightbox, Zähler
js/menu.js          Suche, Filter, Scrollspy der Speisekarte (liest nur aus dem DOM)
js/menu-data.js     Datenquelle der Speisekarte — hier wird gepflegt
tools/build-menu.mjs  rendert menu-data.js in die HTML-Seiten
media/              Originalfotos (1280 px) + media/md (900 px) + media/sm (480 px)
```

Zum Ansehen genügt ein beliebiger Webserver im Projektordner, z. B.
`python3 -m http.server 8000`.

---

## Speisekarte pflegen

Alle Gerichte stehen in **`js/menu-data.js`**. Nach jeder Änderung:

```bash
node tools/build-menu.mjs
```

Das Skript schreibt das fertige Markup zwischen die `<!-- build:… -->`-Marken in
`speisekarte.html` und `index.html` und aktualisiert die Gerichte- und
Kategoriezahlen im Fließtext. Alles zwischen den Marken ist generiert — dort
nicht von Hand editieren.

Ein Gericht sieht so aus:

```js
{ id: 'kabab-barg', name: 'Kabāb-e Barg', fa: 'کباب برگ',
  desc: 'Rinderfilet in dünnen Blättern …',
  img: 'Kabab_Barg.webp', price: 32, tags: ['chef', 'gf'],
  keywords: 'kebab kebap rind filet grill' }
```

| Feld | Bedeutung |
| --- | --- |
| `id` | Anker in der URL, muss eindeutig sein |
| `name` / `fa` | Anzeigename und persische Schreibweise |
| `desc` | ein bis zwei Sätze |
| `img` | Dateiname in `media/` — muss auch in `media/sm/` und `media/md/` liegen |
| `price` | Zahl in GEL, oder `null` |
| `tags` | `veg`, `vegan`, `gf`, `spicy`, `chef` |
| `keywords` | zusätzliche Suchbegriffe, nicht sichtbar (z. B. „kebap" für „Kabāb") |

### Preise

**Die `price`-Felder stehen aktuell auf `null`.** Die Quelle
(oddmenu.com/p/1001-nights) war aus der Build-Umgebung nicht erreichbar, und
erfundene Preise gehören nicht auf die Seite eines echten Restaurants.
Karten ohne Preis rendern sauber weiter — es fehlt nur die Zahl, und über der
Karte steht ein entsprechender Hinweis.

Sobald die Zahlen eingetragen und `node tools/build-menu.mjs` gelaufen ist,
verschwindet der Hinweis automatisch.

### Neue Fotos

Bilder nach `media/` legen und die beiden kleineren Größen erzeugen:

```bash
python3 - <<'PY'
from PIL import Image
import glob, os
for d, tw, q in (('sm', 480, 70), ('md', 900, 74)):
    os.makedirs(f'media/{d}', exist_ok=True)
    for f in glob.glob('media/*.webp'):
        im = Image.open(f).convert('RGB'); w, h = im.size
        out = f'media/{d}/' + os.path.basename(f)
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
| Display / Überschrift / Text | Italiana / Cormorant Garamond / Lora |

Die Regeln des Systems werden durchgehalten: Farbe erscheint als Kontur,
nicht als Fläche; Buttons sind umrandet statt gefüllt; Haarlinien tragen die
Struktur; jedes Foto sitzt in einem Passepartout (`.plate`); Schatten bleiben
ein Flüstern. Alle Werte kommen aus den `--color-*` / `--space-*` /
`--radius-*` / `--shadow-*` Variablen am Kopf von `css/style.css` — dort wird
umgestellt, nicht in den Komponenten.

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
* Schriften liegen selbst gehostet neben dem HTML — kein Drittanbieter-Request,
  kein zusätzlicher DNS-Handshake. Die drei Kernschnitte werden vorgeladen.
* Die Speisekarte steht fertig im HTML; der Browser lädt zur Laufzeit weder
  die Gerichtedaten noch einen Renderer (≈ 14 KB JavaScript insgesamt).
* Lange Kategorielisten nutzen `content-visibility: auto`.

Gemessen lokal (Chromium, ungezippt): First Contentful Paint 76–130 ms,
Startseite ≈ 740 KB / Speisekarte ≈ 800 KB beim ersten Aufruf. **Auf dem Server
gzip oder brotli aktivieren** — HTML und CSS schrumpfen damit auf rund ein
Fünftel.

## Barrierefreiheit

Sichtbarer Fokusring (`:focus-visible`, 2 px Akzent), `aria-expanded` am
Burger-Menü, `aria-pressed` an den Filtern, `aria-current` in der Navigation,
Escape schließt die Lightbox und gibt den Fokus zurück, alle Fotos haben
Alternativtexte, persische Namen sind mit `lang="fa" dir="rtl"` ausgezeichnet.
