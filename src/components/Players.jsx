import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export const Players = ({ players }) => {
  const playersShort = players.sort((a, b) => a.player_age - b.player_age)
  const { isDarkMode } = useContext(ThemeContext)

  console.log(isDarkMode)
  return (
    <div className='players'>
      <h3>Jugadores</h3>
      <div className='playerlist-head'>
        <h5>Imagen</h5>
        <h5>Nombre</h5>
        <h5>Edad</h5>
        <h5>Posición</h5>
        <h5>Partidos jugados</h5>
      </div>
      {playersShort.map((player, index) => (
        <div
          key={player.player_id}
          className='playerlist'
          style={{ backgroundColor: index % 2 === 0 ? isDarkMode ? '#1c1c1c' : '#f5f5f5' : isDarkMode ? '#000' : '#fff' }}
        >

          <div><img src={player.player_image} alt={`Imagen de ${player.player_name}`} /></div>
          <div>{player.player_name}</div>
          <div>{player.player_age}</div>
          <div>{player.player_type}</div>
          <div>{player.player_match_played}</div>
        </div>
      ))}
    </div>
  )
}
