import { Heart, MessageCircle, UserPlus, Users } from 'lucide-react'
import React from 'react'
import { cn } from '../../../../common/utilities/cn'

const StatsOverviewData: StatsType[] = [
  { title: "Followers", count: "592k", icon: Users },
  { title: "Following", count: "3.5k", icon: UserPlus },
  { title: "Comments", count: "2.9k", icon: MessageCircle },
  { title: "Likes", count: "9.5k", icon: Heart },
]

const StatsOverview = ({ className }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn('flex gap-6 items-center', className)}>
      {StatsOverviewData.map(item => (
        <StatsItem title={item.title} count={item.count} icon={item.icon} />
      ))}
    </div>
  )
}

export default StatsOverview

type StatsType = {
  title: string;
  count: string;
  icon: React.ElementType
}

const StatsItem = ({ ...props }: StatsType) => {
  const Icon = props.icon
  return (
    <div className="flex bg-surface rounded-2xl   p-4 w-45 justify-between items-start shadow-[0_2px_40px_rgba(0,0,0,0.1)]">
      <div className='flex flex-col'>
        <span>{props.title}</span>
        <span className='text-2xl font-bold'>{props.count}</span>
      </div>

      <Icon className='w-5 h-5' />
    </div>
  )
}