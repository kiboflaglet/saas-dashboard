import React from 'react'
import StatsOverview from './StatsOverview'
import Statistics from './Statistics'

const PageContent = () => {
  return (
    <div>
        <StatsOverview className='mt-6' />
        <Statistics className='mt-6' />
    </div>
  )
}

export default PageContent
