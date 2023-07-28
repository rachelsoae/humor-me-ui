import './App.css';
import { Routes, Route } from 'react-router-dom'
import Favorites from '../Favorites/Favorites.js'
import Form from '../Form/Form.js'
import Home from '../Home/Home.js'
import Nav from '../Nav/Nav.js'
import Poster from '../Poster/Poster.js'
import {useState, useEffect } from 'react'
import { getData, postFavorite } from '../apiCalls'

const App = () => {
  const [quotes, setQuotes] = useState([]);
  const [images, setImages] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [poster, setPoster] = useState({});
  const [fontSize, setFontSize] = useState('');

  useEffect(() => {
    getData('quotes')
    .then(response => setQuotes(response.quotes))
    .catch(error => alert(error.message))

    getData('images')
    .then(response => setImages(response))
    .catch(error => alert(error.message))

    getData('posters')
    .then(response => setFavorites(response))
    .catch(error => alert(error.message))
  }, [])


  const filterQuotes = (type) => {
    return quotes.filter(quote => quote.type === type)
  }
  
  const getRandom = (array) => {
    const index = Math.floor(Math.random() * array.length)
    return array[index]
  }

  const randomizePoster = (type) => {
    const quote = getRandom(filterQuotes(type)).quote
    const image = getRandom(images).image_src
    
    setPoster({
      quote: quote,
      type: type,
      src: image
    })
  }

  const changeFontSize = (component) => {
    setFontSize(component === 'poster' ? '2.5em' : '1em')
  }

  const saveFavorite = () => {
    postFavorite(poster)
    .then(response => setFavorites(prevState => [...prevState, response.poster]))
    .catch(error => alert(error.message))
  }

  return (
    <div className='app'> 
      <Nav changeFontSize={changeFontSize} />
      <Routes>
        <Route path='/' element={<Home randomizePoster={randomizePoster} changeFontSize={changeFontSize} />}/>
        <Route path='/favorites' element={<Favorites favorites={favorites} />}/>
        <Route path='/create' element={<Form setPoster={setPoster} />}/>
        <Route path='/:type' element={<Poster poster={poster} font={fontSize} saveFavorite={saveFavorite} randomizePoster={randomizePoster} />}/>
      </Routes>
    </div>
  )
}

export default App;
