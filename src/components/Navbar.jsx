import { Link } from "react-router-dom";
import { Button } from '@mui/material';
import hlc_logo_sq from '../assets/hlc_logo_sq.png'
import { useState } from "react";

const Navbar = () => {
  const [showHirelaneDropdown, setShowHirelaneDropdown] = useState(false);
  const [showContactDropdown, setShowContactDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleHirelaneDropdown = () => {
    setShowHirelaneDropdown(!showHirelaneDropdown);
    setShowContactDropdown(false);
  };

  const toggleContactDropdown = () => {
    setShowContactDropdown(!showContactDropdown);
    setShowHirelaneDropdown(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setShowHirelaneDropdown(false);
    setShowContactDropdown(false);
  };

  return (
    <nav className="w-full flex items-center py-5 top-0 z-20 shadow-md bg-black">
      <div className="w-full flex justify-between items-center max-w-7x1 mx-[10%]">
        <img
          src={hlc_logo_sq}
          alt="HLC Logo"
          className="w-[8rem] object-contain"
        />

        {/* Mobile Menu Icon */}
        <div className="ml-auto md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white text-[1.2rem] font-semibold hover:text-[#f13f25] duration-300"
          >
            &#9776; {/* Hamburger Icon */}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-row gap-10">
          <Link to='/' className='text-white text-[1.2rem] font-semibold hover:text-[#f13f25] duration-300' onClick={closeMobileMenu}>Home</Link>

          <button
            onClick={toggleHirelaneDropdown}
            className="text-white text-[1.2rem] font-semibold hover:text-[#f13f25] duration-300 relative"
          >
            Why Hirelane
          </button>
          {showHirelaneDropdown && (
            <div className="absolute flex flex-col z-10 mt-20 bg-black rounded-md shadow-lg">
              <Link
                to="/aboutUs"
                className="block px-4 py-2 text-white text-[1.2rem] font-semibold hover:text-[#f13f25] duration-300"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
              <Link
                to="/recruitmentProcess"
                className="block px-4 text-[1.2rem] font-semibold py-2 text-white hover:text-[#f13f25] duration-300"
                onClick={closeMobileMenu}
              >
                Recruitment Process
              </Link>
              <Link
                to="/howItWorks"
                className="block text-[1.2rem] font-semibold px-4 py-2 text-white hover:text-[#f13f25] duration-300"
                onClick={closeMobileMenu}
              >
                How It Works
              </Link>
            </div>
          )}
          <button
            onClick={toggleContactDropdown}
            className="text-white text-[1.2rem] font-semibold hover:text-[#f13f25] duration-300 relative"
          >
            Contact
          </button>
          {showContactDropdown && (
            <div className="absolute flex flex-col z-10 mt-20 ml-52 bg-black rounded-md shadow-lg">
              <Link
                to="/contactUs"
                className="block px-4 py-2 text-white text-[1.2rem] font-semibold hover:text-[#f13f25] duration-300"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
              <Link
                to='/careers'
                className='block text-[1.2rem] font-semibold px-4 py-2 text-white hover:text-[#f13f25] duration-300'
                onClick={closeMobileMenu}
              >
                Careers
              </Link>
            </div>
          )}
          <Link to='/pricing' className='text-white text-[1.2rem] font-semibold hover:text-[#f13f25] duration-300' onClick={closeMobileMenu}>Pricing</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-90 z-50">
          <div className="flex flex-col items-center justify-center h-full">
            <button
              onClick={toggleMobileMenu}
              className="absolute top-0 right-0 m-4 text-white text-[1.5rem] font-semibold"
            >
              &times; {/* Close Icon */}
            </button>
            <Link to='/' className='text-white text-[1.2rem] font-semibold hover:text-[#f13f25] duration-300' onClick={closeMobileMenu}>Home</Link>
            <button
              onClick={toggleHirelaneDropdown}
              className="text-white text-[1.2rem] font-semibold hover:text-[#f13f25] duration-300"
            >
              Why Hirelane
            </button>
            {showHirelaneDropdown && (
              <div className="flex flex-col my-[5%] bg-white bg-opacity-30 rounded-2xl">
                <Link
                  to="/aboutUs"
                  className="px-4 py-2 text-white text-[1.2rem] font-semibold hover:text-[#f13f25] duration-300"
                  onClick={closeMobileMenu}
                >
                  About Us
                </Link>
                <Link
                  to="/recruitmentProcess"
                  className="px-4 py-2 text-[1.2rem] font-semibold text-white hover:text-[#f13f25] duration-300"
                  onClick={closeMobileMenu}
                >
                  Recruitment Process
                </Link>
                <Link
                  to="/howItWorks"
                  className="px-4 py-2 text-[1.2rem] font-semibold text-white hover:text-[#f13f25] duration-300"
                  onClick={closeMobileMenu}
                >
                  How It Works
                </Link>
              </div>
            )}
            <button
              onClick={toggleContactDropdown}
              className="text-white text-[1.2rem] font-semibold hover:text-[#f13f25] duration-300"
            >
              Contact
            </button>
            {showContactDropdown && (
              <div className="flex flex-col my-[5%] bg-white bg-opacity-30 rounded-2xl">
                <Link
                  to="/contactUs"
                  className="px-4 py-2 text-white text-[1.2rem] font-semibold hover:text-[#f13f25] duration-300"
                  onClick={closeMobileMenu}
                >
                  Contact Us
                </Link>
                <Link
                  to='/careers'
                  className='px-4 py-2 text-[1.2rem] font-semibold text-white hover:text-[#f13f25] duration-300'
                  onClick={closeMobileMenu}
                >
                  Careers
                </Link>
              </div>
            )}
            <Link to='/pricing' className='text-white text-[1.2rem] font-semibold hover:text-[#f13f25] duration-300' onClick={closeMobileMenu}>Pricing</Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar;
