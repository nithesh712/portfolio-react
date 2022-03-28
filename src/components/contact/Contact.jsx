import React, { useRef } from 'react'
import './contact.css'
import {HiMail} from 'react-icons/hi'
import {BsMessenger, BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p2j566n', 'template_vere16w', form.current, '-pj4EB12rZSaVaLce')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className="contact__options">
          <article className='contact__option'>
            <HiMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>nithesh.ch712@gmail.com</h5>
            <a href="mailto:nithesh.ch712@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsMessenger className='contact__option-icon' />
            <h4>Messanger</h4>
            <h5>Messanger Chat</h5>
            <a href="https://m.me/nithesh.chinnappa1" target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>Whatsapp Me</h5>
            <a href="https://api.whatsapp.com/send?phone=+919010461396" target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Enter Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" placeholder='Enter Your Message' rows="7" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact