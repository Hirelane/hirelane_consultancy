import { useState } from 'react';
import blackBG from '../assets/exertiseBG.jpg';
import emailjs from '@emailjs/browser';
import pageBG from '../assets/pageBG.jpg';

//service_l8srwge
//template_ijpo8pj
//am9FoiNueRiEtaSsD

const ContactUsForm = () => {
    const [form, setForm] = useState({
        name: '',
        company: '',
        designation: '',
        mobNo: '',
        email: '',
        query: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs
        .send("service_l8srwge", "template_ijpo8pj", {
            from_name: form.name,
            from_email: form.email,
            to_email: 'hirelaneconsultancy@gmail.com',
            company: form.company,
            designation: form.designation,
            mobNo: form.mobNo,
            query: form.query
        }, "am9FoiNueRiEtaSsD")
        .then(
            () => {
                setLoading(false);
                alert('Thank you! I will get back to you as soon as possible.');
                setForm({
                    name: '',
                    company: '',
                    designation: '',
                    mobNo: '',
                    email: '',
                    query: ''
                });
            },
            (error) => {
                setLoading(false);
                console.log(error);
                alert('Something went wrong.');
            }
        );  
    };

    return (
        <div className='flex flex-col py-20 justify-center items-center' style={{
            background: `url(${pageBG})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        }}>
            <h1 className='font-bold text-[3rem]'>Hire Talents.</h1>
            <p className='font-light text-[1.2rem]'>Fill out this form, and our team will contact you shortly.</p>
            <div className='w-[60%] mt-10'>
                <form onSubmit={handleSubmit}
                className='flex p-4 rounded-xl shadow-lg shadow-[#696969] flex-col' style={{
                    background: `url(${blackBG})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}>
                    <div className='flex flex-row'>
                        <label className='flex flex-col mb-3 w-[50%]'>
                            <span className='text-[1.1rem] font-bold text-white'>
                                Your Name:
                            </span>
                            <input
                                type="text"
                                name='name'
                                required
                                value={form.name}
                                onChange={handleChange}
                                className='bg-transparent text-[#eaeaea] rounded-xl mt-2'
                                placeholder='Enter your full name'
                            />
                        </label>
                        <label className='flex flex-col mb-3'>
                            <span className='text-[1.1rem] font-bold text-white'>
                                Company's Name:
                            </span>
                            <input
                                type="text"
                                name='company'
                                required
                                value={form.company}
                                onChange={handleChange}
                                className='bg-transparent text-[#eaeaea] rounded-xl mt-2'
                                placeholder='Enter your company name'
                            />
                        </label>
                    </div>
                    <div className='flex flex-row'>
                        <label className='flex flex-col mb-3 w-[50%]'>
                            <span className='text-[1.1rem] font-bold text-white'>
                                Designation:
                            </span>
                            <input
                                type="text"
                                name='designation'
                                required
                                value={form.designation}
                                onChange={handleChange}
                                className='bg-transparent text-[#eaeaea] rounded-xl mt-2'
                                placeholder='Enter your designation'
                            />
                        </label>
                        <label className='flex flex-col mb-3'>
                            <span className='text-[1.1rem] font-bold text-white'>
                                Mobile Number:
                            </span>
                            <input
                                type="tel"
                                name='mobNo'
                                required
                                value={form.mobNo}
                                onChange={handleChange}
                                className='bg-transparent text-[#eaeaea] rounded-xl mt-2'
                                placeholder='Enter your mobile number'
                            />
                        </label>
                    </div>
                    <label className='flex flex-col mb-3'>
                        <span className='text-[1.1rem] font-bold text-white'>
                            Email:
                        </span>
                        <input
                            type="email"
                            name='email'
                            required
                            value={form.email}
                            onChange={handleChange}
                            className='bg-transparent text-[#eaeaea]'
                            placeholder='Enter your email'
                        />
                    </label>
                    <label className='flex flex-col mb-3'>
                        <span className='text-[1.1rem] font-bold text-white'>
                            Your Query If Any:
                        </span>
                        <textarea
                            name='query'
                            value={form.query}
                            onChange={handleChange}
                            className='bg-transparent text-[#eaeaea] border-[1px] border-white rounded-2xl p-2 mt-1'
                            placeholder='Enter your query'
                        />
                    </label>
                    <button type="submit" className="bg-white font-semibold hover:bg-[#F13F25] duration-300 text-black py-2 px-4 rounded-full mt-4">
                        {loading ? 'Sending...' : 'GET STARTED'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactUsForm;
