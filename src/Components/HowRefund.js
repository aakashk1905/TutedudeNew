import React from "react";
import "./Styles/Howrefund.css";
import img1 from "../Assests/howcard1.svg";
import img2 from "../Assests/howcard2.svg";
import img3 from "../Assests/howcard3.svg";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
const HowRefund = ({ bought, setShowLogin, setRedirect, slug, cname }) => {
  const name = Cookies.get("user_name");
  const navigate = useNavigate();
  return (
    <div className="hr-cont">
      <div className="hr-head">How 100% refund works?</div>
      <div className="hr-inner-cont">
        <div className="hr-card-cont">
          <div className="hr-cards">
            <div className="hr-step">STEP 1</div>
            <div className="hr-card-head">Enroll</div>
            <div>
              <img src={img1} alt="Img 1" />
            </div>
            <div className="hr-card-text">
              Enroll into {cname} Course by paying{" "}
            </div>
            <div className="hr-card-price-text">Rs. 699 </div>
            {/* <div className="hr-card-btn">Enroll Now</div> */}
            {bought ? (
              <div
                className="hr-card-btn"
                onClick={() => window.open("https://tutedude.com/dashboard")}
              >
                Got to Dashboard
              </div>
            ) : (
              <div
                className="hr-card-btn"
                onClick={() => {
                  if (!name) {
                    setRedirect(`/payment/${slug}`);
                    setShowLogin(true);
                  } else {
                    navigate(`/payment/${slug}`);
                  }
                }}
              >
                Enroll Now
              </div>
            )}
            <div className="hr-card-btm-color"></div>
          </div>
        </div>
        <div className="hr-card-cont">
          <div className="hr-cards" style={{ alignSelf: "end" }}>
            <div className="hr-step">STEP 2</div>
            <div className="hr-card-head">Complete Course</div>
            <div>
              <img src={img2} alt="Img 1" />
            </div>
            <li className="hr-card-text1">
              In <b className="hr-col">3 Months</b> time with Assignments from
              Date of enrollment.
            </li>
            <li className="hr-card-text1">
              <b className="hr-col">Refund validity </b>: 3 months from the date
              of enrollment
            </li>
            <li className="hr-card-text1">
              <b className="hr-col">Course validity </b>: Lifetime
            </li>
            <div className="hr-card-btm-color"></div>
          </div>
        </div>
        <div className="hr-card-cont">
          <div className="hr-cards">
            <div className="hr-step">STEP 3</div>
            <div className="hr-card-head">Refund Awarded</div>
            <div>
              <img src={img3} alt="Img 1" />
            </div>
            <li className="hr-card-text1">
              <b className="hr-col">100% </b>fee will Return in your{" "}
              <b className="hr-col">source Account</b>
            </li>
            <li className="hr-card-text1">
              <b className="hr-col">get Assured certification </b>
            </li>
            <li className="hr-card-text1">
              You can access the course even after receiving a refund.
            </li>
            <div className="hr-card-btm-color"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowRefund;
