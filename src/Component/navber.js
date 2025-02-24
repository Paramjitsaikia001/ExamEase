import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const getButtonText = () => {
    switch (location.pathname) {
      case '/ExamEase/':
        return 'Home';
      case '/ExamEase/categories':
        return 'Categories';
      case '/ExamEase/Random':
        return 'Random';
      case '/ExamEase/about':
        return 'About us';
      default:
        return 'Menu';
    }
  };

  return (
    <nav className="w-full md:w-auto logo-color">
      <div className="flex justify-between items-center md:hidden">
        <button onClick={toggleMenu} className="text-black dark:text-[#000000] font-bold flex items-center">
          {getButtonText()} 
          <span className="material-symbols-outlined ml-2 mt-1">
            keyboard_arrow_down
          </span>
        </button>
      </div>
      <ul className={`flex flex-col md:flex-row md:w-auto font-bold justify-evenly md:px-4 items-center rounded-full ${darkMode ? 'md:bg-[#3be8ff] text-black' : 'md:bg-[#9ff4ff] text-[#000000]'} h-auto md:h-8 ${isOpen ? 'block' : 'hidden'} md:flex`}>
        <Link to="/ExamEase/" onClick={() => setIsOpen(false)}>
          <li className={`h-full flex justify-center items-center list-none hover:bg-blue-400 md:px-5 py-1 md:py-0 rounded-full hover:font-semibold cursor-pointer ${!isOpen && location.pathname === '/ExamEase/' ? 'underline' : ''}`}>Home</li>
        </Link>
        <Link to="/ExamEase/categories" onClick={() => setIsOpen(false)}>
          <li className={`h-full flex justify-center items-center list-none hover:bg-blue-400 md:px-5 py-1 md:py-0 rounded-full hover:font-semibold cursor-pointer ${!isOpen && location.pathname === '/ExamEase/categories' ? 'underline' : ''}`}>Categories</li>
        </Link>
        <Link to="/ExamEase/Random" onClick={() => setIsOpen(false)}>
          <li className={`h-full flex justify-center items-center list-none hover:bg-blue-400 md:px-5 py-1 md:py-0 rounded-full hover:font-semibold cursor-pointer ${!isOpen && location.pathname === '/ExamEase/Random' ? 'underline' : ''}`}>Random</li>
        </Link>
        <Link to="/ExamEase/about" onClick={() => setIsOpen(false)}>
          <li className={`h-full flex justify-center items-center list-none hover:bg-blue-400 md:px-5 py-1 md:py-0 rounded-full hover:font-semibold cursor-pointer ${!isOpen && location.pathname === '/ExamEase/about' ? 'underline' : ''}`}>About us</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;