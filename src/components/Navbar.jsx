import { Link } from "react-router-dom";
import { Button } from '@mui/material';
import hlc_logo_sq from '../assets/hlc_logo_long.png'
import { useState } from "react";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="w-full flex items-center py-5 top-0 z-20 shadow-md bg-black">
        <div className="w-full flex justify-center gap-[60vw] items-center max-w-7x1 mx-auto">
            <img
                src={hlc_logo_sq}
                alt="HLC Logo"
                className=" w-60 object-contain"
            />

            <div className="list-none mr-4 hidden sm:flex flex-row gap-10">
                <Link to='/' className='text-white text-[1.2rem] font-semibold  hover:text-[#f13f25] duration-300' onClick={showDropdown && toggleDropdown}>Home</Link>
                
                
                <button
                  onClick={toggleDropdown}
                  className="text-white text-[1.2rem] font-semibold hover:text-[#f13f25] duration-300"
                >
                  Why Hirelane
                </button>
                {showDropdown && (
                  <div className="absolute flex flex-col z-10 mt-20 bg-black rounded-md shadow-lg">
                    <Link
                      to="/aboutUs"
                      className="block px-4 py-2 text-white text-[1.2rem] font-semibold hover:text-[#f13f25] duration-300"
                      onClick={toggleDropdown}
                    >
                      About Us
                    </Link>
                    <Link
                      to="/recruitmentProcess"
                      className="block px-4 text-[1.2rem] font-semibold py-2 text-white hover:text-[#f13f25] duration-300"
                      onClick={toggleDropdown}
                    >
                      Recruitment Process
                    </Link>
                    <Link
                      to="/howItWorks"
                      className="block text-[1.2rem] font-semibold px-4 py-2 text-white hover:text-[#f13f25] duration-300"
                      onClick={toggleDropdown}
                    >
                      How It Works
                    </Link>
                  </div>
                )}
                <Link to='/careers' className='text-white text-[1.2rem] font-semibold hover:text-[#f13f25] duration-300' onClick={showDropdown && toggleDropdown}>Careers</Link>
            </div>

        </div>
    </nav>
  )
}

export default Navbar;