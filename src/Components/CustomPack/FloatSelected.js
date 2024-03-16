import React, { useEffect, useState } from "react";
import "./styles/FloatSelected.css";
const FloatSelected = ({ selectedCourse }) => {
  const [price, setPrice] = useState(0);

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
          <span>Courses</span>
        </div>
        <div className="flc-price-cont">
          {price} <span>Total</span>
        </div>
        {selectedCourse?.length > 0 ? (
          <div className="flc-cta">Continue</div>
        ) : (
          <div className="flc-cta">Add Course</div>
        )}
      </div>
    </div>
  );
};

export default FloatSelected;
