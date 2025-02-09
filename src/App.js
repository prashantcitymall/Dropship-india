import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import Shipping from './components/Shipping/Shipping';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <div className="home-page">
              <div className="home-content">
                <section className="home-section">
                  <Hero />
                </section>
                <section className="home-section">
                  <About />
                </section>
                <section className="home-section">
                  <Shipping />
                </section>
                <section className="home-section">
                  <Contact />
                </section>
              </div>
              <Footer />
            </div>
          } />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Shipping />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
