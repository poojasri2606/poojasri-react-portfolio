import React from 'react'
import './nav.css'
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
import { GrProjects } from "react-icons/gr";
import { AiFillMessage } from "react-icons/ai";
import { useState } from 'react';




const Nav = () => {
  const[activeNav,setActiveNav]=useState('#');
  return (
<nav>
  <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FaHome/></a>
  <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} ><FaUser /></a>
  <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><PiCertificateFill /></a>
  <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><GrProjects /></a>
  <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiFillMessage /></a>

</nav>  )
}

export default Nav