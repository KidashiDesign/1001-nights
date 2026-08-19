/* ══════════════════════════════════════════════════════════════════════════
   1001 Nights — interface and page copy, one block per language
   ──────────────────────────────────────────────────────────────────────────
   English is the default language and lives at the site root. The other three
   sit in their own folders: /fa/ (right-to-left), /ru/, /ka/.
   Every block carries the same keys — tools/build.mjs checks that on build.

   The wordmark stays "1001 Nights" in every language so the sign outside and
   the site read as one; `brandSub` carries the local subtitle from the
   restaurant's own storefront.
   ═════════════════════════════════════════════════════════════════════════ */

const LANGS = [
  { code: 'en', dir: 'ltr', path: '',    label: 'English',  htmlLang: 'en' },
  { code: 'fa', dir: 'rtl', path: 'fa/', label: 'فارسی',    htmlLang: 'fa' },
  { code: 'ru', dir: 'ltr', path: 'ru/', label: 'Русский',  htmlLang: 'ru' },
  { code: 'ka', dir: 'ltr', path: 'ka/', label: 'ქართული',  htmlLang: 'ka' }
];

const ui = {

  /* ══════════════════════════════════════════════════════════ ENGLISH ══ */
  en: {
    brandSub: 'Restaurant',
    langLabel: 'Language',
    skipToContent: 'Skip to content',

    meta: {
      homeTitle: '1001 Nights — Persian Restaurant in Tbilisi',
      homeDesc: 'Persian cooking in the old town of Tbilisi: kebab over charcoal, khoresht from the pot, saffron rice and tea from the samovar. Kote Apkhazi 9.',
      menuTitle: 'Menu — 1001 Nights, Persian Restaurant in Tbilisi',
      menuDesc: 'The menu of 1001 Nights in Tbilisi: starters, charcoal kebab, Persian stews, rice dishes, fish and sweets — every dish with a photo.',
      aboutTitle: 'About us — 1001 Nights, Persian Restaurant in Tbilisi',
      aboutDesc: 'The story, the kitchen and what we hold to at 1001 Nights: Persian hospitality in the old town of Tbilisi, since 2012.'
    },

    nav: { menu: 'Menu', restaurant: 'Restaurant', experience: 'Experience', visit: 'Visit', homeLabel: 'Home', about: 'About',
           reserve: 'Reserve', reserveLong: 'Book a table', openMenu: 'Open menu', main: 'Main navigation', home: '1001 Nights — home' },

    hero: {
      kicker: 'Persian kitchen · Tbilisi, since 2012',
      tagline: 'A thousand flavours, a thousand stories.',
      sub: 'Kebab over charcoal, khoresht from the pot, rice with a golden crust. In the heart of the old town, on Kote Apkhazi.',
      ctaMenu: 'See the menu', ctaReserve: 'Book a table',
      fact1: 'Kote Apkhazi 9', fact2: 'Daily 11–23', fact3: 'Halal · family run'
    },

    marquee: ['Saffron', 'Pomegranate', 'Charcoal', 'Dried lime', 'Tahdig', 'Sumac', 'Rose water', 'Pistachio'],

    story: {
      kicker: '01 — The house',
      titleA: 'An evening that', titleB: 'refuses to end',
      lead: 'Behind the yellow façade on Kote Apkhazi is a room where the same thing has happened for more than ten years: the grill glows from midday, the pots have been on a low flame since morning, and at some point in the evening somebody starts to sing.',
      body: 'Our kitchen came from Isfahan and Shiraz — and picked up whatever it liked on the way to Tbilisi: the sumac of the Levant, the baharat of the Gulf, Georgian bread from the clay oven. What stays is the Persian rule: no spice pushes to the front, everything is given time.',
      stat1: 'Years in Tbilisi', stat2: 'Dishes on the menu', stat3: 'Hours for one Māhiche',
      link: 'Opening hours & directions', badgeSince: 'Since', badgeCity: 'Tbilisi'
    },

    signature: {
      kicker: '02 — From the kitchen',
      title: 'Four to begin with',
      sub: 'If this is your first time here, order these. Everything else is on the menu.',
      cta: 'Full menu — {n} dishes'
    },

    quote: { text: 'Tell me what you eat, and I will tell you where you come from.', source: 'Persian saying' },

    about: {
      hero: {
        kicker: 'About us',
        title: 'A house that keeps its own time',
        lead: 'Kote Apkhazi 9 has smelled of charcoal and saffron since 2012. This is the story of the kitchen behind it — where it came from, what it believes, and who keeps the fire going.'
      },
      story: {
        kicker: '01 — Where it started',
        titleA: 'From Isfahan', titleB: 'to the old town',
        lead: 'The recipes travelled before we did: a grandmother’s khoresht, a father’s way with a skewer, a whole family’s sense of when the rice is ready and when it isn’t. 1001 Nights opened in 2012 on one idea — cook the way we were taught, and let Tbilisi in.',
        body: 'The city gave something back. Georgian bread came out of the clay oven and onto our tables; a Levantine touch of sumac found its way into a Persian stew; the old town’s slow evenings taught us to stop rushing the tea. None of it changed what the kitchen believes — that a dish needs time more than it needs anything else.',
        extra: 'Ten years on, the grill still glows from midday and the pots still simmer from morning. The room fills the way it always has: family first, then friends, then whoever is walking past and follows the smell inside.',
        stat1: 'Years in Tbilisi', stat2: 'Dishes on the menu', stat3: 'Hours for one Māhiche',
        badgeSince: 'Since', badgeCity: 'Tbilisi'
      },
      values: {
        kicker: '02 — What we hold to',
        title: 'Three things that don’t change',
        sub: 'Trends come and go through the old town. These three don’t move.',
        v1title: 'Nothing rushed',
        v1text: 'Khoresht stays on a low flame from morning. Kebab comes off the charcoal only when it is ready — not when the ticket says so.',
        v2title: 'One spice at a time',
        v2text: 'Saffron, sumac, dried lime, rose water — each has its moment. Our cooking makes room for one voice, not a crowd of them.',
        v3title: 'The table is family',
        v3text: 'However far you have come from, you sit down here the way you would at home — and you leave with more food than you ordered.'
      },
      team: {
        kicker: '03 — Who cooks for you',
        title: 'Not one chef — three generations',
        sub: 'The kitchen has always been a family matter. These are the hands behind it.',
        r1title: 'The grill', r1text: 'Charcoal glowing from midday, turned by hand, never left alone.',
        r2title: 'The pots', r2text: 'Khoresht and Ghormeh Sabzi, on a flame low enough to forget — until the smell reminds you.',
        r3title: 'The room', r3text: 'Whoever seats you tonight has most likely fed your neighbours too.'
      },
      quote: { text: 'The guest is a gift from God.', source: 'Persian proverb — the rule of this house' },
      cta: {
        kicker: 'Come see for yourself',
        title: 'The best explanation is a table',
        text: 'Descriptions only go so far. Come taste the saffron yourself — we’ll keep a table warm for you.',
        ctaReserve: 'Book a table', ctaMenu: 'See the menu'
      }
    },

    gallery: {
      kicker: '03 — At the table', title: 'What it looks like here',
      c1: 'Lamb chops in the Shandiz manner, marinated 24 hours.',
      c2: 'Black tea from the samovar, baklava with pistachio.',
      c3: 'Aubergine with fermented whey, mint oil and fried onions.',
      c4: 'The entrance in the old town of Tbilisi.',
      c5: 'Prawns, squid and the fish of the day.',
      c6: 'A whole dorado over charcoal, stuffed with herbs.'
    },

    events: {
      kicker: '04 — Experience', title: 'Music, feasts, long evenings',
      sub: 'At Nowruz, at Charshanbe Souri and on perfectly ordinary Fridays, there is live music here. Book early on those nights — the room fills fast.',
      e1date: '19 March · Nowruz', e1title: 'Live concert for the new year',
      e1text: 'Three musicians, one evening, the whole house: Persian classics live from 8 pm, with the kitchen’s Nowruz menu.',
      e2date: 'Last Tuesday of the year', e2title: 'Jashn-e Charshanbe Souri',
      e2text: 'The fire festival before Nowruz: Ajil-e Moshkel-Gosha, music and a menu that sees the winter out.',
      cta: 'Reserve a place'
    },

    visit: {
      kicker: '05 — Visit', title: 'Come and see us',
      sub: 'Two minutes from the Metekhi bridge, in the middle of the old town. We serve inside and out — for larger groups, a quick call is best.',
      address: 'Address', contact: 'Contact', hours: 'Opening hours',
      whatsapp: 'Also on WhatsApp', map: 'On the map',
      street: 'Kote Apkhazi St. 9', city: '0105 Tbilisi, Georgia',
      row1: 'Mon – Thu', row2: 'Fri – Sat', row3: 'Sunday',
      ctaReserve: 'Book a table', ctaMenu: 'Menu'
    },

    instagram: {
      kicker: '06 — Follow us', title: 'Fresh from the kitchen, on Instagram',
      sub: 'New plates, evenings and behind-the-scenes moments — posted as they happen.',
      cta: 'Follow @1001nights.ge'
    },

    footer: {
      tagline: 'Persian restaurant in the old town of Tbilisi. Halal. Open every day.',
      pages: 'Pages', visit: 'Visit', contact: 'Contact',
      hoursLink: 'Opening hours', directions: 'Directions', reservation: 'Reservation',
      gallery: 'Gallery',
      copyright: '© {y} 1001 Nights Restaurant, Tbilisi',
      credit: 'Designed on the “Classical” styleguide'
    },

    menuPage: {
      kicker: '1001 Nights · Tbilisi', title: 'Menu',
      lead: '{c} chapters, {n} dishes. Everything is cooked to order — kebab comes off the charcoal, khoresht has been on the flame since morning. Every dish is shown with the photo from our own kitchen.',
      priceNotice: 'Prices are being added right now. We are glad to give you current prices over the phone.',
      catNav: 'Menu categories', searchLabel: 'Search for a dish', searchPlaceholder: 'Search a dish…',
      filterLabel: 'Filter',
      noResultsTitle: 'No dish found.', noResultsSub: 'Try another spelling — or clear all filters.',
      reset: 'Clear filters',
      zoom: 'Enlarge photo of {name}',
      outroKicker: 'Enjoy your meal', outroTitle: 'Nooshe jan',
      outroText: 'Allergies, intolerances, or a wish for the table? Tell us and the kitchen will work around it.',
      ctaReserve: 'Book a table', ctaVisit: 'Directions & hours'
    },

    lightbox: { close: 'Close' }
  },

  /* ══════════════════════════════════════════════════════════ فارسی ══ */
  fa: {
    brandSub: 'رستوران ایرانی',
    langLabel: 'زبان',
    skipToContent: 'رفتن به محتوا',

    meta: {
      homeTitle: 'هزار و یک شب — رستوران ایرانی در تفلیس',
      homeDesc: 'آشپزی ایرانی در بافت قدیم تفلیس: کباب روی زغال، خورش، چلو زعفرانی و چای سماور. کوته آپخازی ۹.',
      menuTitle: 'منو — رستوران ایرانی هزار و یک شب، تفلیس',
      menuDesc: 'منوی رستوران هزار و یک شب تفلیس: پیش‌غذا، کباب، خورش، پلو، ماهی و شیرینی — با عکس هر غذا.',
      aboutTitle: 'درباره ما — رستوران ایرانی هزار و یک شب، تفلیس',
      aboutDesc: 'داستان، آشپزخانه و آنچه در هزار و یک شب به آن پایبندیم: مهمان‌نوازی ایرانی در بافت قدیم تفلیس، از سال ۲۰۱۲.'
    },

    nav: { menu: 'منو', restaurant: 'رستوران', experience: 'برنامه‌ها', visit: 'نشانی', homeLabel: 'خانه', about: 'درباره ما',
           reserve: 'رزرو', reserveLong: 'رزرو میز', openMenu: 'باز کردن منو', main: 'ناوبری اصلی', home: 'هزار و یک شب — صفحه اصلی' },

    hero: {
      kicker: 'آشپزی ایرانی · تفلیس، از ۲۰۱۲',
      tagline: 'هزار طعم، هزار قصه.',
      sub: 'کباب روی زغال، خورش از دیگ، چلو با ته‌دیگ طلایی. در قلب بافت قدیم تفلیس، خیابان کوته آپخازی.',
      ctaMenu: 'دیدن منو', ctaReserve: 'رزرو میز',
      fact1: 'کوته آپخازی ۹', fact2: 'هر روز ۱۱ تا ۲۳', fact3: 'حلال · خانوادگی'
    },

    marquee: ['زعفران', 'انار', 'زغال', 'لیمو عمانی', 'ته‌دیگ', 'سماق', 'گلاب', 'پسته'],

    story: {
      kicker: '۰۱ — این خانه',
      titleA: 'شبی که', titleB: 'تمام نمی‌شود',
      lead: 'پشت نمای زرد خیابان کوته آپخازی اتاقی است که بیش از ده سال است همین اتفاق در آن می‌افتد: منقل از ظهر گر می‌گیرد، دیگ‌ها از صبح روی شعله ملایم‌اند، و جایی در دل شب کسی شروع به خواندن می‌کند.',
      body: 'آشپزخانه ما از اصفهان و شیراز آمد — و در راه تفلیس هر چه پسندید با خود آورد: سماق شام، بهارات خلیج، نان گرجی از تنور. آنچه می‌ماند همان قاعده ایرانی است: هیچ ادویه‌ای خود را جلو نمی‌اندازد، همه چیز وقت می‌خواهد.',
      stat1: 'سال در تفلیس', stat2: 'غذا در منو', stat3: 'ساعت برای یک ماهیچه',
      link: 'ساعت کار و نشانی', badgeSince: 'از سال', badgeCity: 'تفلیس'
    },

    signature: {
      kicker: '۰۲ — از آشپزخانه',
      title: 'چهار غذا برای شروع',
      sub: 'اگر بار اول است که به ما سر می‌زنید، این‌ها را سفارش دهید. باقی در منو هست.',
      cta: 'همه منو — {n} غذا'
    },

    quote: { text: 'بگو چه می‌خوری تا بگویم اهل کجایی.', source: 'ضرب‌المثل ایرانی' },

    about: {
      hero: {
        kicker: 'درباره ما',
        title: 'خانه‌ای با ساعت خودش',
        lead: 'کوته آپخازی ۹ از سال ۲۰۱۲ بوی زغال و زعفران می‌دهد. این داستان آشپزخانه‌ای است که پشت آن است — از کجا آمد، به چه پایبند است، و چه کسی آتشش را روشن نگه می‌دارد.'
      },
      story: {
        kicker: '۰۱ — از کجا شروع شد',
        titleA: 'از اصفهان', titleB: 'تا بافت قدیم',
        lead: 'دستورها پیش از ما به راه افتادند: خورش مادربزرگی، دست پدری روی سیخ، و حس یک خانواده از اینکه برنج کی آماده است و کی نه. هزار و یک شب در سال ۲۰۱۲ با یک فکر باز شد — همان‌طور بپزیم که یادمان داده‌اند، و بگذاریم تفلیس هم وارد شود.',
        body: 'شهر هم چیزی به ما داد. نان گرجی از تنور به سفره‌مان رسید؛ رد پای سماق شام در خورشی ایرانی نشست؛ شب‌های آرام بافت قدیم یادمان داد چای را عجله نکنیم. هیچ‌کدام باور آشپزخانه را عوض نکرد: یک غذا از هر چیزی بیشتر به وقت نیاز دارد.',
        extra: 'ده سال گذشته، منقل هنوز از ظهر گر می‌گیرد و دیگ‌ها هنوز از صبح روی شعله‌اند. سالن همان‌طور پر می‌شود که همیشه بوده: اول خانواده، بعد دوستان، بعد هر کسی که از جلوی در رد می‌شود و بوی غذا او را داخل می‌کشد.',
        stat1: 'سال در تفلیس', stat2: 'غذا در منو', stat3: 'ساعت برای یک ماهیچه',
        badgeSince: 'از سال', badgeCity: 'تفلیس'
      },
      values: {
        kicker: '۰۲ — به چه پایبندیم',
        title: 'سه چیزی که عوض نمی‌شود',
        sub: 'مد در بافت قدیم می‌آید و می‌رود. این سه تا جایشان را عوض نمی‌کنند.',
        v1title: 'هیچ‌چیز با عجله نه',
        v1text: 'خورش از صبح روی شعله ملایم می‌ماند. کباب فقط وقتی از روی زغال برداشته می‌شود که آماده باشد — نه وقتی سفارش عجله دارد.',
        v2title: 'یک ادویه در هر زمان',
        v2text: 'زعفران، سماق، لیمو عمانی، گلاب — هرکدام نوبت خودش را دارد. آشپزی ما جا برای یک صدا باز می‌کند، نه ازدحامی از صداها.',
        v3title: 'سفره یعنی خانواده',
        v3text: 'از هر جا آمده باشید، همین‌جا مثل خانه خودتان می‌نشینید — و بیشتر از آنچه سفارش داده‌اید، با خودتان می‌برید.'
      },
      team: {
        kicker: '۰۳ — چه کسی برایتان می‌پزد',
        title: 'یک آشپز نه — سه نسل',
        sub: 'آشپزخانه همیشه کار خانواده بوده. این‌ها دست‌هایی هستند که پشت آنند.',
        r1title: 'منقل', r1text: 'زغالی که از ظهر گر می‌گیرد، با دست چرخانده می‌شود و هرگز تنها نمی‌ماند.',
        r2title: 'دیگ‌ها', r2text: 'خورش و قورمه‌سبزی، روی شعله‌ای آن‌قدر ملایم که فراموشش می‌کنید — تا بویش یادتان بیاورد.',
        r3title: 'سالن', r3text: 'هرکس امشب شما را بنشاند، به احتمال زیاد همسایه‌تان را هم غذا داده.'
      },
      quote: { text: 'مهمان، هدیه خداست.', source: 'ضرب‌المثل ایرانی — قانون این خانه' },
      cta: {
        kicker: 'بیایید خودتان ببینید',
        title: 'بهترین توضیح، یک میز است',
        text: 'توضیح تا جایی پیش می‌رود. بیایید خودتان طعم زعفران را بچشید — یک میز برایتان گرم نگه می‌داریم.',
        ctaReserve: 'رزرو میز', ctaMenu: 'دیدن منو'
      }
    },

    gallery: {
      kicker: '۰۳ — سر سفره', title: 'اینجا این شکلی است',
      c1: 'راسته گوسفند به سبک شاندیز، ۲۴ ساعت مزه‌دار شده.',
      c2: 'چای سیاه از سماور، باقلوای پسته.',
      c3: 'بادمجان با کشک، نعنا داغ و پیاز داغ.',
      c4: 'ورودی رستوران در بافت قدیم تفلیس.',
      c5: 'میگو، ماهی مرکب و ماهی روز.',
      c6: 'ماهی دورادو کامل روی زغال، پر شده با سبزی.'
    },

    events: {
      kicker: '۰۴ — برنامه‌ها', title: 'موسیقی، جشن، شب‌های بلند',
      sub: 'نوروز، چهارشنبه‌سوری و جمعه‌های معمولی، اینجا موسیقی زنده اجرا می‌شود. آن شب‌ها زودتر رزرو کنید — سالن سریع پر می‌شود.',
      e1date: '۱۹ مارس · نوروز', e1title: 'کنسرت زنده نوروزی',
      e1text: 'سه نوازنده، یک شب، تمام سالن: کلاسیک‌های ایرانی از ساعت ۲۰، همراه منوی نوروزی آشپزخانه.',
      e2date: 'آخرین سه‌شنبه سال', e2title: 'جشن چهارشنبه‌سوری',
      e2text: 'جشن آتش پیش از نوروز: آجیل مشکل‌گشا، موسیقی و منویی که زمستان را بدرقه می‌کند.',
      cta: 'رزرو جا'
    },

    visit: {
      kicker: '۰۵ — نشانی', title: 'به ما سر بزنید',
      sub: 'دو دقیقه تا پل متخی، وسط بافت قدیم. داخل و فضای باز، هر دو سرو می‌شود — برای گروه‌های بزرگ‌تر یک تماس کوتاه بهتر است.',
      address: 'نشانی', contact: 'تماس', hours: 'ساعت کار',
      whatsapp: 'واتس‌اپ هم داریم', map: 'روی نقشه',
      street: 'خیابان کوته آپخازی ۹', city: '۰۱۰۵ تفلیس، گرجستان',
      row1: 'دوشنبه – پنجشنبه', row2: 'جمعه – شنبه', row3: 'یکشنبه',
      ctaReserve: 'رزرو میز', ctaMenu: 'منو'
    },

    instagram: {
      kicker: '۰۶ — دنبال‌مان کنید', title: 'تازه‌ترین‌ها، در اینستاگرام',
      sub: 'تازه‌ترین غذاها، شب‌ها و لحظه‌های پشت صحنه — همان لحظه که اتفاق می‌افتند.',
      cta: 'دنبال کردن @1001nights.ge'
    },

    footer: {
      tagline: 'رستوران ایرانی در بافت قدیم تفلیس. حلال. هر روز باز.',
      pages: 'صفحه‌ها', visit: 'نشانی', contact: 'تماس',
      hoursLink: 'ساعت کار', directions: 'مسیر', reservation: 'رزرو',
      gallery: 'گالری',
      copyright: '© {y} رستوران هزار و یک شب، تفلیس',
      credit: 'طراحی بر پایه راهنمای سبک «Classical»'
    },

    menuPage: {
      kicker: 'هزار و یک شب · تفلیس', title: 'منو',
      lead: '{c} فصل، {n} غذا. همه چیز تازه پخته می‌شود — کباب از روی زغال می‌آید و خورش از صبح روی شعله است. عکس هر غذا از آشپزخانه خودمان است.',
      priceNotice: 'قیمت‌ها در حال تکمیل است. قیمت روز را با کمال میل تلفنی به شما می‌گوییم.',
      catNav: 'دسته‌های منو', searchLabel: 'جست‌وجوی غذا', searchPlaceholder: 'جست‌وجوی غذا…',
      filterLabel: 'فیلتر',
      noResultsTitle: 'غذایی پیدا نشد.', noResultsSub: 'املای دیگری را امتحان کنید — یا فیلترها را پاک کنید.',
      reset: 'پاک کردن فیلترها',
      zoom: 'بزرگ کردن عکس {name}',
      outroKicker: 'نوش جان', outroTitle: 'نوش جان',
      outroText: 'حساسیت غذایی، رژیم خاص یا درخواستی برای سفره دارید؟ بگویید، آشپزخانه هماهنگ می‌کند.',
      ctaReserve: 'رزرو میز', ctaVisit: 'مسیر و ساعت کار'
    },

    lightbox: { close: 'بستن' }
  },

  /* ══════════════════════════════════════════════════════════ РУССКИЙ ══ */
  ru: {
    brandSub: 'Ресторан',
    langLabel: 'Язык',
    skipToContent: 'Перейти к содержанию',

    meta: {
      homeTitle: '1001 Nights — персидский ресторан в Тбилиси',
      homeDesc: 'Персидская кухня в старом Тбилиси: кебаб на углях, хорешт из казана, шафрановый рис и чай из самовара. Коте Апхази 9.',
      menuTitle: 'Меню — 1001 Nights, персидский ресторан в Тбилиси',
      menuDesc: 'Меню ресторана 1001 Nights в Тбилиси: закуски, кебаб на углях, персидские рагу, блюда из риса, рыба и сладости — каждое блюдо с фотографией.',
      aboutTitle: 'О нас — 1001 Nights, персидский ресторан в Тбилиси',
      aboutDesc: 'История, кухня и то, чему мы верны в 1001 Nights: персидское гостеприимство в старом Тбилиси, с 2012 года.'
    },

    nav: { menu: 'Меню', restaurant: 'Ресторан', experience: 'События', visit: 'Как найти', homeLabel: 'Главная', about: 'О нас',
           reserve: 'Бронь', reserveLong: 'Забронировать стол', openMenu: 'Открыть меню', main: 'Основная навигация', home: '1001 Nights — главная' },

    hero: {
      kicker: 'Персидская кухня · Тбилиси, с 2012 года',
      tagline: 'Тысяча вкусов, тысяча историй.',
      sub: 'Кебаб на углях, хорешт из казана, рис с золотой корочкой. В самом сердце старого города, на Коте Апхази.',
      ctaMenu: 'Смотреть меню', ctaReserve: 'Забронировать стол',
      fact1: 'Коте Апхази 9', fact2: 'Ежедневно 11–23', fact3: 'Халяль · семейное дело'
    },

    marquee: ['Шафран', 'Гранат', 'Угли', 'Сушёный лайм', 'Тахдиг', 'Сумах', 'Розовая вода', 'Фисташка'],

    story: {
      kicker: '01 — Дом',
      titleA: 'Вечер, который', titleB: 'не хочет кончаться',
      lead: 'За жёлтым фасадом на Коте Апхази есть зал, где уже больше десяти лет происходит одно и то же: мангал разгорается с полудня, казаны стоят на малом огне с утра, а где-то к вечеру кто-нибудь начинает петь.',
      body: 'Наша кухня пришла из Исфахана и Шираза — и по дороге в Тбилиси взяла всё, что ей понравилось: сумах Леванта, бахарат Залива, грузинский хлеб из тонэ. Остаётся персидское правило: ни одна специя не лезет вперёд, всему даётся время.',
      stat1: 'Лет в Тбилиси', stat2: 'Блюд в меню', stat3: 'Часа на одно махиче',
      link: 'Часы работы и как добраться', badgeSince: 'С', badgeCity: 'Тбилиси'
    },

    signature: {
      kicker: '02 — С кухни',
      title: 'Четыре, с которых стоит начать',
      sub: 'Если вы у нас впервые — закажите эти. Всё остальное есть в меню.',
      cta: 'Всё меню — {n} блюд'
    },

    quote: { text: 'Скажи мне, что ты ешь, и я скажу, откуда ты родом.', source: 'Персидская пословица' },

    about: {
      hero: {
        kicker: 'О нас',
        title: 'Дом, который живёт по своим часам',
        lead: 'На Коте Апхази 9 с 2012 года пахнет углями и шафраном. Это история кухни за этим запахом — откуда она пришла, во что верит и кто поддерживает огонь.'
      },
      story: {
        kicker: '01 — С чего всё началось',
        titleA: 'Из Исфахана', titleB: 'в старый город',
        lead: 'Рецепты приехали раньше нас: хорешт бабушки, отцовская рука на шампуре, семейное чутьё — когда рис готов, а когда ещё нет. 1001 Nights открылся в 2012 году с одной идеей: готовить так, как учили нас, и впустить в это Тбилиси.',
        body: 'Город тоже кое-что дал взамен. Грузинский хлеб из тонэ лёг на наш стол; левантийский сумах нашёл дорогу в персидское рагу; неспешные вечера старого города научили нас не торопить чай. Ничего из этого не изменило главного убеждения кухни — блюду нужно время больше, чем что-либо ещё.',
        extra: 'Спустя десять лет мангал всё так же разгорается с полудня, а казаны всё так же кипят с утра. Зал наполняется как и всегда: сначала семья, потом друзья, потом каждый, кто идёт мимо и не может пройти мимо запаха.',
        stat1: 'Лет в Тбилиси', stat2: 'Блюд в меню', stat3: 'Часа на одно махиче',
        badgeSince: 'С', badgeCity: 'Тбилиси'
      },
      values: {
        kicker: '02 — Чему мы верны',
        title: 'Три вещи, которые не меняются',
        sub: 'Мода в старом городе приходит и уходит. Эти три — нет.',
        v1title: 'Никакой спешки',
        v1text: 'Хорешт стоит на малом огне с самого утра. Кебаб снимают с углей только тогда, когда он готов — а не когда торопит заказ.',
        v2title: 'Одна специя за раз',
        v2text: 'Шафран, сумах, сушёный лайм, розовая вода — у каждой свой момент. Наша кухня оставляет место одному голосу, а не хору.',
        v3title: 'Стол — это семья',
        v3text: 'Откуда бы вы ни приехали, здесь вы садитесь как дома — и уходите с большим, чем заказали.'
      },
      team: {
        kicker: '03 — Кто готовит для вас',
        title: 'Не один повар — три поколения',
        sub: 'Кухня здесь всегда была семейным делом. Вот руки, которые за ней стоят.',
        r1title: 'Мангал', r1text: 'Угли разгораются с полудня, переворачиваются вручную и никогда не остаются без присмотра.',
        r2title: 'Казаны', r2text: 'Хорешт и горме сабзи на огне настолько тихом, что о нём забываешь — пока не напомнит запах.',
        r3title: 'Зал', r3text: 'Тот, кто сегодня усадит вас за стол, скорее всего, уже кормил и ваших соседей.'
      },
      quote: { text: 'Гость — это дар от Бога.', source: 'Персидская пословица — правило этого дома' },
      cta: {
        kicker: 'Приходите и увидьте сами',
        title: 'Лучшее объяснение — это стол',
        text: 'Слова могут рассказать не всё. Приходите попробовать шафран сами — мы согреем для вас стол.',
        ctaReserve: 'Забронировать стол', ctaMenu: 'Смотреть меню'
      }
    },

    gallery: {
      kicker: '03 — За столом', title: 'Как здесь выглядит',
      c1: 'Бараньи котлеты по-шандизски, сутки в маринаде.',
      c2: 'Чёрный чай из самовара, пахлава с фисташкой.',
      c3: 'Баклажан с кашком, мятным маслом и жареным луком.',
      c4: 'Вход в старом городе Тбилиси.',
      c5: 'Креветки, кальмар и рыба дня.',
      c6: 'Целая дорадо на углях, фаршированная зеленью.'
    },

    events: {
      kicker: '04 — События', title: 'Музыка, праздники, долгие вечера',
      sub: 'На Навруз, на Чаршанбе Сури и по совершенно обычным пятницам у нас играет живая музыка. В такие вечера бронируйте заранее — зал наполняется быстро.',
      e1date: '19 марта · Навруз', e1title: 'Живой концерт на Новый год',
      e1text: 'Три музыканта, один вечер, весь зал: персидская классика вживую с 20:00 и новрузское меню кухни.',
      e2date: 'Последний вторник года', e2title: 'Джашн-е Чаршанбе Сури',
      e2text: 'Праздник огня перед Наврузом: аджиль-е мошкель-гоша, музыка и меню, которое провожает зиму.',
      cta: 'Забронировать место'
    },

    visit: {
      kicker: '05 — Как найти', title: 'Приходите к нам',
      sub: 'Две минуты от Метехского моста, в самом центре старого города. Есть места внутри и на воздухе — для больших компаний лучше коротко позвонить.',
      address: 'Адрес', contact: 'Контакты', hours: 'Часы работы',
      whatsapp: 'Также в WhatsApp', map: 'На карте',
      street: 'ул. Коте Апхази 9', city: '0105 Тбилиси, Грузия',
      row1: 'Пн – Чт', row2: 'Пт – Сб', row3: 'Воскресенье',
      ctaReserve: 'Забронировать стол', ctaMenu: 'Меню'
    },

    instagram: {
      kicker: '06 — Мы в Instagram', title: 'Свежее прямо с кухни — в Instagram',
      sub: 'Новые блюда, вечера и закулисные моменты — как только это происходит.',
      cta: 'Подписаться @1001nights.ge'
    },

    footer: {
      tagline: 'Персидский ресторан в старом Тбилиси. Халяль. Открыто каждый день.',
      pages: 'Страницы', visit: 'Как найти', contact: 'Контакты',
      hoursLink: 'Часы работы', directions: 'Как добраться', reservation: 'Бронирование',
      gallery: 'Галерея',
      copyright: '© {y} Ресторан 1001 Nights, Тбилиси',
      credit: 'Оформление по стайлгайду «Classical»'
    },

    menuPage: {
      kicker: '1001 Nights · Тбилиси', title: 'Меню',
      lead: '{c} раздела, {n} блюд. Всё готовится под заказ — кебаб идёт прямо с углей, хорешт стоит на огне с утра. К каждому блюду фотография с нашей кухни.',
      priceNotice: 'Цены сейчас вносятся. Актуальные цены с удовольствием назовём по телефону.',
      catNav: 'Разделы меню', searchLabel: 'Поиск блюда', searchPlaceholder: 'Найти блюдо…',
      filterLabel: 'Фильтр',
      noResultsTitle: 'Блюдо не найдено.', noResultsSub: 'Попробуйте другое написание — или сбросьте фильтры.',
      reset: 'Сбросить фильтры',
      zoom: 'Увеличить фото: {name}',
      outroKicker: 'Приятного аппетита', outroTitle: 'Нуше джан',
      outroText: 'Аллергия, непереносимость или особое пожелание к столу? Скажите нам — кухня подстроится.',
      ctaReserve: 'Забронировать стол', ctaVisit: 'Как добраться и часы'
    },

    lightbox: { close: 'Закрыть' }
  },

  /* ═════════════════════════════════════════════════════════ ქართული ══ */
  ka: {
    brandSub: 'რესტორანი',
    langLabel: 'ენა',
    skipToContent: 'გადასვლა შიგთავსზე',

    meta: {
      homeTitle: '1001 Nights — სპარსული რესტორანი თბილისში',
      homeDesc: 'სპარსული სამზარეულო თბილისის ძველ ქალაქში: ნახშირზე შემწვარი ქაბაბი, ხორეშთი, ზაფრანიანი ბრინჯი და ჩაი სამოვრიდან. კოტე აფხაზი 9.',
      menuTitle: 'მენიუ — 1001 Nights, სპარსული რესტორანი თბილისში',
      menuDesc: 'რესტორან 1001 Nights-ის მენიუ თბილისში: წასახემსებელი, ნახშირზე შემწვარი ქაბაბი, სპარსული ხორეშთი, ბრინჯის კერძები, თევზი და ტკბილეული — ყოველი კერძი ფოტოთი.',
      aboutTitle: 'ჩვენ შესახებ — 1001 Nights, სპარსული რესტორანი თბილისში',
      aboutDesc: 'ისტორია, სამზარეულო და რასაც 1001 Nights-ში ვერთგულებთ: სპარსული სტუმართმოყვარეობა თბილისის ძველ ქალაქში, 2012 წლიდან.'
    },

    nav: { menu: 'მენიუ', restaurant: 'რესტორანი', experience: 'ღონისძიებები', visit: 'მისამართი', homeLabel: 'მთავარი', about: 'ჩვენ შესახებ',
           reserve: 'დაჯავშნა', reserveLong: 'მაგიდის დაჯავშნა', openMenu: 'მენიუს გახსნა', main: 'მთავარი ნავიგაცია', home: '1001 Nights — მთავარი' },

    hero: {
      kicker: 'სპარსული სამზარეულო · თბილისი, 2012 წლიდან',
      tagline: 'ათასი გემო, ათასი ამბავი.',
      sub: 'ნახშირზე შემწვარი ქაბაბი, ხორეშთი ქვაბიდან, ბრინჯი ოქროსფერი ქერქით. ძველი ქალაქის გულში, კოტე აფხაზის ქუჩაზე.',
      ctaMenu: 'მენიუს ნახვა', ctaReserve: 'მაგიდის დაჯავშნა',
      fact1: 'კოტე აფხაზი 9', fact2: 'ყოველდღე 11–23', fact3: 'ჰალალი · ოჯახური'
    },

    marquee: ['ზაფრანა', 'ბროწეული', 'ნახშირი', 'ხმელი ლაიმი', 'თახდიგი', 'სუმახი', 'ვარდის წყალი', 'ფისტა'],

    story: {
      kicker: '01 — სახლი',
      titleA: 'საღამო, რომელსაც', titleB: 'დასრულება არ უნდა',
      lead: 'კოტე აფხაზის ყვითელი ფასადის უკან არის დარბაზი, სადაც ათ წელზე მეტია ერთი და იგივე ხდება: მაყალი შუადღიდან იწვის, ქვაბები დილიდან ნელ ცეცხლზე დგას, და საღამოს რომელიღაც წუთს ვიღაც სიმღერას იწყებს.',
      body: 'ჩვენი სამზარეულო ისპაჰანიდან და შირაზიდან მოვიდა — და თბილისისკენ მიმავალ გზაზე ის აიღო, რაც მოეწონა: ლევანტის სუმახი, ყურის ბაჰარათი, თონის ქართული პური. რაც რჩება, სპარსული წესია: არცერთი სანელებელი წინ არ იწევს, ყველაფერს დრო ეძლევა.',
      stat1: 'წელი თბილისში', stat2: 'კერძი მენიუში', stat3: 'საათი ერთი მაჰიჩესთვის',
      link: 'სამუშაო საათები და მისამართი', badgeSince: 'დან', badgeCity: 'თბილისი'
    },

    signature: {
      kicker: '02 — სამზარეულოდან',
      title: 'ოთხი, რომლითაც უნდა დაიწყოთ',
      sub: 'თუ პირველად ხართ ჩვენთან, ეს შეუკვეთეთ. დანარჩენი მენიუშია.',
      cta: 'სრული მენიუ — {n} კერძი'
    },

    quote: { text: 'მითხარი, რას ჭამ, და გეტყვი, საიდან ხარ.', source: 'სპარსული ანდაზა' },

    about: {
      hero: {
        kicker: 'ჩვენ შესახებ',
        title: 'სახლი, რომელსაც საკუთარი დრო აქვს',
        lead: 'კოტე აფხაზის ქუჩა 9-ს 2012 წლიდან ნახშირისა და ზაფრანის სუნი დაჰყვება. ეს არის სამზარეულოს ისტორია მის მიღმა — საიდან მოვიდა, რას სჯერა და ვინ ინახავს ცეცხლს.'
      },
      story: {
        kicker: '01 — საიდან დაიწყო',
        titleA: 'ისპაჰანიდან', titleB: 'ძველ ქალაქამდე',
        lead: 'რეცეპტები ჩვენზე ადრე ჩამოვიდა: ბებიის ხორეშთი, მამის ხელი შამფურზე, მთელი ოჯახის შეგრძნება, როდის არის ბრინჯი მზად და როდის — არა. 1001 Nights 2012 წელს ერთი იდეით გაიხსნა — ისე მოვამზადოთ, როგორც გვასწავლეს, და თბილისი შემოვუშვათ.',
        body: 'ქალაქმაც რაღაც დაგვიბრუნა. ქართული პური თონედან ჩვენს მაგიდებზე მოვიდა; ლევანტის სუმახმა სპარსულ ხორეშთში გზა გაიკვლია; ძველი ქალაქის ნელი საღამოები გვასწავლიდა, ჩაი არ ავჩქაროთ. ამან ვერაფერი შეცვალა სამზარეულოს რწმენაში — რომ კერძს ყველაფერზე მეტად დრო სჭირდება.',
        extra: 'ათი წლის შემდეგ მაყალი დღემდე შუადღიდან იწვის და ქვაბები დილიდან დუღს. დარბაზი ისევე ივსება, როგორც ყოველთვის: ჯერ ოჯახი, მერე მეგობრები, მერე ყველა, ვინც გვერდით გაივლის და სუნს გაჰყვება შიგნით.',
        stat1: 'წელი თბილისში', stat2: 'კერძი მენიუში', stat3: 'საათი ერთი მაჰიჩესთვის',
        badgeSince: 'დან', badgeCity: 'თბილისი'
      },
      values: {
        kicker: '02 — რასაც ვერთგულებთ',
        title: 'სამი რამ, რაც არ იცვლება',
        sub: 'ძველ ქალაქში მოდა მოდის და მიდის. ეს სამი — არა.',
        v1title: 'არაფერი აჩქარებით',
        v1text: 'ხორეშთი დილიდან ნელ ცეცხლზე დგას. ქაბაბს ნახშირიდან მხოლოდ მაშინ იღებენ, როცა მზადაა — და არა მაშინ, როცა შეკვეთა ჩქარობს.',
        v2title: 'ერთი სანელებელი ერთდროულად',
        v2text: 'ზაფრანა, სუმახი, ხმელი ლაიმი, ვარდის წყალი — თითოეულს თავისი წუთი აქვს. ჩვენი სამზარეულო ერთ ხმას უტოვებს ადგილს, არა ხმაურს.',
        v3title: 'სუფრა — ოჯახია',
        v3text: 'საიდანაც არ უნდა მოხვიდეთ, აქ ისე ჯდებით, როგორც სახლში — და მეტს წაიღებთ, ვიდრე შეუკვეთეთ.'
      },
      team: {
        kicker: '03 — ვინ გიმზადებთ',
        title: 'ერთი მზარეული კი არა — სამი თაობა',
        sub: 'სამზარეულო ყოველთვის ოჯახის საქმე იყო. ესენი არიან ხელები მის უკან.',
        r1title: 'მაყალი', r1text: 'ნახშირი შუადღიდან იწვის, ხელით ბრუნავს და არასდროს რჩება მიუხედავად.',
        r2title: 'ქვაბები', r2text: 'ხორეშთი და ღორმე საბზი ისე ნელ ცეცხლზეა, რომ ავიწყდებათ — სანამ სუნი არ შეგახსენებთ.',
        r3title: 'დარბაზი', r3text: 'ვინც შენ დაგსვამს ამაღამ, დიდი ალბათობით შენი მეზობელიც აჭამა.'
      },
      quote: { text: 'სტუმარი ღვთის საჩუქარია.', source: 'სპარსული ანდაზა — ამ სახლის წესი' },
      cta: {
        kicker: 'თავად მოდით და ნახეთ',
        title: 'საუკეთესო ახსნა — მაგიდაა',
        text: 'სიტყვები მხოლოდ გარკვეულ დონემდე მიდის. მოდით, თავად გასინჯეთ ზაფრანა — მაგიდას გავათბობთ თქვენთვის.',
        ctaReserve: 'მაგიდის დაჯავშნა', ctaMenu: 'მენიუს ნახვა'
      }
    },

    gallery: {
      kicker: '03 — სუფრასთან', title: 'ასე გამოიყურება აქ',
      c1: 'ცხვრის ნეკნები შანდიზულად, 24 საათი მარინადში.',
      c2: 'შავი ჩაი სამოვრიდან, ფახლავა ფისტით.',
      c3: 'ბადრიჯანი შრატით, პიტნის ზეთითა და შემწვარი ხახვით.',
      c4: 'შესასვლელი თბილისის ძველ ქალაქში.',
      c5: 'კრევეტები, კალმარი და დღის თევზი.',
      c6: 'მთლიანი დორადო ნახშირზე, მწვანილით შიგთავსით.'
    },

    events: {
      kicker: '04 — ღონისძიებები', title: 'მუსიკა, დღესასწაულები, გრძელი საღამოები',
      sub: 'ნოვრუზზე, ჩარშანბე სურზე და სრულიად ჩვეულებრივ პარასკევებზე ჩვენთან ცოცხალი მუსიკა ჟღერს. ამ საღამოებზე ადრე დაჯავშნეთ — დარბაზი სწრაფად ივსება.',
      e1date: '19 მარტი · ნოვრუზი', e1title: 'ცოცხალი კონცერტი ახალი წლისთვის',
      e1text: 'სამი მუსიკოსი, ერთი საღამო, მთელი სახლი: სპარსული კლასიკა ცოცხლად 20:00 საათიდან, სამზარეულოს ნოვრუზის მენიუთი.',
      e2date: 'წლის ბოლო სამშაბათი', e2title: 'ჯაშნ-ე ჩარშანბე სური',
      e2text: 'ცეცხლის დღესასწაული ნოვრუზამდე: აჯილ-ე მოშქელ-გოშა, მუსიკა და მენიუ, რომელიც ზამთარს აცილებს.',
      cta: 'ადგილის დაჯავშნა'
    },

    visit: {
      kicker: '05 — მისამართი', title: 'გვეწვიეთ',
      sub: 'ორი წუთი მეტეხის ხიდიდან, ძველი ქალაქის შუაგულში. ვემსახურებით შიგნითაც და გარეთაც — დიდი კომპანიისთვის ჯობია მოკლედ დაგვირეკოთ.',
      address: 'მისამართი', contact: 'კონტაქტი', hours: 'სამუშაო საათები',
      whatsapp: 'ასევე WhatsApp-ზე', map: 'რუკაზე',
      street: 'კოტე აფხაზის ქუჩა 9', city: '0105 თბილისი, საქართველო',
      row1: 'ორშ – ხუთ', row2: 'პარ – შაბ', row3: 'კვირა',
      ctaReserve: 'მაგიდის დაჯავშნა', ctaMenu: 'მენიუ'
    },

    instagram: {
      kicker: '06 — გამოგვყევით', title: 'სამზარეულოდან — პირდაპირ Instagram-ში',
      sub: 'უახლესი კერძები, საღამოები და კულისებს მიღმა მომენტები — მაშინვე, როცა ხდება.',
      cta: 'გამოგვყევით @1001nights.ge'
    },

    footer: {
      tagline: 'სპარსული რესტორანი თბილისის ძველ ქალაქში. ჰალალი. ღიაა ყოველდღე.',
      pages: 'გვერდები', visit: 'მისამართი', contact: 'კონტაქტი',
      hoursLink: 'სამუშაო საათები', directions: 'როგორ მოგვაგნოთ', reservation: 'დაჯავშნა',
      gallery: 'გალერეა',
      copyright: '© {y} რესტორანი 1001 Nights, თბილისი',
      credit: 'გაფორმება სტაილგაიდ „Classical“-ის მიხედვით'
    },

    menuPage: {
      kicker: '1001 Nights · თბილისი', title: 'მენიუ',
      lead: '{c} თავი, {n} კერძი. ყველაფერი ახლად მზადდება — ქაბაბი ნახშირიდან მოდის, ხორეშთი დილიდან ცეცხლზეა. ყოველ კერძს თან ახლავს ფოტო ჩვენივე სამზარეულოდან.',
      priceNotice: 'ფასები ამჟამად ივსება. მიმდინარე ფასებს სიამოვნებით გეტყვით ტელეფონით.',
      catNav: 'მენიუს კატეგორიები', searchLabel: 'კერძის ძებნა', searchPlaceholder: 'იპოვეთ კერძი…',
      filterLabel: 'ფილტრი',
      noResultsTitle: 'კერძი ვერ მოიძებნა.', noResultsSub: 'სცადეთ სხვა დაწერილობა — ან გაასუფთავეთ ფილტრები.',
      reset: 'ფილტრების გასუფთავება',
      zoom: 'გაადიდეთ ფოტო: {name}',
      outroKicker: 'გემრიელად მიირთვით', outroTitle: 'ნუშე ჯან',
      outroText: 'ალერგია, აუტანლობა თუ სურვილი სუფრასთან? გვითხარით და სამზარეულო მოერგება.',
      ctaReserve: 'მაგიდის დაჯავშნა', ctaVisit: 'მისამართი და საათები'
    },

    lightbox: { close: 'დახურვა' }
  }
};

const contact = {
  phoneHref: '+995585891100',
  /* Lateinische Ziffern in allen Sprachen: eine Nummer zum Wählen und
     Kopieren soll überall gleich aussehen. */
  phoneText: '+995 585 89 11 00',
  email: 'info@1001nights.ge',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=1001+Nights+Restaurant+Kote+Apkhazi+9+Tbilisi',
  instagramUrl: 'https://www.instagram.com/1001nights.ge/',
  hours: { row1: '11:00 – 23:00', row2: '11:00 – 24:00', row3: '11:00 – 23:00' },
  since: '2014',
  yearsInTbilisi: 13,
  hoursForMahiche: 4
};

export { LANGS, ui, contact };
