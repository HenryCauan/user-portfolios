
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="font-playfair font-bold text-3xl tracking-tighter flex items-center">
      <span className="relative overflow-hidden inline-block">
        H.CAUAN
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
      </span>
    </div>
  );
};

export default Logo;
