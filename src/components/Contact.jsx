import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, MessageCircle, Sparkles, Navigation } from 'lucide-react';
import { RESORT_INFO } from '../data/resortData';

export default function Contact() {
  return (
    <section id="contact" className="pt-6 sm:pt-8 pb-20 sm:pb-28 relative bg-[#FFFFFF]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2F6B3E]/10 border border-[#2F6B3E]/20 text-[#2F6B3E] text-xs font-semibold uppercase tracking-widest mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" /> Reach Out To Us
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-bold text-[#1B1B1B] tracking-tight"
          >
            Location & Contact Details
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-[#555555] text-base font-light max-w-2xl mx-auto"
          >
            We are eager to assist you with custom room quotes, group outing arrangements, and travel directions.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          <div className="lg:col-span-5 space-y-4">
            
            {/* Address */}
            <div className="white-card white-card-hover p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#2F6B3E]/10 border border-[#2F6B3E]/20 flex items-center justify-center text-[#2F6B3E] shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-wider font-bold text-[#2F6B3E] mb-1">Resort Address</h3>
                <p className="text-xs sm:text-sm text-[#1B1B1B] leading-relaxed font-medium">{RESORT_INFO.address}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="white-card white-card-hover p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#2F6B3E]/10 border border-[#2F6B3E]/20 flex items-center justify-center text-[#2F6B3E] shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-wider font-bold text-[#2F6B3E] mb-1">Reservation Phone</h3>
                <a href={`tel:${RESORT_INFO.rawPhone}`} className="text-base font-bold text-[#1B1B1B] hover:text-[#2F6B3E] block">
                  {RESORT_INFO.phone}
                </a>
                <p className="text-xs text-[#555555] mt-0.5">Available 24 Hours • 7 Days a week</p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="white-card white-card-hover p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 shrink-0">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-wider font-bold text-emerald-700 mb-1">Instant WhatsApp</h3>
                <a
                  href={`https://wa.me/${RESORT_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#1B1B1B] hover:text-emerald-600 block"
                >
                  Click to Chat Directly on WhatsApp →
                </a>
                <p className="text-xs text-[#555555] mt-0.5">Quick response within 5 minutes</p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="white-card p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F8FAF8] border border-[#ECECEC] flex items-center justify-center text-[#555555] shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-wider font-bold text-[#2F6B3E] mb-1">Operating Hours</h3>
                <p className="text-xs text-[#1B1B1B] font-medium">Resort Reception: 24/7 Mon – Sun</p>
                <p className="text-xs text-[#555555] mt-0.5">Restaurant Meals: 7:30 AM – 10:30 PM</p>
              </div>
            </div>

          </div>

          {/* Embedded Google Map */}
          <div className="lg:col-span-7 h-full min-h-[450px] rounded-3xl overflow-hidden white-card border border-[#ECECEC] shadow-luxury relative group">
            <iframe
              title="Hotel Tawa Backwater Resort Map Location"
              src="https://maps.google.com/maps?q=Hotel+Tawa+Resort&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '450px', filter: 'brightness(0.98) contrast(1.02)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
