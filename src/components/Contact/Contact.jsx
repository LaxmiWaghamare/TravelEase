import React, { useState } from 'react';
import './Contact.css';
import seaImage from '../../assets/sea.jpg'; // Adjust path if needed
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add backend logic or confirmation UI as needed
  };

  return (
    <section id="contact" className="contact-section">
      {/* Contact Hero with Background Image */}
      <div
        className="contact-hero"
        style={{
          backgroundImage: `url(${seaImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '60vh',
          position: 'relative',
          marginTop: '-50px' // Adjusts gap from About section
        }}
      >
        <div className="overlay" style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1
        }}></div>
        <div className="contact-hero-text" style={{ position: 'relative', zIndex: 2, color: 'white', padding: '80px 20px', textAlign: 'center' }}>
          <h2>LET'S KEEP IN TOUCH</h2>
          <h1>CONTACT US</h1>
        </div>
      </div>

      {/* Contact Content */}
      <div className="contact-main">
        <div className="contact-column">
          <h3>CONTACT AGENCY</h3>
          <p>
            There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly believable.
          </p>
        </div>

        <div className="contact-column">
          <h3>OUR CONTACTS</h3>
          <p><strong>Address:</strong> korti pandharpur</p>
          <p><strong>Phone:</strong> <span className="highlight">7507322021</span></p>
          <p><strong>Email:</strong> waghamarelaxmi8@gmail.com</p>
        </div>

        <div className="contact-column">
          <h3>ANY QUESTIONS?</h3>
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">SEND MESSAGE</button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="contact-footer">
        <p>
          Privacy Policy | Terms of Use | Contact Support<br />
          © domainname.com. All Rights Reserved | Designed by: <a href="https://buylandingpagedesign.com">buylandingpagedesign.com</a>
        </p>
        <div className="footer-icons">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-google-plus-g"></i>
          <i className="fab fa-linkedin-in"></i>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
