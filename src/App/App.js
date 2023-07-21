import './App.css';
import { Routes, Route } from 'react-router-dom'
import {Helmet} from "react-helmet"
import Favorites from '../Favorites/Favorites.js'
import Form from '../Form/Form.js'
import Home from '../Home/Home.js'
import Nav from '../Nav/Nav.js'

const App = () => {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap"
          rel="stylesheet"
        />
      </Helmet>
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
