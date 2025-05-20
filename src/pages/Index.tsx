
import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import BentoGrid from '../components/BentoGrid';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Lenis from '@studio-freight/lenis';

const Index: React.FC = () => {
  useEffect(() => {
    // Enhanced smooth scrolling configuration - fixed type error by removing 'direction' property
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      gestureDirection: 'vertical' as const,
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

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
