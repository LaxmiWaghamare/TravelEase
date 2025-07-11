import React, { useState } from 'react';
import './CountryDetail.css';

const CountryDetail = ({ country, onClose }) => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    phone: '',
    travelDate: '',
    guests: '1',
    destination: ''
  });
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const validateBookingForm = () => {
    const newErrors = {};
    if (!bookingForm.name.trim()) newErrors.name = 'Name is required';
    if (!bookingForm.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(bookingForm.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!bookingForm.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(bookingForm.phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
    }
    if (!bookingForm.travelDate) newErrors.travelDate = 'Travel date is required';
    if (!bookingForm.guests || bookingForm.guests < 1) newErrors.guests = 'Number of guests is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    if (validateBookingForm()) {
      try {
        const response = await fetch('http://localhost:5000/api/book-tour', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fullname: bookingForm.name,
            email: bookingForm.email,
            contact: bookingForm.phone,
            destination: bookingForm.destination,
            travel_date: bookingForm.travelDate,
            guests: parseInt(bookingForm.guests),
            country: country.name
          }),
        });

        if (response.ok) {
          setBookingSuccess(true);
          setTimeout(() => {
            setSelectedPlace(null);
            setBookingForm({
              name: '',
              email: '',
              phone: '',
              travelDate: '',
              guests: '1',
              destination: ''
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
    setBookingForm(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const openBookingModal = (place) => {
    setSelectedPlace(place);
    setBookingForm(prev => ({
      ...prev,
      destination: place.name
    }));
  };

  return (
    <div className="country-detail-overlay">
      <div className="country-detail-modal">
        <button className="close-button" onClick={onClose}>×</button>
        
        <div className="country-header">
          <img src={country.image} alt={country.name} className="country-hero-image" />
          <div className="country-header-content">
            <h1>{country.name}</h1>
            <p className="country-description">{country.description}</p>
          </div>
        </div>

        <div className="country-content">
          {/* Cultural Overview */}
          <section className="cultural-overview">
            <h2>Cultural Overview</h2>
            <div className="cultural-grid">
              <div className="cultural-card">
                <h3>Traditions & Customs</h3>
                <p>{country.cultural.traditions}</p>
              </div>
              <div className="cultural-card">
                <h3>Languages</h3>
                <p>{country.cultural.languages}</p>
              </div>
              <div className="cultural-card">
                <h3>Popular Festivals</h3>
                <p>{country.cultural.festivals}</p>
              </div>
              <div className="cultural-card">
                <h3>Historical Elements</h3>
                <p>{country.cultural.history}</p>
              </div>
            </div>
          </section>

          {/* Famous Foods */}
          <section className="famous-foods">
            <h2>Famous Foods</h2>
            <div className="foods-grid">
              {country.foods.map((food, index) => (
                <div key={index} className="food-card">
                  <div className="food-image">
                    <img 
                      src={food.image} 
                      alt={food.name} 
                      onLoad={() => console.log(`Food image loaded: ${food.name}`)}
                      onError={(e) => {
                        console.log(`Food image failed to load: ${food.name}`, e.target.src);
                        e.target.src = 'https://via.placeholder.com/400x300/f0f0f0/666666?text=' + encodeURIComponent(food.name);
                      }}
                    />
                  </div>
                  <div className="food-info">
                    <h3>{food.name}</h3>
                    <p>{food.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Religions */}
          <section className="religions">
            <h2>Religions & Sacred Places</h2>
            <div className="religions-grid">
              {country.religions.map((religion, index) => (
                <div key={index} className="religion-card">
                  <h3>{religion.name}</h3>
                  <p>{religion.description}</p>
                  <div className="sacred-places">
                    <h4>Sacred Places:</h4>
                    <ul>
                      {religion.sacredPlaces.map((place, placeIndex) => (
                        <li key={placeIndex}>{place}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Top Places to Visit */}
          <section className="top-places">
            <h2>Top Places to Visit</h2>
            <div className="places-grid">
              {country.places.map((place, index) => (
                <div key={index} className="place-card">
                  <div className="place-image">
                    <img 
                      src={place.image} 
                      alt={place.name} 
                      onLoad={() => console.log(`Place image loaded: ${place.name}`)}
                      onError={(e) => {
                        console.log(`Place image failed to load: ${place.name}`, e.target.src);
                        e.target.src = 'https://via.placeholder.com/400x300/f0f0f0/666666?text=' + encodeURIComponent(place.name);
                      }}
                    />
                  </div>
                  <div className="place-info">
                    <h3>{place.name}</h3>
                    <p className="place-city">{place.city}</p>
                    <p className="place-description">{place.description}</p>
                    <button 
                      className="book-tour-button"
                      onClick={() => openBookingModal(place)}
                    >
                      Book Tour
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Booking Modal */}
        {selectedPlace && (
          <div className="booking-modal-overlay">
            <div className="booking-modal">
              <button 
                className="close-button"
                onClick={() => setSelectedPlace(null)}
              >
                ×
              </button>
              <h3>Book Tour to {selectedPlace.name}</h3>
              {bookingSuccess ? (
                <div className="success-message">
                  <h4>Booking Successful!</h4>
                  <p>We'll contact you shortly with tour details.</p>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={bookingForm.name}
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
                      value={bookingForm.email}
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
                      value={bookingForm.phone}
                      onChange={handleInputChange}
                      className={errors.phone ? 'error' : ''}
                    />
                    {errors.phone && <span className="error-message">{errors.phone}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="travelDate">Travel Date</label>
                    <input
                      type="date"
                      id="travelDate"
                      name="travelDate"
                      value={bookingForm.travelDate}
                      onChange={handleInputChange}
                      className={errors.travelDate ? 'error' : ''}
                    />
                    {errors.travelDate && <span className="error-message">{errors.travelDate}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="guests">Number of Guests</label>
                    <input
                      type="number"
                      id="guests"
                      name="guests"
                      min="1"
                      value={bookingForm.guests}
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
      </div>
    </div>
  );
};

export default CountryDetail; 