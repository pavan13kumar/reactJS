import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='primary'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/products'>Products</NavLink>
      <NavLink to='/profile'>Profile</NavLink>
      <NavLink to='/user'>User</NavLink>
      <button className='search' type='Search'> Search</button>
 
    </nav>
  )
}

export default Navbar
