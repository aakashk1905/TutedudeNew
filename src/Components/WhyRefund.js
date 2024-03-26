import React, { useRef, useState } from "react";
import "./Styles/WhyRefund.css";
import whyref from "../Assests/whyref.svg";
import play from "../Assests/play.png";
const WhyRefund = () => {
  const [playing, setPlaying] = useState(false);
  const [noVid, setNoVid] = useState(false);
  const videoRef = useRef();
  return (
    <div className="why-cont">
      <div className="why-upper-cont">
        <div className="yellow"></div>
        <div className="green"></div>
        <div className="why-head">Why refund?</div>
        <div className="why-img-cont " id="why-refund">
          <img src={whyref} alt="whyref" />
        </div>
        <div className="why-text">
          A fee ensures commitment and seriousness in learning, as free things
          are often undervalued.
          <div className="why-quote1">“</div>
          <div className="why-quote2">“</div>
        </div>
      </div>
      {/* <div className="why-video-cont">
        <video
          src="https://d1nyzl35ecsrcr.cloudfront.net/tdmw/refundvideo.mp4"
          alt="refund Video"
          controls
        />
      </div> */}
      <div className="why-video-cont">
        {noVid && "Something Went Wrong !!!"}
        {!playing && (
          <div className="rm-vid-overview">
            <div
              className="rm-play"
              onClick={() => {
                setPlaying(true);
                videoRef.current?.play();
              }}
            >
              <img src={play} alt="rmblav" />
              See Why Refund
            </div>
          </div>
        )}
        {!noVid && (
          <video
            onError={() => {
              setNoVid(true);
              setPlaying(false);
            }}
            ref={videoRef}
            className="rm-vid"
            controls={true}
            src="https://d1nyzl35ecsrcr.cloudfront.net/tdmw/refundvideo.mp4"
            alt="rmblav"
          />
        )}
      </div>
    </div>
  );
};

export default WhyRefund;
