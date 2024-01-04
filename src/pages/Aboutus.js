import AboutUsHeader from '../components/AboutUsHeader';
import AboutUsStats from '../components/AboutUsStats';
import MissionVision from '../components/MissionVision';
import OurLeaders from '../components/OurLeaders';
import blackBG from '../assets/exertiseBG.jpg'

const Aboutus = () => {
    return (
        <>
            <AboutUsHeader/>
            <div style={{
                background: `url(${blackBG})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}>
                <AboutUsStats/>
                <MissionVision/>
            </div>
            
            <OurLeaders/>
        </>
    )
}

export default Aboutus;