import githubIcon from '../assets/portfolio/github_logo.svg'
import pdfIcon from '../assets/portfolio/pdf_icon.svg'

type ProjectLink = {
  label: string
  href: string
}

function ExternalArrowIcon() {
  return (
    <svg className="project-link-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg className="project-link-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3.75v9.5" />
      <path d="m7.75 9.75 4.25 4.25 4.25-4.25" />
      <path d="M5 16.75v1.5A2.25 2.25 0 0 0 7.25 20.5h9.5A2.25 2.25 0 0 0 19 18.25v-1.5" />
    </svg>
  )
}

function ProjectLinkIcon({ link }: { link: ProjectLink }) {
  if (link.label.toLowerCase().includes('repository')) {
    return <img className="project-link-icon" src={githubIcon} alt="" aria-hidden="true" />
  }

  if (link.label.toLowerCase().includes('resume')) {
    return <img className="project-link-icon" src={pdfIcon} alt="" aria-hidden="true" />
  }

  if (link.label.toLowerCase().includes('android')) {
    return <DownloadIcon />
  }

  return <ExternalArrowIcon />
}

const projects = [
  {
    name: 'Pump Pal',
    summary:
      'Mobile-first workout tracker focused on balanced training, injury reduction, and AI-powered training insights.',
    proof: [
      'Developed a workout tracker to minimize injuries and balance workouts using personalized workout metrics.',
      'Leveraged the Gemini API to analyze workout history and generate insights into the muscles you are working.',
      'Implemented a simple and easy-to-use interface to make data digestible and visually appealing.',
      'Used Firebase to store workout data as a NoSQL database allows for workout flexibility.',
    ],
    stack: ['React Native', 'Expo', 'Firebase', 'Gemini API', 'Vercel'],
    links: [
      { label: 'Web Preview', href: 'https://pump.adam-montgomery.ca' },
      {
        label: 'Android APK',
        href: 'https://expo.dev/accounts/aquinnmo/projects/pump-pal/builds/f3f89684-df21-4f9c-af2c-ad3c53cdbd48',
      },
      { label: 'Repository', href: 'https://github.com/Aquinnmo/pump-pal' },
    ],
  },
  {
    name: 'Custom Enterprise Databasing System',
    summary:
      'Custom maintenance, inventory, and tracking system for a York Region busing company operating hundreds of machines.',
    proof: [
      'Created an easy-to-use set of online maintenance tickets stored in a Postgres database for simple querying.',
      'Designed a role-based login system using tokens and hashed passwords.',
      'Leveraged AI to write unit-tests on edge functions to ensure reliability in production.',
      'Secured client data by constructing the system in compliance with OWASP top 10.',
    ],
    stack: ['Next.js', 'Supabase', 'TypeScript', 'Vercel'],
    links: [],
  },
  {
    name: 'Rock, Paper, Scissors',
    summary:
      'Interactive exploration of strategy and prediction in Rock, Paper, Scissors, built around algorithms that beat human play.',
    proof: [
      'Researched human tendencies when playing rock, paper, scissors. I used empirical data to design strategies that exploited human tendencies.',
      'Used dynamic-length Markov Chains to create weighted predicitions based on the user\'s previous moves.',
      'Implemented transition tables, weighted probabilites, and tiebreaker fall-backs to optimize algorithms.',
    ],
    stack: ['Next.js', 'TypeScript', 'Vercel'],
    links: [
      { label: 'View website', href: 'https://rps.adam-montgomery.ca' },
      { label: 'Repository', href: 'https://github.com/Aquinnmo/rps-web' },
    ],
  },
  {
    name: 'Am I Cooked?',
    summary:
      'Resume and survey-based readiness tool that gives students Gemini-powered feedback for the job search.',
    proof: [
      'Built with two fellow students to help peers evaluate job-market readiness in under 36 hours.',
      'Supported both survey-based input and resume upload flows for feedback generation. We received 50+ responses in under an hour.',
      'Used Google Gemini to generate practical job-search feedback from user responses.',
    ],
    stack: ['React', 'TypeScript', 'MongoDB', 'Node.js', 'Render', 'Vercel'],
    links: [
      { label: 'View website', href: 'https://cooked.adam-montgomery.ca' },
      { label: 'Repository', href: 'https://github.com/Aquinnmo/am-i-cooked' },
    ],
  },
]

export function ProjectsSection() {
  return (
    <section className="section-shell content-section" aria-labelledby="projects-title">
      <div className="section-heading-row">
        <h2 id="projects-title">Projects</h2>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.name}>
            <div className="project-card-header">
              <h3>{project.name}</h3>
            </div>
            <p className="project-summary">{project.summary}</p>
            {project.proof.length > 0 && (
              <ul className="project-proof-list">
                {project.proof.map((proofPoint) => (
                  <li key={proofPoint}>{proofPoint}</li>
                ))}
              </ul>
            )}
            <ul className="project-stack" aria-label={`${project.name} tech stack`}>
              {project.stack.map((stackItem) => (
                <li key={stackItem}>{stackItem}</li>
              ))}
            </ul>
            {project.links.length > 0 && (
              <div className="project-links" aria-label={`${project.name} links`}>
                {project.links.map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                    <ProjectLinkIcon link={link} />
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
