
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
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50 -z-10"></div>
      
      {/* Animated decorative elements */}
      <div className="absolute w-[500px] h-[500px] rounded-full border border-gray-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-30"></div>
      <div className="absolute w-[700px] h-[700px] rounded-full border border-gray-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-20"></div>
      <div className="absolute w-[900px] h-[900px] rounded-full border border-gray-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-10"></div>
      
      {/* Animated blobs for visual interest */}
      <div className="absolute w-64 h-64 rounded-full bg-purple-50 top-1/4 -left-20 blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute w-96 h-96 rounded-full bg-blue-50 bottom-1/4 -right-20 blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute w-48 h-48 rounded-full bg-yellow-50 top-3/4 left-1/4 blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '3s' }}></div>
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBmaWxsPSIjZjlmYWZiIiBmaWxsLW9wYWNpdHk9Ii4wMSIvPjxwYXRoIGQ9Ik0wIDMwaDMwdjMwSDB6IiBmaWxsPSIjZjlmYWZiIiBmaWxsLW9wYWNpdHk9Ii4wMSIvPjwvZz48L3N2Zz4=')] opacity-30 -z-10"></div>
      
      {/* Enhanced profile avatar with hover effect */}
      <div className="mb-8 relative group">
        <div className="absolute inset-0 bg-black/5 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
        <Avatar className="h-32 w-32 border-4 border-white shadow-lg transition-transform duration-500 group-hover:scale-105">
          <AvatarImage src="https://i.pravatar.cc/300" alt="H.CAUAN" />
          <AvatarFallback className="text-3xl font-bold bg-black text-white">HC</AvatarFallback>
        </Avatar>
        <div className="absolute -bottom-2 -right-2 bg-green-400 h-6 w-6 rounded-full border-2 border-white"></div>
      </div>
      
      {/* Enhanced name with animated reveal */}
      <h1 
        ref={textRef}
        className="text-6xl md:text-9xl font-playfair font-bold tracking-tighter mb-6 relative"
      >
        H.CAUAN
        <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <span className="opacity-5 text-9xl md:text-[12rem] font-bold text-black/10">HC</span>
        </span>
      </h1>
      
      {/* Professional title with staggered fade-in */}
      <div className="flex flex-wrap justify-center gap-2 mb-6 fade-in" style={{ animationDelay: '0.3s' }}>
        <Badge className="bg-black text-white py-1.5 px-4 text-sm">Desenvolvedor Frontend</Badge>
        <Badge className="bg-black text-white py-1.5 px-4 text-sm">Designer UI/UX</Badge>
      </div>
      
      {/* Description with refined typography */}
      <p className="text-lg md:text-xl text-center max-w-2xl text-gray-700 fade-in mb-10 leading-relaxed" style={{ animationDelay: '0.5s' }}>
        Criando designs elegantes e minimalistas com experiências de usuário intuitivas que dão vida às marcas através de soluções digitais propositais.
      </p>
      
      {/* Enhanced call to action buttons with hover effects */}
      <div className="flex flex-wrap gap-4 justify-center fade-in" style={{ animationDelay: '0.7s' }}>
        <Button className="bg-black hover:bg-gray-800 text-white px-6 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg">
          Ver Projetos
        </Button>
        <Button variant="outline" className="border-black hover:bg-gray-100 gap-2 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg">
          <Download className="h-4 w-4" />
          Baixar CV
        </Button>
      </div>
      
      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce fade-in cursor-pointer" style={{ animationDelay: '1s' }}>
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-gray-400 uppercase tracking-widest">Rolar</span>
          <ArrowDown className="h-4 w-4 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
