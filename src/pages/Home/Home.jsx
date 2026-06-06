import React from 'react'
import Topbar from '../../components/Topbar/Topbar'
import "../../components/Topbar/topbar.css"
import Navbar from '../../components/Navbar/Navbar'
import "../../components/Navbar/navbar.css"
import Footer from '../../components/Footer/Footer'
import "../../components/Footer/footer.css"
import { MdKeyboardArrowRight } from "react-icons/md";

function Home() {
  return (
    <>
      <Topbar />
      <Navbar />
      <div className='container-home'>
        <div className='row home-box '>

          <div className='col-sm-2'></div>
          <div className="col-sm-3 Side-bar">
            <div className='Side-bar-box'>
              <ul className='fashion-list'>
                <li > Women's Fashion


                </li>
                <br />
                <li> Men's Fashion</li>     <br />
                <li> Electronics</li>     <br />
                <li> Home & Lifestyle</li> <br />
                <li> Medicine</li> <br />
                <li> Sports & Outdoor</li> <br />
                <li> Baby's & Toys</li> <br />
                <li> Groceries & Pets</li> <br />
                <li> Health & beauty</li> <br />


              </ul>
            </div>
          </div>
          <div className="col-sm-5 hero-box">
            <div className='Row hero-section '>
              <div className='col-sm-6 hero-content'> 
                <h1 > hero section</h1>
              </div>
            <div className=' col-sm-6 hero-img'>
                <img src='src/assets/images/iphone14pro-tradein.jpg'></img>
            </div>

          
          </div>
          </div>
          <div className='col-sm-2'></div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
