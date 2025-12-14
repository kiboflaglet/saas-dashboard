import ActivityFeed from './ActivityFeed/ActivityFeed'
import UserControls from './UserControls/UserControls'

const SecondarySidebar = () => {
  return (
    <div className='w-80'>
      <UserControls />
      <ActivityFeed />
    </div>
  )
}

export default SecondarySidebar
