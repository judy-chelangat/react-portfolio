import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import HeroImage2 from '../components/HeroImage2'
import Work   from '../components/Work'

function Project() {
  return (
    <div>
      <Navbar/>
      <HeroImage2 heading="PROJECTS" text="Some of my most recent works"/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Project
