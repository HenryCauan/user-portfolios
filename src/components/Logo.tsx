
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="font-playfair font-bold text-3xl tracking-tighter flex items-center">
      <span className="relative overflow-hidden inline-block group cursor-pointer">
        H.CAUAN
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
        <span className="absolute top-0 right-0 h-0 w-0.5 bg-black transition-all duration-300 delay-75 group-hover:h-full"></span>
        <span className="absolute top-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 delay-150 group-hover:w-full"></span>
        <span className="absolute bottom-0 left-0 h-0 w-0.5 bg-black transition-all duration-300 delay-225 group-hover:h-full"></span>
      </span>
    </div>
  );
};

export default Logo;
