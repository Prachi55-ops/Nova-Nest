import React from 'react'
import Topbar from '../../components/Topbar/Topbar'
import "../../components/Topbar/topbar.css"
import Navbar  from '../../components/Navbar/Navbar'
import "../../components/Navbar/navbar.css"
import Footer from '../../components/Footer/Footer'
import "../../components/Footer/footer.css"
function Home() {
  return (
    <>
    <Topbar/>
    <Navbar/>
      <div className='container'>
        <div className='row home-box '>
        
            <div className='col-sm-1'></div>
            <div className="col-sm-3 Side-bar">
                <div className='Side-bar-box'>
                    <ul>
                        <li> Women's Fashion</li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Home
