import integration from '../assets/integration.png'
import collaboration from '../assets/collaboration.png'
import pageBG from '../assets/pageBG.jpg'

const USP = () => (
    <div className='pb-10' style={{
        background: `url(${pageBG})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }}>
        <div className="ml-24">
            <h1 className='pt-10 text-[4rem] font-bold'>What <span className='text-[#F13F25]'>Differentiates</span> Us?</h1>
        </div>
        <div className=' mx-24 flex flex-row justify-center overflow-hidden my-20'>
            <div className='px-10 flex flex-col items-start justify-center bg-[#ebebea]'>
                <p className='text-[1.5rem] font-light'>INTEGRATION SERVICE</p>
                <p className='text-[2.4rem] font-semibold w-[500px]'>We don’t just onboard, we <span className='text-[#F13F25]'>integrate</span> our developers</p>
                <p className='text-[1rem] font-normal mt-2 w-[600px]'>This ensures that the talent we bring into your organization not only possesses the requisite skills but also seamlessly aligns with your company's culture. This harmonious integration enhances productivity, fosters positive work environments, and contributes to long-term success.</p>
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
                <p className='text-[1rem] font-normal mt-2 w-[600px]'>By working closely with our clients, understanding their unique needs, and fostering a collaborative partnership, we ensure that the talent we provide is not just a resource but an integral part of achieving your business goals. This collaborative synergy leads to innovative solutions, increased efficiency, and sustainable growth.</p>
            </div>
        </div>
    </div>
)

export default USP;