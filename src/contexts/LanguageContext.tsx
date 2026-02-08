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
    'nav.faq': 'ЧАВО',
    
    // Hero Section
    'hero.badge': 'Инновационная микрокапсулированная технология',
    'hero.title': 'Биологически активная добавка',
    'hero.brand': 'ФЕРФЕР',
    'hero.subtitle': 'Биологически активная добавка с микрокапсулированным липосомальным железом, витамином C и B12. Быстро растворяется во рту, хорошо переносится, без металлического вкуса.',
    'hero.cta': 'Купить сейчас',
    'hero.instructions': 'Инструкция',
    'hero.sachets': '30 саше',
    'hero.instructions.title': 'Инструкция по применению',
    'hero.instructions.composition': 'Состав (на 1 саше, 1,5 г)',
    'hero.instructions.compositionText': 'Железо (в виде пирофосфата железа) — 14 мг\nВитамин С — 80 мг\nВитамин В12 — 2,5 мкг',
    'hero.instructions.auxiliarySubstances': 'Вспомогательные вещества',
    'hero.instructions.auxiliarySubstancesText': 'Мальтодекстрин, маннит, декстроза безводная, дюраром со вкусом апельсина и сукралоза.',
    'hero.instructions.properties': 'Свойства',
    'hero.instructions.ironProperties': 'Железо:\n• поддерживает стабильный энергетический метаболизм\n• способствует нормальному транспорту кислорода в организме\n• способствует образованию гемоглобина\n• принимает участие в функции деления клеток\n• важно при планировании беременности\n• поддерживает оптимальное функционирование иммунной системы',
    'hero.instructions.vitaminCProperties': 'Витамин С:\n• улучшает усвоение железа\n• способствует синтезу коллагена\n• поддерживает иммунную функцию',
    'hero.instructions.vitaminB12Properties': 'Витамин В12:\n• способствует эффективному образованию красных кровяных клеток\n• уменьшает усталость и утомляемость\n• способствует оптимальному функционированию нервной и иммунной системы\n• играет важную роль в процессе деления клеток\n• способствует нормальному энергетическому метаболизму',
    'hero.instructions.indication': 'Показания к применению',
    'hero.instructions.indicationText': 'Ferfer® — биологически активная добавка, содержащая железо в липосомальной форме. Липосомальная технология обеспечивает высокую биодоступность железа, защищая его от окисления в желудке и обеспечивая эффективное всасывание без типичных побочных эффектов.',
    'hero.instructions.dosage': 'Способ применения и дозы',
    'hero.instructions.dosageText': 'Дозировка для взрослых: 1–2 саше в день или по назначению врача. Принимать без воды. Откройте 1 пакетик и положите содержимое в рот, не растворяя в воде.',
    'hero.instructions.contraindications': 'Противопоказания',
    'hero.instructions.contraindicationsText': 'Повышенная чувствительность к солям железа, аскорбиновой кислоте (витамину С) или любой форме витамина В12. Гемосидероз, гемохроматоз или анемии, отличные от железодефицитной анемии. Гипероксалурия.',
    'hero.instructions.sideEffects': 'Побочные эффекты',
    'hero.instructions.sideEffectsText': 'Возможны желудочно-кишечные расстройства (тошнота, запор, диарея). Благодаря липосомальной форме частота побочных эффектов значительно снижена по сравнению с традиционными формами железа.',
    'hero.instructions.specialInstructions': 'Особые указания',
    'hero.instructions.specialInstructionsText': 'Биологически активная добавка, не являющаяся лекарственным средством. Используйте в соответствии с рекомендациями врача. Не превышайте рекомендуемую суточную дозу. Храните в недоступном для детей месте. Беременные и кормящие женщины должны проконсультироваться с врачом перед применением.',
    'hero.instructions.storage': 'Условия хранения',
    'hero.instructions.storageText': 'Храните в недоступном для детей месте. Защищайте от света, тепла и влаги. Хранить при температуре ниже 30°C.',
    'hero.instructions.shelfLife': 'Срок годности',
    'hero.instructions.shelfLifeText': '24 месяца с даты производства.',
    'hero.instructions.package': 'Форма выпуска',
    'hero.instructions.packageText': '30 саше в упаковке.',
    'hero.instructions.manufacturer': 'Производитель',
    'hero.instructions.manufacturerText': 'PharmEvo (Pvt). Ltd. (Nutraceutical Division), Пакистан',
    
    // About Section
    'about.title': 'О продукте',
    'about.description': 'Ferfer® — это биологически активная добавка, содержащая железо в микрокапсулированной липосомальной форме с витаминами C и B12. Инновационная технология позволяет железу лучше усваиваться, не раздражает желудочно-кишечный тракт и снижает риск типичных побочных эффектов.',
    
    'about.feature1.title': 'Липосомальное железо',
    'about.feature1.desc': 'Защищено от окисления в желудке, не взаимодействует с пищей.',
    
    'about.feature2.title': 'Высокая биодоступность',
    'about.feature2.desc': 'Эффективное усвоение железа, способствует повышению уровня гемоглобина и ферритина.',
    
    'about.feature3.title': 'Хорошая переносимость',
    'about.feature3.desc': 'Сниженная частота побочных эффектов, не вызывает металлического вкуса.',
    
    'about.feature4.title': 'Удобство приёма',
    'about.feature4.desc': 'Быстро растворяется во рту, не требует воды, приятный апельсиновый вкус.',
    
    'about.feature5.title': 'Витамин C',
    'about.feature5.desc': '80 мг в каждом саше для улучшения усвоения железа.',
    
    'about.feature6.title': 'Витамин B12',
    'about.feature6.desc': '2,5 мкг в каждом саше для поддержки кроветворения.',
    
    // Benefits Section
    'benefits.title': 'Почему выбирают Ferfer®',
    'benefits.subtitle': 'Ferfer® — микрокапсулированный липосомальный пирофосфат железа',
    
    'benefits.item1': 'Защищает железо от окисления в желудке',
    'benefits.item2': 'Не взаимодействует с пищей',
    'benefits.item3': 'Высокая биодоступность',
    'benefits.item4': 'Без металлического привкуса',
    'benefits.liposomalIron': 'Липосомное железо',
    'benefits.microFormula': 'Микрокапсулированная формула',
    
    // Iron Deficiency Section
    'deficiency.title': 'Почему обычное железо не подходит',
    'deficiency.subtitle': 'Традиционные формы железа могут вызывать неприятные побочные эффекты.',
    'deficiency.point1': 'Тошноту и дискомфорт в желудке.',
    'deficiency.point2': 'Запоры или диарею.',
    'deficiency.point3': 'Металлический вкус и окрашивание слизистых оболочек.',
    
    // Partners Section
    'partners.title': 'Где купить?',
    'partners.button': 'В аптеку',
    'partners.seeAll': 'Смотреть все',
    
    // FAQ Section
    'faq.title': 'Часто задаваемые вопросы',
    'faq.subtitle': 'Ответы на популярные вопросы о Ferfer®',
    
    'faq.q1': 'Что такое Ferfer®?',
    'faq.a1': 'Ferfer® — биологически активная добавка с микрокапсулированным липосомальным железом и витаминами C и B12.',
    
    'faq.q2': 'Как принимать Ferfer®?',
    'faq.a2': 'Взрослым и подросткам старше 14 лет — 1–2 саше в день, не размешивая в воде, или по рекомендации специалиста.',
    
    'faq.q3': 'Есть ли побочные эффекты?',
    'faq.a3': 'Благодаря липосомальной форме частота типичных побочных эффектов железа значительно снижена.',
    
    'faq.q4': 'Можно ли принимать беременным?',
    'faq.a4': 'Беременным и кормящим женщинам перед применением необходимо проконсультироваться с врачом.',
    
    'faq.q6': 'Сколько саше в упаковке?',
    'faq.a6': 'В одной упаковке содержится 30 саше с апельсиновым вкусом.',
    
    // Certificates Section
    'certificates.title': 'Сертификаты качества',
    'certificates.subtitle': 'Ferfer® соответствует международным стандартам качества и безопасности',
    'certificates.cert1.title': 'Сертификат соответствия',
    'certificates.cert1.desc': 'Официальный сертификат соответствия требованиям технических регламентов.',
    'certificates.cert2.title': 'Регистрационное удостоверение',
    'certificates.cert2.desc': 'Государственная регистрация БАД в Республике Узбекистан.',
    'certificates.cert3.title': 'Сертификат GMP',
    'certificates.cert3.desc': 'Производство соответствует международным стандартам надлежащей производственной практики.',
    'certificates.view': 'Смотреть PDF',

    // Footer
    'footer.description': 'Ferfer® — инновационная биологически активная добавка для восполнения дефицита железа.',
    'footer.quickLinks': 'Быстрые ссылки',
    'footer.contact': 'Контакты',
    'footer.address': 'Ц-5 Киёт 68А, г. Ташкент, Узбекистан',
    'footer.rights': 'Ferfer®. Все права защищены.',
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
    'hero.subtitle': 'Mikrokapsulalangan liposomal temir, C va B12 vitaminlarini o\'z ichiga olgan biologik faol qo\'shimcha. Og\'izda tez eriydi, yaxshi o\'zlashtiriladi, metall ta\'mi yo\'q.',
    'hero.cta': 'Hozir sotib olish',
    'hero.instructions': 'Ko\'rsatma',
    'hero.sachets': '30 sashe',
    'hero.instructions.title': 'Qo\'llash bo\'yicha ko\'rsatma',
    'hero.instructions.composition': 'Tarkibi (1 sashe, 1,5 g uchun)',
    'hero.instructions.compositionText': 'Temir (temir pirofosfat shaklida) — 14 mg\nVitamin C — 80 mg\nVitamin B12 — 2,5 mkg',
    'hero.instructions.auxiliarySubstances': 'Yordamchi moddalar',
    'hero.instructions.auxiliarySubstancesText': 'Maltodekstrin, mannit, suvsiz dekstroza, apelsin ta\'mli durarom va sukraloza.',
    'hero.instructions.properties': 'Xususiyatlari',
    'hero.instructions.ironProperties': 'Temir:\n• barqaror energiya almashinuvini qo\'llab-quvvatlaydi\n• organizmda kislorodning normal tashilishiga yordam beradi\n• gemoglobin hosil bo\'lishiga yordam beradi\n• hujayra bo\'linishi funktsiyasida ishtirok etadi\n• homiladorlikni rejalashtirishda muhim\n• immunitet tizimining optimal ishlashini qo\'llab-quvvatlaydi',
    'hero.instructions.vitaminCProperties': 'Vitamin C:\n• temirning o\'zlashtirilishini yaxshilaydi\n• kollagen sinteziga yordam beradi\n• immun funktsiyasini qo\'llab-quvvatlaydi',
    'hero.instructions.vitaminB12Properties': 'Vitamin B12:\n• qizil qon hujayralarining samarali hosil bo\'lishiga yordam beradi\n• charchoq va toliqishni kamaytiradi\n• asab va immun tizimining optimal ishlashiga yordam beradi\n• hujayra bo\'linishi jarayonida muhim rol o\'ynaydi\n• normal energiya almashinuviga yordam beradi',
    'hero.instructions.indication': 'Qo\'llash ko\'rsatmalari',
    'hero.instructions.indicationText': 'Ferfer® — liposomal shakldagi temirni o\'z ichiga olgan biologik faol qo\'shimcha. Liposomal texnologiya temirning yuqori biokiruvchanligini ta\'minlab, uni oshqozonda oksidlanishdan himoya qiladi va odatiy nojo\'ya ta\'sirlarsiz samarali so\'rilishini ta\'minlaydi.',
    'hero.instructions.dosage': 'Qo\'llash usuli va dozasi',
    'hero.instructions.dosageText': 'Kattalar uchun dozasi: kuniga 1–2 sashe yoki shifokor ko\'rsatmasiga ko\'ra. Suvsiz qabul qiling. 1 paketni oching va tarkibini og\'izga qo\'ying, suvda eritmasdan.',
    'hero.instructions.contraindications': 'Qarshi ko\'rsatmalar',
    'hero.instructions.contraindicationsText': 'Temir tuzlariga, askorbin kislotasiga (vitamin C) yoki vitamin B12ning har qanday shakliga yuqori sezuvchanlik. Gemosideroz, gemoxromatoz yoki temir tanqisligi anemiyasidan boshqa anemiyalar. Giperoksoluriya.',
    'hero.instructions.sideEffects': 'Nojo\'ya ta\'sirlari',
    'hero.instructions.sideEffectsText': 'Oshqozon-ichak buzilishlari (ko\'ngil aynishi, qabziyat, diareya) kuzatilishi mumkin. Liposomal shakl tufayli nojo\'ya ta\'sirlar chastotasi an\'anaviy temir shakllariga nisbatan sezilarli darajada kamaygan.',
    'hero.instructions.specialInstructions': 'Maxsus ko\'rsatmalar',
    'hero.instructions.specialInstructionsText': 'Biologik faol qo\'shimcha, dori vositasi emas. Shifokor tavsiyalariga muvofiq foydalaning. Tavsiya etilgan kunlik dozadan oshirmang. Bolalar qo\'li yetmaydigan joyda saqlang. Homilador va emizikli ayollar qo\'llashdan oldin shifokor bilan maslahatlashishlari lozim.',
    'hero.instructions.storage': 'Saqlash shartlari',
    'hero.instructions.storageText': 'Bolalar qo\'li yetmaydigan joyda saqlang. Yorug\'lik, issiqlik va namlikdan himoya qiling. 30°C dan past haroratda saqlang.',
    'hero.instructions.shelfLife': 'Yaroqlilik muddati',
    'hero.instructions.shelfLifeText': 'Ishlab chiqarilgan sanadan boshlab 24 oy.',
    'hero.instructions.package': 'Chiqarish shakli',
    'hero.instructions.packageText': 'Qadoqda 30 ta sashe.',
    'hero.instructions.manufacturer': 'Ishlab chiqaruvchi',
    'hero.instructions.manufacturerText': 'PharmEvo (Pvt). Ltd. (Nutraceutical Division), Pokiston',
    
    // About Section
    'about.title': 'Mahsulot haqida',
    'about.description': 'Ferfer® — tarkibida C va B12 vitaminlari bilan birga mikrokapsulalangan liposomal shakldagi temir mavjud bo\'lgan biologik faol qo\'shimcha. Innovatsion texnologiya temirning yaxshiroq so\'rilishiga, oshqozon-ichak traktini bezovta qilmasligiga va odatiy nojo\'ya ta\'sirlar xavfini kamaytirishga imkon beradi.',
    
    'about.feature1.title': 'Liposomal temir',
    'about.feature1.desc': 'Oshqozonda oksidlanishdan himoyalangan, oziq-ovqat bilan o\'zaro ta\'sirga kirishmaydi.',
    
    'about.feature2.title': 'Yuqori biokiraolishlik',
    'about.feature2.desc': 'Temirning samarali o\'zlashtirilishi, gemoglobin va ferritin darajasining oshishiga yordam beradi.',
    
    'about.feature3.title': 'Yaxshi o\'zlashtirilishi',
    'about.feature3.desc': 'Nojo\'ya ta\'sirlar chastotasi kamaytirilgan, metall ta\'mini keltirib chiqarmaydi.',
    
    'about.feature4.title': 'Qulay qabul qilish',
    'about.feature4.desc': 'Og\'izda tez eriydi, suv talab qilmaydi, yoqimli apelsin ta\'miga ega.',
    
    'about.feature5.title': 'Vitamin C',
    'about.feature5.desc': 'Temir o\'zlashtirilishini yaxshilash uchun har bir sashe da 80 mg.',
    
    'about.feature6.title': 'Vitamin B12',
    'about.feature6.desc': 'Qon yaratishni qo\'llab-quvvatlash uchun har bir sashe da 2,5 mkg.',
    
    // Benefits Section
    'benefits.title': 'Nima uchun Ferfer® tanlanadi',
    'benefits.subtitle': 'Ferfer® — mikrokapsulalangan liposomal temir pirofosfati',
    
    'benefits.item1': 'Temirni oshqozonda oksidlanishdan himoya qiladi',
    'benefits.item2': 'Oziq-ovqat bilan ta\'sir qilmaydi',
    'benefits.item3': 'Yuqori biokiraolishlik',
    'benefits.item4': 'Metall ta\'misiz',
    'benefits.liposomalIron': 'Liposomal temir',
    'benefits.microFormula': 'Mikrokapsulalangan formula',
    
    // Iron Deficiency Section
    'deficiency.title': 'Nima uchun oddiy temir mos kelmaydi',
    'deficiency.subtitle': 'An\'anaviy temir shakllari noxush nojo\'ya ta\'sirlarga sabab bo\'lishi mumkin.',
    'deficiency.point1': 'Ko\'ngil aynishi va oshqozonda noqulaylik.',
    'deficiency.point2': 'Qabziyat yoki diareya.',
    'deficiency.point3': 'Metall ta\'mi va shilliq qavatlarning bo\'yalishi.',
    
    // Partners Section
    'partners.title': 'Qayerdan sotib olish?',
    'partners.button': 'Dorixonaga',
    'partners.seeAll': 'Hammasini ko\'rish',
    
    // FAQ Section
    'faq.title': 'Ko\'p beriladigan savollar',
    'faq.subtitle': 'Ferfer® haqida mashhur savollarga javoblar',
    
    'faq.q1': 'Ferfer® nima?',
    'faq.a1': 'Ferfer® — mikrokapsulalangan liposomal temir hamda C va B12 vitaminlarini o\'z ichiga olgan biologik faol qo\'shimcha.',
    
    'faq.q2': 'Ferfer® qanday qabul qilinadi?',
    'faq.a2': '14 yoshdan katta kattalar va o\'smirlar uchun — kuniga 1–2 sashe, suvga aralashtirmasdan yoki mutaxassis tavsiyasiga ko\'ra.',
    
    'faq.q3': 'Nojo\'ya ta\'sirlari bormi?',
    'faq.a3': 'Liposomal shakli tufayli temirga xos bo\'lgan odatiy nojo\'ya ta\'sirlar chastotasi sezilarli darajada kamaygan.',
    
    'faq.q4': 'Homilador ayollar qabul qilishi mumkinmi?',
    'faq.a4': 'Homilador va emizikli ayollar Ferfer®ni qabul qilishdan oldin shifokor bilan maslahatlashishlari lozim.',
    
    'faq.q6': 'Qadoqda nechta sashe bor?',
    'faq.a6': 'Bir qadoqda apelsin ta\'mli 30 ta sashe mavjud.',
    
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
    'footer.description': 'Ferfer® — temir tanqisligini to\'ldirish uchun mo\'ljallangan innovatsion biologik faol qo\'shimcha.',
    'footer.quickLinks': 'Tezkor havolalar',
    'footer.contact': 'Aloqa',
    'footer.address': 'C-5 Qiyot 68А, Toshkent shahri, O\'zbekiston',
    'footer.rights': 'Ferfer®. Barcha huquqlar himoyalangan.',
    'footer.warning': 'Biologik faol qo\'shimcha dori vositasi hisoblanmaydi.',
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
