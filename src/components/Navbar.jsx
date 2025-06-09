import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-4 py-4 opacity-100 bg-transparent p-4 fixed top-0 w-full z-50">
      <ul className="flex flex-col md:flex-row md:space-x-16 justify-center items-center text-sm font-semibold uppercase tracking-wider space-y-6 md:space-y-0">
        {[
          { label: 'Game Modes' },
          { label: 'House of Lit' },
          { label: 'Newsletter', to: '/newsletter' },
          { label: 'IR Icon' },
          { label: 'Social Platform' }
        ].map(({ label, to }) => (
          <li key={label} className="relative group cursor-pointer">
            {to ? (
              <Link to={to} className="hover:text-gray-400 transition-colors duration-300">
                {label}
              </Link>
            ) : (
              <span className="hover:text-gray-400 transition-colors duration-300">{label}</span>
            )}
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
