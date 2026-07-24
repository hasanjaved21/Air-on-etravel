import React, { useState } from 'react';
import { 
  PlaneTakeoff, Plane, FileCheck, Globe, GraduationCap, Briefcase, 
  Hotel, Compass, Heart, Building2, ShieldCheck, Sparkles, Moon, Sun, 
  ArrowRight, Shield, Star, Clock 
} from 'lucide-react';
import { motion } from 'motion/react';
import { services } from '../data/travelData';
import { ServiceItem } from '../types';

interface ServicesViewProps {
  onInquireService: (serviceName: string) => void;
}

export default function ServicesView({ onInquireService }: ServicesViewProps) {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Flights' | 'Visas' | 'Holidays' | 'Pilgrimage' | 'Corporate'>('All');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const categories = ['All', 'Flights', 'Visas', 'Holidays', 'Pilgrimage', 'Corporate'];

  const filteredServices = activeCategory === 'All'
    ? services
    : services.filter(srv => srv.category === activeCategory);

  const getIcon = (name: string) => {
    switch (name) {
      case 'PlaneTakeoff': return PlaneTakeoff;
      case 'Plane': return Plane;
      case 'FileCheck': return FileCheck;
      case 'Globe': return Globe;
      case 'GraduationCap': return GraduationCap;
      case 'Briefcase': return Briefcase;
      case 'Hotel': return Hotel;
      case 'Compass': return Compass;
      case 'Heart': return Heart;
      case 'Building2': return Building2;
      case 'ShieldCheck': return ShieldCheck;
      case 'Sparkles': return Sparkles;
      case 'Moon': return Moon;
      case 'Sun': return Sun;
      default: return Compass;
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <div className="font-sans min-h-screen bg-slate-50">
      {/* 1. Header Banner */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-brand-navy-950 text-white">
        {/* Background Gradients */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand-navy-800/40 rounded-full filter blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-gold font-extrabold text-xs tracking-widest uppercase bg-white/10 px-4 py-1.5 rounded-full border border-white/10">
            GLOBAL CAPABILITIES
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight mt-4">
            Our Premium Travel Services
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm md:text-base max-w-2xl mx-auto mt-4 leading-relaxed">
            From direct airline ticketing and complex student visa guidance, to golden-tier holy Umrah accommodations. We handle your global logistics with precision.
          </p>
        </div>
      </section>

      {/* 2. Category Tab Filter Bar */}
      <div className="bg-white border-b border-slate-200 sticky top-[72px] z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveCategory(cat as any);
                  setExpandedId(null);
                }}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-brand-navy-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat === 'All' ? 'All 14 Services' : cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Main Service Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((srv) => {
            const Icon = getIcon(srv.iconName);
            const isExpanded = expandedId === srv.id;

            return (
              <motion.div
                layout
                key={srv.id}
                className={`bg-white rounded-3xl p-8 border border-slate-150 shadow-xs flex flex-col justify-between transition-all relative ${
                  isExpanded ? 'ring-2 ring-brand-navy-700 md:col-span-2 lg:col-span-3' : 'hover:-translate-y-1 hover:shadow-md'
                }`}
              >
                {/* Visual Category Label */}
                <span className="absolute top-8 right-8 text-[9px] font-extrabold uppercase tracking-widest font-mono text-slate-400 bg-slate-100 px-2.5 py-1 rounded">
                  {srv.category}
                </span>

                <div className={`${isExpanded ? 'grid grid-cols-1 lg:grid-cols-12 gap-8' : ''}`}>
                  {/* Left block / main summary */}
                  <div className={`${isExpanded ? 'lg:col-span-5' : ''}`}>
                    {/* Icon Circle */}
                    <div className="w-12 h-12 rounded-2xl bg-brand-red-500/10 border border-brand-red-500/20 text-brand-red-600 flex items-center justify-center mb-6">
                      <Icon size={22} />
                    </div>

                    <h3 className="text-xl font-extrabold font-display text-brand-navy-900 leading-tight">
                      {srv.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed">
                      {srv.description}
                    </p>

                    {/* Standard Quick features if not expanded */}
                    {!isExpanded && (
                      <ul className="mt-4 space-y-1.5 text-[11px] text-slate-500">
                        {srv.features.slice(0, 2).map((f, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <span className="text-brand-gold">✔</span>
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Expanded block with long description & specific benefits */}
                  {isExpanded && (
                    <div className="lg:col-span-7 space-y-5 lg:border-l lg:border-slate-150 lg:pl-8 text-left">
                      <div>
                        <h4 className="text-xs font-extrabold uppercase font-mono tracking-wider text-slate-400">Detailed Operations</h4>
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-1.5">
                          {srv.longDescription}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xs font-extrabold uppercase font-mono tracking-wider text-slate-400">Core Service Features</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                          {srv.features.map((feature, i) => (
                            <div key={i} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                              <span className="text-emerald-500 font-bold">✓</span>
                              <span className="text-slate-700 text-xs font-medium leading-tight">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer buttons row */}
                <div className={`pt-6 mt-6 border-t border-slate-100 flex items-center justify-between ${
                  isExpanded ? 'w-full' : ''
                }`}>
                  <button
                    onClick={() => toggleExpand(srv.id)}
                    className="text-xs font-bold text-brand-navy-900 hover:text-brand-red-600 cursor-pointer flex items-center gap-1"
                  >
                    <span>{isExpanded ? 'Collapse Details' : 'Learn More & Features'}</span>
                    <ArrowRight size={13} className={`transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                  </button>

                  <button
                    onClick={() => onInquireService(srv.title)}
                    className="px-4.5 py-2 bg-brand-navy-900 hover:bg-brand-red-700 text-white text-[11px] font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer"
                  >
                    Inquire Now
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 4. Quality Standard Accord */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        <div className="bg-brand-navy-900 text-white rounded-3xl p-8 md:p-12 relative overflow-hidden shadow">
          {/* Decorative background lighting */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full filter blur-2xl pointer-events-none"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center relative z-10 text-left">
            <div className="md:col-span-2 space-y-3">
              <span className="text-brand-gold font-extrabold text-[10px] uppercase font-mono tracking-widest">
                CERTIFIED SERVICE DECK
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight">
                Have a Complex Travel Request?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
                Our senior managers cater to corporate group flights, diplomatic visa approvals, charter flights, and luxury custom itineraries. Get in touch with us directly for bespoke planning.
              </p>
            </div>

            <div className="text-left md:text-right">
              <a
                href="tel:+923323732416"
                className="inline-flex px-6 py-3.5 bg-brand-red-600 hover:bg-white hover:text-brand-navy-950 text-white text-xs font-extrabold uppercase tracking-widest rounded-xl transition-all shadow-lg cursor-pointer"
              >
                Call Hotline Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
