import React from "react";
import "./styles/Navbar.css";
import logo from "../Assests/logo.png";
// import bars from "../Assests/bars.svg";
// import close from "../Assests/close.svg";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
const Navbar = ({ setShowLogin, setShowSign }) => {
  // const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const name = Cookies.get("user_name");

  const handleLogout = async () => {
    Cookies.remove("user_email");
    Cookies.remove("user_pass");
    Cookies.remove("user_name");
    Cookies.remove("bought");

    alert("Logged Out Successfully!");
    window.location.reload();
  };

  return (
    <>
      <div className="home-navbar-outer-cont">
        <div className="home-nav-cont">
          <div className="logo-cont pointer" onClick={() => navigate("/")}>
            <img src={logo} alt="Logo" />{" "}
          </div>
          <div className="home-nav-links-cont" style={{ display: "none" }}>
            <div className="home-nav-links-list-item"> Home</div>

            <a href="#abt">
              <div className="home-nav-links-list-item">Courses</div>
            </a>
            <div className="home-nav-links-list-item">Feesback Offer</div>
            <div className="home-nav-links-list-item"> FAQ'S</div>
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
            <div className="home-nav-btn-cont nav-btn-contt ">
              <div
                className="home-nav-login-btn logbtn pointer"
                onClick={() => {
                  setShowSign(false);
                  setShowLogin(true);
                }}
              >
                Login
              </div>
              <div
                className="home-nav-signup-btn signbtn pointer"
                onClick={() => {
                  setShowLogin(false);
                  setShowSign(true);
                }}
              >
                SignUp
              </div>
            </div>
          )}
          
        </div>
      </div>
    </>
  );
};

export default Navbar;
