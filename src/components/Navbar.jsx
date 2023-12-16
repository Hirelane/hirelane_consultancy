import { Link } from "react-router-dom";
import hlc_logo_sq from '../assets/hlc_logo_long.png'

const Navbar = () => (
    <nav className="w-full flex items-center py-5 top-0 z-20 shadow-md bg-gray-900">
        <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
            <img
                src={hlc_logo_sq}
                alt="HLC Logo"
                className=" w-60 object-contain"
            />

            <ul className='list-none mr-4 hidden sm:flex flex-row gap-10'>
                <li className='md:ml-8 text-xl md:my-0 my-7'><Link to='/' className='text-white hover:text-gray-400 duration-500'>Home</Link></li>
                <li className='md:ml-8 text-xl md:my-0 my-7'><Link to='/aboutUs' className='text-white hover:text-gray-400 duration-500'>About Us</Link></li>
                <li className='md:ml-8 text-xl md:my-0 my-7'><Link to='/contactUs' className='text-white hover:text-gray-400 duration-500'>Contact Us</Link></li>
            </ul>

        </div>
    </nav>
)

export default Navbar;