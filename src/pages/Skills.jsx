import { useScrollReveal } from '../hooks/useScrollReveal'

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'SCSS',
      'Bootstrap', 'React.js', 'Next.js', 'Context API', 'Redux',
      'Zustand', 'Angular 2/4/6', 'jQuery',
    ],
  },
  {
    title: 'Backend & DevOps',
    skills: [
      'Node.js', '.NET / ASP.NET Core', 'SQL', 'Azure DevOps',
      'CI/CD Pipelines', 'GitHub Actions', 'Jenkins', 'Git/GitHub',
    ],
  },
  {
    title: 'Security & Identity',
    skills: [
      'Okta (RBAC, SAML, OIDC)', 'CodeQL', 'Dependabot',
      'Secret Scanning', 'Okta Service-to-Service',
    ],
  },
  {
    title: 'Testing',
    skills: [
      'Unit Testing', 'Integration Testing', 'Jest', 'JUnit',
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      'Azure Boards', 'JIRA', 'Power BI', 'REST APIs', 'Figma/UX Collaboration',
    ],
  },
]

function SkillCard({ category }) {
  const ref = useScrollReveal()
  return (
    <div className="skill-category reveal" ref={ref}>
      <h3>{category.title}</h3>
      <div className="skill-badges">
        {category.skills.map((skill) => (
          <span className="skill-badge" key={skill}>{skill}</span>
        ))}
      </div>
    </div>
  )
}

function Skills() {
  const headingRef = useScrollReveal()
  return (
    <main id="skills">
      <h1 className="lg-heading">
        My <span className="text-secondary">Skills</span>
      </h1>
      <h2 className="sm-heading reveal" ref={headingRef}>
        Technologies I work with...
      </h2>
      <div className="skills-grid">
        {skillCategories.map((category) => (
          <SkillCard key={category.title} category={category} />
        ))}
      </div>
    </main>
  )
}

export default Skills
