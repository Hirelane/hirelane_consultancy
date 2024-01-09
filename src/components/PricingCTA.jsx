import React from 'react'
import pageBG from '../assets/pageBG.jpg';
import { Link } from 'react-router-dom';

const PricingCTA = () => {
  return (
    <div className='flex flex-row justify-center py-10 w-[100%]' style={{
        background: `url(${pageBG})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }}>
        <div className='flex flex-col justify-center pr-10'><span className='text-center font-bebas-neue text-[3rem]'>GET STARTED</span><span className='text-center font-light text-[2rem]'>NOW</span></div>
        <div className='border-black border-l-2 pl-10 h-[140px] flex justify-center items-center'><Link to='/contactUs' className='rounded-full py-4 px-8 bg-black text-white font-bold text-[1.5rem] hover:bg-[#F13F25] hover:text-black duration-300'>GET STARTED</Link></div>
    </div>
  )
}

export default PricingCTA