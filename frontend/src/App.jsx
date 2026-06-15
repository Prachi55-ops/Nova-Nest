import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import './pages/Home/Home.css'
import Signup from './pages/Signup/Signup'
import './pages/Signup/Signup.css'
import Login from './pages/Login/Login'
import './pages/Login/Login.css'
import About from './pages/About/About'
import './pages/About/About.css'
import Contact from './pages/Contact/Contact'
import './pages/Contact/Contact.css'
import Error from './pages/404 error/Error'
import './pages/404 error/Error.css'
const App = () => {
  return (
    <>
     
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route  path='/Login' element={<Login/>}/>
       <Route path='/About' element={<About/>}/>
       <Route path='/Contact' element={<Contact/>}/>
       <Route path='/Error' element={<Error/>}/>
      </Routes>

    </>
  )
}

export default App
