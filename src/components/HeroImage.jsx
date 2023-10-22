import React, { useEffect } from 'react';
import './Hero.css'
import IntroImg from '../assets/intro-bg.jpg'
import { Link } from 'react-router-dom'

function HeroImage() {

  useEffect(() => {
    const elements = document.querySelectorAll('.slide-in-left');
    elements.forEach((element) => {
      element.classList.add('animate');
    });
  }, []);

  return (
    <div className='hero'>
      <div className='mask'>
         <img className='into-img'
         src={IntroImg} alt='introimg'/>
      </div>

      <div className='content'>
        <p className="slide-in-left">HI I'M JUDY SIGILAI</p>
        <h1 className="slide-in-left">Software Developer</h1>
       <div className='slide-in-left'>
        <Link to='/projects' className='btn '>Projects</Link>
        <Link to='/contacts' className='btn btn-light '>Contacts</Link>
       </div>
      </div>
    </div>
  )
}

export default HeroImage
