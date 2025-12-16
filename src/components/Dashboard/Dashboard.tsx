import React from 'react'
import TopNavigation from './TopNavigation'
import PageContent from './PageContent/PageContent'
import { cn } from '../../common/utilities/cn'

const Dashboard = ({ className }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
   <div className={cn("w-full", className)}>
      <TopNavigation />
      <PageContent />
    </div>
  )
}

export default Dashboard
