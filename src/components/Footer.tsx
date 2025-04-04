
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-4 px-6 md:px-12 lg:px-24 bg-white/30 mt-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold">
              <span className="text-finfluent-teal">Fin</span>
              <span className="text-finfluent-brown">Fluent</span>
            </h2>
            <p className="text-sm text-gray-600">© 2025 FinFluent. All rights reserved.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="text-gray-600 hover:text-finfluent-brown transition-colors">About</a>
            <a href="#" className="text-gray-600 hover:text-finfluent-brown transition-colors">Features</a>
            <a href="#" className="text-gray-600 hover:text-finfluent-brown transition-colors">Privacy</a>
            <a href="#" className="text-gray-600 hover:text-finfluent-brown transition-colors">Terms</a>
            <a href="#" className="text-gray-600 hover:text-finfluent-brown transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
