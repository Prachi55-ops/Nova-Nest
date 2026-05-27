import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import './footer.css';
import Navbar from './components/Navbar';
import './navbar.css';
const App = () => {
  return (
    <div >
      <Routes>
        {/* <Route path='/' element={<Footer/>}/> */}
        <Route path='/' element={<Navbar/>}/>
      </Routes>
    </div>
  )
}

export default App
