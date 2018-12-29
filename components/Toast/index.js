import React, { Component } from 'react'
import style from './toast.module.css'

class Toast extends Component {
    constructor() {
        super()
    
        this.state = {
            visible: false
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ visible: true })
        }, 2000)
    }

    render() {
        const { visible } = this.state

        return (
            <aside className={`${style.toast} ${visible && style.toast__appears}`}>
                ⚠️ Fique ligado(a): Dia 22 de Novembro vai rolar mais um evento nosso!
                <span className={ style.toast__close }></span>
            </aside>
        )
    }
}

export default Toast