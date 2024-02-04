import React, { useEffect, useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import statsBG from '../assets/exertiseBG.jpg';

const AnimatedNumber = ({ value, inView }) => {
  const { number } = useSpring({
    from: { number: 0 },
    to: { number: inView ? value : 0 },
    config: { duration: 2000 },
  });

  return <animated.p className='xl:text-[5rem] lg:text-[4rem] text-[2rem] font-bold text-white'>{number.to((val) => Math.floor(val))}</animated.p>;
};

const AboutUsStats = () => {
  const stats = [
    { label: 'Employees', value: 60 },
    { label: 'Assessments', value: 2000 },
    { label: 'Domains', value: 50 },
    { label: 'Customers', value: 10 },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-50px 0px', // Adjust the root margin as needed
  });

  useEffect(() => {
    // You can add any additional logic here when the component is mounted
  }, []);

  return (
    <div ref={ref} className='flex flex-row justify-center flex-wrap items-center w-[100%] py-10'>
      {stats.map((stat, index) => (
        <div key={index} className={`flex flex-col md:w-[20%] w-[40%] py-2 justify-center items-center ${index === 0 ? 'border-r-2 border-b-2 md:border-t-2' : (index === 1 ? 'border-b-2 md:border-t-2 md:border-r-2' : (index === 2 ? 'border-r-2 md:border-t-2 md:border-r-2 md:border-b-2' : ' md:border-t-2 md:border-b-2'))}  border-[#F13F25]`}>
          <div className='flex flex-row justify-center'>
            <AnimatedNumber value={stat.value} inView={inView} />
            <p className='xl:text-[5rem] lg:text-[4rem] text-[2rem] font-bold text-white'>+</p>
          </div>
          <p className='lg:text-[1.5rem] font-normal text-white'>{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutUsStats;
