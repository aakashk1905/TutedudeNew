import React, { useEffect, useState } from "react";
import "./AllAccessBenefits.css";
import uc6 from "../../Assests/uc6.png";
import uc9 from "../../Assests/uc9.png";
import uc4 from "../../Assests/uc4_cpy.png";
import ucyellow from "../../Assests/ucyellow.svg";
import ucgreen from "../../Assests/ucgreen.svg";
import ucred from "../../Assests/ucred.svg";
import { useNavigate } from "react-router-dom";
import courses from "../../contents/Courses.json";
import Cookies from "js-cookie";
import useCart from "../../contexts/Cart";
const AllAccessBenefits = ({ setShowLogin }) => {
  const navigate = useNavigate();
  const [name, setName] = useState(Cookies.get("user_name"));
  const { setSelectedCourse } = useCart();
  useEffect(() => {
    setName(Cookies.get("user_name"));
  }, []);
  return (
    <div className="allben-cont">
      <div className="hr-head">Explore exclusive benefits </div>
      <div className="allben-cards-cont">
        <div className="uc-card uc-all-card">
          <div className="uc-card-img-cont">
            <img className="uc-card-img" src={uc6} alt="uc1" />
            <img className="uc-card-img-col" src={ucgreen} alt="ucyellow" />
          </div>
          <div
            className="uc-card-head all-uc-card-head"
            style={{ textAlign: "center" }}
          >
            Learn at your own pace
          </div>
          <div
            className="uc-card-text uc-card-text-all"
            style={{ textAlign: "center" }}
          >
            Study when it suits you, Mastering courses at your speed for
            effective learning
          </div>
        </div>

        <div className="uc-card uc-all-card">
          <div className="uc-card-img-cont">
            <img className="uc-card-img" src={uc9} alt="uc1" />
            <img className="uc-card-img-col" src={ucyellow} alt="ucyellow" />
          </div>
          <div
            className="uc-card-head all-uc-card-head"
            style={{ textAlign: "center", fontSize: "20px" }}
          >
            Refund upon completion
          </div>
          <div
            className="uc-card-text uc-card-text-all"
            style={{ textAlign: "center", fontSize: "14px" }}
          >
            get Refund of Rs.200 for every course you complete.
            <br />
            Complete all 23 courses for full refund
          </div>
        </div>
        <div className="uc-card uc-all-card">
          <div className="uc-card-img-cont">
            <img className="uc-card-img" src={uc4} alt="uc1" />
            <img className="uc-card-img-col" src={ucred} alt="ucyellow" />
          </div>
          <div
            className="uc-card-head all-uc-card-head"
            style={{ textAlign: "center" }}
          >
            Lifetime opportunity
          </div>
          <div
            className="uc-card-text uc-card-text-all"
            style={{ textAlign: "center" }}
          >
            No Rush! this offer is for a lifetime, so enhance your skills worry
            free
          </div>
        </div>
      </div>
      <div className="allben-btm-text">
        Don't miss out! <br />
        Enroll now to unlock a world of knowledge!{" "}
      </div>
      <div
        className="allben-cta pointer"
        onClick={() => {
          if (!name) {
            setShowLogin(true);
          } else {
            setSelectedCourse(courses);
            navigate(`/packpayment`);
          }
        }}
      >
        Enroll Now{" "}
      </div>
    </div>
  );
};

export default AllAccessBenefits;
