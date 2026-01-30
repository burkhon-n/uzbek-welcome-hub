import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'ru' | 'uz';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.about': 'О продукте',
    'nav.benefits': 'Преимущества',
    'nav.buy': 'Где купить',
    'nav.faq': 'ЧЗВ',
    
    // Hero Section
    'hero.badge': 'Инновационная микрокапсулированная технология',
    'hero.title': 'Биологическая активная добавка',
    'hero.brand': 'ФЕРФЕР',
    'hero.subtitle': 'Быстродействующее железо с апельсиновым вкусом. Инновационная формула для эффективного восполнения дефицита железа.',
    'hero.cta': 'Купить сейчас',
    'hero.instructions': 'Инструкция',
    'hero.instructions.title': 'Инструкция по применению',
    'hero.instructions.composition': 'Состав',
    'hero.instructions.compositionText': 'Пирофосфат железа (микронизированный, липофильный), сахароза, мальтодекстрин, лимонная кислота, апельсиновый ароматизатор.',
    'hero.instructions.dosage': 'Способ применения и дозы',
    'hero.instructions.dosageText': 'Взрослым и детям старше 14 лет по 1-2 саше в день. Содержимое саше растворить в стакане воды (200 мл) и принять внутрь. Можно принимать независимо от приема пищи.',
    'hero.instructions.indication': 'Показания к применению',
    'hero.instructions.indicationText': 'В качестве биологически активной добавки к пище — источника железа. Рекомендуется при дефиците железа, анемии, повышенной утомляемости, беременности и лактации (после консультации врача).',
    'hero.instructions.contraindications': 'Противопоказания',
    'hero.instructions.contraindicationsText': 'Индивидуальная непереносимость компонентов продукта. Перед применением рекомендуется проконсультироваться с врачом.',
    'hero.instructions.storage': 'Условия хранения',
    'hero.instructions.storageText': 'Хранить в сухом, защищенном от света месте при температуре не выше 25°C. Хранить в недоступном для детей месте.',
    'hero.instructions.shelfLife': 'Срок годности',
    'hero.instructions.shelfLifeText': '24 месяца с даты производства.',
    'hero.instructions.package': 'Форма выпуска',
    'hero.instructions.packageText': '30 саше по 1,5 г в упаковке.',
    
    // About Section
    'about.title': 'О продукте',
    'about.description': 'Ферфер® — это биологически активная пищевая добавка, содержащая микрокапсулированный железо липосомной форме. Инновационная технология обеспечивает максимальное усвоение железа без побочных эффектов.',
    
    'about.feature1.title': 'Высокая эффективность',
    'about.feature1.desc': 'При одинаковой дозировке Ферфер® при однo раннем приёме даёт лучший эффект.',
    
    'about.feature2.title': 'Без побочных эффектов',
    'about.feature2.desc': 'Почти полное отсутствие побочных эффектов благодаря липосомной технологии.',
    
    'about.feature3.title': 'Удобное применение',
    'about.feature3.desc': 'Приятный апельсиновый вкус. Принимать 1-2 саше в день.',
    
    'about.feature4.title': 'Быстрое усвоение',
    'about.feature4.desc': 'Быстрое растворение и усвоение благодаря микрокапсулированию.',
    
    'about.feature5.title': 'Высокая биодоступность',
    'about.feature5.desc': 'Высокая биодоступность по сравнению с обычными препаратами железа.',
    
    'about.feature6.title': 'Приятный вкус',
    'about.feature6.desc': 'Апельсиновый вкус делает прием добавки приятным.',
    
    // Benefits Section
    'benefits.title': 'Преимущества липосомной формы',
    'benefits.subtitle': 'Ферфер® микронизированный липофильный пирофосфат железа',
    
    'benefits.item1': 'Защищает железо от окисления в желудке',
    'benefits.item2': 'Не взаимодействует с пищей',
    'benefits.item3': 'Высокая биодоступность',
    'benefits.item4': 'Без металлического привкуса',
    
    // Iron Deficiency Section
    'deficiency.title': 'Дефицит железа',
    'deficiency.subtitle': 'Латентный дефицит железа (ЛДЖ) — частичное использование сывороточных запасов железа, опасные для развития. При отсутствии лечения может привести к анемии.',
    'deficiency.point1': 'Запасов железа у менструирующих женщин хватает только на 3,5 раза больше, чем мужчин.',
    'deficiency.point2': 'Чем дольше у женщины ретроградирующие месячные, тем дольше их Дефицит Железа (ДЖ), тем сложнее его компенсировать.',
    'deficiency.point3': 'Распределение железа, которое распределяется по организму, соответствующем происхождении восполнения запасов железа в организме.',
    
    // Partners Section
    'partners.title': 'Где купить?',
    'partners.button': 'В аптеку',
    'partners.seeAll': 'Смотреть все',
    
    // FAQ Section
    'faq.title': 'Часто задаваемые вопросы',
    'faq.subtitle': 'Ответы на популярные вопросы о Ферфер®',
    
    'faq.q1': 'Что такое Ферфер®?',
    'faq.a1': 'Ферфер® — это биологически активная добавка, содержащая микрокапсулированный железо в липосомной форме. Препарат разработан для эффективного восполнения дефицита железа без побочных эффектов.',
    
    'faq.q2': 'Как принимать Ферфер®?',
    'faq.a2': 'Рекомендуется принимать 1-2 саше в день, растворив содержимое в стакане воды. Препарат можно принимать независимо от приема пищи благодаря липосомной технологии.',
    
    'faq.q3': 'Есть ли побочные эффекты?',
    'faq.a3': 'Благодаря инновационной липосомной технологии, Ферфер® практически не вызывает побочных эффектов, характерных для обычных препаратов железа (тошнота, запоры, металлический привкус).',
    
    'faq.q4': 'Можно ли принимать беременным?',
    'faq.a4': 'Беременным и кормящим женщинам перед применением следует проконсультироваться со специалистом. Основной причиной анемии у беременных является дефицит железа.',
    
    'faq.q5': 'Где купить Ферфер®?',
    'faq.a5': 'Ферфер® можно приобрести в аптечных сетях: GO Аптека, Best Pharm, Top-Pharm, Nika Pharm и других аптеках Узбекистана.',
    
    'faq.q6': 'Сколько саше в упаковке?',
    'faq.a6': 'В одной упаковке содержится 30 саше с апельсиновым вкусом.',
    
    // Certificates Section
    'certificates.title': 'Сертификаты качества',
    'certificates.subtitle': 'Ферфер® соответствует международным стандартам качества и безопасности',
    'certificates.cert1.title': 'Сертификат соответствия',
    'certificates.cert1.desc': 'Официальный сертификат соответствия требованиям технических регламентов.',
    'certificates.cert2.title': 'Регистрационное удостоверение',
    'certificates.cert2.desc': 'Государственная регистрация БАД в Республике Узбекистан.',
    'certificates.cert3.title': 'Сертификат GMP',
    'certificates.cert3.desc': 'Производство соответствует международным стандартам надлежащей производственной практики.',
    'certificates.view': 'Смотреть PDF',

    // Footer
    'footer.description': 'Ферфер® — инновационная биологически активная добавка для эффективного восполнения дефицита железа.',
    'footer.quickLinks': 'Быстрые ссылки',
    'footer.contact': 'Контакты',
    'footer.address': 'г. Ташкент, Узбекистан',
    'footer.rights': '© 2025 Ферфер®. Все права защищены.',
    'footer.warning': 'БАД не является лекарственным средством.',
    'footer.pharmevo': 'PharmEvo — Our dream, a healthier society',
    'footer.privacy': 'Политика конфиденциальности',
    'footer.terms': 'Условия использования',
  },
  uz: {
    // Navigation
    'nav.home': 'Bosh sahifa',
    'nav.about': 'Mahsulot haqida',
    'nav.benefits': 'Afzalliklar',
    'nav.buy': 'Qayerdan sotib olish',
    'nav.faq': 'FAQ',
    
    // Hero Section
    'hero.badge': 'Innovatsion mikrokapsulalangan texnologiya',
    'hero.title': 'Biologik faol qo\'shimcha',
    'hero.brand': 'FERFER',
    'hero.subtitle': 'Apelsin ta\'mli tez ta\'sir qiluvchi temir. Temir tanqisligini samarali to\'ldirish uchun innovatsion formula.',
    'hero.cta': 'Hozir sotib olish',
    'hero.instructions': 'Ko\'rsatma',
    'hero.instructions.title': 'Qo\'llash bo\'yicha ko\'rsatma',
    'hero.instructions.composition': 'Tarkibi',
    'hero.instructions.compositionText': 'Temir pirofosfati (mikronizatsiyalangan, lipofilik), saxaroza, maltodekstrin, limon kislotasi, apelsin aromati.',
    'hero.instructions.dosage': 'Qo\'llash usuli va dozasi',
    'hero.instructions.dosageText': 'Kattalar va 14 yoshdan katta bolalarga kuniga 1-2 paket. Paket tarkibini bir stakan suvda (200 ml) eritib, ichiladi. Ovqatlanishdan qat\'iy nazar qabul qilish mumkin.',
    'hero.instructions.indication': 'Qo\'llash ko\'rsatmalari',
    'hero.instructions.indicationText': 'Temir manbai sifatida biologik faol oziq-ovqat qo\'shimchasi. Temir tanqisligi, anemiya, charchoq, homiladorlik va emizish davrida (shifokor bilan maslahatlashgandan keyin) tavsiya etiladi.',
    'hero.instructions.contraindications': 'Qarshi ko\'rsatmalar',
    'hero.instructions.contraindicationsText': 'Mahsulot tarkibiy qismlariga individual murosasizlik. Qo\'llashdan oldin shifokor bilan maslahatlashish tavsiya etiladi.',
    'hero.instructions.storage': 'Saqlash shartlari',
    'hero.instructions.storageText': 'Quruq, yorug\'likdan himoyalangan joyda 25°C dan yuqori bo\'lmagan haroratda saqlang. Bolalar qo\'li yetmaydigan joyda saqlang.',
    'hero.instructions.shelfLife': 'Yaroqlilik muddati',
    'hero.instructions.shelfLifeText': 'Ishlab chiqarilgan sanadan boshlab 24 oy.',
    'hero.instructions.package': 'Chiqarish shakli',
    'hero.instructions.packageText': 'Qadoqda 1,5 g dan 30 ta paket.',
    
    // About Section
    'about.title': 'Mahsulot haqida',
    'about.description': 'Ferfer® — bu lipozomal shaklda mikrokapsulalangan temirni o\'z ichiga olgan biologik faol oziq-ovqat qo\'shimchasi. Innovatsion texnologiya nojo\'ya ta\'sirlarsiz temirning maksimal o\'zlashtirilishini ta\'minlaydi.',
    
    'about.feature1.title': 'Yuqori samaradorlik',
    'about.feature1.desc': 'Bir xil dozada Ferfer® bir martalik qabul qilishda yaxshiroq natija beradi.',
    
    'about.feature2.title': 'Nojo\'ya ta\'sirlarsiz',
    'about.feature2.desc': 'Lipozomal texnologiya tufayli nojo\'ya ta\'sirlar deyarli yo\'q.',
    
    'about.feature3.title': 'Qulay qo\'llash',
    'about.feature3.desc': 'Yoqimli apelsin ta\'mi. Kuniga 1-2 paket qabul qiling.',
    
    'about.feature4.title': 'Tez o\'zlashtirilishi',
    'about.feature4.desc': 'Mikrokapsulalash tufayli tez erish va o\'zlashtirilish.',
    
    'about.feature5.title': 'Yuqori bionavbatlilik',
    'about.feature5.desc': 'Oddiy temir preparatlariga nisbatan yuqori bionavbatlilik.',
    
    'about.feature6.title': 'Yoqimli ta\'m',
    'about.feature6.desc': 'Apelsin ta\'mi qo\'shimchani qabul qilishni yoqimli qiladi.',
    
    // Benefits Section
    'benefits.title': 'Lipozomal shaklning afzalliklari',
    'benefits.subtitle': 'Ferfer® mikronizatsiyalangan lipofilik temir pirofosfati',
    
    'benefits.item1': 'Temirni oshqozonda oksidlanishdan himoya qiladi',
    'benefits.item2': 'Oziq-ovqat bilan ta\'sir qilmaydi',
    'benefits.item3': 'Yuqori bionavbatlilik',
    'benefits.item4': 'Metall ta\'misiz',
    
    // Iron Deficiency Section
    'deficiency.title': 'Temir tanqisligi',
    'deficiency.subtitle': 'Latent temir tanqisligi (LTT) — serum temir zaxiralarining qisman ishlatilishi, rivojlanish uchun xavfli. Davolanmasdan anemiyaga olib kelishi mumkin.',
    'deficiency.point1': 'Menstruatsiya bo\'lgan ayollarda temir zaxiralari erkaklarga qaraganda 3,5 baravar ko\'proq sarflanadi.',
    'deficiency.point2': 'Ayolda retrograd oylik qancha uzoq davom etsa, Temir Tanqisligi (TT) shunchalik kuchli, kompensatsiya qilish qiyinroq.',
    'deficiency.point3': 'Organizmda taqsimlanadigan temir organizmdagi temir zaxiralarini to\'ldirishga mos keladi.',
    
    // Partners Section
    'partners.title': 'Qayerdan sotib olish?',
    'partners.button': 'Dorixonaga',
    'partners.seeAll': 'Hammasini ko\'rish',
    
    // FAQ Section
    'faq.title': 'Ko\'p beriladigan savollar',
    'faq.subtitle': 'Ferfer® haqida mashhur savollarga javoblar',
    
    'faq.q1': 'Ferfer® nima?',
    'faq.a1': 'Ferfer® — bu lipozomal shaklda mikrokapsulalangan temirni o\'z ichiga olgan biologik faol qo\'shimcha. Preparat nojo\'ya ta\'sirlarsiz temir tanqisligini samarali to\'ldirish uchun ishlab chiqilgan.',
    
    'faq.q2': 'Ferfer® ni qanday qabul qilish kerak?',
    'faq.a2': 'Kuniga 1-2 paket qabul qilish tavsiya etiladi, tarkibini bir stakan suvda eritib. Lipozomal texnologiya tufayli preparat ovqatlanishdan qat\'iy nazar qabul qilinishi mumkin.',
    
    'faq.q3': 'Nojo\'ya ta\'sirlar bormi?',
    'faq.a3': 'Innovatsion lipozomal texnologiya tufayli Ferfer® oddiy temir preparatlariga xos nojo\'ya ta\'sirlarni (ko\'ngil aynishi, qabziyat, metall ta\'mi) deyarli keltirib chiqarmaydi.',
    
    'faq.q4': 'Homilador ayollar qabul qilishi mumkinmi?',
    'faq.a4': 'Homilador va emizikli ayollar qo\'llashdan oldin mutaxassis bilan maslahatlashishlari kerak. Homilador ayollardagi anemiyaning asosiy sababi temir tanqisligi hisoblanadi.',
    
    'faq.q5': 'Ferfer® ni qayerdan sotib olish mumkin?',
    'faq.a5': 'Ferfer® ni dorixona tarmoqlaridan sotib olish mumkin: GO Apteka, Best Pharm, Top-Pharm, Nika Pharm va O\'zbekistonning boshqa dorixonalari.',
    
    'faq.q6': 'Qadoqda nechta paket bor?',
    'faq.a6': 'Bir qadoqda apelsin ta\'mli 30 ta paket mavjud.',
    
    // Certificates Section
    'certificates.title': 'Sifat sertifikatlari',
    'certificates.subtitle': 'Ferfer® xalqaro sifat va xavfsizlik standartlariga mos keladi',
    'certificates.cert1.title': 'Muvofiqlik sertifikati',
    'certificates.cert1.desc': 'Texnik reglamentlar talablariga muvofiqlikning rasmiy sertifikati.',
    'certificates.cert2.title': 'Ro\'yxatdan o\'tish guvohnomasi',
    'certificates.cert2.desc': 'O\'zbekiston Respublikasida BFQ davlat ro\'yxatidan o\'tkazildi.',
    'certificates.cert3.title': 'GMP sertifikati',
    'certificates.cert3.desc': 'Ishlab chiqarish xalqaro GMP standartlariga mos keladi.',
    'certificates.view': 'PDF ni ko\'rish',

    // Footer
    'footer.description': 'Ferfer® — temir tanqisligini samarali to\'ldirish uchun innovatsion biologik faol qo\'shimcha.',
    'footer.quickLinks': 'Tezkor havolalar',
    'footer.contact': 'Aloqa',
    'footer.address': 'Toshkent shahri, O\'zbekiston',
    'footer.rights': '© 2025 Ferfer®. Barcha huquqlar himoyalangan.',
    'footer.warning': 'BFQ dori vositasi emas.',
    'footer.pharmevo': 'PharmEvo — Bizning orzuimiz, sog\'lom jamiyat',
    'footer.privacy': 'Maxfiylik siyosati',
    'footer.terms': 'Foydalanish shartlari',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ru');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
