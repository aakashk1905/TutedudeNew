import React from "react";
import "./DiscoverAllAccess.css";
import allaccessdisc1 from "../../Assests/allaccessdisc1.png";
import allaccessdisc2 from "../../Assests/allaccessdisc2.png";
const DiscoverAllAccess = () => {
  return (
    <div className="discaa-cont">
      <div className="hr-head">Discover The All Access Pack!</div>
      <div className="discaa-inner-cont">
        <div className="discaa-card">
          <div className="discaa-card1-top">
            <div className="discaa-card1-head">
              you get
              <span>25</span>
            </div>
          </div>
          <div className="discaa-card1-btm">Courses</div>
        </div>
        <div className="discaa-card2">
          <div className="discaa-card2-top">
            <div className="discaa-card2-head">
              Offer Prize
              <span>₹ 4,499</span>
              <b>₹16,770</b>
            </div>
          </div>
          <div className="discaa-card2-btm">72 % Off on all courses</div>
        </div>
        <div className="discaa-card3">
          <div className="discaa-card-img">
            <img src={allaccessdisc1} alt=""></img>
          </div>
          <div className="discaa-card-mid">Refund Validity</div>
          <div className="discaa-card-btm">Lifetime!!</div>
        </div>
        <div className="discaa-card3">
          <div className="discaa-card-img">
            <img src={allaccessdisc2} alt=""></img>
          </div>
          <div className="discaa-card-mid">With Lifetime</div>
          <div className="discaa-card-btm">Course Access!</div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverAllAccess;
