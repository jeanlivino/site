import React from 'react'
import Link from 'next/link'

const Nav = () => (
  <nav>
    <ul>
      <li className='row'>
        <Link prefetch href="/">
          <a>Home</a>
        </Link>
      </li>
        <li className='row'>
            <Link prefetch href="/">
                <a>Quem Somos</a>
            </Link>
        </li>
        <li className='row'>
            <Link prefetch href="/">
                <a>Palestrantes</a>
            </Link>
        </li>
        <li className='row'>
            <Link prefetch href="/">
                <a>Local</a>
            </Link>
        </li>
    </ul>


  </nav>
)

export default Nav
