import React from "react";
import "./styles/TrackHiringCompanies.css";
import accenture from "./Assests/company/accenture.png";
import amazon from "./Assests/company/amazon.png";
import flipkart from "./Assests/company/flipkart.png";
import google from "./Assests/company/google.png";
import ibm from "./Assests/company/ibm.png";
import intuit from "./Assests/company/intuit.png";
import microsoft from "./Assests/company/microsoft.png";
import myntra from "./Assests/company/myntra.png";
import ola from "./Assests/company/ola.png";
import virtusa from "./Assests/company/virtusa.png";
import Marquee from "react-fast-marquee";
const TrackHiringCompanies = () => {
  return (
    <div className="track-hirc-cont">
      <div className="track-hirc-head">
        Top Companies Hiring <b>Full Stack Developers</b>
      </div>
      <div className="track-hirc-marquee">
        <Marquee>
          <div className="track-hirc-card">
            <img src={accenture} alt="hiring company"></img>
          </div>
          <div className="track-hirc-card">
            <img src={amazon} alt="hiring company"></img>
          </div>
          <div className="track-hirc-card">
            <img src={flipkart} alt="hiring company"></img>
          </div>
          <div className="track-hirc-card">
            <img src={google} alt="hiring company"></img>
          </div>
          <div className="track-hirc-card">
            <img src={ibm} alt="hiring company"></img>
          </div>
          <div className="track-hirc-card">
            <img src={intuit} alt="hiring company"></img>
          </div>
          <div className="track-hirc-card">
            <img src={microsoft} alt="hiring company"></img>
          </div>
          <div className="track-hirc-card">
            <img src={myntra} alt="hiring company"></img>
          </div>
          <div className="track-hirc-card">
            <img src={ola} alt="hiring company"></img>
          </div>
          <div className="track-hirc-card">
            <img src={virtusa} alt="hiring company"></img>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default TrackHiringCompanies;
