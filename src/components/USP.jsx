import integration from '../assets/integration full.jpg'
import collaboration from '../assets/collaboration full.jpg'
import pageBG from '../assets/pageBG.jpg'

const USP = () => (
    <div className='pb-10' style={{
        background: `url(${pageBG})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }}>
        <div className="md:ml-24 flex justify-center">
            <h1 className='pt-10 md:text-[4rem] text-[2rem] text-center font-bold'>What <span className='text-[#F13F25]'>Differentiates</span> Us?</h1>
        </div>
        <div className='flex flex-col items-center'>
            <div className='flex md:flex-row md:justify-center overflow-hidden my-20 w-[80%] flex-col-reverse rounded-2xl'>
                <div className='md:p-10 p-5 flex flex-col md:items-start items-center justify-center bg-[#ebebea] md:rounded-tl-2xl md:rounded-bl-2xl'>
                    <p className='md:text-[1.5rem] font-light'>INTEGRATION SERVICE</p>
                    <p className='md:text-[2.4rem] text-[1.5rem] font-semibold md:text-left text-center w-[90%]'>We don’t just onboard, we <span className='text-[#F13F25]'>integrate</span> our developers</p>
                    <p className='md:text-[1rem] font-normal md:text-left text-justify mt-2 w-[80%]'>This ensures that the talent we bring into your organization not only possesses the requisite skills but also seamlessly aligns with your company's culture. This harmonious integration enhances productivity, fosters positive work environments, and contributes to long-term success.</p>
                </div>
                <img
                    src={integration}
                    alt='integrationImage'
                    className='md:w-[40%] md:rounded-tr-full md:rounded-br-full'
                />
            </div>

            <div className='flex md:flex-row md:justify-center overflow-hidden my-20 w-[80%] flex-col rounded-2xl'>
                <img
                    src={collaboration}
                    alt='collaborationImage'
                    className='md:w-[40%] md:rounded-tl-full md:rounded-bl-full'
                />
                <div className='md:p-10 p-5 flex flex-col md:items-start items-center justify-center bg-[#ebebea] md:rounded-tr-2xl md:rounded-br-2xl'>
                    <p className='md:text-[1.5rem] font-light'>COLLABORATION SERVICE</p>
                    <p className='md:text-[2.4rem] text-[1.5rem] font-semibold md:text-left text-center w-[90%]'>Unique <span className='text-[#F13F25]'>collaboration</span> support by our Team Coach</p>
                    <p className='md:text-[1rem] font-normal md:text-left text-justify mt-2 w-[80%]'>By working closely with our clients, understanding their unique needs, and fostering a collaborative partnership, we ensure that the talent we provide is not just a resource but an integral part of achieving your business goals. This collaborative synergy leads to innovative solutions, increased efficiency, and sustainable growth.</p>
                </div>
            </div>
            </div>
    </div>
)

export default USP;