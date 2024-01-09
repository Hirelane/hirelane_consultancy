import HowItWorksHeader from "../components/HowItWorksHeader";
import HowItWorksTimeline from "../components/HowItWorksTimeline";
import HowItWorksStories from "../components/HowItWorksStories";
import HowItWorksGetStartedCTA from "../components/HowItWorksGetStartedCTA";

const HowItWorks = () => {
    return(
        <>
            <HowItWorksHeader />
            <HowItWorksTimeline />
            {/* <HowItWorksStories /> */}
            <HowItWorksGetStartedCTA />
        </>
    )
}

export default HowItWorks;