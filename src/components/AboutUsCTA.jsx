import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const AboutUsCTA = () => {
  const width = useRef(window.innerWidth)
  return (
    <div>
        <div className={`flex flex-col md:flex-row justify-center ${window.innerWidth < 780 ? 'items-center' : 'justify-center'} py-10 w-[100%]`}>
            <div className='flex flex-col justify-center md:pr-10'><span className='text-center text-white font-bebas-neue text-[3rem]'>GET STARTED</span><span className='text-center text-white font-light text-[2rem]'>NOW</span></div>
            <div className={`border-white ${window.innerWidth < 780 ? 'border-t-2 w-[50%] mt-2' : 'border-l-2'} md:pl-10 h-[140px] flex justify-center items-center`}><Link to='/contactUs' className='rounded-full py-4 px-8 bg-white text-black font-bold md:text-[1.5rem] hover:bg-[#F13F25] hover:text-black duration-300'>GET STARTED</Link></div>
        </div>
    </div>
  )
}

export default AboutUsCTA