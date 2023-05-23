import { useLocation } from 'react-router-dom'
import { Players } from './Players'

export const TeamDetails = () => {
  const location = useLocation()
  const { team } = location.state

  return (
    <div className='teaminfo'>
      <h2>{team.team_name}</h2>
      <img src={team.team_badge} alt={team.team_name} />
      <Players players={team.players} />
    </div>
  )
}
