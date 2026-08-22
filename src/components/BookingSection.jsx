import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Sparkles } from 'lucide-react';
import { RESORT_INFO } from '../data/resortData';

export function BookingForm({ initialRoom = '', initialPackage = '', onSubmitted }) {
  const getInitialPackageOption = () => {
    const combined = (initialPackage || initialRoom || '').toLowerCase();
    if (combined.includes('luxury')) {
      return 'Luxury Room Per Head Package';
    }
    return 'Regular Room Per Head Package';
  };

  const [name, setName] = useState('');
  const [guests, setGuests] = useState('1');
  const [city, setCity] = useState('');
  const [roomPackage, setRoomPackage] = useState(getInitialPackageOption);

  useEffect(() => {
    setRoomPackage(getInitialPackageOption());
  }, [initialRoom, initialPackage]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !city.trim() || !guests || Number(guests) < 1) return;

    const message = `🏨 HOTEL TAWA BACKWATER RESORT\n\nNew Booking Enquiry\n\n👤 Name: ${name.trim()}\n👥 Guests: ${guests}\n📍 Village/City: ${city.trim()}\n🛏️ Room/Package: ${roomPackage}`;

    const whatsappUrl = `https://wa.me/${RESORT_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    if (onSubmitted) {
      onSubmitted();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left w-full max-w-xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#F8FAF8] border border-[#ECECEC] shadow-luxury">
      {/* 1. Name */}
      <div className="space-y-1">
        <label className="block text-xs uppercase tracking-wider font-bold text-[#2F6B3E] flex items-center gap-1.5">
          <span>👤</span> Name <span className="text-rose-500">*</span>
        </label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="w-full px-4 py-3 rounded-2xl bg-white border border-[#ECECEC] text-sm text-[#1B1B1B] font-medium focus:outline-none focus:border-[#2F6B3E] focus:ring-1 focus:ring-[#2F6B3E] transition-all shadow-sm"
        />
      </div>

      {/* 2. Guests & 3. Village/City */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="block text-xs uppercase tracking-wider font-bold text-[#2F6B3E] flex items-center gap-1.5">
            <span>👥</span> How Many Guests? <span className="text-rose-500">*</span>
          </label>
          <input
            type="number"
            required
            min="1"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="w-full px-4 py-3 rounded-2xl bg-white border border-[#ECECEC] text-sm text-[#1B1B1B] font-medium focus:outline-none focus:border-[#2F6B3E] focus:ring-1 focus:ring-[#2F6B3E] transition-all shadow-sm"
          />
        </div>

        <div className="space-y-1">
          <label className="block text-xs uppercase tracking-wider font-bold text-[#2F6B3E] flex items-center gap-1.5">
            <span>📍</span> Village / City <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter village / city"
            className="w-full px-4 py-3 rounded-2xl bg-white border border-[#ECECEC] text-sm text-[#1B1B1B] font-medium focus:outline-none focus:border-[#2F6B3E] focus:ring-1 focus:ring-[#2F6B3E] transition-all shadow-sm"
          />
        </div>
      </div>

      {/* 4. Room/Package Select */}
      <div className="space-y-1">
        <label className="block text-xs uppercase tracking-wider font-bold text-[#2F6B3E] flex items-center gap-1.5">
          <span>🛏️</span> Room / Package <span className="text-rose-500">*</span>
        </label>
        <select
          value={roomPackage}
          onChange={(e) => setRoomPackage(e.target.value)}
          className="w-full px-4 py-3 rounded-2xl bg-white border border-[#ECECEC] text-sm text-[#1B1B1B] font-medium focus:outline-none focus:border-[#2F6B3E] focus:ring-1 focus:ring-[#2F6B3E] transition-all shadow-sm cursor-pointer"
        >
          <option value="Regular Room Per Head Package">Regular Room Per Head Package</option>
          <option value="Luxury Room Per Head Package">Luxury Room Per Head Package</option>
        </select>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-4 rounded-full text-xs font-bold uppercase tracking-wider text-[#1B1B1B] bg-gradient-to-r from-[#C9A227] via-[#E8D9A8] to-[#B58F1C] shadow-gold-glow hover:scale-[1.01] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 mt-4 cursor-pointer"
      >
        <MessageCircle className="w-4 h-4 text-[#1B1B1B]" /> Send Enquiry via WhatsApp
      </button>
    </form>
  );
}

export default function BookingSection({ initialRoom = '', initialPackage = '' }) {
  return (
    <section id="booking" className="pt-6 sm:pt-10 pb-6 sm:pb-8 relative bg-[#FFFFFF]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2F6B3E]/10 border border-[#2F6B3E]/20 text-[#2F6B3E] text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" /> Instant Reservations Desk
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1B1B1B] tracking-tight leading-tight">
            Plan Your Serene <br />
            <span className="text-[#2F6B3E] italic">Backwater Escape</span>
          </h2>

          <p className="text-[#555555] text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto">
            Fill in the details below for instant booking enquiries via our WhatsApp reservations desk.
          </p>

          <BookingForm initialRoom={initialRoom} initialPackage={initialPackage} />
        </motion.div>
      </div>
    </section>
  );
}
