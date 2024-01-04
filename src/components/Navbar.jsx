import { Link } from "react-router-dom";
import { Button } from '@mui/material';
import hlc_logo_sq from '../assets/hlc_logo_sq.png'
import { useState } from "react";

const Navbar = () => {
  const [showHirelaneDropdown, setShowHirelaneDropdown] = useState(false);

  const toggleHirelaneDropdown = () => {
    setShowHirelaneDropdown(!showHirelaneDropdown);
    setShowContactDropdown(false);
  };

  const [showContactDropdown, setShowContactDropdown] = useState(false);

  const toggleContactDropdown = () => {
    setShowContactDropdown(!showContactDropdown);
    setShowHirelaneDropdown(false);
  };

  const toggleDropdowns = () => {
    setShowContactDropdown(false);
    setShowHirelaneDropdown(false);
  }

  return (
    <nav className="w-full flex items-center py-5 top-0 z-20 shadow-md bg-black">
        <div className="w-full flex justify-center gap-[40vw] items-center max-w-7x1 mx-auto">
            <img
                src={hlc_logo_sq}
                alt="HLC Logo"
                className=" w-[8rem] object-contain"
            />

            <div className="list-none mr-4 hidden sm:flex flex-row gap-10">
                <Link to='/' className='text-white text-[1.2rem] font-semibold  hover:text-[#f13f25] duration-300' onClick={toggleDropdowns}>Home</Link>
                
                
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
                      onClick={toggleHirelaneDropdown}
                    >
                      About Us
                    </Link>
                    <Link
                      to="/recruitmentProcess"
                      className="block px-4 text-[1.2rem] font-semibold py-2 text-white hover:text-[#f13f25] duration-300"
                      onClick={toggleHirelaneDropdown}
                    >
                      Recruitment Process
                    </Link>
                    <Link
                      to="/howItWorks"
                      className="block text-[1.2rem] font-semibold px-4 py-2 text-white hover:text-[#f13f25] duration-300"
                      onClick={toggleHirelaneDropdown}
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
                      onClick={toggleContactDropdown}
                    >
                      Contact Us
                    </Link>
                    <Link 
                      to='/careers' 
                      className='block text-[1.2rem] font-semibold px-4 py-2 text-white hover:text-[#f13f25] duration-300' 
                      onClick={toggleContactDropdown}
                    >
                      Careers
                    </Link>
                  </div>
                )}
                <Link to='/pricing' className='text-white text-[1.2rem] font-semibold hover:text-[#f13f25] duration-300' onClick={toggleDropdowns}>Pricing</Link>
            </div>

        </div>
    </nav>
  )
}

export default Navbar;