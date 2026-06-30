import React, { useState, useEffect } from "react";
import "./NavbarAdmin.css";
import { FaSearch, FaSun, FaMoon } from "react-icons/fa";
import { GrLogout } from "react-icons/gr";
import { FaUserTie } from "react-icons/fa6";
import { MdOutlineSearch } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { TiWeatherSunny } from "react-icons/ti";
import { IoMoonOutline } from "react-icons/io5";
import { TbMailCheck } from "react-icons/tb";
import { VscSettingsGear } from "react-icons/vsc";

function NavbarAdmin() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [darkMode]);

  return (
    <>
      <div className="container-admin-navbar">
        <div className="row">
          <nav className="navbar-admin">

            <div className="col-sm-3 Admin-logo">
              <div className="admin-icon">     <FaUserTie /> </div>
              <div className="admin-name">
            Welcome, Admin..
      </div>
            </div>

          

            <div className="col-sm-3">
              <form
                className="admin-search-box"

              >
                <div className="search-icon">

                  <MdOutlineSearch />
                </div>
                <input
                  type="text"
                  className="form-control-admin"
                  placeholder="Search..."


                />

              </form>
            </div>

            <div className="col-sm-5 logout-button">
             

              <div className="dark-theme-button">
                <button
                  type="button"
                  className="theme-btn"
                  onClick={() => setDarkMode(!darkMode)}
                  title="Switch Theme"
                >
                  {darkMode ? <IoMoonOutline />: <TiWeatherSunny /> }
                </button>
     <button
                type="button"
                className="logout-icon"
                onClick={() => {
                  localStorage.removeItem("token");
                  window.location.href = "/login";
                }}
              >
              <p> <IoMdNotificationsOutline /></p> 
              </button>
                <button
                type="button"
                className="logout-icon"
                onClick={() => {
                  localStorage.removeItem("token");
                  window.location.href = "/login";
                }}
              >
              <p> <TbMailCheck /></p> 
              </button>
                 <button
                type="button"
                className="logout-icon"
                onClick={() => {
                  localStorage.removeItem("token");
                  window.location.href = "/login";
                }}
              >
              <p> <VscSettingsGear /></p> 
              </button>
               <button
                type="button"
                className="logout-icon"
                onClick={() => {
                  localStorage.removeItem("token");
                  window.location.href = "/login";
                }}
              >
              <p> <GrLogout /></p> 
              </button>
              
                
              </div>
             
            </div>
            <div className="col-sm-1">
                
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default NavbarAdmin;

