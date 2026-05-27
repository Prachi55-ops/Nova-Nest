import React from 'react'

const Navbar = () => {
    return (
        <>

            <nav className=" custom-navbar">
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
                        <div className="container d-flex">
                            <form class="d-flex" role="search">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>


                </div>
            </nav>

        </>
    )
}

export default Navbar
