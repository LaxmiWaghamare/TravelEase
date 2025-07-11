import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Auth.css'

const Login = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically make an API call to your backend
    // For demo purposes, we'll just simulate a successful login
    if (formData.email && formData.password) {
      // Store user info in localStorage (in a real app, you'd use a more secure method)
      localStorage.setItem('user', JSON.stringify({ email: formData.email }))
      navigate('/')
      window.location.reload() // Refresh to update the header
    } else {
      setError('Please fill in all fields')
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-form-container">
        <h2>Login</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="auth-button">Login</button>
        </form>
        <p className="auth-switch">
          Don't have an account?{' '}
          <span onClick={() => navigate('/register')} className="auth-link">
            Register here
          </span>
        </p>
      </div>
    </div>
  )
}

export default Login 