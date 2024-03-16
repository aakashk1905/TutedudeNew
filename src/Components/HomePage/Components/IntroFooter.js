import React from "react";
import "./styles/IntroFooter.css";

import linkedin from "../Assests/linkedin.svg";
import fb from "../Assests/fb.svg";
import yt from "../Assests/yt.svg";
import insta from "../Assests/insta.svg";
const IntroFooter = () => {
  return (
    <div className="ifoot-cont">
      <div className="ifoot-main-cont">
        <div className="ifoot-head">Other Links</div>
        <div className="ifoot-inner-cont">
          <a href="https://tutedude.com/Footer/Aboutus.html">
            {" "}
            <div className="ifoot-text">About us</div>
          </a>
          <a href="https://tutedude.com/Footer/contactus.php">
            <div className="ifoot-text">Contact us</div>
          </a>
          <a href="https://tutedude.com/Footer/privacy.html">
            <div className="ifoot-text">Privacy Policy</div>
          </a>
          <a href="https://tutedude.com/Footer/termsofuse.html">
            <div className="ifoot-text">Terms of Use</div>
          </a>
        </div>
      </div>

      <div className="ifoot-main-cont">
        <div className="ifoot-head">Contact Us</div>
        <div className="ifoot-inner-cont">
          <a href="mailto:support@tutedude.com">
            {" "}
            <div className="ifoot-text">support@tutedude.com</div>
          </a>
          <a href="tel:+917988800474">
            {" "}
            <div className="ifoot-text">+91 7988800474</div>
          </a>
        </div>
      </div>

      <div className="ifoot-main-cont">
        <div className="ifoot-head">Social Links</div>
        <div className="ifoot-inner-cont1">
          <a href="https://www.linkedin.com/company/tutedudeofficial/">
            {" "}
            <img src={linkedin} alt="Linkedin" />
          </a>
          <a href="https://instagram.com/tutedudeofficial">
            <img src={insta} alt="insta" />
          </a>
          <a href="https://www.facebook.com/tutedude.officials/">
            <img src={fb} alt="fb" />
          </a>
          <a href="https://www.youtube.com/channel/UC2NQ2Ovazltz1-PYLmT7jxQ?view_as=subscriber">
            <img src={yt} alt="yt" />
          </a>
        </div>
      </div>

      <div className="ifoot-main-cont">
        <div className="ifoot-head">Registered Office</div>
        <div className="ifoot-inner-cont">
          <div className="ifoot-text">
            Suncity success tower,
            <br />
            sector 65, Gurugram, <br/>Haryana, 122005
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroFooter;
