import React, { useState, useEffect } from 'react';
import { X, Calendar, User, Phone, Mail, Navigation, MessageSquare, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TourPackage } from '../types';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage: TourPackage | null;
  onSubmitSuccess?: () => void;
}

export default function InquiryModal({ isOpen, onClose, selectedPackage, onSubmitSuccess }: InquiryModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    travelDate: '',
    passengers: 1,
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (selectedPackage) {
      setFormData(prev => ({
        ...prev,
        destination: `${selectedPackage.destination} (${selectedPackage.country})`
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        destination: ''
      }));
    }
  }, [selectedPackage, isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      // Build lead object
      const newInquiry = {
        id: 'inq-' + Date.now(),
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        destination: formData.destination || 'General Flight/Visa consultation',
        travelDate: formData.travelDate,
        passengers: Number(formData.passengers),
        message: formData.message,
        timestamp: new Date().toLocaleString(),
        status: 'New'
      };

      // Store in localStorage
      const existing = localStorage.getItem('airone_inquiries');
      const inquiriesList = existing ? JSON.parse(existing) : [];
      inquiriesList.unshift(newInquiry);
      localStorage.setItem('airone_inquiries', JSON.stringify(inquiriesList));

      setIsSubmitting(false);
      setIsSuccess(true);
      if (onSubmitSuccess) {
        onSubmitSuccess();
      }
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      destination: '',
      travelDate: '',
      passengers: 1,
      message: ''
    });
    setIsSuccess(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}></div>

      {/* Modal Card */}
      <div className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-lg w-full relative z-10 border border-slate-100 flex flex-col font-sans">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1.5 rounded-full hover:bg-slate-100 transition cursor-pointer"
        >
          <X size={20} />
        </button>

        {/* Content Container */}
        <div className="p-6 md:p-8 overflow-y-auto max-h-[90vh]">
          {!isSuccess ? (
            <>
              {/* Heading */}
              <div className="mb-6">
                <span className="text-brand-red-600 font-semibold text-xs tracking-wider uppercase">Book Your Dream Trip</span>
                <h3 className="text-2xl font-bold font-display text-brand-navy-900 mt-1">
                  {selectedPackage ? 'Inquire About Package' : 'Request Travel Quotation'}
                </h3>
                {selectedPackage && (
                  <p className="text-slate-500 text-sm mt-1">
                    Selected Package: <strong className="text-brand-navy-700">{selectedPackage.destination}</strong> starting at <strong className="text-brand-red-600">{selectedPackage.price}</strong>
                  </p>
                )}
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-1.5">Full Name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 text-slate-400" size={16} />
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g., Muhammad Ali"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-brand-navy-500"
                    />
                  </div>
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-1.5">Email Address *</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 text-slate-400" size={16} />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g., ali@email.com"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-brand-navy-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-1.5">Phone / WhatsApp *</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 text-slate-400" size={16} />
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g., +92 332 3732416"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-brand-navy-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Destination */}
                <div>
                  <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-1.5">Destination / Tour Interest</label>
                  <div className="relative">
                    <Navigation className="absolute left-3 top-3 text-slate-400" size={16} />
                    <input
                      type="text"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      placeholder="e.g., Turkey, Dubai, Maldives, Flights to London..."
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-brand-navy-500"
                    />
                  </div>
                </div>

                {/* Date & Travelers */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-1.5">Travel Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 text-slate-400" size={16} />
                      <input
                        type="date"
                        name="travelDate"
                        value={formData.travelDate}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-brand-navy-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-1.5">No. of Travelers</label>
                    <select
                      name="passengers"
                      value={formData.passengers}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-brand-navy-500 bg-white"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, '9+'].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-1.5">Additional Requirements</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 text-slate-400" size={16} />
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about special hotel requests, visa needs, custom excursions..."
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-brand-navy-500"
                    ></textarea>
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-gradient-to-r from-brand-navy-900 to-brand-navy-700 hover:from-brand-red-700 hover:to-brand-red-600 text-white font-bold text-sm rounded-xl transition-all shadow-lg hover:shadow-xl cursor-pointer flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    'Submit Custom Inquiry'
                  )}
                </button>
              </form>
            </>
          ) : (
            /* Success State */
            <div className="text-center py-8 font-sans">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="text-2xl font-bold font-display text-brand-navy-900">Inquiry Received!</h3>
              <p className="text-slate-600 text-sm mt-2 max-w-sm mx-auto">
                Thank you for choosing **Air One Travels**. Our specialist travel planner has been notified and will contact you within **15 minutes** with a customized quote.
              </p>
              
              <div className="mt-6 p-4 bg-slate-50 rounded-2xl text-left border border-slate-100 text-xs text-slate-500 space-y-1 max-w-sm mx-auto">
                <p><strong>Lead ID:</strong> {Date.now()}</p>
                <p><strong>Name:</strong> {formData.name}</p>
                <p><strong>Destination:</strong> {formData.destination || 'Custom consultation'}</p>
                <p className="text-emerald-600 font-semibold">⚡ Simulated Live notification sent to the Air One backend desk.</p>
              </div>

              <button
                onClick={handleReset}
                className="mt-8 px-6 py-2.5 bg-brand-navy-900 hover:bg-brand-navy-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl cursor-pointer"
              >
                Close Window
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
