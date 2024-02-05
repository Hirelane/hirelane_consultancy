import AnimatedUnderline from "./AnimatedUnderline";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { howItWorks } from "../data";
import pageBG from '../assets/pageBG.jpg'

const WorksCard = ({work}) => {
    return (
        <VerticalTimelineElement
            className="w-[90%] ml-0"
            contentStyle={{
                background: "#EBEBEA",
                width: '70%',
                marginLeft: `${window.innerWidth < 780 ? '100px' : "170px"}`,
                boxShadow: 'none',
                borderRadius: '0.75rem'
            }}
            iconStyle={{ background: '#f07663', 
                fontSize:'2000px', 
                borderColor: '#000000', 
                width: `${window.innerWidth < 780 ? '50px' : "100px"}`, 
                height: `${window.innerWidth < 780 ? '50px' : "100px"}`, 
                marginLeft: '40px'
            }}
            icon={
                <div className="flex justify-center items-center w-full h-full">
                    <img
                        src={work.icon}
                        className="w-[50%] h-[50%] object-contain"
                        alt=""
                    />
                </div>
            }
        >
            {/* Wrap the content in a div with ml-auto */}
            <div>
                <h3 className="md:text-[2rem] text-[1.2rem] font-bold">{work.title}</h3>
                <ul className="mt-5 list-disc ml-5 space-y-2">
                    {work.points.map((point, index) => (
                        <li
                            key={`work-point-${index}`}
                            className="tracking-wider pl-1 text-[#353535] font-light md:text-[1.1rem]"
                        >
                            {point}
                        </li>
                    ))}
                </ul>
                
                <div>
                    {work.noteTitle.length > 0 && (
                    <div className="mb-4">
                        {work.noteTitle.map((title, i) => (
                        <div className="bg-[#f07663] p-4 rounded-xl m-4">
                            <h3 className="text-black md:text-[1.1rem] font-semibold">{title}<span className="text-[#353535] text-[1.1rem] font-light">{work.noteDesc[i]}</span></h3>
                            
                        </div>
                        ))}
                    </div>
                    )}
                </div>
                
            </div>
        </VerticalTimelineElement>


    );
};


const HowItWorksTimeline = () => {
    return (
        <div style={{
            background: `url(${pageBG})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        }}>
            <div className="flex justify-center items-center flex-col">
                <h1 className='text-[2rem] md:text-[4rem] font-bold text-[#000000] mt-10'>How It <span className='text-[#F13F25]'><AnimatedUnderline text={'Works.'}/></span></h1>
                <p className='w-[70%] md:text-[1.6rem] mt-4 md:mt-0 font-light text-center'>Right Matchmaking is at the core of everything that Hirelane does; thus, we invest significant time and effort to ensure the shortlisted talent perfectly aligns with your requirements.</p>
            </div>
            <div className="mt-20 flex flex-col pb-24 items-start xl:ml-[300px]">
                <VerticalTimeline lineColor="#000000" className="flex flex-col" layout="1-column-left">
                    {howItWorks.map((work, index) => (
                        <WorksCard
                            key={`work-${index}`}
                            work={work}
                            className='ml-0'
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </div>
    )
}

export default HowItWorksTimeline;