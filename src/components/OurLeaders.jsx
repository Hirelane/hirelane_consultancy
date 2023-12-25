import ceo from '../assets/CEO.png';
import blackBG from '../assets/exertiseBG.jpg'
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const OurLeaders = () => {
    return (
        <div className="bg-[#EBEBEA] mt-10 flex flow-row justify-center flex-wrap pt-10" style={{
            background: `url(${blackBG})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        }}>
            <div className='flex flex-col justify-center items-center'>
                <div className='w-[300px] h-[300px] rounded-full overflow-hidden'>
                  <img
                    src={ceo}
                    alt="image of ceo"
                    className='w-full h-full object-cover transition-transform duration-300 transform hover:scale-110'
                  />
                </div>
                <p className='text-white font-semibold text-[1.5rem] mt-4'>Kriti Kumar</p>
                <p className='text-[#EBEBEA] font-light text-[1rem]'>CEO</p>
                <a href="https://www.linkedin.com/in/kriti-kumar-998a931b1/" target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon sx={{ color: '#F13F25', fontSize: 40 }} className='my-5' />
                </a>
            </div>
            <div className="flex flex-col w-[300px] gap-3 items-center">
                <p className='text-[#EBEBEA] font-light text-[1.5rem]'>OUR LEADERS</p>
                <p className='text-white font-bold text-[2rem]'>Our Founders</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
            <div className='w-[300px] h-[300px] rounded-full overflow-hidden'>
              <img
                src={ceo}
                alt="image of ceo"
                className='w-full h-full object-cover transition-transform duration-300 transform hover:scale-110'
              />
            </div>
                <p className='text-white font-semibold text-[1.5rem] mt-4'>Kriti Kumar</p>
                <p className='text-[#EBEBEA] font-light text-[1rem]'>CEO</p>
                <a href="https://www.linkedin.com/in/kriti-kumar-998a931b1/" target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon sx={{ color: '#F13F25', fontSize: 40 }} className='my-5' />
                </a>
            </div>
        </div>
    )
}

export default OurLeaders;