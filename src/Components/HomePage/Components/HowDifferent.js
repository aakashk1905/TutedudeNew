import React from "react";
import "./styles/HowDifferent.css";
import logo from "../Assests/logo.png";
import present from "../Assests/present.svg";
import notpresent from "../Assests/not-present.svg";
const HowDifferent = () => {
  return (
    <div className="hd-cont">
      <div className="home-hr-head">
        How are we <b className="home-hr-head-col">different from others?</b>
      </div>
      <div className="hd-tb-cont">
        <div className="hd-tb">
          <div className="hd-tb-td hd-first-w hd-tb-head">Features</div>
          <div className="hd-tb-td">
            <img src={logo} alt="logo"></img>
          </div>
          <div className="hd-tb-td hd-tb-text">Recorded Class Platform</div>
          <div className="hd-tb-td hd-tb-text">Live Class Platform</div>
        </div>
        <div className="hd-tb">
          <div className="hd-tb-td hd-first-w">Affordability</div>
          <div className="hd-tb-td hd-tick">
            <img src={present} alt="logo"></img>
          </div>
          <div className="hd-tb-td hd-tick">
            <img src={present} alt="logo"></img>
          </div>
          <div className="hd-tb-td hd-tick">
            <img src={notpresent} alt="logo"></img>
          </div>
        </div>
        <div className="hd-tb">
          <div className="hd-tb-td hd-first-w">Learning Flexibility</div>
          <div className="hd-tb-td hd-tick">
            <img src={present} alt="logo"></img>
          </div>
          <div className="hd-tb-td hd-tick">
            <img src={present} alt="logo"></img>
          </div>
          <div className="hd-tb-td hd-tick">
            <img src={notpresent} alt="logo"></img>
          </div>
        </div>
        <div className="hd-tb">
          <div className="hd-tb-td hd-first-w">Instant Doubt Solving</div>
          <div className="hd-tb-td hd-tick">
            <img src={present} alt="logo"></img>
          </div>
          <div className="hd-tb-td hd-tick">
            <img src={notpresent} alt="logo"></img>
          </div>
          <div className="hd-tb-td hd-tick">
            <img src={present} alt="logo"></img>
          </div>
        </div>
        <div className="hd-tb">
          <div className="hd-tb-td hd-first-w">Personal Mentorship</div>
          <div className="hd-tb-td hd-tick">
            <img src={present} alt="logo"></img>
          </div>
          <div className="hd-tb-td hd-tick">
            <img src={notpresent} alt="logo"></img>
          </div>
          <div className="hd-tb-td hd-tick">
            <img src={notpresent} alt="logo"></img>
          </div>
        </div>
        <div className="hd-tb">
          <div className="hd-tb-td hd-first-w">Dedicated Projects</div>
          <div className="hd-tb-td hd-tick">
            <img src={present} alt="logo"></img>
          </div>
          <div className="hd-tb-td hd-tick">
            <img src={present} alt="logo"></img>
          </div>
          <div className="hd-tb-td hd-tick">
            <img src={present} alt="logo"></img>
          </div>
        </div>
        <div className="hd-tb">
          <div className="hd-tb-td hd-first-w">Guaranteed Paid Internship</div>
          <div className="hd-tb-td hd-tick">
            <img src={present} alt="logo"></img>
          </div>
          <div className="hd-tb-td hd-tick">
            <img src={notpresent} alt="logo"></img>
          </div>
          <div className="hd-tb-td hd-tick">
            <img src={notpresent} alt="logo"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowDifferent;
