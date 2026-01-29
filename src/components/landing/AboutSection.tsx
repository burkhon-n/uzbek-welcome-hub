import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Zap, ShieldCheck, Clock, Sparkles, Activity, Heart } from 'lucide-react';

const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Zap,
      titleKey: 'about.feature1.title',
      descKey: 'about.feature1.desc',
    },
    {
      icon: ShieldCheck,
      titleKey: 'about.feature2.title',
      descKey: 'about.feature2.desc',
    },
    {
      icon: Clock,
      titleKey: 'about.feature3.title',
      descKey: 'about.feature3.desc',
    },
    {
      icon: Sparkles,
      titleKey: 'about.feature4.title',
      descKey: 'about.feature4.desc',
    },
    {
      icon: Activity,
      titleKey: 'about.feature5.title',
      descKey: 'about.feature5.desc',
    },
    {
      icon: Heart,
      titleKey: 'about.feature6.title',
      descKey: 'about.feature6.desc',
    },
  ];

  return (
    <section id="about" className="section-padding pt-0 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/30 rounded-full blur-3xl" />

      <div className="container-main relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            {t('about.title')}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t('about.description')}
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.titleKey}
              className="group card-elevated hover:-translate-y-1 cursor-pointer relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                {t(feature.titleKey)}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t(feature.descKey)}
              </p>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
