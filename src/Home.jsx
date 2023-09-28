import React from 'react'
import About from './components/About'
import Storages from './components/Storages'
import Products from './components/Products'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

function Home() {
  return (
    <div>
        <About/>
        <Storages/>
        <Products/>
        <Services/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home