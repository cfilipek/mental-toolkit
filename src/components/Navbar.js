import React from 'react'
import {NavLink} from 'react-router-dom'

//fixed navbar
//hover border-bottom 2px solid white


const Navbar = () => {
  return (
    <div>
      <div>Logo</div>
      <nav>
        <ul>
          <li>
           <NavLink to='/'>Children</NavLink>
          </li>
          <li>
          <NavLink to='/todos'>Children</NavLink>
          </li>
          <li>
          <NavLink to='/login'>Children</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
