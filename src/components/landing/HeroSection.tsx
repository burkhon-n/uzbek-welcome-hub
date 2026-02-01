import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

// Product images for carousel
import ferferModel1 from '@/assets/products/ferfer-model-1.png';
import ferferModel2 from '@/assets/products/ferfer-model-2.png';
import ferferModel3 from '@/assets/products/ferfer-model-3.png';
import ferferModel4 from '@/assets/products/ferfer-model-4.png';

const productImages = [
  { src: ferferModel1, alt: 'Ferfer Product Model 1' },
  { src: ferferModel2, alt: 'Ferfer Product Model 2' },
  { src: ferferModel3, alt: 'Ferfer Product Model 3' },
  { src: ferferModel4, alt: 'Ferfer Product Model 4' },
];

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isInstructionsOpen, setIsInstructionsOpen] = useState(false);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % productImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-background">
      {/* Background Product Images - Hidden on mobile, right side on desktop */}
      <div className="hidden md:block absolute inset-y-0 left-auto right-0 w-3/5 lg:w-1/2 xl:w-[55%] pointer-events-none">
        <div className="relative h-full flex items-center justify-center">
          {productImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out ${
                index === currentSlide 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-105'
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto max-h-[70vh] object-contain p-8 md:p-12 lg:p-16"
              />
            </div>
          ))}
          

          {/* Sachets badge - Bottom right of carousel on desktop */}
          <div className="absolute bottom-[15%] right-8 lg:right-12 z-20 pointer-events-auto animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold shadow-pink text-base whitespace-nowrap">
              {t('hero.sachets')}
            </div>
          </div>
        </div>
      </div>

      <div className="container-main relative z-10 pt-20 lg:pt-24 pb-8">
        <div className="flex flex-col md:justify-center min-h-[calc(100vh-12rem)] md:min-h-[calc(100vh-10rem)]">
          {/* Mobile Carousel - Above text on mobile */}
          <div className="md:hidden relative mb-6">
            <div className="relative h-64 sm:h-80">
              {productImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out ${
                    index === currentSlide 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-105'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-contain p-4"
                  />
                </div>
              ))}
              
              {/* Sachets badge - Bottom right of carousel on mobile */}
              <div className="absolute bottom-2 right-0 z-20 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <div className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-bold shadow-pink text-sm whitespace-nowrap">
                  {t('hero.sachets')}
                </div>
              </div>
            </div>
            
            {/* Dots Indicator - Mobile below carousel */}
            <div className="flex gap-2 mt-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              {productImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-primary w-8'
                      : 'bg-primary/30 hover:bg-primary/50 w-2.5'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

          </div>

          {/* Content - Left Side */}
          <div className="text-left w-full md:w-1/2 md:pr-8 lg:pr-12">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/90 backdrop-blur-sm border border-primary/20 mb-4 md:mb-6 animate-fade-in">
              <span className="text-xs sm:text-sm font-medium text-primary">
                {t('hero.badge')}
              </span>
            </div>

            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold leading-tight mb-2 animate-fade-in text-foreground" style={{ animationDelay: '0.1s' }}>
              {t('hero.title')}
            </h1>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 animate-fade-in text-primary" style={{ animationDelay: '0.15s' }}>
              {t('hero.brand')}
              <span className="text-base sm:text-lg md:text-xl align-super">®</span>
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-6 md:mb-8 animate-fade-in text-balance leading-relaxed" style={{ animationDelay: '0.2s' }}>
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button 
                className="btn-primary text-sm md:text-base w-full sm:w-auto"
                asChild
              >
                <a href="https://arzonapteka.uz/en/search-medicines?q=%D1%84%D0%B5%D1%80%D1%84%D0%B5%D1%80" target="_blank" rel="noopener noreferrer">
                  {t('hero.cta')}
                </a>
              </Button>
              <Button 
                variant="outline" 
                className="btn-secondary text-sm md:text-base w-full sm:w-auto"
                onClick={() => setIsInstructionsOpen(true)}
              >
                <FileText className="mr-2 w-4 h-4 md:w-5 md:h-5" />
                {t('hero.instructions')}
              </Button>
            </div>

            {/* Dots Indicator - Desktop only, left side */}
            <div className="hidden md:flex gap-2 mt-8 md:mt-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              {productImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-primary w-8'
                      : 'bg-primary/30 hover:bg-primary/50 w-2.5'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Instructions Modal */}
      <Dialog open={isInstructionsOpen} onOpenChange={setIsInstructionsOpen}>
        <DialogContent className="max-w-2xl w-[95vw] max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-primary">
              {t('hero.instructions.title')}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 pt-4">
            <div>
              <h4 className="font-semibold text-foreground mb-2">{t('hero.instructions.composition')}</h4>
              <p className="text-sm text-muted-foreground">{t('hero.instructions.compositionText')}</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">{t('hero.instructions.indication')}</h4>
              <p className="text-sm text-muted-foreground">{t('hero.instructions.indicationText')}</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">{t('hero.instructions.dosage')}</h4>
              <p className="text-sm text-muted-foreground">{t('hero.instructions.dosageText')}</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">{t('hero.instructions.contraindications')}</h4>
              <p className="text-sm text-muted-foreground">{t('hero.instructions.contraindicationsText')}</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">{t('hero.instructions.storage')}</h4>
              <p className="text-sm text-muted-foreground">{t('hero.instructions.storageText')}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">{t('hero.instructions.shelfLife')}</h4>
                <p className="text-sm text-muted-foreground">{t('hero.instructions.shelfLifeText')}</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">{t('hero.instructions.package')}</h4>
                <p className="text-sm text-muted-foreground">{t('hero.instructions.packageText')}</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HeroSection;
