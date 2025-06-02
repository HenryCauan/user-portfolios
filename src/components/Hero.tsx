
import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, Download, Sparkles, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative w-full min-h-screen bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Floating Geometric Elements */}
        <div 
          className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 opacity-30 blur-3xl transition-all duration-700"
          style={{
            left: mousePosition.x * 0.02 + 'px',
            top: mousePosition.y * 0.02 + 'px',
          }}
        />
        <div 
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-yellow-50 to-orange-50 opacity-20 blur-3xl transition-all duration-1000"
          style={{
            right: mousePosition.x * -0.01 + 'px',
            bottom: mousePosition.y * -0.01 + 'px',
          }}
        />
      </div>

      {/* Top Navigation Bar */}
      <div className="absolute top-0 left-0 right-0 z-50 p-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-gray-600 font-medium tracking-wider uppercase">
              Available for Projects
            </span>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-sm text-gray-600 font-medium">5.0 Rating</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 md:px-12">
        
        {/* Profile Image with Floating Elements */}
        <div className={`relative mb-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
                alt="H.Cauan"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
              <Sparkles className="w-3 h-3 inline mr-1" />
              PRO
            </div>
            
            {/* Decorative Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-gray-300 animate-spin-slow scale-110" />
          </div>
        </div>

        {/* Main Typography */}
        <div className={`text-center mb-8 transition-all duration-1200 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative">
            {/* Name with Gradient Effect */}
            <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-black leading-none tracking-tighter mb-4">
              <span className="bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent font-oswald">
                H.CAUAN
              </span>
            </h1>
            
            {/* Subtitle with Animation */}
            <div className="relative">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-4 font-oswald">
                PRODUCT DESIGNER
              </h2>
              
              {/* Underline Animation */}
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
            </div>
          </div>
        </div>

        {/* Description */}
        <div className={`max-w-3xl text-center mb-12 transition-all duration-1200 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
            Crafting <span className="font-semibold text-black">exceptional digital experiences</span> with 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold"> 3+ years</span> of 
            expertise in UX/UI design and user-centered solutions.
          </p>
        </div>

        {/* Stats Section */}
        <div className={`flex flex-wrap justify-center gap-8 md:gap-12 mb-12 transition-all duration-1200 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            { number: '50+', label: 'Projects Completed' },
            { number: '25+', label: 'Happy Clients' },
            { number: '3+', label: 'Years Experience' },
            { number: '100%', label: 'Satisfaction Rate' }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-3xl md:text-4xl font-black text-black mb-1 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-wider font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-6 mb-16 transition-all duration-1200 delay-900 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-gray-900 to-black hover:from-black hover:to-gray-800 text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 group"
          >
            <span className="mr-2">View My Work</span>
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-12 py-6 text-lg rounded-full font-bold transition-all duration-300 hover:scale-105 group"
          >
            <Download className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform duration-300" />
            Download Resume
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1200 delay-1100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col items-center gap-4 animate-bounce">
            <div className="text-xs text-gray-500 uppercase tracking-widest font-medium">
              Scroll to Explore
            </div>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Side Decorative Elements */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="flex flex-col gap-4">
          <div className="w-1 h-16 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
          <div className="w-1 h-8 bg-gray-300 rounded-full" />
          <div className="w-1 h-12 bg-gray-200 rounded-full" />
        </div>
      </div>

      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="flex flex-col gap-4">
          <div className="w-1 h-12 bg-gray-200 rounded-full" />
          <div className="w-1 h-8 bg-gray-300 rounded-full" />
          <div className="w-1 h-16 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
