import React from 'react'
import '../styles/Navbar.css'
const Navbar = () => {
  return (
    <header>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
    </header>
  )
}

export default Navbar
