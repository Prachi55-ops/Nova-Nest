import React from 'react'
import Topbar from '../../components/Topbar/Topbar'
import '../../components/Topbar/topbar.css'
import Navbar from '../../components/Navbar/Navbar'
import '../../components/Navbar/navbar.css'
import footer from '../../components/Footer/Footer'
import '../../components/Footer/footer.css'
function Login() {
  return (
    <>
    <Topbar/>
    <Navbar/>

    <div className='login-container'>
      <div className=' login-row'>
        <div className='col-sm-6 login-img'>
          <img src='src/assets/images/WhatsApp Image 2026-06-08 at 12.51.24 AM.jpeg'></img>
        </div>
        <div className='col-sm-4 login-box'>
           <h3>Log in to Execlusive</h3>
              <p> Enter your details below</p>
              <form> 
                <div className="form-input">
           
            <input
              type="text"
              className="form-control"
              placeholder="Email & Phone Number"
            />
          </div>

          <div className="form-input">
           
            <input
              type="email"
              className="form-control"
              placeholder="Password"
            />
          </div>
            
                <button type="submit" className="login2-btn ">
           <p>Login</p> 
          </button>
            <button type="button" className="forgetpass ">
           <p>Forget Password ? </p> 
          </button>
          </form>
        </div>
        <div className='col-sm-2'> </div>
      </div>
    </div>
      
    </>
  )
}

export default Login
