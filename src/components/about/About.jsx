import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { GiFastArrow } from 'react-icons/gi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <img src={ME} alt="" />
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <GiFastArrow className='about__icon' />
              <h5>Experience</h5>
              <small>2+ years Exp</small>
            </article>
            <article className='about__card'>
              <GiFastArrow className='about__icon' />
              <h5>Experience</h5>
              <small>2+ years Exp</small>
            </article>
            <article className='about__card'>
              <GiFastArrow className='about__icon' />
              <h5>Experience</h5>
              <small>2+ years Exp</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quae nulla excepturi ipsa nisi ab nostrum quia dolores facilis repellat vero sequi officiis ratione, possimus totam deleniti voluptatum temporibus qui.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About