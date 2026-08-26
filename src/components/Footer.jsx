import React from 'react';
import { Sparkles, Instagram, Facebook, Youtube } from 'lucide-react';
import { RESORT_INFO, ROOMS, GALLERY_IMAGES } from '../data/resortData';

export default function Footer({ onOpenBooking }) {
  return (
    <footer className="bg-[#1B1B1B] text-slate-300 pt-16 sm:pt-20 pb-10 border-t border-[#ECECEC] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-[#2F6B3E] text-[#C9A227] flex items-center justify-center shadow-md">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="font-serif text-xl font-bold text-white tracking-wider">
                HOTEL TAWA <span className="text-[#C9A227]">RESORT</span>
              </span>
            </a>

            <p className="text-xs text-slate-400 font-light leading-relaxed">
              Hotel Tawa Resort is Maharashtra's premier eco-luxury destination perched on the pristine banks of Tawa Dam Reservoir. Where nature, fine dining, infinity pool fun, and 5-star hospitality unite.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={RESORT_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hotel Tawa Resort Instagram Profile"
                className="p-2.5 rounded-full bg-white/10 text-white hover:text-[#C9A227] transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={RESORT_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hotel Tawa Resort Facebook Profile"
                className="p-2.5 rounded-full bg-white/10 text-white hover:text-[#C9A227] transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={RESORT_INFO.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hotel Tawa Resort YouTube Profile"
                className="p-2.5 rounded-full bg-white/10 text-white hover:text-[#C9A227] transition-all"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#C9A227] uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><a href="#about" className="hover:text-[#C9A227] transition-colors">About Sanctuary</a></li>
              <li><a href="#highlights" className="hover:text-[#C9A227] transition-colors">Resort Highlights</a></li>
              <li><a href="#packages" className="hover:text-[#C9A227] transition-colors">Day & Stay Packages</a></li>
              <li><a href="#activities" className="hover:text-[#C9A227] transition-colors">Activities & Games</a></li>
              <li><a href="#gallery" className="hover:text-[#C9A227] transition-colors">Masonry Gallery</a></li>
              <li><a href="#reviews" className="hover:text-[#C9A227] transition-colors">Guest Testimonials</a></li>
              <li><a href="#faq" className="hover:text-[#C9A227] transition-colors">FAQ & Rules</a></li>
            </ul>
          </div>

          {/* Accommodations */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#C9A227] uppercase tracking-wider">Accommodations</h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {ROOMS.map((r) => (
                <li key={r.id}>
                  <a href="#rooms" className="hover:text-[#C9A227] transition-colors flex items-center justify-between">
                    <span>{r.name}</span>
                    <span className="text-[10px] text-[#C9A227] font-semibold">{r.price}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Instagram Grid */}
          <div className="lg:col-span-3 space-y-3">
            <a
              href={RESORT_INFO.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif text-sm font-bold text-[#C9A227] uppercase tracking-wider flex items-center gap-1.5 hover:underline block"
            >
              <Instagram className="w-4 h-4 text-[#C9A227]" /> @hoteltawaresort
            </a>
            <div className="grid grid-cols-3 gap-2">
              {GALLERY_IMAGES.slice(0, 6).map((img) => (
                <a
                  key={img.id}
                  href="#gallery"
                  className="relative h-16 rounded-xl overflow-hidden group border border-white/10"
                >
                  <img
                    src={img.url}
                    alt={img.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#1B1B1B]/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Instagram className="w-4 h-4 text-[#C9A227]" />
                  </div>
                </a>
              ))}
            </div>
            <span className="text-[11px] text-slate-400 block pt-1">Tag #TawaBackwaterResort on Instagram to feature!</span>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Hotel Tawa Resort. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#faq" className="hover:text-[#C9A227]">Privacy Policy</a>
            <a href="#faq" className="hover:text-[#C9A227]">Terms of Stay</a>
            <a href="#contact" className="hover:text-[#C9A227]">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
