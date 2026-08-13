import React from 'react';
import { motion } from 'framer-motion';
import { Waves, CloudRain, Compass, Smile, Utensils, Bed, Feather, Trophy, Sun, ShieldCheck, Sparkles } from 'lucide-react';
import { HIGHLIGHTS } from '../data/resortData';

const iconMap = {
  Waves,
  CloudRain,
  Compass,
  Smile,
  Utensils,
  Bed,
  Feather,
  Trophy,
  Sun,
  ShieldCheck
};

export default function Highlights() {
  return (
    <section className="pt-10 pb-8 sm:pt-14 sm:pb-10 relative bg-[#FFFFFF] border-t border-[#ECECEC]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2F6B3E]/10 border border-[#2F6B3E]/20 text-[#2F6B3E] text-xs font-semibold uppercase tracking-widest mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" /> Resort Experience
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-bold text-[#1B1B1B] tracking-tight"
          >
            World-Class Amenities & <br />
            <span className="text-[#2F6B3E] italic">Curated Experiences</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-[#555555] text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto"
          >
            Every moment at Hotel Tawa Backwater Resort is crafted for joyful relaxation, adventure, and unforgettable family memories.
          </motion.p>
        </div>

        {/* Card Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {HIGHLIGHTS.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Sparkles;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                className="white-card white-card-hover rounded-3xl overflow-hidden group"
              >
                {/* Card Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B1B1B]/60 via-transparent to-transparent" />
                  
                  {/* Badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#2F6B3E] text-[11px] font-bold uppercase tracking-wider border border-[#ECECEC] shadow-sm">
                    {item.badge}
                  </span>

                  {/* Icon Circle */}
                  <div className="absolute bottom-4 right-4 w-12 h-12 rounded-2xl bg-white border border-[#ECECEC] shadow-luxury flex items-center justify-center text-[#2F6B3E] group-hover:bg-[#2F6B3E] group-hover:text-white transition-all">
                    <IconComponent className="w-6 h-6" />
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-[#1B1B1B] mb-2 group-hover:text-[#2F6B3E] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#555555] font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
