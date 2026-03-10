import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { SEO } from "@/components/SEO";
import Header from '@/components/landing/Header';
import HeroSection from '@/components/landing/HeroSection';
import AboutSection from '@/components/landing/AboutSection';
import BenefitsSection from '@/components/landing/BenefitsSection';
import CertificatesSection from '@/components/landing/CertificatesSection';
import PartnersSection from '@/components/landing/PartnersSection';
import FAQSection from '@/components/landing/FAQSection';
import Footer from '@/components/landing/Footer';

const Index: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={t("meta.title")}
        description={t("meta.description")}
        canonicalPath={`/${language}`}
        ogType="website"
        language={language}
        ogLocale={language === "ru" ? "ru_RU" : "uz_UZ"}
        ogLocaleAlternate={language === "ru" ? "uz_UZ" : "ru_RU"}
      />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <BenefitsSection />
        <CertificatesSection />
        <PartnersSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
