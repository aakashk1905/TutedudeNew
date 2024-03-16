import React from "react";
import "./styles/TrackTools.css";
import tool1 from "./Assests/tools/tool1.png";
import tool2 from "./Assests/tools/tool2.png";
import tool3 from "./Assests/tools/tool3.png";
import tool4 from "./Assests/tools/tool4.png";
import tool5 from "./Assests/tools/tool5.png";
import tool6 from "./Assests/tools/tool6.png";
import tool7 from "./Assests/tools/tool7.png";
import tool8 from "./Assests/tools/tool8.png";
import tool9 from "./Assests/tools/tool9.png";
const TrackTools = () => {
  return (
    <div className="track-tools-cont">
      <div className="track-tool-top">
        <div className="track-tool-sub-head">TOOLS COVERED</div>
        <div className="track-tool-head">
          <b>Full Stack Developer</b> Tools and Languages you will Learn
        </div>
      </div>
      <div className="track-tool-btm">
        <img src={tool1} alt="tool"></img>
        <img src={tool2} alt="tool"></img>
        <img src={tool3} alt="tool"></img>
        <img src={tool4} alt="tool"></img>
        <img src={tool5} alt="tool"></img>
        <img src={tool6} alt="tool"></img>
        <img src={tool7} alt="tool"></img>
        <img src={tool8} alt="tool"></img>
        <img src={tool9} alt="tool"></img>
      </div>
    </div>
  );
};

export default TrackTools;
