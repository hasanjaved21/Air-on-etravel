import React from 'react';
import { MapPin, Phone, MessageSquare, Compass, Navigation } from 'lucide-react';

export default function GoogleMapSection() {
  const mapAddress = "Office # 806, Zulekha Trade Centre, Alamgir Rd, next to HMB Bank Sharfabad branch, CP & Berar Society CP & Berar CHS, Karachi, Pakistan";
  const plusCode = "V3M7+MG CP & Berar CHS, Karachi, Pakistan";
  const encodedLocation = encodeURIComponent("Air 1 Travel & Tours, Alamgir Rd, CP & Berar Society, Karachi, Pakistan");
  const embedUrl = `https://maps.google.com/maps?q=${encodedLocation}&t=&z=16&ie=UTF8&iwloc=&output=embed`;
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`;

  return (
    <section className="relative bg-slate-900 text-white font-sans py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-red-500/10 border border-brand-red-500/20 text-brand-red-400 text-xs font-mono font-bold tracking-widest uppercase mb-3">
              <Compass size={14} className="text-brand-gold animate-spin" style={{ animationDuration: '12s' }} />
              <span>Head Office Location</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display text-white">
              Visit Our Air One Travels Desk
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-red-600 hover:bg-brand-red-700 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg cursor-pointer shrink-0"
            >
              <Navigation size={14} />
              <span>Get Directions</span>
            </a>
          </div>
        </div>

        {/* Grid: Map Embed & Location Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Interactive Google Map iframe */}
          <div className="lg:col-span-8 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl h-[380px] sm:h-[420px] relative bg-slate-950">
            <iframe
              title="Air One Travels Karachi Office Map"
              src={embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'contrast(1.05) brightness(0.95)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full rounded-3xl"
            />
          </div>

          {/* Location Info Card */}
          <div className="lg:col-span-4 bg-slate-950/80 rounded-3xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              
              {/* Address detail */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-brand-red-500/10 border border-brand-red-500/20 text-brand-red-500 flex items-center justify-center shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase font-mono tracking-wider text-brand-gold">Karachi Head Office</h4>
                  <p className="text-slate-200 text-xs sm:text-sm mt-1.5 leading-relaxed font-medium">
                    {mapAddress}
                  </p>
                  <span className="inline-block text-[10px] text-slate-400 font-mono mt-1 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                    Plus Code: {plusCode}
                  </span>
                </div>
              </div>

              {/* Phone Hotlines */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-slate-800/80">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <MessageSquare size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase font-mono tracking-wider text-slate-400">Direct Contact Hotlines</h4>
                  <a
                    href="https://wa.me/923323732416"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white text-xs sm:text-sm font-bold block mt-1 hover:text-emerald-400 transition-colors"
                  >
                    Cell / WhatsApp: +92 332 3732416
                  </a>
                  <a
                    href="tel:02134129921"
                    className="text-slate-300 text-xs sm:text-sm block mt-0.5 hover:text-brand-gold transition-colors font-semibold"
                  >
                    Telephone: 0213 4129921
                  </a>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-slate-800/80">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase font-mono tracking-wider text-slate-400">Desk Timings</h4>
                  <p className="text-slate-200 text-xs mt-1 font-medium">
                    Monday – Saturday: 09:30 AM – 07:30 PM
                  </p>
                  <p className="text-slate-400 text-[11px] mt-0.5">
                    Sunday: Closed (WhatsApp Support Active)
                  </p>
                </div>
              </div>

            </div>

            {/* Direct Google Maps button */}
            <div className="pt-4 border-t border-slate-800/80">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-4 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white rounded-xl border border-slate-700 text-xs font-bold text-center block transition-all cursor-pointer"
              >
                Open in Google Maps App ↗
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
