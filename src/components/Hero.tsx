
import React, { useEffect, useRef } from 'react';
import { ArrowDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Animation for text
    const text = textRef.current;
    const image = imageRef.current;
    
    if (text) {
      text.style.opacity = '0';
      text.style.transform = 'translateY(50px)';
      
      setTimeout(() => {
        text.style.transition = 'all 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        text.style.opacity = '1';
        text.style.transform = 'translateY(0)';
      }, 400);
    }
    
    if (image) {
      image.style.opacity = '0';
      image.style.transform = 'scale(0.8)';
      
      setTimeout(() => {
        image.style.transition = 'all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        image.style.opacity = '1';
        image.style.transform = 'scale(1)';
      }, 600);
    }
  }, []);

  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center px-6 md:px-12 relative overflow-hidden bg-[#0a0a0a] text-white">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-40"></div>
      
      {/* Top navigation hints */}
      <div className="absolute top-8 left-8 text-white/40 text-sm font-light tracking-wider">
        CRAFTING DIGITAL GOODS SINCE — V.2024
      </div>
      <div className="absolute top-8 right-8 flex items-center gap-4">
        <div className="w-8 h-4 bg-white/20 rounded-full relative">
          <div className="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5"></div>
        </div>
        <span className="text-white/60 text-sm">Resume</span>
      </div>
      
      {/* Main content */}
      <div className="max-w-6xl w-full flex flex-col items-center text-center z-10 relative">
        {/* Large Typography */}
        <div 
          ref={textRef}
          className="relative mb-8"
        >
          <h1 className="text-[8rem] md:text-[12rem] lg:text-[15rem] font-black tracking-tighter leading-none text-[#E8FF00] relative z-10">
            H.CAUAN
          </h1>
          <h2 className="text-[8rem] md:text-[12rem] lg:text-[15rem] font-black tracking-tighter leading-none text-[#E8FF00] -mt-8 md:-mt-12 lg:-mt-16">
            STUDIO
          </h2>
          
          {/* Profile image positioned over the text */}
          <div 
            ref={imageRef}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
                alt="H.Cauan"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Yellow accent diamond */}
        <div className="w-6 h-6 bg-[#E8FF00] rotate-45 mb-8 fade-in" style={{ animationDelay: '0.8s' }}></div>
        
        {/* Description */}
        <p className="text-lg md:text-xl text-white/80 max-w-lg leading-relaxed fade-in mb-12" style={{ animationDelay: '1s' }}>
          I'm H.Cauan — a senior product designer passionately creating digital experiences and solutions for over 3 years
        </p>
        
        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in" style={{ animationDelay: '1.2s' }}>
          <Button className="bg-[#E8FF00] hover:bg-[#E8FF00]/90 text-black font-medium px-8 py-3 text-lg transition-all duration-300 hover:translate-y-[-2px] hover:shadow-xl">
            View Projects
          </Button>
          <Button variant="outline" className="border-white/30 text-white hover:bg-white hover:text-black px-8 py-3 text-lg gap-2 transition-all duration-300 hover:translate-y-[-2px]">
            <Download className="h-5 w-5" />
            Download CV
          </Button>
        </div>
      </div>
      
      {/* Bottom scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-8">
        {/* Navigation dots */}
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-[#E8FF00]"></div>
          <div className="w-2 h-2 rounded-full bg-white/20"></div>
          <div className="w-2 h-2 rounded-full bg-white/20"></div>
          <div className="w-2 h-2 rounded-full bg-white/20"></div>
        </div>
        
        {/* Scroll hint */}
        <div className="animate-bounce fade-in cursor-pointer" style={{ animationDelay: '1.4s' }}>
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-white/60 uppercase tracking-widest">Scroll</span>
            <ArrowDown className="h-4 w-4 text-white/60" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
