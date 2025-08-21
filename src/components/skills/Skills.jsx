import React from 'react'
import './skills.css'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { SiSqlite } from "react-icons/si";




const Skills = () => {
  return (
    <section id='skills'>
      <h5>Here's what I have learned</h5>
      <h2>My Tech Stack</h2>

      <div className="container skills__container">
        <div className="skills__frontend">
          <h3>Front-end Development</h3>
          <div className="skills__content">
            <article className='skills__details'>
              <FaHtml5 className='skills__details-icon' />
              <h4>HTML</h4>
            </article>
            <article className='skills__details'>
              <FaCss3Alt className='skills__details-icon' />
              <h4>CSS</h4>
            </article>
            <article className='skills__details'>
              <RiJavascriptFill className='skills__details-icon' />
              <h4>JavaScript</h4>
            </article>
            <article className='skills__details'>
              <FaBootstrap className='skills__details-icon' />
              <h4>BootStrap</h4>
            </article>
            <article className='skills__details'>
              <FaReact className='skills__details-icon' />
              <h4>React</h4>
            </article>
          </div>

        </div>
        <div className="skills__backend">
          <h3>Back-end Development & Databases</h3>
          <div className="skills__content">
            <article className='skills__details'>
              <FaPython className='skills__details-icon' />
              <h4>Python</h4>
            </article>
            <article className='skills__details'>
              <SiDjango className='skills__details-icon' />
              <h4>Django</h4>
            </article>
            <article className='skills__details'>
              <SiSqlite className='skills__details-icon' />
              <h4>SqLite</h4>
            </article>
          </div>
        </div>

      </div>


    </section>
  )
}

export default Skills