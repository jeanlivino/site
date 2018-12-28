import React from 'react'
import PropTypes from 'prop-types'
import style from './nav.module.css'
import NavItem from '../NavItem'

const Nav = ({ items }) => (
  <nav className={style.navigation}>
    <ul className={style.menu}>
      {items.map((item) => (
        <NavItem anchor={ item.anchor } name={ item.name } key={ item.id } />
      ))
      }
    </ul>
  </nav>
)

Nav.propTypes = {
  items: PropTypes.array.isRequired
}

export default Nav
