import React from "react";
import "./styles/StipendCard.css";
import stipendcard from "../../Assests/stipendcard.svg";
const StipendCard = () => {
  return (
    <div className="stipend-cont">
      <div className="stipend-inner-cont">
        <div className="stipend-left">
          <div className="stipend-left-head">india’s first stipend guaranteed internship programme</div>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M21.91 11.58L12.91 2.58C12.55 2.22 12.05 2 11.5 2H4.5C3.4 2 2.5 2.9 2.5 4V11C2.5 11.55 2.72 12.05 3.09 12.42L12.09 21.42C12.45 21.78 12.95 22 13.5 22C14.05 22 14.55 21.78 14.91 21.41L21.91 14.41C22.28 14.05 22.5 13.55 22.5 13C22.5 12.45 22.27 11.94 21.91 11.58ZM13.5 20.01L4.5 11V4H11.5V3.99L20.5 12.99L13.5 20.01Z"
                fill="white"
              />
              <path
                d="M7 8C7.82843 8 8.5 7.32843 8.5 6.5C8.5 5.67157 7.82843 5 7 5C6.17157 5 5.5 5.67157 5.5 6.5C5.5 7.32843 6.17157 8 7 8Z"
                fill="white"
              />
            </svg>
            Learn More
          </button>
        </div>
        <div className="stipend-right">
          <img src={stipendcard} alt="stipendcard"></img>
        </div>
      </div>
    </div>
  );
};

export default StipendCard;
