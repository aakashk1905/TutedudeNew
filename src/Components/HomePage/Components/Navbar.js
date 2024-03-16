import React, { useState } from "react";
import "./styles/Navbar.css";
import logo from "../Assests/logo.png";
import bars from "../Assests/bars.svg";
import close from "../Assests/close.svg";
import Cookies from "js-cookie";
const Navbar = ({ setShowLogin, setShowSign }) => {
  const [open, setOpen] = useState(false);

  const name = Cookies.get("user_name");

  const handleLogout = async () => {
    Cookies.remove("user_email");
    Cookies.remove("user_pass");
    Cookies.remove("user_name");
    Cookies.remove("bought");

    alert("Logged Out Successfully!");
    window.location.href = "https://tutedude.com/clearrr.php";
  };

  return (
    <>
      <div className="navbar-outer-cont">
        <div className="nav-cont">
          <div className="logo-cont">
            <img src={logo} alt="Logo" />{" "}
          </div>
          <div className="nav-links-cont">
            <div className="nav-links-list-item"> Home</div>

            <a href="#abt">
              <div className="nav-links-list-item">Courses</div>
            </a>
            <div className="nav-links-list-item">Feesback Offer</div>
            <div className="nav-links-list-item"> FAQ'S</div>
          </div>
          {name ? (
            <div className="nav-btn-cont nav-btn-contt">
              <div className="nav-login-btn logbtn">{name}</div>
              <div className="nav-logout-btn logbtn" onClick={handleLogout}>
                Logout
              </div>
            </div>
          ) : (
            <div className="nav-btn-cont nav-btn-contt">
              <div
                className="nav-login-btn logbtn"
                onClick={() => {
                  setShowSign(false);
                  setShowLogin(true);
                }}
              >
                Login
              </div>
              <div
                className="nav-signup-btn signbtn"
                onClick={() => {
                  setShowLogin(false);
                  setShowSign(true);
                }}
              >
                SignUp
              </div>
            </div>
          )}
          <div className="bars-cont" onClick={() => setOpen(true)}>
            <img src={bars} alt="bars" />
          </div>
        </div>
      </div>
      {open && (
        <div className="mnav-cont">
          <div className="nav-cont">
            <div className="logo-cont">
              <img src={logo} alt="Logo" />{" "}
            </div>
            <div className="bars-cont close" onClick={() => setOpen(false)}>
              <img src={close} alt="bars" />
            </div>
          </div>

          <div className="mnav-inner-cont">
            <div className="nav-links-list-item"> Home</div>
            <div className="nav-links-list-item">Courses</div>
            <div className="nav-links-list-item">Feesback Offer</div>
            <div className="nav-links-list-item">FAQ'S</div>

            {name ? (
              <div>
                <div className="nav-login-btn">{name} </div>
                <div className="nav-logout-btn" onClick={handleLogout}>
                  Logout
                </div>
              </div>
            ) : (
              <>
                <div
                  className="nav-login-btn"
                  onClick={() => {
                    setOpen(false);
                    setShowSign(false);
                    setShowLogin(true);
                  }}
                >
                  Login
                </div>
                <div
                  className="nav-signup-btn"
                  onClick={() => {
                    setOpen(false);
                    setShowLogin(false);
                    setShowSign(true);
                  }}
                >
                  SignUp
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
