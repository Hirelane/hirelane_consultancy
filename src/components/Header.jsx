import { Button } from '@mui/material';
import header_img from '../assets/header_img.jpg'
import SendIcon from '@mui/icons-material/Send';
import '@fontsource/roboto/400.css';

const Header = () => (
    <div className='flex flex-row justify-between mt-[150px] bg co'>
        <div className='w-[40%] ml-24 flex flex-col mt-[100px]'>
            <h2 className='text-[2.5rem] font-light'>
                Unlocking tomorrow
            </h2>
            <h1 className=' text-[6rem] font-bold text-[#F13F25]'>TODAY.</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe asperiores nam voluptate rem ratione minus omnis, ipsa porro eius architecto. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, est.</p>
            <Button variant='contained' endIcon={<SendIcon />} className='w-[25%]' 
            sx={{
                my: 5,
                backgroundColor: '#F13F25',
                color: '#FFFFFF',
                '&:hover': {
                  backgroundColor: '#991D0A', // Set the hover background color to #991D0A
                },
            }}>Know More</Button>
        </div>
        <img
            src={ header_img }
            alt='header image'
            className='w-[60%] overflow-hidden'
        />
    </div>
)

export default Header;