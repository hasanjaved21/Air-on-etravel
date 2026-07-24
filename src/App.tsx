import React, { useState, useEffect } from 'react';
import Navbar, { LOGO_URL } from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import PopularDestinations from './components/PopularDestinations';
import ServicesPreview from './components/ServicesPreview';
import Testimonials from './components/Testimonials';
import FAQSection from './components/FAQSection';
import LatestOffers from './components/LatestOffers';
import PartnerAirlines from './components/PartnerAirlines';
import AboutView from './components/AboutView';
import ServicesView from './components/ServicesView';
import TourPackagesView from './components/TourPackagesView';
import ContactView from './components/ContactView';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import InquiryModal from './components/InquiryModal';
import GoogleMapSection from './components/GoogleMapSection';
import { TourPackage } from './types';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isBookNowOpen, setIsBookNowOpen] = useState<boolean>(false);
  const [selectedPackage, setSelectedPackage] = useState<TourPackage | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Quick initial load for clean UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenGeneralBookNow = () => {
    setSelectedPackage(null);
    setIsBookNowOpen(true);
  };

  const handleOpenSpecificBookNow = (pkg: TourPackage) => {
    setSelectedPackage(pkg);
    setIsBookNowOpen(true);
  };

  const handleInquireFromService = (serviceName: string) => {
    setSelectedPackage({
      id: 'custom-service',
      destination: serviceName,
      country: 'Requested Service Desk',
      duration: 'Flexible',
      price: 'Custom quote requested',
      image: '',
      rating: 5,
      reviewsCount: 0,
      category: 'Luxury',
      included: [],
      description: `Inquiry regarding special operations of ${serviceName}`,
      highlights: []
    });
    setIsBookNowOpen(true);
  };

  const handleSearchFromHero = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between font-sans selection:bg-brand-red-600 selection:text-white">
      {/* 1. High-End Splash Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-55 bg-brand-navy-950 flex flex-col items-center justify-center text-white"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              {/* Spinning Logo Frame */}
              <div className="relative mb-6">
                <div className="w-24 h-24 rounded-full bg-white p-1 flex items-center justify-center shadow-2xl relative">
                  <img
                    src={LOGO_URL}
                    alt="Air One Loading"
                    referrerPolicy="no-referrer"
                    className="w-22 h-22 object-contain rounded-full"
                  />
                </div>
                <div className="absolute -inset-2 border-2 border-dashed border-brand-gold rounded-full animate-spin" style={{ animationDuration: '10s' }}></div>
              </div>

              {/* Text Loading Branding */}
              <h2 className="text-2xl font-extrabold tracking-tight font-display text-white">
                AIR ONE <span className="text-brand-red-500">TRAVELS</span>
              </h2>
              <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mt-2">
                Your Trusted Travel Partner
              </p>

              {/* Progress Line */}
              <div className="w-32 h-1 bg-slate-800 rounded-full overflow-hidden mt-6 relative">
                <div className="absolute left-0 top-0 bottom-0 bg-brand-red-600 w-1/2 rounded-full animate-pulse" style={{ animationDuration: '1.5s', width: '100%' }}></div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main App Layout */}
      {!isLoading && (
        <>
          {/* Sticky Responsive Header Navbar */}
          <Navbar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            onOpenBookNow={handleOpenGeneralBookNow}
          />

          {/* Active View Router Content Container */}
          <main className="flex-grow pt-[72px] relative z-20">
            {activeTab === 'home' && (
              <div className="animate-fade-in">
                {/* Immersive Hero with floating badges */}
                <Hero
                  onOpenBookNow={handleOpenGeneralBookNow}
                  setActiveTab={setActiveTab}
                  onSearchQuery={handleSearchFromHero}
                />

                {/* Partner Airlines Marquee */}
                <PartnerAirlines />

                {/* Why Choose Air One Travels 6 cards */}
                <WhyChooseUs />

                {/* Popular Destinations 6 cards */}
                <PopularDestinations
                  onSelectPackage={handleOpenSpecificBookNow}
                  setActiveTab={setActiveTab}
                />

                {/* Limited-time Coupon Deals */}
                <LatestOffers onOpenBookNow={handleOpenGeneralBookNow} />

                {/* Services Preview Grid */}
                <ServicesPreview setActiveTab={setActiveTab} />

                {/* Custom sliding reviews Testimonials */}
                <Testimonials />

                {/* Interactive FAQ Accordion */}
                <FAQSection />
              </div>
            )}

            {activeTab === 'about' && (
              <div className="animate-fade-in">
                <AboutView />
              </div>
            )}

            {activeTab === 'services' && (
              <div className="animate-fade-in">
                <ServicesView onInquireService={handleInquireFromService} />
              </div>
            )}

            {activeTab === 'packages' && (
              <div className="animate-fade-in">
                <TourPackagesView
                  onSelectPackage={handleOpenSpecificBookNow}
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                />
              </div>
            )}

            {activeTab === 'contact' && (
              <div className="animate-fade-in">
                <ContactView />
              </div>
            )}
          </main>

          {/* Interactive Google Map Section before Footer */}
          <GoogleMapSection />

          {/* Unified Footer */}
          <Footer
            setActiveTab={setActiveTab}
            onOpenBookNow={handleOpenGeneralBookNow}
          />

          {/* Floating WhatsApp Action chat trigger */}
          <WhatsAppButton />

          {/* Smooth Scroll back to top button */}
          <ScrollToTop />

          {/* Global Booking Inquiry Modal */}
          <InquiryModal
            isOpen={isBookNowOpen}
            onClose={() => setIsBookNowOpen(false)}
            selectedPackage={selectedPackage}
          />
        </>
      )}
    </div>
  );
}
