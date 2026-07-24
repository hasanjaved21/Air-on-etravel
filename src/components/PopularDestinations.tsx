import React from 'react';
import { Star, MapPin, ArrowUpRight, Compass } from 'lucide-react';
import { motion } from 'motion/react';
import { tourPackages } from '../data/travelData';
import { TourPackage } from '../types';

interface PopularDestinationsProps {
  onSelectPackage: (pkg: TourPackage) => void;
  setActiveTab: (tab: string) => void;
}

export default function PopularDestinations({ onSelectPackage, setActiveTab }: PopularDestinationsProps) {
  // Let's filter out the top 6 popular destinations for the preview
  const previewPackages = tourPackages.filter(pkg => 
    ['pkg-dubai', 'pkg-turkey', 'pkg-thailand', 'pkg-malaysia', 'pkg-saudi', 'pkg-baku'].includes(pkg.id)
  );

  const handleExploreMore = () => {
    setActiveTab('packages');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-xl text-left">
            <span className="text-brand-red-600 font-extrabold text-xs tracking-widest uppercase bg-brand-red-500/5 px-4 py-1.5 rounded-full border border-brand-red-500/10">
              POPULAR GLOBAL ENTRANCES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-brand-navy-900 tracking-tight mt-4">
              Explore Our Most Requested Destinations
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-3">
              Handpicked hotels, fully pre-arranged excursions, and verified visa facilitation. Start planning your dream getaway now.
            </p>
          </div>

          <button
            onClick={handleExploreMore}
            className="mt-6 md:mt-0 px-6 py-3 bg-gradient-to-r from-brand-navy-900 to-brand-navy-700 hover:from-brand-red-700 hover:to-brand-red-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer flex items-center gap-1 shrink-0"
          >
            <span>View All Packages</span>
            <ArrowUpRight size={14} />
          </button>
        </div>

        {/* Destination Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {previewPackages.map((pkg) => (
            <motion.div
              key={pkg.id}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl overflow-hidden shadow-md border border-slate-100 hover:border-brand-navy-100 transition-all flex flex-col group"
            >
              {/* Thumbnail Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.destination}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                
                {/* Overlay shadow to read country */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent"></div>

                {/* Badges */}
                <div className="absolute top-4 left-4 bg-brand-navy-950/80 backdrop-blur-md px-3.5 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-wider border border-white/10 flex items-center gap-1">
                  <MapPin size={11} className="text-brand-red-500" />
                  <span>{pkg.country}</span>
                </div>

                <div className="absolute top-4 right-4 bg-brand-gold px-3 py-1 rounded-full text-[10px] font-extrabold text-brand-navy-950 flex items-center gap-1 shadow">
                  <Star size={11} className="fill-brand-navy-950" />
                  <span>{pkg.rating}</span>
                </div>

                {/* Duration Tag */}
                <div className="absolute bottom-4 left-4 text-white text-xs font-semibold drop-shadow-md">
                  ⏱ {pkg.duration}
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold font-display text-brand-navy-900 group-hover:text-brand-red-600 transition-colors">
                    {pkg.destination}
                  </h3>
                  <p className="text-slate-600 text-xs mt-2 line-clamp-2">
                    {pkg.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase font-mono">Starting From</span>
                    <span className="text-lg font-extrabold text-brand-navy-900 font-display">
                      {pkg.price}
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectPackage(pkg)}
                    className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-brand-red-600 hover:text-white border border-brand-red-600/20 hover:bg-brand-red-600 rounded-xl transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <span>View Details</span>
                    <Compass size={12} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
