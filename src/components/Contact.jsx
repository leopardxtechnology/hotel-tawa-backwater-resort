import React from 'react';
import {
  motion
} from 'framer-motion';
import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  Sparkles,
  Navigation
} from 'lucide-react';
import { RESORT_INFO } from '../data/resortData';

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="pt-6 sm:pt-8 pb-20 sm:pb-28 relative bg-[#FFFFFF]"
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* =====================================================
            SEO-FRIENDLY CONTACT HEADER
        ====================================================== */}

        <div className="text-center max-w-3xl mx-auto mb-16">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2F6B3E]/10 border border-[#2F6B3E]/20 text-[#2F6B3E] text-xs font-semibold uppercase tracking-widest mb-4"
          >

            <Sparkles
              className="w-3.5 h-3.5 text-[#C9A227]"
              aria-hidden="true"
            />

            Contact Hotel Tawa Resort

          </motion.div>


          <motion.h2
            id="contact-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.1
            }}
            className="font-serif text-3xl sm:text-5xl font-bold text-[#1B1B1B] tracking-tight"
          >
            Hotel Tawa Resort Location & Contact
          </motion.h2>


          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.2
            }}
            className="mt-4 text-[#555555] text-base font-light max-w-2xl mx-auto leading-relaxed"
          >
            Find Hotel Tawa Resort, contact our team for reservations and
            enquiries, and get directions to the resort using Google Maps.
          </motion.p>

        </div>


        {/* =====================================================
            CONTACT GRID
        ====================================================== */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">


          {/* ==================================================
              LEFT COLUMN
          =================================================== */}

          <div className="lg:col-span-5 space-y-4">


            {/* ==================================================
                ADDRESS
            =================================================== */}

            <address className="white-card white-card-hover p-6 flex items-start gap-4 not-italic">

              <div
                className="w-12 h-12 rounded-2xl bg-[#2F6B3E]/10 border border-[#2F6B3E]/20 flex items-center justify-center text-[#2F6B3E] shrink-0"
                aria-hidden="true"
              >

                <MapPin className="w-6 h-6" />

              </div>


              <div>

                <h3 className="text-xs uppercase tracking-wider font-bold text-[#2F6B3E] mb-1">
                  Hotel Tawa Resort Address
                </h3>

                <p className="text-xs sm:text-sm text-[#1B1B1B] leading-relaxed font-medium">
                  {RESORT_INFO.address}
                </p>

              </div>

            </address>


            {/* ==================================================
                PHONE
            =================================================== */}

            <div className="white-card white-card-hover p-6 flex items-start gap-4">

              <div
                className="w-12 h-12 rounded-2xl bg-[#2F6B3E]/10 border border-[#2F6B3E]/20 flex items-center justify-center text-[#2F6B3E] shrink-0"
                aria-hidden="true"
              >

                <Phone className="w-6 h-6" />

              </div>


              <div>

                <h3 className="text-xs uppercase tracking-wider font-bold text-[#2F6B3E] mb-1">
                  Hotel Tawa Resort Reservations
                </h3>


                <a
                  href={`tel:${RESORT_INFO.rawPhone}`}
                  aria-label={`Call Hotel Tawa Resort at ${RESORT_INFO.phone}`}
                  className="text-base font-bold text-[#1B1B1B] hover:text-[#2F6B3E] block"
                >
                  {RESORT_INFO.phone}
                </a>


                <p className="text-xs text-[#555555] mt-0.5">
                  Contact us for room reservations and enquiries.
                </p>

              </div>

            </div>


            {/* ==================================================
                WHATSAPP
            =================================================== */}

            <div className="white-card white-card-hover p-6 flex items-start gap-4">

              <div
                className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 shrink-0"
                aria-hidden="true"
              >

                <MessageCircle className="w-6 h-6" />

              </div>


              <div>

                <h3 className="text-xs uppercase tracking-wider font-bold text-emerald-700 mb-1">
                  WhatsApp Hotel Tawa Resort
                </h3>


                <a
                  href={`https://wa.me/${RESORT_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with Hotel Tawa Resort on WhatsApp"
                  className="text-xs font-bold text-[#1B1B1B] hover:text-emerald-600 block"
                >
                  Chat with us on WhatsApp →
                </a>


                <p className="text-xs text-[#555555] mt-0.5">
                  Send us your booking enquiry directly.
                </p>

              </div>

            </div>


            {/* ==================================================
                BUSINESS HOURS
            =================================================== */}

            <div className="white-card p-6 flex items-start gap-4">

              <div
                className="w-12 h-12 rounded-2xl bg-[#F8FAF8] border border-[#ECECEC] flex items-center justify-center text-[#555555] shrink-0"
                aria-hidden="true"
              >

                <Clock className="w-6 h-6" />

              </div>


              <div>

                <h3 className="text-xs uppercase tracking-wider font-bold text-[#2F6B3E] mb-1">
                  Resort Operating Hours
                </h3>


                <p className="text-xs text-[#1B1B1B] font-medium">
                  Resort Reception: 24/7
                </p>


                <p className="text-xs text-[#555555] mt-0.5">
                  Contact the resort for current restaurant and service timings.
                </p>

              </div>

            </div>


            {/* ==================================================
                GOOGLE MAPS LINK
            =================================================== */}

            <a
              href="https://maps.app.goo.gl/awuVPExekAnmq9Gr9"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Hotel Tawa Resort location in Google Maps"
              className="white-card white-card-hover p-5 flex items-center justify-center gap-2 text-sm font-bold text-[#2F6B3E] hover:text-[#1B1B1B] transition-colors"
            >

              <Navigation
                className="w-4 h-4 text-[#C9A227]"
                aria-hidden="true"
              />

              Open Hotel Tawa Resort in Google Maps →

            </a>

          </div>


          {/* ==================================================
              GOOGLE MAP
          =================================================== */}

          <div
            className="lg:col-span-7 h-full min-h-[450px] rounded-3xl overflow-hidden white-card border border-[#ECECEC] shadow-luxury relative group"
            aria-label="Google Maps location of Hotel Tawa Resort"
          >

            <iframe
              title="Hotel Tawa Resort Google Maps location"
              src="https://maps.google.com/maps?q=Hotel+Tawa+Resort&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{
                border: 0,
                minHeight: '450px',
                filter: 'brightness(0.98) contrast(1.02)'
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full object-cover"
            />

          </div>

        </div>

      </div>

    </section>
  );
}