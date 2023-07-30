import './Poster.css';
import Card from '../Card/Card'
import PropTypes from 'prop-types'
import Home from '../Home/Home'
import { NavLink } from 'react-router-dom'

const Poster = ({poster, font, saveFavorite, randomizePoster, isFavorite}) => {

  return (
    <main className={`poster poster-${poster.type}`}>
      {poster.type       
      ? <>
        <div className='poster-container'>
          <Card image={poster.image} quote={poster.quote} type={poster.type} font={font} />
        </div> 
        <div className='poster-buttons'>
          <NavLink className='poster-button' to="/poster/wholesome" onClick={() => randomizePoster('wholesome')}>🥹 random wholesome</NavLink>
          <NavLink className='poster-button' to="/poster/chaotic" onClick={() => randomizePoster('chaotic')}>😈 random chaotic</NavLink>
          {isFavorite ? <p className='poster-button saved'>Saved!</p> : <button className='poster-button' onClick={saveFavorite}>💛 save to favorites</button>}
        </div> 
      </>
      : <NavLink to='/' className='poster-button'>Go Back to Generate Page</NavLink>}
    </main>
  )
}

export default Poster;

Poster.propTypes = {
  poster: PropTypes.object.isRequired,
  font: PropTypes.string.isRequired,
  saveFavorite: PropTypes.func.isRequired,
  randomizePoster: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool.isRequired
}