import React from 'react'
import Link from 'next/link'

const Nav = (props) => (
  <nav>
    <ul>
        { props.children }
    </ul>
  </nav>
)

export default Nav
