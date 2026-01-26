import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { FileText, ChevronLeft, ChevronRight } from 'lucide-react';

// Product images for carousel
import ferferBoxSachet from '@/assets/products/ferfer-box-sachet.jpg';
import ferferSachet from '@/assets/products/ferfer-sachet.jpg';
import ferferBoxFront from '@/assets/products/ferfer-box-front.jpg';
import ferferBoxAngle from '@/assets/products/ferfer-box-angle.jpg';

const productImages = [
  { src: ferferBoxSachet, alt: 'Ferfer Box with Sachet' },
  { src: ferferSachet, alt: 'Ferfer Sachet' },
  { src: ferferBoxFront, alt: 'Ferfer Box Front View' },
  { src: ferferBoxAngle, alt: 'Ferfer Box Angle View' },
];

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % productImages.length);
  };

  return (
    <section id="home" className="relative min-h-screen gradient-hero-bg overflow-hidden pt-20 lg:pt-24">
      {/* Background soft gradient circles */}
      <div className="absolute bottom-20 left-10 w-64 md:w-96 h-64 md:h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-40 right-20 w-48 md:w-72 h-48 md:h-72 bg-accent/30 rounded-full blur-3xl" />

      <div className="container-main relative z-10 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center min-h-[calc(100vh-8rem)]">
          {/* Content - Left Side */}
          <div className="text-left relative z-10 order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/90 backdrop-blur-sm border border-primary/20 mb-4 md:mb-6 animate-fade-in">
              <span className="text-xs sm:text-sm font-medium text-primary">
                {t('hero.badge')}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-2 animate-fade-in text-foreground" style={{ animationDelay: '0.1s' }}>
              {t('hero.title')}
            </h1>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 animate-fade-in text-primary" style={{ animationDelay: '0.15s' }}>
              {t('hero.brand')}
              <span className="text-lg sm:text-xl md:text-2xl align-super">®</span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-lg mb-6 md:mb-8 animate-fade-in text-balance leading-relaxed" style={{ animationDelay: '0.2s' }}>
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

          {/* Carousel - Right Side */}
          <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl mx-auto order-1 lg:order-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-background to-secondary/30 shadow-xl">
              {/* Carousel Images */}
              <div className="relative w-full h-full">
                {productImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                      index === currentSlide 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-95'
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-contain p-4 sm:p-6 md:p-8"
                    />
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={goToPrevious}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background/80 backdrop-blur-sm shadow-lg flex items-center justify-center text-foreground hover:bg-background transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background/80 backdrop-blur-sm shadow-lg flex items-center justify-center text-foreground hover:bg-background transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-4 sm:mt-6">
              {productImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-primary w-6 sm:w-8'
                      : 'bg-primary/30 hover:bg-primary/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Sachets badge */}
            <div className="absolute -bottom-2 right-4 sm:-bottom-3 sm:right-6 md:-bottom-4 md:right-8 bg-primary text-primary-foreground px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full font-bold shadow-pink text-xs sm:text-sm md:text-base z-10">
              {t('hero.sachets')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
