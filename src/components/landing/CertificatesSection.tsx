import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { X, ZoomIn } from 'lucide-react';
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';

import gmpCertificate from '@/assets/certificates/gmp-certificate.jpg';
import ruxsatnoma from '@/assets/certificates/ruxsatnoma.jpg';
import sanitaryCertificate from '@/assets/certificates/sanitary-certificate.jpg';

const CertificatesSection: React.FC = () => {
  const { t } = useLanguage();
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);

  const certificates = [
    {
      image: gmpCertificate,
      titleKey: 'certificates.cert1.title',
    },
    {
      image: ruxsatnoma,
      titleKey: 'certificates.cert2.title',
    },
    {
      image: sanitaryCertificate,
      titleKey: 'certificates.cert3.title',
    },
  ];

  const handleViewCertificate = (image: string) => {
    setSelectedCertificate(image);
  };

  const handleCloseModal = () => {
    setSelectedCertificate(null);
  };

  // Prevent right-click context menu
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    return false;
  };

  return (
    <section id="certificates" className="section-padding bg-secondary/30">
      <div className="container-main">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('certificates.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            {t('certificates.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-border/30 flex flex-col items-center group cursor-pointer"
              onClick={() => handleViewCertificate(cert.image)}
              onContextMenu={handleContextMenu}
            >
              <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden mb-4 bg-muted">
                <img 
                  src={cert.image} 
                  alt={t(cert.titleKey)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onContextMenu={handleContextMenu}
                  draggable={false}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-foreground text-center">
                {t(cert.titleKey)}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Preview Modal */}
      <Dialog open={!!selectedCertificate} onOpenChange={handleCloseModal}>
        <DialogContent 
          className="max-w-4xl w-[95vw] max-h-[90vh] p-2 overflow-hidden"
          onContextMenu={handleContextMenu}
        >
          <div 
            className="w-full h-full overflow-auto flex items-center justify-center"
            onContextMenu={handleContextMenu}
          >
            {selectedCertificate && (
              <img
                src={selectedCertificate}
                alt="Certificate"
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
                onContextMenu={handleContextMenu}
                draggable={false}
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CertificatesSection;
