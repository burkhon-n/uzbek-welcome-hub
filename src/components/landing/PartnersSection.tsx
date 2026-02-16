import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

import arzonApteka from '@/assets/partners/arzon-apteka.png';
import goApteka from '@/assets/partners/go-apteka.png';
import bestPharm from '@/assets/partners/best-pharm.png';
import topPharm from '@/assets/partners/top-pharm.png';
import nikaPharm from '@/assets/partners/nika-pharm.png';

const PartnersSection: React.FC = () => {
  const { t } = useLanguage();

  const partners = [
    { name: 'Arzon Apteka', logo: arzonApteka, url: 'https://arzonapteka.uz/en/search-medicines?q=%D1%84%D0%B5%D1%80%D1%84%D0%B5%D1%80' },
    { name: 'GO АПТЕКА', logo: goApteka, url: 'https://www.instagram.com/goapteka/' },
    { name: 'Best Pharm', logo: bestPharm, url: 'https://www.instagram.com/bestpharm_uz/' },
    { name: 'Top-Pharm', logo: topPharm, url: 'https://www.instagram.com/toppharm.uz/' },
    { name: 'Nika Pharm', logo: nikaPharm, url: 'https://nikapharm.uz/' },
  ];

  return (
    <section id="partners" aria-label="Партнёрские аптеки" className="section-padding bg-background relative overflow-hidden">
      <div className="container-main relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            {t('partners.title')}
          </h2>
        </div>

        {/* Partners scrollable row */}
        <ScrollArea className="w-full">
          <div className="flex gap-6 lg:gap-8 pb-4">
            {partners.map((partner, index) => (
              <div
                key={partner.name}
                className="pharmacy-card group flex-shrink-0 w-64"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Logo container */}
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 bg-muted flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} — партнёрская аптека Ferfer® в Узбекистане`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                    width={128}
                    height={128}
                    srcSet={`${partner.logo}?w=128&h=128&fit=cover 1x, ${partner.logo}?w=256&h=256&fit=cover 2x`}
                  />
                </div>

                {/* Partner name */}
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  "{partner.name}"
                </h3>

                {/* CTA Button */}
                <Button 
                  className="btn-primary w-full group-hover:scale-105 transition-transform"
                  asChild
                >
                  <a href={partner.url} target="_blank" rel="noopener noreferrer">
                    {t('partners.button')}
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" className="invisible" />
        </ScrollArea>

      </div>
    </section>
  );
};

export default PartnersSection;
