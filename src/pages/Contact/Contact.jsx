import React from 'react'
import Topbar from '../../components/Topbar/Topbar'
import '../../components/Topbar/topbar.css'
import Navbar from '../../components/Navbar/Navbar'
import '../../components/Navbar/navbar.css'
import { IoCallOutline } from "react-icons/io5";
import { TbMailOpened } from "react-icons/tb";
import Footer from '../../components/Footer/Footer'
import '../../components/Footer/footer.css'
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
                            <div className='call-box2'> <div className='sml-call-box'><p><IoCallOutline /></p> </div>
                              <h4>Call to us</h4></div>
                           <p className='call-text'>We are available 24/7 , 7 days a week
                            
                            
                           <p> Phone: +881122775566</p>
                          </p>
                          </div>
                          


                          <div className='single-line'></div>
                          <div className='mail-box'>
                              <div className='call-box2'> <div className='sml-call-box'><p><TbMailOpened /></p> </div>
                              <h4>Write to Us</h4></div>
                           <p className='call-text'>Fill out our form and we will contact you within 24hours
                            
                            
                           <p> Emails: Customer@NovaNest.com </p>
                             <p> Emails: Support@NovaNest.com </p>
                          </p>
                            
                          </div>
                        </div>
                      </div>
                      <div className="col-sm 7 contact-big-box">
<div className='contact-big-box2'>
 
  <form>
    <div className="name-box">
      <div className="">
        <input
          type="text"
          className="form-control custom-input"
          placeholder="Your Name *"
        />
      </div>

      <div className=" ">
        <input
          type="email"
          className="form-control custom-input"
          placeholder="Your Email *"
        />
      </div>

      <div className=" ">
        <input
          type="text"
          className="form-control custom-input"
          placeholder="Your Phone *"
        />
      </div>
    </div>

    <div className="textarea-box">
      <textarea
        className="form-control custom-textarea"
        placeholder="Your Message"
      ></textarea>
    </div>

    <div className="text-end ">
      <button className="send-btn">
        Send Message
      </button>
    </div>
  </form>
</div>


                      </div>
                      <div className="col-sm 1"></div>
                    </div>
                    </div>
                        <Footer />
    </>
  )
}

export default Contact
