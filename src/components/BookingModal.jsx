import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import BookingSection from './BookingSection';

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
          className="relative w-full max-w-4xl bg-white border border-[#ECECEC] rounded-3xl shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/90 border border-[#ECECEC] text-[#1B1B1B] hover:text-[#2F6B3E] transition-all shadow-sm"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="overflow-y-auto p-4 sm:p-6">
            <BookingSection initialRoom={selectedRoom} initialPackage={selectedPackage} />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
