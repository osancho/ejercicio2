import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Classification } from './pages/Classification'
import { Team } from './pages/Team'
import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Classification />} />
        <Route path='/team/:teamKey' element={<Team />} />
      </Routes>
    </Router>
  )
}

export default App
