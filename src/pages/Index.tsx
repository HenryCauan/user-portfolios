
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import BentoGrid from '../components/BentoGrid';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-black flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Enhanced Hero section with full height */}
        <div className="h-screen w-full">
          <Hero />
        </div>
        
        {/* Divider with improved styling */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-16 mx-auto max-w-6xl" />
        
        {/* Portfolio section with improved container */}
        <div className="max-w-7xl mx-auto w-full px-6 md:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center font-playfair">Projetos</h2>
          <Portfolio />
        </div>
        
        {/* Divider with improved styling */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-16 mx-auto max-w-6xl" />
        
        {/* BentoGrid section with improved container */}
        <div className="max-w-7xl mx-auto w-full px-6 md:px-8 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center font-playfair">Destaques</h2>
          <BentoGrid />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
