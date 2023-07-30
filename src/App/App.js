import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom'
import Favorites from '../Favorites/Favorites.js'
import Form from '../Form/Form.js'
import Home from '../Home/Home.js'
import Nav from '../Nav/Nav.js'
import Poster from '../Poster/Poster.js'
import Error from '../Error/Error.js'
import {useState, useEffect } from 'react'
import { getData, postFavorite } from '../apiCalls'

const App = () => {
  const [quotes, setQuotes] = useState([]);
  const [images, setImages] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [poster, setPoster] = useState({});
  const [fontSize, setFontSize] = useState('');
  const [error, setError] = useState('');
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    getData('quotes')
    .then(response => setQuotes(response.quotes))
    .catch(error => setError(error.message))

    getData('images')
    .then(response => setImages(response))
    .catch(error => setError(error.message))

    getData('posters')
    .then(response => setFavorites(response))
    .catch(error => setError(error.message))
  }, [])

  const saveFavorite = () => {
    setIsFavorite(true)
    postFavorite(poster)
    .then(response => setFavorites(prevState => [...prevState, response.poster]))
    .catch(error => setError(error.message))
  }

  const filterQuotes = (type) => {
    return quotes.filter(quote => quote.type === type)
  }
  
  const getRandom = (array) => {
    const index = Math.floor(Math.random() * array.length)
    return array[index]
  }

  const randomizePoster = (type) => {
    const quote = getRandom(filterQuotes(type)).quote
    const image = getRandom(images).image
    setPoster({
      quote: quote,
      type: type,
      image: image
    })

    setIsFavorite(false)
  }

  const changeFontSize = (component) => {
    setFontSize(component === 'poster' ? '2.5em' : '1em')
  }

  return (
    <div className='app'> 
      <Nav changeFontSize={changeFontSize} />
      {error && <Navigate to='/error' />}
      <Routes>
        <Route path='/' element={<Home randomizePoster={randomizePoster} changeFontSize={changeFontSize} />}/>
        <Route path='/error' element={<Error error={error} />} />
        <Route path='/favorites' element={<Favorites favorites={favorites} />}/>
        <Route path='/create' element={<Form setPoster={setPoster} />}/>
        <Route 
          path='/poster/:type' 
          element={<Poster 
            poster={poster} 
            font={fontSize} 
            saveFavorite={saveFavorite} 
            randomizePoster={randomizePoster}  
            isFavorite={isFavorite} 
            />}/>
        <Route path='*' element={<Error error={error} />} />
      </Routes>
    </div>
  )
}

export default App;
