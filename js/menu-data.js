/* ══════════════════════════════════════════════════════════════════════════
   1001 Nights — Speisekarten-Daten
   ──────────────────────────────────────────────────────────────────────────
   Einzige Quelle für alle Gerichte. Startseite und Speisekarte lesen von hier.

   PREISE: Die Felder `price` stehen noch auf `null`, weil die Quelle
   (oddmenu.com/p/1001-nights) aus dieser Umgebung nicht abrufbar ist.
   Sobald die Preise vorliegen: Zahl in GEL eintragen, z. B. `price: 28`.
   Karten ohne Preis rendern sauber weiter — es fehlt nur die Zahl.

   Felder pro Gericht:
     id      eindeutiger Anker
     name    Anzeigename
     fa      Transliteration / Originalname (kursiv unter dem Namen)
     desc    ein bis zwei Sätze
     img     Dateiname in media/ (ohne Pfad)
     price   Zahl in GEL oder null
     tags     'veg' | 'vegan' | 'spicy' | 'chef' | 'gf'
     keywords Suchbegriffe/Synonyme (Kebab, Kebap, Aubergine …) — nicht sichtbar

   Kategorien tragen zusätzlich `short` — die Kurzform für die Chip-Leiste.
   ═════════════════════════════════════════════════════════════════════════ */

