import React, { useState, useEffect } from 'react';
import { Navigation, ArrowRight, ShieldCheck, Star, Compass } from 'lucide-react';
import { tourPackages } from '../data/travelData';
import { TourPackage } from '../types';

interface HeroProps {
  onOpenBookNow: () => void;
  setActiveTab: (tab: string) => void;
  onSearchQuery?: (destination: string) => void;
}

function CountUp({ end, prefix = '', suffix = '', duration = 2000 }: { end: number; prefix?: string; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <span>{prefix}{count.toLocaleString()}{suffix}</span>;
}

export default function Hero({ onOpenBookNow, setActiveTab, onSearchQuery }: HeroProps) {

  const [searchValue, setSearchValue] = useState('');

  // Top featured trending packages for a quick clean card row
  const featuredPackages = tourPackages.filter(p => 
    p.id === 'pkg-dubai' || p.id === 'pkg-turkey' || p.id === 'pkg-baku'
  );

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue) {
      if (onSearchQuery) {
        onSearchQuery(searchValue);
      }
      setActiveTab('packages');
      setTimeout(() => {
        const elem = document.getElementById('tour-packages-view');
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      setActiveTab('packages');
    }
  };

  const handlePackageClick = (pkg: TourPackage) => {
    if (onSearchQuery) onSearchQuery(pkg.destination);
    setActiveTab('packages');
    setTimeout(() => {
      const elem = document.getElementById('tour-packages-view');
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <section className="relative min-h-[640px] lg:min-h-[720px] bg-slate-900 text-white font-sans overflow-hidden flex flex-col justify-between pt-12 pb-10 sm:pt-16 sm:pb-14 px-4 sm:px-6 lg:px-8">
      {/* Background Image Layer with Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=2000&q=85"
          alt="Air One Travel Destinations"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-950/95 via-brand-navy-950/75 to-brand-navy-950/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950 via-transparent to-brand-navy-950/50"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 my-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Headline & Search Area (Left / Main) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Tag / Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-white text-xs font-semibold tracking-wider uppercase font-mono">
              <span className="w-2 h-2 rounded-full bg-brand-red-500 animate-pulse"></span>
              <span>IATA Certified & Licensed Travel Partner</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display leading-[1.1] tracking-tight text-white">
              Explore the World with{' '}
              <span className="text-brand-red-500 font-black drop-shadow-lg">
                Air One Travels
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed font-sans">
              Your trusted travel agency for worldwide flight reservations, visa processing, tailored tour packages, and holy Umrah pilgrimages.
            </p>

            {/* Quick Search Widget */}
            <form onSubmit={handleSearchSubmit} className="pt-2 max-w-xl">
              <div className="bg-white/10 backdrop-blur-md p-2 rounded-2xl border border-white/20 shadow-2xl flex flex-col sm:flex-row items-center gap-2">
                <div className="flex items-center gap-3 px-4 py-2.5 flex-grow w-full">
                  <Navigation size={18} className="text-brand-gold shrink-0" />
                  <input
                    type="text"
                    placeholder="Where would you like to go? (e.g., Dubai, Turkey, Baku)..."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    className="bg-transparent text-white placeholder-slate-300 text-xs sm:text-sm focus:outline-none w-full"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-brand-red-600 hover:bg-brand-red-700 text-white font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all cursor-pointer shadow-lg shrink-0 flex items-center justify-center gap-2"
                >
                  <span>Search Packages</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </form>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenBookNow}
                className="px-8 py-4 bg-brand-red-600 hover:bg-white hover:text-brand-navy-900 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-xl transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                Inquire Now
              </button>
              <button
                onClick={() => {
                  setActiveTab('packages');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl backdrop-blur-md transition-all cursor-pointer"
              >
                Browse Tour Packages
              </button>
            </div>
          </div>

          {/* Featured Destinations Preview Panel (Right Side) */}
          <div className="lg:col-span-5">
            <div className="bg-brand-navy-950/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <h3 className="font-display font-extrabold text-base text-white">Popular Destinations</h3>
                  <p className="text-[11px] text-slate-400">Handcrafted featured packages</p>
                </div>
                <button
                  onClick={() => {
                    setActiveTab('packages');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-[10px] font-mono uppercase tracking-wider text-brand-gold hover:underline cursor-pointer flex items-center gap-1"
                >
                  View All <ArrowRight size={12} />
                </button>
              </div>

              <div className="space-y-3">
                {featuredPackages.map((pkg) => (
                  <div
                    key={pkg.id}
                    onClick={() => handlePackageClick(pkg)}
                    className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all cursor-pointer group"
                  >
                    <img
                      src={pkg.image}
                      alt={pkg.destination}
                      referrerPolicy="no-referrer"
                      className="w-14 h-14 rounded-xl object-cover shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-xs sm:text-sm text-white group-hover:text-brand-red-500 transition-colors truncate">
                        {pkg.destination}
                      </h4>
                      <p className="text-[11px] text-slate-400 mt-0.5 flex items-center gap-1">
                        <Compass size={11} className="text-brand-gold" />
                        <span>{pkg.duration}</span>
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-xs sm:text-sm font-extrabold text-brand-red-500">{pkg.price}</p>
                      <span className="text-[9px] font-mono text-slate-400 uppercase">Book Now</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1">
                  <ShieldCheck size={14} className="text-emerald-400" />
                  Guaranteed Best Fare
                </span>
                <span className="flex items-center gap-1">
                  <Star size={12} className="text-brand-gold fill-brand-gold" />
                  4.9/5 Rating
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Integrated Stats Trust Bar at the base of the Hero section */}
      <div className="max-w-7xl mx-auto w-full relative z-10 pt-8 border-t border-white/10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold font-display text-white">
              <CountUp end={15000} suffix="+" />
            </div>
            <p className="text-xs text-slate-400 uppercase tracking-wider font-mono">Satisfied Travelers</p>
          </div>
          <div className="space-y-1 sm:border-l border-white/10 sm:pl-4">
            <div className="text-3xl sm:text-4xl font-extrabold font-display text-white">
              <CountUp end={99} suffix="%" />
            </div>
            <p className="text-xs text-slate-400 uppercase tracking-wider font-mono">Visa Success Rate</p>
          </div>
          <div className="space-y-1 sm:border-l border-white/10 sm:pl-4">
            <div className="text-3xl sm:text-4xl font-extrabold font-display text-white">
              <CountUp end={14} suffix="+ Years" />
            </div>
            <p className="text-xs text-slate-400 uppercase tracking-wider font-mono">Industry Experience</p>
          </div>
        </div>
      </div>

    </section>
  );
}
