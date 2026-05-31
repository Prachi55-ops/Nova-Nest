import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import './components/Footer/footer.css';
import Navbar from './components/Navbar/Navbar';
import './components/Navbar/navbar.css';
import Topbar from './components/Topbar/Topbar'
import './components/Topbar/topbar.css';
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
