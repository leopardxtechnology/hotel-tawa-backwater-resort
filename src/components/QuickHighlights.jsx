import React from 'react';
import { motion } from 'framer-motion';
import { Waves, CloudRain, Utensils, Bed, Users, Feather, Trees, Phone, MessageCircle, Sparkles } from 'lucide-react';
import { RESORT_INFO } from '../data/resortData';

export default function QuickHighlights() {
  const highlights = [
    {
      emoji: "🌊",
      icon: Waves,
      title: "Backwater View",
      subtitle: "180° Panoramic Waters",
      desc: "Uninterrupted vistas of calm turquoise Tawa lake waters."
    },
    {
      emoji: "🏊",
      icon: Waves,
      title: "Swimming Pool",
      subtitle: "Infinity Pool Deck",
      desc: "Crystal-clear pool with sun lounges overlooking nature."
    },
    {
      emoji: "🌧",
      icon: CloudRain,
      title: "Rain Dance",
      subtitle: "High-Tech Rain Jets",
      desc: "Misting nozzles with music surround sound system."
    },
    {
      emoji: "🍽",
      icon: Utensils,
      title: "Delicious Food",
      subtitle: "Gourmet Multicuisine",
      desc: "Fresh local Maharashtrian delicacies & continental spread."
    },
    {
      emoji: "🛏",
      icon: Bed,
      title: "Luxury Rooms",
      subtitle: "Teakwood Cottages",
      desc: "Private Jacuzzis, panoramic balconies & plush bedding."
    },
    {
      emoji: "🎉",
      icon: Users,
      title: "Family Friendly",
      subtitle: "Safe & Gated Retreat",
      desc: "Lawn games, kids play park & dedicated family suites."
    },
    {
      emoji: "🦚",
      icon: Feather,
      title: "Bird Watching",
      subtitle: "90+ Species Fauna",
      desc: "Morning naturalist walks along pristine shoreline trails."
    },
    {
      emoji: "🏞",
      icon: Trees,
      title: "Nature Experience",
      subtitle: "Sahyadri Wilderness",
      desc: "Surrounded by forest greenery & fresh mountain breeze."
    }
  ];

  return (
    <section className="pt-10 pb-10 sm:pt-14 sm:pb-14 relative bg-[#F8FAF8] border-b border-[#ECECEC]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2F6B3E]/10 border border-[#2F6B3E]/20 text-[#2F6B3E] text-xs font-semibold uppercase tracking-widest mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" /> At A Glance
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-2xl sm:text-4xl font-bold text-[#1B1B1B]"
          >
            Resort Quick Highlights
          </motion.h2>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-10">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="white-card white-card-hover p-5 sm:p-6 text-center space-y-2 flex flex-col items-center justify-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#F8FAF8] border border-[#ECECEC] flex items-center justify-center text-2xl mb-1 shadow-sm">
                {item.emoji}
              </div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-[#1B1B1B]">
                {item.title}
              </h3>
              <span className="text-[11px] font-bold text-[#2F6B3E] uppercase tracking-wider block">
                {item.subtitle}
              </span>
              <p className="text-xs text-[#555555] font-light leading-relaxed hidden sm:block">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Two Premium Contact CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-2xl mx-auto p-6 rounded-3xl bg-white border border-[#ECECEC] shadow-luxury flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div>
            <h4 className="font-serif text-lg font-bold text-[#1B1B1B]">Plan Your Visit with Us</h4>
            <p className="text-xs text-[#555555] font-light">Speak directly with our reservations team for custom packages & tariffs.</p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {/* Call Now */}
            <a
              href={`tel:${RESORT_INFO.rawPhone}`}
              className="flex-1 sm:flex-initial px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#2F6B3E] bg-[#F8FAF8] border border-[#2F6B3E] hover:bg-[#2F6B3E] hover:text-white transition-all shadow-sm flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" /> Call Now
            </a>

            {/* WhatsApp Enquiry */}
            <a
              href={`https://wa.me/${RESORT_INFO.whatsapp}?text=Hi%20Hotel%20Tawa%20Backwater%20Resort,%20I%20would%20like%20to%20enquire%20about%20stay%20availability%20and%20rates.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#1B1B1B] bg-[#C9A227] hover:bg-[#D4AF37] shadow-gold-glow hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#1B1B1B]" /> WhatsApp
            </a>
          </div>
        </motion.div>

      </div>

    </section>
  );
}
