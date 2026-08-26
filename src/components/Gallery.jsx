import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, ChevronLeft, ChevronRight, ZoomIn, Images } from 'lucide-react';
import { GALLERY_IMAGES } from '../data/resortData';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);

  const categories = ['ALL', 'ROOMS', 'POOL', 'RESTAURANT', 'NATURE', 'EVENT', 'ACTIVITIES'];

  // Category click toggle handler
  const handleCategoryClick = (category) => {
    setSelectedCategory((prev) => (prev === category ? null : category));
  };

  // Filter photos based on selected category button
  const filteredImages = selectedCategory === null
    ? []
    : (selectedCategory === 'ALL'
        ? GALLERY_IMAGES
        : GALLERY_IMAGES.filter((img) => img.category.toUpperCase() === selectedCategory.toUpperCase()));

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'ArrowRight') {
        setActiveLightboxIndex((prev) => (prev + 1) % filteredImages.length);
      } else if (e.key === 'ArrowLeft') {
        setActiveLightboxIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
      } else if (e.key === 'Escape') {
        setActiveLightboxIndex(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, filteredImages.length]);

  return (
    <section id="gallery" className={`pt-6 relative bg-[#FFFFFF] transition-all duration-300 ${selectedCategory === null ? 'pb-4 sm:pb-6' : 'pb-12 sm:pb-16'}`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2F6B3E]/10 border border-[#2F6B3E]/20 text-[#2F6B3E] text-xs font-semibold uppercase tracking-widest mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" /> Visual Splendor
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-bold text-[#1B1B1B] tracking-tight"
          >
            Resort Gallery & Backwater Views
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-[#555555] text-base font-light max-w-2xl mx-auto"
          >
            Select a category below to explore our resort suites, infinity pool, dining, activities, and scenic lake views.
          </motion.p>
        </div>

        {/* Category Filter Pills (Primary Control) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-[#2F6B3E] text-white shadow-md font-bold scale-105 border border-[#2F6B3E]'
                  : 'bg-[#F8FAF8] border border-[#ECECEC] text-[#555555] hover:text-[#2F6B3E] hover:border-[#2F6B3E]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Result Indicator / Select Category Hint */}
        <div className="text-center mb-8 min-h-[36px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {selectedCategory === null ? (
              <motion.div
                key="hint"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#F8FAF8] border border-[#ECECEC] text-xs text-[#555555] font-medium"
              >
                <Images className="w-4 h-4 text-[#C9A227]" /> Select a category above to view photos
              </motion.div>
            ) : (
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2F6B3E]/10 border border-[#2F6B3E]/20 text-[#2F6B3E] text-xs font-bold uppercase tracking-wider"
              >
                <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
                {selectedCategory} · {filteredImages.length} {filteredImages.length === 1 ? 'PHOTO' : 'PHOTOS'}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Dynamic Responsive Photo Grid (Rendered only after category selection) */}
        <AnimatePresence mode="wait">
          {selectedCategory !== null && (
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredImages.map((img, index) => (
                <motion.div
                  layout
                  key={img.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  onClick={() => setActiveLightboxIndex(index)}
                  className="relative group rounded-3xl overflow-hidden white-card border border-[#ECECEC] cursor-pointer shadow-sm hover:shadow-luxury transition-all h-64 sm:h-72"
                >
                  <img
                    src={img.url}
                    alt={`${img.title} at Hotel Tawa Resort`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.97]"
                  />
                  
                  {/* Category Badge */}
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#2F6B3E] text-[10px] font-bold uppercase tracking-wider shadow-sm">
                    {img.category}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* Lightbox Fullscreen Modal */}
      <AnimatePresence>
        {activeLightboxIndex !== null && filteredImages[activeLightboxIndex] && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md">
            
            {/* Click outside backdrop to close */}
            <div className="absolute inset-0" onClick={() => setActiveLightboxIndex(null)} />

            {/* Top Bar Controls */}
            <div className="absolute top-6 left-6 right-6 z-20 flex items-center justify-between pointer-events-none">
              <div className="flex items-center gap-3 pointer-events-auto">
                <span className="px-3.5 py-1 rounded-full bg-[#C9A227] text-[#1B1B1B] text-xs font-bold uppercase tracking-wider shadow-sm">
                  {filteredImages[activeLightboxIndex].category}
                </span>
                <span className="text-xs text-white font-medium bg-black/40 px-3 py-1 rounded-full border border-white/20">
                  {activeLightboxIndex + 1} / {filteredImages.length}
                </span>
              </div>

              <button
                onClick={() => setActiveLightboxIndex(null)}
                className="pointer-events-auto p-3 rounded-full bg-white/10 text-white hover:bg-white hover:text-[#1B1B1B] transition-all shadow-md"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Previous Photo Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveLightboxIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
              }}
              className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 text-white hover:bg-[#C9A227] hover:text-[#1B1B1B] transition-all shadow-lg"
              aria-label="Previous Photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Main Image Preview */}
            <motion.div
              key={filteredImages[activeLightboxIndex].id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 max-w-5xl max-h-[82vh] flex flex-col items-center justify-center p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredImages[activeLightboxIndex].url}
                alt={filteredImages[activeLightboxIndex].title}
                className="max-w-full max-h-[72vh] object-contain rounded-2xl shadow-2xl border border-white/20"
              />
              <div className="mt-4 text-center max-w-2xl">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  {filteredImages[activeLightboxIndex].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-light mt-1">
                  {filteredImages[activeLightboxIndex].desc}
                </p>
              </div>
            </motion.div>

            {/* Next Photo Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveLightboxIndex((prev) => (prev + 1) % filteredImages.length);
              }}
              className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 text-white hover:bg-[#C9A227] hover:text-[#1B1B1B] transition-all shadow-lg"
              aria-label="Next Photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
