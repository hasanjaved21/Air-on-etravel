import React, { useState, useEffect } from 'react';
import { Search, Star, MapPin, Compass, SlidersHorizontal, ArrowUpDown, ShieldCheck, Sparkles, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { tourPackages } from '../data/travelData';
import { TourPackage } from '../types';

interface TourPackagesViewProps {
  onSelectPackage: (pkg: TourPackage) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function TourPackagesView({ onSelectPackage, searchQuery, setSearchQuery }: TourPackagesViewProps) {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Popular' | 'Family' | 'Honeymoon' | 'Luxury' | 'Budget'>('All');
  const [sortBy, setSortBy] = useState<'rating' | 'reviews' | 'default'>('default');
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['All', 'Popular', 'Family', 'Honeymoon', 'Luxury', 'Budget'];

  // Handle filtering
  const filteredPackages = tourPackages.filter(pkg => {
    // 1. Category check
    const matchesCategory = activeCategory === 'All' || pkg.category === activeCategory;
    
    // 2. Search query check
    const matchesSearch = 
      pkg.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // Handle sorting
  const sortedPackages = [...filteredPackages].sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'reviews') return b.reviewsCount - a.reviewsCount;
    return 0; // Default index
  });

  const handleClearFilters = () => {
    setActiveCategory('All');
    setSearchQuery('');
    setSortBy('default');
  };

  return (
    <div id="tour-packages-view" className="font-sans min-h-screen bg-slate-50">
      {/* 1. Header Banner */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-brand-navy-950 text-white">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-brand-red-800/30 rounded-full filter blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-gold font-extrabold text-xs tracking-widest uppercase bg-white/10 px-4 py-1.5 rounded-full border border-white/10">
            CATALOG ENTRANCES
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight mt-4">
            Our Premium Tour Packages
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm md:text-base max-w-2xl mx-auto mt-4 leading-relaxed">
            Unpack custom-designed itineraries complete with premium hotels, professional drivers, and direct visa processing support. Explore the packages below.
          </p>
        </div>
      </section>

      {/* 2. Interactive Filter & Search Bar Toolbar */}
      <div className="bg-white border-b border-slate-200 sticky top-[72px] z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Left: Interactive search box */}
            <div className="relative w-full lg:max-w-md">
              <Search className="absolute left-3.5 top-3.5 text-slate-400" size={16} />
              <input
                type="text"
                placeholder="Search by destination, country, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-100 pl-10 pr-4 py-3 rounded-2xl border-0 text-slate-800 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy-500 transition-all"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-3 text-xs bg-slate-200 hover:bg-slate-300 text-slate-600 rounded-full w-5 h-5 flex items-center justify-center cursor-pointer"
                >
                  ×
                </button>
              )}
            </div>

            {/* Middle: Category Tabs */}
            <div className="flex items-center gap-1 overflow-x-auto no-scrollbar w-full lg:w-auto py-1">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCategory(cat as any)}
                  className={`px-4.5 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-brand-navy-900 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat === 'All' ? 'All Themes' : cat}
                </button>
              ))}
            </div>

            {/* Right: Quick Sort */}
            <div className="flex items-center gap-3 w-full lg:w-auto justify-end">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                <ArrowUpDown size={13} />
                <span>Sort By:</span>
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-slate-100 border-none rounded-xl px-3 py-2 text-xs font-bold text-slate-700 focus:outline-none cursor-pointer bg-white"
              >
                <option value="default">Release Default</option>
                <option value="rating">Top Rated (Stars)</option>
                <option value="reviews">Popularity (Reviews)</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Package Cards Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* If no matches found */}
        {sortedPackages.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-150 p-8 max-w-md mx-auto shadow-xs">
            <Compass className="mx-auto text-slate-300 animate-spin-slow mb-4" size={48} />
            <h3 className="text-xl font-bold font-display text-brand-navy-900">No Packages Found</h3>
            <p className="text-slate-500 text-xs sm:text-sm mt-2 leading-relaxed">
              We couldn’t find any tour matches for your query. Try searching for something else or clear the active search filters.
            </p>
            <button
              onClick={handleClearFilters}
              className="mt-6 px-5 py-2.5 bg-brand-navy-900 hover:bg-brand-red-700 text-white text-xs font-bold uppercase tracking-wider rounded-xl cursor-pointer transition-all"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {sortedPackages.map((pkg) => (
              <motion.div
                layout
                key={pkg.id}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="bg-white rounded-3xl overflow-hidden shadow-md border border-slate-150 hover:border-brand-navy-200 transition-all flex flex-col justify-between group"
              >
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.destination}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  
                  {/* Badge Row Overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent p-4 flex items-end justify-between">
                    {/* Duration */}
                    <span className="text-[10px] font-extrabold text-white bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 uppercase font-mono">
                      ⏱ {pkg.duration}
                    </span>
                    {/* Category */}
                    <span className="text-[9px] font-extrabold text-white bg-brand-red-600 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {pkg.category}
                    </span>
                  </div>

                  {/* Rating Stamp */}
                  <div className="absolute top-4 right-4 bg-white/95 text-brand-navy-900 px-2.5 py-1 rounded-xl text-[10px] font-bold flex items-center gap-1 shadow">
                    <Star size={11} className="text-brand-gold fill-brand-gold" />
                    <span>{pkg.rating} ({pkg.reviewsCount})</span>
                  </div>

                  {/* Country Name Tag */}
                  <div className="absolute top-4 left-4 bg-brand-navy-950/80 backdrop-blur-md text-white px-2.5 py-1 rounded-xl text-[10px] font-bold border border-white/10 flex items-center gap-1">
                    <MapPin size={10} className="text-brand-red-500" />
                    <span>{pkg.country}</span>
                  </div>
                </div>

                {/* Info Details Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="text-md font-bold font-display text-brand-navy-900 group-hover:text-brand-red-600 transition-colors leading-snug">
                      {pkg.destination}
                    </h3>
                    
                    <p className="text-slate-500 text-[11px] leading-relaxed line-clamp-3">
                      {pkg.description}
                    </p>

                    {/* Inclusive Bullet Highlights */}
                    <div className="pt-3 border-t border-slate-50 space-y-1.5">
                      <p className="text-[10px] uppercase font-mono tracking-wider text-slate-400 font-bold">What is Included:</p>
                      <ul className="grid grid-cols-1 gap-1">
                        {pkg.included.slice(0, 3).map((inc, i) => (
                          <li key={i} className="flex items-start gap-1.5 text-[10px] text-slate-600">
                            <span className="text-emerald-500 font-bold shrink-0">✓</span>
                            <span className="leading-tight">{inc}</span>
                          </li>
                        ))}
                        {pkg.included.length > 3 && (
                          <li className="text-[9px] font-mono text-slate-400 italic">
                            + {pkg.included.length - 3} more exclusive amenities
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>

                  {/* Pricing and Booking Actions Row */}
                  <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[9px] text-slate-400 block uppercase font-mono">Total Price</span>
                      <span className="text-base font-extrabold text-brand-navy-900 font-display">
                        {pkg.price}
                      </span>
                    </div>

                    <button
                      onClick={() => onSelectPackage(pkg)}
                      className="px-4 py-2 bg-brand-navy-900 hover:bg-brand-red-600 text-white text-[10px] font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-xs hover:shadow-md"
                    >
                      Book Tour
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* 4. Trust Banner footer of packages */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        <div className="bg-slate-900 text-white rounded-3xl p-8 text-center relative overflow-hidden shadow">
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="relative z-10 space-y-4 max-w-xl mx-auto">
            <div className="w-10 h-10 rounded-full bg-white/10 text-brand-gold flex items-center justify-center mx-auto">
              <ShieldCheck size={20} />
            </div>
            <h3 className="text-lg sm:text-xl font-bold font-display">Custom Group Air Bookings</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We manage customized group ticketing for schools, trade delegations, state departments, and corporate retreats with exclusive seat reservations and dedicated lounge passes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
