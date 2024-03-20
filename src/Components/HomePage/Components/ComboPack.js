import React from "react";
import "./styles/ComboPack.css";
import tick from "../Assests/tick.svg";
import { useNavigate } from "react-router-dom";
const ComboPack = () => {
  const navigate = useNavigate();
  return (
    <div className="cp-cont">
      <div className="cp-inner-cont">
        <div className="home-wu-top">
          <div className="home-hr-head">
            The Ultimate <b className="home-hr-head-col">Combo Pack!</b>
          </div>
          <div className="cp-text">
            Our combo pack ensures a comprehensive and enriched skill-building
            adventure just for you.
          </div>
        </div>
        <div className="cp-cards-cont">
          <div className="cp-card1" onClick={() => navigate("/custompack")}>
            <div className="cp-card1-top">
              <div className="cp-head">
                <div>Customized Pack</div>
                <div className="cp-card-text"> 4 Courses</div>
              </div>
              <div className="cp-bs">Best Seller</div>
            </div>
            <div className="cp-divider"></div>
            <div className="cp-price">
              <div className="cp-prc">₹1,499</div>
              <span className="cp-strike">₹2,796</span>
            </div>
            <div className="cp-checklist">
              <div className="cp-chk">
                <img src={tick} alt="tick"></img>
                Lifetime Access and support.
              </div>
              <div className="cp-chk">
                <img src={tick} alt="tick"></img>
                Choose any 4 courses
              </div>
              <div className="cp-chk">
                <img src={tick} alt="tick"></img>
                save ₹1,248/-
              </div>
            </div>
            <div className="cp-divider"></div>
            <div className="cp-km">
              Know more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
              >
                <path
                  d="M14 1L1 14M3.03535 1H14V11.9646"
                  stroke="#fff"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
          <div className="cp-card2" onClick={() => navigate("/allaccess")}>
            <div className="cp-card1-top">
              <div className="cp-head">
                <div>All Access Pack</div>
                <div className="cp-card-text">24 Courses</div>
              </div>
              <div className="cp-mp">Most Popular</div>
            </div>
            <div className="cp-divider"></div>
            <div className="cp-price">
              <div className="cp-prc">₹4,499</div>
              <span className="cp-strike">₹14,679</span>
            </div>
            <div className="cp-checklist">
              <div className="cp-chk">
                <img src={tick} alt="tick"></img>
                Lifetime Access and support.
              </div>
              <div className="cp-chk">
                <img src={tick} alt="tick"></img>
                Choose any 24 courses
              </div>
              <div className="cp-chk">
                <img src={tick} alt="tick"></img>
                save ₹10,180/-
              </div>
            </div>
            <div className="cp-divider"></div>
            <div className="cp-km">
              Know more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
              >
                <path
                  d="M14 1L1 14M3.03535 1H14V11.9646"
                  stroke="#fff"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComboPack;
