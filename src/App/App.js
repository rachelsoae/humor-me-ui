import './App.css';
import { Routes, Route } from 'react-router-dom'
import Favorites from '../Favorites/Favorites.js'
import Form from '../Form/Form.js'
import Home from '../Home/Home.js'
import Nav from '../Nav/Nav.js'
import Poster from '../Poster/Poster.js'
import { mockQuotes, mockImages, mockPosters } from '../mockData'
import {useState} from 'react'

const App = () => {

  const filterQuotes = (type) => {
    return mockQuotes.quotes.filter(quote => quote.type === type)
  }
  
  const getRandom = (array) => {
    const index = Math.floor(Math.random() * array.length)
    return array[index]
  }

  const [poster, setPoster] = useState({});

  const randomizePoster = (type) => {
    const quote = getRandom(filterQuotes(type)).quote
    const image = getRandom(mockImages.images).src
    
    setPoster({
      quote: quote,
      image: image,
      type: type
    })
  }

  const [fontSize, setFontSize] = useState('');

  const changeFontSize = (param) => {
    setFontSize(param === 'poster' ? '2.5em' : '1em')
  }

  const saveFavorite = () => {
    // delete this function when refactoring for POST - this simulates data processing that is done on the server
    const formatData = (data) => {
      console.log('data', data)
      return {
        "id": Date.now(),
        "quote": {
          "text": `${data.quote}`,
          "type": `${data.type}`
        },
        "src": `${data.image}`
      }
    }
  
    // replace with POST
    const favorite = formatData(poster);
    mockPosters.posters.push(favorite);
    return favorite;
  }

    //fetch all the quotes
      //filter through them to sort by type
      //select a random quote from the filtered array
    //fetch all the images
      //select random image
    //go to the route - 'random-quote:quote-type' which displays the poster component with a dynamic background color and the poster with the image, quote, and fav button

  return (
    <div className='app'> 
      <Nav changeFontSize={changeFontSize} />
      <Routes>
        <Route path='/' element={<Home randomizePoster={randomizePoster} changeFontSize={changeFontSize} />}/>
        <Route path='/favorites' element={<Favorites />}/>
        <Route path='/create' element={<Form setPoster={setPoster} />}/>
        <Route path='/:type' element={<Poster poster={poster} font={fontSize} saveFavorite={saveFavorite} randomizePoster={randomizePoster} />}/>
      </Routes>
    </div>
  )
}

export default App;
