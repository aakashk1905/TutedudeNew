import React from "react";
import "./styles/Coursecard.css";
const Coursecard = ({ cimg, text, col, bg }) => {
  return (
    <div className="cc-cont">
      <div className="cc-left">
        <img src={cimg} alt="card"></img>
        <div>{text}</div>
      </div>
      <div className="cc-right" style={{ background: bg }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M14.5 1.5L1.5 14.5M3.53535 1.5H14.5V12.4646"
            stroke={col}
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
};

export default Coursecard;
