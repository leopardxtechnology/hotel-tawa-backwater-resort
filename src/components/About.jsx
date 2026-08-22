import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2, Calendar } from 'lucide-react';
import { STATS, TIMELINE } from '../data/resortData';

export default function About() {
  const highlightsList = [
    "Panoramic Backwater Lake View from every cottage",
    "Tranquil & Peaceful Nature Environment in Sahyadri lap",
    "Family-Friendly & Child-Safe Gated Property",
    "Certified 5-Star Multicuisine Gourmet Culinary Team",
    "Unmatched Hospitality with 24x7 Personalized Service",
    "Eco-conscious practices protecting local flora & bird fauna"
  ];

  return (
    <section id="about" className="pt-10 pb-10 sm:pt-14 sm:pb-12 relative bg-[#F8FAF8] overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2F6B3E]/10 border border-[#2F6B3E]/20 text-[#2F6B3E] text-xs font-semibold uppercase tracking-widest mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" /> Sanctuary of Serenity
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-bold text-[#1B1B1B] tracking-tight"
          >
            Where Untamed Nature Meets <br />
            <span className="text-[#2F6B3E] italic">Uncompromised Luxury</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-[#555555] text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto"
          >
            Situated on the pristine banks of the Tawa Dam Reservoir, Hotel Tawa Backwater Resort offers a haven for soul-refreshing retreats, family joy, and romantic escapes.
          </motion.p>
        </div>

        {/* Multi-Image Editorial Layout with Real Resort Photograph */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          
          {/* Left Column: Real Resort Image Card (/Photo/Resort1.jpeg) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-luxury border border-[#ECECEC] group">
              <img
                src="/Photo/Resort1.webp"
                alt="Hotel Tawa Backwater Resort Authentic View"
                loading="lazy"
                decoding="async"
                className="w-full h-[320px] sm:h-[420px] lg:h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-[0.98]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B1B1B]/75 via-transparent to-transparent opacity-80" />
              
              {/* Floating Information Card */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 right-4 sm:left-6 sm:right-6 p-3.5 sm:p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#ECECEC] shadow-md">
                <span className="text-xs uppercase tracking-widest text-[#2F6B3E] font-bold block mb-0.5">
                  Hotel Tawa Backwater Resort
                </span>
                <p className="text-xs text-[#555555] font-medium">
                  Actual photograph of our resort property grounds & pristine Tawa reservoir shoreline.
                </p>
              </div>
            </div>

            {/* Overlapping Secondary Badge (Safely contained) */}
            <div className="hidden sm:block absolute -bottom-4 right-4 px-4 py-2.5 rounded-2xl bg-white border border-[#ECECEC] shadow-luxury z-20">
              <span className="block text-[11px] font-bold text-[#2F6B3E] uppercase tracking-wider">100% Authentic</span>
              <span className="text-xs text-[#1B1B1B] font-semibold">Tawa Dam Backwater Stay</span>
            </div>
          </motion.div>

          {/* Right Column: Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="space-y-3">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1B1B1B]">
                Designed for Peace, Built for Comfort
              </h3>
              <p className="text-[#555555] text-sm sm:text-base leading-relaxed font-light">
                Whether you are seeking a quiet morning listening to kingfishers along the water bank, a refreshing dive in our infinity pool, or an energetic evening of rain dance with your family, Hotel Tawa Backwater Resort curates unforgettable memories.
              </p>
            </div>

            {/* Highlighted Points Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {highlightsList.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-2xl bg-white border border-[#ECECEC] shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#2F6B3E] shrink-0 mt-0.5" />
                  <span className="text-xs text-[#1B1B1B] font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-3 flex items-center gap-4">
              <div className="flex -space-x-3">
                <img className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Guest" />
                <img className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Guest" />
                <img className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Guest" />
              </div>
              <div>
                <span className="block text-xs font-bold text-[#1B1B1B]">Loved by 1,000+ Guests</span>
                <span className="text-[11px] text-[#C9A227] font-semibold">⭐ 4.9 Rating across Google & Travel Platforms</span>
              </div>
            </div>

          </motion.div>

        </div>

        {/* Animated Statistics Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 p-6 sm:p-8 rounded-3xl bg-white border border-[#ECECEC] shadow-luxury mb-12">
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-2 sm:p-4 border-r last:border-0 border-[#ECECEC]"
            >
              <div className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-[#2F6B3E] mb-1">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#555555]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline Section */}
        <div className="pt-4">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-[0.2em] text-[#C9A227] font-semibold">Our Journey</span>
            <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#1B1B1B] mt-1">A Legacy of Backwater Excellence</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {TIMELINE.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="white-card white-card-hover p-5 sm:p-6 rounded-3xl"
              >
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#2F6B3E]/10 border border-[#2F6B3E]/20 text-[#2F6B3E] text-xs font-bold mb-4 shadow-sm">
                  <Calendar className="w-3.5 h-3.5 text-[#C9A227]" />
                  <span>{item.year}</span>
                </div>

                <h4 className="text-base font-bold text-[#1B1B1B] mb-2">{item.title}</h4>
                <p className="text-xs text-[#555555] font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
