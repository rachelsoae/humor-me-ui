import './Nav.css';
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <h1>humor me</h1>
      <NavLink to='/'>generate</NavLink>
      <NavLink to='/favorites'>favorites</NavLink>
      <NavLink to='/create'>create</NavLink>
    </>
  )
}

export default Nav;