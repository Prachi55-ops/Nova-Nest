import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import './pages/Home/Home.css'
const App = () => {
  return (
    <>
     
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>

    </>
  )
}

export default App
