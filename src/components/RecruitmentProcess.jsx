import { processes } from "../data";
import AnimatedUnderline from "./AnimatedUnderline";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import pageBG from '../assets/pageBG.jpg'

const ProcessCard = ({process}) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "#EBEBEA",
                width: `${window.innerWidth < 780 ? '80%' : "500px"}`,
                borderRadius: '0.75rem'
            }}

            contentArrowStyle={{ borderRight: "7px solid #EBEBeA" }}
            iconStyle={{ 
                background: '#f07663', 
                fontSize:'2000px', 
                borderColor: '#000000', 
                width: `${window.innerWidth < 780 ? '50px' : "100px"}`, 
                height:`${window.innerWidth < 780 ? '50px' : "100px"}`, 
                marginLeft: `${window.innerWidth < 780 ? '-5px' : "-45px"}`
            }}
            icon = {
                <div className="flex justify-center items-center w-full h-full">
                    <img
                        src={process.icon}
                        className="w-[60%] h-[60%] object-contain"
                        alt=""
                    />
                </div>
            }
        >
            
            <h3 className="text-[2rem] text-left w-full font-bold">{process.title}</h3>
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
                <h1 className='text-[2rem] md:text-[4rem] font-bold text-[#000000] mt-10'>Our <span className='text-[#F13F25]'><AnimatedUnderline text={'Recruitment Process.'}/></span></h1>
            </div>
            <div className="mt-20 flex flex-col pb-24">
                <VerticalTimeline lineColor="#f07663" className="flex flex-col" layout={`${window.innerWidth < 780 ? '1-column-left' : '2-columns'}`}>
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