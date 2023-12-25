import blackBG from '../assets/exertiseBG.jpg';

const RecruitmentHeader = () => {
    return (
        <div className='flex flex-col justify-center items-center py-20' style={{
            background: `url(${blackBG})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        }}>
            <p className='text-white font-bold text-[3rem]'>Choose from <span className='text-[#F13F25]'>Hirelane's</span> vast network of top professionals.</p>
            <p className='text-[#EAEAEA] font-light text-[2rem]'>Recruited at par with the international standards of the top companies pan India.</p>
        </div>
    )
}

export default RecruitmentHeader;