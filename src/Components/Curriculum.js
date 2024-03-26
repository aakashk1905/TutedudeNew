import React, { useState } from "react";
import curr1 from "../Assests/curr1.svg";
import curr2 from "../Assests/curr2.svg";
import curr3 from "../Assests/curr3.svg";
import "./Styles/IntroCurric.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
const Curriculum = ({
  bought,
  setShowLogin,
  details,
  topics2,
  topics1,
  slug,
  setRedirect,
}) => {
  const name = Cookies.get("user_name");
  const [viewMore, setViewMore] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="icurr-cont">
      <div className="icurr-inner-cont">
        <div className="icurr-head">Explore Our Curriculum</div>
        <div className="icurr-details-cont">
          <div className="curr-det-cont">
            <div className="icurr-det-img-cont">
              <img className="icurr-det-img" src={curr1} alt="curr1"></img>
            </div>
            <div className="curr-det-head-cont">
              <div className="curr-det-head">{details.enrolled}</div>
              <div className="curr-det-text">Students Enrolled</div>
            </div>
          </div>
          <div className="curr-det-cont">
            <div className="icurr-det-img-cont">
              <img className="icurr-det-img" src={curr2} alt="curr1"></img>
            </div>
            <div className="curr-det-head-cont">
              <div className="curr-det-head">{details.duration}</div>
              <div className="curr-det-text">Content</div>
            </div>
          </div>
          <div className="curr-det-cont">
            <div className="icurr-det-img-cont">
              <img className="icurr-det-img" src={curr3} alt="curr1"></img>
            </div>
            <div className="curr-det-head-cont">
              <div className="curr-det-head">Simple</div>
              <div className="curr-det-text">English</div>
            </div>
          </div>
        </div>
        <div className="icurr-main-cont">
          <div className="icurr-main-left">
            {viewMore
              ? topics1.map((topic, i) => (
                  <LectrureList key={i} topic={topic} ind={i + 1} />
                ))
              : topics1
                  .slice(0, 5)
                  .map((topic, i) => (
                    <LectrureList key={i} topic={topic} ind={i + 1} />
                  ))}
          </div>
          <div className="icurr-main-right">
            {viewMore
              ? topics2.map((topic, i) => (
                  <LectrureList
                    key={i}
                    topic={topic}
                    ind={i + topics1.length + 1}
                  />
                ))
              : topics2
                  .slice(0, 5)
                  .map((topic, i) => (
                    <LectrureList key={i} topic={topic} ind={i + 5 + 1} />
                  ))}
          </div>
        </div>
        {!viewMore ? (
          <div className="curr-see-more" onClick={() => setViewMore(true)}>
            See More
          </div>
        ) : (
          <div className="curr-see-more" onClick={() => setViewMore(false)}>
            See Less
          </div>
        )}

        {bought ? (
          <div
            className="curr-btn"
            onClick={() => window.open("https://tutedude.com/dashboard")}
          >
            Got to Dashboard
          </div>
        ) : (
          <div
            className="curr-btn"
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
      </div>
    </div>
  );
};

const LectrureList = ({ topic, ind }) => {
  const [topicClicked, setTopicClicked] = useState(ind === 2 ? true : false);

  return (
    <div style={{ width: "90%" }}>
      <div
        className={`ileclist-topic ${topicClicked ? "ilec-active" : ""}`}
        onClick={() => setTopicClicked(!topicClicked)}
      >
        <div className="ilec-dev-cont">
          <div className="ilec-head-cont">
            <div className="ilec-num">{`${ind <= 9 ? "0" + ind : ind}`}</div>
            <p>{topic.section_name}</p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            className={`${topicClicked ? "invert" : ""}`}
          >
            <path
              d="M43.9999 19.9999C43.219 19.219 41.9529 19.219 41.1719 19.9999L35.4142 25.7577C34.6331 26.5388 33.3668 26.5388 32.5857 25.7577L26.8279 19.9999C26.047 19.219 24.7809 19.219 23.9999 19.9999C23.219 20.7809 23.219 22.047 23.9999 22.8279L32.5857 31.4137C33.3668 32.1948 34.6331 32.1948 35.4142 31.4137L43.9999 22.8279C44.7809 22.047 44.7809 20.7809 43.9999 19.9999Z"
              fill="#7C43D7"
              fillOpacity="0.51"
            />
          </svg>
        </div>

        {topicClicked && (
          <div style={{ width: "90%" }}>
            {topic.section_lectures.map((lec, i) => (
              <div className="ileclist-quesDiv" key={i}>
                <div className="icurr-video">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                  >
                    <circle
                      cx="7.5"
                      cy="7"
                      r="6.5"
                      fill="white"
                      stroke="#7530E4"
                    />
                    <path
                      d="M4 7L6.0299 9.14796"
                      stroke="#9665E6"
                      strokeLinecap="round"
                    />
                    <path
                      d="M6.26628 8.92639L10.9558 5.22216"
                      stroke="#9665E6"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <span> {lec}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Curriculum;
