import { type CSSProperties, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'

import githubIcon from '../assets/portfolio/github_logo.svg'
import pdfIcon from '../assets/portfolio/pdf_icon.svg'

type ProjectLink = {
  label: string
  href: string
}

type ProjectVisualType = 'mobile' | 'database' | 'strategy' | 'feedback'

type Project = {
  name: string
  summary: string
  proof: string[]
  stack: string[]
  links: ProjectLink[]
  visualType: ProjectVisualType
}

type ProjectMorphRect = {
  height: number
  left: number
  top: number
  width: number
}

type ProjectMorphRequest = {
  focusFromRect: ProjectMorphRect
  focusTitleFromRect: ProjectMorphRect
  fromIndex: number
  selectedFromRect: ProjectMorphRect
  selectedTitleFromRect: ProjectMorphRect
  selectorFromRects: Partial<Record<number, ProjectMorphRect>>
  selectorTitleFromRects: Partial<Record<number, ProjectMorphRect>>
  toIndex: number
}

type ProjectMorphLayer = {
  fromRect: ProjectMorphRect
  id: string
  project: Project
  titleFromScale: number
  titleToScale: number
  toRect: ProjectMorphRect
  type: 'incoming' | 'outgoing' | 'shift'
}

type ProjectMorphTitleLayer = {
  fromRect: ProjectMorphRect
  id: string
  project: Project
  toRect: ProjectMorphRect
  type: 'incoming' | 'outgoing' | 'shift'
}

type ProjectMorphLayerStyle = CSSProperties & {
  '--project-morph-from-height': string
  '--project-morph-from-width': string
  '--project-morph-title-scale': string
  '--project-morph-x': string
  '--project-morph-y': string
}

type ProjectMorphTitleLayerStyle = CSSProperties & {
  '--project-morph-title-font-size': string
  '--project-morph-title-x': string
  '--project-morph-title-y': string
}

function toProjectMorphRect(rect: DOMRect): ProjectMorphRect {
  return {
    height: rect.height,
    left: rect.left,
    top: rect.top,
    width: rect.width,
  }
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function ProjectVisualIcon({ type }: { type: ProjectVisualType }) {
  if (type === 'mobile') {
    return (
      <svg className="project-visual-icon" viewBox="0 0 64 64" aria-hidden="true">
        <rect x="19" y="6" width="26" height="52" rx="6" />
        <path d="M26 13h12" />
        <path d="M27 50h10" />
        <path d="M25 23h14" />
        <path d="M25 30h14" />
        <path d="M25 37h10" />
      </svg>
    )
  }

  if (type === 'database') {
    return (
      <svg className="project-visual-icon" viewBox="0 0 64 64" aria-hidden="true">
        <ellipse cx="32" cy="14" rx="20" ry="8" />
        <path d="M12 14v24c0 4.4 9 8 20 8s20-3.6 20-8V14" />
        <path d="M12 26c0 4.4 9 8 20 8s20-3.6 20-8" />
        <path d="M12 38c0 4.4 9 8 20 8s20-3.6 20-8" />
        <path d="M25 53h14" />
      </svg>
    )
  }

  if (type === 'strategy') {
    return (
      <svg className="project-visual-icon" viewBox="0 0 64 64" aria-hidden="true">
        <path d="M18 18h12v12H18z" />
        <path d="M34 18h12v12H34z" />
        <path d="M18 34h12v12H18z" />
        <path d="M34 34h12v12H34z" />
        <path d="M24 30v4" />
        <path d="M30 24h4" />
        <path d="M40 30v4" />
        <path d="M30 40h4" />
      </svg>
    )
  }

  return (
    <svg className="project-visual-icon" viewBox="0 0 64 64" aria-hidden="true">
      <path d="M16 18h32v22H24l-8 8V18z" />
      <path d="M24 27h16" />
      <path d="M24 34h10" />
      <path d="M42 44l4 4 8-10" />
    </svg>
  )
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

const projects: Project[] = [
  {
    name: 'Pump Pal',
    visualType: 'mobile',
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
    visualType: 'database',
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
    visualType: 'strategy',
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
    visualType: 'feedback',
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

function ProjectContent({ project }: { project: Project }) {
  return (
    <>
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
    </>
  )
}

function ProjectMorphLayer({
  layer,
  onDone,
}: {
  layer: ProjectMorphLayer
  onDone: (layerId: string) => void
}) {
  const [isActive, setIsActive] = useState(false)
  const hasReportedDoneRef = useRef(false)
  const targetRect = isActive ? layer.toRect : layer.fromRect

  const reportDone = useCallback(() => {
    if (hasReportedDoneRef.current) {
      return
    }

    hasReportedDoneRef.current = true
    onDone(layer.id)
  }, [layer.id, onDone])

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setIsActive(true))
    const fallback = window.setTimeout(reportDone, 3400)

    return () => {
      window.cancelAnimationFrame(frame)
      window.clearTimeout(fallback)
    }
  }, [reportDone])

  return (
    <div
      aria-hidden="true"
      className={`project-morph-layer project-morph-layer-${layer.type}`}
      data-project-morph-active={isActive ? 'true' : undefined}
      onTransitionEnd={(event) => {
        if (event.target === event.currentTarget && event.propertyName === 'transform') {
          reportDone()
        }
      }}
      style={
        {
          '--project-morph-from-height': `${layer.fromRect.height}px`,
          '--project-morph-from-width': `${layer.fromRect.width}px`,
          '--project-morph-title-scale': String(isActive ? layer.titleToScale : layer.titleFromScale),
          '--project-morph-x': `${targetRect.left}px`,
          '--project-morph-y': `${targetRect.top}px`,
          height: `${targetRect.height}px`,
          width: `${targetRect.width}px`,
        } as ProjectMorphLayerStyle
      }
    >
      <div className="project-morph-surface">
        {(layer.type === 'outgoing' || layer.type === 'incoming') && (
          <div className="project-morph-detail">
            <div className="project-morph-visual" aria-hidden="true">
              <ProjectVisualIcon type={layer.project.visualType} />
            </div>
            <p>{layer.project.summary}</p>
            <ul>
              {layer.project.stack.slice(0, 4).map((stackItem) => (
                <li key={stackItem}>{stackItem}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

function getTitleFontSize(rect: ProjectMorphRect) {
  return Math.max(14, Math.min(32, rect.height * 0.72))
}

function ProjectMorphTitleLayer({
  layer,
  onDone,
}: {
  layer: ProjectMorphTitleLayer
  onDone: (layerId: string) => void
}) {
  const [isActive, setIsActive] = useState(false)
  const hasReportedDoneRef = useRef(false)
  const targetRect = isActive ? layer.toRect : layer.fromRect

  const reportDone = useCallback(() => {
    if (hasReportedDoneRef.current) {
      return
    }

    hasReportedDoneRef.current = true
    onDone(layer.id)
  }, [layer.id, onDone])

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setIsActive(true))
    const fallback = window.setTimeout(reportDone, 3400)

    return () => {
      window.cancelAnimationFrame(frame)
      window.clearTimeout(fallback)
    }
  }, [reportDone])

  return (
    <div
      aria-hidden="true"
      className={`project-morph-title-layer project-morph-title-layer-${layer.type}`}
      onTransitionEnd={(event) => {
        if (event.target === event.currentTarget && event.propertyName === 'transform') {
          reportDone()
        }
      }}
      style={
        {
          '--project-morph-title-font-size': `${getTitleFontSize(targetRect)}px`,
          '--project-morph-title-x': `${targetRect.left}px`,
          '--project-morph-title-y': `${targetRect.top}px`,
          height: `${targetRect.height}px`,
          width: `${targetRect.width}px`,
        } as ProjectMorphTitleLayerStyle
      }
    >
      {layer.project.name}
    </div>
  )
}

export function ProjectsSection() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0)
  const [morphLayers, setMorphLayers] = useState<ProjectMorphLayer[]>([])
  const [morphTitleLayers, setMorphTitleLayers] = useState<ProjectMorphTitleLayer[]>([])
  const [morphRequest, setMorphRequest] = useState<ProjectMorphRequest | null>(null)
  const focusCardRef = useRef<HTMLElement | null>(null)
  const focusTitleRef = useRef<HTMLHeadingElement | null>(null)
  const selectorRefs = useRef<Record<number, HTMLButtonElement | null>>({})
  const selectorTitleRefs = useRef<Record<number, HTMLSpanElement | null>>({})
  const activeProject = projects[activeProjectIndex]
  const inactiveProjects = projects
    .map((project, index) => ({ project, index }))
    .filter(({ index }) => index !== activeProjectIndex)
  const isMorphing = morphLayers.length > 0 || morphTitleLayers.length > 0 || morphRequest !== null
  const handleMorphLayerDone = useCallback((layerId: string) => {
    setMorphLayers((currentLayers) => {
      const next = currentLayers.filter((currentLayer) => currentLayer.id !== layerId)
      if (next.length === 0) {
        setMorphRequest(null)
      }
      return next
    })
  }, [])

  const handleMorphTitleLayerDone = useCallback((layerId: string) => {
    setMorphTitleLayers((currentLayers) => currentLayers.filter((currentLayer) => currentLayer.id !== layerId))
  }, [])

  const getSelectorRects = useCallback(() => {
    return Object.fromEntries(
      Object.entries(selectorRefs.current)
        .filter((entry): entry is [string, HTMLButtonElement] => entry[1] !== null)
        .map(([index, node]) => [Number(index), toProjectMorphRect(node.getBoundingClientRect())]),
    ) as Partial<Record<number, ProjectMorphRect>>
  }, [])

  const getSelectorTitleRects = useCallback(() => {
    return Object.fromEntries(
      Object.entries(selectorTitleRefs.current)
        .filter((entry): entry is [string, HTMLSpanElement] => entry[1] !== null)
        .map(([index, node]) => [Number(index), toProjectMorphRect(node.getBoundingClientRect())]),
    ) as Partial<Record<number, ProjectMorphRect>>
  }, [])

  useLayoutEffect(() => {
    if (!morphRequest || activeProjectIndex !== morphRequest.toIndex) {
      return
    }

    const focusCard = focusCardRef.current
    const focusTitle = focusTitleRef.current
    const selectorToRects = getSelectorRects()
    const selectorTitleToRects = getSelectorTitleRects()
    const outgoingToRect = selectorToRects[morphRequest.fromIndex]!
    const outgoingTitleToRect = selectorTitleToRects[morphRequest.fromIndex]!

    const focusRect = toProjectMorphRect(focusCard!.getBoundingClientRect())
    const focusTitleRect = toProjectMorphRect(focusTitle!.getBoundingClientRect())
    const now = Date.now()

    setMorphLayers([
      {
        fromRect: morphRequest.selectedFromRect,
        id: `incoming-${morphRequest.toIndex}-${now}`,
        project: projects[morphRequest.toIndex],
        titleFromScale: 0.84,
        titleToScale: 1.18,
        toRect: focusRect,
        type: 'incoming',
      },
      {
        fromRect: morphRequest.focusFromRect,
        id: `outgoing-${morphRequest.fromIndex}-${now}`,
        project: projects[morphRequest.fromIndex],
        titleFromScale: 1.18,
        titleToScale: 0.84,
        toRect: outgoingToRect,
        type: 'outgoing',
      },
    ])
    setMorphTitleLayers([
      {
        fromRect: morphRequest.selectedTitleFromRect,
        id: `title-incoming-${morphRequest.toIndex}-${now}`,
        project: projects[morphRequest.toIndex],
        toRect: focusTitleRect,
        type: 'incoming',
      },
      {
        fromRect: morphRequest.focusTitleFromRect,
        id: `title-outgoing-${morphRequest.fromIndex}-${now}`,
        project: projects[morphRequest.fromIndex],
        toRect: outgoingTitleToRect,
        type: 'outgoing',
      },
    ])
  }, [activeProjectIndex, getSelectorRects, getSelectorTitleRects, morphRequest])

  function handleProjectSelect(index: number) {
    if (index === activeProjectIndex || isMorphing) {
      return
    }

    if (prefersReducedMotion()) {
      setActiveProjectIndex(index)
      return
    }

    const selectedCard = selectorRefs.current[index]
    const selectedTitle = selectorTitleRefs.current[index]
    const focusCard = focusCardRef.current
    const focusTitle = focusTitleRef.current

    if (!selectedCard || !selectedTitle || !focusCard || !focusTitle) {
      setActiveProjectIndex(index)
      return
    }

    setMorphRequest({
      focusFromRect: toProjectMorphRect(focusCard.getBoundingClientRect()),
      focusTitleFromRect: toProjectMorphRect(focusTitle.getBoundingClientRect()),
      fromIndex: activeProjectIndex,
      selectedFromRect: toProjectMorphRect(selectedCard.getBoundingClientRect()),
      selectedTitleFromRect: toProjectMorphRect(selectedTitle.getBoundingClientRect()),
      selectorFromRects: {},
      selectorTitleFromRects: {},
      toIndex: index,
    })
    setActiveProjectIndex(index)
  }

  return (
    <section className="section-shell content-section" aria-labelledby="projects-title">
      <div className="section-heading-row">
        <h2 id="projects-title">Projects</h2>
      </div>
      <div className="project-gallery">
        <article
          className="project-card project-focus-card"
          data-project-focus-morphing={isMorphing ? 'true' : undefined}
          aria-labelledby="active-project-title"
          ref={focusCardRef}
        >
          <div className="project-card-header">
            <h3 id="active-project-title" ref={focusTitleRef}>
              {activeProject.name}
            </h3>
          </div>
          <div className="project-focus-visual" aria-hidden="true">
            <ProjectVisualIcon type={activeProject.visualType} />
          </div>
          <div className="project-focus-content">
            <ProjectContent project={activeProject} />
          </div>
        </article>
        <div
          className="project-selector-row"
          aria-label="Choose featured project"
        >
          {inactiveProjects.map(({ project, index }) => (
            <button
              className="project-selector-card"
              key={project.name}
              type="button"
              disabled={isMorphing}
              data-project-selector-morphing={
                isMorphing && (index === activeProjectIndex || index === morphRequest?.fromIndex)
                  ? 'true'
                  : undefined
              }
              onClick={() => handleProjectSelect(index)}
              ref={(node) => {
                selectorRefs.current[index] = node
              }}
              aria-label={`Feature ${project.name}`}
            >
              <span
                className="project-selector-title"
                ref={(node) => {
                  selectorTitleRefs.current[index] = node
                }}
              >
                {project.name}
              </span>
            </button>
          ))}
        </div>
      </div>
      {morphLayers.map((layer) => (
        <ProjectMorphLayer key={layer.id} layer={layer} onDone={handleMorphLayerDone} />
      ))}
      {morphTitleLayers.map((layer) => (
        <ProjectMorphTitleLayer key={layer.id} layer={layer} onDone={handleMorphTitleLayerDone} />
      ))}
    </section>
  )
}
