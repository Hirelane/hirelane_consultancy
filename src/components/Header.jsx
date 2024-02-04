import { Button } from '@mui/material';
import header_img from '../assets/homeHeader.png'
import SendIcon from '@mui/icons-material/Send';
import '@fontsource/roboto/400.css';
import pageBG from '../assets/pageBG.jpg'
import { Link } from 'react-router-dom';

const Header = () => (
    <div className='flex md:flex-row md:justify-center flex-col-reverse pb-20' style={{
        background: `url(${pageBG})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }}>
        
        <div className='md:w-[40%] ml-10 flex flex-col mt-[100px]'>
            <h2 className='md:text-[2.5rem] text-[1.5rem] font-light    '>
                Where talent meets    
            </h2>
            <h1 className=' md:text-[6rem] text-[4rem] font-bold text-[#F13F25]'>TRIUMPH.</h1>
            <div className='w-[80%] flex flex-col gap-2'>
                <p className='font-light md:text-[1.2rem]'>Unlock unparalleled expertise with our curated pool of top-tier talent</p>
                <p className='font-light md:text-[1.2rem]'>Streamline your recruitment as we ensure your team is up and running in no time</p>
                <p className='font-light md:text-[1.2rem]'>Save on your budget with our cost-effective solutions</p>
            </div>
            <Link to='/howItWorks' className='flex flex-row justify-center md:justify-start'><Button variant='contained' endIcon={<SendIcon />} className='md:w-[35%] py-4' 
            sx={{
                my: 5,
                backgroundColor: '#F13F25',
                color: '#FFFFFF',
                '&:hover': {
                  backgroundColor: '#991D0A', // Set the hover background color to #991D0A
                },
            }}>Know More</Button></Link>
        </div>
        <img
            src={ header_img }
            alt='header'
            className='md:w-[40%] overflow-hidden'
        />
    </div>
)

export default Header;