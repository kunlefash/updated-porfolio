import React from 'react'
import "./contact.css"
import {MdOutlineEmail} from "react-icons/md"
import {BsLinkedin, BsWhatsapp} from "react-icons/bs"
const Contact = () => {
  return (
    <section id='contact'>
      <h2>Contact Me</h2>
      
      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineEmail  className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>kunlefashmayop@gmail.com</h5>
            <a href="mailto:kunlefashmayop@gmail.com" target="_blank">Send a Message</a>
          </article>       
          <article className='contact_option'>
            <BsLinkedin  className='contact_option-icon' />
            <h4>LinkedIn</h4>
            <h5>Adekunle Fasakin</h5>
            <a href="https://www.linkedin.com/in/fasakin-adekunle-b55690133" target="_blank"> Send a Message</a>
          </article>      
         <article className='contact_option'>
            <BsWhatsapp  className='contact_option-icon' />
            <h4>WhatsApp</h4>
            <h5>###########</h5>
            <a href="https://api.whatsapp.com/send?phone=+2349064450994" target="_blank">Send a DM</a>
          </article>
        </div>

        <form action="">
          <input type="text" name='name' placeholder='Full Name' required />
          <input type="email" name='email' placeholder='Email' required />
          <textarea name="message"  rows="7" placeholder='Write your message here' required></textarea>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact