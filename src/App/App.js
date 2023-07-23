import './App.css';
import { Routes, Route } from 'react-router-dom'
import Favorites from '../Favorites/Favorites.js'
import Form from '../Form/Form.js'
import Home from '../Home/Home.js'
import Nav from '../Nav/Nav.js'

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='favorites' element={<Favorites />}/>
        <Route path='create' element={<Form />}/>
        <Route path='/wholesome-:posterid+quoteid' element={<Favorites />}/>
        <Route path='/chaotic-:posterid+quoteid' element={<Favorites />}/>
      </Routes>
    </>
  )
}

export default App;
