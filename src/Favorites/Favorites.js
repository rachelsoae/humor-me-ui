import './Favorites.css';
import Card from '../Card/Card.js'
import { mockPosters } from '../mockData'

const Favorites = () => {
  const favorites = mockPosters.posters.map(poster => <Card key={poster.id} image={poster.src} quote={poster.quote.text} type={poster.quote.type} font='1.3em'/>)
  
  return (
    <main id='fav-page'>
      {favorites}
    </main>
  )
}

export default Favorites;