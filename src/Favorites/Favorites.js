import './Favorites.css';
import Card from '../Card/Card.js'

const Favorites = () => {

  //eventually we will bring the favorites in from the app, map through them, and then display them on the dom using the Cards component
  
  return (
    <main id='fav-page'>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </main>
  )
}

export default Favorites;