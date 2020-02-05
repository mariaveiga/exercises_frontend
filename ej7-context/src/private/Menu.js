import React from 'react'
import { NavLink } from 'react-router-dom'
import './Menu.css'

const Menu = () => {
  return (
    <aside>
      Menu:
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" activeClassName="active">
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" activeClassName="active">
            Products
          </NavLink>
        </li>
      </ul>
    </aside>
  )
}

export default Menu
