import React, { useEffect, useRef, useState } from "react";
import "./styles/Videoreview.css";

const Videoreview = () => {
  // const [noVid, setNoVid] = useState(false);
  useEffect(() => {
    const slider = document.querySelector(".vr-scroll-cont");
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener("mouseleave", () => {
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mouseup", () => {
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2; //scroll-fast
      slider.scrollLeft = scrollLeft - walk;
      //   console.log(walk);
    });
  }, []);
  return (
    <div className="vr-cont">
      <div className="home-wu-top">
        <div className="home-hr-head">
          Video Reviews from Our <b className="home-hr-head-col">Students!</b>
        </div>
        <div className="vr-text">
          Watch and be inspired by our students sharing their success stories
          through video reviews.
        </div>
      </div>
      <div className="vr-scroll-cont">
        <VideoCard
          src={"https://d1nyzl35ecsrcr.cloudfront.net/tdmw/Apeksha.mp4"}
          name={"Apeksha"}
          desig={"UI/UX Designer"}
          styles={{ marginLeft: "50px" }}
        />
        <VideoCard
          src={"https://d1nyzl35ecsrcr.cloudfront.net/tdmw/salman.mp4"}
          name={"Salman"}
          desig={"UI/UX Designer"}
          styles={{ marginLeft: "50px" }}
        />
        <VideoCard
          src={"https://d1nyzl35ecsrcr.cloudfront.net/tdmw/Naveen.mp4"}
          name={"Naveen"}
          desig={"UI/UX Designer"}
          styles={{ marginLeft: "50px" }}
        />
      </div>
    </div>
  );
};

export default Videoreview;

const VideoCard = ({ src, name, desig, styles }) => {
  const videoRef = useRef();
  const [playing, setPlaying] = useState(false);
  return (
    <div className="vr-card" style={styles}>
      <video
        src={src}
        controls={true}
        ref={videoRef}
        style={{ width: "100%" }}
        onPause={() => setPlaying(false)}
      ></video>
      {!playing && (
        <div className="vr-card-inner">
          <div
            onClick={() => {
              setPlaying(true);
              videoRef.current?.play();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="68"
              height="68"
              viewBox="0 0 68 68"
              fill="none"
            >
              <mask
                id="mask0_2_1469"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="68"
                height="68"
              >
                <rect width="68" height="68" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_2_1469)">
                <path
                  d="M26.9167 46.7501L46.75 34.0001L26.9167 21.2501V46.7501ZM34 62.3334C30.0806 62.3334 26.3972 61.5897 22.95 60.1022C19.5028 58.6147 16.5042 56.5959 13.9542 54.0459C11.4042 51.4959 9.38542 48.4973 7.89792 45.0501C6.41042 41.6029 5.66667 37.9195 5.66667 34.0001C5.66667 30.0806 6.41042 26.3973 7.89792 22.9501C9.38542 19.5029 11.4042 16.5042 13.9542 13.9542C16.5042 11.4042 19.5028 9.3855 22.95 7.898C26.3972 6.4105 30.0806 5.66675 34 5.66675C37.9195 5.66675 41.6028 6.4105 45.05 7.898C48.4972 9.3855 51.4958 11.4042 54.0458 13.9542C56.5958 16.5042 58.6146 19.5029 60.1021 22.9501C61.5896 26.3973 62.3333 30.0806 62.3333 34.0001C62.3333 37.9195 61.5896 41.6029 60.1021 45.0501C58.6146 48.4973 56.5958 51.4959 54.0458 54.0459C51.4958 56.5959 48.4972 58.6147 45.05 60.1022C41.6028 61.5897 37.9195 62.3334 34 62.3334ZM34 56.6668C40.3278 56.6668 45.6875 54.4709 50.0792 50.0793C54.4708 45.6876 56.6667 40.3279 56.6667 34.0001C56.6667 27.6723 54.4708 22.3126 50.0792 17.9209C45.6875 13.5292 40.3278 11.3334 34 11.3334C27.6722 11.3334 22.3125 13.5292 17.9208 17.9209C13.5292 22.3126 11.3333 27.6723 11.3333 34.0001C11.3333 40.3279 13.5292 45.6876 17.9208 50.0793C22.3125 54.4709 27.6722 56.6668 34 56.6668Z"
                  fill="white"
                />
              </g>
            </svg>
          </div>
          <div className="vr-name-cont">
            <div className="vr-name">{name}</div>
            <div className="vr-post">{desig}</div>
          </div>
        </div>
      )}
    </div>
  );
};
