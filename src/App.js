import React from 'react';
import ElectricField from './components/ElectricField/ElectricField';
import Capabilities from './components/Capabilities/Capabilities';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import Shipping from './components/Shipping/Shipping';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <div className="home-page" />
              <Hero />
              <Products />
              <Capabilities />
              <Footer />
            </>
          } />
          <Route path="/products" element={
            <>
              <div className="other-page" />
              <Products />
            </>
          } />
          <Route path="/services" element={
            <>
              <div className="other-page" />
              <Shipping />
            </>
          } />
          <Route path="/about" element={
            <>
              <div className="other-page" />
              <div>About Us Page</div>
              <Footer />
            </>
          } />
          <Route path="/team" element={
            <>
              <div className="other-page" />
              <div>Team Page</div>
              <Footer />
            </>
          } />
          <Route path="/contact" element={
            <>
              <Contact />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
