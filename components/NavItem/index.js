import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const LinkStyled = styled.a`
  color: white;
  cursor: pointer;
`

const NavItem = ({ anchor, name }) => (
    <Link href={anchor}>
        <LinkStyled key={name}>
            {name}
        </LinkStyled>
    </Link>
)

export default NavItem
