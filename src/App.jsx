import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import './footer.css';
import Navbar from './components/Navbar/Navbar';
import './navbar.css';
import Topbar from './components/Topbar/Topbar'
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
