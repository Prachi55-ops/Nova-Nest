import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import './footer.css';
import Navbar from './components/Navbar';
import './navbar.css';
const App = () => {
  return (
    <div >
        <Navbar/>
     <Footer/>
   
    </div>
  )
}

export default App
