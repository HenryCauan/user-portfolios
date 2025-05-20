
import React, { useEffect, useRef } from 'react';
import { ArrowDown, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  
  // Split text animation setup
  const phrase = "Creating digital experiences with purpose and precision.";
  const words = phrase.split(' ');
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.8,
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, -0.01, 0.9],
      }
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) / 25;
      const y = (e.clientY - top - height / 2) / 25;
      
      containerRef.current.style.transform = `perspective(1000px) rotateX(${-y}deg) rotateY(${x}deg)`;
    };
    
    const handleMouseLeave = () => {
      if (containerRef.current) {
        containerRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        containerRef.current.style.transition = 'transform 0.5s ease-out';
      }
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
    }
    
    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center px-6 md:px-12 relative overflow-hidden pt-20">
      {/* Container to limit content width and improve organization */}
      <div ref={containerRef} className="max-w-4xl w-full flex flex-col items-center transition-transform duration-300">
        {/* Enhanced background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50 -z-10"></div>
        
        {/* Animated decorative elements */}
        <div className="absolute w-[500px] h-[500px] rounded-full border border-gray-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-30"></div>
        <div className="absolute w-[700px] h-[700px] rounded-full border border-gray-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-20"></div>
        <div className="absolute w-[900px] h-[900px] rounded-full border border-gray-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-10"></div>
        
        {/* Animated blobs */}
        <div className="absolute w-64 h-64 rounded-full bg-purple-50 top-1/4 -left-20 blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute w-96 h-96 rounded-full bg-blue-50 bottom-1/4 -right-20 blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute w-48 h-48 rounded-full bg-yellow-50 top-3/4 left-1/4 blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '3s' }}></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBmaWxsPSIjZjlmYWZiIiBmaWxsLW9wYWNpdHk9Ii4wMSIvPjxwYXRoIGQ9Ik0wIDMwaDMwdjMwSDB6IiBmaWxsPSIjZjlmYWZiIiBmaWxsLW9wYWNpdHk9Ii4wMSIvPjwvZz48L3N2Zz4=')] opacity-30 -z-10"></div>
        
        {/* Enhanced profile avatar */}
        <motion.div 
          className="mb-8 relative group"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-200 via-blue-200 to-indigo-200 rounded-full blur-xl opacity-0 group-hover:opacity-70 transition-all duration-700"></div>
          <Avatar className="h-36 w-36 border-4 border-white shadow-lg transition-transform duration-500 group-hover:scale-105">
            <AvatarImage src="https://i.pravatar.cc/300" alt="H.CAUAN" />
            <AvatarFallback className="text-3xl font-bold bg-black text-white">HC</AvatarFallback>
          </Avatar>
          <div className="absolute -bottom-2 -right-2 bg-green-400 h-6 w-6 rounded-full border-2 border-white shadow-sm"></div>
        </motion.div>
        
        {/* Enhanced name with animated reveal */}
        <motion.h1 
          ref={textRef}
          className="text-6xl md:text-9xl font-playfair font-bold tracking-tighter mb-6 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.6, 0.05, -0.01, 0.9] }}
        >
          H.CAUAN
          <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <span className="opacity-5 text-9xl md:text-[12rem] font-bold text-black/10">HC</span>
          </span>
        </motion.h1>
        
        {/* Professional title with staggered reveal */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {['Frontend Developer', 'UI/UX Designer'].map((title, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.4 + (i * 0.1), 
                ease: [0.6, 0.05, -0.01, 0.9]
              }}
            >
              <Badge className="bg-black text-white py-1.5 px-4 text-sm">{title}</Badge>
            </motion.div>
          ))}
        </div>
        
        {/* Animated text split by words */}
        <motion.p 
          className="text-lg md:text-xl text-center max-w-xl text-gray-700 mb-10 leading-relaxed overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {words.map((word, i) => (
            <motion.span 
              key={i} 
              className="inline-block mr-[0.3em]"
              variants={itemVariants}
            >
              {word}
            </motion.span>
          ))}
        </motion.p>
        
        {/* Enhanced call to action buttons */}
        <motion.div 
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2, ease: [0.6, 0.05, -0.01, 0.9] }}
        >
          <Link to="/projects">
            <Button className="bg-black hover:bg-gray-800 text-white px-8 py-6 text-base transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg group">
              View Projects
              <ExternalLink className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
          <Button variant="outline" className="border-black hover:bg-gray-100 gap-2 px-8 py-6 text-base transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg">
            <Download className="h-4 w-4" />
            Download CV
          </Button>
        </motion.div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        <motion.div 
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs text-gray-400 uppercase tracking-widest">Scroll</span>
          <ArrowDown className="h-4 w-4 text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
