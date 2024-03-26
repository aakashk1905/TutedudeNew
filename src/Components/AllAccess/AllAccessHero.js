import React, { useEffect, useState } from "react";
import "../CustomPack/styles/CustomHero.css";
import customheroright from "../../Assests/Allaccessright.png";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import useCart from "../../contexts/Cart";
import courses from "../../contents/Courses.json";
const AllAccessHero = ({ setShowLogin }) => {
  const navigate = useNavigate();
  const [name, setName] = useState(Cookies.get("user_name"));
  const { setSelectedCourse } = useCart();
  useEffect(() => {
    setName(Cookies.get("user_name"));
  }, []);
  return (
    <div className="custom-phero">
      <div className="custom-main">
        <div className="custom-left">
          <div className="ch-head">
            Unlock Wisdom with{" "}
            <b className="ch-head-col">
              Lifetime Access To Our Premium Courses !
            </b>
          </div>
          <div className="ch-text">
            Elevate your skills at an unbeatable price
            <b style={{ color: "#3CAE42" }}> just ₹4,499!</b>
          </div>
          <div
            className="home-hero-cta pointer"
            onClick={() => {
              if (!name) {
                setShowLogin(true);
              } else {
                setSelectedCourse(courses);
                navigate(`/packpayment`);
              }
            }}
          >
            Enroll Now
          </div>
        </div>
        <div className="custom-right">
          <img src={customheroright} alt="customright"></img>
        </div>
      </div>
    </div>
  );
};

export default AllAccessHero;
