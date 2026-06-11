import React from 'react'
import Topbar from '../../components/Topbar/Topbar'
import '../../components/Topbar/topbar.css'
import Navbar from '../../components/Navbar/Navbar'
import '../../components/Navbar/navbar.css'
function Contact() {
  return (
    <>
      <Topbar/>
      <Navbar/>
       <div className='contact-container'>
                <section className='section-box'>
                    <div className=' contact-row1'>
                        <div className='col-sm-12 '>
                            <div className='contact-hightlight'>   <h4>Home </h4>
                                <h4> /</h4>

                                <h5 > Contact</h5> </div>

                        </div>
                    </div></section>
                    <div className=" contact-row2">
                      <div className="col-sm 1"></div>
                      <div className="col-sm 3 contact-sml-call-box1">
                        <div className='contact-sml-call-box2'>
                          <div className='call-box'>
                            <div className='call-box2'> <div className='sml-call-box'> </div>
                              <h4>Call to us</h4></div>
                           
                          </div>
                          <div className='single-line'></div>
                          <div className='mail-box'></div>
                        </div>
                      </div>
                      <div className="col-sm 7 contact-big-box"></div>
                      <div className="col-sm 1"></div>
                    </div>
                    </div>
    </>
  )
}

export default Contact
