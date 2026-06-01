import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import Index from './pages/index'
import Contact from './pages/contact'
import Login from './pages/login'
import Pricing from './pages/pricing'
import NotFound from './pages/not-found'
import './styles.css'

function App() {
  const [currentPage, setCurrentPage] = useState<'/' | '/contact' | '/login' | '/pricing' | '404'>('/')

  const handleNavigate = (page: '/' | '/contact' | '/login' | '/pricing') => {
    setCurrentPage(page)
    window.history.pushState({}, '', page)
  }

  useEffect(() => {
    const handlePopState = () => {
      const pathname = window.location.pathname
      if (pathname === '/contact') {
        setCurrentPage('/contact')
      } else if (pathname === '/login') {
        setCurrentPage('/login')
      } else if (pathname === '/pricing') {
        setCurrentPage('/pricing')
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
    } else if (pathname === '/login') {
      setCurrentPage('/login')
    } else if (pathname === '/pricing') {
      setCurrentPage('/pricing')
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
      {currentPage === '/login' && <Login onNavigate={handleNavigate} />}
      {currentPage === '/pricing' && <Pricing onNavigate={handleNavigate} />}
      {currentPage === '404' && <NotFound onNavigate={handleNavigate} />}
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
