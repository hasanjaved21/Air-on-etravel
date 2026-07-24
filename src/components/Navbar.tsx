import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, Plane, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Export logo URL so other pages can use it consistently
export const LOGO_URL = "https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-6/305988730_594701648771771_5080044363702428089_n.png?stp=dst-png&cstp=mx324x324&ctp=s324x324&_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=CDiziwioodMQ7kNvwGHfZZK&_nc_oc=AdrVlPxLcOAzz1s3pg02GWfVEtaq3UDQqanzoRBdIfnlHpQm2MnDE-XDGP4Obt38VBreaW0775rNDGuRGMGimlvz&_nc_zt=23&_nc_ht=scontent.fkhi2-2.fna&_nc_gid=VFtLQcyKx-fVPTTIYdCc_Q&_nc_ss=7b2a8&oh=00_AQCzF8o9v4g8KW9tjsjFFqHmuR9dKta5nsMcYBYhKF-7Zw&oe=6A65532E";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenBookNow: () => void;
}

export default function Navbar({ activeTab, setActiveTab, onOpenBookNow }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'packages', label: 'Tour Packages' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="font-sans">
      <nav
        className={`fixed top-0 left-0 right-0 z-45 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md py-3 shadow-md border-b border-slate-100'
            : 'bg-gradient-to-b from-black/50 to-transparent py-5 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo and Brand */}
            <div 
              onClick={() => handleTabClick('home')} 
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="relative overflow-hidden bg-white rounded-full p-0.5 shadow-md flex items-center justify-center w-12 h-12 transition-transform duration-300 group-hover:scale-105">
                <img
                  src={LOGO_URL}
                  alt="Air One Travels Logo"
                  referrerPolicy="no-referrer"
                  className="w-11 h-11 object-contain rounded-full"
                />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <h1 className={`font-display font-extrabold text-lg sm:text-xl tracking-tight leading-none ${
                    isScrolled ? 'text-brand-navy-900' : 'text-white'
                  }`}>
                    AIR ONE
                  </h1>
                  <span className="text-brand-red-500 font-bold text-lg sm:text-xl leading-none">TRAVELS</span>
                </div>
                <p className={`text-[9px] uppercase tracking-widest font-mono ${
                  isScrolled ? 'text-slate-500' : 'text-slate-200'
                }`}>
                  Your Trusted Partner
                </p>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider relative transition-colors duration-200 cursor-pointer ${
                    activeTab === item.id
                      ? isScrolled ? 'text-brand-red-600' : 'text-white'
                      : isScrolled ? 'text-slate-700 hover:text-brand-red-600' : 'text-slate-200 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {activeTab === item.id && (
                    <motion.div
                      layoutId="activeTabUnderline"
                      className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full ${
                        isScrolled ? 'bg-brand-red-600' : 'bg-brand-gold'
                      }`}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Contact Phone & Book Now Action */}
            <div className="hidden lg:flex items-center gap-6">
              <a
                href="tel:+923323732416"
                className={`flex items-center gap-2 text-xs font-bold transition-colors ${
                  isScrolled ? 'text-slate-600 hover:text-brand-navy-900' : 'text-white/90 hover:text-white'
                }`}
              >
                <div className="w-8 h-8 rounded-full bg-brand-red-600/10 text-brand-red-500 flex items-center justify-center">
                  <PhoneCall size={14} />
                </div>
                <div>
                  <p className="text-[9px] uppercase text-slate-400 font-mono leading-none">Call Support</p>
                  <p className="mt-0.5">+92 332 3732416</p>
                </div>
              </a>

              <button
                onClick={onOpenBookNow}
                className="px-5 py-2.5 bg-gradient-to-r from-brand-red-600 to-brand-red-700 hover:from-brand-navy-900 hover:to-brand-navy-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg hover:shadow-brand-red-500/10 transition-all duration-300 cursor-pointer transform hover:-translate-y-0.5"
              >
                Book Now
              </button>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="md:hidden flex items-center gap-3">
              <button
                onClick={onOpenBookNow}
                className="px-3 py-1.5 bg-brand-red-600 hover:bg-brand-red-700 text-white text-[10px] font-bold uppercase tracking-wider rounded-lg shadow-md cursor-pointer"
              >
                Book
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-1.5 rounded-lg border cursor-pointer transition-colors ${
                  isScrolled
                    ? 'text-brand-navy-900 border-slate-200 hover:bg-slate-50'
                    : 'text-white border-white/20 hover:bg-white/10'
                }`}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden bg-slate-900 text-white overflow-hidden border-t border-slate-800"
            >
              <div className="px-4 pt-3 pb-6 space-y-1">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleTabClick(item.id)}
                    className={`block w-full text-left px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer ${
                      activeTab === item.id
                        ? 'bg-brand-red-600/20 text-brand-red-500 font-extrabold border-l-4 border-brand-red-600'
                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                
                {/* Mobile support indicator */}
                <div className="pt-4 mt-4 border-t border-slate-800 px-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-800 text-brand-gold flex items-center justify-center">
                    <PhoneCall size={16} />
                  </div>
                  <div>
                    <p className="text-[9px] uppercase text-slate-500 font-mono leading-none">24/7 Hotlines</p>
                    <a href="tel:+923323732416" className="text-white text-xs font-bold block mt-0.5 hover:text-brand-gold">
                      +92 332 3732416
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
