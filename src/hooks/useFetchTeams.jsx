import { useState, useEffect } from 'react'
import { getTeams } from '../services/teams'

export const useFetchTeams = () => {
  const [teams, setTeams] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchTeams = async () => {
    try {
      const teams = await getTeams()
      console.log(teams)
      if (teams.error) setError('No se encontraron equipos')
      setTeams(teams)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTeams()
  }, [])

  return { teams, loading, error }
}
