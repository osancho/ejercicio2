import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export const DarkModeSwitch = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext)

  console.log('isDarkMode', isDarkMode)

  return (
    <button onClick={toggleTheme}>
      Switch to {isDarkMode ? 'light' : 'dark'} mode
    </button>
  )
}
