import React from 'react'
import style from './header.module.css'
import commonStyles from '../../static/css/style.css'
import Nav from '../Nav'
import navigation from '../../json/nav.json'

const Header = () => (
    <header className={ style.header }>
        <div className={ commonStyles.container }>
            <Nav items={ navigation } />
        </div>
    </header>
)

export default Header