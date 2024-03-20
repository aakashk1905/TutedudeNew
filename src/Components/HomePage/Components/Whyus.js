import React, { useState } from "react";
import "./styles/HomeWhyus.css";
import grad from "../Assests/grad.svg";
import cashback from "../Assests/cashback.svg";
import inter from "../Assests/inter.svg";
import internship from "../Assests/internship.svg";
const Whyus = () => {
  const [active, setActive] = useState(1);
  return (
    <div className="home-wu-cont">
      <div className="home-wu-top">
        <div className="home-hr-head">
          Why Choose <b className="home-hr-head-col">US?</b>
        </div>
        <div className="home-wu-text">
          Get instant Mentorship, internship opportunities and a supportive
          learning community.
        </div>
      </div>
      <div className="home-wu-btm">
        <div
          className={`home-wu-card ${active === 1 && "home-wu-card-active1"}`}
          onClick={() => setActive(1)}
        >
          <div className="home-wu-img-cont">
            <img src={grad} alt="grad" />
          </div>
          <div className="home-wu-card-text-cont">
            <div className="home-wu-card-head">Premium Quality Courses </div>
            <div className="home-wu-card-text">
              Discover top-notch courses that make learning a breeze.
            </div>
          </div>
        </div>
        <div
          className={`home-wu-card home-wu-card2 ${
            active === 2 && "home-wu-card-active2"
          }`}
          onClick={() => setActive(2)}
        >
          <div className="home-wu-img-cont">
            <img src={cashback} alt="grad" />
          </div>
          <div className="home-wu-card-text-cont">
            <div className="home-wu-card-head">100% Refund Guarantee</div>
            <div className="home-wu-card-text">
              Rest easy , ensuring your satisfaction and peace of mind in every
              purchase.
            </div>
          </div>
        </div>
        <div
          className={`home-wu-card home-wu-card3 ${
            active === 3 && "home-wu-card-active3"
          }`}
          onClick={() => setActive(3)}
        >
          <div className="home-wu-img-cont">
            <img src={internship} alt="grad" />
          </div>
          <div className="home-wu-card-text-cont">
            <div className="home-wu-card-head">Personalized Mentorship!</div>
            <div className="home-wu-card-text">
              Elevate your skills with expert 1:1 support on your side.
            </div>
          </div>
        </div>
        <div
          className={`home-wu-card home-wu-card4 ${
            active === 4 && "home-wu-card-active4"
          }`}
          onClick={() => setActive(4)}
        >
          <div className="home-wu-img-cont">
            <img src={inter} alt="grad" />
          </div>
          <div className="home-wu-card-text-cont">
            <div className="home-wu-card-head">Internship Opportunities! </div>
            <div className="home-wu-card-text">
              Seize exclusive internship opportunities and turn learning into
              action.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
