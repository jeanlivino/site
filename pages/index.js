import React, { Fragment, createContext } from 'react'
import '../static/css/style.css'
import Head from '../components/Head'
import Header from '../components/Header'
import "isomorphic-fetch"

const Home = () => (
  <Fragment>
    <Head title="Home" />
    <Header />
  </Fragment>
)

export default Home
