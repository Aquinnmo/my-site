import type { FoundryAction } from '../../foundry/foundryContent'
import './FoundryActionLink.css'
import '../_shared/actions.css'

export function FoundryActionLink({ action }: { action: FoundryAction }) {
  const actionClass =
    action.variant === 'primary' ? 'hero-action hero-action-primary' : 'hero-action hero-action-secondary'

  return (
    <a className={`${actionClass} foundry-route-cta`} href={action.href}>
      {action.label}
    </a>
  )
}
