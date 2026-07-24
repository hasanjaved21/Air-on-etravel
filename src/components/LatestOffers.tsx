import React, { useState } from 'react';
import { Tag, Calendar, Copy, Check, MessageSquare, Ticket, Sparkles, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { promoOffers } from '../data/travelData';

interface LatestOffersProps {
  onOpenBookNow: () => void;
}

export default function LatestOffers({ onOpenBookNow }: LatestOffersProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2200);
  };

  // Custom premium theme mapping per promo
  const getOfferTheme = (id: string) => {
    switch (id) {
      case 'o1':
        return {
          cardBg: 'bg-gradient-to-br from-emerald-950 via-slate-900 to-brand-navy-950',
          border: 'border-emerald-500/30 hover:border-emerald-400',
          badgeBg: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
          accentText: 'text-brand-gold',
          btnBg: 'bg-emerald-600 hover:bg-emerald-500 text-white',
          glow: 'from-emerald-500/10'
        };
      case 'o2':
        return {
          cardBg: 'bg-gradient-to-br from-brand-navy-950 via-slate-900 to-brand-red-950',
          border: 'border-brand-red-500/30 hover:border-brand-red-400',
          badgeBg: 'bg-brand-red-500/15 text-brand-red-300 border-brand-red-500/30',
          accentText: 'text-amber-400',
          btnBg: 'bg-brand-red-600 hover:bg-brand-red-500 text-white',
          glow: 'from-brand-red-500/10'
        };
      default:
        return {
          cardBg: 'bg-gradient-to-br from-slate-900 via-brand-navy-900 to-slate-950',
          border: 'border-amber-500/30 hover:border-amber-400',
          badgeBg: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
          accentText: 'text-brand-gold',
          btnBg: 'bg-amber-500 hover:bg-amber-400 text-slate-950 font-black',
          glow: 'from-amber-500/10'
        };
    }
  };

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden font-sans border-t border-slate-200/60">
      {/* Decorative background grid */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#003580_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-brand-red-600 font-extrabold text-xs tracking-widest uppercase bg-brand-red-500/10 px-4 py-1.5 rounded-full border border-brand-red-500/20">
            <Sparkles size={13} className="text-brand-gold" />
            <span>FLASH DEALS & SAVINGS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-brand-navy-900 tracking-tight mt-4">
            Exclusive Limited-Time Travel Vouchers
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed">
            Unlock instant savings on land packages, flight bookings, and holy Umrah trips. Copy your promotional voucher code and claim your discount on inquiry.
          </p>
        </div>

        {/* Premium Coupon Ticket Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {promoOffers.map((promo) => {
            const theme = getOfferTheme(promo.id);
            const isCopied = copiedId === promo.id;

            return (
              <motion.div
                key={promo.id}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`relative rounded-3xl p-7 ${theme.cardBg} text-white border ${theme.border} shadow-2xl flex flex-col justify-between group overflow-hidden transition-all`}
              >
                {/* Perforated Ticket Side Cutouts */}
                <div className="absolute -left-3.5 top-1/2 -translate-y-1/2 w-7 h-7 bg-slate-50 rounded-full border border-slate-200 shadow-inner z-20 pointer-events-none"></div>
                <div className="absolute -right-3.5 top-1/2 -translate-y-1/2 w-7 h-7 bg-slate-50 rounded-full border border-slate-200 shadow-inner z-20 pointer-events-none"></div>

                {/* Decorative radial lighting */}
                <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${theme.glow} to-transparent rounded-full filter blur-2xl pointer-events-none`}></div>

                {/* Top Voucher Header */}
                <div className="relative z-10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] uppercase font-mono font-bold tracking-wider border ${theme.badgeBg}`}>
                      <Ticket size={12} />
                      {promo.destination}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] font-mono uppercase text-emerald-400 font-bold tracking-wider">
                      <ShieldCheck size={12} />
                      Verified
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold font-display leading-tight text-white group-hover:text-amber-300 transition-colors">
                    {promo.title}
                  </h3>

                  {/* Main Discount Headline */}
                  <div className="pt-2 pb-1">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 block font-semibold">
                      Discount Value
                    </span>
                    <p className={`text-2xl sm:text-3xl font-black font-display tracking-tight ${theme.accentText} drop-shadow-md`}>
                      {promo.discount}
                    </p>
                  </div>
                </div>

                {/* Dashed Separator Line (Perforated Line) */}
                <div className="my-5 relative z-10 border-b-2 border-dashed border-white/20"></div>

                {/* Coupon Copy & Inquiry Action */}
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between text-[11px] text-slate-300 font-mono">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-amber-400" />
                      {promo.expiry}
                    </span>
                    <span className="text-slate-400 font-semibold uppercase text-[9px] tracking-wider">
                      Official Voucher
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    {/* Copy Box */}
                    <button
                      onClick={() => handleCopyCode(promo.code, promo.id)}
                      className="flex-1 bg-white/10 hover:bg-white/20 active:bg-white/25 transition rounded-2xl px-4 py-3 text-xs font-mono font-bold flex items-center justify-between cursor-pointer border border-white/20 shadow-inner group/btn"
                      title="Click to copy coupon code"
                    >
                      <span className="text-slate-300 group-hover/btn:text-white transition-colors">
                        CODE: <span className="text-white font-extrabold tracking-widest">{promo.code}</span>
                      </span>
                      {isCopied ? (
                        <span className="flex items-center gap-1 text-emerald-400 text-[11px] font-extrabold">
                          <Check size={15} />
                          COPIED
                        </span>
                      ) : (
                        <span className="text-amber-400 group-hover/btn:scale-110 transition-transform">
                          <Copy size={15} />
                        </span>
                      )}
                    </button>

                    {/* Quick Inquiry CTA */}
                    <button
                      onClick={onOpenBookNow}
                      className={`${theme.btnBg} transition-all rounded-2xl px-4 py-3 text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer shadow-lg hover:shadow-xl shrink-0 transform active:scale-95`}
                      title="Apply voucher in booking inquiry"
                    >
                      <MessageSquare size={15} />
                      <span className="hidden sm:inline uppercase text-[11px] tracking-wider">Claim</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
