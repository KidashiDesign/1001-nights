/* ══════════════════════════════════════════════════════════════════════════
   1001 Nights — menu data / منوی رستوران / меню / მენიუ
   ──────────────────────────────────────────────────────────────────────────
   Single source for every dish, in all four site languages.

   PRICES: every `price` is still `null`. Fill in the number in GEL — e.g.
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
    name: { en: 'Starters, Salads & Mezze', fa: 'پیش‌غذا، سالاد و مزه', ru: 'Закуски, салаты и мезе', ka: 'წასახემსებელი, სალათები და მეზე' },
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
      },
      {
        id: 'caesar-salad', img: 'Caesar_Salad.webp', price: null, tags: [],
        name: { en: 'Caesar Salad', fa: 'سالاد سزار', ru: 'Салат Цезарь', ka: 'ცეზარის სალათი' },
        desc: {
          en: 'Crisp romaine, shaved parmesan and garlic croutons in a classic Caesar dressing.',
          fa: 'کاهو رومی ترد، پنیر پارمزان و نان سیر خرد شده با سس سزار.',
          ru: 'Хрустящий ромен, тонко нарезанный пармезан и чесночные гренки под классическим соусом Цезарь.',
          ka: 'ხრაშუნა რომაული სალათი, პარმეზანი და ნიორის კრუტონები კლასიკური ცეზარის სოუსით.'
        },
        kw: { en: 'salad caesar romaine parmesan croutons', fa: 'سالاد سزار کاهو پارمزان', ru: 'салат цезарь романо пармезан', ka: 'სალათი ცეზარი პარმეზანი' }
      },
      {
        id: 'season-salad', img: 'Season_Salad.webp', price: null, tags: ['vegan', 'gf'],
        name: { en: 'Season Salad', fa: 'سالاد فصل', ru: 'Сезонный салат', ka: 'სეზონური სალათი' },
        desc: {
          en: 'Whatever the market brought in today, cut simply and dressed with olive oil and lemon.',
          fa: 'هرچه امروز از بازار رسیده، ساده خرد شده با روغن زیتون و لیمو.',
          ru: 'То, что сегодня привезли с рынка, просто нарезанное и заправленное оливковым маслом и лимоном.',
          ka: 'რაც დღეს ბაზრიდან მოვიდა, უბრალოდ დაჭრილი, ზეითუნის ზეთითა და ლიმონით.'
        },
        kw: { en: 'salad season fresh vegetables market', fa: 'سالاد فصل تازه', ru: 'салат сезонный свежий', ka: 'სალათი სეზონური' }
      },
      {
        id: 'hummus', img: 'Hummus.webp', price: null, tags: ['vegan'],
        name: { en: 'Hummus', fa: 'حمص', ru: 'Хумус', ka: 'ჰუმუსი' },
        desc: {
          en: 'Chickpeas blended smooth with tahini, lemon and garlic, finished with olive oil.',
          fa: 'نخود چرخ‌شده با طحینی، لیمو و سیر، با روغن زیتون.',
          ru: 'Нут, взбитый до кремовой текстуры с тахини, лимоном и чесноком, сверху оливковое масло.',
          ka: 'ნაღდის ბადრიჯანი გლუვად ათქვეფილი ტახინით, ლიმონითა და ნიორით, ზეითუნის ზეთით შემკული.'
        },
        kw: { en: 'hummus chickpea dip tahini levant', fa: 'حمص نخود طحینی', ru: 'хумус нут тахини', ka: 'ჰუმუსი ნაღდი' }
      },
      {
        id: 'mutabal', img: 'Mutabal.webp', price: null, tags: ['veg'],
        name: { en: 'Mutabal', fa: 'متبل', ru: 'Мутабаль', ka: 'მუთაბალი' },
        desc: {
          en: 'Smoky grilled aubergine mashed with tahini, yoghurt, garlic and lemon.',
          fa: 'بادمجان کبابی دودی له‌شده با طحینی، ماست، سیر و لیمو.',
          ru: 'Дымный печёный баклажан, растёртый с тахини, йогуртом, чесноком и лимоном.',
          ka: 'შებოლილი შემწვარი ბადრიჯანი ტახინით, იოგურტით, ნიორითა და ლიმონით ნაზილული.'
        },
        kw: { en: 'mutabal baba ganoush eggplant tahini smoky', fa: 'متبل بادمجان طحینی', ru: 'мутабаль баклажан тахини', ka: 'მუთაბალი ბადრიჯანი' }
      },
      {
        id: 'black-olives', img: 'Black_Olives.webp', price: null, tags: ['vegan', 'gf'],
        name: { en: 'Black Olives', fa: 'زیتون سیاه', ru: 'Чёрные оливки', ka: 'შავი ზეთისხილი' },
        desc: {
          en: 'Cured black olives, marinated in herbs and olive oil.',
          fa: 'زیتون سیاه، خوابانده در سبزی و روغن زیتون.',
          ru: 'Вяленые чёрные оливки, маринованные с травами и оливковым маслом.',
          ka: 'დამარილებული შავი ზეთისხილი, მწვანილითა და ზეითუნის ზეთით დამარინადებული.'
        },
        kw: { en: 'olives black side condiment', fa: 'زیتون سیاه', ru: 'оливки чёрные', ka: 'ზეთისხილი შავი' }
      },
      {
        id: 'green-olives', img: 'Green_Olives.webp', price: null, tags: ['vegan', 'gf'],
        name: { en: 'Green Olives', fa: 'زیتون سبز', ru: 'Зелёные оливки', ka: 'მწვანე ზეთისხილი' },
        desc: {
          en: 'Green olives cured with garlic, chili flakes and herb oil.',
          fa: 'زیتون سبز با سیر، فلفل چیلی و روغن سبزی.',
          ru: 'Зелёные оливки с чесноком, хлопьями чили и травяным маслом.',
          ka: 'მწვანე ზეთისხილი ნიორით, წიწაკის ფანტელებითა და მწვანილის ზეთით.'
        },
        kw: { en: 'olives green side condiment', fa: 'زیتون سبز', ru: 'оливки зелёные', ka: 'ზეთისხილი მწვანე' }
      },
      {
        id: 'pickled-vegetables', img: 'Pickled_Vegetables.webp', price: null, tags: ['vegan', 'gf'],
        name: { en: 'Pickled Greens', fa: 'ترشی سبزیجات', ru: 'Маринованная зелень', ka: 'დამარინადებული მწვანილი' },
        desc: {
          en: 'A house plate of pickled cucumber, chili and herbs, sharp and crunchy.',
          fa: 'بشقاب خانگی خیارشور، فلفل و سبزی ترشی، ترد و تند.',
          ru: 'Домашняя тарелка маринованных огурцов, перца и трав — остро и хрустяще.',
          ka: 'სახლის თეფში დამარინადებული კიტრით, წიწაკითა და მწვანილით, მჟავე და ხრაშუნა.'
        },
        kw: { en: 'pickles pickled greens sour crunchy side', fa: 'ترشی سبزی', ru: 'соленья маринад зелень', ka: 'დამარინადებული მწვანილი' }
      },
      {
        id: 'mixed-pickles', img: 'Mixed_Pickles.webp', price: null, tags: ['vegan', 'gf'],
        name: { en: 'Mixed Pickles (Torshi)', fa: 'ترشی مخلوط', ru: 'Ассорти солений (Торши)', ka: 'შერეული დამარინადებული (თორში)' },
        desc: {
          en: 'The Persian pickle jar: cauliflower, carrot and aubergine in sharp vinegar and herbs.',
          fa: 'ترشی ایرانی: گل‌کلم، هویج و بادمجان در سرکه تند و سبزی.',
          ru: 'Персидская банка солений: цветная капуста, морковь и баклажан в остром уксусе с травами.',
          ka: 'სპარსული დამარინადებული ქილა: ყვავილოვანი კომბოსტო, სტაფილო და ბადრიჯანი მჟავე ძმარსა და მწვანილში.'
        },
        kw: { en: 'torshi mixed pickles jar sour', fa: 'ترشی مخلوط شور', ru: 'торши ассорти солений', ka: 'თორში დამარინადებული' }
      },
      {
        id: 'vegetables-platter', img: 'Vegetables_Platter.webp', price: null, tags: ['vegan', 'gf'],
        name: { en: 'Vegetables Platter', fa: 'بشقاب سبزیجات', ru: 'Овощная тарелка', ka: 'ბოსტნეულის თეფში' },
        desc: {
          en: 'Fresh radish, cucumber, herbs and spring onion — the table opener, on the house.',
          fa: 'تربچه تازه، خیار، سبزی خوردن و پیاز تازه — پیش‌غذای همیشگی سفره.',
          ru: 'Свежая редиска, огурец, зелень и зелёный лук — открывает стол по традиции.',
          ka: 'ახალი ბოლოკი, კიტრი, მწვანილი და ახალი ხახვი — სუფრის ტრადიციული დასაწყისი.'
        },
        kw: { en: 'vegetables platter fresh herbs radish sabzi khordan', fa: 'سبزی خوردن تربچه', ru: 'овощи свежая тарелка редис', ka: 'ბოსტნეული ბოლოკი' }
      },
      {
        id: 'cheese-plate', img: 'Cheese_Plate.webp', price: null, tags: ['veg'],
        name: { en: 'Cheese Plate', fa: 'بشقاب پنیر', ru: 'Сырная тарелка', ka: 'ყველის თეფში' },
        desc: {
          en: 'Feta and local white cheese, with walnuts, herbs and warm bread.',
          fa: 'پنیر فتا و پنیر محلی سفید، با گردو، سبزی و نان گرم.',
          ru: 'Фета и местный белый сыр с грецким орехом, зеленью и тёплым хлебом.',
          ka: 'ფეტა და ადგილობრივი თეთრი ყველი, ნიგვზით, მწვანილითა და თბილი პურით.'
        },
        kw: { en: 'cheese feta local walnuts bread starter', fa: 'پنیر فتا گردو نان', ru: 'сыр фета грецкий орех хлеб', ka: 'ყველი ფეტა ნიგოზი' }
      },
      {
        id: 'iranian-bread', img: 'Iranian_Bread.webp', price: null, tags: ['vegan'],
        name: { en: 'Iranian Bread', fa: 'نان ایرانی', ru: 'Иранский хлеб', ka: 'ირანული პური' },
        desc: {
          en: 'Flatbread baked to order in the stone oven, sesame-crusted and still warm.',
          fa: 'نان تازه در تنور سنگی، با کنجد، هنوز داغ.',
          ru: 'Лепёшка, испечённая на заказ в каменной печи, с кунжутом, всё ещё тёплая.',
          ka: 'შეკვეთით გამომცხვარი ლავაში ქვის ღუმელში, სეზამით, ჯერ კიდევ თბილი.'
        },
        kw: { en: 'bread flatbread stone oven sesame warm', fa: 'نان تنوری کنجد', ru: 'хлеб лепёшка тандыр кунжут', ka: 'პური ლავაში' }
      },
      {
        id: 'french-fries', img: 'French_Fries.webp', price: null, tags: ['vegan'],
        name: { en: 'French Fries', fa: 'سیب‌زمینی سرخ‌کرده', ru: 'Картофель фри', ka: 'ფრი კარტოფილი' },
        desc: {
          en: 'Golden and crisp, salted and served straight from the fryer.',
          fa: 'طلایی و ترد، نمک‌زده و تازه سرخ شده.',
          ru: 'Золотистый и хрустящий, подсоленный и подаётся прямо со сковороды.',
          ka: 'ოქროსფერი და ხრაშუნა, დამარილებული, პირდაპირ საწვავიდან.'
        },
        kw: { en: 'fries potato crispy side', fa: 'سیب زمینی سرخ کرده', ru: 'картофель фри', ka: 'ფრი კარტოფილი' }
      },
      {
        id: 'mexican-potato', img: 'Mexican_Potato.webp', price: null, tags: ['veg', 'spicy'],
        name: { en: 'Mexican Potato', fa: 'سیب‌زمینی مکزیکی', ru: 'Мексиканский картофель', ka: 'მექსიკური კარტოფილი' },
        desc: {
          en: 'Spiced potato wedges baked with peppers, cheese and a smoky chili sauce.',
          fa: 'سیب‌زمینی ادویه‌دار پخته‌شده با فلفل، پنیر و سس چیلی دودی.',
          ru: 'Пряный картофель дольками, запечённый с перцем, сыром и дымным соусом чили.',
          ka: 'სანელებლიანი კარტოფილის ნაჭრები გამომცხვარი წიწაკით, ყველითა და შებოლილი ჩილის სოუსით.'
        },
        kw: { en: 'potato mexican spicy cheese chili wedges', fa: 'سیب زمینی مکزیکی تند', ru: 'картофель мексиканский острый сыр', ka: 'კარტოფილი მექსიკური' }
      },
      {
        id: 'yogurt-cucumber', img: 'Yogurt_and_Cucumber.webp', price: null, tags: ['veg', 'gf'],
        name: { en: 'Yoghurt & Cucumber (Māst-o Khiār)', fa: 'ماست و خیار', ru: 'Йогурт с огурцом (Маст-о Хияр)', ka: 'იოგურტი და კიტრი (მასთ-ო ხიარ)' },
        desc: {
          en: 'Thick yoghurt with diced cucumber, dried mint and a handful of walnuts.',
          fa: 'ماست غلیظ با خیار نگینی، نعنا خشک و کمی گردو.',
          ru: 'Густой йогурт с мелко нарезанным огурцом, сушёной мятой и грецким орехом.',
          ka: 'სქელი იოგურტი წვრილად დაჭრილი კიტრით, ხმელი პიტნითა და ნიგვზით.'
        },
        kw: { en: 'yoghurt cucumber mast khiar mint side', fa: 'ماست خیار نعنا', ru: 'йогурт огурец мята', ka: 'იოგურტი კიტრი' }
      },
      {
        id: 'yogurt-shallot', img: 'Yogurt_and_Shallot.webp', price: null, tags: ['veg', 'gf'],
        name: { en: 'Yoghurt & Shallot (Māst-o Moosir)', fa: 'ماست و موسیر', ru: 'Йогурт с горным луком (Маст-о Мусир)', ka: 'იოგურტი და მთის ხახვი (მასთ-ო მუსირ)' },
        desc: {
          en: 'Thick yoghurt folded with dried wild shallot — sharp, earthy, unmistakably Persian.',
          fa: 'ماست غلیظ با موسیر خشک — تند، خاکی و کاملاً ایرانی.',
          ru: 'Густой йогурт с сушёным диким луком мусир — резкий, землистый, узнаваемо персидский.',
          ka: 'სქელი იოგურტი ხმელი მთის ხახვით — ცხარე, მიწისფერი, ნამდვილად სპარსული.'
        },
        kw: { en: 'yoghurt shallot mast moosir wild garlic side', fa: 'ماست موسیر', ru: 'йогурт мусир лук', ka: 'იოგურტი მუსირი' }
      },
      {
        id: 'yogurt-spinach', img: 'Yogurt_and_Spinach.webp', price: null, tags: ['veg', 'gf'],
        name: { en: 'Yoghurt & Spinach (Māst-o Esfenāj)', fa: 'ماست و اسفناج', ru: 'Йогурт со шпинатом (Маст-о Эсфенадж)', ka: 'იოგურტი და ისპანახი (მასთ-ო ეშფენაჯ)' },
        desc: {
          en: 'Thick yoghurt folded with sautéed spinach, garlic and a touch of dried mint.',
          fa: 'ماست غلیظ با اسفناج تفت‌داده، سیر و کمی نعنا خشک.',
          ru: 'Густой йогурт с тушёным шпинатом, чесноком и щепоткой сушёной мяты.',
          ka: 'სქელი იოგურტი შემწვარი ისპანახით, ნიორითა და ხმელი პიტნით.'
        },
        kw: { en: 'yoghurt spinach mast esfenaj garlic side', fa: 'ماست اسفناج', ru: 'йогурт шпинат', ka: 'იოგურტი ისპანახი' }
      },
      {
        id: 'plain-yogurt', img: 'Plain_Yogurt.webp', price: null, tags: ['veg', 'gf'],
        name: { en: 'Plain Yoghurt', fa: 'ماست ساده', ru: 'Йогурт натуральный', ka: 'უბრალო იოგურტი' },
        desc: {
          en: 'Thick house-made yoghurt, unsweetened — the cooling counterpart to every spiced dish.',
          fa: 'ماست غلیظ خانگی، بدون شکر — همراه خنک‌کننده هر غذای ادویه‌دار.',
          ru: 'Густой домашний йогурт без сахара — прохладный спутник к любому пряному блюду.',
          ka: 'სქელი სახლში დამზადებული იოგურტი, გაუტკბობელი — ცხელი კერძის გამაგრილებელი წყვილი.'
        },
        kw: { en: 'yoghurt plain mast side cooling', fa: 'ماست ساده', ru: 'йогурт натуральный', ka: 'იოგურტი უბრალო' }
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
        id: 'kabab-soltani', img: 'Soltani_Kebab.webp', price: null, tags: ['chef'],
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
        id: 'koobideh', img: 'Koobideh_Kebab.webp', price: null, tags: [],
        name: { en: 'Kabāb-e Koobideh', fa: 'کباب کوبیده', ru: 'Кебаб Кубиде', ka: 'ქაბაბ ქუბიდე' },
        desc: {
          en: 'Lamb and beef twice minced with onion and sumac, pressed onto the flat skewer by hand.',
          fa: 'گوشت گوسفند و گوساله دوبار چرخ شده با پیاز و سماق، با دست روی سیخ پهن.',
          ru: 'Баранина и говядина дважды через мясорубку, с луком и сумахом, вручную на плоском шампуре.',
          ka: 'ორჯერ დაფქული ცხვრისა და საქონლის ხორცი ხახვითა და სუმახით, ხელით ბრტყელ შამფურზე.'
        },
        kw: { en: 'kebab kebap koobideh kubideh minced lamb beef skewer', fa: 'کباب کوبیده گوشت چرخ کرده', ru: 'кебаб кубиде фарш баранина шампур', ka: 'ქაბაბი ქუბიდე ფარში ცხვარი' }
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
        name: { en: 'Shashlik', fa: 'شیشلیک', ru: 'Шашлык', ka: 'შაშლიკი' },
        desc: {
          en: 'Lamb chops in the Shandiz manner, marinated for twenty-four hours and grilled exactly to the point.',
          fa: 'راسته گوسفند به سبک شاندیز، بیست و چهار ساعت مزه‌دار شده و کباب شده.',
          ru: 'Бараньи котлеты по-шандизски, сутки в маринаде и на угли — ровно до готовности.',
          ka: 'ცხვრის ნეკნები შანდიზულად, ოცდაოთხი საათი მარინადში და ზუსტად გამომწვარი.'
        },
        kw: { en: 'kebab kebap shishlik shashlik lamb chops grill', fa: 'شیشلیک راسته گوسفند', ru: 'шишлик шашлык баранина котлеты', ka: 'შაშლიკი ცხვარი ნეკნები' }
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
        id: 'chicken-kebab', img: 'Chicken_Kebab.webp', price: null, tags: ['gf'],
        name: { en: 'Chicken Kabāb', fa: 'کباب جوجه', ru: 'Куриный кебаб', ka: 'ქათმის ქაბაბი' },
        desc: {
          en: 'Boneless chicken cubes marinated in saffron and lime, grilled tender on the skewer.',
          fa: 'مکعب‌های مرغ بدون استخوان در زعفران و لیمو خوابانده، روی سیخ کبابی.',
          ru: 'Кубики курицы без костей в шафране и лайме, нежно приготовленные на шампуре.',
          ka: 'ძვლის გარეშე ქათმის კუბიკები ზაფრანასა და ლაიმში დამარინადებული, შამფურზე შემწვარი.'
        },
        kw: { en: 'chicken kebab kebap skewer saffron lime boneless', fa: 'کباب مرغ زعفران لیمو', ru: 'кебаб курица шафран лайм', ka: 'ქაბაბი ქათამი ზაფრანა' }
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
        kw: { en: 'kebab kebap joojeh jooje chicken saffron grill skewer bone', fa: 'جوجه کباب مرغ زعفران استخوان', ru: 'кебаб джудже курица шафран шампур', ka: 'ქაბაბი ჯუჯე ქათამი ზაფრანა' }
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
      },
      {
        id: 'vaziri-kebab', img: 'Vaziri_Kebab.webp', price: null, tags: ['chef'],
        name: { en: 'Kabāb-e Vaziri', fa: 'کباب وزیری', ru: 'Кебаб Вазири', ka: 'ქაბაბ ვაზირი' },
        desc: {
          en: 'Marinated lamb and chicken pieces threaded together, grilled with peppers and onion.',
          fa: 'تکه‌های گوشت گوسفند و مرغ مزه‌دار روی هم سیخ زده، با فلفل و پیاز کبابی.',
          ru: 'Кусочки маринованной баранины и курицы на одном шампуре, с перцем и луком.',
          ka: 'დამარინადებული ცხვრისა და ქათმის ნაჭრები ერთ შამფურზე, წიწაკითა და ხახვით.'
        },
        kw: { en: 'kebab kebap vaziri lamb chicken mixed skewer pepper', fa: 'کباب وزیری گوشت مرغ', ru: 'кебаб вазири баранина курица', ka: 'ქაბაბი ვაზირი' }
      },
      {
        id: 'loghmeh-kebab', img: 'Loghmeh_Kebab.webp', price: null, tags: [],
        name: { en: 'Loghmeh Kabāb', fa: 'کباب لقمه', ru: 'Кебаб Локме', ka: 'ქაბაბ ლოღმე' },
        desc: {
          en: 'Bite-sized minced meat parcels, seasoned and grilled quickly over hot coals.',
          fa: 'لقمه‌های گوشت چرخ‌کرده، ادویه‌زده و سریع روی زغال داغ کبابی.',
          ru: 'Небольшие порции фарша, приправленные и быстро прожаренные на горячих углях.',
          ka: 'პატარა ზომის ფარშის ლუკმები, შეზავებული და სწრაფად შემწვარი ცხელ ნახშირზე.'
        },
        kw: { en: 'kebab kebap loghmeh minced meat bites grill', fa: 'کباب لقمه گوشت چرخ کرده', ru: 'кебаб локме фарш', ka: 'ქაბაბი ლოღმე' }
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
      },
      {
        id: 'beans-meat-stew', img: 'Beans_and_Meat_Stew.webp', price: null, tags: [],
        name: { en: 'Beans & Meat Stew', fa: 'خورش لوبیا و گوشت', ru: 'Рагу из фасоли с мясом', ka: 'ლობიოსა და ხორცის საშუშხავი' },
        desc: {
          en: 'White beans and beef simmered slowly with tomato and garden herbs, served with rice.',
          fa: 'لوبیا سفید و گوشت گاو، آرام‌پز با گوجه و سبزی باغچه، با برنج.',
          ru: 'Белая фасоль и говядина, томлённые с томатом и садовой зеленью, подаются с рисом.',
          ka: 'თეთრი ლობიო და საქონლის ხორცი ნელა მოხარშული პომიდვრითა და ბაღის მწვანილით, ბრინჯთან ერთად.'
        },
        kw: { en: 'stew beans meat beef rice tomato', fa: 'خورش لوبیا گوشت', ru: 'рагу фасоль мясо', ka: 'საშუშხავი ლობიო ხორცი' }
      },
      {
        id: 'chicken-curry-stew', img: 'Chicken_Curry_Stew.webp', price: null, tags: ['spicy'],
        name: { en: 'Chicken Curry Stew with Rice', fa: 'خورش کاری مرغ با برنج', ru: 'Куриное карри с рисом', ka: 'ქათმის კარი საშუშხავი ბრინჯით' },
        desc: {
          en: 'Chicken simmered in a spiced curry sauce with coconut milk, served over steamed rice.',
          fa: 'مرغ پخته در سس کاری ادویه‌دار با شیر نارگیل، روی برنج دم‌کشیده.',
          ru: 'Курица, тушённая в пряном соусе карри с кокосовым молоком, подаётся с рисом.',
          ka: 'ქათამი მოხარშული სანელებლიან კარის სოუსში ქოქოსის რძით, ორთქლზე მოხარშულ ბრინჯზე.'
        },
        kw: { en: 'chicken curry stew rice coconut spicy', fa: 'خورش کاری مرغ نارگیل', ru: 'карри курица рис кокос', ka: 'კარი ქათამი ბრინჯი' }
      },
      {
        id: 'okra-stew', img: 'Okra_Stew.webp', price: null, tags: ['gf'],
        name: { en: 'Okra Stew with Rice', fa: 'خورش بامیه با برنج', ru: 'Рагу из бамии с рисом', ka: 'ბამიის საშუშხავი ბრინჯით' },
        desc: {
          en: 'Okra and lamb braised in a tangy tomato sauce, served over steamed rice.',
          fa: 'بامیه و گوشت گوسفند در سس گوجه ترش، روی برنج دم‌کشیده.',
          ru: 'Бамия и баранина, тушённые в кисловатом томатном соусе, подаются с рисом.',
          ka: 'ბამია და ცხვრის ხორცი მჟავე პომიდვრის სოუსში დაშუშული, ორთქლზე მოხარშულ ბრინჯზე.'
        },
        kw: { en: 'okra stew lamb tomato rice', fa: 'خورش بامیه گوشت', ru: 'бамия рагу баранина', ka: 'ბამია საშუშხავი' }
      }
    ]
  },

  {
    id: 'rice', num: '04',
    name: { en: 'Rice, Biryāni & Arabian Specialties', fa: 'پلو، بریانی و غذاهای عربی', ru: 'Рис, бирьяни и арабские блюда', ka: 'ბრინჯი, ბირიანი და არაბული სამზარეულო' },
    short: { en: 'Rice', fa: 'پلو', ru: 'Рис', ka: 'ბრინჯი' },
    script: { en: 'Polo', fa: 'پلو', ru: 'Поло', ka: 'ფოლო' },
    intro: {
      en: 'Rice is not a side here. It is washed, soaked, boiled briefly and then steamed — until every grain stands on its own. From here south, into the Gulf.',
      fa: 'برنج اینجا مخلفات نیست. شسته، خیسانده، آبکش و دم می‌شود — تا هر دانه جدا بایستد. از این‌جا رو به جنوب، تا خلیج.',
      ru: 'Рис здесь не гарнир. Его моют, замачивают, коротко варят и доводят на пару — пока каждое зерно не встанет отдельно. Отсюда — на юг, к Заливу.',
      ka: 'ბრინჯი აქ გარნირი არაა. ირეცხება, იზელება, მოკლედ იხარშება და შემდეგ ორთქლდება — სანამ თითოეული მარცვალი ცალკე არ დადგება. აქედან სამხრეთით, ყურემდე.'
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
        id: 'biryani-rice', img: 'Biryani_Rice.webp', price: null, tags: ['veg'],
        name: { en: 'Biryāni Rice', fa: 'برنج بریانی', ru: 'Рис бирьяни', ka: 'ბირიანის ბრინჯი' },
        desc: {
          en: 'Layered spiced rice on its own, saffron, cardamom, cinnamon and fried onion.',
          fa: 'برنج لایه‌لایه ادویه‌دار، به‌تنهایی، با زعفران، هل، دارچین و پیاز داغ.',
          ru: 'Слоёный пряный рис сам по себе — шафран, кардамон, корица и жареный лук.',
          ka: 'ფენოვანი სანელებლიანი ბრინჯი, ცალკე, ზაფრანით, კარდამონით, დარიჩინითა და შემწვარი ხახვით.'
        },
        kw: { en: 'rice biryani plain saffron cardamom side', fa: 'برنج بریانی زعفران', ru: 'рис бирьяни шафран', ka: 'ბრინჯი ბირიანი' }
      },
      {
        id: 'saffron-rice', img: 'Saffron_Rice.webp', price: null, tags: ['vegan', 'gf'],
        name: { en: 'Saffron Rice (Chelo)', fa: 'چلو زعفرانی', ru: 'Шафрановый рис (Чело)', ka: 'ზაფრანიანი ბრინჯი (ჩელო)' },
        desc: {
          en: 'Steamed long-grain rice, finished under a veil of saffron and butter, with a crisp tahdig crust.',
          fa: 'برنج دم‌کشیده دانه‌بلند، با زعفران و کره، با ته‌دیگ ترد.',
          ru: 'Рассыпчатый длиннозёрный рис под шафраном и маслом, с хрустящей корочкой тахдиг.',
          ka: 'ორთქლზე მოხარშული გრძელმარცვლოვანი ბრინჯი ზაფრანითა და კარაქით, ხრაშუნა თახდიგით.'
        },
        kw: { en: 'rice saffron chelo tahdig plain side', fa: 'چلو زعفران ته دیگ', ru: 'рис шафран чело тахдиг', ka: 'ბრინჯი ზაფრანა ჩელო' }
      },
      {
        id: 'zereshk-polo', img: 'Zereshk_Polo.webp', price: null, tags: ['vegan', 'gf'],
        name: { en: 'Zereshk Polo', fa: 'زرشک پلو', ru: 'Зерешк поло', ka: 'ზერეშქ ფოლო' },
        desc: {
          en: 'Saffron rice studded with tart barberries and slivered pistachio.',
          fa: 'چلو زعفرانی با زرشک ترش و پسته خلالی.',
          ru: 'Шафрановый рис с кислым барбарисом и рубленой фисташкой.',
          ka: 'ზაფრანიანი ბრინჯი მჟავე ბარბარისითა და დაჭრილი ფისტით.'
        },
        kw: { en: 'rice zereshk barberry pistachio saffron', fa: 'زرشک پلو زعفران پسته', ru: 'зерешк поло барбарис фисташка', ka: 'ზერეშქ ფოლო ბარბარისი' }
      },
      {
        id: 'zereshk-polo-chicken', img: 'Zereshk_Polo_Chicken.webp', price: null, tags: [],
        name: { en: 'Zereshk Polo with Chicken', fa: 'زرشک پلو با مرغ', ru: 'Зерешк поло с курицей', ka: 'ზერეშქ ფოლო ქათმით' },
        desc: {
          en: 'Barberry saffron rice with a joint of saffron-braised chicken.',
          fa: 'چلو زعفرانی زرشکی همراه با تکه مرغ خورشتی زعفرانی.',
          ru: 'Шафрановый рис с барбарисом и куском курицы, тушённой в шафране.',
          ka: 'ბარბარისიანი ზაფრანის ბრინჯი ზაფრანით დაშუშული ქათმის ნაჭერთან ერთად.'
        },
        kw: { en: 'rice zereshk barberry chicken saffron', fa: 'زرشک پلو مرغ', ru: 'зерешк поло курица', ka: 'ზერეშქ ფოლო ქათამი' }
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
        id: 'chicken-kabsa', img: 'Chicken_Kabsa.webp', price: null, tags: ['spicy'],
        name: { en: 'Chicken Kabsa', fa: 'کبسه مرغ', ru: 'Курица кабса', ka: 'ქათმის ქაბსა' },
        desc: {
          en: 'The Gulf classic: chicken over spiced rice with tomato, dried lime and toasted nuts.',
          fa: 'کلاسیک خلیج: مرغ روی برنج ادویه‌دار با گوجه، لیمو عمانی و آجیل برشته.',
          ru: 'Классика Залива: курица на пряном рисе с томатом, сушёным лаймом и обжаренными орехами.',
          ka: 'ყურის კლასიკა: ქათამი სანელებლიან ბრინჯზე პომიდვრით, ხმელი ლაიმითა და შემწვარი კაკლით.'
        },
        kw: { en: 'kabsa chicken rice gulf spiced arabic', fa: 'کبسه مرغ برنج عربی', ru: 'кабса курица рис', ka: 'ქაბსა ქათამი' }
      },
      {
        id: 'lamb-kabsa', img: 'Lamb_Kabsa.webp', price: null, tags: ['spicy', 'chef'],
        name: { en: 'Lamb Kabsa', fa: 'کبسه گوشت', ru: 'Баранина кабса', ka: 'ცხვრის ქაბსა' },
        desc: {
          en: 'Slow-braised lamb over baharat-spiced rice, with tomato, dried lime and roasted almonds.',
          fa: 'گوشت گوسفند آرام‌پز روی برنج بهاراتی، با گوجه، لیمو عمانی و بادام برشته.',
          ru: 'Медленно тушённая баранина на рисе с бахаратом, томатом, лаймом и жареным миндалём.',
          ka: 'ნელა დაშუშული ცხვრის ხორცი ბაჰარათიან ბრინჯზე, პომიდვრით, ხმელი ლაიმითა და შემწვარი ნუშით.'
        },
        kw: { en: 'kabsa lamb rice gulf spiced arabic baharat', fa: 'کبسه گوشت گوسفند بهارات', ru: 'кабса баранина рис', ka: 'ქაბსა ცხვარი' }
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
      },
      {
        id: 'mandi-rice', img: 'Mandi_Rice.webp', price: null, tags: ['vegan'],
        name: { en: 'Mandi Rice', fa: 'برنج مندی', ru: 'Рис манди', ka: 'მანდის ბრინჯი' },
        desc: {
          en: 'Smoked spiced rice, cooked in the traditional Yemeni pit style, served plain or as a base.',
          fa: 'برنج دودی ادویه‌دار، به سبک سنتی یمنی، ساده یا به‌عنوان بستر.',
          ru: 'Копчёный пряный рис, приготовленный в традиционном йеменском стиле — отдельно или как основа.',
          ka: 'შებოლილი სანელებლიანი ბრინჯი, ტრადიციული იემენური სტილით, ცალკე ან საფუძვლად.'
        },
        kw: { en: 'mandi rice smoked yemeni spiced', fa: 'برنج مندی دودی', ru: 'манди рис копчёный', ka: 'მანდი ბრინჯი' }
      },
      {
        id: 'mutton-mandi', img: 'Mutton_Mandi.webp', price: null, tags: ['chef'],
        name: { en: 'Mutton Mandi', fa: 'مندی گوشت', ru: 'Манди из баранины', ka: 'ცხვრის მანდი' },
        desc: {
          en: 'Mutton slow-smoked in an underground pit over smoked mandi rice, the signature of the Yemeni table.',
          fa: 'گوشت گوسفند دودی آرام‌پز روی برنج مندی دودی، نماد سفره یمنی.',
          ru: 'Баранина, медленно копчённая в подземной яме, поверх дымного риса манди — визитная карточка йеменской кухни.',
          ka: 'ცხვარი ნელა შებოლილი მიწისქვეშა ორმოში, შებოლილ მანდის ბრინჯზე — იემენური სუფრის ნიშანი.'
        },
        kw: { en: 'mandi mutton lamb smoked pit rice yemeni', fa: 'مندی گوشت گوسفند دودی', ru: 'манди баранина копчёная', ka: 'მანდი ცხვარი' }
      },
      {
        id: 'mansaf', img: 'Mansaf.webp', price: null, tags: ['chef'],
        name: { en: 'Mansaf', fa: 'منسف', ru: 'Мансаф', ka: 'მანსაფი' },
        desc: {
          en: 'Tender lamb in a tangy fermented dried-yoghurt (jameed) sauce, over saffron rice and flatbread.',
          fa: 'گوشت گوسفند نرم در سس ماست خشک تخمیرشده (جمید)، روی چلو زعفرانی و نان.',
          ru: 'Нежная баранина в остром соусе из ферментированного сухого йогурта (джамид), на шафрановом рисе с лепёшкой.',
          ka: 'რბილი ცხვრის ხორცი მჟავე დადუღებული მშრალი იოგურტის (ჯამიდ) სოუსში, ზაფრანიან ბრინჯზე და ლავაშზე.'
        },
        kw: { en: 'mansaf lamb jameed yoghurt jordanian rice', fa: 'منسف گوشت جمید', ru: 'мансаф баранина йогурт', ka: 'მანსაფი ცხვარი' }
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
        id: 'grilled-trout', img: 'Grilled_Trout.webp', price: null, tags: ['gf'],
        name: { en: 'Grilled Trout', fa: 'ماهی قزل‌آلا کبابی', ru: 'Форель на гриле', ka: 'კალმახი გრილზე' },
        desc: {
          en: 'A whole river trout, grilled over charcoal with herbs, garlic and a squeeze of lemon.',
          fa: 'ماهی قزل‌آلای کامل رودخانه، روی زغال با سبزی، سیر و آبلیمو.',
          ru: 'Целая речная форель, приготовленная на углях с зеленью, чесноком и долькой лимона.',
          ka: 'მთლიანი მდინარის კალმახი, ნახშირზე შემწვარი მწვანილით, ნიორითა და ლიმონის წვენით.'
        },
        kw: { en: 'fish trout river grill lemon herbs', fa: 'ماهی قزل آلا رودخانه', ru: 'форель речная гриль', ka: 'თევზი კალმახი' }
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
    id: 'georgian', num: '06',
    name: { en: 'Georgian Specialties', fa: 'غذاهای گرجی', ru: 'Грузинская кухня', ka: 'ქართული სამზარეულო' },
    short: { en: 'Georgian', fa: 'گرجی', ru: 'Грузинское', ka: 'ქართული' },
    script: { en: 'Kartuli', fa: 'کارتولی', ru: 'Картули', ka: 'ქართული' },
    intro: {
      en: 'Tbilisi is home now too. A short detour into the Georgian kitchen next door — cheese bread, dumplings and stews from the mountains.',
      fa: 'تفلیس هم اکنون خانه است. گریزی کوتاه به آشپزخانه گرجی همسایه — نان پنیری، خمیرچه‌ها و خورش‌های کوهستان.',
      ru: 'Тбилиси теперь тоже дом. Небольшой заход в соседнюю грузинскую кухню — хачапури, хинкали и горные рагу.',
      ka: 'თბილისიც სახლია ახლა. მოკლე გადახვევა მეზობელ ქართულ სამზარეულოში — ხაჭაპური, ხინკალი და მთის საშუშხავები.'
    },
    items: [
      {
        id: 'khachapuri', img: 'Khachapuri.webp', price: null, tags: ['veg', 'chef'],
        name: { en: 'Khachapuri', fa: 'خاچاپوری', ru: 'Хачапури', ka: 'ხაჭაპური' },
        desc: {
          en: 'Boat-shaped bread filled with melted cheese, topped with a runny egg and a knob of butter.',
          fa: 'نان قایقی‌شکل پر از پنیر ذوب‌شده، با تخم‌مرغ نیم‌پز و کمی کره روی آن.',
          ru: 'Хлеб в форме лодочки с расплавленным сыром, яйцом всмятку сверху и кусочком масла.',
          ka: 'ნავის ფორმის პური დნობილი ყველით სავსე, ზემოთ ცოცხალი კვერცხითა და კარაქით.'
        },
        kw: { en: 'khachapuri cheese bread egg georgian', fa: 'خاچاپوری پنیر تخم مرغ', ru: 'хачапури сыр хлеб яйцо', ka: 'ხაჭაპური ყველი კვერცხი' }
      },
      {
        id: 'khinkali', img: 'Khinkali.webp', price: null, tags: ['chef'],
        name: { en: 'Khinkali (per piece)', fa: 'خینکالی (هر عدد)', ru: 'Хинкали (за штуку)', ka: 'ხინკალი (ცალი)' },
        desc: {
          en: 'Hand-pleated dumplings filled with spiced minced meat and broth, twisted at the top and eaten by hand.',
          fa: 'خمیرچه‌های چین‌دار پر از گوشت چرخ‌کرده ادویه‌دار و آب گوشت، از بالا پیچ‌خورده و با دست خورده می‌شود.',
          ru: 'Пельмени ручной лепки с пряным мясным фаршем и бульоном внутри, скрученные наверху, едят руками.',
          ka: 'ხელით ნაკეცი ხინკალი სანელებლიანი ფარშითა და ბულიონით შიგნით, თავზე დახვეული, ხელით ჭამენ.'
        },
        kw: { en: 'khinkali dumplings meat broth georgian handmade', fa: 'خینکالی خمیرچه گوشت', ru: 'хинкали пельмени бульон', ka: 'ხინკალი ხორცი' }
      },
      {
        id: 'chkmeruli', img: 'Chkmeruli.webp', price: null, tags: ['gf'],
        name: { en: 'Chkmeruli', fa: 'چکمرولی', ru: 'Чкмерули', ka: 'ჩქმერული' },
        desc: {
          en: 'Flattened, pan-fried chicken drowned in a rich garlic and milk sauce.',
          fa: 'مرغ پهن‌شده و تفت‌داده، غرق در سس غلیظ سیر و شیر.',
          ru: 'Расплющенная жареная курица, утопленная в густом чесночно-молочном соусе.',
          ka: 'გაბრტყელებული, ტაფაზე შემწვარი ქათამი, ნიორისა და რძის მკვრივ სოუსში ჩაძირული.'
        },
        kw: { en: 'chkmeruli chicken garlic milk sauce georgian', fa: 'چکمرولی مرغ سیر شیر', ru: 'чкмерули курица чеснок молоко', ka: 'ჩქმერული ქათამი ნიორი' }
      },
      {
        id: 'chashushuli', img: 'Chashushuli.webp', price: null, tags: ['spicy', 'gf'],
        name: { en: 'Chashushuli', fa: 'چاشوشولی', ru: 'Чашушули', ka: 'ჩაშუშული' },
        desc: {
          en: 'Beef stewed in a spicy tomato and herb sauce, sharp with garlic and coriander.',
          fa: 'گوشت گاو در سس تند گوجه و سبزی، با سیر و گشنیز تند.',
          ru: 'Говядина, тушённая в остром томатно-травяном соусе с чесноком и кинзой.',
          ka: 'საქონლის ხორცი ცხარე პომიდვრისა და მწვანილის სოუსში დაშუშული, ნიორითა და ქინძით.'
        },
        kw: { en: 'chashushuli beef tomato spicy stew georgian', fa: 'چاشوشولی گوشت تند', ru: 'чашушули говядина острое', ka: 'ჩაშუშული საქონელი' }
      },
      {
        id: 'ojakhuri-meat', img: 'Ojakhuri_Meat.webp', price: null, tags: ['chef'],
        name: { en: 'Ojakhuri with Meat', fa: 'اوجاخوری با گوشت', ru: 'Оджахури с мясом', ka: 'ოჯახური ხორცით' },
        desc: {
          en: 'Fried potato and pork chunks in a clay pan, with onion, garlic and fresh herbs.',
          fa: 'سیب‌زمینی سرخ‌شده و تکه‌های گوشت خوک در تابه سفالی، با پیاز، سیر و سبزی تازه.',
          ru: 'Жареный картофель и кусочки мяса в глиняной сковороде, с луком, чесноком и свежей зеленью.',
          ka: 'შემწვარი კარტოფილი და ხორცის ნაჭრები თიხის ტაფაში, ხახვით, ნიორითა და ახალი მწვანილით.'
        },
        kw: { en: 'ojakhuri potato meat pork skillet georgian', fa: 'اوجاخوری سیب زمینی گوشت', ru: 'оджахури картофель мясо', ka: 'ოჯახური ხორცი' }
      },
      {
        id: 'ojakhuri-mushroom', img: 'Ojakhuri_Mushroom.webp', price: null, tags: ['veg'],
        name: { en: 'Ojakhuri with Mushroom', fa: 'اوجاخوری با قارچ', ru: 'Оджахури с грибами', ka: 'ოჯახური სოკოთი' },
        desc: {
          en: 'The vegetarian version: fried potato and mushroom in a clay pan, with onion and herbs.',
          fa: 'نسخه گیاهی: سیب‌زمینی سرخ‌شده و قارچ در تابه سفالی، با پیاز و سبزی.',
          ru: 'Вегетарианская версия: жареный картофель и грибы в глиняной сковороде, с луком и зеленью.',
          ka: 'ვეგეტარიანული ვერსია: შემწვარი კარტოფილი და სოკო თიხის ტაფაში, ხახვითა და მწვანილით.'
        },
        kw: { en: 'ojakhuri potato mushroom skillet vegetarian georgian', fa: 'اوجاخوری سیب زمینی قارچ', ru: 'оджахури картофель грибы', ka: 'ოჯახური სოკო' }
      },
      {
        id: 'lobio', img: 'Lobio.webp', price: null, tags: ['vegan', 'gf'],
        name: { en: 'Lobio', fa: 'لوبیو', ru: 'Лобио', ka: 'ლობიო' },
        desc: {
          en: 'Red beans simmered with walnut, coriander and dried marigold, served in a clay pot.',
          fa: 'لوبیا قرمز آرام‌پز با گردو، گشنیز و گل‌جعفری خشک، در ظرف سفالی.',
          ru: 'Красная фасоль, томлённая с грецким орехом, кинзой и сушёным уцхо-сунели, в глиняном горшке.',
          ka: 'წითელი ლობიო ნიგვზით, ქინძითა და ხმელი ხმელსუნელით ნელა მოხარშული, თიხის ქოთანში.'
        },
        kw: { en: 'lobio beans walnut clay pot georgian vegan', fa: 'لوبیو لوبیا گردو', ru: 'лобио фасоль орех', ka: 'ლობიო ნიგოზი' }
      },
      {
        id: 'ostri', img: 'Ostri.webp', price: null, tags: ['spicy'],
        name: { en: 'Ostri', fa: 'استری', ru: 'Остри', ka: 'ოსტრი' },
        desc: {
          en: 'Veal simmered in a spicy tomato sauce with garlic and green chili — a fiery Tbilisi favourite.',
          fa: 'گوشت گوساله در سس تند گوجه با سیر و فلفل سبز — محبوب پرحرارت تفلیس.',
          ru: 'Телятина, тушённая в остром томатном соусе с чесноком и зелёным перцем — огненный фаворит Тбилиси.',
          ka: 'ხბოს ხორცი ცხარე პომიდვრის სოუსში ნიორითა და მწვანე წიწაკით — თბილისის ცეცხლოვანი ფავორიტი.'
        },
        kw: { en: 'ostri veal spicy tomato stew georgian', fa: 'استری گوساله تند', ru: 'остри телятина острое', ka: 'ოსტრი ხბო' }
      },
      {
        id: 'kharcho', img: 'Kharcho_Soup.webp', price: null, tags: ['spicy'],
        name: { en: 'Kharcho Soup', fa: 'سوپ خارچو', ru: 'Суп харчо', ka: 'ხარჩოს სუპი' },
        desc: {
          en: 'A thick beef and rice soup, soured with tklapi plum leather and warmed with spices.',
          fa: 'سوپ غلیظ گوشت گاو و برنج، با لواشک آلو ترش و ادویه‌های گرم.',
          ru: 'Густой суп из говядины и риса, с кислинкой ткемали и тёплыми специями.',
          ka: 'სქელი საქონლის ხორცისა და ბრინჯის სუპი, ტყლაპით მომჟავებული და სანელებლებით გახურებული.'
        },
        kw: { en: 'kharcho soup beef rice sour plum georgian', fa: 'خارچو سوپ گوشت گاو', ru: 'харчо суп говядина рис', ka: 'ხარჩო სუპი' }
      },
      {
        id: 'georgian-salad', img: 'Georgian_Salad.webp', price: null, tags: ['veg', 'gf'],
        name: { en: 'Georgian Salad with Walnut', fa: 'سالاد گرجی با گردو', ru: 'Грузинский салат с орехом', ka: 'ქართული სალათი ნიგვზით' },
        desc: {
          en: 'Tomato, cucumber and herbs, dressed with a walnut and garlic sauce.',
          fa: 'گوجه، خیار و سبزی، با سس گردو و سیر.',
          ru: 'Помидор, огурец и зелень, заправленные ореховым соусом с чесноком.',
          ka: 'პომიდორი, კიტრი და მწვანილი, ნიგვზისა და ნიორის სოუსით.'
        },
        kw: { en: 'georgian salad walnut tomato cucumber sauce', fa: 'سالاد گرجی گردو', ru: 'салат грузинский орех', ka: 'სალათი ქართული ნიგოზი' }
      },
      {
        id: 'lula-kebab-georgian', img: 'Lula_Kebab_Georgian.webp', price: null, tags: [],
        name: { en: 'Lula Kebab, Georgian Style', fa: 'کباب لولا به سبک گرجی', ru: 'Люля-кебаб по-грузински', ka: 'ლულა ქაბაბი ქართულად' },
        desc: {
          en: 'Minced beef and lamb skewers seasoned with Georgian herbs and grilled over charcoal.',
          fa: 'سیخ‌های گوشت گاو و گوسفند چرخ‌کرده با سبزی گرجی، روی زغال کبابی.',
          ru: 'Шампуры из фарша говядины и баранины с грузинскими травами, приготовленные на углях.',
          ka: 'დაფქული საქონლისა და ცხვრის ხორცის შამფურები ქართული მწვანილით, ნახშირზე შემწვარი.'
        },
        kw: { en: 'lula kebab georgian minced grill skewer', fa: 'کباب لولا گرجی', ru: 'люля кебаб грузинский', ka: 'ლულა ქაბაბი' }
      }
    ]
  },

  {
    id: 'sweets', num: '07',
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
