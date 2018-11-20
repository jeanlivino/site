import React, { Fragment } from 'react'
import '../static/css/style.css'
import Head from '../components/Head'
import Header from '../components/Header'
import "isomorphic-fetch"

const Home = ({ menuItems }) => (

  <Fragment>
    <Head title="Home" />
    <Header />
    { console.log(menuItems) }
  </Fragment>
  
)

Home.getInitialProps = async ({ req }) => {
  const res = await fetch('http://localhost:3000/static/json/nav.json')
  const json = await res.json()
  return { menuItems: json }
}

export default Home
