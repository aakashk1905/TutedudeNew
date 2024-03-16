import React from "react";
import "./Styles/Experiences.css";
import exp1 from "../Assests/exp1.svg";
import exp2 from "../Assests/exp2.svg";
import exp3 from "../Assests/exp3.svg";
import exp4 from "../Assests/exp4.svg";
import exp5 from "../Assests/exp5.svg";
import exp6 from "../Assests/exp6.svg";
import exp7 from "../Assests/exp7.svg";
import exp8 from "../Assests/exp8.svg";

const Experiences = () => {
  return (
    <div className="exp-cont">
      <div className="exp-head">
        Get a Closer Look at Their <br />
        Experience!
      </div>
      <div className="exp-inner-cont">
        <div className="exp-col">
          <img src={exp1} alt="exp1" />
          <img src={exp2} alt="exp1" />
        </div>
        <div className="exp-col">
          <img src={exp3} alt="exp1" />
          <img src={exp4} alt="exp1" />
          <img src={exp5} alt="exp1" />
        </div>
        <div className="exp-col">
        <img src={exp6} alt="exp1" />
          <img src={exp7} alt="exp1" />
          <img src={exp8} alt="exp1" />
        </div>
      </div>
    </div>
  );
};

export default Experiences;
