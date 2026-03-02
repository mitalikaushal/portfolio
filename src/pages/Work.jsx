import project7 from '../assets/img/projects/project7.jpg'
import project1 from '../assets/img/projects/project1.jpg'
import project2 from '../assets/img/projects/project2.jpg'
import project3 from '../assets/img/projects/project3.jpg'
import project4 from '../assets/img/projects/project4.jpg'
import project5 from '../assets/img/projects/project5.jpg'
import project8 from '../assets/img/projects/project8.jpg'

const projects = [
  { img: project7, projectUrl: '#', githubUrl: 'https://github.com/mitalikaushal/monster-search' },
  { img: project1, projectUrl: '#', githubUrl: 'https://github.com/mitalikaushal/uTube/tree/develop' },
  { img: project2, projectUrl: '#', githubUrl: 'https://github.com/mitalikaushal/Robobuddies/tree/robobud' },
  { img: project3, projectUrl: '#', githubUrl: 'https://github.com/mitalikaushal/guitar-Shop-Angular-4-' },
  { img: project4, projectUrl: '#', githubUrl: 'https://github.com/mitalikaushal/RollADiceGame' },
  { img: project5, projectUrl: '#', githubUrl: 'https://github.com/mitalikaushal/Survey' },
  { img: project8, projectUrl: '#', githubUrl: 'https://github.com/mitalikaushal/Client-Panel-App-Angular' },
]

function Work() {
  return (
    <main id="about">
      <h1 className="lg-heading">
        My <span className="text-secondary">Work</span>
      </h1>
      <h2 className="sm-heading">
        Checkout Some of My Projects...
      </h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div className="item" key={index}>
            <a href={project.projectUrl}>
              <img src={project.img} alt="projects" />
            </a>
            <a href={project.projectUrl} className="btn-light">
              <i className="fas fa-eye"></i> Project
            </a>
            <a href={project.githubUrl} className="btn-dark">
              <i className="fab fa-github"></i> Github
            </a>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Work
