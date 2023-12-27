import { processes } from "../data";
import AnimatedUnderline from "./AnimatedUnderline";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import pageBG from '../assets/pageBG.jpg'

const ProcessCard = ({process}) => {
    return (
        <VerticalTimelineElement className="w-[700px]"
            contentStyle={{
                background: "#EBEBEA",
                width: '300px'
            }}

            contentArrowStyle={{ borderRight: "7px solid #EBEBeA" }}
            iconStyle={{ background: '#f07663' }}
            icon = {
                <div className="flex justify-center items-center w-full h-full">
                    <img
                        src={process.icon}
                        className="w-[60%] h-[60%] object-contain"
                    />
                </div>
            }
        >
            
            <h3 className="text-[2rem] font-bold">{process.title}</h3>
            <h3 className="text-[#353535] font-light text-[1.1rem]">{process.desc}</h3>
        </VerticalTimelineElement>
    );
};

const RecruitmentProcess = () => {
    return (
        <div style={{
            background: `url(${pageBG})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        }}>
            <div className="flex justify-center items-center">
                <h1 className=' text-[4rem] font-bold text-[#000000] mt-10'>Our <span className='text-[#F13F25]'><AnimatedUnderline text={'Recruitment Process.'}/></span></h1>
            </div>
            <div className="mt-20 flex flex-col pb-24">
                <VerticalTimeline lineColor="#f07663" className="flex flex-col items-center">
                    {processes.map((process, index) => (
                        <ProcessCard
                            key={`process-${index}`}
                            process={process}
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </div>
    )
}

export default RecruitmentProcess;