import RecruitmentHeader from "../components/RecruitmentHeader";
import RecruitmentProcess from "../components/RecruitmentProcess";
import HowItHelps from "../components/HowItHelps";
import pageBG from '../assets/pageBG.jpg'

const Recruitment = () => {
    return (
        <div style={{
            background: `url(${pageBG})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        }}>
            <RecruitmentHeader />
            <RecruitmentProcess />
            <HowItHelps />
        </div>
    )
}

export default Recruitment;