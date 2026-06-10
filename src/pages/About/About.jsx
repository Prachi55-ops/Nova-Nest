import React from 'react'
import Topbar from '../../components/Topbar/Topbar'
import '../../components/Topbar/topbar.css'
import Navbar from '../../components/Navbar/Navbar'
import '../../components/Navbar/navbar.css'
import Footer from '../../components/Footer/Footer'
import '../../components/Footer/footer.css'
import { AiOutlineShop } from "react-icons/ai";
import { BiDollarCircle } from "react-icons/bi";
import { FiShoppingBag } from "react-icons/fi";
import { TbMoneybag } from "react-icons/tb";
function About() {
    return (
        <>
            <Topbar />
            <Navbar />

            <div className='About-container'>
                <section className='section-box'>
                    <div className=' about-row1'>
                        <div className='col-sm-12 '>
                            <div className='about-hightlight'>   <h4>Home </h4>
                                <h4> /</h4>

                                <h5 > About</h5> </div>

                        </div>
                    </div></section>
                <section className='section-box'>
                    <div className='About-row'>
                        <div className='col-sm-2'></div>
                        <div className='col-sm-4 about-text'>

                            <h2 >Our Story</h2>
                            <p>Launced in 2015, Exclusive is South Asia’s premier online shopping<br /> makterplace with an active presense in Bangladesh. Supported<br /> by wide range of tailored marketing, data and service solutions,<br /> Exclusive has 10,500 sallers and 300 brands and serves 3<br /> millioons customers across the region. <br />  <br />
                                Exclusive has more than 1 Million products to offer, growing at a <br />  very fast. Exclusive offers a diverse assotment in categories <br />  ranging  from consumer.</p>

                        </div>
                        <div className='col-sm-6 about-img'>
                            <img src='src/assets/images/fcc89aaa7b85f8c1dcce81e71e2eb178be13bd4d.jpg'></img>
                        </div>
                    </div>

                </section>
                <section className='section-box3'>
                    <div className='about-row3'>
                        <div className="div col-sm-2"></div>
                        <div className="div col-sm-2 content-box">
                            <div className='sm-content-box'>  <div className='sml-box1'>
                            <div className='sml-box2'>
                                 <div className='icon-shop'> <AiOutlineShop /></div>

                        </div></div>
                        <h4> 10.5k</h4>
                        <p> Saller active our sites</p>
                      </div>
                        </div>
                        <div className="div col-sm-2 content-box">
                              <div className='sm-content-box'>  <div className='sml-box1'>
                            <div className='sml-box2'>
                                 <div className='icon-shop'><BiDollarCircle /></div>

                        </div></div>
                        <h4> 33k</h4>
                        <p> Mopnthly Product Sale</p>
                      </div>
                        </div>
                        <div className="div col-sm-2 content-box">
                              <div className='sm-content-box'>  <div className='sml-box1'>
                            <div className='sml-box2'>
                                 <div className='icon-shop'> <FiShoppingBag /></div>

                        </div></div>
                        <h4> 45.5k</h4>
                        <p> Customer active our sites</p>
                      </div>
                        </div>
                        <div className="div col-sm-2 content-box">
                              <div className='sm-content-box'>  <div className='sml-box1'>
                            <div className='sml-box2'>
                                 <div className='icon-shop'><TbMoneybag /></div>

                        </div></div>
                        <h4> 25k</h4>
                        <p>  Anual gross sale in our sites</p>
                      </div>
                        </div>
                        <div className="div col-sm-2"></div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default About
