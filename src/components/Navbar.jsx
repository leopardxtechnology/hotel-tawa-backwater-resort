import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import { RESORT_INFO, ROOMS } from '../data/resortData';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Rooms', href: '#rooms', hasMega: true },
    { name: 'Packages', href: '#packages' },
    { name: 'Activities', href: '#activities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Fixed Compact Navbar: Exactly 58px Desktop, 68px Mobile */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          maxWidth: '100%',
          zIndex: 9999,
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
        }}
        className={`transition-all duration-300 h-[68px] min-h-[68px] lg:h-[58px] lg:min-h-[58px] lg:max-h-[58px] py-0 px-4 sm:px-6 lg:px-8 flex items-center ${
          isScrolled ? 'shadow-md' : 'shadow-sm'
        }`}
      >
        <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between h-full py-0">
          
          {/* Left Brand Logo & Two-Line Typography Unit */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 shrink-0 group min-w-0 my-auto">
            <img
              src="/Photo/logo.webp"
              alt="Hotel Tawa Resort Logo"
              decoding="async"
              className="h-[36px] sm:h-[40px] lg:h-[38px] w-auto object-contain shrink-0 group-hover:scale-105 transition-transform duration-300"
            />

            <div className="flex flex-col justify-center text-left min-w-0">
              <span className="font-serif text-[17px] sm:text-[20px] lg:text-[17px] font-semibold text-[#234B33] leading-none tracking-tight group-hover:text-[#1B1B1B] transition-colors truncate">
                HOTEL TAWA
              </span>
              <span className="font-sans text-[11px] sm:text-[12px] lg:text-[10px] font-medium text-[#B88A1B] leading-none mt-0.5 truncate">
                Backwater Resort
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (Centered, Vertically Centered) */}
          <nav className="hidden lg:flex flex-1 items-center justify-center gap-8 xl:gap-10 h-full py-0">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative py-0 h-full flex items-center"
                onMouseEnter={() => link.hasMega && setMegaMenuOpen(true)}
                onMouseLeave={() => link.hasMega && setMegaMenuOpen(false)}
              >
                <a
                  href={link.href}
                  className="text-[13px] xl:text-[14px] font-medium text-[#1B1B1B] hover:text-[#234B33] transition-colors flex items-center gap-1.5 group py-1"
                >
                  {link.name}
                  {link.hasMega && (
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${megaMenuOpen ? 'rotate-180 text-[#234B33]' : 'text-slate-400'}`} />
                  )}
                  <span className="absolute bottom-1.5 left-0 w-0 h-[2px] bg-[#234B33] transition-all duration-300 group-hover:w-full" />
                </a>

                {/* Rooms Mega Dropdown (Safely Positioned) */}
                {link.hasMega && (
                  <AnimatePresence>
                    {megaMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full -left-28 w-[580px] max-w-[calc(100vw-32px)] bg-white border border-black/[0.08] rounded-[24px] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.12)] grid grid-cols-2 gap-2.5 z-50 mt-1"
                      >
                        <div className="col-span-2 flex items-center justify-between border-b border-black/[0.06] pb-2.5 mb-1">
                          <span className="text-xs uppercase tracking-widest font-bold text-[#234B33] flex items-center gap-2">
                            <Sparkles className="w-3.5 h-3.5 text-[#B88A1B]" /> Suites & Accommodations
                          </span>
                          <span className="text-[11px] text-[#555555] font-medium">5 Luxury Categories</span>
                        </div>
                        {ROOMS.map((room) => (
                          <a
                            key={room.id}
                            href="#rooms"
                            className="flex items-center gap-3 p-2 rounded-2xl hover:bg-[#F8FAF8] border border-transparent hover:border-black/[0.06] transition-all group/item"
                          >
                            <img
                              src={room.images[0]}
                              alt={room.name}
                              loading="lazy"
                              decoding="async"
                              className="w-12 h-10 object-cover rounded-xl group-hover/item:scale-105 transition-transform"
                            />
                            <div className="flex-1 min-w-0">
                              <h4 className="text-xs font-bold text-[#1B1B1B] group-hover/item:text-[#234B33] truncate">
                                {room.name}
                              </h4>
                              <p className="text-[10px] text-[#555555] truncate">{room.subtitle}</p>
                              <span className="text-[10px] text-[#B88A1B] font-semibold">{room.price} <span className="text-[9px] text-[#555555] font-normal">{room.priceUnit}</span></span>
                            </div>
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Right CTA Button (Height 36px, Vertically Centered) */}
          <div className="hidden lg:flex items-center gap-4 shrink-0 my-auto">
            <button
              onClick={() => onOpenBooking()}
              className="h-[36px] px-4 rounded-[10px] text-[11px] font-bold uppercase tracking-wider text-[#1B1B1B] bg-gradient-to-r from-[#C9A227] via-[#E8D9A8] to-[#B58F1C] shadow-gold-glow hover:-translate-y-0.5 hover:scale-[1.03] active:scale-95 transition-all duration-300 flex items-center gap-1.5 shrink-0"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#1B1B1B]" /> Book Now
            </button>
          </div>

          {/* Mobile Hamburger Button (44x44, White, Rounded 14px, Soft Shadow, Green Icon) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ width: '44px', height: '44px', borderRadius: '14px' }}
            className="lg:hidden bg-white border border-black/[0.06] shadow-md flex items-center justify-center text-[#234B33] hover:bg-[#F8FAF8] transition-all shrink-0 active:scale-95 cursor-pointer ml-2"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-[#234B33]" />
            ) : (
              <div className="flex flex-col gap-[4.5px] w-[18px] justify-center items-center">
                <span className="w-full h-[2.5px] bg-[#234B33] rounded-full" />
                <span className="w-full h-[2.5px] bg-[#234B33] rounded-full" />
                <span className="w-full h-[2.5px] bg-[#234B33] rounded-full" />
              </div>
            )}
          </button>

        </div>
      </header>

      {/* Fullscreen Mobile Slide Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 10000,
              backgroundColor: 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
            }}
            className="lg:hidden flex flex-col justify-between p-5 sm:p-8 pt-20 overflow-y-auto w-full max-w-full"
          >
            <div className="flex items-center justify-between border-b border-black/[0.06] pb-4 mb-4">
              <span className="text-xs uppercase tracking-[0.2em] text-[#B88A1B] font-bold truncate">
                Hotel Tawa Resort
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-9 h-9 rounded-full bg-white border border-black/[0.08] shadow-sm flex items-center justify-center text-[#234B33] shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col gap-3.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-xl sm:text-2xl font-bold text-[#234B33] hover:text-[#B88A1B] transition-colors flex items-center justify-between py-2 border-b border-black/[0.04]"
                >
                  <span>{link.name}</span>
                  <span className="text-sm font-sans text-[#B88A1B]">→</span>
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3 pt-5 mt-4 border-t border-black/[0.06]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full h-[48px] rounded-[14px] text-xs font-bold uppercase tracking-wider text-[#1B1B1B] bg-gradient-to-r from-[#C9A227] via-[#E8D9A8] to-[#B58F1C] shadow-gold-glow flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#1B1B1B]" /> Book Now
              </button>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <a
                  href={`https://wa.me/${RESORT_INFO.whatsapp}?text=Hi%20Hotel%20Tawa%20Resort,%20I%20would%20like%20to%20enquire%20about%20stay%20availability.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 rounded-[14px] bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 text-xs font-bold flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" /> WhatsApp
                </a>

                <a
                  href={`tel:${RESORT_INFO.rawPhone}`}
                  className="py-3 rounded-[14px] bg-[#F8FAF8] border border-black/[0.08] text-[#1B1B1B] text-xs font-bold flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#234B33]" /> Call Now
                </a>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
