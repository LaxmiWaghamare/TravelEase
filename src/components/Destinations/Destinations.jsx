import React, { useState } from 'react'
import './Destinations.css'
import CountryDetail from './CountryDetail'
import { countryData } from '../../data/countryData'
import { extendedCountryData } from '../../data/countryDataExtended'
import india from '../../assets/india.jpg'
import korea from '../../assets/korea.jpg'
import china from '../../assets/china.jpg'
import japan from '../../assets/japan.jpg'
import russia from '../../assets/russia.jpg'
import newzealand from '../../assets/newzealand.jpg'

const destinations = [
  {
    id: 1,
    name: 'India',
    image: india,
    description: "From the Himalayas to Kerala's backwaters, India offers a tapestry of landscapes, colors, and cultures for every traveler.",
    price: '₹ 85,000',
    topPick: true
  },
  {
    id: 2,
    name: 'South Korea',
    image: korea,
    description: 'Experience cherry blossoms, mountain temples, and vibrant city life in the heart of East Asia.',
    price: '₹ 1,10,000',
    topPick: false
  },
  {
    id: 3,
    name: 'China',
    image: china,
    description: "Marvel at the Great Wall, karst mountains, and tranquil lakes—China's natural wonders await.",
    price: '₹ 1,20,000',
    topPick: true
  },
  {
    id: 4,
    name: 'Japan',
    image: japan,
    description: 'From Mount Fuji to serene cherry blossoms, Japan blends tradition and breathtaking nature.',
    price: '₹ 1,30,000',
    topPick: false
  },
  {
    id: 5,
    name: 'Russia',
    image: russia,
    description: 'Explore the vastness of Russia, from Lake Baikal to the wilds of Siberia and the beauty of St. Petersburg.',
    price: '₹ 1,25,000',
    topPick: true
  },
  {
    id: 6,
    name: 'New Zealand',
    image: newzealand,
    description: 'A paradise for nature lovers—discover fjords, mountains, and lush green valleys in New Zealand.',
    price: '₹ 1,40,000',
    topPick: false
  }
]

const Destinations = () => {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '1'
  });
  const [errors, setErrors] = useState({});
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
    }
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.guests || formData.guests < 1) newErrors.guests = 'Number of guests is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch('http://localhost:5000/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fullname: formData.name,
            email: formData.email,
            password: 'default123', // You might want to add a password field to the form
            contact: formData.phone,
            address: 'Not provided', // You might want to add an address field to the form
            country: 'Not provided', // You might want to add these fields to the form
            state: 'Not provided',
            city: 'Not provided',
            pin: '000000',
            destination: selectedDestination.name,
            price: selectedDestination.price,
            travel_date: formData.date,
            guests: parseInt(formData.guests)
          }),
        });

        if (response.ok) {
          setBookingSuccess(true);
          setTimeout(() => {
            setSelectedDestination(null);
            setFormData({
              name: '',
              email: '',
              phone: '',
              date: '',
              guests: '1'
            });
            setBookingSuccess(false);
          }, 3000);
        } else {
          const data = await response.json();
          setErrors({ submit: data.message || 'Booking failed. Please try again.' });
        }
      } catch (error) {
        console.error('Error:', error);
        setErrors({ submit: 'Server error. Please try again later.' });
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <section id="destinations" className="destinations">
      <h2>Best Destinations</h2>
      <div className="destinations-grid">
        {destinations.map(dest => (
          <div className="destination-card" key={dest.id}>
            {dest.topPick && <span className="badge">Top Pick</span>}
            <div className="image-container">
              <img src={dest.image} alt={dest.name} loading="lazy" />
            </div>
            <div className="destination-info">
              <h3>{dest.name}</h3>
              <p>{dest.description}</p>
              <div className="price">Starting at {dest.price}</div>
              <button 
                className="book-button"
                onClick={() => setSelectedDestination(dest)}
              >
                Book Now
              </button>
              <button 
                className="explore-button"
                onClick={() => {
                  let countryKey = dest.name.toLowerCase().replace(' ', '');
                  // Handle special case for New Zealand
                  if (dest.name === 'New Zealand') {
                    countryKey = 'newZealand';
                  }
                  const country = countryData[countryKey] || extendedCountryData[countryKey] || countryData.india;
                  setSelectedCountry(country);
                }}
              >
                Explore More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Modal */}
      {selectedDestination && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button 
              className="close-button"
              onClick={() => setSelectedDestination(null)}
            >
              ×
            </button>
            <h3>Book Your Trip to {selectedDestination.name}</h3>
            {bookingSuccess ? (
              <div className="success-message">
                Booking successful! We'll contact you shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={errors.name ? 'error' : ''}
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={errors.phone ? 'error' : ''}
                  />
                  {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="date">Travel Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className={errors.date ? 'error' : ''}
                  />
                  {errors.date && <span className="error-message">{errors.date}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="guests">Number of Guests</label>
                  <input
                    type="number"
                    id="guests"
                    name="guests"
                    min="1"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className={errors.guests ? 'error' : ''}
                  />
                  {errors.guests && <span className="error-message">{errors.guests}</span>}
                </div>

                {errors.submit && (
                  <div className="error-message submit-error">{errors.submit}</div>
                )}

                <button type="submit" className="submit-button">
                  Confirm Booking
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Country Detail Modal */}
      {selectedCountry && (
        <CountryDetail 
          country={selectedCountry} 
          onClose={() => setSelectedCountry(null)} 
        />
      )}
    </section>
  )
}

export default Destinations 