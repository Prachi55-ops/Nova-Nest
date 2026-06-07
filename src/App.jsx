import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import './pages/Home/Home.css'
import Signup from './pages/Signup/Signup'
import './pages/Signup/Signup.css'
const App = () => {
  return (
    <>
     
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Signup' element={<Signup/>}/>
      </Routes>

    </>
  )
}

export default App
