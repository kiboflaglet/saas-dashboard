import { Outlet } from 'react-router'
import PrimarySidebar from './pages/PrimarySidebar/PrimarySidebar'
import SecondarySidebar from './pages/SecondarySidebar/SecondarySidebar'

function App() {

  return (
    <div className="flex gap-6">
      <PrimarySidebar className='sticky top-(--padding-layout)' />
      <div className="flex-1">
        <Outlet />
      </div>
      <SecondarySidebar className='sticky top-(--padding-layout)' />
    </div>
  )
}

export default App
