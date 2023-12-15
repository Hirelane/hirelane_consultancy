import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { expertises } from "../data";
import "react-vertical-timeline-component/style.min.css" 

const ExpertiseCard = ({expertise}) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "#EBEBEA",
            }}

            contentArrowStyle={{ borderRight: "7px solid #232631" }}
            iconStyle={{ background: '#f07663' }}
            icon = {
                <div className="flex justify-center items-center w-full h-full">
                    <img
                        src={expertise.icon}
                        alt={expertise.altex}
                        className="w-[60%] h-[60%] object-contain"
                    />
                </div>
            }
        >
            
            <h3 className="text-[1.4rem] font-semibold">{expertise.title}</h3>
            <ul className="mt-5 list-disc ml-5 space-y-2">
                {expertise.points.map((point, index) => (
                    <li
                        key={`expertise-point-${index}`}
                        className="tracking-wider pl-1"
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};

const Expertise = () => (
    <div>
        <div className="flex justify-center items-center">
            <h1 className=' text-[4rem] font-bold text-[#F13F25]'>Our Expertise.</h1>
        </div>
        <div className="mt-20 flex flex-col">
            <VerticalTimeline lineColor="#f07663">
                {expertises.map((expertise, index) => (
                    <ExpertiseCard
                        key={`expertise-${index}`}
                        expertise={expertise}
                    />
                ))}
            </VerticalTimeline>
        </div>
    </div>
)

export default Expertise;