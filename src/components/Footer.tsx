
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="w-full py-12 px-6 md:px-12 border-t border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-medium mb-4">Contact</h3>
          <p className="text-gray-600 mb-2">hello@hcauan.com</p>
          <p className="text-gray-600">+1 (234) 567-8900</p>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4">Social</h3>
          <div className="flex flex-col space-y-2">
            <a href="#" className="text-gray-600 hover:text-black transition-colors">Instagram</a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors">Dribbble</a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors">LinkedIn</a>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4">About</h3>
          <p className="text-gray-600">
            Minimalist designer focused on creating elegant, purposeful, and timeless designs.
          </p>
        </div>
      </div>
      <div className="mt-12 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} H.CAUAN. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
