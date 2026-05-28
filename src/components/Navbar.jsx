import React from 'react'
import { FiSearch } from "react-icons/fi";
const Navbar = () => {
    return (
        <>

            <nav className=" head-navbar">
                <div className="nav-container">
                    <div className='navbar-box'>
                        <div className='logo-box '>

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
                        
                        <div className="nav-item nav-underline ">

                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                            <a className="nav-link" href="/">Shop</a>
                            <a className="nav-link" href="/">About</a>
                            <a className="nav-link active" aria-current="page" href="/">Contact</a>

                        </div>
                        <div className="container-search">
                            <form action="" className="search-box">
                                <input placeholder="What are you looking for?" type="text" name="Q" /> 
                     <button type="submit" ><FiSearch /></button>
                            </form>

                        </div>
                        <div className='icons'></div>
                    </div>


                </div>
            </nav>

        </>
    )
}

export default Navbar
