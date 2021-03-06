import React from "react";
import commonStyles from '../../static/css/style.css'
import style from './about.module.css'

const About = () => (
  <section id="about" className={style.about}>
    <div className={commonStyles.container}>
      <h1 className="title">O Que é o Front-end CE</h1>
      <p className="description">
        Será um meio de levar conhecimento aos iniciantes e trazer motivação aos profissionais que precisam.

        Nosso intuito é não ficar só na capital e região metropolitana. A comunidade será do estado do Ceará e para todo este.
        Queremos levar os eventos para todos os municípios do estado. Acreditamos que o desenvolvimento Front-End pode ser uma grande ferramenta de transformação social.
        E nós, como comunidade, temos que disseminar esse conhecimento para quem tiver interesse de aprender.
      </p>

      <p>Se você é desenvolvedor front-end, professor, carpinteiro, eletricista... Seja lá o que você for,
        mas tem interesse em imergir no mundo do desenvolvimento web, chega junto!</p>
      <div className="row">

      </div>
      </div>
  </section>
)

export default About
