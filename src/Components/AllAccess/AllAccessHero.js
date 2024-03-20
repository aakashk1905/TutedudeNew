import React from "react";
import "../CustomPack/styles/CustomHero.css";
import customheroright from "../../Assests/Allaccessright.png";
const AllAccessHero = () => {
  return (
    <div className="custom-phero">
      <div className="custom-main">
        <div className="custom-left">
          <div className="ch-head">
            Unlock Wisdom with{" "}
            <b className="ch-head-col">
              Lifetime Access To Our Premium Courses !
            </b>
          </div>
          <div className="ch-text">
            Elevate your skills at an unbeatable price
            <b style={{ color: "#3CAE42" }}> just ₹4,499!</b>
          </div>
          <div className="home-hero-cta">Enroll Now</div>
        </div>
        <div className="custom-right">
          <img src={customheroright} alt="customright"></img>
        </div>
      </div>
    </div>
  );
};

export default AllAccessHero;
