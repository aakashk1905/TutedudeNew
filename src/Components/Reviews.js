import React from "react";
import "./Styles/Reviews.css";

const Reviews = () => {
  return (
    <div className="rev-cont">
      <div className="rev-head">Video Reviews from Thrilled Students</div>

      <div className="rev-inner-cont">
        <div className="rev-card">
          <div className="rev-video-temp">
            <video
              src="https://d1nyzl35ecsrcr.cloudfront.net/tdmw/Apeksha.mp4"
              controls
            ></video>
          </div>
          <div>
            <div className="rev-name">Apeksha</div>
            <div className="rev-job">UX/UI designer</div>
          </div>
        </div>
        <div className="rev-card">
          <div className="rev-video-temp"></div>
          <div>
            <div className="rev-name">Isha Sharma</div>
            <div className="rev-job">UX/UI designer</div>
          </div>
        </div>
        <div className="rev-card">
          <div className="rev-video-temp"></div>
          <div>
            <div className="rev-name">Isha Sharma</div>
            <div className="rev-job">UX/UI designer</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
