import './Favorites.css';
import Card from '../Card/Card.js'

const Favorites = ({favorites}) => {
  const cards = favorites.map(favorite => <Card key={favorite.id} image={favorite.src} quote={favorite.quote} type={favorite.type} font='1.3em'/>)
  
  return (
    <main id='fav-page'>
      {cards ? cards : (<h2 className='error-no-favorites'>You haven't saved any favorites yet!</h2>)}
    </main>
  )
}

export default Favorites;