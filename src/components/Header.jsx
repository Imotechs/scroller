// Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-black/20 backdrop-blur-sm py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl tracking-tight">
          The Descent
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a 
                href="#about" 
                className="text-white/80 hover:text-white transition-colors duration-200"
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#journey" 
                className="text-white/80 hover:text-white transition-colors duration-200"
              >
                Journey
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="text-white/80 hover:text-white transition-colors duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;