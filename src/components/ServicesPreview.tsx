import React from 'react';
import { Plane, FileCheck, Hotel, Compass, Moon, ShieldCheck, ArrowRight, Server } from 'lucide-react';
import { motion } from 'motion/react';
import { services } from '../data/travelData';

interface ServicesPreviewProps {
  setActiveTab: (tab: string) => void;
}

export default function ServicesPreview({ setActiveTab }: ServicesPreviewProps) {
  // Select the 6 core preview services
  const coreServiceIds = ['srv-intl-flight', 'srv-visit-visa', 'srv-hotel', 'srv-custom-tours', 'srv-umrah', 'srv-insurance'];
  const previewServices = services.filter(srv => coreServiceIds.includes(srv.id));

  // Match icon names with Lucide icons
  const getIcon = (name: string) => {
    switch (name) {
      case 'PlaneTakeoff': return Plane;
      case 'FileCheck': return FileCheck;
      case 'Hotel': return Hotel;
      case 'Compass': return Compass;
      case 'Moon': return Moon;
      case 'ShieldCheck': return ShieldCheck;
      default: return Compass;
    }
  };

  const handleLearnMore = () => {
    setActiveTab('services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden font-sans">
      {/* Overlay background styling */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand-navy-800/40 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-brand-red-800/30 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-gold font-extrabold text-xs tracking-widest uppercase bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
            OUR SPECIALIZED CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight mt-4">
            Professional Travel Logistics
          </h2>
          <p className="text-slate-400 text-sm mt-4 leading-relaxed">
            With over a decade of industry authorization and robust direct airline integrations, we offer seamless execution for corporate, leisure, and holy pilgrimages.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {previewServices.map((srv) => {
            const Icon = getIcon(srv.iconName);
            return (
              <motion.div
                key={srv.id}
                whileHover={{ scale: 1.02 }}
                className="bg-slate-800/80 backdrop-blur-md p-8 rounded-3xl border border-slate-700 hover:border-brand-gold/30 hover:bg-slate-800 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-brand-navy-900/60 border border-slate-700 flex items-center justify-center text-brand-gold mb-6 group-hover:text-white group-hover:bg-brand-red-600 group-hover:border-transparent transition-all">
                    <Icon size={22} />
                  </div>

                  <h3 className="text-lg font-bold font-display text-white group-hover:text-brand-gold transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-slate-400 text-xs mt-3 leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-700/50 flex items-center justify-between">
                  <button
                    onClick={handleLearnMore}
                    className="text-xs font-bold text-brand-gold hover:text-white flex items-center gap-1 cursor-pointer"
                  >
                    <span>Learn More</span>
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                  </button>
                  <span className="text-[10px] text-slate-500 font-mono">AUTHORIZED</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={handleLearnMore}
            className="px-8 py-3.5 bg-gradient-to-r from-brand-red-600 to-brand-red-700 hover:from-white hover:to-white hover:text-brand-navy-950 text-white text-xs font-extrabold uppercase tracking-widest rounded-2xl transition-all shadow-lg cursor-pointer inline-flex items-center gap-2"
          >
            <span>Explore All 14 Services</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
