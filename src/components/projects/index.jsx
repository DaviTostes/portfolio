import './styles.css'

import ProjectCard from '../../components/projectCard'

const Projects = ({projects}) => {
  return (
    <div className="projects" id="projects">
      <h2>Projects in Deploy</h2>
      <div className="projects-wrapper">
        {
          projects.map((project, index) => <ProjectCard key={index} name={project.name} page={project.homepage} language={project.language} />)
        }
      </div>
    </div>
  )
}

export default Projects