import MainArea from './components/MainArea/MainArea'
import PrimarySidebar from './components/PrimarySidebar/PrimarySidebar'
import SecondarySidebar from './components/SecondarySidebar/SecondarySidebar'

function App() {

  return (
    <div className="flex gap-6">
      <PrimarySidebar />
      <MainArea className='flex-1' />
      <SecondarySidebar />
    </div>
  )
}

export default App
