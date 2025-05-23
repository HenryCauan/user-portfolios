import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full py-6 px-6 md:px-12 flex justify-between items-center">
      <Logo />
      <div className="hidden md:flex space-x-8">
        <Link to="/projects" className="text-sm uppercase tracking-wide hover:text-gray-500 transition-colors">Projects</Link>
        <Link to="/about" className="text-sm uppercase tracking-wide hover:text-gray-500 transition-colors">About</Link>
        <Link to="/contact" className="text-sm uppercase tracking-wide hover:text-gray-500 transition-colors">Contact</Link>
      </div>
      <div className="md:hidden">
        <button className="text-2xl" aria-label="Menu">☰</button>
      </div>
    </nav>
  );
};

export default Navbar;
