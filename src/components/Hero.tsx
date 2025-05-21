
import React, { useEffect, useRef } from 'react';
import { ArrowDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const Hero: React.FC = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  
  useEffect(() => {
    // Animation sequence on load
    const container = containerRef.current;
    const text = textRef.current;
    const description = descriptionRef.current;
    
    if (container && text && description) {
      // Initial state
      container.style.opacity = '0';
      text.style.opacity = '0';
      text.style.transform = 'translateY(30px)';
      description.style.opacity = '0';
      description.style.transform = 'translateY(20px)';
      
      // Container fade in
      setTimeout(() => {
        container.style.transition = 'opacity 1s ease';
        container.style.opacity = '1';
      }, 100);
      
      // Text animation
      setTimeout(() => {
        text.style.transition = 'all 1.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        text.style.opacity = '1';
        text.style.transform = 'translateY(0)';
      }, 500);
      
      // Description animation
      setTimeout(() => {
        description.style.transition = 'all 1s ease';
        description.style.opacity = '1';
        description.style.transform = 'translateY(0)';
      }, 900);
    }
  }, []);

  return (
    <section 
      ref={containerRef}
      className="w-full min-h-screen flex flex-col justify-center items-center px-6 md:px-12 relative overflow-hidden"
    >
      <div className="max-w-4xl w-full flex flex-col items-center relative z-10">
        {/* Enhanced background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50 -z-10"></div>
        
        {/* Animated decorative elements */}
        <div className="absolute w-[600px] h-[600px] rounded-full border border-gray-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-40"></div>
        <div className="absolute w-[800px] h-[800px] rounded-full border border-gray-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-30"></div>
        <div className="absolute w-[1000px] h-[1000px] rounded-full border border-gray-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-20"></div>
        
        {/* Animated blobs for visual interest */}
        <div className="absolute w-72 h-72 rounded-full bg-purple-50 top-1/4 -left-20 blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute w-96 h-96 rounded-full bg-blue-50 bottom-1/4 -right-20 blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute w-64 h-64 rounded-full bg-yellow-50 top-3/4 left-1/4 blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '3s' }}></div>
        
        {/* Enhanced profile avatar */}
        <div className="mb-12 relative group">
          <div className="absolute inset-0 bg-black/10 rounded-full blur-2xl transition-all duration-700 opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-110"></div>
          <Avatar className="h-36 w-36 border-4 border-white shadow-xl transition-all duration-700 group-hover:scale-105">
            <AvatarImage src="https://i.pravatar.cc/300" alt="H.CAUAN" className="object-cover" />
            <AvatarFallback className="text-4xl font-bold bg-black text-white">HC</AvatarFallback>
          </Avatar>
          <div className="absolute -bottom-2 -right-2 bg-green-400 h-6 w-6 rounded-full border-2 border-white shadow-lg"></div>
        </div>
        
        {/* Enhanced name with animated reveal */}
        <h1 
          ref={textRef}
          className="text-6xl md:text-8xl xl:text-9xl font-playfair font-bold tracking-tighter mb-8 relative"
        >
          <span className="relative z-10">H.CAUAN</span>
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl md:text-[14rem] font-bold text-black/5 select-none">HC</span>
        </h1>
        
        {/* Professional title with staggered fade-in */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <Badge className="bg-black text-white py-1.5 px-4 text-sm">Frontend Developer</Badge>
          <Badge className="bg-black text-white py-1.5 px-4 text-sm">UI/UX Designer</Badge>
          <Badge className="bg-black text-white py-1.5 px-4 text-sm">Creative Technologist</Badge>
        </div>
        
        {/* Enhanced description */}
        <p 
          ref={descriptionRef}
          className="text-lg md:text-xl text-center max-w-2xl text-gray-700 mb-12 leading-relaxed"
        >
          Crafting digital experiences with a focus on <span className="font-medium">minimal aesthetics</span>, <span className="font-medium">thoughtful interactions</span>, and <span className="font-medium">innovative solutions</span> that elevate brands through purposeful design.
        </p>
        
        {/* Enhanced call to action buttons */}
        <div className="flex flex-wrap gap-5 justify-center">
          <Button className="bg-black hover:bg-gray-800 text-white px-8 py-6 h-auto text-base rounded-none transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group">
            <span className="relative z-10 font-medium tracking-wide">View Projects</span>
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Button>
          <Button variant="outline" className="border-black hover:bg-gray-100 gap-2 px-8 py-6 h-auto text-base rounded-none transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group">
            <Download className="h-4 w-4" />
            <span className="relative z-10 font-medium tracking-wide">Download CV</span>
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-black transition-all duration-300 group-hover:w-full"></span>
          </Button>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-gray-500 uppercase tracking-[0.2em] font-light">Scroll</span>
          <ArrowDown className="h-4 w-4 text-gray-500" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
