import React from 'react';
import Topbar from '../../components/Topbar/Topbar';
import "../../components/Topbar/topbar.css";
import Navbar from '../../components/Navbar/Navbar';
import "../../components/Navbar/navbar.css";
import Footer from '../../components/Footer/Footer';
import "../../components/Footer/footer.css";
import { FaApple } from "react-icons/fa";
import { HiOutlineArrowRight } from "react-icons/hi2";
import iphoneImage from "../../assets/images/iphone-14-pro-1.png";

function Home() {
  return (
    <>
      <Topbar />
      <Navbar />

      <div className="container-home">
        <div className="row home-box">

          {/* Sidebar */}
          <div className="col-lg-3 Side-bar">
            <div className="Side-bar-box">
              <ul className="fashion-list">
                <li>Women's Fashion</li>
                <li>Men's Fashion</li>
                <li>Electronics</li>
                <li>Home & Lifestyle</li>
                <li>Medicine</li>
                <li>Sports & Outdoor</li>
                <li>Baby's & Toys</li>
                <li>Groceries & Pets</li>
                <li>Health & Beauty</li>
              </ul>
            </div>
          </div>

          {/* Hero Section */}
          <div className="col-lg-9 hero-box">
            <div className="row hero-section align-items-center">

              <div className="col-md-6 hero-content">
                <p className="apple-logo">
                  <FaApple size={50} /> iPhone 14 Series
                </p>


<br/>
                <h1>Up to 10%  <br/>Off Voucher</h1>
                <br/>

                <button className="hero-btn">
                  Shop Now <p> <HiOutlineArrowRight /></p>
                </button>
              </div>

              <div className="col-md-6 hero-img text-center">
                <img
                  src={iphoneImage}
                  alt="iPhone 14 Pro"
               
                />
              </div>

            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;