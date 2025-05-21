
import React, { useEffect, useRef } from 'react';
import { ArrowDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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
      {/* Container with improved organization */}
      <div className="max-w-4xl w-full flex flex-col items-center">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50 -z-10"></div>
        <div className="absolute w-[500px] h-[500px] rounded-full border border-gray-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-30"></div>
        <div className="absolute w-[700px] h-[700px] rounded-full border border-gray-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-20"></div>
        <div className="absolute w-[900px] h-[900px] rounded-full border border-gray-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-10"></div>
        
        {/* Animated blobs - repositioned */}
        <div className="absolute w-64 h-64 rounded-full bg-purple-50 top-1/4 -left-20 blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute w-96 h-96 rounded-full bg-blue-50 bottom-1/4 -right-20 blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute w-48 h-48 rounded-full bg-yellow-50 top-3/4 left-1/4 blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '3s' }}></div>
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBmaWxsPSIjZjlmYWZiIiBmaWxsLW9wYWNpdHk9Ii4wMSIvPjxwYXRoIGQ9Ik0wIDMwaDMwdjMwSDB6IiBmaWxsPSIjZjlmYWZiIiBmaWxsLW9wYWNpdHk9Ii4wMSIvPjwvZz48L3N2Zz4=')] opacity-30 -z-10"></div>
        
        {/* Content container with improved layout */}
        <div className="w-full flex flex-col items-center bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-gray-100">
          {/* Profile avatar with status indicator */}
          <div className="mb-6 relative group">
            <div className="absolute inset-0 bg-black/5 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
            <Avatar className="h-32 w-32 border-4 border-white shadow-lg transition-transform duration-500 group-hover:scale-105">
              <AvatarImage src="https://i.pravatar.cc/300" alt="H.CAUAN" />
              <AvatarFallback className="text-3xl font-bold bg-black text-white">HC</AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-2 -right-2 bg-green-400 h-6 w-6 rounded-full border-2 border-white"></div>
          </div>
          
          {/* Name with better spacing */}
          <h1 
            ref={textRef}
            className="text-5xl md:text-7xl font-playfair font-bold tracking-tighter mb-4 relative"
          >
            H.CAUAN
            <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <span className="opacity-5 text-8xl md:text-9xl font-bold text-black/10 pointer-events-none">HC</span>
            </span>
          </h1>
          
          {/* Role badges - better positioning and styling */}
          <div className="flex flex-wrap justify-center gap-3 mb-6 fade-in" style={{ animationDelay: '0.3s' }}>
            <Badge className="bg-black text-white py-2 px-4 text-base">Frontend Developer</Badge>
            <Badge className="bg-black text-white py-2 px-4 text-base">UI/UX Designer</Badge>
          </div>
          
          {/* Description with improved width and readability */}
          <p className="text-lg md:text-xl text-center max-w-2xl text-gray-700 fade-in mb-8 leading-relaxed" style={{ animationDelay: '0.5s' }}>
            Creating elegant, minimalist designs and intuitive user experiences that bring brands to life through purposeful digital solutions.
          </p>
          
          {/* CTA buttons with better spacing */}
          <div className="flex flex-wrap gap-4 justify-center fade-in mb-4" style={{ animationDelay: '0.7s' }}>
            <Button className="bg-black hover:bg-gray-800 text-white px-6 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg">
              View Projects
            </Button>
            <Button variant="outline" className="border-black hover:bg-gray-100 gap-2 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg">
              <Download className="h-4 w-4" />
              Download CV
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce fade-in cursor-pointer" style={{ animationDelay: '1s' }}>
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-gray-400 uppercase tracking-widest">Scroll</span>
          <ArrowDown className="h-4 w-4 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
