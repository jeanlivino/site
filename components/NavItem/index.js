import React from 'react'
import Link from 'next/link'

const NavItem = ({ anchor, name }) => (
    <Link href={anchor}>
        <li key={name}>
            {name}
        </li>
    </Link>
)

export default NavItem