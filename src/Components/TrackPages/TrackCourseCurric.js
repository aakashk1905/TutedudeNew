import React from "react";
import "./styles/TrackCourseCurric.css";
import ccbtm1 from "./Assests/ccbtm1.gif";
import ccbtm2 from "./Assests/ccbtm2.gif";
import ccbtm3 from "./Assests/ccbtm3.gif";
const TrackCourseCurric = ({ data }) => {
  return (
    <div className="track-cc-cont">
      <div className="track-cc-top">
        <div className="track-cc-top-sub-head">
          {data.curricSubHead} Course Learning Path
        </div>
        <div className="track-cc-top-head">
          <b>{data.curricHead}</b> Course Curriculum
        </div>
      </div>
      <div className="track-cc-mid">
        {/* <div className="track-cc-mid-card">
          <div className="track-cc-mid-card-left">
            C++
            <span>Learn C++ for strong programming fundamentals.</span>
          </div>
          <div className="track-cc-mid-card-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="20"
              viewBox="0 0 24 20"
              fill="none"
            >
              <path
                d="M23.0382 6.88408C20.6097 3.13731 16.4637 0.858539 11.999 0.81665C7.53424 0.858539 3.38824 3.13731 0.959815 6.88408C-0.319938 8.7622 -0.319938 11.2322 0.959815 13.1103C3.38687 16.8594 7.53311 19.1405 11.999 19.1838C16.4637 19.1419 20.6097 16.8631 23.0382 13.1164C24.3206 11.2368 24.3206 8.76356 23.0382 6.88408ZM20.5533 11.4075C18.6992 14.3483 15.4753 16.1424 11.999 16.1682C8.52266 16.1425 5.29873 14.3483 3.44464 11.4075C2.86663 10.5583 2.86663 9.44208 3.44464 8.59295C5.29868 5.6522 8.52261 3.85805 11.999 3.83227C15.4753 3.858 18.6992 5.6522 20.5533 8.59295C21.1313 9.44208 21.1313 10.5583 20.5533 11.4075Z"
                fill="#7530E4"
              />
              <path
                d="M11.9993 14.0208C14.22 14.0208 16.0201 12.2207 16.0201 10C16.0201 7.7794 14.22 5.97922 11.9993 5.97922C9.77869 5.97922 7.97852 7.7794 7.97852 10C7.97852 12.2207 9.77869 14.0208 11.9993 14.0208Z"
                fill="#7530E4"
              />
            </svg>
            View Curriculum
          </div>
        </div> */}
        {data?.curric.map((c, ind) => (
          <div
            className="track-cc-mid-card"
            key={ind}
            style={{ borderTop: "1px solid rgba(55, 73, 87, 0.1)" }}
          >
            <div className="track-cc-mid-card-left">
              {c.name}
              <span>{c.details}</span>
            </div>
            <div
              className="track-cc-mid-card-right pointer"
              onClick={() =>
                window.open(
                  `${window.location.origin}/category/${c.slug}`,
                  "_blank"
                )
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="20"
                viewBox="0 0 24 20"
                fill="none"
              >
                <path
                  d="M23.0382 6.88408C20.6097 3.13731 16.4637 0.858539 11.999 0.81665C7.53424 0.858539 3.38824 3.13731 0.959815 6.88408C-0.319938 8.7622 -0.319938 11.2322 0.959815 13.1103C3.38687 16.8594 7.53311 19.1405 11.999 19.1838C16.4637 19.1419 20.6097 16.8631 23.0382 13.1164C24.3206 11.2368 24.3206 8.76356 23.0382 6.88408ZM20.5533 11.4075C18.6992 14.3483 15.4753 16.1424 11.999 16.1682C8.52266 16.1425 5.29873 14.3483 3.44464 11.4075C2.86663 10.5583 2.86663 9.44208 3.44464 8.59295C5.29868 5.6522 8.52261 3.85805 11.999 3.83227C15.4753 3.858 18.6992 5.6522 20.5533 8.59295C21.1313 9.44208 21.1313 10.5583 20.5533 11.4075Z"
                  fill="#7530E4"
                />
                <path
                  d="M11.9993 14.0208C14.22 14.0208 16.0201 12.2207 16.0201 10C16.0201 7.7794 14.22 5.97922 11.9993 5.97922C9.77869 5.97922 7.97852 7.7794 7.97852 10C7.97852 12.2207 9.77869 14.0208 11.9993 14.0208Z"
                  fill="#7530E4"
                />
              </svg>
              View Curriculum
            </div>
          </div>
        ))}
        {/* <div
          className="track-cc-mid-card"
          style={{ borderTop: "1px solid rgba(55, 73, 87, 0.1)" }}
        >
          <div className="track-cc-mid-card-left">
            Data Structure & Algorithm
            <span>
              Excel in Data Structures and Algorithms for interview success.
            </span>
          </div>
          <div className="track-cc-mid-card-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="20"
              viewBox="0 0 24 20"
              fill="none"
            >
              <path
                d="M23.0382 6.88408C20.6097 3.13731 16.4637 0.858539 11.999 0.81665C7.53424 0.858539 3.38824 3.13731 0.959815 6.88408C-0.319938 8.7622 -0.319938 11.2322 0.959815 13.1103C3.38687 16.8594 7.53311 19.1405 11.999 19.1838C16.4637 19.1419 20.6097 16.8631 23.0382 13.1164C24.3206 11.2368 24.3206 8.76356 23.0382 6.88408ZM20.5533 11.4075C18.6992 14.3483 15.4753 16.1424 11.999 16.1682C8.52266 16.1425 5.29873 14.3483 3.44464 11.4075C2.86663 10.5583 2.86663 9.44208 3.44464 8.59295C5.29868 5.6522 8.52261 3.85805 11.999 3.83227C15.4753 3.858 18.6992 5.6522 20.5533 8.59295C21.1313 9.44208 21.1313 10.5583 20.5533 11.4075Z"
                fill="#7530E4"
              />
              <path
                d="M11.9993 14.0208C14.22 14.0208 16.0201 12.2207 16.0201 10C16.0201 7.7794 14.22 5.97922 11.9993 5.97922C9.77869 5.97922 7.97852 7.7794 7.97852 10C7.97852 12.2207 9.77869 14.0208 11.9993 14.0208Z"
                fill="#7530E4"
              />
            </svg>
            View Curriculum
          </div>
        </div>
        <div
          className="track-cc-mid-card"
          style={{ borderTop: "1px solid rgba(55, 73, 87, 0.1)" }}
        >
          <div className="track-cc-mid-card-left">
            Competitve Programming
            <span>
              Excel in Data Structures and Algorithms for interview success.
            </span>
          </div>
          <div className="track-cc-mid-card-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="20"
              viewBox="0 0 24 20"
              fill="none"
            >
              <path
                d="M23.0382 6.88408C20.6097 3.13731 16.4637 0.858539 11.999 0.81665C7.53424 0.858539 3.38824 3.13731 0.959815 6.88408C-0.319938 8.7622 -0.319938 11.2322 0.959815 13.1103C3.38687 16.8594 7.53311 19.1405 11.999 19.1838C16.4637 19.1419 20.6097 16.8631 23.0382 13.1164C24.3206 11.2368 24.3206 8.76356 23.0382 6.88408ZM20.5533 11.4075C18.6992 14.3483 15.4753 16.1424 11.999 16.1682C8.52266 16.1425 5.29873 14.3483 3.44464 11.4075C2.86663 10.5583 2.86663 9.44208 3.44464 8.59295C5.29868 5.6522 8.52261 3.85805 11.999 3.83227C15.4753 3.858 18.6992 5.6522 20.5533 8.59295C21.1313 9.44208 21.1313 10.5583 20.5533 11.4075Z"
                fill="#7530E4"
              />
              <path
                d="M11.9993 14.0208C14.22 14.0208 16.0201 12.2207 16.0201 10C16.0201 7.7794 14.22 5.97922 11.9993 5.97922C9.77869 5.97922 7.97852 7.7794 7.97852 10C7.97852 12.2207 9.77869 14.0208 11.9993 14.0208Z"
                fill="#7530E4"
              />
            </svg>
            View Curriculum
          </div>
        </div> */}
      </div>
      <div className={`track-cc-btm`}>
        <div className="track-cc-btm-card">
          <img src={ccbtm1} alt="ccbtm"></img>
          <div className="track-cc-btm-card-text">
            {!data.dbms ? "DBMS" : "Case Studies"}
            <span>
              {!data.dbms
                ? "Proficiency in Database Management Systems stands as a skill set essential for excelling in interviews, especially within the startup environment."
                : "Learn To Create EYE Catching Case Studies under Proper Mentor Guidence. And Excel the art of Representation of studies which leaves impact"}
            </span>
          </div>
        </div>

        <div
          className="track-cc-btm-card"
          style={{ border: "1px solid #EBCB2E" }}
        >
          <img src={ccbtm2} alt="ccbtm"></img>
          <div className="track-cc-btm-card-text">
            Resume Building
            <span>
              We're committed to providing comprehensive assistance as you
              create a resume, ensuring it resonates with maximum impact and
              effectiveness.
            </span>
          </div>
        </div>
        <div className="track-cc-btm-card">
          <img src={ccbtm3} alt="ccbtm"></img>
          <div className="track-cc-btm-card-text">
            Guaranteed Internship
            <span>
              Get guaranteed one month internship with minimum stipend of
              ₹5ooo/month on completing the course along with all the assigmnets
              & projects
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackCourseCurric;
