import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  useEffect(() => {
    document.body.id = 'bg-img'
    return () => {
      document.body.id = ''
    }
  }, [])

  return (
    <main id="home">
      <h1 className="lg-heading">
        Mitali <span className="text-secondary">Kaushal</span>
      </h1>
      <hr className="hero-divider" />
      <h2 className="sm-heading">
        Software Engineer III
      </h2>
      <p className="hero-subtitle">
        Front-End Specialist &nbsp;&middot;&nbsp; React &nbsp;&middot;&nbsp; TypeScript &nbsp;&middot;&nbsp; Angular
      </p>
      <div className="hero-cta">
        <Link to="/work" className="btn-primary">View My Work</Link>
        <Link to="/contact" className="btn-outline">Get In Touch</Link>
      </div>
      <div className="social-row">
        <a href="https://github.com/mitalikaushal" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/mitali-kaushal-b044a3183/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </main>
  )
}

export default Home
