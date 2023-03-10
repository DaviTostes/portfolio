import './styles.css'

import { FaGithub } from 'react-icons/fa'
import { SiLinkedin } from "react-icons/si";
import { SiTwitter } from "react-icons/si";

import cv from '../../assets/daviTostesCV.pdf'
import loadProfilePic from '../../utils/loadProfilePic';
import { Component, useEffect, useState } from 'react';

class About extends Component {
  state = {
    profilePic: ''
  }

  async componentDidMount () {
    this.setState({profilePic: await loadProfilePic()})
  }

  render() {
    const {profilePic} = this.state

    return (
      <div className="about-wrapper" id='about'>
        <div className="pic-wrapper">
          <img src={profilePic} alt="profile-pic" />
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
            <a href={cv} download>Download CV</a>
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
}

export default About