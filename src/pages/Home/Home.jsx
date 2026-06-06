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
      <div className='container-home'>
        <div className='row home-box '>
        
            <div className='col-sm-1'></div>
            <div className="col-sm-3 Side-bar">
                <div className='Side-bar-box'>
                    <ul className='fashion-list'>
                    <li className="dropdown-button">
  <a
    className="nav-link dropdown-toggle"
    href="#"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
   Women's fashion
  </a>
  <ul className="dropdown-menu">
    <li>
      <a className="dropdown-item" href="#">
        Action
      </a>
    </li>
    <li>
      <a className="dropdown-item" href="#">
        Another action
      </a>
    </li>
    <li>
      <a className="dropdown-item" href="#">
        Something else here
      </a>
    </li>
  </ul>
</li>

                        <br/>
                         <li> Men's Fashion</li>     <br/>
                          <li> Electronics</li>     <br/>
                           <li> Home & Lifestyle</li> <br/>
                            <li> Medicine</li> <br/>
                             <li> Sports & Outdoor</li> <br/>
                             <li> Baby's & Toys</li> <br/>
                             <li> Groceries & Pets</li> <br/>
                             <li> Health & beauty</li> <br/>


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
