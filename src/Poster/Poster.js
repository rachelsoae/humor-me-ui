import './Poster.css';
import Card from '../Card/Card'
import { NavLink } from 'react-router-dom'
// import { useState } from 'react'

const Poster = ({poster, font, saveFavorite, randomizePoster, isFavorite}) => {
  return (
    <main className={`poster poster-${poster.type}`}>
      <div className='poster-container'>
        <Card image={poster.image} quote={poster.quote} type={poster.type} font={font} />
      </div> 
      <div className='poster-buttons'>
        <NavLink className='poster-button' to="/poster/wholesome" onClick={() => randomizePoster('wholesome')}>🥹 random wholesome</NavLink>
        <NavLink className='poster-button' to="/poster/chaotic" onClick={() => randomizePoster('chaotic')}>😈 random chaotic</NavLink>
        {isFavorite ? <p className='poster-button saved'>Saved!</p> : <button className='poster-button' onClick={saveFavorite}>💛 save to favorites</button>}
      </div>
    </main>
  )
}

export default Poster;