import React, { useEffect, useState } from "react";
import "./styles/FloatSelected.css";
import useCart from "../../contexts/Cart";
import { useNavigate } from "react-router-dom";
const FloatSelected = () => {
  const [price, setPrice] = useState(0);
  const { selectedCourse } = useCart();
  const navigate = useNavigate();
  useEffect(() => {
    if (selectedCourse?.length !== 0) {
      let newPrice;
      if (selectedCourse?.length < 4) {
        newPrice = selectedCourse?.length * 699;
      } else {
        newPrice = selectedCourse?.length * 375 - 1;
      }
      setPrice(Math.min(newPrice, 4499));
    } else {
      setPrice(0);
    }
  }, [selectedCourse]);
  return (
    <div className="float-s-cont">
      <div className="float-s-inner-cont">
        <div className="flc-course-cont">
          {selectedCourse?.length}
          <span>Selected Courses</span>
        </div>
        <div className="flc-price-cont">
          ₹ {price} <span>Total Price</span>
        </div>
        {selectedCourse?.length > 0 ? (
          <div className="flc-cta" onClick={() => navigate("/payment")}>
            Proceed
          </div>
        ) : (
          <div className="flc-cta">Add Course</div>
        )}
      </div>
    </div>
  );
};

export default FloatSelected;
