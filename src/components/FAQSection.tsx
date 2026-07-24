import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { faqs } from '../data/travelData';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Visa Assistance', 'Flight Bookings', 'Tour Packages', 'Umrah & Hajj'];

  const filteredFaqs = activeCategory === 'All'
    ? faqs
    : faqs.filter(f => f.category === activeCategory);

  const toggleAccordion = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div className="text-center mb-12">
          <span className="text-brand-red-600 font-extrabold text-xs tracking-widest uppercase bg-brand-red-500/5 px-4 py-1.5 rounded-full border border-brand-red-500/10">
            KNOWLEDGE BASE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-brand-navy-900 tracking-tight mt-4">
            Frequently Asked Travel Queries
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-3">
            Find immediate answers regarding international and domestic visit visas, airline cancellation rules, and customized tour operations.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveCategory(cat);
                setOpenIndex(null);
              }}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-brand-navy-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? 'bg-slate-50 border-brand-navy-200 shadow-sm'
                    : 'bg-white border-slate-150 hover:bg-slate-50'
                }`}
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 flex items-center justify-between text-left font-display font-bold text-sm sm:text-base text-brand-navy-900 cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="text-brand-red-500 shrink-0" size={18} />
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp size={18} className="text-brand-navy-600 shrink-0" />
                  ) : (
                    <ChevronDown size={18} className="text-slate-400 shrink-0" />
                  )}
                </button>

                {/* Body Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
