import './Home.css';
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const Home = ({randomizePoster, changeFontSize}) => {
  const setupPoster = (e) =>{
    randomizePoster(e.target.id)
    changeFontSize('poster')
  }
  
  return (
    <main className='home-page'>
      <article className='selector' id='wholesome-block'>
        <h3 className='type-title'>wholesome quote generator</h3>
        <p className='selector-icon'>🥹</p>
        <NavLink 
          to='/poster/wholesome' 
          className='generate-link button-link' 
          id='wholesome'
          onClick={setupPoster}
        >
          click here!
        </NavLink>
      </article>
      <article className='selector' id='chaotic-block'>
        <h3 className='type-title'>chaotic quote generator</h3>
        <p className='selector-icon'>😈</p>
        <NavLink 
          to='/poster/chaotic' 
          className='generate-link button-link' 
          id='chaotic'
          onClick={setupPoster}
        >
          click here!
        </NavLink>
      </article>
    </main>
  )
}

export default Home;

Home.propTypes = {
  randomizePoster: PropTypes.func.isRequired,
  changeFontSize: PropTypes.func.isRequired
};