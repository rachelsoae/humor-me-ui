import './Favorites.css';
import Card from '../Card/Card.js'
import { mockPosters } from '../mockData'

const Favorites = () => {
  const favorites = mockPosters.posters.map(poster => <Card image={poster.src} quote={poster.quote.text} type={poster.quote.type} key={poster.id} />)
  
  return (
    <main id='fav-page'>
      {favorites}
    </main>
  )
}

export default Favorites;