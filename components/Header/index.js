import React, { Component } from 'react'
import style from './header.module.css'
import commonStyles from '../../static/css/style.css'

const Header = () => (
    <header className={ style.header }>
        <div className={ commonStyles.container }>
            <p>Aqui, a lista é importada.</p>
        </div>
    </header>
)

export default Header