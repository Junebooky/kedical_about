import React from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Hero from './components/sections/Hero';
import KoreaBeauty from './components/sections/KoreaBeauty';
import AppIntro from './components/sections/AppIntro';
import Reviews from './components/sections/Reviews';
import EasyInquiry from './components/sections/EasyInquiry';
import AdvanceBooking from './components/sections/AdvanceBooking';
import PaymentSystem from './components/sections/PaymentSystem';
import BookingProcess from './components/sections/BookingProcess';
import PartnerHospitals from './components/sections/PartnerHospitals';
import ConciergeService from './components/sections/ConciergeService';
import Promotions from './components/sections/Promotions';
import News from './components/sections/News';
import FAQ from './components/sections/FAQ';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <KoreaBeauty />
        <AppIntro />
        <Reviews />
        <EasyInquiry />
        <AdvanceBooking />
        <PaymentSystem />
        <BookingProcess />
        <PartnerHospitals />
        <ConciergeService />
        <Promotions />
        <News />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;