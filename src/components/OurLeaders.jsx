import badal from '../assets/badal_director.png';
import sheekha from '../assets/sheekha_director.png'
import pageBG from '../assets/pageBG.jpg'
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const OurLeaders = () => {
    return (
        <div className="flex flow-row justify-center flex-wrap pt-20" style={{
            background: `url(${pageBG})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        }}>
            <div className='flex flex-col justify-center items-center'>
                <div className='w-[300px] h-[300px] rounded-full overflow-hidden mt-10'>
                  <img
                    src={badal}
                    alt="image of ceo"
                    className='w-full h-full object-cover transition-transform duration-300 transform hover:scale-110'
                  />
                </div>
                <p className='font-semibold text-[1.5rem] mt-4'>Badal Talwar</p>
                <p className=' font-light text-[1.2rem]'>Director</p>
                <p className=' font-light text-[1rem] my-5'>badaltalwar@hirelaneconsultancy.com</p>
                {/* <a href="https://www.linkedin.com/in/kriti-kumar-998a931b1/" target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon sx={{ color: '#F13F25', fontSize: 40 }} className='my-5' />
                </a> */}
            </div>
            <div className="flex flex-col w-[300px] gap-3 items-center">
                <p className='font-light text-[2rem]'>OUR LEADERS</p>
                {/* <p className='text-white font-bold text-[2rem]'>Our Directors</p> */}
            </div>
            <div className='flex flex-col justify-center items-center'>
            <div className='w-[300px] h-[300px] rounded-full overflow-hidden mt-10'>
              <img
                src={sheekha}
                alt="image of ceo"
                className='w-full h-full object-cover transition-transform duration-300 transform hover:scale-110'
              />
            </div>
                <p className='font-semibold text-[1.5rem] mt-4'>Sheekha Koul</p>
                <p className='font-light text-[1.2rem]'>Director</p>
                <p className='font-light text-[1rem] my-5'>sheekhakoul@hirelaneconsultancy.com</p>
                {/* <a href="https://www.linkedin.com/in/kriti-kumar-998a931b1/" target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon sx={{ color: '#F13F25', fontSize: 40 }} className='my-5' />
                </a> */}
            </div>
        </div>
    )
}

export default OurLeaders;