import MainArea from './components/MainArea/MainArea'
import PrimarySidebar from './components/PrimarySidebar/PrimarySidebar'
import SecondarySidebar from './components/SecondarySidebar/SecondarySidebar'

function App() {

  return (
    <div className="flex gap-6">
      <PrimarySidebar className='sticky top-(--padding-layout)' />
      <MainArea className='flex-1' />
      <SecondarySidebar className='sticky top-(--padding-layout)'  />
    </div>
  )
}

export default App
