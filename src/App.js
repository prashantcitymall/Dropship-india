import React from 'react';
import ElectricField from './components/ElectricField/ElectricField';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import Shipping from './components/Shipping/Shipping';
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
              <ElectricField />
              <Hero />
            </>
          } />
          <Route path="/explore" element={
            <>
              <div className="other-page" />
              <Shipping />
            </>
          } />
          <Route path="/about" element={
            <>
              <div className="other-page" />
              <div>About Us Page</div>
            </>
          } />
          <Route path="/team" element={
            <>
              <div className="other-page" />
              <div>Team Page</div>
            </>
          } />
          <Route path="/contact" element={
            <>
              <div className="other-page" />
              <div>Contact Page</div>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
