import type { HTMLAttributes } from 'react'
import ActivityFeed from './ActivityFeed/ActivityFeed'
import UserControls from './UserControls/UserControls'
import { cn } from '../../common/utilities/cn'

const SecondarySidebar = ({ className }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "w-80 h-[calc(100vh-var(--padding-layout)*2)] sticky top-(--padding-layout)",
        className
      )}
    >
      <UserControls />
      <ActivityFeed />
    </div>
  )
}

export default SecondarySidebar
