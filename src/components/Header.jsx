import { Button } from '@mui/material';
import header_img from '../assets/homeHeader.png'
import SendIcon from '@mui/icons-material/Send';
import '@fontsource/roboto/400.css';
import pageBG from '../assets/pageBG.jpg'
import { Link } from 'react-router-dom';

const Header = () => (
    <div className='flex flex-row justify-center pb-20' style={{
        background: `url(${pageBG})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }}>
        <div className='w-[40%] ml-10 flex flex-col mt-[100px]'>
            <h2 className='text-[2.5rem] font-light'>
                Where talent meets
            </h2>
            <h1 className=' text-[6rem] font-bold text-[#F13F25]'>TRIUMPH.</h1>
            <div className='w-[80%] flex flex-col gap-2'>
                <p className='font-light'>Unlock unparalleled expertise with our curated pool of top-tier professionals ready to elevate your team.</p>
                <p className='font-light'>Streamline your recruitment process for swift onboarding, ensuring your team is up and running in no time.</p>
                <p className='font-light'>Maximize your budget without compromising quality with our our cost-effective solutions.</p>
            </div>
            <Link to='/howItWorks'><Button variant='contained' endIcon={<SendIcon />} className='w-[35%]' 
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
            alt='header image'
            className='w-[40%] overflow-hidden'
        />
    </div>
)

export default Header;