import React from 'react'
   import { Link } from "react-router-dom";
import "./NavbarAdmin.css";

function NavbarAdmin() {
  return (
    <>
   
   

    <nav className=" admin-navbar">
      <div className="container admin-navbar-container">

        <Link className="navbar-brand admin-logo" to="/admin/dashboard">
          Prachi..
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#adminNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="adminNavbar">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link admin-nav-link" to="/admin/dashboard">
                Dashboard
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link admin-nav-link" to="/admin/add-product">
                Add Product
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link admin-nav-link" to="/admin/products">
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link admin-nav-link" to="/admin/orders">
                Orders
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link admin-nav-link" to="/admin/users">
                Users
              </Link>
            </li>

            <li className="nav-item">
              <button
                className="btn btn-danger logout-btn"
                onClick={() => {
                  localStorage.removeItem("token");
                  window.location.href = "/login";
                }}
              >
                Logout
              </button>
            </li>

          </ul>
        </div>

      </div>
    </nav>
 


    </>
  )
}

export default NavbarAdmin
