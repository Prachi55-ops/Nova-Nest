import React from 'react'
import { FiSearch } from "react-icons/fi";
const Navbar = () => {
    return (
        <>

            <nav className=" head-navbar">
                <div className="nav-container">
                    <div className=' row navbar-box'>

                        <div className=' col-sm-2 logo-box '>

                            <a className="logo" href="/">
                                Nova Nest
                            </a></div>

                        {/* Toggle Button
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button> */}

                        {/* Nav Links */}
                        <div className="col-sm-1"> </div>
                        <div className='col-sm-4 item-box'>
                            <ul className='nav-item' >
                                <li className='nav-hover' ><a className="nav-link active" aria-current="page" href="/">Home</a></li>
                                <li className='nav-hover' ><a className="nav-link" href="/">Shop</a> </li>
                                <li className='nav-hover '><a className="nav-link" href="/">About</a></li>
                                <li className='nav-hover'><a className="nav-link active" aria-current="page" href="/">Contact</a></li>
                            </ul>
                        </div>
                        <div className='col-sm-1'></div>
                        <div className=" col-sm-2 container-search">
                            <form action="" className="search-box">
                                <input placeholder="What are you looking for?" type="text" name="Q" />
                                <button type="submit " className='search-button' ><FiSearch /></button>
                                
                            </form>
                               </div>
<div className='col-sm-2 cart-icons'> ne fkfsefsfw</div>
                     



                    </div>


                </div>
            </nav>

        </>
    )
}

export default Navbar
