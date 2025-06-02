
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
    <section className="w-full min-h-screen flex flex-col justify-center items-center px-6 md:px-12 relative overflow-hidden bg-white text-black">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
      
      {/* Top navigation hints */}
      <div className="absolute top-8 left-8 text-black/60 text-sm font-light tracking-[0.2em] uppercase">
        Creative Studio — Since 2024
      </div>
      <div className="absolute top-8 right-8 flex items-center gap-4">
        <div className="w-8 h-4 bg-black/20 rounded-full relative">
          <div className="w-3 h-3 bg-black rounded-full absolute right-0.5 top-0.5"></div>
        </div>
        <span className="text-black/70 text-sm font-medium">Portfolio</span>
      </div>
      
      {/* Main content */}
      <div className="max-w-7xl w-full flex flex-col items-center text-center z-10 relative">
        {/* Large Typography inspired by Wosker Demo */}
        <div 
          ref={textRef}
          className="relative mb-12"
        >
          {/* Main title with massive impact */}
          <div className="relative">
            <h1 className="text-[12rem] md:text-[18rem] lg:text-[24rem] font-black tracking-[-0.02em] leading-[0.8] text-black relative z-10 font-oswald uppercase">
              H.CAUAN
            </h1>
            
            {/* Subtitle with emphasis */}
            <div className="relative -mt-8 md:-mt-16 lg:-mt-24">
              <h2 className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-black tracking-[-0.01em] leading-[0.8] text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-400 font-oswald uppercase">
                STUDIO
              </h2>
            </div>
            
            {/* Accent lines for visual impact */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-black/10 -translate-y-1/2 z-0"></div>
            <div className="absolute top-1/2 left-0 w-32 h-2 bg-black -translate-y-1/2 z-0"></div>
          </div>
          
          {/* Profile image positioned strategically */}
          <div 
            ref={imageRef}
            className="absolute top-1/2 right-8 md:right-16 lg:right-24 -translate-y-1/2 z-20"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-black shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
                alt="H.Cauan"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-black rotate-45"></div>
          </div>
        </div>
        
        {/* Tagline with modern typography */}
        <div className="max-w-2xl mb-16 relative">
          <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-black/80 font-inter">
            Senior <span className="font-bold text-black">Product Designer</span> creating 
            <br />
            <span className="italic">digital experiences</span> for <span className="font-bold">3+ years</span>
          </p>
          
          {/* Decorative quote marks */}
          <div className="absolute -top-4 -left-4 text-8xl text-black/10 font-serif">"</div>
          <div className="absolute -bottom-4 -right-4 text-8xl text-black/10 font-serif rotate-180">"</div>
        </div>
        
        {/* CTA buttons with modern styling */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button className="bg-black hover:bg-black/90 text-white font-bold px-12 py-4 text-lg uppercase tracking-wider transition-all duration-300 hover:translate-y-[-2px] hover:shadow-xl border-2 border-black">
            View Projects
          </Button>
          <Button variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white px-12 py-4 text-lg gap-3 font-bold uppercase tracking-wider transition-all duration-300 hover:translate-y-[-2px]">
            <Download className="h-5 w-5" />
            Download CV
          </Button>
        </div>
        
        {/* Modern stats/info section */}
        <div className="flex items-center gap-12 mt-16 text-black/60">
          <div className="text-center">
            <div className="text-3xl font-bold text-black">50+</div>
            <div className="text-sm uppercase tracking-widest">Projects</div>
          </div>
          <div className="w-px h-8 bg-black/20"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-black">3+</div>
            <div className="text-sm uppercase tracking-widest">Years</div>
          </div>
          <div className="w-px h-8 bg-black/20"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-black">25+</div>
            <div className="text-sm uppercase tracking-widest">Clients</div>
          </div>
        </div>
      </div>
      
      {/* Bottom scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6">
        {/* Navigation dots */}
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-black"></div>
          <div className="w-3 h-3 rounded-full bg-black/20"></div>
          <div className="w-3 h-3 rounded-full bg-black/20"></div>
          <div className="w-3 h-3 rounded-full bg-black/20"></div>
        </div>
        
        {/* Scroll hint */}
        <div className="animate-bounce cursor-pointer">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-black/60 uppercase tracking-[0.2em] font-medium">Explore</span>
            <ArrowDown className="h-5 w-5 text-black/60" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
