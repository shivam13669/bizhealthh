import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import Index from './pages/index'
import Contact from './pages/contact'
import './styles.css'

function App() {
  const [currentPage, setCurrentPage] = useState<'/' | '/contact'>('/')

  return (
    <>
      {currentPage === '/' && <Index onNavigate={setCurrentPage} />}
      {currentPage === '/contact' && <Contact onNavigate={setCurrentPage} />}
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
