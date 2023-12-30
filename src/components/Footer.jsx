import hirelaneLogo from '../assets/hlc_logo_long.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';

const Footer = () => (
    <div className="flex bg-[#000000] flex-row items-center justify-between py-10">
        <div className=' ml-20'>
            <img src={hirelaneLogo} alt="hirelane logo" className='w-[330px] object-contain'/>
        </div>
        <div className="flex flex-row gap-8 mr-10 flex-wrap">
            <div className='flex flex-col justify-center items-center'>
                <p className='text-white font-semibold text-[1.2rem]'>Follow Us</p>
                <a href="https://www.linkedin.com/in/kriti-kumar-998a931b1/" target="_blank" rel="noopener noreferrer">
                    <div className='flex flex-row justify-center items-center'>
                    
                      <LinkedInIcon sx={{ color: '#F13F25', fontSize: 40 }} className='my-5' />
                      <p className='text-white font-light hover:text-[#f13f25] duration-300'>Hirelane Consultancy</p>
                    
                    </div>
                </a>
            </div>
            <div className='flex flex-col'>
                <p className='text-white font-semibold text-[1.2rem]'>About</p>
                <Link to='/aboutUs' className='text-white font-light hover:text-[#f13f25] duration-300'>About us</Link>
                <Link to='/recruitmentProcess' className='text-white font-light hover:text-[#f13f25] duration-300'>Recruitment Process</Link>
                <Link to='/howItWorks' className='text-white font-light hover:text-[#f13f25] duration-300'>How It Works</Link>
            </div>
            <div className='flex flex-col'>
                <p className='text-white font-semibold text-[1.2rem]'>Contact Us</p>
                <Link to='/contactUs' className='text-white font-light hover:text-[#f13f25] duration-300'>For Employers</Link>
                <Link to='/careers' className='text-white font-light hover:text-[#f13f25] duration-300'>For Candidates</Link>
            </div>
        </div>
    </div>
)

export default Footer;