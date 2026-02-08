import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQSection: React.FC = () => {
  const { t } = useLanguage();

  const faqs = [
    { question: 'faq.q1', answer: 'faq.a1' },
    { question: 'faq.q2', answer: 'faq.a2' },
    { question: 'faq.q3', answer: 'faq.a3' },
    { question: 'faq.q4', answer: 'faq.a4' },
    { question: 'faq.q6', answer: 'faq.a6' },
  ];

  return (
    <section id="faq" aria-label="Часто задаваемые вопросы о Ferfer®" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />

      <div className="container-main relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            {t('faq.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('faq.subtitle')}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-2xl px-6 shadow-sm hover:shadow-md transition-shadow duration-300 data-[state=open]:shadow-lg data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left text-lg font-semibold py-6 hover:no-underline hover:text-primary transition-colors">
                  {t(faq.question)}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {t(faq.answer)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
