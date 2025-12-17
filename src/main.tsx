import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Dashboard from './pages/Dashboard/Dashboard.tsx'
import Calendar from './pages/Calendar/Calendar.tsx'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Dashboard />} />
          <Route path='calendar' element={<Calendar />} />
          <Route path='wallet' element={<Calendar />} />
          <Route path='chat' element={<Calendar />} />
          <Route path='posts' element={<Calendar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
