import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // You can use any icon library or SVG

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Game Modes' },
    { label: 'House of Lit' },
    { label: 'Newsletter', to: '/newsletter' },
    { label: 'IR Icon' },
    { label: 'Social Platform' },
  ];

  return (
    <nav className="bg-black/60 text-white px-4 py-4 fixed top-0 w-full z-50">
      <div className="flex justify-between items-center">
        {/* Logo or Brand */}
        <div className="text-lg font-bold uppercase">YourBrand</div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex md:space-x-16 text-sm font-semibold uppercase tracking-wider">
          {navItems.map(({ label, to }) => (
            <li key={label} className="relative group cursor-pointer">
              {to ? (
                <Link
                  to={to}
                  className="hover:text-gray-400 transition-colors duration-300"
                >
                  {label}
                </Link>
              ) : (
                <span className="hover:text-gray-400 transition-colors duration-300">{label}</span>
              )}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col items-center mt-4 space-y-6 md:hidden text-sm font-semibold uppercase tracking-wider">
          {navItems.map(({ label, to }) => (
            <li key={label} className="relative group cursor-pointer">
              {to ? (
                <Link
                  to={to}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-gray-400 transition-colors duration-300"
                >
                  {label}
                </Link>
              ) : (
                <span className="hover:text-gray-400 transition-colors duration-300">{label}</span>
              )}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
