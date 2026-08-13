import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Check, ChevronDown, Clock, Utensils, AlertTriangle, MapPin, Coffee, Sun, Moon, Calendar, ShieldCheck, CheckCircle2, AlertCircle, UserX, RefreshCw, LogOut, CreditCard, FileText, Phone, MessageCircle, Waves, Ban, ShieldAlert } from 'lucide-react';
import { PACKAGES, RESORT_INFO } from '../data/resortData';

export default function Packages({ onBookPackage }) {
  return (
    <section id="packages" className="pt-6 pb-6 sm:pt-8 sm:pb-8 relative bg-[#FFFFFF] overflow-hidden">
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2F6B3E]/10 border border-[#2F6B3E]/20 text-[#2F6B3E] text-xs font-semibold uppercase tracking-widest mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" /> All-Inclusive Backwater Package
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-bold text-[#1B1B1B] tracking-tight"
          >
            Curated Resort Packages
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-[#555555] text-base font-light max-w-2xl mx-auto"
          >
            Experience complete relaxation with our per-head stay package including 4 full meals, swimming pool, rain dance, karaoke, and riverside trek.
          </motion.p>
        </div>

        {/* Real Package Card Presentation */}
        <div className="space-y-8">
          {PACKAGES.map((pkg, index) => (
            <RealPackageCard
              key={pkg.id}
              pkg={pkg}
              index={index}
              onBookPackage={() => onBookPackage(pkg.name)}
            />
          ))}
        </div>

        {/* Expandable Terms & Conditions Section */}
        <TermsAndConditions />

        {/* Booking & Cancellation Policy Section */}
        <CancellationPolicy />

      </div>
    </section>
  );
}

function RealPackageCard({ pkg, index, onBookPackage }) {
  const [mealsExpanded, setMealsExpanded] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative rounded-3xl p-6 sm:p-10 transition-all duration-500 white-card border-2 border-[#C9A227] shadow-luxury max-w-full"
    >
      {/* Official Gold Badge */}
      <div className="absolute -top-3.5 sm:-top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#C9A227] text-[#1B1B1B] text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-md flex items-center gap-1.5 whitespace-nowrap z-10 max-w-[92%] sm:max-w-none justify-center">
        <Sparkles className="w-3.5 h-3.5 text-[#1B1B1B] shrink-0" /> <span className="truncate">{pkg.badge}</span>
      </div>

      <div className="space-y-8">
        
        {/* Package Header Info */}
        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-center gap-2 text-xs font-bold text-[#2F6B3E] uppercase tracking-wider">
            {/* First row on mobile: Check-in and Check-out side by side */}
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 w-full sm:w-auto">
              <span className="flex-1 sm:flex-none px-2.5 sm:px-3 py-1 rounded-full bg-[#2F6B3E]/10 border border-[#2F6B3E]/20 flex items-center justify-center gap-1 sm:gap-1.5 text-center text-[10px] sm:text-xs whitespace-nowrap">
                <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C9A227] shrink-0" /> Check-In: {pkg.checkIn}
              </span>
              <span className="flex-1 sm:flex-none px-2.5 sm:px-3 py-1 rounded-full bg-[#2F6B3E]/10 border border-[#2F6B3E]/20 flex items-center justify-center gap-1 sm:gap-1.5 text-center text-[10px] sm:text-xs whitespace-nowrap">
                <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C9A227] shrink-0" /> Check-Out: {pkg.checkOut}
              </span>
            </div>

            {/* Second row on mobile: 22-Hour Stay centered below */}
            <div className="flex items-center justify-center w-full sm:w-auto">
              <span className="px-3 py-1 rounded-full bg-[#C9A227]/15 text-[#1B1B1B] border border-[#C9A227]/30 flex items-center justify-center gap-1.5 text-center text-[10px] sm:text-xs whitespace-nowrap">
                🏡 {pkg.stayDuration}
              </span>
            </div>
          </div>

          <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#1B1B1B]">
            {pkg.name}
          </h3>
          <p className="text-sm text-[#555555] font-light leading-relaxed max-w-3xl">
            {pkg.tagline}
          </p>
        </div>

        {/* Price & Location Box */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#F8FAF8] border border-[#ECECEC] grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7 space-y-1">
            <span className="block text-xs text-[#555555] uppercase tracking-wider font-semibold">Official Tariff Breakdown</span>
            <div className="flex flex-wrap items-baseline gap-2">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#2F6B3E]">{pkg.price}</span>
              <span className="text-xs text-[#555555] font-medium">{pkg.pricePer}</span>
              <span className="text-xs text-[#555555] font-light">({pkg.basePrice} + 5% GST)</span>
            </div>
            <span className="inline-block text-[11px] text-emerald-800 font-semibold mt-1">
              ✓ All 4 Meals & Activities Included
            </span>
          </div>

          <div className="md:col-span-5 flex flex-col justify-center border-t md:border-t-0 md:border-l border-[#ECECEC] pt-4 md:pt-0 md:pl-6 space-y-1">
            <span className="text-xs font-bold text-[#2F6B3E] flex items-center gap-1.5 uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-[#C9A227]" /> Resort Location
            </span>
            <p className="text-xs text-[#1B1B1B] font-medium leading-normal">
              {RESORT_INFO.address}
            </p>
          </div>
        </div>

        {/* Starter Items Extra Charged Warning Banner */}
        <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center gap-2.5 text-xs text-amber-900 font-semibold">
          <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
          <span>Note: Starter Items Extra Charged</span>
        </div>

        {/* Included Meals Breakdown Section */}
        <div className="space-y-4 pt-2">
          <div className="flex items-center justify-between border-b border-[#ECECEC] pb-3">
            <h4 className="text-sm uppercase tracking-wider font-bold text-[#2F6B3E] flex items-center gap-2">
              <Utensils className="w-4 h-4 text-[#C9A227]" /> Included Meal Timings & Spread
            </h4>
            <span className="text-xs text-[#555555] font-medium">4 Full Meals</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Breakfast Card */}
            <div className="p-4 rounded-2xl bg-[#F8FAF8] border border-[#ECECEC] space-y-2">
              <div className="flex items-center justify-between border-b border-[#ECECEC] pb-2">
                <span className="text-xs font-bold text-[#2F6B3E] flex items-center gap-1.5">
                  <Coffee className="w-3.5 h-3.5 text-[#C9A227]" /> {pkg.mealPlan.breakfast.title}
                </span>
                <span className="text-[11px] font-semibold text-[#555555]">{pkg.mealPlan.breakfast.time}</span>
              </div>
              <p className="text-xs text-[#1B1B1B] font-medium leading-relaxed">
                {pkg.mealPlan.breakfast.items.join(' • ')}
              </p>
            </div>

            {/* Lunch Card */}
            <div className="p-4 rounded-2xl bg-[#F8FAF8] border border-[#ECECEC] space-y-2">
              <div className="flex items-center justify-between border-b border-[#ECECEC] pb-2">
                <span className="text-xs font-bold text-[#2F6B3E] flex items-center gap-1.5">
                  <Sun className="w-3.5 h-3.5 text-[#C9A227]" /> {pkg.mealPlan.lunch.title}
                </span>
                <span className="text-[11px] font-semibold text-[#555555]">{pkg.mealPlan.lunch.time}</span>
              </div>
              <p className="text-xs text-[#1B1B1B] font-medium leading-relaxed">
                {pkg.mealPlan.lunch.items.join(' • ')}
              </p>
            </div>

            {/* High Tea Card */}
            <div className="p-4 rounded-2xl bg-[#F8FAF8] border border-[#ECECEC] space-y-2">
              <div className="flex items-center justify-between border-b border-[#ECECEC] pb-2">
                <span className="text-xs font-bold text-[#2F6B3E] flex items-center gap-1.5">
                  <Coffee className="w-3.5 h-3.5 text-[#C9A227]" /> {pkg.mealPlan.hiTea.title}
                </span>
                <span className="text-[11px] font-semibold text-[#555555]">{pkg.mealPlan.hiTea.time}</span>
              </div>
              <p className="text-xs text-[#1B1B1B] font-medium leading-relaxed">
                {pkg.mealPlan.hiTea.items.join(' • ')}
              </p>
            </div>

            {/* Dinner Card (Veg & Non-Veg) */}
            <div className="p-4 rounded-2xl bg-[#F8FAF8] border border-[#ECECEC] space-y-2">
              <div className="flex items-center justify-between border-b border-[#ECECEC] pb-2">
                <span className="text-xs font-bold text-[#2F6B3E] flex items-center gap-1.5">
                  <Moon className="w-3.5 h-3.5 text-[#C9A227]" /> Dinner (Veg & Non-Veg Options)
                </span>
                <span className="text-[11px] font-semibold text-[#555555]">8:30 PM – 10:30 PM</span>
              </div>
              <div className="space-y-1.5 pt-1 text-xs">
                <div>
                  <span className="text-[11px] font-bold text-emerald-700 block mb-0.5">🥗 VEG:</span>
                  <span className="text-[#1B1B1B] font-medium">{pkg.mealPlan.dinnerVeg.items.join(' • ')}</span>
                </div>
                <div>
                  <span className="text-[11px] font-bold text-amber-800 block mb-0.5">🍗 NON-VEG:</span>
                  <span className="text-[#1B1B1B] font-medium">{pkg.mealPlan.dinnerNonVeg.items.join(' • ')}</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Included Activities & Experiences Grid */}
        <div className="space-y-4 pt-2 border-t border-[#ECECEC]">
          <h4 className="text-sm uppercase tracking-wider font-bold text-[#2F6B3E]">
            Included Activities & Resort Experiences
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {pkg.activities.map((act, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 rounded-2xl bg-[#F8FAF8] border border-[#ECECEC]">
                <Check className="w-4 h-4 text-[#2F6B3E] shrink-0" />
                <span className="text-xs text-[#1B1B1B] font-semibold">{act}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Booking CTA Button */}
      <div className="pt-8 mt-6 border-t border-[#ECECEC]">
        <button
          onClick={onBookPackage}
          className="w-full max-w-full px-3 sm:px-6 py-3.5 sm:py-4 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#1B1B1B] bg-[#C9A227] hover:bg-[#D4AF37] shadow-gold-glow hover:scale-[1.01] active:scale-95 transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 leading-tight text-center"
        >
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#1B1B1B] shrink-0" />
          <span>Book Per Head Package Now (₹2,048 / Person)</span>
        </button>
      </div>

    </motion.div>
  );
}

function TermsAndConditions() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-8 rounded-3xl bg-[#F8FAF8] border border-[#ECECEC] overflow-hidden transition-all shadow-sm">
      {/* Collapsible Header Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-[#F0F4F0]/60 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#2F6B3E]/10 border border-[#2F6B3E]/20 flex items-center justify-center text-[#2F6B3E] shrink-0">
            <FileText className="w-5 h-5 text-[#C9A227]" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#2F6B3E]">
              <Sparkles className="w-3 h-3 text-[#C9A227]" /> Resort Guidelines
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1B1B1B]">
              Terms & Conditions
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold text-[#2F6B3E]">
          <span className="hidden sm:inline">{isOpen ? "Hide Details" : "View Details"}</span>
          <div className={`p-2 rounded-full bg-white border border-[#ECECEC] text-[#1B1B1B] transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#2F6B3E]' : ''}`}>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
      </button>

      {/* Expanded Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-[#ECECEC]"
          >
            <div className="p-6 sm:p-8 space-y-8 bg-white">
              
              {/* Check-In / Check-Out Prominent Banner */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#2F6B3E]/5 border border-[#2F6B3E]/20 grid grid-cols-1 sm:grid-cols-2 gap-4 text-center sm:text-left items-center">
                <div className="flex items-center gap-3 justify-center sm:justify-start">
                  <div className="p-3 rounded-2xl bg-[#2F6B3E] text-white shrink-0 shadow-sm">
                    <Clock className="w-5 h-5 text-[#C9A227]" />
                  </div>
                  <div>
                    <span className="block text-[11px] uppercase tracking-wider font-bold text-[#2F6B3E]">Resort Check-In</span>
                    <span className="font-serif text-xl font-bold text-[#1B1B1B]">12:00 PM</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 justify-center sm:justify-start border-t sm:border-t-0 sm:border-l border-[#ECECEC] pt-3 sm:pt-0 sm:pl-6">
                  <div className="p-3 rounded-2xl bg-[#C9A227] text-[#1B1B1B] shrink-0 shadow-sm">
                    <Clock className="w-5 h-5 text-[#1B1B1B]" />
                  </div>
                  <div>
                    <span className="block text-[11px] uppercase tracking-wider font-bold text-[#2F6B3E]">Resort Check-Out</span>
                    <span className="font-serif text-xl font-bold text-[#1B1B1B]">10:00 AM</span>
                  </div>
                </div>
              </div>

              {/* Rules & Regulations Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                {/* 1. Meal Timings Strictly Followed */}
                <div className="p-5 rounded-2xl bg-[#F8FAF8] border border-[#ECECEC] space-y-3 md:col-span-2">
                  <div className="flex items-center gap-2 border-b border-[#ECECEC] pb-2">
                    <span className="w-6 h-6 rounded-full bg-[#2F6B3E] text-white text-[11px] font-bold flex items-center justify-center shrink-0">1</span>
                    <Utensils className="w-4 h-4 text-[#C9A227]" />
                    <h4 className="font-serif text-base font-bold text-[#1B1B1B]">
                      Meal Timings Strictly Followed
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                    <div className="p-3 rounded-xl bg-white border border-[#ECECEC]">
                      <span className="block font-bold text-[#2F6B3E]">Breakfast Time</span>
                      <span className="text-[#555555]">9:00 AM to 10:30 AM</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white border border-[#ECECEC]">
                      <span className="block font-bold text-[#2F6B3E]">Lunch Time</span>
                      <span className="text-[#555555]">1:00 PM to 3:30 PM</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white border border-[#ECECEC]">
                      <span className="block font-bold text-[#2F6B3E]">Hi-Tea Time</span>
                      <span className="text-[#555555]">5:30 PM to 6:30 PM</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white border border-[#ECECEC]">
                      <span className="block font-bold text-[#2F6B3E]">Dinner Time</span>
                      <span className="text-[#555555]">8:30 PM to 10:30 PM</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-amber-800 font-semibold bg-amber-500/10 p-2.5 rounded-xl border border-amber-500/20">
                    ⚠️ Note: Missed meal timings will not be served after the designated time.
                  </p>
                </div>

                {/* 2. No Drinks Allowed in the Activities Area */}
                <div className="p-5 rounded-2xl bg-[#F8FAF8] border border-[#ECECEC] space-y-2">
                  <div className="flex items-center gap-2 border-b border-[#ECECEC] pb-2">
                    <span className="w-6 h-6 rounded-full bg-[#2F6B3E] text-white text-[11px] font-bold flex items-center justify-center shrink-0">2</span>
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    <h4 className="font-serif text-base font-bold text-[#1B1B1B]">
                      No Drinks Allowed in the Activities Area
                    </h4>
                  </div>
                  <p className="text-xs text-[#555555] font-light leading-relaxed">
                    Any kind of beverages are strictly prohibited in the activities area.
                  </p>
                </div>

                {/* 3. Compulsory Swimwear in the Pool */}
                <div className="p-5 rounded-2xl bg-[#F8FAF8] border border-[#ECECEC] space-y-2">
                  <div className="flex items-center gap-2 border-b border-[#ECECEC] pb-2">
                    <span className="w-6 h-6 rounded-full bg-[#2F6B3E] text-white text-[11px] font-bold flex items-center justify-center shrink-0">3</span>
                    <Waves className="w-4 h-4 text-blue-600" />
                    <h4 className="font-serif text-base font-bold text-[#1B1B1B]">
                      Compulsory Swimwear in the Pool
                    </h4>
                  </div>
                  <p className="text-xs text-[#555555] font-light leading-relaxed">
                    Proper swimming costume is required to enter the pool.
                  </p>
                </div>

                {/* 4. Outside Drinks Not Allowed */}
                <div className="p-5 rounded-2xl bg-[#F8FAF8] border border-[#ECECEC] space-y-2">
                  <div className="flex items-center gap-2 border-b border-[#ECECEC] pb-2">
                    <span className="w-6 h-6 rounded-full bg-[#2F6B3E] text-white text-[11px] font-bold flex items-center justify-center shrink-0">4</span>
                    <Ban className="w-4 h-4 text-rose-600" />
                    <h4 className="font-serif text-base font-bold text-[#1B1B1B]">
                      Outside Drinks Not Allowed
                    </h4>
                  </div>
                  <p className="text-xs text-[#555555] font-light leading-relaxed">
                    Bringing outside food or beverages into the resort is strictly prohibited.
                  </p>
                </div>

                {/* 5. Outside Alcohol Consumption Policy */}
                <div className="p-5 rounded-2xl bg-[#F8FAF8] border border-[#ECECEC] space-y-2">
                  <div className="flex items-center gap-2 border-b border-[#ECECEC] pb-2">
                    <span className="w-6 h-6 rounded-full bg-[#2F6B3E] text-white text-[11px] font-bold flex items-center justify-center shrink-0">5</span>
                    <ShieldAlert className="w-4 h-4 text-amber-700" />
                    <h4 className="font-serif text-base font-bold text-[#1B1B1B]">
                      Outside Alcohol Consumption Policy
                    </h4>
                  </div>
                  <p className="text-xs text-[#555555] font-light leading-relaxed">
                    Alcohol brought from outside is permitted only inside the room or room balcony/gallery. Consumption of alcohol in any outdoor, common, or public area of the resort is strictly prohibited.
                  </p>
                </div>

                {/* 6. Please Follow Resort Rules & Regulations */}
                <div className="p-5 rounded-2xl bg-[#F8FAF8] border border-[#ECECEC] space-y-2 md:col-span-2">
                  <div className="flex items-center gap-2 border-b border-[#ECECEC] pb-2">
                    <span className="w-6 h-6 rounded-full bg-[#2F6B3E] text-white text-[11px] font-bold flex items-center justify-center shrink-0">6</span>
                    <ShieldCheck className="w-4 h-4 text-[#2F6B3E]" />
                    <h4 className="font-serif text-base font-bold text-[#1B1B1B]">
                      Please Follow Resort Rules & Regulations
                    </h4>
                  </div>
                  <p className="text-xs text-[#555555] font-light leading-relaxed">
                    Any damage or misconduct will be chargeable.
                  </p>
                </div>

              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function CancellationPolicy() {
  const policies = [
    {
      num: 1,
      title: "Booking Confirmation",
      desc: "Booking confirmation is subject to receipt of advance payment.",
      icon: CheckCircle2,
      badge: "Advance Required",
      badgeColor: "bg-emerald-500/10 text-emerald-800 border-emerald-500/20"
    },
    {
      num: 2,
      title: "More than 15 days before check-in",
      desc: "100% of the advance amount will be refunded.",
      icon: Calendar,
      badge: "100% Refund",
      badgeColor: "bg-emerald-500/10 text-emerald-800 border-emerald-500/20"
    },
    {
      num: 3,
      title: "7 to 15 days before check-in",
      desc: "50% of the advance amount will be refunded.",
      icon: Clock,
      badge: "50% Refund",
      badgeColor: "bg-amber-500/10 text-amber-800 border-amber-500/20"
    },
    {
      num: 4,
      title: "Less than 7 days before check-in",
      desc: "No refund will be provided.",
      icon: AlertCircle,
      badge: "No Refund",
      badgeColor: "bg-rose-500/10 text-rose-800 border-rose-500/20"
    },
    {
      num: 5,
      title: "No-Show Policy",
      desc: "If the guest does not arrive on the scheduled check-in date without prior notice, the entire booking amount/advance will be forfeited.",
      icon: UserX,
      badge: "Forfeited",
      badgeColor: "bg-rose-500/10 text-rose-800 border-rose-500/20"
    },
    {
      num: 6,
      title: "Date Change / Rescheduling",
      desc: "Subject to room availability and management approval. Any rate difference will be charged accordingly.",
      icon: RefreshCw,
      badge: "Subject to Availability",
      badgeColor: "bg-blue-500/10 text-blue-800 border-blue-500/20"
    },
    {
      num: 7,
      title: "Early Check-Out",
      desc: "No refund will be provided for unused room nights or package services.",
      icon: LogOut,
      badge: "Non-Refundable",
      badgeColor: "bg-slate-500/10 text-slate-800 border-slate-500/20"
    },
    {
      num: 8,
      title: "Refund Processing",
      desc: "Approved refunds will be processed within 7–10 working days through the original mode of payment.",
      icon: CreditCard,
      badge: "7–10 Working Days",
      badgeColor: "bg-[#2F6B3E]/10 text-[#2F6B3E] border-[#2F6B3E]/20"
    },
    {
      num: 9,
      title: "Policy Amendment",
      desc: "Management reserves the right to amend the cancellation policy without prior notice.",
      icon: FileText,
      badge: "Management Terms",
      badgeColor: "bg-slate-500/10 text-slate-800 border-slate-500/20"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-10 sm:mt-14 space-y-8"
    >
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2F6B3E]/10 border border-[#2F6B3E]/20 text-[#2F6B3E] text-xs font-semibold uppercase tracking-widest">
          <ShieldCheck className="w-3.5 h-3.5 text-[#C9A227]" /> Guidelines & Terms
        </div>
        <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#1B1B1B]">
          Booking & Cancellation Policy
        </h3>
        <p className="text-xs sm:text-sm text-[#555555] font-light">
          Please review our standard reservation, cancellation, and refund guidelines for a seamless stay experience.
        </p>
      </div>

      {/* Policy Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {policies.map((p) => {
          const IconComp = p.icon;
          const isFullWidth = p.num === 9;
          return (
            <div
              key={p.num}
              className={`p-5 rounded-3xl bg-[#F8FAF8] border border-[#ECECEC] hover:border-[#2F6B3E]/40 transition-all duration-300 flex flex-col justify-between space-y-3 ${
                isFullWidth ? 'md:col-span-2 py-6 sm:py-7' : ''
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="flex items-center gap-2 text-xs font-bold text-[#2F6B3E]">
                    <span className="w-6 h-6 rounded-full bg-[#2F6B3E] text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                      {p.num}
                    </span>
                    <IconComp className="w-4 h-4 text-[#C9A227]" />
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold border ${p.badgeColor}`}>
                    {p.badge}
                  </span>
                </div>

                <h4 className="font-serif text-base sm:text-lg font-bold text-[#1B1B1B] pt-1">
                  {p.title}
                </h4>

                <p className="text-xs text-[#555555] font-light leading-relaxed max-w-4xl">
                  {p.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Contact CTA Box */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#F8FAF8] border-2 border-[#C9A227]/40 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1.5 text-center md:text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2F6B3E]">
            For booking assistance
          </span>
          <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#1B1B1B]">
            Hotel Tawa Backwater Resort
          </h4>
          <p className="text-xs text-[#555555] font-medium flex items-center justify-center md:justify-start gap-1">
            <MapPin className="w-3.5 h-3.5 text-[#C9A227]" /> Pasure, Bhor, Maharashtra
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
          <a
            href={`tel:${RESORT_INFO.rawPhone}`}
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#2F6B3E] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#245430] transition-all shadow-sm"
          >
            <Phone className="w-4 h-4 text-[#C9A227]" /> +91 95117 50025
          </a>
          <a
            href={`https://wa.me/${RESORT_INFO.whatsapp}?text=Hi%20Hotel%20Tawa%20Backwater%20Resort,%20I%20have%20a%20query%20regarding%20booking%20and%20cancellation%20policy.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#C9A227] text-[#1B1B1B] text-xs font-bold uppercase tracking-wider hover:bg-[#D4AF37] transition-all shadow-gold-glow"
          >
            <MessageCircle className="w-4 h-4 text-[#1B1B1B]" /> WhatsApp Desk
          </a>
        </div>
      </div>
    </motion.div>
  );
}
