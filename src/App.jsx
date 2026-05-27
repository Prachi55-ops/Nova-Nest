import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import './footer.css';
const App = () => {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Footer/>}/>

      </Routes>
    </div>
  )
}

export default App
