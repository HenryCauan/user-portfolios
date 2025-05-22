
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
      className="w-full h-screen flex flex-col-reverse md:flex-row overflow-hidden"
    >
      {/* Left side - Creative visuals */}
      <div className="w-full md:w-1/2 h-full bg-black flex items-center justify-center relative overflow-hidden">
        {/* Visual grid element */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9Ii4wMyIvPjxwYXRoIGQ9Ik0wIDMwaDMwdjMwSDB6IiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9Ii4wMyIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
        
        {/* Name showcase with horizontal orientation */}
        <h1 
          ref={nameRef}
          className="text-[5rem] md:text-[8rem] lg:text-[10rem] font-bold tracking-tighter leading-none text-white font-playfair relative"
        >
          H.CAUAN
        </h1>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 border border-white/20 rounded-full"></div>
      </div>
      
      {/* Right side - Content */}
      <div className="w-full md:w-1/2 h-full bg-white flex items-center justify-center p-8 md:p-16">
        <div ref={contentRef} className="max-w-lg">
          {/* Role badges with improved styling */}
          <div className="flex flex-wrap gap-3 mb-6">
            <Badge className="bg-black text-white py-2 px-4 text-sm uppercase tracking-wider">Designer</Badge>
            <Badge className="bg-black text-white py-2 px-4 text-sm uppercase tracking-wider">Desenvolvedor</Badge>
          </div>
          
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Criando designs com propósito
          </h2>
          
          {/* Description with improved typography */}
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Designs elegantes e minimalistas com experiências de usuário intuitivas que trazem marcas à vida através de soluções digitais com propósito.
          </p>
          
          {/* CTA buttons with improved styling */}
          <div className="flex flex-wrap gap-4">
            <Button className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg transition-all duration-300">
              Ver Projetos
            </Button>
            <Button variant="outline" className="border-black text-black hover:bg-black/5 gap-2 px-8 py-6 text-lg transition-all duration-300">
              <Download className="h-5 w-5" />
              Download CV
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator with improved positioning */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer hidden md:block">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="h-4 w-4" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
