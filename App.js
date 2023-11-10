import React from 'react';
import './App.css';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Skills from './Skills';
import Blog from './Blog';
import Awards from './Awards';
import SpeakingEngagement from './SpeakingEngagement';
import Testimonial from './Testimonial';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content-container">
        <About />
        <Projects />
        <Skills />
        <Blog />
        <Awards />
        <SpeakingEngagement />
        <Testimonial />
      </div>
      <Contact />
    </div>
  );
}

export default App;
