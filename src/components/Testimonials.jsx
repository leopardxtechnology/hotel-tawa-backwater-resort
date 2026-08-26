import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Sparkles, ChevronLeft, ChevronRight, Quote, CheckCircle2, Award } from 'lucide-react';
import { REVIEWS, GOOGLE_REVIEWS_SUMMARY } from '../data/reviews';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  const currentReview = REVIEWS[currentIndex];

  return (
    <section id="reviews" className="pt-8 sm:pt-12 pb-6 sm:pb-10 relative bg-[#F8FAF8]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2F6B3E]/10 border border-[#2F6B3E]/20 text-[#2F6B3E] text-xs font-semibold uppercase tracking-widest mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" /> Guest Experiences
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-bold text-[#1B1B1B] tracking-tight"
          >
            What Our Guests Say
          </motion.h2>

          {/* Rating Summary Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white border border-[#ECECEC] shadow-soft"
          >
            <span className="font-serif text-3xl font-bold text-[#2F6B3E]">{GOOGLE_REVIEWS_SUMMARY.rating}</span>
            <div className="text-left">
              <div className="flex text-[#C9A227]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-xs text-[#555555] font-medium">{GOOGLE_REVIEWS_SUMMARY.totalReviews}</span>
            </div>
          </motion.div>
        </div>

        {/* Sliding Review Card */}
        <div className="relative max-w-4xl mx-auto">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.45 }}
              className="relative p-6 sm:p-10 rounded-3xl bg-white border border-[#ECECEC] shadow-luxury"
            >
              <Quote className="absolute top-6 right-6 w-14 h-14 sm:w-20 sm:h-20 text-[#2F6B3E]/10 pointer-events-none" />

              {/* Reviewer Header Info */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                
                <div className="flex items-center gap-3.5">
                  {/* Initials Avatar Placeholder (No AI faces) */}
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full ${currentReview.avatarBg} font-serif text-base sm:text-lg font-bold flex items-center justify-center border-2 border-[#C9A227] shadow-sm shrink-0`}>
                    {currentReview.initials}
                  </div>

                  <div className="space-y-0.5">
                    <h3 className="text-base sm:text-lg font-bold text-[#1B1B1B] flex items-center gap-2 flex-wrap">
                      <span>{currentReview.name}</span>
                      <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-semibold text-emerald-800 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Google Review
                      </span>
                    </h3>
                    <p className="text-xs text-[#555555]">
                      {currentReview.reviewCount} {currentReview.photosCount > 0 ? `· ${currentReview.photosCount} photos` : ''} · {currentReview.date}
                    </p>
                    <span className="inline-block text-[11px] font-semibold text-[#2F6B3E] pt-0.5">
                      {currentReview.tripType}
                    </span>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="flex items-center gap-1 text-[#C9A227]">
                  {[...Array(currentReview.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                  ))}
                  <span className="text-xs font-bold text-[#1B1B1B] ml-1">{currentReview.rating}.0</span>
                </div>

              </div>

              {/* Review Text */}
              <div className="space-y-3">
                <p className="text-sm sm:text-base text-[#1B1B1B] font-light leading-relaxed whitespace-pre-line italic">
                  "{currentReview.text}"
                </p>
              </div>

              {/* Specific Category Ratings Breakdown (Rooms, Service, Location) */}
              {currentReview.ratings && (
                <div className="mt-6 pt-4 border-t border-[#ECECEC] flex flex-wrap items-center gap-4 text-xs">
                  <span className="text-[#555555] font-semibold uppercase tracking-wider text-[11px]">Ratings Breakdown:</span>
                  <div className="flex flex-wrap items-center gap-3">
                    {currentReview.ratings.rooms && (
                      <span className="px-2.5 py-1 rounded-xl bg-[#F8FAF8] border border-[#ECECEC] text-[#1B1B1B] font-medium">
                        Rooms: <strong className="text-[#2F6B3E]">{currentReview.ratings.rooms}</strong>
                      </span>
                    )}
                    {currentReview.ratings.service && (
                      <span className="px-2.5 py-1 rounded-xl bg-[#F8FAF8] border border-[#ECECEC] text-[#1B1B1B] font-medium">
                        Service: <strong className="text-[#2F6B3E]">{currentReview.ratings.service}</strong>
                      </span>
                    )}
                    {currentReview.ratings.location && (
                      <span className="px-2.5 py-1 rounded-xl bg-[#F8FAF8] border border-[#ECECEC] text-[#1B1B1B] font-medium">
                        Location: <strong className="text-[#2F6B3E]">{currentReview.ratings.location}</strong>
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Hotel Highlights Tags */}
              {currentReview.highlights && currentReview.highlights.length > 0 && (
                <div className="mt-4 pt-3 border-t border-[#ECECEC]/70 flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-semibold text-[#555555] flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-[#C9A227]" /> Hotel Highlights:
                  </span>
                  {currentReview.highlights.map((h, i) => (
                    <span key={i} className="px-2.5 py-0.5 rounded-full bg-[#2F6B3E]/10 text-[#2F6B3E] text-[11px] font-semibold border border-[#2F6B3E]/20">
                      ✓ {h}
                    </span>
                  ))}
                </div>
              )}

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-[#ECECEC] flex items-center justify-between text-xs text-[#555555]">
                <span className="flex items-center gap-1.5 text-[#2F6B3E] font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" /> Verified Stay Experience
                </span>
                <span className="font-semibold text-[#1B1B1B]">Hotel Tawa Resort</span>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Carousel Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {REVIEWS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    idx === currentIndex ? 'w-8 bg-[#2F6B3E]' : 'w-2.5 bg-[#ECECEC]'
                  }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-white border border-[#ECECEC] text-[#1B1B1B] hover:text-[#2F6B3E] hover:border-[#2F6B3E] transition-all shadow-sm active:scale-95"
                aria-label="Previous Review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-white border border-[#ECECEC] text-[#1B1B1B] hover:text-[#2F6B3E] hover:border-[#2F6B3E] transition-all shadow-sm active:scale-95"
                aria-label="Next Review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
