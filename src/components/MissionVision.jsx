import cardBG from '../assets/exertiseBG.jpg'
import pageBG from '../assets/pageBG.jpg'

const MissionVision = () => {
    return (
        <div className="flex flex-row justify-center my-32 items-center gap-[150px]" style={{
            background: `url(${pageBG})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        }}>
            <div className="flex flex-col justify-between items-center h-[500px] w-[600px] bg-black rounded-3xl border-[#F13F25] border-2 shadow-xl">
                <p className="text-[2rem] font-semibold text-white border-b-2 border-[#F13F25] rounded-[2rem] p-2 text-center w-[80%] mt-10 transition duration-300 ease-in-out hover:bg-[#F13F25] hover:text-black">Our Mission</p>
                <p className="font-medium mb-10 px-10 pb-16 text-[#FFFFFF]">To be the trusted strategic partner for businesses, providing precision talent solutions that go beyond recruitment, aligning with culture, and driving long-term success.</p>
            </div>
            <div className="flex flex-col justify-between items-center h-[500px] w-[600px] bg-black rounded-3xl border-[#F13F25] border-2 shadow-xl" >
                <p className="text-[2rem] font-semibold text-white border-b-2 border-[#F13F25] rounded-[2rem] p-2 text-center w-[80%] mt-10 transition duration-300 ease-in-out hover:bg-[#F13F25] hover:text-black">Our Vision</p>
                <p className="font-medium mb-10 px-10 pb-16 text-[#FFFFFF]">To redefine the future of workforce dynamics by seamlessly connecting businesses with the right talent, fostering growth, and creating sustainable success.</p>
            </div>
        </div>
    )
}

export default MissionVision;