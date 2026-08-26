import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Eye
} from 'lucide-react';
import { ROOMS } from '../data/resortData';
import RoomModal from './RoomModal';

export default function Rooms({ onBookRoom }) {
  const [selectedRoom, setSelectedRoom] = useState(null);

  return (
    <section
      id="rooms"
      aria-labelledby="rooms-heading"
      className="pt-10 pb-6 sm:pt-14 sm:pb-8 relative bg-[#F8FAF8]"
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* =====================================================
            SEO-FRIENDLY SECTION HEADER
        ====================================================== */}

        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">

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

            Hotel Tawa Resort Rooms
          </motion.div>


          <motion.h2
            id="rooms-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-bold text-[#1B1B1B] tracking-tight"
          >
            Rooms & Accommodation at Hotel Tawa Resort
          </motion.h2>


          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-[#555555] text-base font-light max-w-2xl mx-auto leading-relaxed"
          >
            Choose from comfortable accommodation options at Hotel Tawa
            Resort, designed for relaxing stays surrounded by nature and
            beautiful backwater views.
          </motion.p>

        </div>


        {/* =====================================================
            ROOM CARDS
        ====================================================== */}

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start"
          aria-label="Hotel Tawa Resort accommodation options"
        >

          {ROOMS.map((room, index) => (

            <RoomCard
              key={room.id}
              room={room}
              index={index}
              onViewDetails={() => setSelectedRoom(room)}
              onBookRoom={() => onBookRoom(room.name)}
            />

          ))}

        </div>

      </div>


      {/* =====================================================
          ROOM DETAIL MODAL
      ====================================================== */}

      <RoomModal
        room={selectedRoom}
        isOpen={!!selectedRoom}
        onClose={() => setSelectedRoom(null)}
        onBookNow={(roomName) => {
          setSelectedRoom(null);
          onBookRoom(roomName);
        }}
      />

    </section>
  );
}


/* ============================================================
   ROOM CARD
============================================================ */

