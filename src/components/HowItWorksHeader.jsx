import blackBG from '../assets/exertiseBG.jpg';


const HowItWorksHeader = () => {
    return (
        <div className='flex flex-col justify-center items-center py-20' style={{
            background: `url(${blackBG})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        }}>
            <p className='text-white font-bold text-[3rem]'><span className='text-[#F13F25]'>Hiring</span> Indian talent was never this easy.</p>
            <p className='text-[#EAEAEA] font-light text-[1.5rem] w-[40vw] text-center'>A platform that takes care of everything beforehand. Hirelane source, vet, match and manage the talents for you.</p>
        </div>
    )
}

export default HowItWorksHeader;