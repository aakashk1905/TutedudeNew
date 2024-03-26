import React from "react";
import "./styles/CustomHero.css";
import customheroright from "../../Assests/customheroright.png";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import useCart from "../../contexts/Cart";
const CustomHero = ({ setShowLogin }) => {
  const navigate = useNavigate();
  const { selectedCourse } = useCart();
  const name = Cookies.get("user_name");
  return (
    <div className="custom-phero">
      <div className="custom-main">
        <div className="custom-left">
          <div className="ch-head">
            Create Your <br />
            <b className="ch-head-col">Custom Course Pack</b>
            <br /> and Save Big!
          </div>
          <div className="ch-text">
            Select 4 or more courses to unlock{" "}
            <b style={{ color: "#4A00AA" }}>45% Discount</b> & increase in{" "}
            <b style={{ color: "#3CAE42" }}>100% Refund validity</b> with each
            course pack
          </div>
          <div
            className="home-hero-cta pointer"
            onClick={() => {
              if (!name) {
                setShowLogin(true);
              } else {
                if (selectedCourse.length > 0) {
                  navigate(`/packpayment`);
                } else {
                  window.location.href = "#choose";
                }
              }
            }}
          >
            Enroll Now
          </div>
        </div>
        <div className="custom-right">
          <img src={customheroright} alt="customright"></img>
        </div>
      </div>
    </div>
  );
};

export default CustomHero;
