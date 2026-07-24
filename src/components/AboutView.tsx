import React from 'react';
import { Award, Compass, Eye, ShieldAlert, CheckCircle2, ChevronRight, Heart, Star, Users } from 'lucide-react';
import { motion } from 'motion/react';

export default function AboutView() {
  const stats = [
    { value: '14+', label: 'Years of Experience' },
    { value: '10k+', label: 'Happy Travelers' },
    { value: '5k+', label: 'Visa Approvals' },
    { value: '500+', label: 'Holy Tours Guided' },
    { value: '100+', label: 'Custom Tour Itineraries' },
    { value: '24/7', label: 'Support Operational' },
  ];

  const values = [
    {
      title: 'Integrity First',
      description: 'Zero hidden service fees. What we quote is what you pay, with clear refund policies and authentic hotel ratings.',
      icon: Award
    },
    {
      title: 'Obsessive Care',
      description: 'Your safety is our priority. We track your flights, prepare custom legal folders, and stand by you in case of any disruption.',
      icon: Heart
    },
    {
      title: 'Local Mastery',
      description: 'Our senior consultants have personally audited hotels in Makkah, Turkey, Dubai, and Hunza, ensuring zero quality mismatch.',
      icon: Compass
    }
  ];

  const timeline = [
    { year: '2012', title: 'Humble Foundations', desc: 'Air One Travels opens its first physical office in Blue Area, Islamabad, specializing in domestic ticketing.' },
    { year: '2016', title: 'IATA Licensing', desc: 'Officially accredited by the International Air Transport Association (IATA), linking directly with global airlines.' },
    { year: '2019', title: 'Global Visas & Tourism Expansion', desc: 'Introduced dedicated visa compliance executives, boosting success rates for Schengen, UK and Gulf applications.' },
    { year: '2022', title: 'Direct Makkah Contracts', desc: 'Secured exclusive direct allocations in five-star hotels in front of the Holy Mosques in Saudi Arabia.' },
    { year: '2026', title: 'A Decade & Beyond', desc: 'Now recognized as one of Pakistan’s premier, premium, customer-first independent travel companies.' }
  ];

  const team = [
    {
      name: 'Hasan Javed',
      role: 'Founder & Managing Director',
      bio: '18+ years of foreign flight operations. Dedicated to bringing absolute transparency and premium reliability to corporate and religious travel.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&h=300&q=80'
    },
    {
      name: 'Arslan Malik',
      role: 'Head of Visa Legal Operations',
      bio: 'Ex-embassy document analyst, managing complex application files for UK, Canada, and Schengen tourist pathways with 98% accuracy.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&h=300&q=80'
    },
    {
      name: 'Nida Fatima',
      role: 'Director of Custom Holiday Operations',
      bio: 'Bespoke itinerary architect. Personally visits global resorts annually to curate handpicked romantic and family experiences.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&h=300&q=80'
    }
  ];

  const gallery = [
    { title: 'Islamabad Blue Area HQ', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=500&q=85' },
    { title: 'Executive Lounge Meet', image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=500&q=85' },
    { title: 'Our Customer Success Desk', image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=500&q=85' }
  ];

  return (
    <div className="font-sans min-h-screen bg-white">
      {/* 1. Large Hero Image with Glassmorphism Overlay */}
      <section className="relative py-28 md:py-40 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1920&q=85"
            alt="About us backdrop"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover brightness-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-slate-900/60 to-slate-900/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <span className="text-brand-gold font-extrabold text-xs tracking-widest uppercase bg-white/10 px-4 py-1.5 rounded-full border border-white/10">
            DISCOVER OUR HISTORY
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight mt-4">
            About Air One Travels
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm md:text-base max-w-2xl mx-auto mt-4 leading-relaxed">
            Since 2012, setting the gold standard of travel consulting in Pakistan, delivering absolute safety, low-cost flight routes, and seamless visa processing.
          </p>
        </div>
      </section>

      {/* 2. Company Introduction & Narrative Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side: narrative */}
            <div className="space-y-6 text-left">
              <span className="text-brand-red-600 font-extrabold text-xs tracking-widest uppercase">
                SETTING THE PACE FOR LUXURY TRAVEL
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-brand-navy-900 tracking-tight leading-tight">
                Your Absolute Safety, Comfort & Trust is Our Standard
              </h2>
              
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                We believe that travel is not merely about arriving at a location—it is about the peace of mind that accompanies you on every leg of your journey. Established in Islamabad with a singular vision, Air One Travels has grown to become Pakistan's premier licensed travel advisory. 
              </p>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                By bypassing third-party middlemen, we secure direct airline inventories, fast-tracked embassy slots, and premium hotels adjacent to sacred landmarks and scenic destinations. Our team is trained in document compliance, ensuring you are prepared for custom checks, entry stamps, and flight transfers.
              </p>

              {/* Mission & Vision cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-brand-navy-900 font-bold font-display text-sm">
                    <CheckCircle2 size={16} className="text-brand-red-600" />
                    <span>Our Sacred Mission</span>
                  </div>
                  <p className="text-slate-500 text-[11px] leading-relaxed">
                    To deliver worry-free, transparent travel experiences that bring Families closer together and make Spiritual pilgrimages truly blessed and relaxing.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-brand-navy-900 font-bold font-display text-sm">
                    <Eye size={16} className="text-brand-gold" />
                    <span>Our Corporate Vision</span>
                  </div>
                  <p className="text-slate-500 text-[11px] leading-relaxed">
                    To pioneer state-of-the-art visual itineraries and secure lead generation, setting a benchmark for independent agencies throughout South Asia.
                  </p>
                </div>
              </div>
            </div>

            {/* Right side: visual bento grid with experience counter */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?auto=format&fit=crop&w=400&q=80"
                  alt="Travel luxury flight cabin"
                  referrerPolicy="no-referrer"
                  className="rounded-3xl object-cover h-64 w-full shadow-md"
                />
                <img
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=400&q=80"
                  alt="Travel planning luggage map"
                  referrerPolicy="no-referrer"
                  className="rounded-3xl object-cover h-64 w-full mt-8 shadow-md"
                />
              </div>

              {/* Floating Absolute Experience Badge */}
              <div className="absolute -bottom-6 left-6 bg-brand-navy-900 text-white p-6 rounded-3xl shadow-2xl border border-white/10 max-w-[200px] text-center font-display">
                <p className="text-4xl font-extrabold text-brand-gold">14+</p>
                <p className="text-[10px] uppercase font-mono tracking-wider text-slate-300 mt-1 font-bold">
                  Years Leading Travel Logistics
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Statistics Section */}
      <section className="py-16 bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-5 border border-slate-150 shadow-xs flex flex-col justify-center">
                <span className="text-3xl font-extrabold text-brand-red-600 font-display block">
                  {stat.value}
                </span>
                <span className="text-[10px] uppercase font-mono text-slate-500 tracking-wider block mt-1.5 font-bold leading-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Core Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-red-600 font-extrabold text-xs tracking-widest uppercase bg-brand-red-500/5 px-4 py-1.5 rounded-full border border-brand-red-500/10">
            OUR COMPASS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-brand-navy-900 tracking-tight mt-4 mb-16">
            The Principles We Run By
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col text-left space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-navy-900 text-brand-gold flex items-center justify-center">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-bold font-display text-brand-navy-900">{val.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{val.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Corporate Timeline Milestones */}
      <section className="py-20 bg-slate-50 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-red-600 font-extrabold text-xs tracking-widest uppercase">
              MILESTONES OF EXCELLENCE
            </span>
            <h2 className="text-3xl font-extrabold font-display text-brand-navy-900 tracking-tight mt-4">
              Our Journey Over the Decades
            </h2>
          </div>

          <div className="relative border-l-2 border-brand-navy-200 pl-6 space-y-12 ml-4">
            {timeline.map((mile, idx) => (
              <div key={idx} className="relative text-left">
                {/* Year tag circle bullet */}
                <div className="absolute -left-[35px] top-0.5 w-6 h-6 bg-brand-navy-900 border-4 border-white rounded-full flex items-center justify-center text-[8px] text-brand-gold font-bold">
                </div>
                
                <span className="text-sm font-extrabold text-brand-red-600 font-mono block">
                  {mile.year}
                </span>
                <h4 className="text-lg font-bold font-display text-brand-navy-900 mt-1">
                  {mile.title}
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed max-w-2xl">
                  {mile.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Professional Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-red-600 font-extrabold text-xs tracking-widest uppercase bg-brand-red-500/5 px-4 py-1.5 rounded-full border border-brand-red-500/10">
            THE STRATEGISTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-brand-navy-900 tracking-tight mt-4 mb-16">
            Experienced Travel Experts At Your Disposal
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((t, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md group">
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={t.image}
                    alt={t.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white text-left">
                    <p className="font-extrabold text-md font-display leading-tight">{t.name}</p>
                    <p className="text-[10px] text-brand-gold font-mono uppercase tracking-wider mt-0.5">{t.role}</p>
                  </div>
                </div>

                <div className="p-6 text-left">
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed italic">
                    "{t.bio}"
                  </p>
                  <div className="mt-5 pt-5 border-t border-slate-50 flex items-center gap-2 text-slate-400 group-hover:text-brand-red-600 transition-colors text-[10px] font-mono uppercase tracking-wider font-bold">
                    <span>Active Consultant</span>
                    <ChevronRight size={12} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Corporate Office Gallery Placeholder */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-red-600 font-extrabold text-xs tracking-widest uppercase">
            OUR SPACES
          </span>
          <h2 className="text-3xl font-extrabold font-display text-brand-navy-900 tracking-tight mt-4 mb-12">
            Visit Our Executive Office Spaces
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {gallery.map((g, idx) => (
              <div key={idx} className="relative rounded-3xl overflow-hidden h-64 group shadow">
                <img
                  src={g.image}
                  alt={g.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white text-left">
                  <h4 className="font-extrabold text-xs uppercase tracking-wider font-mono text-brand-gold">HQ GALLERY</h4>
                  <p className="font-bold text-sm sm:text-base mt-1">{g.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
