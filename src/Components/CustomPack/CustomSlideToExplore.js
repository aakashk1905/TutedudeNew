import React from "react";
import "./styles/CustomSlideToExplore.css";
import ReactSlider from "react-slider";
import hotdeal from "../../Assests/hotdeal.png";
const CustomSlideToExplore = () => {
  return (
    <div className="cust-slide-cont">
      <div className="cust-slide-head">
        Slide to explore prices for all course packs
      </div>
      <div className="cslide-cont">
        <ReactSlider
          className="horizontal-slider"
          marks
          markClassName="example-mark"
          min={0}
          max={6}
          thumbClassName="example-thumb"
          renderThumb={(props, state) => (
            <div {...props}>
              <div className="thumb-cont">
                <div className="thumb-card">
                  <div className="thumb-courses">
                    {state.value === 6 ? 25 : state.value + 4}
                  </div>
                  <div className="thumb-cp">
                    {state.value === 6 ? "All Access" : "Course Price"}
                  </div>
                  <div className="thumb-op">Offer Prize</div>
                  <div className="thumb-offerp">
                    ₹{" "}
                    {`${
                      state.value === 6 ? 4499 : (state.value + 4) * 375 - 1
                    }`}
                    <img src={hotdeal} alt=""/>
                  </div>
                  <div className="thumb-ogp">
                    ₹{" "}
                    {`${
                      state.value === 6
                        ? 25 * 699 - 1
                        : (state.value + 4) * 699 - 1
                    }`}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="57"
                    height="50"
                    viewBox="0 0 57 50"
                    fill="none"
                    className="thumb-tri"
                  >
                    <g filter="url(#filter0_d_362_4155)">
                      <path
                        d="M28.5546 32.2793L13.1959 9.79785L43.8588 9.7607L28.5546 32.2793Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_362_4155"
                        x="0.0958614"
                        y="0.660742"
                        width="56.8629"
                        height="48.7186"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood
                          floodOpacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="6.55" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_362_4155"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_362_4155"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
                <svg
                  className="thumb-circle"
                  xmlns="http://www.w3.org/2000/svg"
                  width="53"
                  height="53"
                  viewBox="0 0 53 53"
                  fill="none"
                >
                  <circle
                    cx="26.3497"
                    cy="26.3497"
                    r="26.3497"
                    fill="#9665E6"
                  />
                  <circle
                    cx="26.3493"
                    cy="26.3495"
                    r="11.0301"
                    fill="#F4E9F4"
                    className="thumb-inner-circle"
                  />
                </svg>
              </div>
            </div>
          )}
        />
      </div>
      <div className="cust-sl-details-cont">
        <div className="cust-sl-det">
          Refund Validity
          <span>12 Months</span>
        </div>
        <div className="cust-sl-det">
          Price per course
          <span>Rs.375</span>
        </div>
        <div className="cust-sl-det">
          Course access
          <span>Lifetime!</span>
        </div>
        <div className="cust-dashed"></div>
        <div className="cust-sl-det cust-sl-det-col">
          Flat 45% off
          <span>on each course!</span>
        </div>
      </div>
    </div>
  );
};

export default CustomSlideToExplore;
