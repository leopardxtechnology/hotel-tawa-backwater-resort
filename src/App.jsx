import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickHighlights from './components/QuickHighlights';
import About from './components/About';
import Highlights from './components/Highlights';
import Rooms from './components/Rooms';
import Packages from './components/Packages';
import Activities from './components/Activities';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import BookingSection from './components/BookingSection';
import BookingModal from './components/BookingModal';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [prefilledRoom, setPrefilledRoom] = useState('');
  const [prefilledPackage, setPrefilledPackage] = useState('');

  const handleOpenBooking = (roomName = '', packageName = '') => {
    setPrefilledRoom(roomName);
    setPrefilledPackage(packageName);
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#555555] font-sans selection:bg-[#C9A227] selection:text-[#1B1B1B]">
      {/* Navbar Header */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Page Sections */}
      <main>
        <Hero onOpenBooking={() => handleOpenBooking()} />
        <QuickHighlights />
        <About />
        <Highlights />
        <Rooms onBookRoom={(roomName) => handleOpenBooking(roomName)} />
        <Packages onBookPackage={(pkgName) => handleOpenBooking('', pkgName)} />
        <Activities onOpenBooking={() => handleOpenBooking()} />
        <Gallery />
        <Testimonials />
        <BookingSection initialRoom={prefilledRoom} initialPackage={prefilledPackage} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Direct Enquiry Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
        selectedRoom={prefilledRoom}
        selectedPackage={prefilledPackage}
      />
    </div>
  );
}
