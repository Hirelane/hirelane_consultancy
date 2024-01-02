import { talents } from "../data";
import talentBG from "../assets/talentBG.jpg"

const TalentCard = ({title, desc, icon}) => (
    <div className="w-full sm:w-[340px] p-[10px] rounded-[20px] shadow-md flex flex-row justify-between items-center bg-[#D4D3D2] my-4 mx-4">
        <img
            src={icon}
            alt="talentIcon"
            className="w-[60px] h-[60px] p-2 object-contain rounded-[20%] m-4 bg-[#F13F25]"
        />
        <div className="flex flex-col justify-between items-start">
            <h1 className="text-[1.5rem] font-medium">{title}</h1>
            <h2 className="text-[0.75rem] font-normal">{desc}</h2>
        </div>
    </div>
);

const Talent = () => (
    <div className="flex flex-row justify-between flex-wrap bg-[#595856] p-9" style={{
        backgroundImage: `url(${talentBG})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }}>
        <div className="flex flex-col w-[30vw] items-start justify-center mt-10 mb-10">
            <h3 className="text-[1.5rem] text-[#D4D3D2] font-light">TOP-TIER TALENT</h3>
            <h1 className="text-[2.4rem] text-[#FBFAF8] font-semibold">Elevate your team with our expertise.</h1>
            <h1 className="text-[1rem] text-[#D4D3D2] font-normal mt-2">We'll help you build the team you need to succeed in today's competitive marketplace.</h1>
        </div>
        <div className="flex flex-row w-[50vw] flex-wrap">
            {
                talents.map((talent) => (
                    <TalentCard title={talent.title} desc={talent.desc} icon={talent.icon} />
                ))
            }
        </div>
        
    </div>
)

export default Talent;