import Audience from './Audience/Audience'
import Posts from './Posts/Posts'
import Statistics from './Statistics/Statistics'
import StatsOverview from './StatsOverview/StatsOverview'

const PageContent = () => {
  return (
    <div>
      <StatsOverview className='mt-6' />
      <Statistics className='mt-6' />
      <div className="mt-6 flex gap-4 items-start">
        <Posts className='flex-1' />
        <Audience className='flex-1' />
      </div>
    </div>
  )
}

export default PageContent
