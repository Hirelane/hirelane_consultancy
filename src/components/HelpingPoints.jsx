import { helps } from "../data";

const HelpCard = ({help}) => {
    return (
        <div className="flex flex-col items-start w-[200px] border-l-2 border-[#F13F25] px-4 mr-8 mb-10">
            <p className="text-[1.5rem] font-semibold">{help.title}</p>
            <p className="text-[1rem] font-light">{help.desc}</p>
        </div>
    )
}

const HelpingPoints = () => {
    return (
        <div className="flex flex-row flex-wrap mt-10">
            {helps.map((help) => (<HelpCard help={help}/>))}
        </div>
    )
}

export default HelpingPoints;