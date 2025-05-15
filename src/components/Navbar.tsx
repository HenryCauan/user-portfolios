
import React from 'react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full py-6 px-6 md:px-12 flex justify-between items-center">
      <Logo />
      <div className="hidden md:flex space-x-8">
        <a href="#work" className="text-sm uppercase tracking-wide hover:text-gray-500 transition-colors">Work</a>
        <a href="#about" className="text-sm uppercase tracking-wide hover:text-gray-500 transition-colors">About</a>
        <a href="#contact" className="text-sm uppercase tracking-wide hover:text-gray-500 transition-colors">Contact</a>
      </div>
      <div className="md:hidden">
        <button className="text-2xl" aria-label="Menu">☰</button>
      </div>
    </nav>
  );
};

export default Navbar;
