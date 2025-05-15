
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="w-full min-h-[80vh] flex flex-col justify-center items-center px-6 md:px-12">
      <h1 className="text-6xl md:text-9xl font-playfair font-bold tracking-tighter mb-8 fade-in">H.CAUAN</h1>
      <p className="text-lg md:text-xl text-center max-w-2xl text-gray-700 fade-in font-oswald">
        Minimalist design portfolio showcasing elegant and purposeful creations.
      </p>
    </section>
  );
};

export default Hero;
