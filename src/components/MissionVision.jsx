import cardBG from '../assets/exertiseBG.jpg'
import pageBG from '../assets/pageBG.jpg'

const MissionVision = () => {
    return (
        <div className="flex flex-row justify-center my-32 items-center gap-[150px]" style={{
            background: `url(${pageBG})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        }}>
            <div className="flex flex-col justify-between items-center h-[500px] w-[600px] bg-black rounded-3xl border-[#F13F25] border-2 shadow-xl">
                <p className="text-[2rem] font-semibold text-white border-b-2 border-[#F13F25] rounded-[2rem] p-2 text-center w-[80%] mt-10 transition duration-300 ease-in-out hover:bg-[#F13F25] hover:text-black">Our Mission</p>
                <p className="font-medium mb-10 px-10 pb-16 text-[#FFFFFF]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, ex, illum voluptatem magni praesentium nulla quae neque inventore necessitatibus quis dolorem deserunt eius quas sed culpa, incidunt laborum id voluptas aliquid quos. Nobis repellat ipsam consequuntur blanditiis hic! Itaque, nulla? Debitis dolorum unde iusto corporis quae adipisci magnam fugit officia quasi placeat beatae voluptatem, harum expedita ex quidem sunt inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, fuga!</p>
            </div>
            <div className="flex flex-col justify-between items-center h-[500px] w-[600px] bg-black rounded-3xl border-[#F13F25] border-2 shadow-xl" >
                <p className="text-[2rem] font-semibold text-white border-b-2 border-[#F13F25] rounded-[2rem] p-2 text-center w-[80%] mt-10 transition duration-300 ease-in-out hover:bg-[#F13F25] hover:text-black">Our Vision</p>
                <p className="font-medium mb-10 px-10 pb-16 text-[#FFFFFF]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit pariatur fugit accusamus magnam sed similique laboriosam nihil non. Minima tempora harum nobis dignissimos sapiente earum obcaecati pariatur expedita! Soluta quibusdam optio rerum expedita. Eveniet alias perspiciatis quaerat! Impedit quae eius dolor natus accusamus voluptatibus voluptatem dicta, quo tenetur, officia rem minus voluptas. Assumenda doloremque quidem, unde tempore culpa dignissimos aliquid!</p>
            </div>
        </div>
    )
}

export default MissionVision;