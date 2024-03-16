import React from "react";
import "./styles/HowRefund.css";
const HowRefund = () => {
  return (
    <div className="hr-cont">
      <div className="home-hr-head">
        How does <span className="home-hr-head-col">100% Refund</span> Work?
      </div>
      <div className="hr-main-cont">
        <div className="hr-card">
          <div className="hr-abs">Step 1</div>
          <div className="hr-card-top">Enroll into a Course</div>
          <div className="hr-btm1">
            <div className="hr-card-btm-text">
              Enroll into any Course by paying only
            </div>
            <div className="hr-card-btm-head">₹699</div>
            <div className="hr-card-cta">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M21.41 12.08L12.41 3.08C12.05 2.72 11.55 2.5 11 2.5H4C2.9 2.5 2 3.4 2 4.5V11.5C2 12.05 2.22 12.55 2.59 12.92L11.59 21.92C11.95 22.28 12.45 22.5 13 22.5C13.55 22.5 14.05 22.28 14.41 21.91L21.41 14.91C21.78 14.55 22 14.05 22 13.5C22 12.95 21.77 12.44 21.41 12.08ZM13 20.51L4 11.5V4.5H11V4.49L20 13.49L13 20.51Z"
                  fill="white"
                />
                <path
                  d="M6.5 8.5C7.32843 8.5 8 7.82843 8 7C8 6.17157 7.32843 5.5 6.5 5.5C5.67157 5.5 5 6.17157 5 7C5 7.82843 5.67157 8.5 6.5 8.5Z"
                  fill="white"
                />
              </svg>
              <span>Enroll Now</span>
            </div>
          </div>
        </div>
        <div className="hr-card card2">
          <div className="hr-abs">Step 2</div>
          <div className="hr-card-top">Complete in 3 months</div>
          <div className="hr-btm">
            <ul>
              <li>
                In <b style={{ color: "#5B00D1" }}>3 Months</b> time with
                Assignments from Date of enrollment.
              </li>
              <li>
                <b style={{ color: "#5B00D1" }}>Refund validity:</b> 3 months
                from the date of enrollment
              </li>
              <li>
                <b style={{ color: "#5B00D1" }}>Course validity :</b> Lifetime
              </li>
            </ul>
          </div>
        </div>
        <div className="hr-card card3">
          <div className="hr-abs">Step 3</div>
          <div className="hr-card-top">Get 100% FeesBack</div>
          <div className="hr-btm">
            <ul>
              <li>
                <b style={{ color: "#5B00D1" }}>100% </b>fee will Return in your{" "}
                <b style={{ color: "#5B00D1" }}>source Account</b>
              </li>
              <li>
                <b style={{ color: "#5B00D1" }}>get Assured certification </b>
              </li>
              <li>You can access the course even after receiving a refund.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowRefund;
