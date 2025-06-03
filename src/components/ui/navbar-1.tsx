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

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Team", href: "/team" },
    { name: "Portfolio", href: "/portfolio" },
  ];

  return (
    <div className="flex justify-center w-full pt-0 px-4">
      <div className="flex items-center justify-between px-6 py-3 bg-white rounded-full shadow-lg w-full max-w-3xl relative z-10">
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
                className="text-sm text-black hover:text-gray-700 transition-colors font-medium"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-5 py-2 text-white bg-black hover:bg-gray-800 rounded-full transition-colors"
            >
              Inquire
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <Link
              to="/login"
              className="inline-flex items-center justify-center px-5 py-2 text-black border-2 border-black hover:bg-gray-100 rounded-full transition-colors"
            >
              Investor Login
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-black hover:bg-gray-100 focus:outline-none"
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
              className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg overflow-hidden md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-100 transition-colors"
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/login"
                  className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-100 transition-colors"
                  onClick={toggleMenu}
                >
                  Investor Login
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export { Navbar1 }; 