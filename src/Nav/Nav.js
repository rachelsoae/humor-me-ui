import './Nav.css';
import { NavLink, Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <Link to='/'><h1 id='nav-title'>humor me</h1></Link>
      <div className='nav-buttons'>
      <NavLink to='/' className='nav-button button-link'>😄 generate</NavLink>
      <NavLink to='/favorites' className='nav-button button-link'>💛 favorites</NavLink>
      <NavLink to='/create' className='nav-button button-link'>✏️ create</NavLink>
      </div>
    </nav>
  )
}

export default Nav;