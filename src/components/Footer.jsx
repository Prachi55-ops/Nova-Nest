import React from 'react'

const footer = () => {
  return (
    <>

    <footer className="footer">
    
      <div className="footer-box1">
        <h4>Nova Nest  <h3>Subscribe</h3>
        </h4>
       <div className="email-box">
        <p>Get 10% off your first order</p>
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
        <h4>Support</h4>
       <p> 111 Bijoy sarani,Dhaka,<br/>
DH 1515,Bangladesh.<br/><br/>
Nova Nest@gmail.com <br/><br/>
       +88015-888888-99999
       </p>
        
       
       
      </div>


      <div className="footer-box3">
        <h5>Contact</h5>
        <p>Email: support@gmail.com</p>
        <p>Phone: +91 9876543210</p>
      </div>

      <div className="copy">
        <p>&copy; 2026 NovaNest. All Rights Reserved.</p>
      </div>
  
 
    </footer>



    </>
  )
}

export default footer


