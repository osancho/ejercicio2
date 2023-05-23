import { TeamListItem } from '../components/TeamListItem'
import { useFetchTeams } from '../hooks/useFetchTeams'

export const Classification = () => {
  const { teams, loading, error } = useFetchTeams()

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      <div className='teams'>
        {teams.map((team, index) => (
          <TeamListItem key={index} team={team} />
        ))}
      </div>
    </>
  )
}