function RoomCard({
  room,
  index,
  onViewDetails,
  onBookRoom
}) {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  /* ----------------------------------------------------------
     Prefetch adjacent room images
  ---------------------------------------------------------- */

  useEffect(() => {

    if (room.images && room.images.length > 1) {

      const nextIdx =
        (currentImageIndex + 1) % room.images.length;

      const prevIdx =
        (currentImageIndex - 1 + room.images.length) %
        room.images.length;


      const nextImg = new Image();
      nextImg.src = room.images[nextIdx];


      const prevImg = new Image();
      prevImg.src = room.images[prevIdx];

    }

  }, [currentImageIndex, room.images]);


  /* ----------------------------------------------------------
     Image Navigation
  ---------------------------------------------------------- */

  const nextImage = (e) => {

    e.stopPropagation();

    setCurrentImageIndex(
      (prev) => (prev + 1) % room.images.length
    );

  };


  const prevImage = (e) => {

    e.stopPropagation();

    setCurrentImageIndex(
      (prev) =>
        (prev - 1 + room.images.length) %
        room.images.length
    );

  };


  /* ----------------------------------------------------------
     Descriptive image ALT
  ---------------------------------------------------------- */

  const roomImageAlt =
    `${room.name} at Hotel Tawa Resort`;


  return (

    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.1
      }}
      className="white-card white-card-hover rounded-3xl overflow-hidden group flex flex-col justify-between"
      aria-label={`${room.name} at Hotel Tawa Resort`}
    >

      <div>

        {/* ==================================================
            ROOM IMAGE
        =================================================== */}

        <div
          className={`relative ${
            room.isVertical
              ? 'w-full aspect-[4/5]'
              : 'h-64'
          } overflow-hidden group/slider flex items-center justify-center`}
        >

          <img
            src={room.images[currentImageIndex]}
            alt={roomImageAlt}
            loading="lazy"
            decoding="async"
            className={`w-full h-full object-cover ${
              room.isVertical
                ? 'object-[center_35%]'
                : 'object-center'
            } group-hover:scale-105 transition-transform duration-700`}
          />


          <div
            className="absolute inset-0 bg-gradient-to-t from-[#1B1B1B]/70 via-transparent to-transparent opacity-80 pointer-events-none"
            aria-hidden="true"
          />


          {/* ==================================================
              ROOM BADGE
          =================================================== */}

          {room.badge && (

            <span className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#2F6B3E] text-[11px] font-bold uppercase tracking-wider border border-[#ECECEC] shadow-sm">
              {room.badge}
            </span>

          )}


          {/* ==================================================
              ROOM PRICE
          =================================================== */}

          {room.price && (

            <div
              className="absolute bottom-4 left-4 px-3.5 py-1.5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#ECECEC] shadow-md flex items-baseline gap-1"
              aria-label={`Room price ${room.price}`}
            >

              <span className="font-serif text-lg font-bold text-[#2F6B3E]">
                {room.price}
              </span>

              {room.priceUnit && (

                <span className="text-[10px] text-[#555555] font-medium">
                  {room.priceUnit}
                </span>

              )}

            </div>

          )}


          {/* ==================================================
              IMAGE NAVIGATION
          =================================================== */}

          {room.images.length > 1 && (

            <>

              <button
                type="button"
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-[#1B1B1B] flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-opacity shadow-md"
                aria-label={`Previous image of ${room.name}`}
              >
                <ChevronLeft
                  className="w-4 h-4"
                  aria-hidden="true"
                />
              </button>


              <button
                type="button"
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-[#1B1B1B] flex items-center justify-center opacity-100 sm:opacity-0 sm:group-hover/slider:opacity-100 transition-opacity shadow-md"
                aria-label={`Next image of ${room.name}`}
              >
                <ChevronRight
                  className="w-4 h-4"
                  aria-hidden="true"
                />
              </button>


              {/* Pagination Dots */}

              <div
                className="absolute bottom-4 right-4 flex items-center gap-1.5"
                aria-hidden="true"
              >

                {room.images.map((_, idx) => (

                  <span
                    key={idx}
                    className={`w-1.5 h-1.5 rounded-full transition-all ${
                      idx === currentImageIndex
                        ? 'w-4 bg-[#C9A227]'
                        : 'bg-white/60'
                    }`}
                  />

                ))}

              </div>

            </>

          )}

        </div>


        {/* ==================================================
            ROOM CONTENT
        =================================================== */}

        <div className="p-6 space-y-3">

          {/* Capacity / Size */}

          {(room.capacity || room.size) && (

            <div className="flex items-center justify-between text-xs text-[#555555] font-medium">

              {room.capacity && (

                <span className="flex items-center gap-1 font-bold text-[#2F6B3E]">

                  <Users
                    className="w-3.5 h-3.5 text-[#2F6B3E]"
                    aria-hidden="true"
                  />

                  {room.capacity}

                </span>

              )}


              {room.size && (

                <span className="text-[#C9A227] font-semibold">
                  {room.size}
                </span>

              )}

            </div>

          )}


          {/* Room Name */}

          <h3 className="font-serif text-xl font-bold text-[#1B1B1B] group-hover:text-[#2F6B3E] transition-colors">
            {room.name}
          </h3>


          {/* Room Description */}

          <p className="text-xs text-[#555555] font-light leading-relaxed line-clamp-2">
            {room.shortDesc}
          </p>


          {/* ==================================================
              ROOM FEATURES
          =================================================== */}

          {room.features && room.features.length > 0 && (

            <div
              className="flex flex-wrap gap-1.5 pt-2"
              aria-label={`Features of ${room.name}`}
            >

              {room.features
                .slice(0, 3)
                .map((feat, i) => (

                  <React.Fragment key={i}>

                    {i === 2 && (
                      <div
                        className="w-full h-0"
                        aria-hidden="true"
                      />
                    )}

                    <span className="text-[10px] font-medium text-[#2F6B3E] px-2.5 py-1 rounded-full bg-[#2F6B3E]/10">
                      ✓ {feat}
                    </span>

                  </React.Fragment>

                ))}

            </div>

          )}

        </div>

      </div>


      {/* =====================================================
          ROOM DETAILS BUTTON
      ====================================================== */}

      <div className="p-6 pt-0 mt-4 border-t border-[#ECECEC]/60 pt-4">

        <button
          type="button"
          onClick={onViewDetails}
          aria-label={`View details for ${room.name}`}
          className="w-full py-2.5 rounded-2xl bg-[#F8FAF8] border border-[#ECECEC] text-[#1B1B1B] text-xs font-bold hover:border-[#2F6B3E] hover:text-[#2F6B3E] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
        >

          <Eye
            className="w-3.5 h-3.5 text-[#C9A227]"
            aria-hidden="true"
          />

          Details

        </button>

      </div>

    </motion.article>

  );
}