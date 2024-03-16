import React from "react";
import "./styles/Internship.css";
import intgrad from "../Assests/intgrad.svg";
import int2 from "../Assests/int2.svg";
import int3 from "../Assests/int3.svg";
import int4 from "../Assests/int4.svg";
import int5 from "../Assests/int5.svg";

import "react-multi-carousel/lib/styles.css";
import Slider from "./Slider";

const Internship = () => {
  return (
    <div className="int-cont">
      <div className="home-wu-top">
        <div className="home-hr-head">
          Guaranteed<b className="home-hr-head-col"> Internship Program</b>
        </div>
        <div className="vr-text">
          Explore a wide range of courses where learning is fun, easy, and
          absolutely free!
        </div>
      </div>
      <div className="int-cir-outer-cont">
        <div className="int-cir-cont">
          <div className="int-img-cir">
            <img src={intgrad} alt="intgrad"></img>
          </div>
          <div className="int-cir-text">5 Tracks</div>
        </div>
        <div className="int-cir-cont">
          <div className="int-img-cir">
            <img src={int2} alt="intgrad"></img>
          </div>
          <div className="int-cir-text">5k - 20k Stipend</div>
        </div>
        <div className="int-cir-cont">
          <div className="int-img-cir">
            <img src={int3} alt="intgrad"></img>
          </div>
          <div className="int-cir-text">LifeTime Access</div>
        </div>
        <div className="int-cir-cont">
          <div className="int-img-cir">
            <img src={int4} alt="intgrad"></img>
          </div>
          <div className="int-cir-text">Resume Building</div>
        </div>
        <div className="int-cir-cont">
          <div className="int-img-cir">
            <img src={int5} alt="intgrad"></img>
          </div>
          <div className="int-cir-text">Skill Certificates</div>
        </div>
      </div>
      <Slider />
    </div>
  );
};

export default Internship;
