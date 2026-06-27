import React, { useState } from "react";
import Topbar from "../../components/Topbar/Topbar";
import "../../components/Topbar/topbar.css";
import Navbar from "../../components/Navbar/Navbar";
import "../../components/Navbar/navbar.css";
import Footer from "../../components/Footer/Footer";
import "../../components/Footer/footer.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const url = isAdmin
        ? "http://localhost:4000/api/user/admin"
        : "http://localhost:4000/api/user/login";

      const response = await axios.post(url, {
        email,
        password,
      });

      if (response.data.success) {
        localStorage.setItem("token", response.data.token);

        if (isAdmin) {
          navigate("/admin/dashboard");
        } else {
          navigate("/");
        }
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || error.message);
    }
  };

  return (
    <>
      <Topbar />
      <Navbar />

      <div className="login-container">
        <div className="login-row">
          <div className="col-sm-6 login-img">
            <img
              src="src/assets/images/WhatsApp Image 2026-06-08 at 12.51.24 AM.jpeg"
              alt="login"
            />
          </div>

          <div className="col-sm-4 login-box">
            <h3>Log in to Exclusive</h3>
            <p>Enter your details below</p>

            <form onSubmit={onSubmitHandler}>

              <div className="form-input">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-input">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div style={{ margin: "10px 0" }}>
                <label>
                  <input
                    type="checkbox"
                    checked={isAdmin}
                    onChange={() => setIsAdmin(!isAdmin)}
                  />{" "}
                  Login as Admin
                </label>
              </div>

              <button type="submit" className="login2-btn">
                Login
              </button>

              <button
                type="button"
                className="forgetpass"
                onClick={() => navigate("/Error")}
              >
                Forget Password?
              </button>
            </form>
          </div>

          <div className="col-sm-2"></div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Login;