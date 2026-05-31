import React from 'react'

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

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
          <p>My Account <br /><br />
            Login/Register<br /><br />
            Cart<br /><br />
            Wishlist<br /><br />
            Shop<br /><br />
          </p>

        </div>
        <div className="footer-box4">
          <h2>Quick Link</h2>
          <p>Privacy policy <br /><br />
            Terms Of Use<br /><br />
            FAQ<br /><br />
            Contact<br /><br />
          </p>
        </div>
        <div className="footer-box5">
          <h2 >Download App</h2>
          <p>Save $3 with App New User Only</p>

          <div className="app-flex-box">
            <div className="qr-container">
              <img
                src="src/assets/images/QR imahe.webp"
                alt="QR Code"
              />
            </div>
            <div className="store-buttons">
              <a href="#playstore">
                <img src="src/assets/images/f233865f2fff1a5cab5a148ce35fdf4ecf49fbf7.webp" alt="Google Play" />
              </a>
              <a href="#appstore">
                <img src="src/assets/images/badge_appstore-lrg.png" alt="App Store" />
              </a>
            </div>
          </div>

          <div className="social-icons">
            <a href="#fb"><FaFacebookF /></a>
            <a href="#tw"><FaTwitter /></a>
            <a href="#insta"><FaInstagram /></a>
            <a href="#in"><FaLinkedinIn /></a>
          </div>
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


