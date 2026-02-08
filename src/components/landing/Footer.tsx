import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const navLinks = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.about', href: '#about' },
    { key: 'nav.benefits', href: '#benefits' },
    { key: 'nav.buy', href: '#partners' },
    { key: 'nav.faq', href: '#faq' },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/meddec.uz?igsh=NXF4eXVvcWNsemRs', label: 'Instagram' },
    { icon: Send, href: '#', label: 'Telegram' },
  ];

  return (
    <footer role="contentinfo" aria-label="Ferfer® — контакты и информация" className="bg-foreground text-background relative overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container-main relative z-10 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a href="#home" className="inline-flex items-center gap-2 mb-6">
              <span className="text-2xl font-bold text-primary">Ферфер</span>
              <span className="text-2xl font-bold">®</span>
            </a>
            <p className="text-background/70 max-w-md mb-4 leading-relaxed">
              {t('footer.description')}
            </p>
            <p className="text-background/50 text-sm mb-6 italic">
              {t('footer.warning')}
            </p>
            <p className="text-primary text-sm font-medium mb-6">
              {t('footer.pharmevo')}
            </p>
            
            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-11 h-11 rounded-xl bg-background/10 hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-bold mb-6">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-lg font-bold mb-6">{t('footer.contact')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-primary" />
                <span className="text-background/70">{t('footer.address')}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+998942103322" className="text-background/70 hover:text-background transition-colors">
                  +998 94 210 33 22
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:info@ferfer.uz" className="text-background/70 hover:text-background transition-colors">
                  info@ferfer.uz
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-background/60 text-sm">
              © {new Date().getFullYear()} {t('footer.rights')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
