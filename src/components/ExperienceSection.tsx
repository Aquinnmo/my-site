import { useEffect, useRef, useState, type CSSProperties } from 'react'

const experiences = [
  {
    role: 'Software Engineering Intern',
    company: 'SPS Commerce',
    dates: 'May 2026 - Present',
    summary:
      'Working on production software automation for the world\'s largest EDI network.',
    proof: [
      'Working on production Kotlin/Spring Boot services that deliver 1 million+ documents daily.',
      'Leading development on an MCP server to help developers diagnose issues when using our services.',
      'Working with REST APIs to integrate complex services that must have near 100% uptime.',
    ],
    tags: ['Kotlin', 'Spring Boot', 'MCP', 'REST APIs'],
  },
  {
    role: 'President, Owner, & Lead Developer',
    company: 'Montgomery Software Foundry Inc.',
    dates: 'Aug 2025 - Present',
    summary:
      'I own my own software corporation focused on modernizing legacy systems for business owners.',
    proof: [
      'Founded my company to sell a custom SaaS solution to a wheelchair accessible transit company in the GTA.',
      'Updated a paper and Excel-based system to an automated online workflow that will prevent data loss.',
      'Documented customer specifications and developed the custom software in line with the requirements.',
    ],
    tags: ['SaaS', 'Client Work', 'Product Design', 'Full Stack'],
  },
  {
    role: 'AI Training Contractor',
    company: 'DataAnnotation',
    dates: 'Jan 2025 - May 2025',
    summary:
      'Reviews generated code and evaluates AI responses for efficiency, readability, correctness, and usefulness.',
    proof: [
      'Checked AI responses to complex prompts for accuracy, instruction following and helpfulness. I explained what could be improved about the response.',
      'Created fine-grained response evaluation criteria to improve the quality of AI responses.',
      'Worked on large scale repos, analyzing code diffs and suggesting changes in under an hour.',
    ],
    tags: ['Code Review', 'Quality Assurance', 'AI Evaluation'],
  },
]

type ExperienceScrollState = {
  activeIndex: number
  scrollProgress: number
}

type ExperienceTrackStyle = CSSProperties & {
  '--experience-active-index': number
  '--experience-card-count': number
  '--experience-track-height': string
}

type ExperienceCardStyle = CSSProperties & {
  '--experience-card-filter': string
  '--experience-card-index': number
  '--experience-card-opacity': number
  '--experience-card-transform': string
}

const EXPERIENCE_CARD_HOLD_UNITS = 0.75
const EXPERIENCE_CARD_TRANSITION_UNITS = 1

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

function smoothstep(value: number) {
  const progress = clamp(value, 0, 1)

  return progress * progress * (3 - 2 * progress)
}

function getExperienceTimelineUnits(cardCount: number) {
  return cardCount * EXPERIENCE_CARD_HOLD_UNITS + Math.max(cardCount - 1, 0) * EXPERIENCE_CARD_TRANSITION_UNITS
}

function getExperienceScrollProgress(totalProgress: number, cardCount: number) {
  const timelineProgress = totalProgress * getExperienceTimelineUnits(cardCount)

  for (let index = 0; index < cardCount; index += 1) {
    const holdStart = index * (EXPERIENCE_CARD_HOLD_UNITS + EXPERIENCE_CARD_TRANSITION_UNITS)
    const holdEnd = holdStart + EXPERIENCE_CARD_HOLD_UNITS
    const transitionEnd = holdEnd + EXPERIENCE_CARD_TRANSITION_UNITS

    if (timelineProgress <= holdEnd || index === cardCount - 1) {
      return index
    }

    if (timelineProgress <= transitionEnd) {
      return index + smoothstep((timelineProgress - holdEnd) / EXPERIENCE_CARD_TRANSITION_UNITS)
    }
  }

  return cardCount - 1
}

function getExperienceCardMotion(index: number, scrollProgress: number) {
  const offset = index - scrollProgress
  const aheadDepth = clamp(offset, 0, 2)
  const pastDepth = clamp(-offset, 0, 2)
  const distanceFromTop = Math.abs(offset)
  const isPast = offset < 0

  const visibleProgress = 1 - clamp(distanceFromTop, 0, 1)
  const easedVisibleProgress = smoothstep(visibleProgress)
  const translateX = isPast ? pastDepth * -0.8 : aheadDepth * 0.18
  const translateY = isPast ? pastDepth * -1.7 : aheadDepth * 12
  const translateZ = isPast ? pastDepth * -7 : aheadDepth * -3
  const rotate = isPast ? pastDepth * -3.8 : aheadDepth * 1.15
  const scale = 0.94 + easedVisibleProgress * 0.06 - (isPast ? pastDepth * 0.018 : 0)
  const opacity = easedVisibleProgress
  const brightness = 0.74 + easedVisibleProgress * 0.26 - (isPast ? pastDepth * 0.05 : 0)
  const saturation = 0.78 + easedVisibleProgress * 0.22 - (isPast ? pastDepth * 0.04 : 0)
  const zIndex = Math.round(120 - distanceFromTop * 30 + (isPast ? -12 : 0))

  return {
    opacity,
    zIndex,
    filter: `saturate(${saturation}) brightness(${brightness})`,
    transform: `translate3d(${translateX.toFixed(3)}rem, ${translateY.toFixed(
      3,
    )}rem, ${translateZ.toFixed(3)}rem) rotate(${rotate.toFixed(3)}deg) scale(${scale.toFixed(3)})`,
  }
}

