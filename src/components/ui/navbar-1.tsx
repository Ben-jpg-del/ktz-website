"use client" 

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen)
  const isDarkMode = location.pathname === "/" || location.pathname === "/home" || location.pathname === "/login";

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Team", href: "/team" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Investor Login", href: "/login" },
  ];

  return (
    <div className={`w-full ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-3 relative z-10">
          <div className="flex items-center">
            <motion.div
              className="w-8 h-8 mr-6"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              whileHover={{ rotate: 10 }}
              transition={{ duration: 0.3 }}
            >
              <Link to="/">
                <img src={logo} alt="KTZ Logo" className="h-8 w-8" />
              </Link>
            </motion.div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link 
                  to={item.href} 
                  className={`text-sm ${isDarkMode ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-700'} transition-colors font-medium relative group`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${isDarkMode ? 'bg-white' : 'bg-blue-600'} transition-all duration-300 group-hover:w-full`}></span>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link
                to="/contact"
                className={`inline-flex items-center justify-center px-5 py-2 ${isDarkMode ? 'text-black bg-white hover:bg-gray-200' : 'text-white bg-black hover:bg-gray-800'} rounded-full transition-colors`}
              >
                Inquire
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`inline-flex items-center justify-center p-2 rounded-md ${isDarkMode ? 'text-white hover:bg-gray-900' : 'text-black hover:bg-gray-100'} focus:outline-none`}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <Menu className="block h-6 w-6" />
              ) : (
                <X className="block h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className={`absolute top-full left-0 right-0 mt-2 ${isDarkMode ? 'bg-black' : 'bg-white'} shadow-lg overflow-hidden md:hidden`}
              >
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`block px-3 py-2 rounded-md text-base font-medium ${isDarkMode ? 'text-white hover:bg-gray-900' : 'text-black hover:bg-gray-100'} transition-colors`}
                      onClick={toggleMenu}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export { Navbar1 }; 