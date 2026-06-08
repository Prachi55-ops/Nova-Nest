import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import './pages/Home/Home.css'
import Signup from './pages/Signup/Signup'
import './pages/Signup/Signup.css'
import Login from './pages/Login/Login'
import './pages/Login/Login.css'
const App = () => {
  return (
    <>
     
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route  path='/Login' element={<Login/>}/>
      </Routes>

    </>
  )
}

export default App
