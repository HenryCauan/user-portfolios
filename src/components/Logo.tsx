
import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="group">
      <div className="font-playfair font-bold text-3xl tracking-tighter flex items-center relative overflow-hidden">
        <span className="inline-block transition-transform duration-300 group-hover:translate-y-[-2px]">
          H.CAUAN
        </span>
        <div className="absolute bottom-0 left-0 w-full h-[2px]">
          <div className="w-full h-full bg-black transform-origin-left transition-transform duration-300 ease-out scale-x-0 group-hover:scale-x-100"></div>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
