import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';
import flowersDecoration from '@/assets/flowers-decoration.png';
import ferferProduct from '@/assets/ferfer-product.png';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center gradient-hero-bg overflow-hidden pt-20">
      {/* Decorative flowers - top right */}
      <div className="absolute top-0 right-0 w-1/2 h-auto pointer-events-none opacity-90">
        <img
          src={flowersDecoration}
          alt=""
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Background soft gradient circles */}
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-main relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-primary/20 mb-6 animate-fade-in">
              <span className="text-sm font-medium text-primary">
                {t('hero.badge')}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-2 animate-fade-in text-foreground" style={{ animationDelay: '0.1s' }}>
              {t('hero.title')}
            </h1>
            
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in text-primary" style={{ animationDelay: '0.15s' }}>
              {t('hero.brand')}
              <span className="text-2xl align-super">®</span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-lg mb-8 animate-fade-in text-balance leading-relaxed" style={{ animationDelay: '0.2s' }}>
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button className="btn-primary">
                {t('hero.cta')}
              </Button>
              <Button variant="outline" className="btn-secondary">
                <FileText className="mr-2 w-5 h-5" />
                {t('hero.instructions')}
              </Button>
            </div>
          </div>

          {/* Product Image */}
          <div className="relative animate-fade-in lg:animate-slide-in-right flex justify-center" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <img
                src={ferferProduct}
                alt="Ферфер® продукт"
                className="w-full max-w-md lg:max-w-lg drop-shadow-2xl"
              />
              {/* Sachets badge */}
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold shadow-pink">
                {t('hero.sachets')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
