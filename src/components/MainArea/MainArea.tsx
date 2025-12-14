import React from 'react'
import TopNavigation from './TopNavigation'
import { cn } from '../../common/utilities/cn'
import PageContent from './PageContent/PageContent'

const MainArea = ({ className }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
   <div className={cn("w-full", className)}>
      <TopNavigation />
      <PageContent />
    </div>
  )
}

export default MainArea
