import React from 'react'
import {FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from 'react-icons/fa'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                 <FaHome size={20} style={{color:'#fff',marginRight:'2rem'}}/>
                
                <div>
                    <p>Nairobi,Kenya</p>
                </div>
              </div>
                    <div className='phone'>
                    <h4><FaPhone size={20} style={{color:'#fff',marginRight:'2rem'}}/>
                +254743877863</h4>
                </div>

                <div className='email'>
                    <h4><FaMailBulk size={20} style={{color:'#fff',marginRight:'2rem'}}/>
                judysigilai75@gmail.com</h4>
                </div>
            </div>

          

        <div className='right'>
            <h4> About Me </h4>
            <p>This is me Judy sigilai.Software developer.I enjoy discussing new projects and design challenges</p>
            <div className='social'>
            <FaLinkedin size={30} style={{color:'#fff',marginRight:'1rem'}}/>  
            <FaTwitter size={30} style={{color:'#fff',marginRight:'1rem'}}/>  
            <FaInstagram size={30} style={{color:'#fff',marginRight:'1rem'}}/>  
            </div>
        </div>
        </div>
      
    </div>
  )
}

export default Footer
