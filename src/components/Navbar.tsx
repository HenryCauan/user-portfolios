
import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full py-6 px-6 md:px-12 flex justify-between items-center z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' 
          : 'bg-transparent'
      }`}
    >
      <Logo />
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-12">
        <NavLink to="/projects" label="Projects" />
        <NavLink to="/about" label="About" />
        <NavLink to="/contact" label="Contact" />
      </div>
      
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-2xl focus:outline-none"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>
      
      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-white z-40 transition-transform duration-500 ease-in-out ${
        menuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col items-center justify-center h-full space-y-12 text-2xl">
          <MobileNavLink to="/projects" label="Projects" onClick={() => setMenuOpen(false)} />
          <MobileNavLink to="/about" label="About" onClick={() => setMenuOpen(false)} />
          <MobileNavLink to="/contact" label="Contact" onClick={() => setMenuOpen(false)} />
        </div>
      </div>
    </nav>
  );
};

const NavLink: React.FC<{ to: string; label: string }> = ({ to, label }) => (
  <Link 
    to={to} 
    className="text-sm uppercase tracking-wide relative group"
  >
    <span className="block">
      {label}
      <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
    </span>
  </Link>
);

const MobileNavLink: React.FC<{ to: string; label: string; onClick: () => void }> = ({ to, label, onClick }) => (
  <Link 
    to={to} 
    className="text-xl font-light relative group"
    onClick={onClick}
  >
    <span className="block">
      {label}
      <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
    </span>
  </Link>
);

export default Navbar;
