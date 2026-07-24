import React, { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, MessageSquare, Check, ArrowRight, Compass, ShieldCheck } from 'lucide-react';
import { LOGO_URL } from './Navbar';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenBookNow: () => void;
}

export default function Footer({ setActiveTab, onOpenBookNow }: FooterProps) {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setEmail('');
      }, 3000);
    }
  };

  const handleLinkClick = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-navy-950 text-slate-300 font-sans border-t border-slate-800 pt-16 pb-8 relative z-10 overflow-hidden">
      {/* Visual top border styling accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-red-600 via-brand-navy-900 to-brand-red-700"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Brand & Bio */}
          <div className="space-y-5">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleLinkClick('home')}>
              <div className="bg-white rounded-full p-0.5 w-11 h-11 flex items-center justify-center">
                <img
                  src={LOGO_URL}
                  alt="Air One Travels Logo"
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 object-contain rounded-full"
                />
              </div>
              <div>
                <h3 className="font-display font-extrabold text-white text-md tracking-tight leading-none">
                  AIR ONE <span className="text-brand-red-500">TRAVELS</span>
                </h3>
                <p className="text-[9px] uppercase tracking-wider text-slate-400 font-mono mt-0.5">EST. Since 2012</p>
              </div>
            </div>
            
            <p className="text-slate-400 text-xs leading-relaxed">
              Air One Travels is your ISO-certified global travel provider, specializing in premium flight bookings, direct tourist visas, bespoke honeymoon retreats, and holy Umrah packages.
            </p>

            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="https://www.facebook.com/air1travels/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-brand-red-700 hover:text-white hover:border-transparent transition-all text-slate-300 cursor-pointer"
                title="Follow on Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.instagram.com/aironepk/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-gradient-to-tr hover:from-amber-500 hover:to-pink-600 hover:text-white hover:border-transparent transition-all text-slate-300 cursor-pointer"
                title="Follow on Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://wa.me/923323732416"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-emerald-600 hover:text-white hover:border-transparent transition-all text-slate-300 cursor-pointer"
                title="Contact via WhatsApp"
              >
                <MessageSquare size={16} />
              </a>
            </div>

            <div className="pt-2 flex items-center gap-2 text-[11px] text-slate-400 bg-slate-900/50 p-2.5 rounded-xl border border-slate-800 max-w-xs">
              <ShieldCheck size={16} className="text-brand-gold shrink-0" />
              <span>Registered IATA travel agent license 94-0329.</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display font-extrabold text-sm uppercase tracking-wider text-white border-l-2 border-brand-red-600 pl-2.5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              {[
                { id: 'home', label: 'Home Page' },
                { id: 'about', label: 'About Company' },
                { id: 'services', label: 'Our Services' },
                { id: 'packages', label: 'Premium Packages' },
                { id: 'contact', label: 'Contact Helpdesk' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className="hover:text-white hover:translate-x-1.5 transition-all flex items-center gap-1.5 text-slate-400 text-left cursor-pointer"
                  >
                    <ArrowRight size={12} className="text-brand-red-500 shrink-0" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Specialized Services */}
          <div className="space-y-4">
            <h4 className="font-display font-extrabold text-sm uppercase tracking-wider text-white border-l-2 border-brand-red-600 pl-2.5">
              Specialized Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              {[
                { label: 'International Flight Booking' },
                { label: 'Guaranteed Visit & Tourist Visas' },
                { label: 'Premium Holy Umrah Packages' },
                { label: 'Exquisite Honeymoon Getaways' },
                { label: 'Corporate MICE Logistics' },
              ].map((srv, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleLinkClick('services')}
                    className="hover:text-white hover:translate-x-1.5 transition-all flex items-center gap-1.5 text-slate-400 text-left cursor-pointer"
                  >
                    <Compass size={12} className="text-brand-gold shrink-0" />
                    <span>{srv.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter & Contact */}
          <div className="space-y-4">
            <h4 className="font-display font-extrabold text-sm uppercase tracking-wider text-white border-l-2 border-brand-red-600 pl-2.5">
              Travel Newsletter
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Subscribe to get secret hot air tickets discounts, visa rule alerts, and flash weekend package deals.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2 pt-1.5">
              <div className="flex rounded-xl overflow-hidden bg-slate-900 border border-slate-800 focus-within:border-brand-navy-500 p-1">
                <input
                  type="email"
                  required
                  placeholder="Enter email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent border-none text-xs w-full px-2.5 py-1.5 text-white placeholder-slate-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-brand-red-600 hover:bg-brand-navy-700 text-white p-2 rounded-lg transition-all cursor-pointer flex items-center justify-center shrink-0"
                >
                  {isSubscribed ? <Check size={14} /> : <ArrowRight size={14} />}
                </button>
              </div>
              {isSubscribed && (
                <p className="text-[10px] text-emerald-400 font-medium">
                  ✓ Successfully signed up! Welcome aboard.
                </p>
              )}
            </form>

            <div className="pt-2 text-xs text-slate-400 space-y-2 border-t border-slate-900">
              <p className="flex items-start gap-2">
                <MapPin size={13} className="text-brand-red-500 shrink-0 mt-0.5" />
                <span className="text-[11px] text-slate-300 leading-snug">
                  Office # 806, zulekha trade centre, Alamgir Rd, next to Hmb bank sharfabad branch, CP & Berar Society CP & Berar CHS, Karachi
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={13} className="text-brand-red-500 shrink-0" />
                <a href="tel:02134129921" className="hover:text-white transition-colors">Tel: 0213 4129921</a>
              </p>
              <p className="flex items-center gap-2">
                <MessageSquare size={13} className="text-emerald-500 shrink-0" />
                <a href="https://wa.me/923323732416" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Cell / WhatsApp: +92 332 3732416</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={13} className="text-brand-red-500 shrink-0" />
                <span>info@aironepk.com</span>
              </p>
            </div>
          </div>
        </div>

        {/* Corporate Office Quick Address Banner */}
        <div className="mb-10 bg-slate-900 rounded-2xl p-5 border border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-red-500/10 border border-brand-red-500/20 text-brand-red-500 flex items-center justify-center shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <div className="flex items-center gap-2 text-white">
                  <span className="font-extrabold text-xs uppercase font-mono tracking-wider text-brand-gold">Karachi Head Office</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                </div>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Office # 806, zulekha trade centre, Alamgir Rd, next to Hmb bank sharfabad branch, CP & Berar Society CP & Berar CHS, Karachi, Pakistan
                </p>
              </div>
            </div>

            <div className="shrink-0">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Air+1+Travel+%26+Tours+Alamgir+Rd+CP+%26+Berar+Society+Karachi"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-800 hover:bg-brand-red-600 text-white rounded-xl text-xs font-bold transition-all border border-slate-700 cursor-pointer"
              >
                <span>View on Maps</span>
                <MapPin size={12} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between text-[11px] text-slate-500 font-mono">
          <p>© 2026 Air One Travels Pvt Ltd. All international rights reserved.</p>
          <div className="flex gap-4 mt-3 md:mt-0">
            <button onClick={() => handleLinkClick('about')} className="hover:text-slate-300 cursor-pointer">Terms & Conditions</button>
            <button onClick={() => handleLinkClick('contact')} className="hover:text-slate-300 cursor-pointer">Privacy Protocol</button>
            <span className="text-slate-700">|</span>
            <span className="text-slate-500">IATA, SECP & DTS Certified Agency</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
