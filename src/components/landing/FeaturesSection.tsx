import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Truck, Shield, Headphones, Lock, Puzzle, BarChart3 } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Truck,
      titleKey: 'features.delivery.title',
      descKey: 'features.delivery.description',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Shield,
      titleKey: 'features.quality.title',
      descKey: 'features.quality.description',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Headphones,
      titleKey: 'features.support.title',
      descKey: 'features.support.description',
      color: 'from-purple-500 to-violet-500',
    },
    {
      icon: Lock,
      titleKey: 'features.secure.title',
      descKey: 'features.secure.description',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Puzzle,
      titleKey: 'features.integration.title',
      descKey: 'features.integration.description',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: BarChart3,
      titleKey: 'features.analytics.title',
      descKey: 'features.analytics.description',
      color: 'from-indigo-500 to-blue-500',
    },
  ];

  return (
    <section id="services" className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-main relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary text-primary font-semibold text-sm mb-4">
            {t('features.sectionTitle')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            {t('features.sectionSubtitle')}
          </h2>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.titleKey}
              className="group card-elevated hover:-translate-y-2 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {t(feature.titleKey)}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t(feature.descKey)}
              </p>

              {/* Hover decoration */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
