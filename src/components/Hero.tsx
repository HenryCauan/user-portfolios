
import React, { useEffect, useRef } from 'react';
import { ArrowDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    // Simple text animation on load
    const text = textRef.current;
    if (text) {
      text.style.opacity = '0';
      text.style.transform = 'translateY(30px)';
      
      setTimeout(() => {
        text.style.transition = 'all 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        text.style.opacity = '1';
        text.style.transform = 'translateY(0)';
      }, 300);
    }
  }, []);

  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center px-6 md:px-12 relative overflow-hidden bg-black text-white">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:50px_50px] opacity-30"></div>
      
      {/* Geometric lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
      
      {/* Main content */}
      <div className="max-w-6xl w-full flex flex-col items-center text-center z-10">
        {/* Main title */}
        <h1 
          ref={textRef}
          className="text-6xl md:text-8xl lg:text-9xl font-playfair font-bold tracking-tighter mb-8 relative"
        >
          H.CAUAN
          <span className="block text-4xl md:text-6xl lg:text-7xl mt-4 text-white/60 font-light">
            STUDIO.
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed fade-in mb-12" style={{ animationDelay: '0.5s' }}>
          Creating elegant, minimalist designs and intuitive user experiences that bring brands to life through purposeful digital solutions.
        </p>
        
        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in" style={{ animationDelay: '0.7s' }}>
          <Button className="bg-white hover:bg-gray-100 text-black px-8 py-3 text-lg transition-all duration-300 hover:translate-y-[-2px] hover:shadow-2xl">
            View Projects
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg gap-2 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-2xl">
            <Download className="h-5 w-5" />
            Download CV
          </Button>
        </div>
      </div>
      
      {/* Bottom navigation hint */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-8">
        {/* Navigation dots */}
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <div className="w-2 h-2 rounded-full bg-white/30"></div>
          <div className="w-2 h-2 rounded-full bg-white/30"></div>
          <div className="w-2 h-2 rounded-full bg-white/30"></div>
        </div>
        
        {/* Scroll indicator */}
        <div className="animate-bounce fade-in cursor-pointer" style={{ animationDelay: '1s' }}>
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-white/60 uppercase tracking-widest">Scroll</span>
            <ArrowDown className="h-4 w-4 text-white/60" />
          </div>
        </div>
      </div>
      
      {/* Corner elements */}
      <div className="absolute top-8 left-8 text-white/40 text-sm font-light">
        Portfolio 2024
      </div>
      <div className="absolute top-8 right-8 text-white/40 text-sm font-light">
        H.CAUAN
      </div>
    </section>
  );
};

export default Hero;
