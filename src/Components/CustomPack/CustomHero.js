import React from "react";
import "./styles/CustomHero.css";
import customheroright from "../../Assests/customheroright.png";
const CustomHero = () => {
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
        </div>
        <div className="custom-right">
          <img src={customheroright} alt="customright"></img>
        </div>
      </div>
    </div>
  );
};

export default CustomHero;
