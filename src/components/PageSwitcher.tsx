import type { MouseEvent } from 'react'

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
      <path d="M4.5 19.5h15" />
      <path d="M7.25 16.75h9.5" />
      <path d="M8.5 5.25h7l2 4.5-2.25 4.25h-6.5L6.5 9.75l2-4.5Z" />
      <path d="M10 8.25h4" />
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
