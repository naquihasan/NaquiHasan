import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import { Services } from './components/Services';
import About from './components/About';
import { Expert } from './components/Expert';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';



function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Services/>
      <About/>
      <Expert/>
      <Portfolio/>
      <Contact/>
    </>
  );
}

export default App;
