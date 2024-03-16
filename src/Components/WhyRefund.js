import React from "react";
import "./Styles/WhyRefund.css";
import whyref from "../Assests/whyref.svg";
const WhyRefund = () => {
  return (
    <div className="why-cont">
      <div className="why-upper-cont">
      <div className="yellow"></div>
      <div className="green"></div>
        <div className="why-head">Why refund?</div>
        <div className="why-img-cont">
          <img src={whyref} alt="whyref" />
        </div>
        <div className="why-text">
          A fee ensures commitment and seriousness in learning, as free things
          are often undervalued.
          <div className="why-quote1">“</div>
          <div className="why-quote2">“</div>
        </div>
      </div>
      <div className="why-video-cont"></div>
    </div>
  );
};

export default WhyRefund;
