import React from 'react'
import './Hero.css'
import IntroImg from '../assets/intro-bg.jpg'
import { Link } from 'react-router-dom'

function HeroImage() {
  return (
    <div className='hero'>
      <div className='mask'>
         <img className='into-img'
         src={IntroImg} alt='introimg'/>
      </div>

      <div className='content'>
       <p>HI I'M JUDY SIGILAI </p>
       <h1>Software Developer</h1>
       <div>
        <Link to='/project' className='btn'>Projects</Link>
        <Link to='/contact' className='btn btn-light '>Contacts</Link>
       </div>
      </div>
    </div>
  )
}

export default HeroImage
