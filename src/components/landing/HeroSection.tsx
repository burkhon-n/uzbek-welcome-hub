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
  const [isInstructionsOpen, setIsInstructionsOpen] = useState(false);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % productImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Prevent right-click context menu on the PDF viewer
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    return false;
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-secondary/50 via-background to-background">
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
          
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
          
          {/* Sachets badge - Bottom right of carousel on desktop */}
          <div className="absolute bottom-[15%] right-8 lg:right-12 z-20 pointer-events-auto animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold shadow-pink text-base whitespace-nowrap">
              {t('hero.sachets')}
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute bottom-20 left-10 w-64 md:w-96 h-64 md:h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 right-1/3 w-48 md:w-72 h-48 md:h-72 bg-accent/20 rounded-full blur-3xl pointer-events-none" />

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
          <div className="text-left max-w-xl lg:max-w-2xl">
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

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-md mb-6 md:mb-8 animate-fade-in text-balance leading-relaxed" style={{ animationDelay: '0.2s' }}>
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button className="btn-primary text-sm md:text-base w-full sm:w-auto">
                {t('hero.cta')}
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

      {/* Instructions PDF Modal */}
      <Dialog open={isInstructionsOpen} onOpenChange={setIsInstructionsOpen}>
        <DialogContent 
          className="max-w-4xl w-[95vw] h-[85vh] p-0 overflow-hidden"
          onContextMenu={handleContextMenu}
        >
          <DialogHeader className="p-4 pb-0">
            <DialogTitle className="text-lg font-semibold">
              {t('hero.instructions')}
            </DialogTitle>
          </DialogHeader>
          <div 
            className="flex-1 w-full h-full min-h-0 p-4 pt-2"
            onContextMenu={handleContextMenu}
          >
            <iframe
              src="/certificate.pdf#toolbar=0&navpanes=0&scrollbar=1&view=FitH"
              className="w-full h-full rounded-lg border border-border"
              title="Instructions PDF"
              style={{ 
                minHeight: 'calc(85vh - 80px)',
                pointerEvents: 'auto'
              }}
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HeroSection;
