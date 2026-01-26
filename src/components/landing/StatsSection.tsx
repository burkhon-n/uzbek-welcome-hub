import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Users, ShoppingCart, MapPin, Award } from 'lucide-react';

const StatsSection: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Users, value: '50K+', labelKey: 'stats.clients' },
    { icon: ShoppingCart, value: '1M+', labelKey: 'stats.orders' },
    { icon: MapPin, value: '100+', labelKey: 'stats.cities' },
    { icon: Award, value: '5+', labelKey: 'stats.years' },
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 gradient-bg opacity-95" />
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container-main relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.labelKey}
              className="text-center text-white"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm mb-4">
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-lg text-white/80 font-medium">
                {t(stat.labelKey)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
