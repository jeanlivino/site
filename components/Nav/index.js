import React from 'react'
import PropTypes from 'prop-types'
import style from './nav.module.css'

const Nav = ({ items }) => (
  <nav className={style.navigation}>
    <ul className={style.menu}>
      {items.map((item) => (
        <li className={style.menu__item} key={item.name}>
          <a href={item.anchor}>
          {item.name}
          </a>
        </li>
      ))
      }
    </ul>
  </nav>
)

Nav.propTypes = {
  items: PropTypes.array.isRequired
}

export default Nav
