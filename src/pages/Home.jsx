import React from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import './Home.css';
import Destinations from '../components/Destinations/Destinations';
import Contact from '../components/Contact/Contact';
import Feedback from '../components/Feedback/Feedback';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <About />
      <Destinations/>
      <Feedback />
      <Contact/>
    </div>
  );
};

export default Home;