window.MENU = {
  currency: 'GEL',

  tagLabels: {
    veg:   { label: 'Vegetarisch',     cls: 'tag-accent' },
    vegan: { label: 'Vegan',           cls: 'tag-accent' },
    gf:    { label: 'Glutenfrei',      cls: 'tag-neutral' },
    spicy: { label: 'Scharf',          cls: 'tag-outline' },
    chef:  { label: 'Chef-Empfehlung', cls: 'tag-accent-2' }
  },

  categories: [
    {
      id: 'vorspeisen',
      num: '01',
      name: 'Vorspeisen & Salate',
      short: 'Vorspeisen',
      fa: 'Pišġazā',
      intro: 'Der persische Tisch beginnt breit: kleine Schalen, viel Kräutergrün, Brot aus dem Steinofen. Zum Teilen gedacht.',
      items: [
        { id: 'kashk-e-bademjan', name: 'Kashk-e Bademjān', fa: 'کشک بادمجان',
          desc: 'Über offener Flamme gebratene Auberginen, cremig zerstoßen, mit fermentierter Molke, Minzöl, Knoblauch und gerösteten Zwiebeln.',
          img: 'Kashk-e_Bademjan.webp', price: null, tags: ['veg', 'chef'], keywords: 'aubergine auberginen dip vorspeise mezze molke kashk bademjan' },
        { id: 'bademjan-rolls', name: 'Auberginenröllchen mit Walnuss', fa: 'رول بادمجان',
          desc: 'Dünn geschnittene Auberginen, gerollt um eine Creme aus Walnuss und Knoblauch, mit Granatapfelkernen und Kräutern.',
          img: 'Eggplant_Rolls_with_Nuts.webp', price: null, tags: ['veg'], keywords: 'aubergine auberginen walnuss roellchen rolls granatapfel vorspeise mezze' },
        { id: 'ash-e-adas', name: 'Linsensuppe', fa: 'آش عدس',
          desc: 'Sämige rote Linsen mit Kurkuma, Kreuzkümmel und einem großzügigen Spritzer Zitrone. Warm serviert, mit Fladenbrot.',
          img: 'Lentil_Soup.webp', price: null, tags: ['vegan'], keywords: 'suppe linsen linsensuppe ash adas warm vegan' },
        { id: 'shirazi', name: 'Salād-e Shirāzi', fa: 'سالاد شیرازی',
          desc: 'Gurke, Tomate und Zwiebel fein gewürfelt, angemacht mit Limettensaft, Olivenöl und getrockneter Minze.',
          img: 'Shirazi_Salad.webp', price: null, tags: ['vegan', 'gf'], keywords: 'salat salad gurke tomate shirazi frisch' },
        { id: 'fattoush', name: 'Fattoush', fa: 'فتوش',
          desc: 'Knackiger Levante-Salat mit Sumach, Granatapfelsirup und geröstetem Fladenbrot.',
          img: 'Fattoush_Salad.webp', price: null, tags: ['veg'], keywords: 'salat salad fattoush sumach brot levante' },
        { id: 'greek-salad', name: 'Griechischer Salat', fa: null,
          desc: 'Tomate, Gurke, Paprika und Oliven mit Feta, Oregano und kaltgepresstem Olivenöl.',
          img: 'Greek_salad.webp', price: null, tags: ['veg', 'gf'], keywords: 'salat salad feta oliven griechisch greek' }
      ]
    },
    {
      id: 'kabab',
      num: '02',
      name: 'Vom Holzkohlegrill',
      short: 'Kabāb',
      fa: 'Kabāb',
      intro: 'Alles über glühender Holzkohle, ohne Zwischenschritt. Jeder Spieß kommt mit safraniertem Reis oder Fladenbrot, gegrillter Tomate, Basilikum und Sumach.',
      items: [
        { id: 'kabab-barg', name: 'Kabāb-e Barg', fa: 'کباب برگ',
          desc: 'Rinderfilet in dünnen Blättern, über Nacht in Zwiebelsaft und Safran mariniert, mit Safranbutter bestrichen.',
          img: 'Kabab_Barg.webp', price: null, tags: ['chef', 'gf'], keywords: 'kebab kebap kabab barg rind rindfleisch filet grill spiess steak' },
        { id: 'kabab-soltani', name: 'Kabāb-e Soltāni', fa: 'کباب سلطانی',
          desc: 'Der Sultan unter den Spießen: ein Barg und ein Koobideh nebeneinander, auf einem Bett aus Safranreis.',
          img: 'Barg_Kebab.webp', price: null, tags: ['chef'], keywords: 'kebab kebap kabab soltani sultani barg koobideh kombination grill platte' },
        { id: 'koobideh', name: 'Kabāb-e Koobideh (Lula)', fa: 'کباب کوبیده',
          desc: 'Zweimal gewolftes Lamm und Rind mit Zwiebel und Sumach, von Hand an den flachen Spieß gedrückt.',
          img: 'Lula_Kebab.webp', price: null, tags: [], keywords: 'kebab kebap kabab koobideh kubideh lula luleh hack lamm rind grill spiess' },
        { id: 'bakhtiari', name: 'Kabāb-e Bakhtiāri', fa: 'کباب بختیاری',
          desc: 'Der Spieß der Bergnomaden: safranmariniertes Hähnchen und Filetstücke im Wechsel aufgesteckt.',
          img: 'Bakhtiari_Kebab.webp', price: null, tags: [], keywords: 'kebab kebap kabab bakhtiari huhn haehnchen chicken filet gemischt grill spiess' },
        { id: 'shishlik', name: 'Shishlik', fa: 'شیشلیک',
          desc: 'Lammkoteletts nach Shandiz-Art, vierundzwanzig Stunden mariniert und auf den Punkt gegrillt.',
          img: 'Shishlik.webp', price: null, tags: ['chef', 'gf'], keywords: 'kebab kebap shishlik shashlik lamm kotelett chops grill' },
        { id: 'kabab-fillet', name: 'Kabāb-e Filet', fa: 'کباب فیله',
          desc: 'Reine Filetwürfel am Spieß — nur Salz, Safran und Butter, sonst nichts.',
          img: 'Fillet_Kebab.webp', price: null, tags: ['gf'], keywords: 'kebab kebap kabab filet fillet rind grill spiess' },
        { id: 'joojeh-ba-ostokhan', name: 'Joojeh Kabāb am Knochen', fa: 'جوجه با استخوان',
          desc: 'Hähnchen am Knochen, mariniert in Safran, Joghurt und Limette — außen knusprig, innen saftig.',
          img: 'Chicken_Kebab_with_bones.webp', price: null, tags: ['gf'], keywords: 'kebab kebap joojeh jooje huhn haehnchen chicken safran grill spiess' },
        { id: 'halbes-haehnchen', name: 'Halbes Hähnchen vom Grill', fa: null,
          desc: 'Langsam über der Glut gegart, mit Safranreis, Grillgemüse und Knoblauchsauce.',
          img: 'Chicken_with_bones.webp', price: null, tags: [], keywords: 'huhn haehnchen chicken halbes grill gegrillt' }
      ]
    },
    {
      id: 'khoresht',
      num: '03',
      name: 'Khoresht — Persische Eintöpfe',
      short: 'Khoresht',
      fa: 'Khoresht',
      intro: 'Stundenlang auf kleiner Flamme. Jeder Khoresht wird mit Chelo serviert — gedämpftem Langkornreis mit goldener Tahdig-Kruste.',
      items: [
        { id: 'ghormeh-sabzi', name: 'Ghormeh Sabzi', fa: 'قورمه‌سبزی',
          desc: 'Das Nationalgericht: sieben Kräuter, Kidneybohnen und Lammwürfel, gesäuert mit getrockneter Limette.',
          img: 'Ghorme_Sabzi_Stew.webp', price: null, tags: ['chef'], keywords: 'khoresht eintopf stew ghormeh ghorme sabzi kraeuter bohnen lamm reis' },
        { id: 'gheimeh', name: 'Gheimeh', fa: 'قیمه',
          desc: 'Gelbe Spalterbsen und Lamm in Tomate und Limu Omani, gekrönt mit frittiertem Kartoffelstroh.',
          img: 'Gheimeh_Stew.webp', price: null, tags: [], keywords: 'khoresht eintopf stew gheimeh qeymeh spalterbsen lamm tomate reis' },
        { id: 'mahiche', name: 'Māhiche', fa: 'ماهیچه',
          desc: 'Lammhaxe, vier Stunden in Safran und Zwiebel geschmort, bis sie vom Knochen gleitet.',
          img: 'Mahiche.webp', price: null, tags: ['chef', 'gf'], keywords: 'khoresht eintopf stew mahiche lammhaxe lamm haxe geschmort reis' },
        { id: 'khoresht-auswahl', name: 'Khoresht-Auswahl für zwei', fa: null,
          desc: 'Drei Eintöpfe nach Tagesangebot, dazu Reis, Brot und die Beilagen des Hauses. Für zwei Personen.',
          img: 'Persian_stews.webp', price: null, tags: [], keywords: 'khoresht eintopf stew auswahl platte teilen zwei probierteller' }
      ]
    },
    {
      id: 'reis',
      num: '04',
      name: 'Reis & Festtagsgerichte',
      short: 'Reis',
      fa: 'Polo',
      intro: 'Reis ist in dieser Küche kein Beiwerk. Er wird gewaschen, eingeweicht, kurz gekocht und dann gedämpft — bis jedes Korn einzeln steht.',
      items: [
        { id: 'biryani-chicken', name: 'Biryāni mit Hähnchen', fa: 'بریانی',
          desc: 'Geschichteter Gewürzreis mit Safran, Kardamom und Zimt, mit mariniertem Hähnchen im Topf fertig gedämpft.',
          img: 'Biryani_Chicken.webp', price: null, tags: [], keywords: 'reis polo biryani beryani huhn haehnchen chicken safran' },
        { id: 'chicken-mazbi', name: 'Mazbi-Hähnchen', fa: 'مظبي',
          desc: 'Über Holz gegartes Hähnchen auf gewürztem Reis, nach Art der arabischen Halbinsel — mit Tomatensauce und Sumach.',
          img: 'Chicken_Mazbi.webp', price: null, tags: ['spicy'], keywords: 'reis mazbi madfoon huhn haehnchen chicken arabisch ofen' },
        { id: 'majboos', name: 'Machboos', fa: 'مجبوس',
          desc: 'Langkornreis mit Baharat, Loomi und geschmortem Fleisch — der Klassiker der Golfregion, für den Tisch gedacht.',
          img: 'Majboos.webp', price: null, tags: [], keywords: 'reis machboos majboos kabsa baharat golf fleisch' }
      ]
    },
    {
      id: 'fisch',
      num: '05',
      name: 'Fisch & Meeresfrüchte',
      short: 'Fisch',
      fa: 'Māhi',
      intro: 'Vom Kaspischen Meer bis zum Persischen Golf — Fisch kommt hier ganz auf den Teller, mit Zitrone und Kräutern.',
      items: [
        { id: 'dorado', name: 'Dorade vom Grill', fa: 'ماهی',
          desc: 'Ganze Dorade über Holzkohle, gefüllt mit Kräutern und Knoblauch, mit gegrillter Zitrone und Safranreis.',
          img: 'Dorado_Fish.webp', price: null, tags: ['chef', 'gf'], keywords: 'fisch fish dorade dorado seafood grill zitrone' },
        { id: 'seafood-platte', name: 'Meeresfrüchte-Platte', fa: null,
          desc: 'Garnelen, Tintenfisch und Fisch des Tages, mit Zitrone, Kräuteröl und geröstetem Brot. Zum Teilen.',
          img: 'seafood.webp', price: null, tags: [], keywords: 'fisch fish seafood meeresfruechte garnelen shrimps tintenfisch calamari platte teilen' }
      ]
    },
    {
      id: 'suesses',
      num: '06',
      name: 'Süßes & Tee',
      short: 'Süßes & Tee',
      fa: 'Shirini o Chāy',
      intro: 'Der Abend endet, wie er beginnen sollte: mit schwarzem Tee aus dem Samowar und etwas Süßem dazu.',
      items: [
        { id: 'tee-baklava', name: 'Tee & Baklava', fa: 'چای و باقلوا',
          desc: 'Schwarzer Tee aus dem Samowar, dazu Baklava mit Pistazie und Rosenwasser.',
          img: 'Tea_and_baklava.webp', price: null, tags: ['veg', 'chef'], keywords: 'tee tea chai baklava dessert suess pistazie samowar' },
        { id: 'baklava-teller', name: 'Baklava-Teller', fa: 'باقلوا',
          desc: 'Drei Sorten Baklava — Pistazie, Walnuss und Honig — mit Safranzucker bestäubt.',
          img: 'Tea__Baklava.webp', price: null, tags: ['veg'], keywords: 'baklava dessert suess pistazie walnuss honig teller' },
        { id: 'dessert-des-tages', name: 'Dessert des Tages', fa: null,
          desc: 'Was die Küche heute gemacht hat: Faloodeh, Shole Zard oder Safran-Eis. Fragen Sie uns.',
          img: 'Desert.webp', price: null, tags: ['veg'], keywords: 'dessert suess nachtisch faloodeh shole zard eis' },
        { id: 'sharbat', name: 'Beeren-Sharbat', fa: 'شربت',
          desc: 'Hausgemachter Sirup aus roten Beeren, eisgekühlt aufgegossen, mit Minze und Limette.',
          img: 'RedBerry.webp', price: null, tags: ['vegan', 'gf'], keywords: 'getraenk drink sharbat sirup beeren limonade kalt minze' }
      ]
    }
  ]
};

/* Signature-Auswahl für die Startseite (IDs aus obigen Kategorien) */
window.MENU_SIGNATURE = ['kabab-barg', 'ghormeh-sabzi', 'mahiche', 'kashk-e-bademjan'];
