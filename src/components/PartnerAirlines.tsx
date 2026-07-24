import React from 'react';
import { Award } from 'lucide-react';

export default function PartnerAirlines() {
  const airlines = [
    {
      name: 'Emirates',
      code: 'EK • UAE',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Emirates_banner_logo.svg/3840px-Emirates_banner_logo.svg.png'
    },
    {
      name: 'Qatar Airways',
      code: 'QR • Qatar',
      logo: 'https://d21buns5ku92am.cloudfront.net/69647/images/634083-QR-Logo-Horizontal-White-92a7ae-medium-1765966477.jpg'
    },
    {
      name: 'Saudi Airlines',
      code: 'SV • KSA',
      logo: 'https://images.seeklogo.com/logo-png/26/1/saudia-airlines-logo-png_seeklogo-268083.png'
    },
    {
      name: 'Turkish Airlines',
      code: 'TK • Turkey',
      logo: 'https://images.seeklogo.com/logo-png/36/1/turkish-airlines-logo-png_seeklogo-366077.png'
    },
    {
      name: 'Gulf Air',
      code: 'GF • Bahrain',
      logo: 'https://1000logos.net/wp-content/uploads/2021/04/Gulf-Air-logo.png'
    },
    {
      name: 'PIA',
      code: 'PK • Pakistan',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1gEe7Z0guHAmKxoA7H4dizYAy1w0VSMO7uV2DQcf73xl1UFcF7muKN7Q&s=10'
    },
    {
      name: 'Fly Jinnah',
      code: '9P • Pakistan',
      logo: 'https://crystalpng.com/wp-content/uploads/2025/10/fly-jinnah-logo.png'
    },
    {
      name: 'AirSial',
      code: 'PF • Pakistan',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8bik3YV5wZXLPpo9UP7wgOau9953W12oDVfAMrz7wnIOPLVoXOs7jBbk&s=10'
    },
    {
      name: 'Serene Air',
      code: 'ER • Pakistan',
      logo: 'https://images.seeklogo.com/logo-png/48/2/sereneair-logo-png_seeklogo-485545.png'
    }
  ];

  return (
    <section className="py-14 bg-slate-50 border-t border-b border-slate-200/60 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <div className="flex items-center justify-center gap-2">
          <Award size={16} className="text-brand-gold" />
          <span className="text-xs uppercase font-mono tracking-widest text-slate-500 font-extrabold">
            OFFICIAL IATA AUTHORIZED AIRLINE TICKETING AGENT & GLOBAL CARRIER PARTNER
          </span>
        </div>
      </div>

      {/* Infinite Scrolling Logo Marquee */}
      <div className="relative overflow-hidden w-full py-3">
        {/* Soft edge gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

        <div className="animate-marquee flex items-center gap-8 sm:gap-10">
          {/* First loop set */}
          {airlines.map((item, idx) => (
            <div
              key={`a-${idx}`}
              className="bg-white border border-slate-200 rounded-2xl px-6 py-4 flex items-center gap-5 shadow-xs hover:shadow-md transition-all shrink-0 h-20 min-w-[250px]"
            >
              <img
                src={item.logo}
                alt={item.name}
                referrerPolicy="no-referrer"
                className="h-10 max-w-[130px] object-contain shrink-0"
              />
              <div className="border-l border-slate-200 pl-4">
                <p className="font-extrabold text-sm text-brand-navy-900 tracking-tight whitespace-nowrap">
                  {item.name}
                </p>
                <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
                  {item.code}
                </p>
              </div>
            </div>
          ))}

          {/* Second loop set for seamless continuous marquee */}
          {airlines.map((item, idx) => (
            <div
              key={`b-${idx}`}
              className="bg-white border border-slate-200 rounded-2xl px-6 py-4 flex items-center gap-5 shadow-xs hover:shadow-md transition-all shrink-0 h-20 min-w-[250px]"
            >
              <img
                src={item.logo}
                alt={item.name}
                referrerPolicy="no-referrer"
                className="h-10 max-w-[130px] object-contain shrink-0"
              />
              <div className="border-l border-slate-200 pl-4">
                <p className="font-extrabold text-sm text-brand-navy-900 tracking-tight whitespace-nowrap">
                  {item.name}
                </p>
                <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
                  {item.code}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

