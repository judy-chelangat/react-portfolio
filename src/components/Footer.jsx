import React from 'react'
import {FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter,FaGithub} from 'react-icons/fa'
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
                 <h4>
                    <a href="tel:+254743877863">
                    <FaPhone size={20} style={{ color: '#fff', marginRight: '2rem' }} />
                    +254743877863
                    </a>
               </h4>
                </div>

                <div className='email'>
                     <h4>
                        <a href="mailto:judysigilai75@gmail.com">
                        <FaMailBulk size={20} style={{ color: '#fff', marginRight: '2rem' }} />
                        judysigilai75@gmail.com
                        </a>
                  </h4>
                </div>
            </div>

          

        <div className='right'>
            <h4> About Me </h4>
            <p>This is me Judy sigilai.Software developer.I enjoy discussing new projects and design challenges</p>
            
                <ul className='social'>
                    <li>
                        <a href="https://linkedin.com/in/judy-chelangat-5969aa22b" target='_blank' rel="noreferrer" > <FaLinkedin size={30} style={{color:'#fff',marginRight:'1rem'}}/>  </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/judieysiggy" target='_blank' rel="noreferrer" > <FaTwitter size={30} style={{color:'#fff',marginRight:'1rem'}}/>  </a>
                    </li>
                    <li>
                        <a href="https://instagram.com/_judiey_" target='_blank' rel="noreferrer"> <FaInstagram size={30} style={{color:'#fff',marginRight:'1rem'}}/>  </a>
                    </li>
                    <li>
                        <a href="https://github.com/judy-chelangat" target='_blank' rel="noreferrer"> <FaGithub size={30} style={{color:'#fff',marginRight:'1rem'}}/>  </a>
                    </li>
                </ul>
        </div>
        </div>
      
    </div>
  )
}

export default Footer
