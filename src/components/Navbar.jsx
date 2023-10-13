import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='header'>
      <Link to='/'>
        <h1>Porfolio</h1>
      </Link>
      <ul className='nav-menu'>
        <li>
            <Link to='/'>Home </Link>
        </li>
        <li>
            <Link to='/projects'>Projects </Link>
        </li>
        <li>
            <Link to='/about'>About</Link>
        </li>
        <li>
            <Link to='/contact'>Contact </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
