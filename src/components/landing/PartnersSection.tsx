import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

import goApteka from '@/assets/partners/go-apteka.png';
import bestPharm from '@/assets/partners/best-pharm.png';
import topPharm from '@/assets/partners/top-pharm.png';
import nikaPharm from '@/assets/partners/nika-pharm.png';

const PartnersSection: React.FC = () => {
  const { t } = useLanguage();

  const partners = [
    { name: 'GO АПТЕКА', logo: goApteka, url: '#' },
    { name: 'Best Pharm', logo: bestPharm, url: '#' },
    { name: 'Top-Pharm', logo: topPharm, url: '#' },
    { name: 'Nika Pharm', logo: nikaPharm, url: '#' },
  ];

  return (
    <section id="partners" className="section-padding bg-background relative overflow-hidden">
      <div className="container-main relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            {t('partners.title')}
          </h2>
        </div>

        {/* Partners grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="pharmacy-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Logo container */}
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6 bg-muted flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Partner name */}
              <h3 className="text-lg font-semibold text-foreground mb-4">
                "{partner.name}"
              </h3>

              {/* CTA Button */}
              <Button className="btn-primary w-full group-hover:scale-105 transition-transform">
                {t('partners.button')}
                <ExternalLink className="ml-2 w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>

        {/* See all link */}
        <div className="text-center mt-8">
          <a
            href="#"
            className="text-primary font-medium hover:underline inline-flex items-center gap-1"
          >
            {t('partners.seeAll')}
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
