import React from 'react';
import { Link } from 'react-router-dom';

const AboutUsCTA = () => {
  return (
    <div>
        <div className='flex flex-row justify-center py-10 w-[100%]'>
            <div className='flex flex-col justify-center pr-10'><span className='text-center text-white font-bebas-neue text-[3rem]'>GET STARTED</span><span className='text-center text-white font-light text-[2rem]'>NOW</span></div>
            <div className='border-white border-l-2 pl-10 h-[140px] flex justify-center items-center'><Link to='/contactUs' className='rounded-full py-4 px-8 bg-white text-black font-bold text-[1.5rem] hover:bg-[#F13F25] hover:text-black duration-300'>GET STARTED</Link></div>
        </div>
    </div>
  )
}

export default AboutUsCTA