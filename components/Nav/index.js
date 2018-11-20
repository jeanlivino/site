import React from 'react'

const Nav = ({ items = stars }) => (
  <nav>
    <ul>
      { items.map((item) => {
          <li key={ item.name }>
            { item.name }
          </li>
        })
      }
    </ul>
  </nav>
)

export default Nav
