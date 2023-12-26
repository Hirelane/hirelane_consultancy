import AnimatedUnderline from "./AnimatedUnderline";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { processes } from "../data";

const ProcessCard = ({process}) => {
    return (
        <VerticalTimelineElement
            className="w-[700px] ml-0"
            contentStyle={{
                background: "#EBEBEA",
                width: '600px',
                marginLeft: '170px'
            }}
            iconStyle={{ background: '#f07663', fontSize:'2000px', borderColor: '#000000', width: '100px', height:'100px', marginLeft: '40px'}}
            icon={
                <div className="flex justify-center items-center w-full h-full">
                    <img
                        src={process.icon}
                        className="w-[50%] h-[50%] object-contain"
                    />
                </div>
            }
        >
            {/* Wrap the content in a div with ml-auto */}
            <div>
                <h3 className="text-[2rem] font-bold">{process.title}</h3>
                <h3 className="text-[#353535] font-light text-[1.1rem]">{process.desc}</h3>
            </div>
        </VerticalTimelineElement>


    );
};


const HowItWorksTimeline = () => {
    return (
        <>
            <div className="flex justify-center items-center">
                <h1 className=' text-[4rem] font-bold text-[#000000] mt-10'>How It <span className='text-[#F13F25]'><AnimatedUnderline text={'Works.'}/></span></h1>
            </div>
            <div className="mt-20 flex flex-col ml-[300px] pb-24">
                <VerticalTimeline lineColor="#000000" className="flex flex-col" layout="1-column-left">
                    {processes.map((process, index) => (
                        <ProcessCard
                            key={`process-${index}`}
                            process={process}
                            className='ml-0'
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    )
}

export default HowItWorksTimeline;