import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';
import flowersDecoration from '@/assets/flowers-new.png';
import ferferProduct from '@/assets/ferfer-box.png';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen gradient-hero-bg overflow-hidden pt-20 lg:pt-24">
      {/* Decorative flowers - positioned at top right */}
      <div className="absolute top-0 right-0 w-[70%] sm:w-[60%] md:w-[50%] lg:w-[45%] max-w-2xl pointer-events-none z-0">
        <img
          src={flowersDecoration}
          alt=""
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Background soft gradient circles */}
      <div className="absolute bottom-20 left-10 w-64 md:w-96 h-64 md:h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-main relative z-10 py-6 sm:py-8 md:py-12">
        <div className="flex flex-col gap-6 sm:gap-8 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Content - always first on mobile */}
          <div className="text-left relative z-10 pt-4 sm:pt-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-secondary/90 backdrop-blur-sm border border-primary/20 mb-4 md:mb-6 animate-fade-in">
              <span className="text-xs sm:text-sm font-medium text-primary">
                {t('hero.badge')}
              </span>
            </div>

            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-2 animate-fade-in text-foreground" style={{ animationDelay: '0.1s' }}>
              {t('hero.title')}
            </h1>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 animate-fade-in text-primary" style={{ animationDelay: '0.15s' }}>
              {t('hero.brand')}
              <span className="text-base sm:text-lg md:text-xl lg:text-2xl align-super">®</span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-lg mb-5 sm:mb-6 md:mb-8 animate-fade-in text-balance leading-relaxed" style={{ animationDelay: '0.2s' }}>
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button className="btn-primary text-sm md:text-base w-full sm:w-auto">
                {t('hero.cta')}
              </Button>
              <Button variant="outline" className="btn-secondary text-sm md:text-base w-full sm:w-auto">
                <FileText className="mr-2 w-4 h-4 md:w-5 md:h-5" />
                {t('hero.instructions')}
              </Button>
            </div>
          </div>

          {/* Product Image - below on mobile */}
          <div className="relative animate-fade-in flex justify-center" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg">
              {/* Clean white background container for product */}
              <div className="bg-gradient-to-br from-background to-secondary/50 rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl">
                <img
                  src={ferferProduct}
                  alt="Ферфер® продукт"
                  className="w-full h-auto drop-shadow-lg"
                />
              </div>
              
              {/* Sachets badge */}
              <div className="absolute -bottom-2 right-1 sm:-bottom-3 sm:right-2 md:-bottom-4 md:right-4 bg-primary text-primary-foreground px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full font-bold shadow-pink text-xs sm:text-sm md:text-base">
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
