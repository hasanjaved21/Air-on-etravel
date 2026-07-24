import React from 'react';
import { TicketPercent, Moon, Headphones, ShieldCheck, Award, Star, Clock, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden font-sans border-t border-slate-200/60">
      {/* Decorative subtle vector grids */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#003580_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-red-600 font-extrabold text-xs tracking-widest uppercase bg-brand-red-500/5 px-4 py-1.5 rounded-full border border-brand-red-500/10">
            THE AIR ONE STANDARD
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-brand-navy-900 tracking-tight mt-4">
            Why Discerning Travelers Choose Air One Travels
          </h2>
          <p className="text-slate-600 text-sm mt-4 leading-relaxed">
            We don’t just book tickets. We engineer seamless journeys, leveraging deep industry contracts, 24/7 operations, and specialized legal expertise to safeguard your itineraries.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Flight Deals with Foreground Clear Image */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800 flex flex-col justify-between group overflow-hidden"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
                  <TicketPercent size={24} className="text-brand-red-500" />
                </div>
                <span className="text-[10px] uppercase font-mono tracking-widest bg-brand-red-600 px-3.5 py-1 rounded-full text-white font-bold shadow-xs">
                  Wholesale Inventories
                </span>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-extrabold font-display text-white">
                Exclusive Airline Wholesale Flight Deals
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-2.5 leading-relaxed">
                Leveraging decades of certified contracts, we hold unique offline flight inventories and wholesale bulk seat allocations that consistently beat major global OTA search engines on rates.
              </p>

              {/* Foreground Clear Image Card Frame */}
              <div className="mt-5 relative rounded-2xl overflow-hidden border border-white/20 shadow-lg group-hover:border-brand-red-500/50 transition-colors">
                <img
                  src="https://dubai-immo.com/wp-content/uploads/2024/10/emirates-histoire-compagnie-aerienne.png"
                  alt="Exclusive Airline Wholesale Flight Deals"
                  referrerPolicy="no-referrer"
                  className="w-full h-48 sm:h-56 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-semibold text-white">
                  <span className="bg-brand-navy-950/90 backdrop-blur-md px-3 py-1 rounded-lg text-[11px]">
                    Direct Carrier API Integration
                  </span>
                  <span className="text-brand-gold font-bold text-[11px] font-mono">Guaranteed Lowest Fares</span>
                </div>
              </div>

              {/* Sub-features list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 pt-5 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <span className="text-brand-red-500 font-bold">✓</span>
                  <span>Emirates, Qatar, Turkish Priority Rates</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <span className="text-brand-red-500 font-bold">✓</span>
                  <span>Direct API Ticketing - No Middlemen</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <span className="text-brand-red-500 font-bold">✓</span>
                  <span>Flexible Rescheduling Support</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <span className="text-brand-red-500 font-bold">✓</span>
                  <span>Group Travel Special Dividends</span>
                </div>
              </div>
            </div>

            <div className="pt-5 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider font-semibold text-slate-300">
                <Award size={14} className="text-brand-gold" />
                IATA Accredited Standard
              </span>
              <span className="text-brand-gold font-bold text-xs">Offline Bulk Seat Access</span>
            </div>
          </motion.div>

          {/* Card 2: Umrah Services with Foreground Clear Image */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="bg-brand-navy-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-brand-navy-800 flex flex-col justify-between group overflow-hidden"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
                  <Moon size={24} className="text-brand-gold" />
                </div>
                <span className="text-[10px] uppercase font-mono tracking-widest bg-emerald-600 px-3.5 py-1 rounded-full text-white font-bold shadow-xs">
                  Guided Pilgrimages
                </span>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-extrabold font-display text-white">
                Umrah & Hajj Services Guided by Scholars
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-2.5 leading-relaxed">
                Perform your sacred obligations with ultimate peace of mind. We specialize in custom-tailored Umrah routes featuring 5★ direct Clock Tower hotels in Makkah and cozy accommodations near Al-Nabawi Gate in Madinah.
              </p>

              {/* Foreground Clear Image Card Frame */}
              <div className="mt-5 relative rounded-2xl overflow-hidden border border-white/20 shadow-lg group-hover:border-emerald-500/50 transition-colors">
                <img
                  src="https://images.unsplash.com/photo-1633546707050-88e2b545831c?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGthYWJhfGVufDB8fDB8fHww"
                  alt="Holy Kaaba Makkah - Umrah Packages"
                  referrerPolicy="no-referrer"
                  className="w-full h-48 sm:h-56 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-semibold text-white">
                  <span className="bg-brand-navy-950/90 backdrop-blur-md px-3 py-1 rounded-lg text-[11px]">
                    Direct Clock Tower Makkah Stays
                  </span>
                  <span className="text-emerald-400 font-bold text-[11px] font-mono">Scholarly Guidance Included</span>
                </div>
              </div>

              {/* Sub-features list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 pt-5 border-t border-white/10 text-xs text-slate-200">
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-brand-red-500 font-bold" />
                  <span>Makkah Clock Tower Stays</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-brand-red-500 font-bold" />
                  <span>24/7 Ground Coordinators</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-brand-gold font-bold">✓</span>
                  <span>Approved Nusuk Visa Processing</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-brand-gold font-bold">✓</span>
                  <span>Guided Historical Ziyarat Tours</span>
                </div>
              </div>
            </div>

            <div className="pt-5 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider font-semibold text-slate-300">
                <Star size={14} className="text-brand-gold fill-brand-gold" />
                Premium Certified Escort Desk
              </span>
              <span className="text-emerald-400 font-bold text-xs">5★ VIP Accommodations</span>
            </div>
          </motion.div>

        </div>

        {/* Bottom Support & Certification Bar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* 24/7 Helpline Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex items-center gap-5 hover:border-brand-red-500 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-brand-red-500/10 border border-brand-red-500/20 flex items-center justify-center text-brand-red-600 shrink-0">
              <Headphones size={22} />
            </div>
            <div>
              <h4 className="text-base font-bold font-display text-brand-navy-900">
                24/7 Support & Emergency Desk
              </h4>
              <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                Our hotlines and WhatsApp channels are staffed round the clock to resolve flight changes, delays, or immediate hotel requirements.
              </p>
            </div>
          </div>

          {/* Trusted Agency Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex items-center gap-5 hover:border-brand-navy-900 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 shrink-0">
              <ShieldCheck size={22} />
            </div>
            <div>
              <h4 className="text-base font-bold font-display text-brand-navy-900">
                Licensed & Certified Travel Agency
              </h4>
              <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                With over 14+ years of active field operations, we are officially authorized by IATA, DTS, and SECP for secure travel execution.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
