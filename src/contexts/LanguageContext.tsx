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
    'nav.services': 'Услуги',
    'nav.about': 'О нас',
    'nav.faq': 'FAQ',
    'nav.contact': 'Контакты',
    
    // Hero Section
    'hero.title': 'Ваш надежный',
    'hero.titleHighlight': 'партнер',
    'hero.titleEnd': 'в бизнесе',
    'hero.subtitle': 'Мы предоставляем инновационные решения для вашего бизнеса. Современные технологии, профессиональный подход и индивидуальный сервис.',
    'hero.cta': 'Начать сейчас',
    'hero.learnMore': 'Узнать больше',
    
    // Features Section
    'features.sectionTitle': 'Наши услуги',
    'features.sectionSubtitle': 'Комплексные решения для вашего успеха',
    
    'features.delivery.title': 'Быстрая доставка',
    'features.delivery.description': 'Доставляем товары по всему Узбекистану в кратчайшие сроки с полным отслеживанием.',
    
    'features.quality.title': 'Гарантия качества',
    'features.quality.description': 'Мы гарантируем высокое качество всех наших товаров и услуг.',
    
    'features.support.title': 'Поддержка 24/7',
    'features.support.description': 'Наша команда поддержки всегда готова помочь вам в любое время суток.',
    
    'features.secure.title': 'Безопасные платежи',
    'features.secure.description': 'Современные системы безопасности для защиты ваших транзакций.',
    
    'features.integration.title': 'Интеграции',
    'features.integration.description': 'Легкая интеграция с популярными платформами и сервисами.',
    
    'features.analytics.title': 'Аналитика',
    'features.analytics.description': 'Подробная аналитика и отчеты для принятия правильных решений.',
    
    // Stats Section
    'stats.clients': 'Клиентов',
    'stats.orders': 'Заказов',
    'stats.cities': 'Городов',
    'stats.years': 'Лет опыта',
    
    // FAQ Section
    'faq.title': 'Часто задаваемые вопросы',
    'faq.subtitle': 'Ответы на популярные вопросы наших клиентов',
    
    'faq.q1': 'Как начать пользоваться сервисом?',
    'faq.a1': 'Для начала работы достаточно зарегистрироваться на нашем сайте, заполнить профиль и выбрать подходящий тариф. Наша команда поддержки поможет вам с настройкой.',
    
    'faq.q2': 'Какие способы оплаты доступны?',
    'faq.a2': 'Мы принимаем оплату банковскими картами Uzcard, Humo, Visa, Mastercard, а также наличными при получении и банковским переводом для юридических лиц.',
    
    'faq.q3': 'Какие сроки доставки?',
    'faq.a3': 'Доставка по Ташкенту осуществляется в течение 1-2 дней, по регионам Узбекистана — 3-5 рабочих дней. Экспресс-доставка доступна для срочных заказов.',
    
    'faq.q4': 'Как связаться с поддержкой?',
    'faq.a4': 'Вы можете связаться с нами через чат на сайте, по телефону +998 71 123 45 67, или написать на email support@ferfer.uz. Мы работаем 24/7.',
    
    'faq.q5': 'Есть ли гарантия на товары?',
    'faq.a5': 'Да, на все товары предоставляется официальная гарантия производителя. Срок гарантии зависит от категории товара и указан в описании каждого продукта.',
    
    'faq.q6': 'Можно ли вернуть товар?',
    'faq.a6': 'Да, вы можете вернуть товар в течение 14 дней с момента получения при сохранении товарного вида и упаковки. Возврат средств осуществляется в течение 3-5 рабочих дней.',
    
    // Footer
    'footer.description': 'Ваш надежный партнер в мире цифровых решений. Мы создаем будущее вместе с вами.',
    'footer.quickLinks': 'Быстрые ссылки',
    'footer.contact': 'Контакты',
    'footer.address': 'г. Ташкент, Узбекистан',
    'footer.rights': '© 2025 Ferfer.uz. Все права защищены.',
    'footer.privacy': 'Политика конфиденциальности',
    'footer.terms': 'Условия использования',
  },
  uz: {
    // Navigation
    'nav.home': 'Bosh sahifa',
    'nav.services': 'Xizmatlar',
    'nav.about': 'Biz haqimizda',
    'nav.faq': 'FAQ',
    'nav.contact': 'Aloqa',
    
    // Hero Section
    'hero.title': 'Sizning ishonchli',
    'hero.titleHighlight': 'hamkoringiz',
    'hero.titleEnd': 'biznesda',
    'hero.subtitle': 'Biz sizning biznesingiz uchun innovatsion yechimlarni taqdim etamiz. Zamonaviy texnologiyalar, professional yondashuv va individual xizmat.',
    'hero.cta': 'Hozir boshlash',
    'hero.learnMore': 'Batafsil',
    
    // Features Section
    'features.sectionTitle': 'Bizning xizmatlarimiz',
    'features.sectionSubtitle': 'Muvaffaqiyatingiz uchun kompleks yechimlar',
    
    'features.delivery.title': 'Tez yetkazib berish',
    'features.delivery.description': 'Tovarlarni butun O\'zbekiston bo\'ylab qisqa muddatlarda to\'liq kuzatuv bilan yetkazamiz.',
    
    'features.quality.title': 'Sifat kafolati',
    'features.quality.description': 'Biz barcha mahsulot va xizmatlarimizning yuqori sifatini kafolatlaymiz.',
    
    'features.support.title': 'Qo\'llab-quvvatlash 24/7',
    'features.support.description': 'Bizning qo\'llab-quvvatlash jamoamiz sizga har doim yordam berishga tayyor.',
    
    'features.secure.title': 'Xavfsiz to\'lovlar',
    'features.secure.description': 'Sizning tranzaksiyalaringizni himoya qilish uchun zamonaviy xavfsizlik tizimlari.',
    
    'features.integration.title': 'Integratsiyalar',
    'features.integration.description': 'Mashhur platformalar va xizmatlar bilan oson integratsiya.',
    
    'features.analytics.title': 'Tahlil',
    'features.analytics.description': 'To\'g\'ri qarorlar qabul qilish uchun batafsil tahlil va hisobotlar.',
    
    // Stats Section
    'stats.clients': 'Mijozlar',
    'stats.orders': 'Buyurtmalar',
    'stats.cities': 'Shaharlar',
    'stats.years': 'Yillik tajriba',
    
    // FAQ Section
    'faq.title': 'Ko\'p beriladigan savollar',
    'faq.subtitle': 'Mijozlarimizning mashhur savollariga javoblar',
    
    'faq.q1': 'Xizmatdan qanday foydalanishni boshlash mumkin?',
    'faq.a1': 'Ishlashni boshlash uchun saytimizda ro\'yxatdan o\'tish, profilni to\'ldirish va mos tarifni tanlash kifoya. Qo\'llab-quvvatlash jamoamiz sozlashda yordam beradi.',
    
    'faq.q2': 'Qanday to\'lov usullari mavjud?',
    'faq.a2': 'Biz Uzcard, Humo, Visa, Mastercard bank kartalari, shuningdek qabul qilishda naqd pul va yuridik shaxslar uchun bank o\'tkazmasi orqali to\'lovlarni qabul qilamiz.',
    
    'faq.q3': 'Yetkazib berish muddatlari qancha?',
    'faq.a3': 'Toshkentda yetkazib berish 1-2 kun ichida, O\'zbekiston viloyatlari bo\'ylab — 3-5 ish kuni. Shoshilinch buyurtmalar uchun ekspress yetkazib berish mavjud.',
    
    'faq.q4': 'Qo\'llab-quvvatlash bilan qanday bog\'lanish mumkin?',
    'faq.a4': 'Siz biz bilan saytdagi chat orqali, +998 71 123 45 67 telefon raqami orqali yoki support@ferfer.uz elektron pochtasiga yozib bog\'lanishingiz mumkin. Biz 24/7 ishlaymiz.',
    
    'faq.q5': 'Tovarlarga kafolat bormi?',
    'faq.a5': 'Ha, barcha tovarlarga ishlab chiqaruvchining rasmiy kafolati beriladi. Kafolat muddati tovar toifasiga bog\'liq va har bir mahsulot tavsifida ko\'rsatilgan.',
    
    'faq.q6': 'Tovarni qaytarish mumkinmi?',
    'faq.a6': 'Ha, tovarni qabul qilgan kundan boshlab 14 kun ichida tovar ko\'rinishi va qadoqlanishini saqlagan holda qaytarishingiz mumkin. Pulni qaytarish 3-5 ish kuni ichida amalga oshiriladi.',
    
    // Footer
    'footer.description': 'Raqamli yechimlar dunyosida ishonchli hamkoringiz. Biz kelajakni siz bilan birga yaratamiz.',
    'footer.quickLinks': 'Tezkor havolalar',
    'footer.contact': 'Aloqa',
    'footer.address': 'Toshkent shahri, O\'zbekiston',
    'footer.rights': '© 2025 Ferfer.uz. Barcha huquqlar himoyalangan.',
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
