import React from 'react'
import './about.css'
import ME from '../../assets/img2.jpeg'
import { GiGraduateCap } from "react-icons/gi";
import { PiCertificateFill } from "react-icons/pi";
import { GrProjects } from "react-icons/gr";



const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <GiGraduateCap className='about__icon' />
              <h5>Education</h5>
              <small>BCA Graduate-2025</small>
            </article>
            <article className='about__card'>
              <PiCertificateFill className='about__icon' />
              <h5>Skills</h5>
              <small>React, Django, Python & more</small>
            </article>
            <article className='about__card'>
              <GrProjects className='about__icon' />
              <h5>Projects</h5>
              <small>4+ Academic & Personal Projects</small>
            </article>
          </div>
          <p>
  Hi, I'm Poojasri Tangudu, a passionate BCA graduate with strong interest in full stack development and software engineering. 
  I've built projects like a <strong>Student Study Portal</strong> and an <strong>Employment Management System</strong> that demonstrate my ability to solve real-world problems using technology. 
  I'm eager to begin my career in tech, whether it's building web applications or contributing to software systems.
</p>

<a href="#contact" className="btn btn-primary">Let's Connect</a>
        </div>


      </div>
    </section>
  )
}

export default About