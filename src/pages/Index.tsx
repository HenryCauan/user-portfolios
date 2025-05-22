
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import BentoGrid from '../components/BentoGrid';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen text-black flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* New split-view hero layout */}
        <div className="min-h-screen">
          <Hero />
        </div>
        
        {/* Portfolio section with improved spacing and subtle background */}
        <div className="bg-white w-full px-6 md:px-8 py-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center font-playfair text-gray-900">Projetos</h2>
            <Portfolio />
          </div>
        </div>
        
        {/* BentoGrid section with slightly darker background for subtle contrast */}
        <div className="w-full bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto w-full px-6 md:px-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center font-playfair text-gray-900">Destaques</h2>
            <BentoGrid />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
