import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white fixed w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-blue-500">KTZ</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </Link>
              <Link to="/about" className="hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About Us
              </Link>
              <Link to="/team" className="hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Team
              </Link>
              <Link to="/strategy" className="hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Strategy
              </Link>
              <Link to="/insights" className="hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Insights
              </Link>
              <Link to="/contact" className="hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link to="/about" className="hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium">
              About Us
            </Link>
            <Link to="/team" className="hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium">
              Team
            </Link>
            <Link to="/strategy" className="hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium">
              Strategy
            </Link>
            <Link to="/insights" className="hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium">
              Insights
            </Link>
            <Link to="/contact" className="hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 