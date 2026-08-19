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
      menuDesc: 'The menu of 1001 Nights in Tbilisi: starters, charcoal kebab, Persian stews, rice dishes, fish and sweets — every dish with a photo.'
    },

    nav: { menu: 'Menu', restaurant: 'Restaurant', experience: 'Experience', visit: 'Visit',
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
      menuDesc: 'منوی رستوران هزار و یک شب تفلیس: پیش‌غذا، کباب، خورش، پلو، ماهی و شیرینی — با عکس هر غذا.'
    },

    nav: { menu: 'منو', restaurant: 'رستوران', experience: 'برنامه‌ها', visit: 'نشانی',
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
      menuDesc: 'Меню ресторана 1001 Nights в Тбилиси: закуски, кебаб на углях, персидские рагу, блюда из риса, рыба и сладости — каждое блюдо с фотографией.'
    },

    nav: { menu: 'Меню', restaurant: 'Ресторан', experience: 'События', visit: 'Как найти',
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
      menuDesc: 'რესტორან 1001 Nights-ის მენიუ თბილისში: წასახემსებელი, ნახშირზე შემწვარი ქაბაბი, სპარსული ხორეშთი, ბრინჯის კერძები, თევზი და ტკბილეული — ყოველი კერძი ფოტოთი.'
    },

    nav: { menu: 'მენიუ', restaurant: 'რესტორანი', experience: 'ღონისძიებები', visit: 'მისამართი',
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
