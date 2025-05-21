
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Hero: React.FC = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    // Simple text animation on load
    const text = textRef.current;
    if (text) {
      text.style.opacity = '0';
      text.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        text.style.transition = 'all 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        text.style.opacity = '1';
        text.style.transform = 'translateY(0)';
      }, 300);
    }
  }, []);

  return (
    <section className="w-full min-h-[90vh] flex flex-col justify-center items-center px-6 md:px-12 relative overflow-hidden">
      {/* Container to limit content width and improve organization */}
      <div className="max-w-4xl w-full flex flex-col items-center z-10">
        {/* Subtle background */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-50/50 to-white -z-10"></div>
        
        {/* Enhanced profile avatar with subtle hover effect */}
        <div className="mb-8 relative group">
          <div className="absolute inset-0 bg-black/5 rounded-full blur-xl group-hover:blur-2xl transition-all duration-700 opacity-0 group-hover:opacity-70"></div>
          <div className="h-24 w-24 md:h-28 md:w-28 bg-black rounded-full overflow-hidden border-2 border-white shadow-md transition-transform duration-500 group-hover:scale-105">
            <img 
              src="https://i.pravatar.cc/300" 
              alt="H.CAUAN"
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="absolute -bottom-1 -right-1 bg-green-400 h-5 w-5 rounded-full border-2 border-white"></div>
        </div>
        
        {/* Minimalist name display */}
        <h1 
          ref={textRef}
          className="text-5xl md:text-7xl font-playfair font-bold tracking-tighter mb-4 relative"
        >
          H.CAUAN
        </h1>
        
        {/* Simple separator line */}
        <div className="w-16 h-0.5 bg-black mb-6 opacity-30"></div>
        
        {/* Clean professional title badges */}
        <div className="flex flex-wrap justify-center gap-2 mb-6 fade-in" style={{ animationDelay: '0.3s' }}>
          <Badge variant="outline" className="py-1 px-3 text-xs font-medium bg-transparent border-black/20 text-black/70">FRONTEND DEVELOPER</Badge>
          <Badge variant="outline" className="py-1 px-3 text-xs font-medium bg-transparent border-black/20 text-black/70">UI/UX DESIGNER</Badge>
        </div>
        
        {/* Concise description */}
        <p className="text-base md:text-lg text-center max-w-md text-gray-600 fade-in mb-10 leading-relaxed" style={{ animationDelay: '0.5s' }}>
          Creating elegant, minimalist designs and intuitive user experiences for digital solutions.
        </p>
        
        {/* Simplified call to action */}
        <div className="flex gap-4 justify-center fade-in" style={{ animationDelay: '0.7s' }}>
          <Button className="bg-black hover:bg-gray-900 text-white transition-all hover:translate-y-[-2px]">
            View Projects
          </Button>
          <Button variant="outline" className="border-black/30 hover:border-black hover:bg-black/5 transition-all hover:translate-y-[-2px]">
            Download CV
          </Button>
        </div>
      </div>
      
      {/* Minimal scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce fade-in opacity-60 hover:opacity-100 transition-opacity cursor-pointer" style={{ animationDelay: '1s' }}>
        <ArrowDown className="h-5 w-5 text-gray-500" />
      </div>
      
      {/* Minimalist decorative elements */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-gray-50 to-transparent opacity-40 blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-gradient-to-tl from-gray-50 to-transparent opacity-40 blur-3xl -z-10"></div>
    </section>
  );
};

export default Hero;
