import { useNavigate } from 'react-router-dom'

export const TeamListItem = ({ team }) => {
  const navigate = useNavigate()

  const handleOnClick = () => {
    navigate(`/team/${team.team_key}`, { state: { team } })
  }

  return (
    <div
      onClick={handleOnClick}
      className='teamCard'
    >
      <img src={team.team_badge} alt={team.team_name} />
      <h2>{team.team_name}</h2>
      {team.coaches.length > 0 && <p>{team.coaches[0].coach_name}</p>}
    </div>
  )
}
