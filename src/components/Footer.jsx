import React from 'react';
import {
  FaEnvelope,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribed!");
  };

  return (
    <footer className="bg-black text-white px-12 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        
        {/* Left: Logo */}
        <div className="flex justify-center md:justify-start">
          <img
            src="/Screenshot 2025-05-16 145319.png"
            alt="Logo"
            className="w-16 h-16 object-contain"
          />
        </div>

        {/* Center: Navigation + Newsletter */}
        <div className="flex flex-col items-center space-y-6 text-center">
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center md:flex-nowrap gap-x-20 gap-y-2 font-semibold whitespace-nowrap text-sm">
            <a href="#" className="hover:text-gray-300 transition-colors duration-200">Home</a>
            <a href="#" className="hover:text-gray-300 transition-colors duration-200">About</a>
            <a href="#" className="hover:text-gray-300 transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors duration-200">Terms of Service</a>
          </div>

          {/* Newsletter */}
          <div className="space-y-2 w-full max-w-md">
            <h4 className="font-semibold text-lg">Join our Community</h4>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="w-full px-4 py-2 rounded-md bg-gray-900 text-white border border-gray-700 focus:outline-none"
                required
              />
              <button 
                type="submit"
                className="bg-purple-700 hover:bg-purple-800 px-4 py-2 rounded-md font-semibold text-white transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Right: Contact Info with icons on the right */}
        <div className="flex flex-col items-center md:items-end space-y-4 text-right">
          <h4 className="font-semibold">Contact Us</h4>
          <div className="flex justify-between gap-4 w-full md:w-auto">
            <span>Email</span> <FaEnvelope />
          </div>
          <div className="flex justify-between gap-4 w-full md:w-auto">
            <span>LinkedIn</span> <FaLinkedin />
          </div>
          <div className="flex justify-between gap-4 w-full md:w-auto">
            <span>Instagram</span> <FaInstagram />
          </div>
          <div className="flex justify-between gap-4 w-full md:w-auto">
            <span>Twitter</span> <FaTwitter />
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        © 2024 Luxuryintatse. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;