import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import './footer.css';
import Navbar from './components/Navbar';
import './navbar.css';
import Topbar from './components/Topbar'
import './topbar.css';
const App = () => {
  return (
    <>
      <Topbar/>
      <Navbar />
      <Footer />

    </>
  )
}

export default App
