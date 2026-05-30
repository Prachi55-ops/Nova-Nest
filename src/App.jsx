import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import './footer.css';
import Navbar from './components/Navbar';
import './navbar.css';
import Language from './components/Language'
import './language.css';
const App = () => {
  return (
    <div >
      <Language />
      <Navbar />
      <Footer />

    </div>
  )
}

export default App
