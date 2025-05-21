
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import BentoGrid from '../components/BentoGrid';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero section with container wrapper */}
        <div className="max-w-7xl mx-auto w-full">
          <Hero />
        </div>
        
        {/* Divider */}
        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent my-12 mx-auto max-w-6xl" />
        
        {/* Portfolio section with container */}
        <div className="max-w-7xl mx-auto w-full">
          <Portfolio />
        </div>
        
        {/* Divider */}
        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent my-12 mx-auto max-w-6xl" />
        
        {/* BentoGrid section with container */}
        <div className="max-w-7xl mx-auto w-full">
          <BentoGrid />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
