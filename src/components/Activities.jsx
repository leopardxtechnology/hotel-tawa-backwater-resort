import React from 'react';
import { motion } from 'framer-motion';
import { Waves, CloudRain, Activity, Feather, Mic, Footprints, Gamepad2, Smile, PartyPopper, Sparkles, Target, Heart, Sun } from 'lucide-react';
import { ACTIVITIES } from '../data/resortData';

const iconMap = {
  Waves: Waves,
  CloudRain: CloudRain,
  Activity: Activity,
  Feather: Feather,
  Mic: Mic,
  Footprints: Footprints,
  Gamepad2: Gamepad2,
  Smile: Smile,
  PartyPopper: PartyPopper,
  Target: Target,
  Heart: Heart,
  Sun: Sun
};

export default function Activities({ onOpenBooking }) {
  return (
    <section id="activities" className="pt-6 pb-6 sm:pt-8 sm:pb-8 relative bg-[#F8FAF8]">
      
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
            <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" /> Endless Fun & Recreation
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-bold text-[#1B1B1B] tracking-tight"
          >
            Resort Activities & Games
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-[#555555] text-base font-light max-w-2xl mx-auto"
          >
            From rain dance beats and poolside lounges to bird watching and bonfire sessions, enjoy a wealth of activities.
          </motion.p>
        </div>

        {/* Clean White Interactive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACTIVITIES.map((act, index) => {
            const IconComponent = iconMap[act.icon] || Sparkles;
            return (
              <motion.div
                key={act.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="white-card white-card-hover group overflow-hidden flex flex-col justify-between"
              >
                {/* Image Header */}
                <div className="h-44 relative overflow-hidden">
                  <img
                    src={act.image}
                    alt={act.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#ECECEC] text-[10px] text-[#2F6B3E] font-bold uppercase tracking-wider shadow-sm">
                    {act.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-[#2F6B3E]/10 text-[#2F6B3E] group-hover:bg-[#2F6B3E] group-hover:text-white transition-colors">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h3 className="font-serif text-lg font-bold text-[#1B1B1B] group-hover:text-[#2F6B3E] transition-colors">
                        {act.title}
                      </h3>
                    </div>
                    <p className="text-xs text-[#555555] font-light leading-relaxed">
                      {act.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#ECECEC] flex items-center justify-between text-[11px]">
                    <span className="flex items-center gap-1 text-emerald-700 font-bold">
                      ✓ Free with Stay
                    </span>
                    <button
                      onClick={onOpenBooking}
                      className="text-[#2F6B3E] hover:underline font-bold"
                    >
                      Enquire →
                    </button>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
