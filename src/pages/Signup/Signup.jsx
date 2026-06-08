import React from 'react'
import Topbar from '../../components/Topbar/Topbar'
import '../../components/Topbar/topbar';
import Navbar from '../../components/Navbar/Navbar'
import '../../components/Navbar/navbar.css'
import Footer from '../../components/Footer/Footer'
import '../../components/Footer/footer.css'
import { FcGoogle } from "react-icons/fc";
function Signup() {
  return (
    <>
      <Topbar/>
      <Navbar/>
      <div className='signup-container'>
        <div className='row signup-row'>
          <div className='col-sm-4 signup-img'>
            <img src='src/assets/images/WhatsApp Image 2026-06-08 at 12.51.24 AM.jpeg'></img>
          </div>
          <div className='col-sm-6 from-box'> 
            <h2 > Create an Account</h2>
            <p> Enter your details below</p>
        <form>

          <div className="form-input">
           
            <input
              type="text"
              className="form-control"
              placeholder="Name"
            />
          </div>

          <div className="form-input">
           
            <input
              type="email"
              className="form-control"
              placeholder="Email or Phone number"
            />
          </div>

          <div className="form-input">
         
            <input
              type="password"
              className="form-control"
              placeholder=" password"
            />
          </div>

          <button type="submit" className="create-account-btn ">
           <p>Create Account</p> 
          </button>
          <button type="submit" className="signup-google-btn ">
            <h5 ><FcGoogle /></h5>
           <p> Signup with Google</p> 
          </button>
        </form>
        <p >Already have a account?</p>
 </div>
 <div className='col-sm-2'></div>
         </div>
      </div>
      <Footer/>
    </>
  )
}

export default Signup

