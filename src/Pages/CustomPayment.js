import React, { useEffect, useState } from "react";
import logo from "../Assests/logo.png";
import pmtuiux from "../Assests/pmtuiux.svg";
import razorpay from "../Assests/razorpay.svg";
import secure1 from "../Assests/secure1.svg";
import secure2 from "../Assests/secure2.svg";
import "./Payment.css";
import contents from "../contents/Contents.json";
import axios from "axios";
import Cookies from "js-cookie";

import useCart from "../contexts/Cart";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
const CustomPayment = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [price, setPrice] = useState("");
  const [courses, setCourses] = useState("");
  const navigate = useNavigate();

  const { selectedCourse } = useCart();
  useEffect(() => {
    window.fbq("track", "AddToCart");
    const name = Cookies.get("user_name");
    const email = Cookies.get("user_email");
    if (!name || !email) {
      navigate("/");
    } else {
      setName(name);
      setEmail(email);
    }
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
    const slugString = selectedCourse.map((obj) => obj.slug).join(",");
    setCourses(slugString);
   
  }, [selectedCourse]);
  const [onit, setOnit] = useState(1);
  const [completed, setCompleted] = useState([]);

  const [discount, setDiscount] = useState(0);
  const [coupon, setCoupon] = useState("");
  const [applied, setApplied] = useState(false);

  var coupons = {
    OFF200: 200,
    DevTest: 698,
    ANUDEEPA50: 300,
    NAVNEETA50: 300,
    MANTRA30: 200,
    GENERIC30: 300,
    HTA30: 300,
    EXCEL200: 200,
    SKILL100: 100,
    PREP200: 200,
    INFOHOOP: 200,
    HACK200: 200,
    TD100: 100,
    DUDE30: 200,
    Dude30: 200,
    dude30: 200,
    DUDE300: 300,
    JEET200: 200,
    SRMKZILLA: 300,
    DIWALI300: 300,
  };
  const feesback = ["3MONTHSREFUND", "3MONTHREFUND", "FEESBACK", "LEARNIT"];

  const handleInputChange = (e) => {
    setApplied(false);
    setDiscount(0);
    setCoupon(e.target.value);
  };
  const handleApply = () => {
    if (
      feesback.findIndex(
        (fees) => fees.toLocaleLowerCase() === coupon.toLocaleLowerCase()
      ) !== -1
    ) {
      alert(
        "Congrats! You are eligible to get 100% feesback on completing this course within 3 months :)"
      );
      setDiscount(0);
      setApplied(true);
    } else if (coupons[coupon]) {
      setDiscount(coupons[coupon]);
      setApplied(true);
    } else if (!coupons[coupon]) {
      alert("Please Enter a Valid Coupon");
      setDiscount(0);
    }
  };

  const checkoutHandler = async (amount, name, email, courses, coupon) => {
    const {
      data: { key },
    } = await axios.get("https://api.tutedude.com/lms/API/getkey");

    const {
      data: { order },
    } = await axios.post("https://api.tutedude.com/lms/API/checkout", {
      amount,
      name,
      email,
    });

    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "TuteDude",
      description: "TuteDude Course Purchase",
      image: logo,
      order_id: order.id,
      callback_url: `https://api.tutedude.com/lms/API/paymentverification?name=${name}&email=${email}&course=${courses}&amount=${amount}&coupon=${coupon}`,
      prefill: {
        name,
        email,
      },
      notes: {
        name,
        email,
      },
      theme: {
        color: "#121212",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
  };

  return (
    <>
      <Helmet>
        <title>Razorpay Payment</title>
      </Helmet>
      <div className="pmt-cont">
        <div className="pmt-nav">
          <div className="pmt-logo-cont">
            <img src={logo} alt="Logo" />
          </div>
          <div className="pmt-stepper-cont ">
            <div
              className={`pmt-steps ${onit === 1 ? "onit" : ""} ${
                completed.includes(1) ? "completed" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  className="stroke"
                  cx="12"
                  cy="12"
                  r="11"
                  fill="white"
                  stroke="#d1d1d1"
                  strokeWidth="2"
                />
                <circle cx="12" cy="12" r="7" fill="#d1d1d1" className="fill" />
              </svg>
              <span>Your Cart </span>
            </div>
            <div
              className={`stepper-dots ${
                completed.includes(1) ? "done-bar" : ""
              }`}
            ></div>
            <div
              className={`pmt-steps ${onit === 2 ? "onit" : ""} ${
                completed.includes(2) ? "completed" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  className="stroke"
                  cx="12"
                  cy="12"
                  r="11"
                  fill="white"
                  stroke="#d1d1d1"
                  strokeWidth="2"
                />
                <circle cx="12" cy="12" r="7" fill="#d1d1d1" className="fill" />
              </svg>
              <span>Payment</span>
            </div>
            <div
              className={`stepper-dots ${
                completed.includes(2) ? "done-bar" : ""
              }`}
            ></div>

            <div
              className={`pmt-steps ${onit === 3 ? "onit" : ""} ${
                completed.includes(3) ? "completed" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  className="stroke"
                  cx="12"
                  cy="12"
                  r="11"
                  fill="white"
                  stroke="#d1d1d1"
                  strokeWidth="2"
                />
                <circle cx="12" cy="12" r="7" fill="#d1d1d1" className="fill" />
              </svg>
              <span>Confirmed</span>
            </div>
          </div>
        </div>
        <div className="pmt-inner-cont">
          <div className="pmt-left-cont">
            <div className="pmt-left-card-cont">
              <div className="pmt-left-head">Purchase summary </div>
              <div className="pmt-cards-cont">
                {selectedCourse &&
                  selectedCourse.map((course, ind) => (
                    <div
                      className="pmt-summary-cont"
                      style={{
                        height: "150px",
                        minHeight: "100px",
                        overflow: "hidden",
                      }}
                      key={ind}
                    >
                      <div className="pmt-summary-img-cont">
                        <img src={pmtuiux} alt="pmtuiux"></img>
                      </div>
                      <div className="pmt-summary-right-cont">
                        <div className="pmt-course-head-cont">
                          <div className="pmt-course-head">
                            {contents[course.slug]?.name}
                          </div>
                          <div className="pmt-course-text">Rs. 699</div>
                        </div>
                        {/* <div className="pmt-course-desc">
                        {contents[course.slug]?.paymentInfo}
                      </div> */}
                        <div className="pmt-course-det-cont">
                          <div className="pmt-course-det">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="17"
                              viewBox="0 0 16 17"
                              fill="none"
                            >
                              <g clip-path="url(#clip0_724_1931)">
                                <path
                                  d="M12.3333 16.5H3.66667C2.69453 16.4989 1.76252 16.1123 1.07511 15.4249C0.387707 14.7375 0.00105878 13.8055 0 12.8333L0 4.16667C0.00105878 3.19453 0.387707 2.26252 1.07511 1.57511C1.76252 0.887707 2.69453 0.501059 3.66667 0.5L12.3333 0.5C13.3055 0.501059 14.2375 0.887707 14.9249 1.57511C15.6123 2.26252 15.9989 3.19453 16 4.16667V12.8333C15.9989 13.8055 15.6123 14.7375 14.9249 15.4249C14.2375 16.1123 13.3055 16.4989 12.3333 16.5ZM3.66667 2.5C3.22464 2.5 2.80072 2.67559 2.48816 2.98816C2.17559 3.30072 2 3.72464 2 4.16667V12.8333C2 13.2754 2.17559 13.6993 2.48816 14.0118C2.80072 14.3244 3.22464 14.5 3.66667 14.5H12.3333C12.7754 14.5 13.1993 14.3244 13.5118 14.0118C13.8244 13.6993 14 13.2754 14 12.8333V4.16667C14 3.72464 13.8244 3.30072 13.5118 2.98816C13.1993 2.67559 12.7754 2.5 12.3333 2.5H3.66667ZM5.328 6.726V10.274C5.328 10.4301 5.369 10.5835 5.4469 10.7187C5.52479 10.854 5.63684 10.9665 5.77185 11.0448C5.90685 11.1232 6.06007 11.1648 6.21617 11.1653C6.37227 11.1659 6.52578 11.1254 6.66133 11.048L10.2127 9.274C10.3491 9.19605 10.4626 9.08341 10.5415 8.94748C10.6204 8.81155 10.662 8.65717 10.662 8.5C10.662 8.34283 10.6204 8.18845 10.5415 8.05252C10.4626 7.91659 10.3491 7.80395 10.2127 7.726L6.66133 5.952C6.52578 5.87459 6.37227 5.83414 6.21617 5.8347C6.06007 5.83525 5.90685 5.87679 5.77185 5.95516C5.63684 6.03353 5.52479 6.14598 5.4469 6.28126C5.369 6.41654 5.328 6.5699 5.328 6.726Z"
                                  fill="#AE7CFF"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_724_1931">
                                  <rect
                                    width="16"
                                    height="16"
                                    fill="white"
                                    transform="translate(0 0.5)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                            <span>
                              {contents[course.slug]?.details?.lectures}{" "}
                              Lectures
                            </span>
                          </div>
                          <div className="pmt-course-det">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <g clip-path="url(#clip0_1379_2957)">
                                <path
                                  d="M8 0C6.41775 0 4.87104 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346629 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9977 5.87897 15.1541 3.84547 13.6543 2.34568C12.1545 0.845886 10.121 0.00229405 8 0V0ZM8 14C6.81332 14 5.65328 13.6481 4.66658 12.9888C3.67989 12.3295 2.91085 11.3925 2.45673 10.2961C2.0026 9.19975 1.88378 7.99335 2.11529 6.82946C2.3468 5.66557 2.91825 4.59647 3.75736 3.75736C4.59648 2.91824 5.66558 2.3468 6.82946 2.11529C7.99335 1.88378 9.19975 2.0026 10.2961 2.45672C11.3925 2.91085 12.3295 3.67988 12.9888 4.66658C13.6481 5.65327 14 6.81331 14 8C13.9982 9.59076 13.3655 11.1159 12.2407 12.2407C11.1159 13.3655 9.59076 13.9982 8 14Z"
                                  fill="#A66FFF"
                                />
                                <path
                                  d="M6.99903 7.3703L5.39903 8.3703C5.28769 8.44001 5.19117 8.53097 5.115 8.63799C5.03882 8.74501 4.98447 8.866 4.95507 8.99403C4.92566 9.12206 4.92177 9.25463 4.94361 9.38416C4.96545 9.5137 5.0126 9.63766 5.08237 9.74897C5.15207 9.86031 5.24304 9.95682 5.35006 10.033C5.45708 10.1092 5.57806 10.1635 5.70609 10.1929C5.83412 10.2223 5.96669 10.2262 6.09623 10.2044C6.22576 10.1825 6.34972 10.1354 6.46103 10.0656L8.3737 8.86563C8.5656 8.74538 8.72371 8.57823 8.83312 8.37994C8.94253 8.18165 8.99963 7.95877 8.99903 7.7323V5.18164C8.99903 4.91642 8.89368 4.66207 8.70614 4.47453C8.5186 4.287 8.26425 4.18164 7.99903 4.18164C7.73382 4.18164 7.47946 4.287 7.29193 4.47453C7.10439 4.66207 6.99903 4.91642 6.99903 5.18164V7.3703Z"
                                  fill="#A66FFF"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_1379_2957">
                                  <rect width="16" height="16" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            <span>
                              {contents[course.slug]?.details?.duration}{" "}
                              Duration
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="pmt-rzp-footer-cont">
                <img src={razorpay} alt="razorpay" />
                <img src={secure1} alt="secrure1" />
                <img src={secure2} alt="secure2" />
              </div>
            </div>
          </div>
          <div className="pmt-right-cont">
            <div className="pmt-right-card">
              <div className="pmt-card-upper">
                <div className="pmt-applied">
                  100% REFUND OFFER APPLIED
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_787_3015)">
                      <path
                        d="M21.41 11.58L12.41 2.58C12.05 2.22 11.55 2 11 2H4C2.9 2 2 2.9 2 4V11C2 11.55 2.22 12.05 2.59 12.42L11.59 21.42C11.95 21.78 12.45 22 13 22C13.55 22 14.05 21.78 14.41 21.41L21.41 14.41C21.78 14.05 22 13.55 22 13C22 12.45 21.77 11.94 21.41 11.58ZM13 20.01L4 11V4H11V3.99L20 12.99L13 20.01Z"
                        fill="#7530E4"
                      />
                      <path
                        d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z"
                        fill="#7530E4"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_787_3015">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="pmt-limited">for limited period only!!</div>
                <div className="pmt-ltd-text">
                  You are now eligible for getting 100% of your enrollment fee
                  back on your course completion within 3 months.
                </div>
              </div>
              <div className="pmt-card-mid">
                <div className="pmt-total-cont">
                  <span>Total </span>
                  <span>Rs {price}</span>
                </div>
                <div className="pmt-inp-cont">
                  <input
                    type="text"
                    className="pmt-inp"
                    placeholder="Enter coupon code"
                    value={coupon}
                    onChange={handleInputChange}
                  />
                  {!applied && <span onClick={handleApply}>Apply Coupon</span>}
                  {applied && <span type="disabled">Applied</span>}
                </div>
                <div className="pmt-total-cont2">
                  <span>Coupon discount</span>
                  <span>Rs {discount}</span>
                </div>
                <div className="pmt-total-cont1">
                  <span>To Pay </span>
                  <span>₹ {price - discount}</span>
                </div>
              </div>
              <div
                className="pmt-btn"
                onClick={() => {
                  setCompleted([...completed, 1]);
                  setOnit(2);

                  window.fbq("track", " InitiateCheckout");
                  checkoutHandler(
                    price - discount,
                    name,
                    email,
                    //   course.slug,
                    coupon
                  );
                }}
              >
                Proceed to Pay
              </div>
            </div>
          </div>
        </div>
        <div className="pmt-rzp-footer-cont-mob">
          <img src={razorpay} alt="razorpay" />
          <img src={secure1} alt="secrure1" />
          <img src={secure2} alt="secure2" />
        </div>
        <div className="pmt-mob-fix-cont">
          <div className="pmt-mob-fix">
            <span>Rs {price - discount}</span>
            <div
              className="pmt-fix-cta"
              onClick={() => {
                setCompleted([...completed, 1]);
                setOnit(2);

                window.fbq("track", " InitiateCheckout");
                //   checkoutHandler(699 - discount, name, email, course.slug, coupon);
                checkoutHandler(price - discount, name, email, courses, coupon);
              }}
            >
              proceed to pay
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomPayment;
