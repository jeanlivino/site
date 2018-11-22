import React, { Component } from 'react'
import commonStyles from '../../static/css/style.css'
import style from './header.module.css'
import Nav from '../Nav'
import navigation from '../../static/json/nav.json'

class Header extends Component {

    render() {
        return (
            <header className={style.header}>
                <div className={commonStyles.container}>
                    <Nav items={navigation} />
                </div>
            </header>
        )
    }
}

export default Header