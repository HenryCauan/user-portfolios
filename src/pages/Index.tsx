
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import BentoGrid from '../components/BentoGrid';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen text-black flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero section */}
        <div className="min-h-screen">
          <Hero />
        </div>
        
        {/* Portfolio section with improved spacing and subtle background */}
        <motion.div 
          className="bg-white w-full px-6 md:px-8 py-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-12 text-center font-playfair text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Projetos
            </motion.h2>
            <Portfolio />
          </div>
        </motion.div>
        
        {/* BentoGrid section - will be styled within its own component */}
        <div className="w-full">
          <BentoGrid />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
