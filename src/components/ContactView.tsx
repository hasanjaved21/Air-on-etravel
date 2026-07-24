import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Facebook, Instagram, MessageSquare, CheckCircle2, ShieldCheck, Database } from 'lucide-react';
import { motion } from 'motion/react';

export default function ContactView() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    destination: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      // Build lead entry
      const newLead = {
        id: 'inq-' + Date.now(),
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        destination: formData.destination || 'General consultation',
        message: formData.message,
        timestamp: new Date().toLocaleString(),
        status: 'New'
      };

      // Store in localStorage
      const existing = localStorage.getItem('airone_inquiries');
      const inquiriesList = existing ? JSON.parse(existing) : [];
      inquiriesList.unshift(newLead);
      localStorage.setItem('airone_inquiries', JSON.stringify(inquiriesList));

      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      destination: '',
      message: ''
    });
    setIsSuccess(false);
  };

  return (
    <div className="font-sans min-h-screen bg-slate-50">
      {/* 1. Header Banner */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-brand-navy-950 text-white">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-brand-navy-800/40 rounded-full filter blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-gold font-extrabold text-xs tracking-widest uppercase bg-white/10 px-4 py-1.5 rounded-full border border-white/10">
            CONNECT WITH US
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight mt-4">
            Contact Our Travel Desk
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm md:text-base max-w-2xl mx-auto mt-4 leading-relaxed">
            Ready for your next adventure? Send us your requirements and get a customized flight, visa or package quote within 15 minutes.
          </p>
        </div>
      </section>

      {/* 2. Split Layout Contact Form & Info Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Side: Professional Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-10 shadow-md border border-slate-150 flex flex-col justify-between">
            {!isSuccess ? (
              <>
                <div className="mb-8">
                  <span className="text-brand-red-600 font-extrabold text-xs tracking-widest uppercase block">
                    INBOUND INQUIRY ENGINE
                  </span>
                  <h3 className="text-2xl font-bold font-display text-brand-navy-900 mt-2">
                    Submit Your Travel Request
                  </h3>
                  <p className="text-slate-500 text-xs mt-1.5 leading-relaxed">
                    Fields marked with * are strictly required. Our certified consultants will review your visa eligibility or flight parameters instantly.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name and Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-slate-700 text-xs font-extrabold uppercase tracking-wider mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g., Muhammad Ali"
                        className="w-full bg-slate-50 px-4 py-3 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-brand-navy-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-700 text-xs font-extrabold uppercase tracking-wider mb-2">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g., +92 332 3732416"
                        className="w-full bg-slate-50 px-4 py-3 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-brand-navy-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email and Destination */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-slate-700 text-xs font-extrabold uppercase tracking-wider mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g., ali@domain.com"
                        className="w-full bg-slate-50 px-4 py-3 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-brand-navy-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-700 text-xs font-extrabold uppercase tracking-wider mb-2">Interested Destination</label>
                      <input
                        type="text"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        placeholder="e.g., Turkey, Makkah Umrah, Dubai flight..."
                        className="w-full bg-slate-50 px-4 py-3 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-brand-navy-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-slate-700 text-xs font-extrabold uppercase tracking-wider mb-2">Additional Specifications *</label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Detail your date flexibility, required hotel star ratings, baggage limits, or family visa constraints..."
                      className="w-full bg-slate-50 px-4 py-3 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-brand-navy-500 transition-colors"
                    ></textarea>
                  </div>

                  {/* Send Inquiry Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-gradient-to-r from-brand-navy-900 to-brand-navy-700 hover:from-brand-red-700 hover:to-brand-red-600 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg hover:shadow-xl cursor-pointer flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <span>Send Custom Inquiry</span>
                        <Send size={13} />
                      </>
                    )}
                  </button>
                </form>
              </>
            ) : (
              /* Success State */
              <div className="text-center py-16 flex flex-col items-center justify-center h-full">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6 animate-bounce">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-bold font-display text-brand-navy-900">Inquiry Logged Successfully!</h3>
                <p className="text-slate-600 text-xs sm:text-sm mt-2 max-w-md mx-auto leading-relaxed">
                  Thank you for submitting your travel parameters! Your inquiry has been processed and saved inside our database. 
                </p>

                <div className="mt-8 p-4 bg-slate-50 rounded-2xl text-left border border-slate-100 text-xs text-slate-500 space-y-1 w-full max-w-sm">
                  <p><strong>Customer Name:</strong> {formData.name}</p>
                  <p><strong>Destination:</strong> {formData.destination || 'General'}</p>
                  <p><strong>Inquiry ID:</strong> {Date.now()}</p>
                  <div className="flex items-center gap-2 text-brand-navy-900 font-bold mt-3 pt-3 border-t border-slate-200">
                    <Database size={14} className="text-brand-gold animate-pulse" />
                    <span>Submitted to Leads Desk (top-left panel).</span>
                  </div>
                </div>

                <button
                  onClick={handleResetForm}
                  className="mt-8 px-6 py-3 bg-brand-navy-900 hover:bg-brand-navy-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            )}
          </div>

          {/* Right Side: Corporate Information Column */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            
            {/* 1. Details Box */}
            <div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 space-y-6">
              <h3 className="text-lg font-bold font-display uppercase tracking-widest text-brand-gold">
                Corporate Contacts
              </h3>

              <div className="space-y-4">
                {/* Office address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-brand-red-500 flex items-center justify-center shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold uppercase font-mono text-slate-400">Head Office Location</h4>
                    <p className="text-slate-300 text-xs sm:text-sm mt-1 leading-relaxed">
                      Office # 806, zulekha trade centre, Alamgir Rd, next to Hmb bank sharfabad branch, CP & Berar Society CP & Berar CHS, Karachi, Pakistan.
                    </p>
                  </div>
                </div>

                {/* Support hotline */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-brand-red-500 flex items-center justify-center shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold uppercase font-mono text-slate-400">Direct Support Hotlines</h4>
                    <a href="tel:+923323732416" className="text-white text-xs sm:text-sm font-bold block mt-1 hover:text-brand-gold transition-colors">
                      Cell / WhatsApp: +92 332 3732416
                    </a>
                    <a href="tel:02134129921" className="text-white text-xs sm:text-sm font-bold block mt-0.5 hover:text-brand-gold transition-colors">
                      Telephone: 0213 4129921
                    </a>
                  </div>
                </div>

                {/* Email desk */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-brand-red-500 flex items-center justify-center shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold uppercase font-mono text-slate-400">Corporate Inquiries Email</h4>
                    <a href="mailto:info@aironepk.com" className="text-slate-300 text-xs sm:text-sm block mt-1 hover:text-white transition-colors">
                      info@aironepk.com
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-brand-red-500 flex items-center justify-center shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold uppercase font-mono text-slate-400">Desk Operational Hours</h4>
                    <p className="text-slate-300 text-xs sm:text-sm mt-1">
                      Monday - Saturday: 09:00 AM - 07:00 PM
                    </p>
                    <p className="text-slate-500 text-[10px] italic mt-0.5">
                      * Emergency WhatsApp hotline is active 24/7.
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels Header */}
              <div className="pt-6 border-t border-white/10 space-y-3">
                <h4 className="text-[10px] uppercase font-mono tracking-widest text-slate-400 font-bold">
                  Connect on Social Medias
                </h4>
                <div className="flex gap-2.5">
                  <a
                    href="https://www.facebook.com/air1travels/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-brand-red-700 hover:text-white hover:border-transparent transition-all cursor-pointer"
                  >
                    <Facebook size={16} />
                  </a>
                  <a
                    href="https://www.instagram.com/aironepk/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-gradient-to-tr hover:from-amber-500 hover:to-pink-600 hover:text-white hover:border-transparent transition-all cursor-pointer"
                  >
                    <Instagram size={16} />
                  </a>
                  <a
                    href="https://wa.me/923323732416"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-emerald-600 hover:text-white hover:border-transparent transition-all cursor-pointer"
                  >
                    <MessageSquare size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* 2. Interactive Map Box */}
            <div className="bg-white rounded-3xl p-6 border border-slate-150 shadow-xs space-y-4 flex-1 flex flex-col justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-ping"></span>
                <span className="text-xs uppercase font-mono tracking-wider font-extrabold text-brand-navy-900">
                  Karachi CP & Berar CHS Map
                </span>
              </div>

              {/* Google map iframe iframe block */}
              <div className="bg-slate-50 border border-slate-100 rounded-2xl h-44 relative overflow-hidden">
                <iframe
                  title="Contact View Map"
                  src="https://maps.google.com/maps?q=Air%201%20Travel%20%26%20Tours%2C%20Alamgir%20Rd%2C%20CP%20%26%20Berar%20Society%2C%20Karachi%2C%20Pakistan&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  className="w-full h-full"
                />
              </div>

              <div className="flex items-center gap-2 text-[10px] text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-100 leading-normal">
                <ShieldCheck size={16} className="text-brand-gold shrink-0" />
                <span>Licensed Travel Advisory with Security Exchange Commission Pakistan (SECP).</span>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
