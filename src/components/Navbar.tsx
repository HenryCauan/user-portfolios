
import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, -0.01, 0.9],
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.6, 0.05, -0.01, 0.9],
      }
    })
  };

  return (
    <motion.nav 
      className={`fixed w-full py-4 px-6 md:px-12 flex justify-between items-center z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="relative z-20">
        <Logo />
      </div>

      <div className="hidden md:flex space-x-10">
        {['Projects', 'About', 'Contact'].map((item, i) => (
          <motion.div key={item} custom={i} variants={linkVariants}>
            <Link 
              to={`/${item.toLowerCase()}`} 
              className="text-sm uppercase tracking-wider font-medium hover:text-gray-500 transition-colors relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-black after:bottom-[-4px] after:left-0 after:origin-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100"
            >
              {item}
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button 
          className="p-2 focus:outline-none" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div 
          className="absolute top-0 left-0 right-0 bg-white min-h-[100vh] p-6 flex flex-col items-center justify-center space-y-8 z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          {['Projects', 'About', 'Contact'].map((item, i) => (
            <motion.div 
              key={item} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                transition: { delay: i * 0.1 + 0.3 } 
              }}
            >
              <Link 
                to={`/${item.toLowerCase()}`} 
                className="text-2xl font-medium tracking-wide"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
