import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Users, Maximize, Shield, Sparkles, ChevronLeft, ChevronRight, Phone, MessageCircle } from 'lucide-react';
import { RESORT_INFO } from '../data/resortData';

export default function RoomModal({ room, onClose, onBookRoom }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (room) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [room]);

  // Image preloading for carousel
  useEffect(() => {
    if (room && room.images && room.images.length > 1) {
      const nextIdx = (activeImageIndex + 1) % room.images.length;
      const prevIdx = (activeImageIndex - 1 + room.images.length) % room.images.length;

      const nextImg = new Image();
      nextImg.src = room.images[nextIdx];

      const prevImg = new Image();
      prevImg.src = room.images[prevIdx];
    }
  }, [activeImageIndex, room]);

  if (!room) return null;

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % room.images.length);
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + room.images.length) % room.images.length);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
        
        {/* Clickable Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.3 }}
          className="relative w-[92vw] sm:w-full max-w-4xl bg-white border border-[#ECECEC] rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[82vh] sm:max-h-[90vh] flex flex-col mt-10 sm:mt-0"
        >
          {/* Sticky Close (X) Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 p-2.5 rounded-full bg-white/90 border border-[#ECECEC] text-[#1B1B1B] hover:text-[#2F6B3E] transition-all shadow-md cursor-pointer"
            aria-label="Close room details"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Smooth Scrollable Content Container */}
          <div className="overflow-y-auto overflow-x-hidden flex-1 p-4 sm:p-8 space-y-6 sm:space-y-8 pb-10 sm:pb-8 text-left">
            
            {/* Gallery Carousel Header */}
            <div className={`relative ${room.isVertical ? 'w-full aspect-[4/5] max-h-[45vh] sm:max-h-[55vh] mx-auto' : 'h-56 sm:h-96'} rounded-2xl overflow-hidden group border border-[#ECECEC] flex items-center justify-center`}>
              <img
                src={room.images[activeImageIndex]}
                alt={room.name}
                loading="lazy"
                decoding="async"
                className={`w-full h-full object-cover ${room.isVertical ? 'object-[center_35%]' : 'object-center'} transition-transform duration-500`}
              />

              {room.images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/80 border border-[#ECECEC] text-[#1B1B1B] hover:bg-[#2F6B3E] hover:text-white transition-colors cursor-pointer"
                    aria-label="Previous photo"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/80 border border-[#ECECEC] text-[#1B1B1B] hover:bg-[#2F6B3E] hover:text-white transition-colors cursor-pointer"
                    aria-label="Next photo"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Thumbnails */}
              <div className="absolute bottom-3 sm:bottom-4 left-3 right-3 sm:left-4 sm:right-4 flex justify-center gap-1.5 sm:gap-2">
                {room.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-12 h-9 sm:w-14 sm:h-10 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                      idx === activeImageIndex ? 'border-[#C9A227] scale-105 shadow-md' : 'border-white/50 opacity-70'
                    }`}
                  >
                    <img src={img} alt="Thumb" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Header Specs */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#ECECEC] pb-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#2F6B3E] flex items-center gap-1.5 mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" /> {room.badge}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1B1B1B]">{room.name}</h2>
                <p className="text-xs sm:text-sm text-[#555555] mt-1">{room.subtitle}</p>
              </div>

              {room.price && (
                <div className="text-left sm:text-right">
                  <span className="block text-[10px] text-[#555555] uppercase tracking-wider">Tariff Rate</span>
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-[#2F6B3E]">{room.price}</span>
                  {room.priceUnit && <span className="text-xs text-[#555555]"> {room.priceUnit}</span>}
                </div>
              )}
            </div>

            {/* Spec Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {room.capacity && (
                <div className="p-3.5 rounded-2xl bg-[#F8FAF8] border border-[#ECECEC] flex items-center gap-3">
                  <Users className="w-5 h-5 text-[#2F6B3E] shrink-0" />
                  <div>
                    <span className="block text-[10px] text-[#555555] uppercase">Occupancy</span>
                    <span className="text-xs font-semibold text-[#1B1B1B]">{room.capacity}</span>
                  </div>
                </div>
              )}

              {room.size && (
                <div className="p-3.5 rounded-2xl bg-[#F8FAF8] border border-[#ECECEC] flex items-center gap-3">
                  <Maximize className="w-5 h-5 text-[#2F6B3E] shrink-0" />
                  <div>
                    <span className="block text-[10px] text-[#555555] uppercase">Room Size</span>
                    <span className="text-xs font-semibold text-[#1B1B1B]">{room.size}</span>
                  </div>
                </div>
              )}

              <div className="p-3.5 rounded-2xl bg-[#F8FAF8] border border-[#ECECEC] flex items-center gap-3">
                <Shield className="w-5 h-5 text-[#2F6B3E] shrink-0" />
                <div>
                  <span className="block text-[10px] text-[#555555] uppercase">Inclusions</span>
                  <span className="text-xs font-semibold text-[#1B1B1B]">Meals & Activities</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h3 className="text-xs uppercase tracking-wider font-bold text-[#2F6B3E]">Accommodation Details</h3>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed font-light">{room.description}</p>
            </div>

            {/* Amenities Grid */}
            {room.amenities && (
              <div className="space-y-3">
                <h3 className="text-xs uppercase tracking-wider font-bold text-[#2F6B3E]">Luxury Amenities</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {room.amenities.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#F8FAF8] border border-[#ECECEC]">
                      <div className="w-5 h-5 rounded-full bg-[#2F6B3E]/10 flex items-center justify-center text-[#2F6B3E] shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs text-[#1B1B1B] font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Direct Booking CTA Bar */}
            <div className="pt-4 border-t border-[#ECECEC] flex flex-col sm:flex-row items-center justify-between gap-4 pb-4">
              <div className="flex items-center justify-between sm:justify-start w-full sm:w-auto gap-4">
                <a
                  href={`https://wa.me/${RESORT_INFO.whatsapp}?text=Hi,%20I%20am%20interested%20in%20booking%20the%20${encodeURIComponent(room.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 text-xs font-semibold hover:bg-emerald-500 hover:text-white transition-all"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp Enquiry
                </a>
                <a
                  href={`tel:${RESORT_INFO.rawPhone}`}
                  className="flex items-center gap-2 text-xs text-[#555555] hover:text-[#2F6B3E]"
                >
                  <Phone className="w-4 h-4 text-[#2F6B3E]" /> Call Desk
                </a>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onBookRoom(room.name);
                }}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#1B1B1B] bg-[#C9A227] hover:bg-[#D4AF37] shadow-gold-glow hover:scale-105 transition-all cursor-pointer"
              >
                Book {room.name}
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
