
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Download, Play, Star, Zap, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative w-full min-h-screen bg-white overflow-hidden"
    >
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        {/* Minimal Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.01)_1px,transparent_1px)] bg-[length:40px_40px]" />
        
        {/* Dynamic Gradient Orbs */}
        <div 
          className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-blue-50/30 to-purple-50/30 blur-3xl opacity-50 transition-all duration-1000"
          style={{
            left: mousePosition.x * 0.01 - 300 + 'px',
            top: mousePosition.y * 0.01 - 300 + 'px',
          }}
        />
        <div 
          className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-orange-50/20 to-yellow-50/20 blur-3xl opacity-40 transition-all duration-1500"
          style={{
            right: mousePosition.x * -0.008 - 200 + 'px',
            bottom: mousePosition.y * -0.008 - 200 + 'px',
          }}
        />
      </div>

      {/* Status Bar */}
      <div className="absolute top-8 left-8 right-8 z-50">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-gray-100 rounded-full px-6 py-3 shadow-sm">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gray-700 tracking-wide">
              Available for New Projects
            </span>
          </div>
          
          <div className="flex items-center gap-4 bg-white/80 backdrop-blur-sm border border-gray-100 rounded-full px-6 py-3 shadow-sm">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
              ))}
            </div>
            <span className="text-sm font-semibold text-gray-800">5.0</span>
            <span className="text-sm text-gray-600">• 50+ Reviews</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8">
        
        {/* Profile Section */}
        <div className={`mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative">
            <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-2xl mx-auto mb-6 relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
                alt="H.Cauan"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Professional Badge */}
            <div className="absolute -top-1 -right-1 bg-gradient-to-r from-violet-500 to-purple-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
              <Award className="w-3 h-3" />
              SENIOR
            </div>
          </div>
        </div>

        {/* Main Typography */}
        <div className={`text-center mb-12 transition-all duration-1200 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Name - Ultra Bold */}
          <h1 className="text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black leading-[0.85] tracking-tighter mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent font-oswald">
              H.CAUAN
            </span>
          </h1>
          
          {/* Title with Visual Emphasis */}
          <div className="relative mb-8">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 font-oswald tracking-wide">
              PRODUCT DESIGNER
            </h2>
            
            {/* Animated Underline */}
            <div className="flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse" />
            </div>
          </div>
        </div>

        {/* Value Proposition */}
        <div className={`max-w-4xl text-center mb-16 transition-all duration-1200 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 leading-relaxed font-light mb-8">
            Transforming ideas into 
            <span className="font-bold text-black mx-2">exceptional digital experiences</span>
            through strategic design and user-centered innovation.
          </p>
          
          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-6 text-base">
            <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full">
              <Zap className="w-4 h-4 text-yellow-500" />
              <span className="font-medium">Fast Delivery</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full">
              <Users className="w-4 h-4 text-blue-500" />
              <span className="font-medium">User-Focused</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full">
              <Award className="w-4 h-4 text-purple-500" />
              <span className="font-medium">Award-Winning</span>
            </div>
          </div>
        </div>

        {/* Impact Metrics */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16 transition-all duration-1200 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {[
            { number: '150+', label: 'Projects', color: 'text-blue-600' },
            { number: '50+', label: 'Happy Clients', color: 'text-green-600' },
            { number: '3+', label: 'Years Experience', color: 'text-purple-600' },
            { number: '99%', label: 'Success Rate', color: 'text-orange-600' }
          ].map((stat, index) => (
            <div key={index} className="text-center group cursor-pointer">
              <div className={`text-4xl md:text-5xl font-black mb-2 group-hover:scale-110 transition-all duration-300 ${stat.color}`}>
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-gray-600 uppercase tracking-wider font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Primary Actions */}
        <div className={`flex flex-col sm:flex-row gap-6 mb-20 transition-all duration-1200 delay-800 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-gray-900 to-black hover:from-black hover:to-gray-800 text-white font-bold px-10 py-6 text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 group border-0"
          >
            <span className="mr-3">View My Work</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-10 py-6 text-lg rounded-full font-bold transition-all duration-300 hover:scale-105 group bg-white/80 backdrop-blur-sm"
          >
            <Play className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
            Watch Showreel
          </Button>
          
          <Button 
            variant="ghost" 
            size="lg"
            className="text-gray-700 hover:text-gray-900 px-10 py-6 text-lg rounded-full font-bold transition-all duration-300 hover:scale-105 group"
          >
            <Download className="w-5 h-5 mr-3 group-hover:translate-y-1 transition-transform duration-300" />
            Download CV
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 transition-all duration-1200 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col items-center gap-4 animate-bounce">
            <div className="text-xs text-gray-400 uppercase tracking-[0.2em] font-bold">
              Scroll to Explore
            </div>
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center relative overflow-hidden">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Side Decoration */}
      <div className="absolute left-12 top-1/2 transform -translate-y-1/2 hidden xl:block">
        <div className="flex flex-col gap-6">
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
          <div className="w-2 h-2 bg-blue-500 rounded-full" />
          <div className="w-px h-12 bg-gray-200" />
          <div className="w-2 h-2 bg-purple-500 rounded-full" />
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
        </div>
      </div>

      <div className="absolute right-12 top-1/2 transform -translate-y-1/2 hidden xl:block">
        <div className="flex flex-col gap-6">
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
          <div className="w-2 h-2 bg-orange-500 rounded-full" />
          <div className="w-px h-12 bg-gray-200" />
          <div className="w-2 h-2 bg-green-500 rounded-full" />
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
