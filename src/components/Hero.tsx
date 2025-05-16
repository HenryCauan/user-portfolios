
import React from 'react';
import { ArrowDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const Hero: React.FC = () => {
  return (
    <section className="w-full min-h-[90vh] flex flex-col justify-center items-center px-6 md:px-12 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white -z-10"></div>
      
      {/* Animated circles for visual interest */}
      <div className="absolute w-64 h-64 rounded-full bg-purple-50 top-1/4 -left-20 blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute w-96 h-96 rounded-full bg-blue-50 bottom-1/4 -right-20 blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Profile avatar */}
      <div className="mb-8 relative">
        <Avatar className="h-32 w-32 border-4 border-white shadow-lg">
          <AvatarImage src="https://i.pravatar.cc/300" alt="H.CAUAN" />
          <AvatarFallback className="text-3xl font-bold bg-black text-white">HC</AvatarFallback>
        </Avatar>
        <div className="absolute -bottom-2 -right-2 bg-green-400 h-6 w-6 rounded-full border-2 border-white"></div>
      </div>
      
      {/* Name with animated fade-in */}
      <h1 className="text-6xl md:text-9xl font-playfair font-bold tracking-tighter mb-6 fade-in relative">
        H.CAUAN
        <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <span className="opacity-5 text-9xl md:text-[12rem] font-bold text-black/10">HC</span>
        </span>
      </h1>
      
      {/* Professional title */}
      <div className="flex flex-wrap justify-center gap-2 mb-6 fade-in" style={{ animationDelay: '0.3s' }}>
        <Badge className="bg-black text-white py-1.5 px-4 text-sm">Frontend Developer</Badge>
        <Badge className="bg-black text-white py-1.5 px-4 text-sm">UI/UX Designer</Badge>
      </div>
      
      {/* Description */}
      <p className="text-lg md:text-xl text-center max-w-2xl text-gray-700 fade-in mb-10" style={{ animationDelay: '0.5s' }}>
        Creating elegant, minimalist designs and intuitive user experiences that bring brands to life through purposeful digital solutions.
      </p>
      
      {/* Call to action buttons */}
      <div className="flex flex-wrap gap-4 justify-center fade-in" style={{ animationDelay: '0.7s' }}>
        <Button className="bg-black hover:bg-gray-800 text-white px-6">
          View Projects
        </Button>
        <Button variant="outline" className="border-black hover:bg-gray-100 gap-2">
          <Download className="h-4 w-4" />
          Download CV
        </Button>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce fade-in" style={{ animationDelay: '1s' }}>
        <ArrowDown className="h-6 w-6 text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;
