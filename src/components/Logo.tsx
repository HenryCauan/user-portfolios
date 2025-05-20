
import { Link } from 'react-router-dom';
import React from 'react';
import { motion } from 'framer-motion';

const Logo: React.FC = () => {
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: [0.6, 0.05, -0.01, 0.9],
      }
    })
  };

  const letters = "H.CAUAN".split("");
  
  return (
    <div className="font-playfair font-bold text-3xl tracking-tighter flex items-center">
      <Link to="/" className="relative flex overflow-hidden">
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={letterVariants}
            initial="hidden"
            animate="visible"
            className="relative inline-block"
          >
            {letter}
            {i === letters.length - 1 && (
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-[2px] bg-black"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1, originX: 0 }}
                transition={{ 
                  delay: letters.length * 0.05 + 0.2,
                  duration: 0.8,
                  ease: [0.6, 0.05, -0.01, 0.9]
                }}
              />
            )}
          </motion.span>
        ))}
      </Link>
    </div>
  );
};

export default Logo;
