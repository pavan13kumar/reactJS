import React from 'react'
import { Link} from 'react-router-dom'
import { NavLink } from 'react-router-dom'


//CASE 1: using the Links
// const Navbar = () => {
//   return (
//     <nav>
//       <Link to='/'>Home</Link>
//       <Link to='/about'>About</Link>
//     </nav>
//   )  
// }

//CASE 2: using the NavLinks(generates the class Active) linked with the css file
const Navbar = () => {
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/OrderSummary'>  OrderSummary</NavLink>
     
    </nav>
  )  
}


// CASE 3: using the NavLink (active link by manually programming)
// const Navbar = () => {

//     const NavLinkStyle = ({isActive}) => {
      
//       return{
//         fontWeight:isActive ? 'bold' :'normal',
//         textDecoration : isActive? 'none': 'underline',
//         color : isActive? 'darkblue': 'none',
//       }
//     }

//   return (
//     <nav>
//       <NavLink style={NavLinkStyle} to='/'>Home</NavLink>
//       <NavLink style={NavLinkStyle} to='/about'>About</NavLink>
//     </nav>
//   )  
// }

export default Navbar

// By changing the Link tag to NavLink we can make the class="active" so that the Home and About become Highlight