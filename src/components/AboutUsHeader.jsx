import leftImg from '../assets/about-header-left.jpg';
import midImg from '../assets/about-header-mid.jpg';
import rightImg from '../assets/about-header-right.jpg';
import pageBG from '../assets/pageBG.jpg';

const AboutUsHeader = () => {
    return (
        <div className="flex flex-col justify-center items-center py-20" style={{
            background: `url(${pageBG})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        }}>
            <p className='text-[1.4rem] font-sans mb-1'>ABOUT US</p>
            <p className='text-[2rem] font-semibold text-center'>We are unlocking business potential</p>
            <p className='text-[1.2rem] text-center font-light w-[80%] md:w-[50%]'>We're here to help organizations not just survive but thrive in today's ever-changing landscape through our talent solutions.</p>
            <div className="flex flex-row justify-center gap-8 flex-wrap h-[500px] mt-10">
                <img src={leftImg} alt="left header img" className='w-[20%] hidden md:block rounded-3xl transition duration-300 ease-in-out transform hover:opacity-70 hover:shadow-lg' style={{ objectFit: 'cover', objectPosition: '15% 100%' }}/>
                <img src={midImg} alt="mid header img" className='md:w-[40%] w-[80%] rounded-3xl transition duration-300 ease-in-out transform hover:opacity-70 hover:shadow-lg' style={{ objectFit: 'cover', objectPosition: '40% 80%' }}/>
                <img src={rightImg} alt="right header img" className='w-[20%] hidden md:block rounded-3xl transition duration-300 ease-in-out transform hover:opacity-70 hover:shadow-lg' style={{ objectFit: 'cover', objectPosition: '80% 0%' }}/>
            </div>
        </div>
    )
}

export default AboutUsHeader;