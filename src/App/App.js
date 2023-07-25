import './App.css';
import { Routes, Route } from 'react-router-dom'
import Favorites from '../Favorites/Favorites.js'
import Form from '../Form/Form.js'
import Home from '../Home/Home.js'
import Nav from '../Nav/Nav.js'
import Poster from '../Poster/Poster.js'

const App = () => {

  //when a random button is clicked:
    //fetch all the quotes
      //filter through them to sort by type
      //select a random quote from the filtered array
    //fetch all the images
      //select random image
    //go to the route - 'random-quote:quote-type' which displays the poster component with a dynamic background color and the poster with the image, quote, and fav button

  return (
    <div className='app'> 
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/favorites' element={<Favorites />}/>
        <Route path='/create' element={<Form />}/>
        <Route path='/poster/:type' element={<Poster />}/>
      </Routes>
    </div>
  )
}

export default App;