function useExperienceScrollProgress(cardCount: number) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [scrollState, setScrollState] = useState<ExperienceScrollState>({
    activeIndex: 0,
    scrollProgress: 0,
  })

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 48.001rem)')
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    let animationFrame = 0

    const updateScrollState = () => {
      animationFrame = 0

      if (!desktopQuery.matches || reducedMotionQuery.matches || !trackRef.current) {
        setScrollState((currentState) =>
          currentState.activeIndex === 0 && currentState.scrollProgress === 0
            ? currentState
            : { activeIndex: 0, scrollProgress: 0 },
        )
        return
      }

      const trackRect = trackRef.current.getBoundingClientRect()
      const scrollDistance = Math.max(trackRect.height - window.innerHeight, 1)
      const totalProgress = clamp(-trackRect.top / scrollDistance, 0, 1)
      const rawCardProgress = getExperienceScrollProgress(totalProgress, cardCount)
      const activeIndex = Math.min(cardCount - 1, Math.round(rawCardProgress))

      setScrollState((currentState) => {
        if (
          currentState.activeIndex === activeIndex &&
          Math.abs(currentState.scrollProgress - rawCardProgress) < 0.003
        ) {
          return currentState
        }

        return { activeIndex, scrollProgress: rawCardProgress }
      })
    }

    const requestScrollStateUpdate = () => {
      if (animationFrame === 0) {
        animationFrame = window.requestAnimationFrame(updateScrollState)
      }
    }

    updateScrollState()
    window.addEventListener('scroll', requestScrollStateUpdate, { passive: true })
    window.addEventListener('resize', requestScrollStateUpdate)
    desktopQuery.addEventListener('change', requestScrollStateUpdate)
    reducedMotionQuery.addEventListener('change', requestScrollStateUpdate)

    return () => {
      if (animationFrame !== 0) {
        window.cancelAnimationFrame(animationFrame)
      }

      window.removeEventListener('scroll', requestScrollStateUpdate)
      window.removeEventListener('resize', requestScrollStateUpdate)
      desktopQuery.removeEventListener('change', requestScrollStateUpdate)
      reducedMotionQuery.removeEventListener('change', requestScrollStateUpdate)
    }
  }, [cardCount])

  return { scrollState, trackRef }
}

export function ExperienceSection() {
  const { scrollState, trackRef } = useExperienceScrollProgress(experiences.length)
  const experienceTrackStyle = {
    '--experience-active-index': scrollState.activeIndex,
    '--experience-card-count': experiences.length,
    '--experience-track-height': `${(getExperienceTimelineUnits(experiences.length) + 1) * 100}svh`,
  } as ExperienceTrackStyle

  return (
    <section className="section-shell content-section experience-section" aria-labelledby="experience-title">
      <div
        className="experience-scroll-track"
        data-experience-active-index={scrollState.activeIndex}
        ref={trackRef}
        style={experienceTrackStyle}
      >
        <div className="experience-sticky-viewport">
          <div className="section-heading-row">
            <h2 id="experience-title">Experience</h2>
          </div>
          <div className="experience-card-stage">
            <div className="experience-list">
              {experiences.map((experience, index) => {
                const cardMotion = getExperienceCardMotion(index, scrollState.scrollProgress)

                return (
                  <article
                    className="experience-card"
                    data-experience-card-index={index}
                    data-experience-card-state={
                      index === scrollState.activeIndex
                        ? 'active'
                        : index < scrollState.scrollProgress
                          ? 'past'
                          : 'future'
                    }
                    key={`${experience.company}-${experience.role}`}
                    style={
                      {
                        '--experience-card-filter': cardMotion.filter,
                        '--experience-card-index': index,
                        '--experience-card-opacity': cardMotion.opacity,
                        '--experience-card-transform': cardMotion.transform,
                        zIndex: cardMotion.zIndex,
                      } as ExperienceCardStyle
                    }
                  >
                    <div className="experience-card-header">
                      <div>
                        <h3>{experience.role}</h3>
                        <p className="experience-company">{experience.company}</p>
                      </div>
                      <p className="experience-dates">{experience.dates}</p>
                    </div>
                    <p className="experience-summary">{experience.summary}</p>
                    <ul className="experience-proof-list">
                      {experience.proof.map((proofPoint) => (
                        <li key={proofPoint}>{proofPoint}</li>
                      ))}
                    </ul>
                    <ul className="experience-tags" aria-label={`${experience.company} skill tags`}>
                      {experience.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
