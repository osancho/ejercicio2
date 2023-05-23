import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Classification } from './pages/Classification'
import { Team } from './pages/Team'
import './App.css'
import { DarkModeSwitch } from './components/DarkModeSwitch'
import { ThemeContext } from './context/ThemeContext'
import { useContext, useEffect } from 'react'

const App = () => {
  const { isDarkMode } = useContext(ThemeContext)

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-theme' : 'light-theme'
  }, [isDarkMode])

  return (
    <Router>
      <DarkModeSwitch />
      <Routes>
        <Route path='/' element={<Classification />} />
        <Route path='/team/:teamKey' element={<Team />} />
      </Routes>
    </Router>
  )
}

export default App
