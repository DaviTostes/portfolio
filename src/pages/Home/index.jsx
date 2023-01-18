import { Component } from 'react'
import './styles.css'

import About from '../../components/about'
import Projects from '../../components/projects'
import loadProjects from '../../utils/loadProjects'
import ContactMe from '../../components/contactMe'

class Home extends Component {
  state = {
    projects: []
  }

  async componentDidMount() {
    this.setState({ projects: await loadProjects() })
  }

  render() {
    const {projects} = this.state

    return (
      <div className="Home">
        <header>
          <div className="link-wrapper">
            <a href="#about">ABOUT</a>
            <a href="#projects">PROJECTS</a>
            <a href="#contact">CONTACT</a>
          </div>
        </header>
        <main>
          <About />
          <Projects projects={projects} />
          <ContactMe />
        </main>
      </div>
    )
  }
}

export default Home
