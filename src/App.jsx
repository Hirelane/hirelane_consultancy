import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Talent from './components/Talent';
import USP from './components/USP';
import Expertise from './components/Expertise';
import Whyus from './components/Whyus';
import Footer from './components/Footer';
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import Recruitment from './pages/Recruitment';
import HowItWorks from './pages/HowItWorks';


const App = () => {
  return (
    <div className=' bg-[#FBFAF8]'>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/aboutUs' element={<Aboutus />}></Route>
      <Route path='/recruitmentProcess' element={<Recruitment />}></Route>
      <Route path='/howItWorks' element={<HowItWorks />}></Route>
    </Routes>
    <Footer/>
    </div>
  )
}

export default App;
