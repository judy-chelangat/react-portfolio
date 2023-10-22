import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import HeroImage2 from '../components/HeroImage2'
import Form from '../components/Form'

function Contact() {
  return (
    <div>
      <Navbar/>
      <HeroImage2 heading="CONTACT ME" text="let's have a chat"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact
