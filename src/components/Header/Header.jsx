import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem('user')
    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('user')
    setUser(null)
    navigate('/')
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const handleReadingCornerClick = (e) => {
    e.preventDefault()
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: 'readingcorner' } })
    } else {
      scrollToSection('readingcorner')
    }
  }

  return (
    <nav className="navbar">
      <div className="logo">TravelEase</div>
      <ul className="nav-links">
        <li><a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero') }}>Home</a></li>
        <li><a href="#destinations" onClick={(e) => { e.preventDefault(); scrollToSection('destinations') }}>Destinations</a></li>
        <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about') }}>About</a></li>
        <li><a href="#readingcorner" onClick={handleReadingCornerClick}>ReadingCorner</a></li>
        <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>Contact</a></li>
      </ul>
      <div className="auth-links">
        {user ? (
          <div className="user-menu">
            <span className="user-name">{user.name}</span>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <>
            <Link to="/login" className="auth-button">Login</Link>
            <Link to="/register" className="auth-button register">Register</Link>
          </>
        )}
      </div>
    </nav>
  )
}

export default Header 