import React, { useState } from 'react'
import User from '../assets/user-128.png'

export const PlayerImage = ({ player }) => {
  const [imgSrc, setImgSrc] = useState(player.player_image)

  const handleError = () => {
    setImgSrc(User)
  }

  return (
    <img
      src={imgSrc}
      alt={player.player_name}
      onError={handleError}
    />
  )
}
