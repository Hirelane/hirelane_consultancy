import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import Recruitment from './pages/Recruitment';
import HowItWorks from './pages/HowItWorks';
import Careers from './pages/Careers';
import Pricing from './pages/Pricing';


const App = () => {
  return (
    <div className=' bg-[#FBFAF8]'>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/aboutUs' element={<Aboutus />}></Route>
      <Route path='/recruitmentProcess' element={<Recruitment />}></Route>
      <Route path='/howItWorks' element={<HowItWorks />}></Route>
      <Route path='/careers' element={<Careers />}></Route>
      <Route path='/pricing' element={<Pricing />}></Route>
    </Routes>
    <Footer/>
    </div>
  )
}

export default App;
