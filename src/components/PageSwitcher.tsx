import type { MouseEvent } from 'react'
import './PageSwitcher.css'

type PageRoute = 'portfolio' | 'foundry'

type PageSwitcherProps = {
  activeRoute: PageRoute
  themeRoute: PageRoute
  onNavigate: (route: PageRoute, path: string) => void
}

type SwitcherItem = {
  route: PageRoute
  path: string
  label: string
  icon: 'adam' | 'foundry'
}

const switcherItems: SwitcherItem[] = [
  {
    route: 'portfolio',
    path: '/',
    label: 'Adam',
    icon: 'adam',
  },
  {
    route: 'foundry',
    path: '/foundry',
    label: 'Foundry',
    icon: 'foundry',
  },
]

function AdamIcon() {
  return (
    <svg className="page-switcher-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 12.25a4.25 4.25 0 1 0 0-8.5 4.25 4.25 0 0 0 0 8.5Z" />
      <path d="M4.75 21a7.25 7.25 0 0 1 14.5 0" />
    </svg>
  )
}

function FoundryIcon() {
  return (
    <svg className="page-switcher-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.5 20h15" />
      <path d="M6.75 20v-7.1a5.25 5.25 0 0 1 10.5 0V20" />
      <path d="M9.1 20v-6.35a2.9 2.9 0 0 1 5.8 0V20" />
      <path d="M7.8 7.4h8.4" />
      <path d="M9.25 4.65h5.5" />
      <path d="M12 17.05c1.05-.68 1.68-1.52 1.48-2.54-.14-.7-.62-1.26-1.1-1.74-.1.82-.46 1.3-.93 1.84-.55.63-.82 1.24-.35 1.9.22.3.52.47.9.54Z" />
    </svg>
  )
}

function SwitcherIcon({ icon }: { icon: SwitcherItem['icon'] }) {
  return icon === 'adam' ? <AdamIcon /> : <FoundryIcon />
}

export function PageSwitcher({ activeRoute, themeRoute, onNavigate }: PageSwitcherProps) {
  const handleNavigate = (event: MouseEvent<HTMLAnchorElement>, item: SwitcherItem) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return
    }

    event.preventDefault()
    onNavigate(item.route, item.path)
  }

  return (
    <nav className="page-switcher" data-active-route={activeRoute} data-theme-route={themeRoute} aria-label="Page switcher">
      <span className="page-switcher-active-pill" aria-hidden="true" />
      {switcherItems.map((item) => (
        <a
          key={item.route}
          className="page-switcher-link"
          data-switcher-route={item.route}
          href={item.path}
          aria-current={activeRoute === item.route ? 'page' : undefined}
          onClick={(event) => handleNavigate(event, item)}
        >
          <SwitcherIcon icon={item.icon} />
          <span>{item.label}</span>
        </a>
      ))}
    </nav>
  )
}
