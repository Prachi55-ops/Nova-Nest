import React, { useState } from 'react'
import Topbar from '../../components/Topbar/Topbar'
import '../../components/Topbar/topbar';
import Navbar from '../../components/Navbar/Navbar'
import '../../components/Navbar/navbar.css'
import Footer from '../../components/Footer/Footer'
import '../../components/Footer/footer.css'
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';


function Signup() {

  const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")



 
  const onSubmitHandler = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      "http://localhost:4000/api/user/register",
      {
        name,
        email,
        password,
      }
    );

    if (response.data.success) {
      alert("Registration Successful");
      // Agar backend token bhej raha hai
      localStorage.setItem("token", response.data.token);
    } else {
      alert(response.data.message);
    }
  } catch (error) {
    alert(error.response?.data?.message || "Registration Failed");
  }

};
   const navigate = useNavigate();

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
        <form onSubmit={onSubmitHandler}>

          <div className="form-input">
           
            <input
              type="text"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              value={name}
            />
          </div>

          <div className="form-input">
           
            <input
              type="email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              value={email}

              placeholder="Email or Phone number"
            />
          </div>

          <div className="form-input">
         
            <input
              type="password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
              value={password}

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
          
        <div className='login-text'>Already have a account?
           <button type="button" 
           className="login-btn" 
           onClick={() => navigate("/Login")}>
           <p>Log in</p> 
          </button>
        </div>
       
        </form>
         
 </div>
 <div className='col-sm-2'></div>
         </div>
      </div>
      <Footer/>
    </>
  )
}

export default Signup

