import './styles.css'
import { FaGithub } from 'react-icons/fa'
import { SiLinkedin } from "react-icons/si";
import { SiTwitter } from "react-icons/si";

import profilePic from '../../assets/profilePic.jpg'

const About = () => {
  return (
    <div className="about-wrapper" id='about'>
      <div className="pic-wrapper">
        <img src="src\assets\profilePic.jpg" alt="profile-pic" />
      </div>
      <div className="title-wrapper">
        <h1>Hi, I'm Davi Tostes👋</h1>
        <h1 id='dev'>Front-end Developer</h1>
        <div className="line"></div>
        <h2>About:</h2>
        <p>
          Desenvolvedor front-end com conhecimentos em React, JavaScript, HTML, CSS e Nextjs. Cursando bacharel em Sistemas de Informação e procurando
          uma vaga para desenvolvedor junior ou estágio.
        </p>
        <div className="cv-wrapper">
          <a href={profilePic} download>Download CV</a>
        </div>
        <div className="social-wrapper">
          <a target="_blank" href="https://github.com/DaviTostes" ><FaGithub className='icon'/></a>
          <a target="_blank" href="https://www.linkedin.com/in/davi-tostes-bb6642245/" ><SiLinkedin className='icon'/></a>
          <a target="_blank" href="https://twitter.com/davi_tostes8" ><SiTwitter className='icon'/></a>
        </div>
      </div>
    </div>
  )
}

export default About