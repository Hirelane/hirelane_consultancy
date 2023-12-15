import integration from '../assets/integration.png'
import collaboration from '../assets/collaboration.png'

const USP = () => (
    <>
        <div className=' mx-24 flex flex-row justify-center overflow-hidden my-20'>
            <div className='px-10 flex flex-col items-start justify-center bg-[#EBEBEA]'>
                <p className='text-[1.5rem] font-light'>INTEGRATION SERVICE</p>
                <p className='text-[2.4rem] font-semibold w-[500px]'>We don’t just onboard, we <span className='text-[#F13F25]'>integrate</span> our developers</p>
                <p className='text-[1rem] font-normal mt-2 w-[600px]'>We seamlessly integrate developers into your team and workflows.   fostering collaboration, ensuring cohesion, and providing ongoing support throughout your project's lifecycle.</p>
            </div>
            <img
                src={integration}
                alt='integrationImage'
                className='w-[40%]'
            />
        </div>

        <div className=' mx-24 flex flex-row justify-center overflow-hidden my-20'>
            <img
                src={collaboration}
                alt='collaborationImage'
                className='w-[40%]'
            />
            <div className='px-10 flex flex-col items-start justify-center bg-[#EBEBEA]'>
                <p className='text-[1.5rem] font-light'>COLLABORATION SERVICE</p>
                <p className='text-[2.4rem] font-semibold w-[500px]'>Unique <span className='text-[#F13F25]'>collaboration</span> support by our Team Coach</p>
                <p className='text-[1rem] font-normal mt-2 w-[600px]'>Unlock effective collaboration with personalized Team and Remote Coaching, coupled with 360-degree feedback and performance monitoring to help teams and remote developers thrive.</p>
            </div>
        </div>
    </>
)

export default USP;