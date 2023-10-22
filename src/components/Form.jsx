import React, { useRef } from 'react'
import './Form.css'
import emailjs from 'emailjs-com'

function Form() {
  const refForm = useRef();

  const sendEmail =(e)=>{
     e.preventDefault()

     emailjs
     .sendForm(
      'service_m1q7z13',
      'template_jkyvw9s',
      refForm.current,
      'uOhYZaCgks3SJrs1J'
     )
      .then(
        (result) => {
          alert('Message sent successfully')
          console.log('Email sent successfully!', result.text);
          window.location.reload(false)
        },
        (error) => {
          alert("please try again")
          console.error('Email could not be sent:', error.text);
        }
      );
  }
  return (
    
    <div className='form'>
      <form ref={refForm} onSubmit={sendEmail}>
        <label>Your Name</label> 
        <input type="text" name='text' required></input>
        <label>Email</label>
        <input type="email"  name='email' required></input>
        <label>Subject</label>
        <input type="text" name='text'  required></input>
        <label>Message</label>
        <textarea name="message" id=""  cols="30" rows="6" placeholder='Type in your message'/>

        <button type="submit" className='btn'>Submit</button>
      </form>
    </div>
  )
}

export default Form
