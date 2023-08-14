import './Error.css'
import '../Nav/Nav.css'
import {NavLink} from 'react-router-dom'

const Error = ({error}) => {
  return (
    <main className='main-error'>
      <div className='error-container'>
        <h2 className='error-message'>🤕  Uh-oh... There's been an error  🤕</h2>
        <NavLink to='/' className='nav-button' id='error-home-button'>😄 go home</NavLink>
      </div>
    </main>
    )
}

export default Error