import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Destinations from './components/Destinations/Destinations'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Feedback from './components/Feedback/Feedback'
import Chatbot from './components/Chatbot/Chatbot'
import './App.css'
import ReadingCorner from './components/ReadingCorner/ReadingCorner'
import ReadingDetail from './components/ReadingCorner/ReadingDetail'
import { useEffect } from 'react';

const Home = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100); // slight delay to ensure DOM is ready
      }
    }
  }, [location]);
  return (
    <>
      <Hero />
      <Destinations />
      <About />
      <Contact />
      <Feedback />
      <ReadingCorner />
      <Chatbot />
    </>
  )
}

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reading-corner" element={<ReadingCorner />} />
        <Route path="/reading-corner/:season" element={<ReadingDetail />} />
      </Routes>
    </div>
  )
}

export default App
