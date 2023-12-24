import statsBG from '../assets/exertiseBG.jpg'

const AboutUsStats = () => {
    
    return (
        <div className='flex flex-row justify-center items-center w-[100%] bg-[#242424] py-10' style={{
            background: `url(${statsBG})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',}}>
            <div className="flex flex-col justify-center items-center w-[20%] border-t-2 border-[#F13F25]">
                <p className='text-[5rem] font-bold text-white'>60+</p>
                <p className='text-[1.5rem] font-normal text-white'>Employees</p>
            </div>
            <div className="flex flex-col justify-center items-center w-[20%] border-t-2 border-l-2 border-r-2 border-[#F13F25]">
                <p className='text-[5rem] font-bold text-white'>2000+</p>
                <p className='text-[1.5rem] font-normal text-white'>Assessments</p>
            </div>
            <div className="flex flex-col justify-center items-center w-[20%] border-t-2 border-r-2 border-[#F13F25]">
                <p className='text-[5rem] font-bold text-white'>50+</p>
                <p className='text-[1.5rem] font-normal text-white'>Domains</p>
            </div>
            <div className="flex flex-col justify-center items-center w-[20%] border-t-2 border-[#F13F25]">
                <p className='text-[5rem] font-bold text-white'>10+</p>
                <p className='text-[1.5rem] font-normal text-white'>Customers</p>
            </div>
        </div>
    )
}

export default AboutUsStats;