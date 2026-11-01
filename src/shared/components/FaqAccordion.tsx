'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FaqItem } from '../types';
import { GENERAL_FAQS } from '../constants';

interface FaqAccordionProps {
  faqs?: FaqItem[];
  title?: string;
  subtitle?: string;
  className?: string;
  brandPrimary?: string;
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({
  faqs = GENERAL_FAQS,
  title = 'Frequently Asked Questions',
  subtitle = 'Find answers to common queries regarding account setup, odds, withdrawals, and 24/7 WhatsApp support.',
  className = '',
  brandPrimary = 'text-amber-400'
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className={`w-full max-w-4xl mx-auto py-12 px-4 ${className}`} aria-labelledby="faq-heading">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-neutral-300 mb-3">
          <HelpCircle size={14} className={brandPrimary} />
          <span>HELP & SUPPORT</span>
        </div>
        <h2 id="faq-heading" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 text-sm text-neutral-400 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>

      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                isOpen 
                  ? 'bg-neutral-900/90 border-neutral-700/80 shadow-lg' 
                  : 'bg-neutral-900/40 border-neutral-800/80 hover:bg-neutral-900/60'
              }`}
            >
              <button
                onClick={() => toggleItem(idx)}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                aria-expanded={isOpen}
              >
                <span className="font-semibold text-sm sm:text-base pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 shrink-0 text-neutral-400 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-white' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-white/5 pt-3 animate-fadeIn">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

