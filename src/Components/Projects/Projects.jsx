import Project from '../Project/Project'

import ProjectsContainer from './styled-projects'

function Projects({ projects, language }) {
  return (
    <ProjectsContainer>
      {projects.map((item) => (
        <Project
          key={item.pos}
          title={item.title}
          status={item.status}
          repo={item.repo}
          ghp={item.ghpages}
          pos={item.pos}
          language={language}
        />
      ))}
    </ProjectsContainer>
  )
}

export default Projects
