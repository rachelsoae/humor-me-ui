import './Nav.css';
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <h1>humor me</h1>
      <div className='nav-buttons'>
      <NavLink to='/' className='nav-button'>😄 generate</NavLink>
      <NavLink to='/favorites' className='nav-button'>💛 favorites</NavLink>
      <NavLink to='/create' className='nav-button'>✏️ create</NavLink>
      </div>
    </nav>
  )
}

export default Nav;