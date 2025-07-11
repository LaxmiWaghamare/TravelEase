import React from 'react'
import './About.css'

const About = () => {
  const features = [
    {
      id: 1,
      icon: '✈️',
      title: 'Expert Travel Guides',
      description: 'Our experienced guides ensure you have the best travel experience.'
    },
    {
      id: 2,
      icon: '🏨',
      title: 'Best Accommodations',
      description: 'Carefully selected hotels and resorts for your comfort.'
    },
    {
      id: 3,
      icon: '🚗',
      title: 'Private Transportation',
      description: 'Comfortable and reliable transportation throughout your journey.'
    },
    {
      id: 4,
      icon: '🎯',
      title: 'Customized Tours',
      description: 'Tailored travel packages to match your preferences.'
    }
  ]

  return (
    <section id="about" className="about">
      <h2>About Us</h2>
      <div className="about-content">
        <p className="about-description">
          With over 10 years of experience in the travel industry, we provide exceptional 
          travel experiences that create lasting memories. Our commitment to quality and 
          customer satisfaction sets us apart.
        </p>
        <div className="features-grid">
          {features.map(feature => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About 