import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Check } from 'lucide-react';

const BenefitsSection: React.FC = () => {
  const { t } = useLanguage();

  const benefits = [
    'benefits.item1',
    'benefits.item2',
    'benefits.item3',
    'benefits.item4',
  ];

  return (
    <section id="benefits" className="py-20 md:py-28 relative overflow-hidden">
      {/* Pink gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/10 to-secondary" />
      
      <div className="container-main relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Text content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              {t('benefits.title')}
            </h2>
            <p className="text-xl text-primary font-semibold mb-8">
              {t('benefits.subtitle')}
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit}
                  className="flex items-start gap-4 p-4 bg-card/80 backdrop-blur-sm rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <p className="text-foreground font-medium pt-1">
                    {t(benefit)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Visual representation */}
          <div className="relative">
            <div className="bg-card rounded-3xl p-8 shadow-xl border border-border/30">
              {/* Liposome illustration - simplified */}
              <div className="relative aspect-square max-w-sm mx-auto">
                {/* Outer circle */}
                <div className="absolute inset-0 rounded-full border-4 border-primary/30 animate-pulse" />
                <div className="absolute inset-4 rounded-full border-4 border-primary/50" />
                <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary/20 to-accent/20" />
                
                {/* Center content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-4">
                    <span className="text-3xl font-bold text-primary-foreground">Fe</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    Липосомное железо
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Микрокапсулированная формула
                  </p>
                </div>

                {/* Floating particles */}
                <div className="absolute top-10 right-10 w-4 h-4 rounded-full bg-primary/60 animate-float" />
                <div className="absolute bottom-16 left-8 w-3 h-3 rounded-full bg-primary/40 animate-float" style={{ animationDelay: '0.5s' }} />
                <div className="absolute top-1/3 left-4 w-2 h-2 rounded-full bg-primary/50 animate-float" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
