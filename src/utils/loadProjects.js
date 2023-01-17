import axios from 'axios';

const loadProjects = async () => {
  const repos = await axios.get("https://api.github.com/users/davitostes/repos")
  var projects = []
  for(let i=0; i<repos.data.length; i++) {
    if(repos.data[i].homepage != null) {
      projects.push(repos.data[i])
    }
  }

  return projects
}

export default loadProjects