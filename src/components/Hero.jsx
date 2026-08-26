import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Bed, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      className="relative h-screen min-h-[100vh] lg:h-[calc(100vh-58px)] lg:min-h-[calc(100vh-58px)] lg:mt-[58px] w-full max-w-full flex flex-col justify-end items-center overflow-hidden bg-[#FFFFFF]"
      aria-label="Hotel Tawa Resort"
    >

      {/* Background Responsive Image Container */}
      <div className="absolute inset-0 z-0 overflow-hidden w-full h-full">
        <picture className="w-full h-full">

          {/* Mobile Hero Image */}
          <source
            media="(max-width: 767px)"
            type="image/webp"
            srcSet="/Photo/phone.webp"
          />

          <source
            media="(max-width: 767px)"
            srcSet="/Photo/phone.jpeg"
          />

          {/* Desktop & Tablet Hero Image */}
          <source
            media="(min-width: 768px)"
            type="image/webp"
            srcSet="/Photo/laptop1.webp"
          />

          <source
            media="(min-width: 768px)"
            srcSet="/Photo/laptop1.png"
          />

          {/* Fallback / Primary Hero Image */}
          <img
            src="/Photo/phone.webp"
            alt="Hotel Tawa Resort scenic view surrounded by nature"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width="1920"
            height="1080"
            className="w-full h-full object-cover object-center lg:[object-position:center_25%] filter brightness-[0.90] contrast-[1.03]"
          />
        </picture>

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-black/30 lg:bg-black/20" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 w-full max-w-full lg:max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8 text-center pt-[42vh] sm:pt-[48vh] lg:pt-[34vh] pb-3 sm:pb-4 flex flex-col items-center justify-end lg:translate-y-[20px]">

        {/* Main SEO Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif italic font-normal text-[22px] sm:text-[28px] lg:text-[36px] text-[#D4AF37] leading-tight drop-shadow-md tracking-tight lg:mb-3"
        >
          Hotel Tawa Resort
        </motion.h1>

        {/* Supporting Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 sm:mt-5 lg:mt-3 text-[14px] sm:text-[15px] lg:text-[16px] text-white font-light w-full max-w-full sm:max-w-[520px] lg:max-w-[620px] leading-relaxed lg:leading-[1.8] drop-shadow-sm text-center px-1"
        >
          Experience nature, luxury and peace with beautiful backwater views, comfortable stays and unforgettable resort experiences.
        </motion.p>

        {/* Hero Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 sm:mt-8 lg:mt-[30px] flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-[20px] w-full max-w-[360px] sm:max-w-none sm:w-auto"
        >

          {/* Explore Resort */}
          <a
            href="#about"
            aria-label="Explore Hotel Tawa Resort"
            className="w-full sm:w-auto lg:w-[260px] h-[48px] sm:h-[52px] lg:h-[58px] px-6 sm:px-8 py-0 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#234B33] hover:bg-[#1D4D2C] shadow-lg hover:-translate-y-0.5 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <Compass
              className="w-4 h-4 text-[#D4AF37]"
              aria-hidden="true"
            />

            <span>Explore Resort</span>
          </a>

          {/* View Rooms */}
          <a
            href="#rooms"
            aria-label="View rooms at Hotel Tawa Resort"
            className="w-full sm:w-auto lg:w-[260px] h-[48px] sm:h-[52px] lg:h-[58px] px-6 sm:px-8 py-0 rounded-full text-xs font-bold uppercase tracking-wider text-[#234B33] bg-white border border-[#234B33] hover:bg-[#F8FAF8] shadow-md hover:-translate-y-0.5 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Bed
              className="w-4 h-4 text-[#234B33]"
              aria-hidden="true"
            />

            <span>View Rooms</span>
          </a>

        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-5 sm:mt-6 lg:mt-6 flex flex-col items-center gap-1 text-slate-300 text-[10px] tracking-[0.25em] uppercase font-semibold"
        >
          <span>Scroll to Explore</span>

          <a
            href="#about"
            aria-label="Scroll to explore Hotel Tawa Resort"
            className="p-1 rounded-full bg-white/10 border border-white/20 text-white hover:text-[#D4AF37] animate-bounce transition-colors"
          >
            <ChevronDown
              className="w-3.5 h-3.5"
              aria-hidden="true"
            />
          </a>
        </motion.div>

      </div>

    </section>
  );
}