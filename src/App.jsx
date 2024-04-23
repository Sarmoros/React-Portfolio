import React from 'react';
import './index.css'; // where the css is being used
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import AboutMe from './components/aboutMe';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Resume from './components/resume';

const App = () => {
 return (
    <Router>
      <div className="app">
        <Header />

        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>

        <Footer />
      </div>
    </Router>
 );
};

export default App;