import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import heroImage from '@/assets/hero-illustration.png';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center gradient-hero-bg overflow-hidden pt-20">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      </div>

      <div className="container-main relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-muted-foreground">Ferfer.uz — {t('hero.titleEnd')}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              {t('hero.title')}{' '}
              <span className="gradient-text">{t('hero.titleHighlight')}</span>{' '}
              {t('hero.titleEnd')}
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-in text-balance" style={{ animationDelay: '0.2s' }}>
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button className="btn-primary group">
                {t('hero.cta')}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="btn-secondary group">
                <Play className="mr-2 w-5 h-5" />
                {t('hero.learnMore')}
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 pt-8 border-t border-border/50 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <p className="text-sm text-muted-foreground mb-4">Нам доверяют лидеры рынка</p>
              <div className="flex items-center justify-center lg:justify-start gap-8 opacity-50">
                {['Uzcard', 'Humo', 'Click', 'Payme'].map((partner) => (
                  <span key={partner} className="text-lg font-semibold text-muted-foreground">
                    {partner}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Hero Illustration */}
          <div className="relative animate-fade-in lg:animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Hero illustration"
                className="w-full max-w-lg mx-auto lg:max-w-none animate-float"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 gradient-bg rounded-3xl opacity-20 blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-accent/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-muted-foreground/50 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
