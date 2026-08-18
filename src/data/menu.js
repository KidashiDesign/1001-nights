/* ══════════════════════════════════════════════════════════════════════════
   1001 Nights — menu data / منوی رستوران / меню / მენიუ
   ──────────────────────────────────────────────────────────────────────────
   Single source for every dish, in all four site languages.
   Run `node tools/build.mjs` after any change — it regenerates all pages.

   PRICES: every `price` is still `null`. The source (oddmenu.com/p/1001-nights)
   was unreachable from the build environment, and invented prices have no
   business on a real restaurant's site. Fill in the number in GEL — e.g.
   `price: 32` — and rebuild. Cards render cleanly without a price.

   Per dish:
     id     stable anchor, language independent
     img    file name inside media/  (must also exist in media/sm/ and media/md/)
     price  number in GEL, or null
     tags   'veg' | 'vegan' | 'gf' | 'spicy' | 'chef'
     name   display name per language
     desc   one or two sentences per language
     kw     extra search terms per language, never displayed
   ═════════════════════════════════════════════════════════════════════════ */

const LANGS = ['en', 'fa', 'ru', 'ka'];

const categories = [
  {
    id: 'starters', num: '01',
    name: { en: 'Starters & Salads', fa: 'پیش‌غذا و سالاد', ru: 'Закуски и салаты', ka: 'წასახემსებელი და სალათები' },
    short: { en: 'Starters', fa: 'پیش‌غذا', ru: 'Закуски', ka: 'წასახემსებელი' },
    script: { en: 'Pišġazā', fa: 'پیش‌غذا', ru: 'Пишгаза', ka: 'ფიშღაზა' },
    intro: {
      en: 'A Persian table starts wide: small bowls, a heap of fresh herbs, bread straight from the stone oven. All of it meant to be shared.',
      fa: 'سفره ایرانی از ابتدا پهن است: پیش‌غذاهای کوچک، سبزی خوردن تازه و نان داغ از تنور. همه برای شریک شدن.',
      ru: 'Персидский стол начинается широко: маленькие пиалы, охапка свежей зелени, хлеб прямо из тандыра. Всё — чтобы делиться.',
      ka: 'სპარსული სუფრა ფართოდ იწყება: პატარა ჯამები, უამრავი სუფთა მწვანილი, თონიდან ამოღებული პური. ყველაფერი გასაზიარებლად.'
    },
    items: [
      {
        id: 'kashk-e-bademjan', img: 'Kashk-e_Bademjan.webp', price: null, tags: ['veg', 'chef'],
        name: { en: 'Kashk-e Bademjān', fa: 'کشک بادمجان', ru: 'Кашк-е бадемджан', ka: 'ქაშქ-ე ბადემჯანი' },
        desc: {
          en: 'Aubergines charred over open flame and crushed to a cream, with fermented whey, mint oil, garlic and fried onions.',
          fa: 'بادمجان کبابی و کوبیده با کشک، نعنا داغ، سیر و پیاز داغ.',
          ru: 'Баклажаны, обожжённые на открытом огне и растёртые в крем, с кашком, мятным маслом, чесноком и жареным луком.',
          ka: 'ღია ცეცხლზე შემწვარი და კრემად დაფშვნილი ბადრიჯანი, დადუღებული შრატით, პიტნის ზეთით, ნიორითა და შემწვარი ხახვით.'
        },
        kw: { en: 'aubergine eggplant dip starter mezze whey', fa: 'بادمجان پیش غذا کشک', ru: 'баклажан закуска мезе кашк', ka: 'ბადრიჯანი წასახემსებელი მეზე' }
      },
      {
        id: 'bademjan-rolls', img: 'Eggplant_Rolls_with_Nuts.webp', price: null, tags: ['veg'],
        name: { en: 'Aubergine Rolls with Walnut', fa: 'رول بادمجان با گردو', ru: 'Баклажанные рулетики с грецким орехом', ka: 'ბადრიჯნის რულეტი ნიგვზით' },
        desc: {
          en: 'Thin slices of aubergine rolled around a walnut and garlic cream, finished with pomegranate seeds and herbs.',
          fa: 'ورقه‌های نازک بادمجان پیچیده دور کرم گردو و سیر، با دانه انار و سبزی تازه.',
          ru: 'Тонкие ломтики баклажана, свёрнутые вокруг ореховой пасты с чесноком, с зёрнами граната и зеленью.',
          ka: 'ბადრიჯნის თხელი ნაჭრები, გახვეული ნიგვზისა და ნიორის კრემზე, ბროწეულის მარცვლებითა და მწვანილით.'
        },
        kw: { en: 'aubergine eggplant walnut rolls pomegranate starter', fa: 'بادمجان گردو انار رول', ru: 'баклажан орех рулет гранат закуска', ka: 'ბადრიჯანი ნიგოზი ბროწეული რულეტი' }
      },
      {
        id: 'lentil-soup', img: 'Lentil_Soup.webp', price: null, tags: ['vegan'],
        name: { en: 'Lentil Soup', fa: 'سوپ عدس', ru: 'Чечевичный суп', ka: 'ოსპის სუპი' },
        desc: {
          en: 'Smooth red lentils with turmeric, cumin and a generous squeeze of lemon. Served hot, with flatbread.',
          fa: 'عدس قرمز با زردچوبه، زیره و آب لیموی تازه. گرم، همراه نان.',
          ru: 'Нежная красная чечевица с куркумой, зирой и щедрой долькой лимона. Подаётся горячим, с лепёшкой.',
          ka: 'რბილი წითელი ოსპი კურკუმით, ძირათი და ლიმონის უხვი წვენით. ცხლად, ლავაშთან ერთად.'
        },
        kw: { en: 'soup lentil warm vegan', fa: 'سوپ عدس گرم', ru: 'суп чечевица горячее веган', ka: 'სუპი ოსპი ცხელი' }
      },
      {
        id: 'shirazi', img: 'Shirazi_Salad.webp', price: null, tags: ['vegan', 'gf'],
        name: { en: 'Salād-e Shirāzi', fa: 'سالاد شیرازی', ru: 'Салат Ширази', ka: 'შირაზული სალათი' },
        desc: {
          en: 'Cucumber, tomato and onion in a fine dice, dressed with lime juice, olive oil and dried mint.',
          fa: 'خیار، گوجه و پیاز نگینی، با آبلیمو، روغن زیتون و نعناع خشک.',
          ru: 'Огурец, помидор и лук мелким кубиком, заправленные соком лайма, оливковым маслом и сушёной мятой.',
          ka: 'წვრილად დაჭრილი კიტრი, პომიდორი და ხახვი, ლაიმის წვენით, ზეითუნის ზეთითა და ხმელი პიტნით.'
        },
        kw: { en: 'salad cucumber tomato fresh shirazi', fa: 'سالاد خیار گوجه شیرازی', ru: 'салат огурец помидор свежий', ka: 'სალათი კიტრი პომიდორი' }
      },
      {
        id: 'fattoush', img: 'Fattoush_Salad.webp', price: null, tags: ['veg'],
        name: { en: 'Fattoush', fa: 'فتوش', ru: 'Фаттуш', ka: 'ფატუში' },
        desc: {
          en: 'A crisp Levantine salad with sumac, pomegranate molasses and toasted flatbread.',
          fa: 'سالاد ترد شامی با سماق، رب انار و نان برشته.',
          ru: 'Хрустящий левантийский салат с сумахом, гранатовой патокой и подрумяненной лепёшкой.',
          ka: 'ხრაშუნა ლევანტური სალათი სუმახით, ბროწეულის ბადაგითა და შემწვარი ლავაშით.'
        },
        kw: { en: 'salad sumac bread levant crisp', fa: 'سالاد سماق نان', ru: 'салат сумах хлеб', ka: 'სალათი სუმახი პური' }
      },
      {
        id: 'greek-salad', img: 'Greek_salad.webp', price: null, tags: ['veg', 'gf'],
        name: { en: 'Greek Salad', fa: 'سالاد یونانی', ru: 'Греческий салат', ka: 'ბერძნული სალათი' },
        desc: {
          en: 'Tomato, cucumber, pepper and olives with feta, oregano and cold-pressed olive oil.',
          fa: 'گوجه، خیار، فلفل دلمه‌ای و زیتون با پنیر فتا، آویشن و روغن زیتون.',
          ru: 'Помидор, огурец, перец и оливки с фетой, орегано и оливковым маслом холодного отжима.',
          ka: 'პომიდორი, კიტრი, წიწაკა და ზეთისხილი ფეტათი, ორეგანოთი და ცივადწნეხილი ზეითუნის ზეთით.'
        },
        kw: { en: 'salad feta olives greek', fa: 'سالاد پنیر زیتون یونانی', ru: 'салат фета оливки греческий', ka: 'სალათი ფეტა ზეთისხილი' }
      }
    ]
  },

  {
    id: 'kabab', num: '02',
    name: { en: 'From the Charcoal Grill', fa: 'کباب‌ها', ru: 'С углей', ka: 'ნახშირზე შემწვარი' },
    short: { en: 'Kabāb', fa: 'کباب', ru: 'Кебаб', ka: 'ქაბაბი' },
    script: { en: 'Kabāb', fa: 'کباب', ru: 'Кебаб', ka: 'ქაბაბი' },
    intro: {
      en: 'Everything straight over glowing charcoal, nothing in between. Every skewer comes with saffron rice or flatbread, a grilled tomato, basil and sumac.',
      fa: 'همه چیز روی زغال گداخته، بدون واسطه. هر سیخ با چلو زعفرانی یا نان، گوجه کبابی، ریحان و سماق سرو می‌شود.',
      ru: 'Всё — прямо над тлеющими углями, без посредников. К каждому шампуру рис с шафраном или лепёшка, печёный помидор, базилик и сумах.',
      ka: 'ყველაფერი პირდაპირ ანთებულ ნახშირზე, შუალედის გარეშე. ყოველ შამფურს მოჰყვება ზაფრანიანი ბრინჯი ან ლავაში, შემწვარი პომიდორი, რეჰანი და სუმახი.'
    },
    items: [
      {
        id: 'kabab-barg', img: 'Kabab_Barg.webp', price: null, tags: ['chef', 'gf'],
        name: { en: 'Kabāb-e Barg', fa: 'کباب برگ', ru: 'Кебаб Барг', ka: 'ქაბაბ ბარგი' },
        desc: {
          en: 'Beef fillet in thin leaves, marinated overnight in onion juice and saffron, brushed with saffron butter.',
          fa: 'فیله گوساله ورقه‌ای، یک شب در آب پیاز و زعفران خوابانده و با کره زعفرانی.',
          ru: 'Говяжья вырезка тонкими пластами, ночь в луковом соке с шафраном, смазанная шафрановым маслом.',
          ka: 'საქონლის ფილე თხელ ფურცლებად, ღამით ხახვის წვენსა და ზაფრანაში დამარინადებული, ზაფრანის კარაქით.'
        },
        kw: { en: 'kebab kebap beef fillet grill skewer barg', fa: 'کباب برگ گوشت فیله سیخ', ru: 'кебаб шашлык говядина вырезка шампур барг', ka: 'ქაბაბი მწვადი საქონელი ფილე შამფური' }
      },
      {
        id: 'kabab-soltani', img: 'Barg_Kebab.webp', price: null, tags: ['chef'],
        name: { en: 'Kabāb-e Soltāni', fa: 'کباب سلطانی', ru: 'Кебаб Солтани', ka: 'ქაბაბ სოლთანი' },
        desc: {
          en: 'The sultan of skewers: one Barg and one Koobideh side by side, on a bed of saffron rice.',
          fa: 'سلطان سیخ‌ها: یک سیخ برگ و یک سیخ کوبیده، روی چلو زعفرانی.',
          ru: 'Султан среди шампуров: Барг и Кубиде рядом, на подушке из шафранового риса.',
          ka: 'შამფურების სულთანი: ბარგი და ქუბიდე გვერდიგვერდ, ზაფრანიანი ბრინჯის ლოგინზე.'
        },
        kw: { en: 'kebab kebap soltani sultani barg koobideh mixed platter', fa: 'کباب سلطانی برگ کوبیده', ru: 'кебаб солтани султани смешанный ассорти', ka: 'ქაბაბი სოლთანი ასორტი' }
      },
      {
        id: 'koobideh', img: 'Lula_Kebab.webp', price: null, tags: [],
        name: { en: 'Kabāb-e Koobideh (Lula)', fa: 'کباب کوبیده', ru: 'Кебаб Кубиде (Люля)', ka: 'ქაბაბ ქუბიდე (ლულა)' },
        desc: {
          en: 'Lamb and beef twice minced with onion and sumac, pressed onto the flat skewer by hand.',
          fa: 'گوشت گوسفند و گوساله دوبار چرخ شده با پیاز و سماق، با دست روی سیخ پهن.',
          ru: 'Баранина и говядина дважды через мясорубку, с луком и сумахом, вручную на плоском шампуре.',
          ka: 'ორჯერ დაფქული ცხვრისა და საქონლის ხორცი ხახვითა და სუმახით, ხელით ბრტყელ შამფურზე.'
        },
        kw: { en: 'kebab kebap koobideh kubideh lula minced lamb beef skewer', fa: 'کباب کوبیده لوله گوشت چرخ کرده', ru: 'кебаб люля кубиде фарш баранина шампур', ka: 'ქაბაბი ლულა ქუბიდე ფარში ცხვარი' }
      },
      {
        id: 'bakhtiari', img: 'Bakhtiari_Kebab.webp', price: null, tags: [],
        name: { en: 'Kabāb-e Bakhtiāri', fa: 'کباب بختیاری', ru: 'Кебаб Бахтияри', ka: 'ქაბაბ ბახთიარი' },
        desc: {
          en: 'The skewer of the mountain nomads: saffron-marinated chicken and fillet alternating down the spit.',
          fa: 'سیخ عشایر بختیاری: جوجه زعفرانی و فیله، یکی در میان.',
          ru: 'Шампур горных кочевников: курица в шафране и вырезка через одно.',
          ka: 'მთის მომთაბარეების შამფური: ზაფრანში დამარინადებული ქათამი და ფილე მონაცვლეობით.'
        },
        kw: { en: 'kebab kebap bakhtiari chicken fillet mixed skewer', fa: 'کباب بختیاری جوجه فیله', ru: 'кебаб бахтияри курица вырезка шампур', ka: 'ქაბაბი ბახთიარი ქათამი ფილე' }
      },
      {
        id: 'shishlik', img: 'Shishlik.webp', price: null, tags: ['chef', 'gf'],
        name: { en: 'Shishlik', fa: 'شیشلیک', ru: 'Шишлик', ka: 'შიშლიკი' },
        desc: {
          en: 'Lamb chops in the Shandiz manner, marinated for twenty-four hours and grilled exactly to the point.',
          fa: 'راسته گوسفند به سبک شاندیز، بیست و چهار ساعت مزه‌دار شده و کباب شده.',
          ru: 'Бараньи котлеты по-шандизски, сутки в маринаде и на угли — ровно до готовности.',
          ka: 'ცხვრის ნეკნები შანდიზულად, ოცდაოთხი საათი მარინადში და ზუსტად გამომწვარი.'
        },
        kw: { en: 'kebab kebap shishlik shashlik lamb chops grill', fa: 'شیشلیک راسته گوسفند', ru: 'шишлик шашлык баранина котлеты', ka: 'შიშლიკი ცხვარი ნეკნები' }
      },
      {
        id: 'kabab-fillet', img: 'Fillet_Kebab.webp', price: null, tags: ['gf'],
        name: { en: 'Kabāb-e Filet', fa: 'کباب فیله', ru: 'Кебаб из вырезки', ka: 'ქაბაბი ფილედან' },
        desc: {
          en: 'Pure fillet cubes on the skewer — salt, saffron and butter, and nothing else.',
          fa: 'مکعب‌های فیله خالص روی سیخ — نمک، زعفران و کره، همین.',
          ru: 'Кубики чистой вырезки на шампуре — соль, шафран и масло, и больше ничего.',
          ka: 'სუფთა ფილეს კუბიკები შამფურზე — მარილი, ზაფრანა და კარაქი, სხვა არაფერი.'
        },
        kw: { en: 'kebab kebap fillet filet beef skewer', fa: 'کباب فیله گوشت سیخ', ru: 'кебаб вырезка филе шампур', ka: 'ქაბაბი ფილე შამფური' }
      },
      {
        id: 'joojeh-bone', img: 'Chicken_Kebab_with_bones.webp', price: null, tags: ['gf'],
        name: { en: 'Joojeh Kabāb on the Bone', fa: 'جوجه کباب با استخوان', ru: 'Джудже-кебаб на кости', ka: 'ჯუჯე ქაბაბი ძვალზე' },
        desc: {
          en: 'Chicken on the bone marinated in saffron, yoghurt and lime — crisp outside, still juicy within.',
          fa: 'جوجه با استخوان در زعفران، ماست و آبلیمو — بیرون برشته، درون آبدار.',
          ru: 'Курица на кости в маринаде из шафрана, йогурта и лайма — снаружи румяная, внутри сочная.',
          ka: 'ძვალზე ქათამი ზაფრანის, იოგურტისა და ლაიმის მარინადში — გარედან ხრაშუნა, შიგნიდან წვნიანი.'
        },
        kw: { en: 'kebab kebap joojeh jooje chicken saffron grill skewer', fa: 'جوجه کباب مرغ زعفران استخوان', ru: 'кебаб джудже курица шафран шампур', ka: 'ქაბაბი ჯუჯე ქათამი ზაფრანა' }
      },
      {
        id: 'half-chicken', img: 'Chicken_with_bones.webp', price: null, tags: [],
        name: { en: 'Half Grilled Chicken', fa: 'نیم مرغ کبابی', ru: 'Половина цыплёнка на гриле', ka: 'ნახევარი წიწილა გრილზე' },
        desc: {
          en: 'Cooked slowly over the embers, with saffron rice, grilled vegetables and garlic sauce.',
          fa: 'روی زغال، آرام و کامل، با چلو زعفرانی، سبزیجات کبابی و سس سیر.',
          ru: 'Медленно над углями, с шафрановым рисом, овощами гриль и чесночным соусом.',
          ka: 'ნელა ნაკვერჩხალზე, ზაფრანიანი ბრინჯით, შემწვარი ბოსტნეულითა და ნიორის სოუსით.'
        },
        kw: { en: 'chicken half grilled poultry', fa: 'مرغ کبابی نیم', ru: 'курица цыплёнок гриль', ka: 'ქათამი წიწილა გრილი' }
      }
    ]
  },

  {
    id: 'khoresht', num: '03',
    name: { en: 'Khoresht — Persian Stews', fa: 'خورش‌های ایرانی', ru: 'Хорешт — персидские рагу', ka: 'ხორეშთი — სპარსული საშუშხავი' },
    short: { en: 'Khoresht', fa: 'خورش', ru: 'Хорешт', ka: 'ხორეშთი' },
    script: { en: 'Khoresht', fa: 'خورش', ru: 'Хорешт', ka: 'ხორეშთი' },
    intro: {
      en: 'Hours on a low flame. Every khoresht arrives with chelo — steamed long-grain rice under a golden tahdig crust.',
      fa: 'ساعت‌ها روی شعله ملایم. هر خورش با چلوی دم‌کشیده و ته‌دیگ طلایی سرو می‌شود.',
      ru: 'Часами на малом огне. Каждый хорешт подаётся с чело — рассыпчатым рисом и золотой корочкой тахдиг.',
      ka: 'საათობით ნელ ცეცხლზე. ყოველი ხორეშთი მოდის ჩელოსთან — ორთქლზე მოხარშულ ბრინჯთან და ოქროსფერ თახდიგთან ერთად.'
    },
    items: [
      {
        id: 'ghormeh-sabzi', img: 'Ghorme_Sabzi_Stew.webp', price: null, tags: ['chef'],
        name: { en: 'Ghormeh Sabzi', fa: 'قورمه‌سبزی', ru: 'Гормэ сабзи', ka: 'ღორმე საბზი' },
        desc: {
          en: 'The national dish: seven herbs, kidney beans and lamb, sharpened with dried lime.',
          fa: 'غذای ملی ایران: سبزی، لوبیا قرمز و گوشت گوسفند، با لیمو عمانی.',
          ru: 'Национальное блюдо: семь трав, красная фасоль и баранина, с сушёным лаймом.',
          ka: 'ეროვნული კერძი: შვიდი მწვანილი, წითელი ლობიო და ცხვარი, ხმელი ლაიმით.'
        },
        kw: { en: 'stew khoresht herbs beans lamb rice ghormeh', fa: 'خورش قورمه سبزی لوبیا گوشت', ru: 'рагу хорешт зелень фасоль баранина рис', ka: 'ხორეშთი მწვანილი ლობიო ცხვარი' }
      },
      {
        id: 'gheimeh', img: 'Gheimeh_Stew.webp', price: null, tags: [],
        name: { en: 'Gheimeh', fa: 'قیمه', ru: 'Гейме', ka: 'ღეიმე' },
        desc: {
          en: 'Yellow split peas and lamb in tomato and Limu Omani, crowned with a nest of fried potato straw.',
          fa: 'لپه و گوشت گوسفند در رب گوجه و لیمو عمانی، با سیب‌زمینی سرخ‌شده.',
          ru: 'Жёлтый горох и баранина в томате с лиму-омани, под шапкой жареного картофельного соломки.',
          ka: 'ყვითელი ბარდა და ცხვარი პომიდვრითა და ლიმუ-ომანით, შემწვარი კარტოფილის ჩალით.'
        },
        kw: { en: 'stew khoresht split peas lamb potato tomato gheimeh', fa: 'خورش قیمه لپه گوشت سیب زمینی', ru: 'рагу хорешт горох баранина картофель', ka: 'ხორეშთი ბარდა ცხვარი კარტოფილი' }
      },
      {
        id: 'mahiche', img: 'Mahiche.webp', price: null, tags: ['chef', 'gf'],
        name: { en: 'Māhiche', fa: 'ماهیچه', ru: 'Махиче', ka: 'მაჰიჩე' },
        desc: {
          en: 'Lamb shank braised four hours in saffron and onion, until it slides off the bone.',
          fa: 'ماهیچه گوسفند، چهار ساعت با زعفران و پیاز، تا از استخوان جدا شود.',
          ru: 'Бараньи голяшки, четыре часа в шафране и луке, пока не отходят от кости.',
          ka: 'ცხვრის წვივი, ოთხი საათი ზაფრანასა და ხახვში, სანამ ძვალს არ მოსცილდება.'
        },
        kw: { en: 'stew khoresht lamb shank braised slow rice mahiche', fa: 'ماهیچه گوسفند خورش آرام', ru: 'рагу баранина голяшка томлёная', ka: 'ხორეშთი ცხვარი წვივი' }
      },
      {
        id: 'khoresht-selection', img: 'Persian_stews.webp', price: null, tags: [],
        name: { en: 'Khoresht Selection for Two', fa: 'بشقاب خورش برای دو نفر', ru: 'Ассорти хорештов на двоих', ka: 'ხორეშთის ასორტი ორისთვის' },
        desc: {
          en: 'Three stews from the day’s pots, with rice, bread and the sides of the house. For two.',
          fa: 'سه خورش روز، با چلو، نان و مخلفات. برای دو نفر.',
          ru: 'Три рагу дня, с рисом, хлебом и домашними закусками. На двоих.',
          ka: 'დღის სამი ხორეშთი, ბრინჯით, პურითა და სახლის გარნირით. ორისთვის.'
        },
        kw: { en: 'stew khoresht selection sharing platter two tasting', fa: 'خورش بشقاب دو نفره', ru: 'рагу ассорти на двоих дегустация', ka: 'ხორეშთი ასორტი ორისთვის' }
      }
    ]
  },

  {
    id: 'rice', num: '04',
    name: { en: 'Rice & Feast Dishes', fa: 'پلو و غذاهای مجلسی', ru: 'Рис и праздничные блюда', ka: 'ბრინჯი და სადღესასწაულო კერძები' },
    short: { en: 'Rice', fa: 'پلو', ru: 'Рис', ka: 'ბრინჯი' },
    script: { en: 'Polo', fa: 'پلو', ru: 'Поло', ka: 'ფოლო' },
    intro: {
      en: 'Rice is not a side here. It is washed, soaked, boiled briefly and then steamed — until every grain stands on its own.',
      fa: 'برنج اینجا مخلفات نیست. شسته، خیسانده، آبکش و دم می‌شود — تا هر دانه جدا بایستد.',
      ru: 'Рис здесь не гарнир. Его моют, замачивают, коротко варят и доводят на пару — пока каждое зерно не встанет отдельно.',
      ka: 'ბრინჯი აქ გარნირი არაა. ირეცხება, იზელება, მოკლედ იხარშება და შემდეგ ორთქლდება — სანამ თითოეული მარცვალი ცალკე არ დადგება.'
    },
    items: [
      {
        id: 'biryani-chicken', img: 'Biryani_Chicken.webp', price: null, tags: [],
        name: { en: 'Chicken Biryāni', fa: 'بریانی مرغ', ru: 'Бирьяни с курицей', ka: 'ქათმის ბირიანი' },
        desc: {
          en: 'Layered spiced rice with saffron, cardamom and cinnamon, finished in the pot with marinated chicken.',
          fa: 'برنج لایه‌لایه با زعفران، هل و دارچین، همراه مرغ مزه‌دار در قابلمه دم می‌کشد.',
          ru: 'Слоёный пряный рис с шафраном, кардамоном и корицей, доведённый в казане с маринованной курицей.',
          ka: 'ფენოვანი სანელებლიანი ბრინჯი ზაფრანით, კარდამონითა და დარიჩინით, ქვაბში დამარინადებულ ქათამთან ერთად.'
        },
        kw: { en: 'rice biryani beryani chicken saffron', fa: 'بریانی برنج مرغ زعفران', ru: 'рис бирьяни курица шафран', ka: 'ბრინჯი ბირიანი ქათამი' }
      },
      {
        id: 'mazbi-chicken', img: 'Chicken_Mazbi.webp', price: null, tags: ['spicy'],
        name: { en: 'Mazbi Chicken', fa: 'مرغ مظبی', ru: 'Курица мазби', ka: 'ქათამი მაზბი' },
        desc: {
          en: 'Chicken cooked over wood on spiced rice, in the manner of the Arabian peninsula — with tomato sauce and sumac.',
          fa: 'مرغ پخته روی هیزم و برنج ادویه‌دار، به سبک شبه‌جزیره عرب — با سس گوجه و سماق.',
          ru: 'Курица, приготовленная на дровах поверх пряного риса, по-аравийски — с томатным соусом и сумахом.',
          ka: 'შეშაზე მომზადებული ქათამი სანელებლიან ბრინჯზე, არაბული ნახევარკუნძულის მანერით — პომიდვრის სოუსითა და სუმახით.'
        },
        kw: { en: 'rice mazbi madfoon chicken arabic oven spicy', fa: 'مظبی مرغ برنج عربی', ru: 'рис мазби курица арабский острое', ka: 'ბრინჯი მაზბი ქათამი' }
      },
      {
        id: 'machboos', img: 'Majboos.webp', price: null, tags: [],
        name: { en: 'Machboos', fa: 'مجبوس', ru: 'Мачбус', ka: 'მაჩბუსი' },
        desc: {
          en: 'Long-grain rice with baharat, loomi and braised meat — the Gulf classic, meant for the middle of the table.',
          fa: 'برنج دانه‌بلند با بهارات، لیمو عمانی و گوشت — کلاسیک خلیج، برای وسط سفره.',
          ru: 'Длиннозёрный рис с бахаратом, лууми и томлёным мясом — классика Залива, для середины стола.',
          ka: 'გრძელმარცვლოვანი ბრინჯი ბაჰარათით, ლუმითა და დაშუშული ხორცით — ყურის კლასიკა, სუფრის შუაგულისთვის.'
        },
        kw: { en: 'rice machboos majboos kabsa baharat gulf meat sharing', fa: 'مجبوس برنج بهارات گوشت', ru: 'рис мачбус кабса бахарат мясо', ka: 'ბრინჯი მაჩბუსი ხორცი' }
      }
    ]
  },

  {
    id: 'fish', num: '05',
    name: { en: 'Fish & Seafood', fa: 'ماهی و غذای دریایی', ru: 'Рыба и морепродукты', ka: 'თევზი და ზღვის პროდუქტები' },
    short: { en: 'Fish', fa: 'ماهی', ru: 'Рыба', ka: 'თევზი' },
    script: { en: 'Māhi', fa: 'ماهی', ru: 'Махи', ka: 'მაჰი' },
    intro: {
      en: 'From the Caspian to the Persian Gulf — fish arrives whole on the plate, with lemon and herbs.',
      fa: 'از دریای خزر تا خلیج فارس — ماهی کامل روی بشقاب، با لیمو و سبزی.',
      ru: 'От Каспия до Персидского залива — рыба приходит на тарелку целиком, с лимоном и зеленью.',
      ka: 'კასპიიდან სპარსეთის ყურემდე — თევზი თეფშზე მთლიანად მოდის, ლიმონითა და მწვანილით.'
    },
    items: [
      {
        id: 'dorado', img: 'Dorado_Fish.webp', price: null, tags: ['chef', 'gf'],
        name: { en: 'Grilled Dorado', fa: 'ماهی دورادو کبابی', ru: 'Дорадо на гриле', ka: 'დორადო გრილზე' },
        desc: {
          en: 'A whole dorado over charcoal, stuffed with herbs and garlic, with grilled lemon and saffron rice.',
          fa: 'ماهی دورادو کامل روی زغال، پر شده با سبزی و سیر، با لیموی کبابی و چلو زعفرانی.',
          ru: 'Целая дорадо на углях, фаршированная зеленью и чесноком, с печёным лимоном и шафрановым рисом.',
          ka: 'მთლიანი დორადო ნახშირზე, მწვანილითა და ნიორით შიგთავსით, შემწვარი ლიმონითა და ზაფრანიანი ბრინჯით.'
        },
        kw: { en: 'fish dorado dorada seabream grill lemon', fa: 'ماهی دورادو کباب لیمو', ru: 'рыба дорадо гриль лимон', ka: 'თევზი დორადო გრილი ლიმონი' }
      },
      {
        id: 'seafood-platter', img: 'seafood.webp', price: null, tags: [],
        name: { en: 'Seafood Platter', fa: 'بشقاب غذای دریایی', ru: 'Ассорти морепродуктов', ka: 'ზღვის პროდუქტების ასორტი' },
        desc: {
          en: 'Prawns, squid and the fish of the day, with lemon, herb oil and toasted bread. Made for sharing.',
          fa: 'میگو، ماهی مرکب و ماهی روز، با لیمو، روغن سبزیجات و نان برشته. برای شریک شدن.',
          ru: 'Креветки, кальмар и рыба дня, с лимоном, травяным маслом и подрумяненным хлебом. Чтобы делиться.',
          ka: 'კრევეტები, კალმარი და დღის თევზი, ლიმონით, მწვანილის ზეთითა და შემწვარი პურით. გასაზიარებლად.'
        },
        kw: { en: 'seafood prawns shrimp squid calamari platter sharing fish', fa: 'میگو ماهی مرکب دریایی بشقاب', ru: 'морепродукты креветки кальмар ассорти', ka: 'ზღვის პროდუქტები კრევეტი კალმარი' }
      }
    ]
  },

  {
    id: 'sweets', num: '06',
    name: { en: 'Sweets & Tea', fa: 'شیرینی و چای', ru: 'Сладости и чай', ka: 'ტკბილეული და ჩაი' },
    short: { en: 'Sweets & Tea', fa: 'شیرینی', ru: 'Сладости', ka: 'ტკბილეული' },
    script: { en: 'Shirini o Chāy', fa: 'شیرینی و چای', ru: 'Ширини о чай', ka: 'შირინი ო ჩაი' },
    intro: {
      en: 'The evening ends the way it ought to begin: black tea from the samovar, and something sweet beside it.',
      fa: 'شب همان‌طور تمام می‌شود که باید شروع شود: چای سیاه از سماور و چیزی شیرین کنارش.',
      ru: 'Вечер заканчивается так, как должен был начаться: чёрный чай из самовара и что-нибудь сладкое рядом.',
      ka: 'საღამო ისე მთავრდება, როგორც უნდა დაწყებულიყო: შავი ჩაი სამოვრიდან და რაღაც ტკბილი გვერდით.'
    },
    items: [
      {
        id: 'tea-baklava', img: 'Tea_and_baklava.webp', price: null, tags: ['veg', 'chef'],
        name: { en: 'Tea & Baklava', fa: 'چای و باقلوا', ru: 'Чай и пахлава', ka: 'ჩაი და ფახლავა' },
        desc: {
          en: 'Black tea from the samovar, with baklava of pistachio and rose water.',
          fa: 'چای سیاه از سماور، با باقلوای پسته و گلاب.',
          ru: 'Чёрный чай из самовара, с пахлавой на фисташке и розовой воде.',
          ka: 'შავი ჩაი სამოვრიდან, ფისტისა და ვარდის წყლის ფახლავათი.'
        },
        kw: { en: 'tea chai baklava dessert sweet pistachio samovar', fa: 'چای باقلوا دسر پسته سماور', ru: 'чай пахлава десерт фисташка самовар', ka: 'ჩაი ფახლავა დესერტი ფისტა' }
      },
      {
        id: 'baklava-plate', img: 'Tea__Baklava.webp', price: null, tags: ['veg'],
        name: { en: 'Baklava Plate', fa: 'بشقاب باقلوا', ru: 'Тарелка пахлавы', ka: 'ფახლავას თეფში' },
        desc: {
          en: 'Three kinds of baklava — pistachio, walnut and honey — dusted with saffron sugar.',
          fa: 'سه نوع باقلوا — پسته، گردو و عسل — با شکر زعفرانی.',
          ru: 'Три вида пахлавы — фисташка, грецкий орех и мёд — с шафрановой пудрой.',
          ka: 'სამი სახის ფახლავა — ფისტა, ნიგოზი და თაფლი — ზაფრანის შაქრით მოყრილი.'
        },
        kw: { en: 'baklava dessert sweet pistachio walnut honey plate', fa: 'باقلوا دسر پسته گردو عسل', ru: 'пахлава десерт фисташка орех мёд', ka: 'ფახლავა დესერტი ნიგოზი თაფლი' }
      },
      {
        id: 'dessert-of-the-day', img: 'Desert.webp', price: null, tags: ['veg'],
        name: { en: 'Dessert of the Day', fa: 'دسر روز', ru: 'Десерт дня', ka: 'დღის დესერტი' },
        desc: {
          en: 'Whatever the kitchen made today: faloodeh, shole zard or saffron ice cream. Just ask.',
          fa: 'هر چه امروز آشپزخانه درست کرده: فالوده، شله‌زرد یا بستنی زعفرانی. بپرسید.',
          ru: 'То, что кухня сделала сегодня: фалуде, шоле-зард или шафрановое мороженое. Спросите нас.',
          ka: 'რაც სამზარეულომ დღეს გააკეთა: ფალუდე, შოლე ზარდი ან ზაფრანის ნაყინი. უბრალოდ იკითხეთ.'
        },
        kw: { en: 'dessert sweet faloodeh shole zard ice cream saffron', fa: 'دسر فالوده شله زرد بستنی', ru: 'десерт фалуде шоле зард мороженое', ka: 'დესერტი ნაყინი' }
      },
      {
        id: 'berry-sharbat', img: 'RedBerry.webp', price: null, tags: ['vegan', 'gf'],
        name: { en: 'Berry Sharbat', fa: 'شربت میوه‌های قرمز', ru: 'Ягодный шербет', ka: 'კენკროვანი შარბათი' },
        desc: {
          en: 'House-made red berry syrup poured over ice, with mint and lime.',
          fa: 'شربت خانگی میوه‌های قرمز روی یخ، با نعنا و لیمو.',
          ru: 'Домашний сироп из красных ягод со льдом, мятой и лаймом.',
          ka: 'სახლის წითელი კენკრის სიროფი ყინულზე, პიტნითა და ლაიმით.'
        },
        kw: { en: 'drink sharbat sherbet berry syrup cold mint lemonade', fa: 'شربت نوشیدنی خنک نعنا', ru: 'напиток шербет ягоды холодный мята', ka: 'სასმელი შარბათი კენკრა პიტნა' }
      }
    ]
  }
];

const tagLabels = {
  veg:   { cls: 'tag-accent',   en: 'Vegetarian',  fa: 'گیاهی',        ru: 'Вегетарианское', ka: 'ვეგეტარიანული' },
  vegan: { cls: 'tag-accent',   en: 'Vegan',       fa: 'وگان',         ru: 'Веганское',      ka: 'ვეგანური' },
  gf:    { cls: 'tag-neutral',  en: 'Gluten-free', fa: 'بدون گلوتن',   ru: 'Без глютена',    ka: 'უგლუტენო' },
  spicy: { cls: 'tag-outline',  en: 'Spicy',       fa: 'تند',          ru: 'Острое',         ka: 'ცხარე' },
  chef:  { cls: 'tag-accent-2', en: "Chef's pick", fa: 'پیشنهاد سرآشپز', ru: 'Выбор шефа',   ka: 'შეფის რჩეული' }
};

/* Shown on the home page, in this order */
const signature = ['kabab-barg', 'ghormeh-sabzi', 'mahiche', 'kashk-e-bademjan'];

const currency = 'GEL';

export { LANGS, categories, tagLabels, signature, currency };
