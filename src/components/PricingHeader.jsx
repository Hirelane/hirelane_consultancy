import blackBG from '../assets/exertiseBG.jpg';

const PricingHeader = () => {
    return (
        <div className='flex flex-col justify-center items-center py-20' style={{
            background: `url(${blackBG})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        }}>
            <p className='text-white w-[50%] text-center font-bold text-[3rem]'>Now hire full time talents across India with <span className='text-[#F13F25]'>confidence.</span></p>
        </div>
    )
}

export default PricingHeader;