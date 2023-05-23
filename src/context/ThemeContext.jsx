import React, { useEffect } from 'react'

export const ThemeContext = React.createContext()

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = React.useState(() => {
    const storedTheme = window.localStorage.getItem('isDarkMode')
    return storedTheme ? JSON.parse(storedTheme) : false
  })

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  useEffect(() => {
    window.localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode))
  }, [isDarkMode])

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
