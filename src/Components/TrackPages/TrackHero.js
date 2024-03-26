import React from "react";

import "../HomePage/Components/styles/HomeHero.css";
import heroImg from "../HomePage/Assests/heroImg.svg";
import hero1 from "../HomePage/Assests/hero1.png";
import hero2 from "../HomePage/Assests/hero2.png";
import hero3 from "../HomePage/Assests/hero3.png";
import hero4 from "../HomePage/Assests/hero4.png";
import googlereview from "../HomePage/Assests/googlereview.svg";
import Navbar from "../HomePage/Components/Navbar";
import useCart from "../../contexts/Cart";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
const TrackHero = ({ data, setShowLogin }) => {
  const { setSelectedCourse } = useCart();
  const navigate = useNavigate();
  const name = Cookies.get("user_name");
  return (
    <div className="home-hero-cont">
      <Navbar />
      <div className="home-hero-banner">
        if you don't secure an internship, get your money back! No questions
        asked.
      </div>
      <div className="home-hero-main-cont">
        <div className="home-hero-main-top">
          <div className="home-hero-left">
            <div className="home-hero-iit">
              An <b>IIT Delhi</b> Alumni Initiative
            </div>
            <div className="home-hero-head">
              Master {data.heroHead} with{" "}
              <b
                style={{
                  background:
                    "linear-gradient(92deg, #7530E4 2.54%, #B248FF 100%)",
                  backgroundClip: "text",
                  "-webkitBackgroundClip": "text",
                  "-webkitTextFillColor": "transparent",
                }}
              >
                Guranteed Internship!
              </b>
            </div>

            {/* <div className="home-hero-text">
              Learn Full Stack Web Development through our comprehensive course,
              complete with a guaranteed internship opportunity.
            </div> */}
            <img
              src={googlereview}
              alt="google-review"
              className="google-review"
            ></img>
            <div className="home-hero-cta-cont">
              <div
                className="home-hero-cta pointer"
                onClick={() => {
                  if (!name) {
                    setShowLogin(true);
                  } else {
                    setSelectedCourse(data.curric);
                    navigate("/trackpayment");
                  }
                }}
              >
                Apply Now for only ₹{data.price}
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

export default TrackHero;
