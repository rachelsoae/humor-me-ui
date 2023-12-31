import './Favorites.css';
import Card from '../Card/Card.js'
import PropTypes from 'prop-types'

const Favorites = ({favorites}) => {
  const cards = favorites.map(favorite => <Card key={favorite.id} image={favorite.image} quote={favorite.quote} type={favorite.type} font='1.3em'/>)
  
  return (
    <main className='fav-page'>
      {cards.length > 0 ? (<div className='cards-grid'>{cards}</div>) : (
        <div className='error-container no-favorites'>
          <h2 className='error-message'>💛 You haven't saved any favorites yet! 💛</h2>
        </div> 
        )}
    </main>
  )
}

export default Favorites;

Favorites.propTypes = {
  favorites: PropTypes.array.isRequired
}