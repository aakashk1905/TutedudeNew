import React, { useEffect } from "react";
import "./styles/Testimonials.css";
const Testimonials = ({ reviews }) => {
  useEffect(() => {
    const slider = document.querySelector(".tm-scroll-cont");
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
      const walk = (x - startX) * 3; //scroll-fast
      slider.scrollLeft = scrollLeft - walk;
      console.log(walk);
    });
  }, []);
  return (
    <div className="tm-cont">
      <div className="home-wu-top">
        <div className="home-hr-head">
          Testimonials from Our <b className="home-hr-head-col">Students!</b>
        </div>
        <div className="tm-text">
          Hear firsthand how Tutedude has transformed learning journeys and
          fueled success. Real experiences, real impact.
        </div>
      </div>
      <div className="tm-scroll-cont">
        {reviews &&
          reviews.map((rev, ind) => (
            <div
              className="tm-card tm-card1"
              // style={ind === 0 && { marginLeft: "50px" }}
              key={ind}
            >
              <div className="tm-card-text">{rev.review}</div>
              <div className="tm-line"></div>
              <div className="tm-pro-cont">
                <img
                  src={`https://ui-avatars.com/api/?background=random&name=${rev.name}`}
                  alt="revdp"
                ></img>
                <div>
                  <div className="tm-card-head">By {rev.name},</div>
                  <div className="tm-card-head1">{rev.desig}</div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Testimonials;
