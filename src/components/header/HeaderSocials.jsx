import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import { FaGithub } from "react-icons/fa";


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/poojasri-tangudu-5baa84254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'><FaLinkedin/></a>
        <a href="https://github.com/poojasri2606" target='_blank'><FaGithub/></a>
   </div>
  )
}

export default HeaderSocials
