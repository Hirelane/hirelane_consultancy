import { reasons } from "../data";
import whyUsBG from '../assets/whyUsBG.jpg'

const ReasonCard = ({title, icon, desc}) => {
    return (
        <div className="flex bg-[#ffffff] rounded-xl p-5 flex-col w-[300px] items-start justify-between my-3">
            <img src={icon} alt="reasonIcon" className="w-15 h-15 rounded-[50%]" />
            <h1 className="text-[1.4rem] font-semibold">{title}</h1>
            <p className="mt-5 list-disc ml-5 space-y-2">{desc}</p>
        </div>
    )
}

const Whyus = () => (
    <div className="bg-[#e7e4e4] pt-4" style={{
        background: `url(${whyUsBG})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }}>
        <h1 className="text-[2.4rem] font-semibold flex justify-center gap-2 text-[#FFFFFF]">Why your <span className='text-[#F13F25]'>business</span> would <span className='text-[#F13F25]'>choose</span> us</h1>
        <p className="text-[1.5rem] text-[#e1e1e1] flex justify-center mb-10 font-light">Because of our unique services we can guarantee you a successfull collaboration!</p>
        <div className="flex flex-row gap-5 flex-wrap justify-center mx-auto w-[70%] pb-10">
            {
                reasons.map((reason) => (
                    <ReasonCard title={reason.title} icon={reason.icon} desc={reason.desc}/>
                ))
            }
        </div>
    </div>
)

export default Whyus;