import { motion } from 'framer-motion';
import { slideIn } from '../utils/Motion.js';
import { useState } from 'react';
import { professions } from '../data.js';
import blackBG from '../assets/exertiseBG.jpg'
import pageBG from '../assets/pageBG.jpg'
import { collection, addDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db } from '../Firebase.js';

const CareerForm = () => {

    const [form, setForm] = useState({
        fname: '',
        surname: '',
        age: '',
        email: "",
        gender: 'male',
        profession: professions.at(0),
        workex: '',
        cv: null
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const docRef = await addDoc(collection(db, 'careerResponses'), {
                firstName: form.fname,
                lastName: form.surname,
                age: form.age,
                email: form.email,
                gender: form.gender,
                profession: form.profession,
                workex: form.workex,
                cv: form.cv,
            });

            setForm({
                fname: '',
                surname: '',
                age: '',
                email: "",
                gender: 'male',
                profession: professions.at(0),
                workex: '',
                cv: null
            });
        } catch (e) {
            console.log(e);
        }

        
    }

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        const userEmail = form.email; 
        const fileName = `resume_${userEmail}.pdf`;
        const storage = getStorage();
        const storageRef = ref(storage, `resumes/${fileName}`);
        await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);
        setForm(prevForm => ({ ...prevForm, cv: downloadURL }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
    }


    return (
        <>
          <div className='flex h-[100%] lg:flex-row flex-col flex-wrap lg:mt-0 sm:mt-[90px] pb-40' style={{
                    background: `url(${pageBG})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}>
            <motion.div
              initial="hidden"
              animate="show"
              variants={slideIn('left', "tween", 0.2, 1)}
              className='w-[30%] flex flex-col mx-auto justify-center items-center'>
              <h1 className='text-9xl'>BOOST</h1>
              <h1 className='text-5xl text-justify'>YOUR CAREER</h1>
            </motion.div>


            <motion.div
              initial="hidden"
              animate="show"
              variants={slideIn('right', "tween", 0.2, 1)}
              className=' lg:w-[50%] mx-auto mt-28'>
                
              <form
                id='feedbackForm'
                onSubmit={handleSubmit}
                className='mt-12 flex flex-col gap-8 z-20 shadow-[#373737] bg-slate-50 rounded-xl pb-3 shadow-xl mb-3' style={{
                    background: `url(${blackBG})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}>
                  
                <div className='flex flex-row justify-start flex-wrap'>
                  <label
                    className='w-[45%] ml-[5%] flex flex-col mt-5 mb-2'>
                    <span className='font-bold text-white'>First Name: </span>
                    <input
                      name='fname'
                      value={form.fname}
                      required
                      onChange={handleChange}
                      placeholder='Enter your first name'
                      className='rounded-xl border-b-2 border-[#757575] text-[#b0b0b0] w-[50%] mt-1 bg-[#222222] p-2'
                    />
                  </label>
                  <label
                    className='flex flex-col mt-5 mb-2'>
                    <span className='font-bold text-white'>Last Name: </span>
                    <input
                      name='surname'
                      value={form.surname}
                      onChange={handleChange}
                      placeholder='Enter your last name'
                      className='rounded-xl border-b-2 border-[#757575] text-[#b0b0b0] mt-1 bg-[#222222] p-2'
                    />
                  </label>
                </div>

                <div className='flex justify-start flex-wrap flex-row'>
                  <label
                    className='flex flex-col lg:flex-row w-[45%] lg:items-center ml-[5%] mt-5 mb-2'>
                    <span className='font-bold text-white'>Age: </span>
                    <input
                      name='age'
                      required
                      value={form.age}
                      onChange={handleChange}
                      placeholder='Enter your age'
                      type='number'
                      className='rounded-xl w-[40] sm:mt-1 xl:mt-0 xl:ml-2 text-[#b0b0b0] bg-[#222222] border-b-2 border-[#757575] p-2'
                    />
                  </label>
                  <label
                    className='flex flex-col lg:flex-row lg:items-center mt-5 mb-2'>
                    <span className='font-bold text-white'>Gender: </span>
                    <select name='gender' form='feedbackForm' onChange={handleChange} value={form.gender} className='bg-[#222222] p-2 border-b-2 border-[#909090] rounded-xl text-[#b0b0b0] sm:mt-1 xl:mt-0 xl:ml-2'>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="others">Others</option>
                    </select>
                  </label>
                </div>

                <div className='flex justify-start flex-wrap flex-row'>
                  <label
                    className='flex flex-col lg:flex-row lg:items-center mt-5 mb-2 ml-[5%]'>
                    <span className='font-bold text-white'>Field of Profession: </span>
                    <select name='profession' form='feedbackForm' onChange={handleChange} value={form.profession} className='bg-[#222222] p-2 border-b-2 border-[#757575] rounded-xl text-[#b0b0b0] sm:mt-1 xl:mt-0 xl:ml-2'>
                    {
                        professions.map((data) => {
                            return <option value={data}>{data}</option>
                        })
                    }
                    </select>
                  </label>
                </div>
                <div className='flex justify-start flex-wrap flex-row'>
                  <label
                    className='flex flex-col lg:flex-row lg:items-center mt-5 mb-2 ml-[5%]'>
                    <span className='font-bold text-white'>Email: </span>
                    <input
                      type='email'
                      name='email'
                      value={form.email}
                      required
                      onChange={handleChange}
                      placeholder='Enter your Email'
                      className='w-[550px] bg-[#222222] text-[#b0b0b0] border-b-2 border-[#757575] rounded-xl sm:mt-1 xl:mt-0 xl:ml-2 p-2'
                    />
                  </label>
                </div>

                <div className='flex flex-row justify-start flex-wrap'>
                  <label
                    className='w-[45%] ml-[5%] flex flex-col mt-5 mb-2'>
                    <span className='font-bold text-white'>Work Experience: </span>
                    <input
                      name='workex'
                      value={form.workex}
                      required
                      type='number'
                      onChange={handleChange}
                      placeholder='Work experience in years'
                      className='rounded-xl w-[60%] mt-1 bg-[#222222] border-[#757575] text-[#b0b0b0] p-2 border-b-2'
                    />
                  </label>
                  <label
                    className='flex flex-col mt-5 mb-2'>
                    <span className='font-bold text-white'>Upload Your CV: </span>
                    <input
                        type='file'
                        name='cv'
                        required
                        accept='.pdf,.doc,.docx' // Specify accepted file formats
                        onChange={handleFileChange}
                        className='p-2 bg-[#222222] text-[#b0b0b0] rounded-xl'
                    />
                  </label>
                </div>

                <button
                  type="submit"
                  className=" bg-[#222222] border-b-2 border-[#757575] hover:bg-gray-400 ml-[5%] py-3 px-8 mb-3 hover:text-[#222222] duration-300 outline-none w-fit text-[#b0b0b0] font-bold shadow-md shadow-primary rounded-xl"
                >
                  Submit
                </button>
              </form>
            </motion.div>
          </div>
        </>
    )
}

export default CareerForm;