import React from 'react'
import Topbar from '../../components/Topbar/Topbar'
import '../../components/Topbar/topbar.css'
import Navbar from '../../components/Navbar/Navbar'
import '../../components/Navbar/navbar.css'
import Footer from '../../components/Footer/Footer'
import '../../components/Footer/footer.css'
import { useNavigate } from 'react-router-dom';
function Error() {
     const navigate = useNavigate();
  return (
    <>
        <Topbar/>
      <Navbar/>
      <div className=' error-container'>
        <section className='section-box'>
                    <div className=' contact-row1'>
                        <div className='col-sm-12 '>
                            <div className='contact-hightlight'>   <h4>Home </h4>
                                <h4> /</h4>

                                <h5 > 404 Error</h5> </div>

                        </div>
                    </div></section>
                    <section className='section-error'>
<div className='error-row'>
    <div className="col-sm-3"></div>
    
    <div className='col-sm-6 error-text'>
        <h3>404 Not Found</h3>
        <div className='error-text-para'> <p>
            Your visited page not found. you may go home page
        </p></div>
           <div className=" error-btn">
      <button className="home-btn" onClick={() => navigate("/")}>
        Back to Home page
      </button>
    </div></div>
       
       
        <div className="col-sm-3"></div>
    
</div>


                    </section>
      </div>
       <Footer />
    </>
  )
}

export default Error
