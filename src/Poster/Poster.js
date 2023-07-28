import './Poster.css';
import Card from '../Card/Card'


const Poster = ({poster, font, saveFavorite, randomizePoster}) => {
  return (
    <main className={`poster poster-${poster.type}`}>
      <div className='poster-container'>
        <Card image={poster.src} quote={poster.quote} type={poster.type} font={font} />
      </div> 
      <div className='poster-buttons'>
        <button className='poster-button' onClick={saveFavorite}>💛 save to favorites</button>
        <button className='poster-button' onClick={() => randomizePoster('wholesome')}>🥹 random wholesome</button>
        <button className='poster-button' onClick={() => randomizePoster('chaotic')}>😈 random chaotic</button>
      </div>
    </main>
  )
}

export default Poster;