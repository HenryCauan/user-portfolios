
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
        <Hero />
        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent my-12 mx-auto max-w-6xl" />
        <Portfolio />
        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent my-12 mx-auto max-w-6xl" />
        <BentoGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
