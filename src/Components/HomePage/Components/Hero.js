import React from "react";
import Navbar from "./Navbar";
import "./styles/HomeHero.css";
import heroImg from "../Assests/heroImg.svg";
import levelup from "../Assests/levelup.png";
import hero1 from "../Assests/hero1.png";
import hero2 from "../Assests/hero2.png";
import hero3 from "../Assests/hero3.png";
import hero4 from "../Assests/hero4.png";
import googlereview from "../Assests/googlereview.svg";
const Hero = ({ setShowLogin, setShowSign }) => {
  return (
    <div className="home-hero-cont">
      <Navbar setShowLogin={setShowLogin} setShowSign={setShowSign} />
      <div className="home-hero-banner">
        Learn risk-free with Tutedude! Enjoy 100% refund on course completion
      </div>
      <div className="home-hero-main-cont">
        <div className="home-hero-main-top">
          <div className="home-hero-left">
            <div className="home-hero-iit">
              An <b>IIT Delhi</b> Alumni Initiative
            </div>
            <div className="home-hero-head">
              <p className="home-hero-head-col">
                Level Up
                <img
                  src={levelup}
                  alt="levelup"
                  className="home-hero-levelup"
                />
              </p>
              Your career with expert mentorship & internships for{" "}
              <span className="home-hero-free">FREE</span>
            </div>

            <div className="home-hero-text">
              With 100% Refund guarantee on course completion, & endless
              learning Opportunities!!
            </div>
            <img
              src={googlereview}
              alt="google-review"
              className="google-review"
            ></img>
            <div className="home-hero-cta-cont">
              <div className="home-hero-cta">what is 100% refund offer</div>
              <div className="home-hero-cta-vid">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="29"
                  viewBox="0 0 30 29"
                  fill="none"
                >
                  <circle
                    cx="14.5"
                    cy="14.5"
                    r="13.5"
                    stroke="#44009B"
                    strokeWidth="2"
                  />
                  <path
                    d="M22 14.5L10.75 20.9952L10.75 8.00481L22 14.5Z"
                    fill="#44009B"
                  />
                </svg>
                Watch Video
              </div>
            </div>
          </div>
          <div className="home-hero-right">
            <img src={heroImg} alt="hero-img" />
          </div>
        </div>
      </div>
      <div className="home-hero-main-btm">
        <div className="home-hero-card">
          <img src={hero1} alt="hero-img" />
          <div className="home-hero-card-det">
            24
            <span>Courses</span>
          </div>
        </div>
        <div className="home-hero-card">
          <img src={hero2} alt="hero-img" />
          <div className="home-hero-card-det">
            30k+
            <span>Learners</span>
          </div>
        </div>
        <div className="home-hero-card">
          <img src={hero3} alt="hero-img" />
          <div className="home-hero-card-det">
            100k+
            <span>Doubts Solved</span>
          </div>
        </div>
        <div className="home-hero-card" style={{ border: "none" }}>
          <img src={hero4} alt="hero-img" />
          <div className="home-hero-card-det">
            10k+
            <span>Student Projects</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
