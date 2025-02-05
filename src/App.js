import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
            </main>
          } />
          <Route path="/explore" element={<Products />} />
          <Route path="/about" element={<div>About Us Page</div>} />
          <Route path="/team" element={<div>Team Page</div>} />
          <Route path="/contact" element={<div>Contact Page</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
