import blackBG from '../assets/exertiseBG.jpg'
import AnimatedUnderline from '../components/AnimatedUnderline'

const ContactUsHeader = () => {
    return (
        <div className='flex flex-col justify-center items-center py-20' style={{
            background: `url(${blackBG})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        }}>
            <p className='text-white w-[50%] text-center font-bold text-[3rem]'>We solve your <span className='text-[#F13F25]'><AnimatedUnderline text='hiring challenges.'/></span></p>
        </div>
    )
}

export default ContactUsHeader;