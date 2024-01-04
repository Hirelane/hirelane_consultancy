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

  return <animated.p className='text-[5rem] font-bold text-white'>{number.to((val) => Math.floor(val))}</animated.p>;
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
    <div ref={ref} className='flex flex-row justify-center items-center w-[100%] py-10'>
      {stats.map((stat, index) => (
        <div key={index} className={`flex flex-col justify-center items-center w-[20%] border-t-2 ${index !== 0 ? 'border-l-2' : ''} border-[#F13F25]`}>
          <div className='flex flex-row justify-center'>
            <AnimatedNumber value={stat.value} inView={inView} />
            <p className='text-[5rem] font-bold text-white'>+</p>
          </div>
          <p className='text-[1.5rem] font-normal text-white'>{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutUsStats;
