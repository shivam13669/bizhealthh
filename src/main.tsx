import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import Index from './pages/index'
import Contact from './pages/contact'
import './styles.css'

function App() {
  const [currentPage, setCurrentPage] = useState<'/' | '/contact'>('/')

  const handleNavigate = (page: '/' | '/contact') => {
    setCurrentPage(page)
    window.history.pushState({}, '', page)
  }

  useEffect(() => {
    const handlePopState = () => {
      const pathname = window.location.pathname
      setCurrentPage((pathname === '/contact' ? '/contact' : '/') as '/' | '/contact')
    }

    window.addEventListener('popstate', handlePopState)

    // Set initial page based on current URL
    const pathname = window.location.pathname
    setCurrentPage((pathname === '/contact' ? '/contact' : '/') as '/' | '/contact')

    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  return (
    <>
      {currentPage === '/' && <Index onNavigate={handleNavigate} />}
      {currentPage === '/contact' && <Contact onNavigate={handleNavigate} />}
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
