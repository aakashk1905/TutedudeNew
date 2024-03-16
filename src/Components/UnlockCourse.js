import React from "react";
import "./Styles/UnlockCourse.css";
import uc1 from "../Assests/uc1.png";
import uc2 from "../Assests/uc2.png";
import uc3 from "../Assests/uc3.png";
import uc4 from "../Assests/uc4.png";
import uc5 from "../Assests/uc5.png";
import uc6 from "../Assests/uc6.png";
import ucyellow from "../Assests/ucyellow.svg";
import ucgreen from "../Assests/ucgreen.svg";
import ucred from "../Assests/ucred.svg";
import ucblue from "../Assests/ucblue.svg";
const UnlockCourse = () => {
  return (
    <div className="uc-cont">
      <div className="uc-head">unlock Course benefits</div>
      <div className="uc-cards-cont">
        <div className="uc-bg-circle1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="164"
            height="160"
            viewBox="0 0 164 160"
            fill="none"
          >
            <path
              d="M164 80C164 100.392 156.018 120.014 141.686 134.856C127.354 149.699 107.753 158.642 86.8888 159.858C66.0245 161.073 45.4719 154.47 29.4307 141.397C13.3895 128.324 3.07075 109.769 0.582929 89.5221C-1.90489 69.2754 3.62605 48.866 16.0455 32.4646C28.465 16.0631 46.8356 4.90762 67.4032 1.2777C87.9708 -2.35221 109.183 1.81744 126.705 12.9346C144.227 24.0518 156.736 41.2773 161.677 61.0912L82 80H164Z"
              fill="#CFAAFF"
              fillOpacity="0.26"
            />
          </svg>
        </div>
        <div className="uc-bg-circle2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="116"
            height="117"
            viewBox="0 0 116 117"
            fill="none"
          >
            <ellipse
              cx="58"
              cy="58.5"
              rx="58"
              ry="58.5"
              fill="#CFAAFF"
              fillOpacity="0.26"
            />
          </svg>
        </div>
        <div className="uc-card">
          <div className="uc-card-img-cont">
            <img className="uc-card-img" src={uc1} alt="uc1" />
            <img className="uc-card-img-col" src={ucyellow} alt="ucyellow" />
          </div>
          <div className="uc-card-head">Project Creation</div>
          <div className="uc-card-text">
            Master the Art of Showcasing Your Design Projects Effectively and
            Professionally
          </div>
        </div>
        <div className="uc-card">
          <div className="uc-card-img-cont">
            <img className="uc-card-img" src={uc2} alt="uc1" />
            <img className="uc-card-img-col" src={ucgreen} alt="ucyellow" />
          </div>
          <div className="uc-card-head">Internship opportunities</div>
          <div className="uc-card-text">
            Gain real-world experience through Awesome internship Opportunities
          </div>
        </div>
        <div className="uc-card">
          <div className="uc-card-img-cont">
            <img className="uc-card-img" src={uc3} alt="uc1" />
            <img className="uc-card-img-col" src={ucyellow} alt="ucyellow" />
          </div>
          <div className="uc-card-head">Assignments based learning </div>
          <div className="uc-card-text">
            Learn by doing practical assignments for a deeper understanding of
            the subject.
          </div>
        </div>
        <div className="uc-card">
          <div className="uc-card-img-cont">
            <img className="uc-card-img" src={uc4} alt="uc1" />
            <img className="uc-card-img-col" src={ucred} alt="ucyellow" />
          </div>
          <div className="uc-card-head">Lifetime course access</div>
          <div className="uc-card-text">
            Get access to course materials forever to keep learning and
            improving your skills.
          </div>
        </div>
        <div className="uc-card">
          <div className="uc-card-img-cont">
            <img className="uc-card-img" src={uc5} alt="uc1" />
            <img className="uc-card-img-col" src={ucblue} alt="ucyellow" />
          </div>
          <div className="uc-card-head">Instant 1:1 Mentor Support</div>
          <div className="uc-card-text">
            Ask your doubts whenever want, and get it solved within 5-10 minutes
          </div>
        </div>
        <div className="uc-card">
          <div className="uc-card-img-cont">
            <img className="uc-card-img" src={uc6} alt="uc1" />
            <img className="uc-card-img-col" src={ucgreen} alt="ucyellow" />
          </div>
          <div className="uc-card-head">
            Learn anytime, anywhere at your pace
          </div>
          <div className="uc-card-text">
            its your learning adventure, tailored to your schedule and
            preferences
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnlockCourse;
