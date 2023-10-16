import React from 'react'
import './HeroImage2.css'

function HeroImage2({heading,text}) {
  return (
    <div className='hero-img'>
      <div className='heading'>
       <h1>{heading}</h1>
       <p>{text}</p>
      </div>
    </div>
  )
}

export default HeroImage2
