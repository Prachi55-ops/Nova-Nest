import React from 'react'
import { FiSearch } from "react-icons/fi";
import { GoHeart } from "react-icons/go";
import { HiOutlineShoppingCart } from "react-icons/hi2"
import { RiUser3Line } from "react-icons/ri";
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
                                <li className='nav-hover' ><a className="nav-link"  aria-current="page" href="/Contact">Contact</a> </li>
                                <li className='nav-hover '><a className="nav-link"  aria-current="page" href="/About">About</a></li>
                                <li className='nav-hover'><a className="nav-link active" aria-current="page" href="/Signup">Sign Up</a>
                            

                                </li>
                            </ul>
                        </div>
                        <div className='col-sm-1'></div>
                        <div className=" col-sm-2 container-search">
                            <form action="" className="search-box">
                                <input placeholder="Search" type="text" name="Q" />
                                <button type="submit " className='search-button' ><FiSearch /></button>

                            </form>
                             <div className=' col-sm-1 cart-icons'> <GoHeart /> <HiOutlineShoppingCart /><RiUser3Line /></div>
                              <div className='col-sm-1'></div>
                        </div>
                      
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar
