import React, { Component } from 'react'
import commonStyles from '../../static/css/style.css'
import style from './header.module.css'
import Nav from '../Nav'
import navigation from '../../static/json/nav.json'
import { Logo, ArrowDown } from '../Icons'

class Header extends Component {
    render() {
        return (
            <header className={style.header}>
                <div className={commonStyles.container + " " + commonStyles["container--flex"] + " " + commonStyles["container--flex--spaced"]}>
                    <Logo />
                    <Nav items={navigation} />
                </div>
                <h2 className={style.header__welcome}>Comunidade de Desenvolvedores <br /> Front-end do Estado do Ceará</h2>
                <ArrowDown />
            </header>
        )
    }
}

export default Header