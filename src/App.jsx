import './App.css';
import { Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Talent from './components/Talent';
import USP from './components/USP';
import Expertise from './components/Expertise';
import Whyus from './components/Whyus';
import Footer from './components/Footer';


const App = () => {
  return (
    <div className=' bg-[#FBFAF8]'>
    <Navbar/>
    <Header/>
    <Talent/>
    <USP/>
    <Expertise/>
    <Whyus/>
    <Footer/>
    </div>
  )
}

export default App;
