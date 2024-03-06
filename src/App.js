import logo from './logo.svg';
import './App.css';
import './Body.scss';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import MyTeam from './Components/Team/MyTeam';
import One from './Components/Fun/Fun';
import BouncyCardsFeatures from './Components/Join/Join';
// import Contact from './Components/Contact/Contact';
import MyGallery from './Components/MyGallery/MyGallery';
import Main from './Components/Main/Main';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
     
      <Navbar/>
      <Main/>
      <Hero/>
      
      <About/>
     <MyTeam/>
     <MyGallery/>
     <One/>
     <BouncyCardsFeatures/>
     <Footer/>
    
    
    </div>
  );
}

export default App;
