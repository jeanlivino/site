import React from 'react'
import Link from 'next/link'
import Head from '../components/Head'
import Nav from '../components/Nav'
import About from '../components/About'
import '../static/sass/style.scss'

const Home = () => (
  <div>
    <Head title="Home" />
    <Nav />
    <About />
  </div>
)

export default Home
