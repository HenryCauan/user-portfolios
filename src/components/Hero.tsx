
import React, { useEffect, useRef } from 'react';
import { ArrowDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Sequential animation for elements
    const hero = heroRef.current;
    const name = nameRef.current;
    const content = contentRef.current;
    
    if (hero && name && content) {
      // Initial states
      name.style.opacity = '0';
      name.style.transform = 'translateY(30px)';
      content.style.opacity = '0';
      
      // Name animation
      setTimeout(() => {
        name.style.transition = 'all 1.5s cubic-bezier(0.16, 1, 0.3, 1)';
        name.style.opacity = '1';
        name.style.transform = 'translateY(0)';
      }, 500);
      
      // Content animation
      setTimeout(() => {
        content.style.transition = 'all 1s ease-out';
        content.style.opacity = '1';
      }, 1200);
    }
  }, []);

  return (
    <section 
      ref={heroRef}
      className="w-full h-full flex flex-col justify-center items-center relative overflow-hidden bg-black text-white"
    >
      {/* Visual elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(50,50,50,0.3)_0,rgba(0,0,0,0)_70%)]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9Ii4wMyIvPjxwYXRoIGQ9Ik0wIDMwaDMwdjMwSDB6IiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9Ii4wMyIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      {/* Main content container */}
      <div className="max-w-7xl w-full px-6 md:px-12 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 z-10">
        {/* Name showcase - dramatic vertical styling */}
        <h1 
          ref={nameRef}
          className="text-[8rem] md:text-[12rem] lg:text-[15rem] font-bold tracking-tighter leading-none font-playfair"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)' }}
        >
          H.CAUAN
        </h1>
        
        {/* Content column */}
        <div ref={contentRef} className="flex flex-col items-start max-w-xl">
          {/* Role badges with improved styling */}
          <div className="flex flex-wrap gap-3 mb-6">
            <Badge className="bg-white text-black py-2 px-4 text-sm uppercase tracking-wider">Designer</Badge>
            <Badge className="bg-white text-black py-2 px-4 text-sm uppercase tracking-wider">Desenvolvedor</Badge>
          </div>
          
          {/* Description with improved typography */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Criando designs elegantes e minimalistas com experiências de usuário intuitivas que trazem marcas à vida através de soluções digitais com propósito.
          </p>
          
          {/* CTA buttons with improved styling */}
          <div className="flex flex-wrap gap-4">
            <Button className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-lg transition-all duration-300">
              Ver Projetos
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 gap-2 px-8 py-6 text-lg transition-all duration-300">
              <Download className="h-5 w-5" />
              Download CV
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator with improved positioning */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-gray-400 uppercase tracking-widest">Scroll</span>
          <ArrowDown className="h-4 w-4 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
