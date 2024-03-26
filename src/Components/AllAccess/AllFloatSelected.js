import React, { useEffect, useState } from "react";
import "../CustomPack/styles/FloatSelected.css";

import useCart from "../../contexts/Cart";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import courses from "../../contents/Courses.json";
const AllFloatSelected = ({ setShowLogin }) => {
  const { setSelectedCourse } = useCart();

  const [name, setName] = useState(Cookies.get("user_name"));
  useEffect(() => {
    setName(Cookies.get("user_name"));
  }, []);
  const navigate = useNavigate();

  return (
    <div className="float-s-cont">
      <div className="float-s-inner-cont">
        <div className="flc-course-cont">
          25
          <span>Selected Courses</span>
        </div>
        <div className="flc-price-cont">
          ₹ 4499 <span>Total Price</span>
        </div>

        <div
          className="flc-cta pointer"
          onClick={() => {
            if (!name) {
              setShowLogin(true);
            } else {
              setSelectedCourse(courses);
              navigate(`/packpayment`);
            }
          }}
        >
          Proceed
        </div>
      </div>
    </div>
  );
};

export default AllFloatSelected;
