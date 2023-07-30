import './Poster.css';
import Card from '../Card/Card'
import PropTypes from 'prop-types'

const Poster = ({poster, font, saveFavorite, randomizePoster, isFavorite}) => {
  return (
    <main className={`poster poster-${poster.type}`}>
      <div className='poster-container'>
        <Card image={poster.image} quote={poster.quote} type={poster.type} font={font} />
      </div> 
      <div className='poster-buttons'>
        <button className='poster-button' onClick={() => randomizePoster('wholesome')}>🥹 random wholesome</button>
        <button className='poster-button' onClick={() => randomizePoster('chaotic')}>😈 random chaotic</button>
        {isFavorite ? <p className='poster-button saved'>Saved!</p> : <button className='poster-button' onClick={saveFavorite}>💛 save to favorites</button>}
      </div>
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