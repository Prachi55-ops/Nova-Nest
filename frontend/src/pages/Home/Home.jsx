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
import { useState, useEffect } from 'react';



function Home() {
   const targetDate = new Date("2026-06-20T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState(targetDate - Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(targetDate - Date.now());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return (


    <>
      <Topbar />
      <Navbar />

      <div className="container-home">
        <div className="row home-box">

          {/* Sidebar */}
          <div className='col-sm-1'></div>
          <div className="col-lg-3 Side-bar">

            <div className="Side-bar-box">

              <select className='fashion-dropdown'>
                <option > Women's Fashion</option>
                <option> Tops & Tunics</option>
                <option> Dresses</option>
                <option> Topa & Bootom Sets</option>
                <option> Bra & Bralettes</option>
                <option> Jeans & Jeggings</option>
                <option> Womens Nightsuits</option>
              </select>
              <select className='fashion-dropdown'>
                <option > Men's Fashion</option>
                <option> Kurta Sets </option>
                <option> Blazer</option>
                <option> Shirt Pant Fabric</option>
                <option> Regular Jeans </option>
                <option> Trankpants</option>
                <option> Sherwani </option>
              </select>
              <ul className="fashion-list">

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
          <div className="col-lg-7 hero-box">
            <div className="row hero-section align-items-center">

              <div className="col-md-6 hero-content">
                <p className="apple-logo">
                  <FaApple size={50} /> iPhone 14 Series
                </p>


                <br />
                <h1>Up to 10%  <br />Off Voucher</h1>
                <br />

                <div className="hero-btn">
                  <span>Shop Now</span>  <p> <HiOutlineArrowRight /></p>
                </div>
              </div>

              <div className="col-md-6 hero-img text-center">
                <img
                  src={iphoneImage}
                  alt="iPhone 14 Pro"

                />
              </div>

            </div> </div>


            
<div className='col-sm-1'></div>
        </div>
      </div>

      <div className=' flase-case-container'>
        <div className='flase-row'>
          <div className='flash-box2'><div className='flase-box'>
</div>
 <p >Todays's </p>
        </div>
        <div className='count-box'>
          <h3>Flash Sales</h3>
        
      <div className="countdown">
  <div className="time-box">
    <h6>Days</h6>
    <h1>{days}</h1>
  </div>

  <span>:</span>

  <div className="time-box">
    <h6>Hours</h6>
    <h1>{hours}</h1>
  </div>

  <span>:</span>

  <div className="time-box">
    <h6>Minutes</h6>
    <h1>{minutes}</h1>
  </div>

  <span>:</span>

  <div className="time-box">
    <h6>Seconds</h6>
    <h1>{seconds}</h1>
  </div>
</div>

  
 <button type="submit" className="see-all-btn ">
           <p>See All</p> 
          </button>

   </div>


   <div className='row-product'></div>

        </div>

      </div>
      <Footer />
    </>
  );
}

export default Home;

