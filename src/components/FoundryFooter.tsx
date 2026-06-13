import { foundryContactHref } from '../foundry/foundryContent'
import emailIcon from '../assets/portfolio/email_icon.svg'

export function FoundryFooter() {
  return (
    <footer className="site-footer foundry-footer" aria-label="Contact">
      <div className="footer-contact">
        <h2>Start a project</h2>
        <p className="footer-summary">
          If a workflow is slowing your business down, the first step is a conversation about what needs to change.
        </p>
        <nav className="footer-links" aria-label="Contact links">
          <a
            className="footer-link footer-link-primary"
            href={foundryContactHref}
          >
            <img src={emailIcon} alt="" aria-hidden="true" />
            <span>Email the Foundry</span>
          </a>
        </nav>
        <p className="footer-legal">
          Montgomery Software Foundry Inc.
        </p>
      </div>
    </footer>
  )
}
