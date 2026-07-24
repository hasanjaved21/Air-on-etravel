import React, { useState } from 'react';
import { Send, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const msg = formData.get('message')?.toString() || 'Hello Air One Travels, I am interested in booking a holiday package.';
    const phoneNumber = '923323732416'; // Official WhatsApp number
    const encodedText = encodeURIComponent(msg);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 font-sans">
      {/* Main Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            className="bg-white rounded-2xl shadow-2xl w-80 overflow-hidden border border-slate-100 flex flex-col"
          >
            {/* WhatsApp Header */}
            <div className="bg-emerald-600 p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-lg">
                    A1
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-400 border-2 border-white"></span>
                </div>
                <div>
                  <h4 className="font-bold text-sm">Air One Travels</h4>
                  <p className="text-xs text-emerald-100">Typically replies in under 5 mins</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-4 bg-slate-50 space-y-3 h-48 overflow-y-auto text-xs">
              <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] text-slate-700">
                <p className="font-semibold text-slate-900 mb-1">Air One Consultant ✈</p>
                Welcome to Air One Travels! Let us know how we can help you with flights, visas, holiday planning or Umrah.
              </div>
              <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] text-slate-700">
                Please type your message below to open WhatsApp instantly!
              </div>
            </div>

            {/* Chat Input */}
            <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-slate-100 flex gap-2">
              <input
                type="text"
                name="message"
                placeholder="Type your travel inquiry..."
                required
                className="flex-1 bg-slate-100 border-0 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
              <button
                type="submit"
                className="bg-emerald-600 text-white p-2 rounded-lg hover:bg-emerald-700 transition cursor-pointer flex items-center justify-center"
              >
                <Send size={14} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.button
        id="whatsapp-trigger-btn"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center shadow-lg hover:shadow-xl transition cursor-pointer relative bg-transparent border-0 p-0"
      >
        <img 
          src="https://lh3.googleusercontent.com/d/1mR8IOm4m_faHcD_c00OUcg-ddmxCWL1Q"
          alt="WhatsApp"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback to drive.google.com direct export URL or default green WhatsApp icon if loading fails
            const target = e.currentTarget;
            if (target.src !== "https://drive.google.com/uc?export=view&id=1mR8IOm4m_faHcD_c00OUcg-ddmxCWL1Q") {
              target.src = "https://drive.google.com/uc?export=view&id=1mR8IOm4m_faHcD_c00OUcg-ddmxCWL1Q";
            }
          }}
        />
        {!isOpen && (
          <span className="absolute top-1 right-1 w-5 h-5 bg-brand-red-600 border-2 border-white text-white font-bold text-[10px] rounded-full flex items-center justify-center shadow-xs">
            1
          </span>
        )}
      </motion.button>
    </div>
  );
}
