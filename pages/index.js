import React, { Fragment } from 'react'
import '../static/css/style.css'
import Head from '../components/Head'
import Header from '../components/Header'
import Toast from '../components/Toast'
import About from '../components/About'
import Speakers from '../components/Speakers'
import Sponsors from '../components/Sponsors'
import Footer from '../components/Footer'

const Home = () => (
  <Fragment>
    <Head title="Home" />
    <Toast />
    <Header />
    <About />
    <Speakers />
    <Sponsors />
    <Footer />
  </Fragment>
)

export default Home
