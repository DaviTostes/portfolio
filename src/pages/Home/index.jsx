import { useState } from 'react'
import './styles.css'

function Home() {

  return (
    <div className="Home">
      <header>
        <div className="link-wrapper">
          <a href="#about">ABOUT</a>
          <a href="#projects">PROJECTS</a>
          <a href="">CONTACT</a>
        </div>
      </header>
      <main>
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
              <a href="./assets/daviTostesCV.pdf" download>Download CV</a>
            </div>
          </div>
        </div>
        <div className="project-wrapper" id="projects">
        </div>
      </main>
    </div>
  )
}

export default Home
