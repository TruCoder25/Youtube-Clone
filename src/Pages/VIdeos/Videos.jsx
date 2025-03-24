import React from 'react'
import './Videos.css'
import Playvideo from '../../Components/PlayVideo/Playvideo'
import Recommend from '../../Components/Recommend/Recommend'

const Videos = () => {
  return (
    <div className='play-container'>
      <Playvideo/>
      <Recommend/>
    </div>
  )
}

export default Videos