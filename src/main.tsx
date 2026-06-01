import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import Index from './pages/index'
import Contact from './pages/contact'
import NotFound from './pages/not-found'
import './styles.css'

function App() {
  const [currentPage, setCurrentPage] = useState<'/' | '/contact' | '404'>('/')

  const handleNavigate = (page: '/' | '/contact') => {
    setCurrentPage(page)
    window.history.pushState({}, '', page)
  }

  useEffect(() => {
    const handlePopState = () => {
      const pathname = window.location.pathname
      if (pathname === '/contact') {
        setCurrentPage('/contact')
      } else if (pathname === '/') {
        setCurrentPage('/')
      } else {
        setCurrentPage('404')
      }
    }

    window.addEventListener('popstate', handlePopState)

    // Set initial page based on current URL
    const pathname = window.location.pathname
    if (pathname === '/contact') {
      setCurrentPage('/contact')
    } else if (pathname === '/') {
      setCurrentPage('/')
    } else {
      setCurrentPage('404')
    }

    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  return (
    <>
      {currentPage === '/' && <Index onNavigate={handleNavigate} />}
      {currentPage === '/contact' && <Contact onNavigate={handleNavigate} />}
      {currentPage === '404' && <NotFound onNavigate={handleNavigate} />}
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
