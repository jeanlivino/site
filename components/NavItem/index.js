import React from 'react'
import Link from 'next/link'

const NavItem = ({ anchor, name }) => (
    <Link to={anchor}>
        <span>{name}</span>
    </Link>
)

export default NavItem