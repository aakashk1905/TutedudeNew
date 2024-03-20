import React from "react";
import "./Styles/Upsell.css";
import custom from "../Assests/custom.svg";
import allaccess from "../Assests/allaccess.svg";
import { useNavigate } from "react-router-dom";
const Upsell = () => {
  const navigate = useNavigate()
  return (
    <div className="ups-cont">
      <div className="ups-head">Embark on an Empowering Journey</div>
      <div className="ups-text">
        Try these popular course packs among students{" "}
      </div>
      <div className="ups-inner-cont">
        <div className="ups-card">
        <div className="ups-type-cont"><b style={{color:'#7530E4'}}>Customized</b> Pack</div>
          <div className="ups-card-img-cont">
            <img src={custom} alt="Custom Pack" />
          </div>
          <div className="ups-card-bottom">
            <div className="ups-cost-cont">
              <div className="ups-cost-head-cont">
                <div className="ups-qty">
                  <b style={{ fontSize: "34px" }}> 4</b> Courses
                </div>
                <div className="ups-type">Best seller</div>
              </div>
              <div className="ups-price-cont">
                <div className="ups-price">₹ 1,499</div>
                <div className="ups-og-price">₹2796</div>
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
                <div className="ups-points">Choose Any 4 courses.</div>
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
            <div className="ups-btn" onClick={() => navigate("/custompack")}>Know More</div>
          </div>
        </div>



        <div className="ups-card">
        <div className="ups-type-cont"><b style={{color:'#7530E4'}}>All Access</b> Pack</div>
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
            <div className="ups-btn" onClick={() => navigate("/allaccess")}>Know More</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Upsell;
