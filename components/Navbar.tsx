
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Smile } from 'lucide-react';

import logo from '@/media/logo/pnglogo/HAPPY SHINE - LOGO-04 - CROP.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Giới thiệu', path: '/about' },
    { name: 'Khóa Học', path: '/courses' },
    { name: 'Liên hệ', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-2 transition-all duration-300">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center pl-2">
          <img
            src={logo}
            alt="Happy Shine"
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-semibold hover:text-red-600 transition-colors ${
                location.pathname === link.path ? 'text-red-600 underline underline-offset-8 decoration-2' : 'text-slate-700'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/enroll" className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-red-200 transition-all transform hover:scale-105 flex items-center gap-2">
            Đăng Ký Ngay <Smile className="w-5 h-5" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-xl border-t animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-xl font-bold py-2 ${
                  location.pathname === link.path ? 'text-red-600' : 'text-slate-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/enroll" onClick={() => setIsOpen(false)} className="bg-red-600 text-white w-full py-4 rounded-xl font-bold text-center text-lg shadow-lg">
              Enroll Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
