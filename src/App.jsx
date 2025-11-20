import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import SEOHead from './components/SEOHead';
import Home from './pages/Home';
import Company from './pages/Company';
import PR from './pages/PR';
import Contact from './pages/Contact';
import Inquiry from './pages/Inquiry';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <SEOHead />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/pr" element={<PR />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/inquiry" element={<Inquiry />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
