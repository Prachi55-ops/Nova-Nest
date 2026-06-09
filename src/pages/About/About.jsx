import React from 'react'
import Topbar from '../../components/Topbar/Topbar'
import '../../components/Topbar/topbar.css'
import Navbar from '../../components/Navbar/Navbar'
import '../../components/Navbar/navbar.css'
function About() {
    return (
        <>
            <Topbar />
            <Navbar />

            <div className='About-container'>
                <div className=' about-row1'>
                    <div className='col-sm-12 '>
                        <div className='about-hightlight'>   <h4>Home </h4>
                        <h4> /</h4>
                        
                        <h5 > About</h5> </div>
                     
                    </div>
                </div>
                <div className='About-row'>
                    <div className='col-sm-2'></div>
                    <div className='col-sm-4 about-text'>

                        <h2 >Our Story</h2>
                        <p>Launced in 2015, Exclusive is South Asia’s premier online shopping<br/> makterplace with an active presense in Bangladesh. Supported<br/> by wide range of tailored marketing, data and service solutions,<br/> Exclusive has 10,500 sallers and 300 brands and serves 3<br/> millioons customers across the region. <br/>  <br/> 
                            Exclusive has more than 1 Million products to offer, growing at a <br/>  very fast. Exclusive offers a diverse assotment in categories <br/>  ranging  from consumer.</p>

                    </div>
                    <div className='col-sm-6 about-img'>
                        <img src='src/assets/images/fcc89aaa7b85f8c1dcce81e71e2eb178be13bd4d.jpg'></img>
                    </div>
                </div>




            </div>
        </>
    )
}

export default About
