import React from 'react';
import { packages } from '../data';
import pageBG from '../assets/pageBG.jpg'

const PackagesCard = ({ card }) => {
    return (
      <div className="rounded-xl hover:scale-110 duration-300 w-[30%] md:w-[45%] lg:w-[30%] max-h-[70vh] flex flex-col border-[1px] bg-white shadow-xl shadow-[#4a4a4a] border-[#aaaaaa] my-4 mx-2 overflow-hidden">
        <div className="flex flex-col px-4 mt-4">
          <p className="font-bold text-[1.2rem]">{card.title}</p>
          <p className="my-2 font-light text-[0.9rem] text-[#767676]">{card.desc}</p>
        </div>
        <div className="bg-[#ff9a8a] overflow-auto pl-8 pr-4">
          <ul className="list-disc py-4">
            {card.features.map((point, index) => (
              <li key={index} className="font-light text-[1rem] py-1">
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col mt-5 mx-4">
          <p className="font-bold text-[1.2rem]">Talent Salary:</p>
          <p className="mt-3 text-[0.9rem] font-light">Starts from</p>
          <p className="font-light text-[2rem]">{card.salary}</p>
          <p className="font-semibold text-[1.2rem] mt-5">Platform Fee</p>
          <p className="font-light text-[2rem] my-4">{card.platformFee}</p>
        </div>
      </div>
    );
};
  
const PricingSection = () => {
  return (
    <div className="flex flex-col md:py-[100px] justify-center items-center w-full h-[100%]" style={{
        background: `url(${pageBG})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }}>
        <p className='font-light text-[2rem] mb-8'>Choose how you want to hire full-time talents</p>
      <div className="w-full md:w-[80%] lg:w-[70%] flex flex-wrap justify-between">
        {packages.map((card, index) => (
          <PackagesCard key={index} card={card} />
        ))}
      </div>
    </div>
  );
};
  
export default PricingSection;
  