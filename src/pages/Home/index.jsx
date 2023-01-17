import { Component } from 'react'
import './styles.css'

import About from '../../components/about'
import ProjectCard from '../../components/projectCard'
import loadProjects from '../../utils/loadProjects'

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
            <a href="">CONTACT</a>
          </div>
        </header>
        <main>
          <About />
          <div className="projects" id="projects">
            <h2>Projects in Deploy</h2>
            <div className="projects-wrapper">
              {
                projects.map((project, index) => <ProjectCard key={index} name={project.name} page={project.homepage} language={project.language} />)
              }
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default Home
