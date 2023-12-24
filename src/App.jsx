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


const App = () => {
  return (
    <div className=' bg-[#FBFAF8]'>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/aboutus' element={<AboutUs></AboutUs>}></Route>
    </Routes>
    <Footer/>
    </div>
  )
}

export default App;
