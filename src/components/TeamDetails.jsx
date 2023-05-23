import { useLocation } from 'react-router-dom'

export const TeamDetails = () => {
  const location = useLocation()
  const { team } = location.state

  return (
    <div>
      <h2>{team.team_name}</h2>
      <img src={team.team_badge} alt={team.team_name} />
    </div>
  )
}
