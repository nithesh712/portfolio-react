import React from 'react'
import './footer.css'
import {AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Nithesh</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://facebook.com"><AiOutlineFacebook /></a>
        <a href="https://instagram.com"><AiOutlineInstagram /></a>
        <a href="https://twitter.com"><AiOutlineTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Nithesh</small>
      </div>
    </footer>
  )
}

export default Footer