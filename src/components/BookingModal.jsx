import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';
import { BookingForm } from './BookingSection';

export default function BookingModal({ isOpen, onClose, selectedRoom = '', selectedPackage = '' }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm">
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-xl bg-white border border-[#ECECEC] rounded-3xl shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/90 border border-[#ECECEC] text-[#1B1B1B] hover:text-[#2F6B3E] transition-all shadow-sm cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="overflow-y-auto p-6 sm:p-8 space-y-4">
            <div className="text-center space-y-1.5 pb-2">
              <span className="text-xs uppercase tracking-widest text-[#2F6B3E] font-bold flex items-center justify-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" /> Hotel Tawa Resort
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1B1B1B]">
                Book Your Stay
              </h3>
            </div>

            <BookingForm
              initialPackage={selectedPackage}
              initialRoom={selectedRoom}
              onSubmitted={onClose}
            />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
