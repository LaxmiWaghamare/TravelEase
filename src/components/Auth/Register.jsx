import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Auth.css'

const Register = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    contact: '',
    address: '',
    country: '',
    state: '',
    city: '',
    pin: ''
  })
  const [error, setError] = useState('')
  const [fieldErrors, setFieldErrors] = useState({})
  const [successMessage, setSuccessMessage] = useState('')
  const [showToast, setShowToast] = useState(false)

  const validate = () => {
    const errors = {}
    // Full Name: required (basic validation)
    if (!formData.name.trim()) {
      errors.name = 'Enter fullname.'
    }
    // Email: required, all lowercase, valid format, must end with allowed domains
    const allowedDomains = ['gmail.com', 'ac.in', 'edu.in']
    if (!formData.email.trim()) {
      errors.email = 'Email is required.'
    } else if (formData.email !== formData.email.toLowerCase()) {
      errors.email = 'Email must be in lowercase.'
    } else if (!/^([a-z0-9._%+-]+)@([a-z0-9.-]+)\.([a-z]{2,})$/.test(formData.email)) {
      errors.email = 'Enter a valid email address.'
    } else if (!allowedDomains.some(domain => formData.email.endsWith(domain))) {
      errors.email = 'Email must end with gmail.com, ac.in, edu.in, etc.'
    }
    // Password: required, min 8 chars, at least one letter, one number, one special char
    if (!formData.password) {
      errors.password = 'Password is required.'
    } else if (formData.password.length < 8) {
      errors.password = 'Password must be at least 8 characters.'
    } else if (!/(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}/.test(formData.password)) {
      errors.password = 'Password must include a letter, a number, and a special character.'
    }
    // Confirm Password: required, must match
    if (!formData.confirmPassword) {
      errors.confirmPassword = 'Confirm your password.'
    } else if (formData.confirmPassword !== formData.password) {
      errors.confirmPassword = 'Passwords do not match.'
    }
    // Contact: required, starts with +countrycode, then 10 digits
    if (!formData.contact.trim()) {
      errors.contact = 'Contact number is required.'
    } else if (!/^\+\d{1,4} \d{10}$/.test(formData.contact.trim())) {
      errors.contact = 'Enter a valid contact (e.g., +91 8097667565).'
    }
    // Other fields: required
    ['address', 'country', 'state', 'city', 'pin'].forEach(field => {
      if (!formData[field].trim()) {
        errors[field] = 'This field is required.'
      }
    })
    return errors
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    setFieldErrors({ ...fieldErrors, [e.target.name]: '' }) // clear error on change
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errors = validate()
    setFieldErrors(errors)
    if (Object.keys(errors).length > 0) {
      setError('Please fix the errors below.')
      return
    }
    setError('')
    setSuccessMessage('')
    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullname: formData.name,
          email: formData.email,
          password: formData.password,
          contact: formData.contact,
          address: formData.address,
          country: formData.country,
          state: formData.state,
          city: formData.city,
          pin: formData.pin
        })
      })
      const data = await response.json()
      if (response.ok) {
        setShowToast(true);
        setSuccessMessage(data.message);
        setFormData({
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
          contact: '',
          address: '',
          country: '',
          state: '',
          city: '',
          pin: ''
        });
        setFieldErrors({});
        setTimeout(() => {
          setShowToast(false);
          navigate('/'); // Redirect to homepage after 10 seconds
        }, 10000); // 10 seconds
      } else {
        setError(data.message || 'Registration failed.')
      }
    } catch (err) {
      setError('Server error. Please try again later.')
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-form-container">
        <h2>Registration Form</h2>
        {error && <div className="error-message">{error}</div>}
        {showToast && (
          <div className="toast-message">
            {successMessage}
          </div>
        )}
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Enter fullname" />
            {fieldErrors.name && <span className="field-error">{fieldErrors.name}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email ID</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Enter valid email address (lowercase)" />
            {fieldErrors.email && <span className="field-error">{fieldErrors.email}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required placeholder="At least 8 chars, letter, number, symbol" />
            {fieldErrors.password && <span className="field-error">{fieldErrors.password}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required placeholder="Confirm password" />
            {fieldErrors.confirmPassword && <span className="field-error">{fieldErrors.confirmPassword}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="contact">Contact No.</label>
            <input type="text" id="contact" name="contact" value={formData.contact} onChange={handleChange} required placeholder="e.g. +91 8097667565" />
            {fieldErrors.contact && <span className="field-error">{fieldErrors.contact}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required placeholder="Enter your address" />
            {fieldErrors.address && <span className="field-error">{fieldErrors.address}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <input type="text" id="country" name="country" value={formData.country} onChange={handleChange} required placeholder="Your country name" />
            {fieldErrors.country && <span className="field-error">{fieldErrors.country}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <input type="text" id="state" name="state" value={formData.state} onChange={handleChange} required placeholder="Here your state name" />
            {fieldErrors.state && <span className="field-error">{fieldErrors.state}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} required placeholder="Enter your city name" />
            {fieldErrors.city && <span className="field-error">{fieldErrors.city}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="pin">PIN Code</label>
            <input type="text" id="pin" name="pin" value={formData.pin} onChange={handleChange} required placeholder="Enter the pincode" />
            {fieldErrors.pin && <span className="field-error">{fieldErrors.pin}</span>}
          </div>
          <button type="submit" className="auth-button">Register Here</button>
        </form>
        <p className="auth-switch">
          Already have an account?{' '}
          <span onClick={() => navigate('/login')} className="auth-link">
            Login here
          </span>
        </p>
      </div>
    </div>
  )
}

export default Register 