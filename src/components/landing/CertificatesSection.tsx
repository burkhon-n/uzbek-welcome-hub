import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { FileText, Award, Shield, X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const CertificatesSection: React.FC = () => {
  const { t } = useLanguage();
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);

  const certificates = [
    {
      icon: Award,
      titleKey: 'certificates.cert1.title',
      descKey: 'certificates.cert1.desc',
      pdfUrl: '/certificates/certificate-1.pdf',
    },
    {
      icon: Shield,
      titleKey: 'certificates.cert2.title',
      descKey: 'certificates.cert2.desc',
      pdfUrl: '/certificates/certificate-2.pdf',
    },
    {
      icon: FileText,
      titleKey: 'certificates.cert3.title',
      descKey: 'certificates.cert3.desc',
      pdfUrl: '/certificates/certificate-3.pdf',
    },
  ];

  const handleViewCertificate = (pdfUrl: string) => {
    setSelectedCertificate(pdfUrl);
  };

  const handleCloseModal = () => {
    setSelectedCertificate(null);
  };

  // Prevent right-click context menu on the PDF viewer
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
          {certificates.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-border/30 flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3">
                  {t(cert.titleKey)}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t(cert.descKey)}
                </p>
                <button 
                  onClick={() => handleViewCertificate(cert.pdfUrl)}
                  className="mt-4 sm:mt-6 text-primary font-medium text-sm hover:underline flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  {t('certificates.view')}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* PDF Preview Modal */}
      <Dialog open={!!selectedCertificate} onOpenChange={handleCloseModal}>
        <DialogContent 
          className="max-w-4xl w-[95vw] h-[85vh] p-0 overflow-hidden"
          onContextMenu={handleContextMenu}
        >
          <DialogHeader className="p-4 pb-0">
            <DialogTitle className="text-lg font-semibold">
              {t('certificates.title')}
            </DialogTitle>
          </DialogHeader>
          <div 
            className="flex-1 w-full h-full min-h-0 p-4 pt-2"
            onContextMenu={handleContextMenu}
          >
            {selectedCertificate && (
              <iframe
                src={`${selectedCertificate}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`}
                className="w-full h-full rounded-lg border border-border"
                title="Certificate PDF"
                style={{ 
                  minHeight: 'calc(85vh - 80px)',
                  pointerEvents: 'auto'
                }}
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CertificatesSection;
