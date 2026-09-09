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
  const [adults, setAdults] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const [checkInDate, setCheckInDate] = useState('');
  const [city, setCity] = useState('');
  const [roomPackage, setRoomPackage] = useState(getInitialPackageOption);

  useEffect(() => {
    setRoomPackage(getInitialPackageOption());
  }, [initialRoom, initialPackage]);

  // Pricing calculations
  const adultNum = Number(adults) || 1;
  const childNum = Number(childrenCount) || 0;

  const isLuxury = roomPackage.toLowerCase().includes('luxury');
  const adultPrice = isLuxury ? 1942 : 1627;
  const childPrice = adultPrice * 0.7; // 1359.40 or 1138.90

  const adultTotal = adultNum * adultPrice;
  const childTotal = childNum * childPrice;
  const grandTotal = adultTotal + childTotal;

  const formatPrice = (num) => {
    const formatted = num.toLocaleString('en-IN', {
      minimumFractionDigits: num % 1 === 0 ? 0 : 2,
      maximumFractionDigits: 2
    });
    return `₹${formatted}`;
  };

  const formatCheckInDate = (dateStr) => {
    if (!dateStr) return '';
    const [year, month, day] = dateStr.split('-');
    if (!year || !month || !day) return dateStr;
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const monthName = months[parseInt(month, 10) - 1] || '';
    return `${day} ${monthName} ${year}`;
  };

  const formatDisplayDDMMYYYY = (dateStr) => {
    if (!dateStr) return 'DD/MM/YYYY';
    const [year, month, day] = dateStr.split('-');
    if (!year || !month || !day) return dateStr;
    return `${day}/${month}/${year}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !checkInDate || !city.trim() || !adults || Number(adults) < 1) return;

    const message = `Hotel Tawa Resort Booking Enquiry

Name: ${name.trim()}
Adults: ${adultNum}
Children (5-10 years): ${childNum}
Check-in Date: ${formatCheckInDate(checkInDate)}
Village / City: ${city.trim()}
Room / Package: ${roomPackage}

Adult Price: ${formatPrice(adultPrice)}
Child Price: ${formatPrice(childPrice)}
Total Amount: ${formatPrice(grandTotal)}`;

    const whatsappUrl = `https://wa.me/${RESORT_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    if (onSubmitted) {
      onSubmitted();
    }
  };

  const today = new Date().toISOString().split('T')[0];

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
          className="w-full px-4 py-3 rounded-2xl bg-white border border-[#ECECEC] text-base sm:text-sm text-[#1B1B1B] font-medium focus:outline-none focus:border-[#2F6B3E] focus:ring-1 focus:ring-[#2F6B3E] transition-all shadow-sm max-w-full box-border"
        />
      </div>

      {/* 2. Adults & 3. Children (5-10 Years) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="block text-xs uppercase tracking-wider font-bold text-[#2F6B3E] flex items-center gap-1.5">
            <span>👥</span> Adults <span className="text-rose-500">*</span>
          </label>
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => setAdults(prev => Math.max(1, (Number(prev) || 1) - 1))}
              className="w-10 h-11 rounded-l-2xl bg-[#F8FAF8] border border-r-0 border-[#ECECEC] text-[#1B1B1B] font-bold text-lg hover:bg-[#ECECEC] active:scale-95 transition-all flex items-center justify-center cursor-pointer select-none shrink-0"
              aria-label="Decrease Adults"
            >
              -
            </button>
            <input
              type="number"
              required
              min="1"
              value={adults}
              onChange={(e) => {
                const val = e.target.value;
                if (val === '') {
                  setAdults('');
                } else {
                  const parsed = parseInt(val, 10);
                  setAdults(isNaN(parsed) ? 1 : Math.max(1, parsed));
                }
              }}
              onBlur={() => {
                if (!adults || Number(adults) < 1) setAdults(1);
              }}
              className="w-full h-11 text-center bg-white border border-[#ECECEC] text-base sm:text-sm text-[#1B1B1B] font-bold focus:outline-none focus:border-[#2F6B3E] focus:ring-1 focus:ring-[#2F6B3E] transition-all box-border"
            />
            <button
              type="button"
              onClick={() => setAdults(prev => (Number(prev) || 0) + 1)}
              className="w-10 h-11 rounded-r-2xl bg-[#F8FAF8] border border-l-0 border-[#ECECEC] text-[#1B1B1B] font-bold text-lg hover:bg-[#ECECEC] active:scale-95 transition-all flex items-center justify-center cursor-pointer select-none shrink-0"
              aria-label="Increase Adults"
            >
              +
            </button>
          </div>
        </div>

        <div className="space-y-1">
          <label className="block text-xs uppercase tracking-wider font-bold text-[#2F6B3E] flex items-center gap-1.5">
            <span>👶</span> Children (5-10 Years)
          </label>
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => setChildrenCount(prev => Math.max(0, (Number(prev) || 0) - 1))}
              className="w-10 h-11 rounded-l-2xl bg-[#F8FAF8] border border-r-0 border-[#ECECEC] text-[#1B1B1B] font-bold text-lg hover:bg-[#ECECEC] active:scale-95 transition-all flex items-center justify-center cursor-pointer select-none shrink-0"
              aria-label="Decrease Children"
            >
              -
            </button>
            <input
              type="number"
              min="0"
              value={childrenCount}
              onChange={(e) => {
                const val = e.target.value;
                if (val === '') {
                  setChildrenCount('');
                } else {
                  const parsed = parseInt(val, 10);
                  setChildrenCount(isNaN(parsed) ? 0 : Math.max(0, parsed));
                }
              }}
              onBlur={() => {
                if (childrenCount === '' || Number(childrenCount) < 0) setChildrenCount(0);
              }}
              className="w-full h-11 text-center bg-white border border-[#ECECEC] text-base sm:text-sm text-[#1B1B1B] font-bold focus:outline-none focus:border-[#2F6B3E] focus:ring-1 focus:ring-[#2F6B3E] transition-all box-border"
            />
            <button
              type="button"
              onClick={() => setChildrenCount(prev => (Number(prev) || 0) + 1)}
              className="w-10 h-11 rounded-r-2xl bg-[#F8FAF8] border border-l-0 border-[#ECECEC] text-[#1B1B1B] font-bold text-lg hover:bg-[#ECECEC] active:scale-95 transition-all flex items-center justify-center cursor-pointer select-none shrink-0"
              aria-label="Increase Children"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* 4. Check-In Date & 5. Village / City */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="block text-xs uppercase tracking-wider font-bold text-[#2F6B3E] flex items-center gap-1.5">
            <span>📅</span> Check-In Date <span className="text-rose-500">*</span>
          </label>
          <div className="relative w-full">
            <input
              type="date"
              required
              min={today}
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
              className="custom-date-input w-full px-4 py-3 rounded-2xl bg-white border border-[#ECECEC] text-base sm:text-sm font-medium focus:outline-none focus:border-[#2F6B3E] focus:ring-1 focus:ring-[#2F6B3E] transition-all shadow-sm cursor-pointer max-w-full box-border"
            />
            <span
              className={`absolute left-4 top-1/2 -translate-y-1/2 text-base sm:text-sm font-medium pointer-events-none select-none ${
                checkInDate ? 'text-[#1B1B1B]' : 'text-[#9CA3AF]'
              }`}
            >
              {formatDisplayDDMMYYYY(checkInDate)}
            </span>
          </div>
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
            className="w-full px-4 py-3 rounded-2xl bg-white border border-[#ECECEC] text-base sm:text-sm text-[#1B1B1B] font-medium focus:outline-none focus:border-[#2F6B3E] focus:ring-1 focus:ring-[#2F6B3E] transition-all shadow-sm max-w-full box-border"
          />
        </div>
      </div>

      {/* 6. Room / Package */}
      <div className="space-y-1">
        <label className="block text-xs uppercase tracking-wider font-bold text-[#2F6B3E] flex items-center gap-1.5">
          <span>🛏️</span> Room / Package <span className="text-rose-500">*</span>
        </label>
        <select
          value={roomPackage}
          onChange={(e) => setRoomPackage(e.target.value)}
          className="w-full px-4 py-3 rounded-2xl bg-white border border-[#ECECEC] text-base sm:text-sm text-[#1B1B1B] font-medium focus:outline-none focus:border-[#2F6B3E] focus:ring-1 focus:ring-[#2F6B3E] transition-all shadow-sm cursor-pointer max-w-full box-border"
        >
          <option value="Regular Room Per Head Package">Regular Room Per Head Package</option>
          <option value="Luxury Room Per Head Package">Luxury Room Per Head Package</option>
        </select>
      </div>

      {/* 7. BOOKING SUMMARY */}
      <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#ECECEC] space-y-3 shadow-sm">
        <div className="flex items-center justify-between border-b border-[#ECECEC] pb-2">
          <span className="text-xs uppercase tracking-wider font-bold text-[#2F6B3E] flex items-center gap-1.5">
            <span>📋</span> BOOKING SUMMARY
          </span>
          <span className="text-[11px] font-semibold text-[#555555]">
            {isLuxury ? 'Luxury Tariff' : 'Regular Tariff'}
          </span>
        </div>

        <div className="space-y-1.5 text-xs text-[#1B1B1B]">
          <div className="flex items-center justify-between">
            <span>Adults: {adultNum} × {formatPrice(adultPrice)}</span>
            <span className="font-semibold">{formatPrice(adultTotal)}</span>
          </div>

          <div className="flex items-center justify-between">
            <span>Children (5-10 years): {childNum} × {formatPrice(childPrice)}</span>
            <span className="font-semibold">{formatPrice(childTotal)}</span>
          </div>
        </div>

        <div className="border-t border-[#ECECEC] pt-2 flex items-center justify-between">
          <span className="text-xs uppercase tracking-wider font-bold text-[#1B1B1B]">TOTAL</span>
          <span className="font-serif text-lg sm:text-xl font-bold text-[#2F6B3E]">{formatPrice(grandTotal)}</span>
        </div>
      </div>

      {/* 8. Submit Button */}
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
