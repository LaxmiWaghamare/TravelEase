import React from 'react'
import './Hero.css'
import video1 from '../../assets/video1.mp4.mp4'

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="video-background">
        <video autoPlay muted loop playsInline>
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay"></div>
      </div>
      <div className="hero-content">
        <h1>Discover Your Next Adventure</h1>
        <p>Explore the world with our curated travel experiences</p>
        <button className="cta-button" onClick={() => document.getElementById('destinations').scrollIntoView({ behavior: 'smooth' })}>
          Start Planning
        </button>
      </div>
    </section>
  )
}

export default Hero 