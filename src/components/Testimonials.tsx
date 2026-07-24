import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, Award, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { testimonials } from '../data/travelData';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto scroll effect every 4 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const activeReview = testimonials[currentIndex];

  // Get user initials for avatar-free display
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((part) => part[0])
      .join('')
      .toUpperCase();
  };

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden font-sans border-t border-slate-200/60">
      <div className="absolute top-1/2 left-4 w-72 h-72 bg-brand-red-500/5 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 right-4 w-72 h-72 bg-brand-navy-500/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Title block */}
        <div className="mb-12">
          <span className="text-brand-red-600 font-extrabold text-xs tracking-widest uppercase bg-brand-red-500/10 px-4 py-1.5 rounded-full border border-brand-red-500/20">
            CLIENT SATISFACTION INDEX
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-brand-navy-900 mt-4">
            Trusted by Thousands of Happy Pilgrims & Holidaymakers
          </h2>
        </div>

        {/* Testimonial slider body with auto-scroll pause on hover */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative bg-white rounded-3xl shadow-xl border border-slate-200/80 p-8 md:p-12 mb-8 transition-all"
        >
          {/* Big Quote Accent */}
          <div className="absolute -top-6 left-10 text-slate-100 p-2 bg-white rounded-full border border-slate-200 shadow-sm">
            <Quote size={32} className="text-brand-gold fill-brand-gold" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeReview.id}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="space-y-6"
            >
              {/* Star Ratings */}
              <div className="flex items-center justify-center gap-1">
                {Array.from({ length: activeReview.rating }).map((_, idx) => (
                  <Star key={idx} size={18} className="text-brand-gold fill-brand-gold" />
                ))}
              </div>

              {/* Message text */}
              <blockquote className="text-base sm:text-lg md:text-xl text-slate-800 italic font-medium leading-relaxed">
                "{activeReview.text}"
              </blockquote>

              {/* Reviewer Meta Details without image */}
              <div className="flex items-center justify-center gap-3.5 pt-4">
                <div className="w-11 h-11 rounded-full bg-brand-navy-950 text-brand-gold font-extrabold flex items-center justify-center text-xs tracking-wider shadow-sm shrink-0 border border-brand-navy-700 font-mono">
                  {getInitials(activeReview.name)}
                </div>
                <div className="text-left">
                  <h4 className="font-extrabold text-brand-navy-900 text-sm sm:text-base font-display leading-tight">
                    {activeReview.name}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-mono mt-0.5">
                    {activeReview.location} • <strong className="text-brand-red-600 font-semibold">{activeReview.packageName}</strong>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls & Dot Indicators */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-100">
            {/* Dot indicators */}
            <div className="flex items-center gap-1.5">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx ? 'w-8 bg-brand-red-600' : 'w-2.5 bg-slate-200 hover:bg-slate-300'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Index Counter */}
            <span className="text-[11px] text-slate-400 font-mono hidden sm:inline">
              Review {currentIndex + 1} of {testimonials.length} (Auto-advancing)
            </span>

            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-100 flex items-center justify-center cursor-pointer transition-colors active:scale-95"
                title="Previous testimonial"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-brand-navy-900 text-white hover:bg-brand-red-700 flex items-center justify-center cursor-pointer transition-colors active:scale-95 shadow-xs"
                title="Next testimonial"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Security badges summary */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-[10px] sm:text-xs text-slate-500">
          <div className="flex items-center gap-1.5 bg-white py-1.5 px-3.5 rounded-full border border-slate-200 shadow-2xs">
            <Award size={14} className="text-brand-gold" />
            <span className="font-semibold">99.6% Customer Positive Feedback Rate</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white py-1.5 px-3.5 rounded-full border border-slate-200 shadow-2xs">
            <span className="text-emerald-500 font-bold">✔</span>
            <span className="font-semibold">Verified Social Media Review Logs</span>
          </div>
        </div>
      </div>
    </section>
  );
}

