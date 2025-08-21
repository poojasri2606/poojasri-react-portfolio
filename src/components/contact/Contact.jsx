import './contact.css'
import { SiGmail } from "react-icons/si";
import { ImWhatsapp } from "react-icons/im";
import emailjs from '@emailjs/browser'
import React, { useRef } from 'react';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    emailjs.sendForm("service_nsckmvf", "template_mi05gt9", form.current, "7Rz9tc_8DgoyE-DqT").then(
      ()=>{
        // console.log("Message sent successfully!")
        console.log('SUCCESS!');
        form.current.reset();
      },
      (error) => {
        console.log('FAILED...', error.text);
        // console.log("Failed to send message, Please try again", error.text);
      }
    )
  }
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Let's Connect</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            < SiGmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>poojasritangudu@gmail.com</h5>
            <a href="mailto:poojasritangudu@gmail.com" target='_blank'>Send a Message</a>
          </article>
          <article className="contact__option">
            < ImWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>Poojasri Tangudu</h5>
            <a href="https://wa.me/916300726799" target='_blank'>Send a Message</a>
          </article>
        </div>
        {/* End of Contact Options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email Address' required />
          <input type="text" name='subject' placeholder='Subject' />
          <textarea name="message" placeholder='Your Message' rows='7' required ></textarea>
          <button type='submit' className='btn btn-primary' value='send'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact