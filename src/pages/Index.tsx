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
  const siteUrl = "https://ferfer.pharmevo.uz";
  const currentPath = `/${language}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}#organization`,
        name: "PharmEvo",
        url: siteUrl,
        logo: `${siteUrl}/og-image.jpg`,
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        url: siteUrl,
        name: "Ferfer",
        inLanguage: ["ru", "uz"],
        publisher: {
          "@id": `${siteUrl}#organization`,
        },
      },
      {
        "@type": "Product",
        "@id": `${siteUrl}${currentPath}#product`,
        name: "Ferfer",
        category: "Dietary Supplement",
        description: t("meta.description"),
        image: `${siteUrl}/og-image.jpg`,
        brand: {
          "@type": "Brand",
          name: "Ferfer",
        },
        manufacturer: {
          "@id": `${siteUrl}#organization`,
        },
        url: `${siteUrl}${currentPath}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={t("meta.title")}
        description={t("meta.description")}
        canonicalPath={currentPath}
        ampPath={`/amp/${language}`}
        alternateLinks={[
          { hrefLang: "ru", href: `${siteUrl}/ru` },
          { hrefLang: "uz", href: `${siteUrl}/uz` },
          { hrefLang: "x-default", href: `${siteUrl}/ru` },
        ]}
        ogType="website"
        language={language}
        ogLocale={language === "ru" ? "ru_RU" : "uz_UZ"}
        ogLocaleAlternate={language === "ru" ? "uz_UZ" : "ru_RU"}
        structuredData={structuredData}
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
