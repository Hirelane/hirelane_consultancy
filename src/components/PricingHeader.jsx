import blackBG from '../assets/exertiseBG.jpg';

const PricingHeader = () => {
    return (
        <div className='flex flex-col justify-center items-center py-20' style={{
            background: `url(${blackBG})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        }}>
            <p className='text-white w-[80%] md:w-[50%] text-center font-bold md:text-[3rem] text-[1.5rem]'>Now hire full time talents across India with <span className='text-[#F13F25]'>confidence.</span></p>
        </div>
    )
}

export default PricingHeader;