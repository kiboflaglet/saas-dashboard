import { Outlet } from 'react-router'
import PrimarySidebar from './pages/PrimarySidebar/PrimarySidebar'
import SecondarySidebar from './pages/SecondarySidebar/SecondarySidebar'

function App() {

  return (
    <div className="flex gap-6 justify-between">
      <PrimarySidebar className='sticky top-(--padding-layout) shrink-0' />
      <div className="flex-1 min-w-0">
        <Outlet />
      </div>
      <SecondarySidebar className='sticky top-(--padding-layout) ' />
    </div>
  )
}

export default App
