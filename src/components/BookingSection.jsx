import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Sparkles, CheckCircle2 } from 'lucide-react';
import { RESORT_INFO } from '../data/resortData';

export default function BookingSection() {
  return (
    <section id="booking" className="pt-6 sm:pt-10 pb-6 sm:pb-8 relative bg-[#FFFFFF]">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Info Content Block */}
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
            Fill in your preferred dates and requirements. Our reservations desk will instantly process your request with best tariff guarantees.
          </p>

          {/* Guarantees List */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 w-full max-w-3xl">
            <div className="flex items-center justify-center gap-2.5 p-3.5 rounded-2xl bg-[#F8FAF8] border border-[#ECECEC]">
              <CheckCircle2 className="w-4 h-4 text-[#2F6B3E] shrink-0" />
              <span className="text-xs sm:text-sm text-[#1B1B1B] font-medium">Best Direct Tariff Guarantee</span>
            </div>
            <div className="flex items-center justify-center gap-2.5 p-3.5 rounded-2xl bg-[#F8FAF8] border border-[#ECECEC]">
              <CheckCircle2 className="w-4 h-4 text-[#2F6B3E] shrink-0" />
              <span className="text-xs sm:text-sm text-[#1B1B1B] font-medium">Instant WhatsApp Desk</span>
            </div>
            <div className="flex items-center justify-center gap-2.5 p-3.5 rounded-2xl bg-[#F8FAF8] border border-[#ECECEC]">
              <CheckCircle2 className="w-4 h-4 text-[#2F6B3E] shrink-0" />
              <span className="text-xs sm:text-sm text-[#1B1B1B] font-medium">Zero Convenience Fee</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${RESORT_INFO.rawPhone}`}
              className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#F8FAF8] border border-[#ECECEC] text-[#1B1B1B] text-xs font-bold uppercase tracking-wider hover:border-[#2F6B3E] transition-all shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#2F6B3E]" /> Call: {RESORT_INFO.phone}
            </a>
            <a
              href={`https://wa.me/${RESORT_INFO.whatsapp}?text=Hi%20Hotel%20Tawa%20Backwater%20Resort,%20I%20would%20like%20to%20enquire%20about%20stay%20availability.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#C9A227] text-[#1B1B1B] text-xs font-bold uppercase tracking-wider hover:bg-[#D4AF37] shadow-gold-glow transition-all"
            >
              <MessageCircle className="w-4 h-4 text-[#1B1B1B]" /> WhatsApp Reservations Desk
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
