import React from "react";
import "./styles/EmbarkJourney.css";
import allaccess from "../../Assests/allaccess.svg";
const TickSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
    >
      <path
        d="M13.5 25C20.6799 25 25 20.1799 25 13C25 5.8201 20.6799 1 13.5 1C6.3201 1 1.5 5.8201 1.5 13C1.5 20.1799 6.3201 25 13.5 25Z"
        fill="#7530E4"
      />
      <path
        d="M7.11682 13.8403L10.4786 17.2021L18.8832 8.79761"
        stroke="#F2E9F2"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const EmbarkJourney = () => {
  return (
    <div className="ej-cont">
      <div className="usr-head">Embark on an Empowering Journey!!</div>
      <div className="ej-text">
        Invest in Your Future with Our All Access Offer &{" "}
        <b className="ej-text-col">Avail 100% Refund!!!</b>
      </div>
      <div className="ej-card">
        <div className="ej-card-head">
          All Access <b className="ej-card-head-col">Pack</b>
        </div>
        <div className="ej-card-mid">
          <div className="ej-card-left">
            <div className="ej-card-ch">25 Courses</div>
            <div className="ej-card-ct">
              All the available courses of TuteDude will be yours!!
            </div>
          </div>
          <div className="ej-card-right">
            <div className="ej-card-price">₹4,499/-</div>
          </div>
        </div>
        <div className="ej-card-mid">
          <div className="ej-card-left">
            <div className="ej-card-list">
              <TickSvg />
              <span>Fees back valid for lifetime.</span>
            </div>
            <div className="ej-card-list">
              <TickSvg />
              <span>Life time access.</span>
            </div>
            <div className="ej-card-list">
              <TickSvg />
              <span>Special internship opportunities.</span>
            </div>
            <div className="ej-card-list">
              <TickSvg />
              <span>Save ₹10,180/-</span>
            </div>
          </div>
          <div className="ej-card-right">
            <div className="ej-card-list">
              <TickSvg />
              <span>Full access to courses.</span>
            </div>
            <div className="ej-card-list">
              <TickSvg />
              <span>Personal Mentor appointed.</span>
            </div>
            <div className="ej-card-list">
              <TickSvg />
              <span>Projects Provided.</span>
            </div>
            <div className="ej-card-list">
              <TickSvg />
              <span>Advanced features.</span>
            </div>
          </div>
        </div>
        <div className="ej-card-cta">Know More</div>
      </div>
      <div className="ej-ups-cont">
        <div className="ups-card">
          <div className="ups-type-cont">
            <b style={{ color: "#7530E4" }}>All Access</b> Pack
          </div>
          <div className="ups-card-img-cont">
            <img src={allaccess} alt="Custom Pack" />
          </div>
          <div className="ups-card-bottom">
            <div className="ups-cost-cont">
              <div className="ups-cost-head-cont">
                <div className="ups-qty">
                  <b style={{ fontSize: "34px" }}> 20</b> Courses
                </div>
                <div className="ups-type">Popular</div>
              </div>
              <div className="ups-price-cont">
                <div className="ups-price">₹ 4,499</div>
                <div className="ups-og-price">₹ 16,077</div>
              </div>
            </div>
            <div className="ups-points-cont">
              <div className="ups-point-bg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <rect
                    x="0.59375"
                    y="0.5"
                    width="18"
                    height="18"
                    rx="3.5"
                    fill="white"
                    stroke="#7530E4"
                  />
                  <path
                    d="M4.07031 9.856L6.5622 13.0369C6.92556 13.5007 7.60917 13.5514 8.037 13.1463L15.5587 6.02344"
                    stroke="#7530E4"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="ups-points">Lifetime Access and support.</div>
              </div>
              <div className="ups-point-bg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <rect
                    x="0.59375"
                    y="0.5"
                    width="18"
                    height="18"
                    rx="3.5"
                    fill="white"
                    stroke="#7530E4"
                  />
                  <path
                    d="M4.07031 9.856L6.5622 13.0369C6.92556 13.5007 7.60917 13.5514 8.037 13.1463L15.5587 6.02344"
                    stroke="#7530E4"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="ups-points">Access All The courses.</div>
              </div>
              <div className="ups-point-bg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <rect
                    x="0.59375"
                    y="0.5"
                    width="18"
                    height="18"
                    rx="3.5"
                    fill="white"
                    stroke="#7530E4"
                  />
                  <path
                    d="M4.07031 9.856L6.5622 13.0369C6.92556 13.5007 7.60917 13.5514 8.037 13.1463L15.5587 6.02344"
                    stroke="#7530E4"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="ups-points">Avail 100% refund in 1 year.</div>
              </div>
            </div>
            <div className="ups-btn">Know More</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmbarkJourney;
