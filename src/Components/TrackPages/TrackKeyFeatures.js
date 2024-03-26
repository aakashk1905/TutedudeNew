import React from "react";
import "./styles/TrackKeyFeatures.css";
import kftopcard1 from "./Assests/kftopcard1.gif";
import kftopcard2 from "./Assests/kftopcard2.gif";
import kftopcard3 from "./Assests/kftopcard3.gif";
import kftopcard4 from "./Assests/kftopcard4.gif";
import kftopcard5 from "./Assests/kftopcard5.gif";
import kftopcard6 from "./Assests/kftopcard6.gif";
import kfleft from "./Assests/kfbtmleft.png";
import kfright1 from "./Assests/kfright1.png";
import kfright2 from "./Assests/kfright2.png";
import kfright3 from "./Assests/kfright3.png";
import kfright4 from "./Assests/kfright4.png";
import kfright5 from "./Assests/kfright5.png";
const TrackKeyFeatures = () => {
  return (
    <div className="track-kf-cont">
      <div className="track-kf-top">
        <div className="track-kf-top-head">Key Features</div>
        <div className="track-kf-top-cards-cont">
          <div className="track-kf-top-card">
            <img src={kftopcard1} alt="kftopcard" />
            <div className="track-kf-top-card-text">
              Industry Standard Courses
            </div>
          </div>
          <div className="track-kf-top-card">
            <img src={kftopcard2} alt="kftopcard" />
            <div className="track-kf-top-card-text">
              Certification on Completion
            </div>
          </div>
          <div className="track-kf-top-card">
            <img src={kftopcard3} alt="kftopcard" />
            <div className="track-kf-top-card-text">Guaranteed Internship</div>
          </div>
          <div className="track-kf-top-card">
            <img src={kftopcard4} alt="kftopcard" />
            <div className="track-kf-top-card-text">
              1:1 Mentoring by the Industry Experts
            </div>
          </div>
          <div className="track-kf-top-card">
            <img src={kftopcard5} alt="kftopcard" />
            <div className="track-kf-top-card-text">
              Focused Resume Building
            </div>
          </div>
          <div className="track-kf-top-card">
            <img src={kftopcard6} alt="kftopcard" />
            <div className="track-kf-top-card-text">
              Skill Driven Program Architecture
            </div>
          </div>
        </div>
      </div>
      <div className="track-kf-btm" id="key-features">
        <div className="track-kf-btm-left">
          <div className="track-kf-btm-left-head">
            How does the <b>Internship Program</b> work?
          </div>
          <img src={kfleft} alt="kfleft"></img>
        </div>
        <div className="track-kf-btm-right">
          <div className="track-kf-btm-right-card">
            <div className="track-kf-btm-right-card-icon">
              <img src={kfright1} alt="kfright1"></img>
            </div>
            <div className="track-kf-btm-right-card-text">
              Expert pre-recorded courses tailored for industry needs.
            </div>
          </div>
          <div className="track-kf-btm-right-card">
            <div className="track-kf-btm-right-card-icon">
              <img src={kfright2} alt="kfright1"></img>
            </div>
            <div className="track-kf-btm-right-card-text">
              Instant 1:1 doubt-solving support all day.
            </div>
          </div>
          <div className="track-kf-btm-right-card">
            <div className="track-kf-btm-right-card-icon">
              <img src={kfright3} alt="kfright1"></img>
            </div>
            <div className="track-kf-btm-right-card-text">
              Personalized mentorship throughout your journey.
            </div>
          </div>
          <div className="track-kf-btm-right-card">
            <div className="track-kf-btm-right-card-icon">
              <img src={kfright4} alt="kfright1"></img>
            </div>
            <div className="track-kf-btm-right-card-text">
              Standout projects for your resume.
            </div>
          </div>
          <div className="track-kf-btm-right-card">
            <div className="track-kf-btm-right-card-icon">
              <img src={kfright5} alt="kfright1"></img>
            </div>
            <div className="track-kf-btm-right-card-text">
              Guaranteed paid internships and certificates post-program
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackKeyFeatures;
