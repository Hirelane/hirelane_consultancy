import cardBG from '../assets/exertiseBG.jpg'
import blackBG from '../assets/exertiseBG.jpg'
import { motion } from 'framer-motion'
import { textVariant } from '../utils/Motion'
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({ children }) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      rootMargin: '-50px 0px', // Adjust the root margin as needed
    });
  
    return <motion.div ref={ref} variants={textVariant(0.4)} className='py-[10%]' animate={inView ? 'visible' : 'hidden'}>{children}</motion.div>;
};

const MissionVision = () => {
    return (
        <div className='flex justify-center'>
            <div className='flex flex-col w-[70%] md:w-[50%]'>
                <AnimatedSection>
                  <p className='font-light text-[1.4rem] text-white'>What we are, what we do</p>
                  <h1 className='font-bebas-neue text-[4rem] md:text-[6rem] text-[#F13F25]'>OUR MISSION</h1>
                  <p className='font-light md:text-[2rem] text-white'>
                    To be the trusted strategic partner for businesses, providing precision talent solutions that go beyond recruitment, aligning with culture, and driving long-term success.
                  </p>
                </AnimatedSection>
                <div className='pb-[10%]'>
                  <AnimatedSection>
                    <p className='font-light text-[1.4rem] text-white'>What we aspire to be</p>
                    <h1 className='font-bebas-neue text-[4rem] md:text-[6rem] text-[#F13F25]'>OUR VISION</h1>
                    <p className='font-light md:text-[2rem] text-white'>
                      To redefine the future of workforce dynamics by seamlessly connecting businesses with the right talent, fostering growth, and creating sustainable success.
                    </p>
                  </AnimatedSection>
                </div>
            </div>
        </div>
    )
}

export default MissionVision;