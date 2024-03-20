import React from "react";
import "./styles/Customhow.css";
import chow1 from "../../Assests/chow1.png";
import chow2 from "../../Assests/chow2.png";
import chow3 from "../../Assests/chow3.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { EffectCube, Pagination } from "swiper/modules";

const Customhow = () => {
  return (
    <div className="chow-cont">
      <div className="hr-head">How Refund works?</div>
      <div className="chr-inner-cont">
        <div className="chow-cards-cont">
          <div className="chow-card">
            <div className="chow-abs">step 1</div>
            <img src={chow1} alt="chow1"></img>
            <span>Select desired no. of courses & buy your course pack</span>
          </div>
          <div className="chow-card">
            <div className="chow-abs">step 2</div>
            <img src={chow2} alt="chow1"></img>
            <span>
              complete every single course at your own pace & keep on Getting
              <b style={{ color: "#5B00D1" }}> Refund of Rs. 200</b> for each
              course.
            </span>
          </div>
          <div className="chow-card">
            <div className="chow-abs">step 3</div>
            <img src={chow3} alt="chow1"></img>
            <span>
              complete all courses within refund validity limit of the pack and
              <b style={{ color: "#5B00D1" }}> avail 100% refund !</b>
            </span>
          </div>
        </div>
      </div>
      <div className="mySwiper">
        <Swiper
          effect={"cube"}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={true}
          modules={[EffectCube, Pagination]}
        >
          <SwiperSlide>
            <div className="chow-card">
              <div className="chow-abs">step 1</div>
              <img src={chow1} alt="chow1"></img>
              <span>Select desired no. of courses & buy your course pack</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="chow-card">
              <div className="chow-abs">step 2</div>
              <img src={chow2} alt="chow1"></img>
              <span>
                complete every single course at your own pace & keep on Getting
                <b style={{ color: "#5B00D1" }}> Refund of Rs. 375</b> for each
                course.
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="chow-card">
              <div className="chow-abs">step 3</div>
              <img src={chow3} alt="chow1"></img>
              <span>
                complete all courses within refund validity limit of the pack
                and
                <b style={{ color: "#5B00D1" }}> avail 100% refund !</b>
              </span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Customhow;
