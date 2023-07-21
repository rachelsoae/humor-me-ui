import './Home.css';
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home-page'>
      <article className='selector' id='wholesome-block'>
        <h3>wholesome quote generator</h3>
        <p className='selector-icon'>🥹</p>
        <NavLink to='/'>click here!</NavLink>
      </article>
    </div>
  )
}

export default Home;