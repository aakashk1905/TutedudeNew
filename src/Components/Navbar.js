import React from "react";
import "./Styles/Navbar.css";
import logo from "../Assests/logo.png";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
const Navbar = ({ setShowLogin, setShowSign }) => {
  const name = Cookies.get("user_name");
  const navigate = useNavigate();
  const handleLogout = async () => {
    Cookies.remove("user_email");
    Cookies.remove("user_pass");
    Cookies.remove("user_name");
    Cookies.remove("bought");

    alert("Logged Out Successfully!");
    window.location.reload();
  };
  return (
    <div className="hero-nav">
      <div className="nav-logo-cont pointer" onClick={() => navigate("/")}>
        <img src={logo} alt="logo" />
      </div>

      {name ? (
        <div className="nav-login-cont">
          <div className="menu">
            <div className="nav-login name-cont">{name}</div>
            <ul className="menu-dropdown">
              <li
                className="nav-mddrop"
                onClick={() =>
                  (window.location.href = `${window.location.origin}/dashboard`)
                }
              >
                Dashboard
              </li>
              <li className="nav-mddrop" onClick={handleLogout}>
                Logout
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="nav-login-cont">
          <div
            className="nav-login"
            onClick={() => {
              setShowSign(false);
              setShowLogin(true);
            }}
          >
            Login
          </div>
          <div
            className="nav-signup"
            onClick={() => {
              setShowLogin(false);
              setShowSign(true);
            }}
          >
            Sign Up
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
