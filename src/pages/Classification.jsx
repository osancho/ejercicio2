import { TeamListItem } from '../components/TeamListItem'
import { useFetchTeams } from '../hooks/useFetchTeams'

export const Classification = () => {
  const { teams, loading, error } = useFetchTeams()

  return (
    <>
      {loading && <p style={{ textAlign: 'center' }}>Loading...</p>}
      {error
        ? <p style={{ textAlign: 'center' }}>Ups algo fue mal</p>
        : (
          <div className='teams'>
            {teams?.map((team, index) => (
              <TeamListItem key={index} team={team} />
            ))}
          </div>
          )}
    </>
  )
}
