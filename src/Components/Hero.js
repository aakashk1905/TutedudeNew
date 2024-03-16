import React from "react";
import "./Styles/Hero.css";
// import heroImg from "../Assests/heroImg.svg";
import google from "../Assests/google.svg";
import stars from "../Assests/stars.svg";
import Navbar from "./Navbar";
import Cookies from "js-cookie";
const Hero = ({ setShowLogin, setShowSign, bought, cont, slug }) => {
  const name = Cookies.get("user_name");
  return (
    <>
      <div className="hero-cont">
        <Navbar setShowLogin={setShowLogin} setShowSign={setShowSign} />
        <div className="hero-inner-cont">
          <div className="hero-left-cont">
            <div className="hero-iit-cont">
              An <b className="iit"> &nbsp; IIT Delhi &nbsp;</b> Alumni
              Initiative
            </div>
            <div className="hero-master">
              Master <br />
              <b className="hero-uiux">{cont.name}</b> <br />
              for{" "}
              <span className="hero-free-cont">
                <b className="hero-free">Free</b>
              </span>
            </div>
            <div className="hero-refund ">
              with 100% refund guarantee on your course completion
            </div>
            <div className="hero-google-cont">
              <div>
                <img src={google} alt="Google" />
              </div>
              <div className="hero-google-left-cont">
                <div className="hero-stars-cont">
                  <div className="hero-stars-text">4.4/5</div>
                  <div>
                    <img src={stars} alt="stars" />
                  </div>
                </div>
                <div className="hero-reviews">85 Reviews</div>
              </div>
            </div>
            <div className="hero-cta-cont">
              <div className="hero-price-cont">
                <div className="hero-price">₹699</div>
                <div className="hero-price-text">
                  Pay now and get Refunded upon course completion
                </div>
              </div>
              {bought ? (
                <div
                  className="hero-enroll-btn"
                  onClick={() =>
                    window.open("https://upskill.tutedude.com/dashboard")
                  }
                >
                  Got to Dashboard
                </div>
              ) : (
                <div
                  className="hero-enroll-btn"
                  onClick={() => {
                    if (!name) {
                      setShowLogin(true);
                    } else {
                      window.open(
                        `http://localhost:3000/payment/${slug}`,
                        "_blank"
                      );
                    }
                  }}
                >
                  Enroll Now
                </div>
              )}
            </div>
          </div>
          <div className="hero-right-cont">
            <video
              src="https://tutedude694.s3.ap-south-1.amazonaws.com/coursehero.mp4"
              loop
              autoPlay
              muted
            ></video>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
