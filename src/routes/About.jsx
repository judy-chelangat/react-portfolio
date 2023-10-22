import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import HeroImage2 from '../components/HeroImage2'
import AboutContent from '../components/AboutContent'
function About() {
  return (
    <div>
      <Navbar/>
      <HeroImage2 heading="ABOUT ME" text="Software developer"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About
