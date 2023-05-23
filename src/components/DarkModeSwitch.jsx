import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export const DarkModeSwitch = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext)

  return (
    <div className='darkmodecontainer'>
      <button onClick={toggleTheme} className='darkmode' style={{ backgroundColor: isDarkMode ? '#1c1c1c' : '#f5f5f5' }}>
        {isDarkMode ? '☀️' : '🌙'}
      </button>
    </div>
  )
}
