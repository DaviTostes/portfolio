import './styles.css'

const ProjectCard = ({name, page, language}) => {
  return (
    <div className="project-card">
      <p>{name}</p>
      {
        page.includes('https://') 
        ? <a target="_blank" href={page}>{page}</a> 
        : <a target="_blank" href={`https://${page}`}>{page}</a>
      }
      <p>Language: {language}</p>
    </div>
  )
}

export default ProjectCard