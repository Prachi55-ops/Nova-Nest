import React from 'react'

const footer = () => {
  return (
    <>

      <footer className="footer">

        <div className="footer-box1">
          <h2>Nova Nest  <h3>Subscribe</h3>
          </h2>
            
                <p>Get 10% off your first order</p>
            <div className="email-box">

              <input
                type="email"
                placeholder="Enter your email"
              />

              <button>
                ➤
              </button>
            </div>
          </div>
       

        <div className="footer-box2">
          <h2>Support </h2>
             <p> 111 Bijoy sarani,Dhaka,<br />
            DH 1515,Bangladesh.<br /><br />
            Nova Nest@gmail.com <br /><br />
            +88015-888888-99999
          </p>
         
        </div>


        <div className="footer-box3">
          <h2>Account</h2>
          <p>My Account <br/><br/>
          Login/Register<br/><br/>
          Cart<br/><br/>
          Wishlist<br/><br/>
          Shop<br/><br/>
          </p>
         
        </div>
         <div className="footer-box4">
          <h2>Quick Link</h2>
          <p>Privacy policy <br/><br/>
          Terms Of Use<br/><br/>
          FAQ<br/><br/>
          Contact<br/><br/>
      
          </p>
         
        </div>
{/* 
        <div className="copy">
          <p>&copy; 2026 NovaNest. All Rights Reserved.</p>
        </div> */}


      </footer>



    </>
  )
}

export default footer


