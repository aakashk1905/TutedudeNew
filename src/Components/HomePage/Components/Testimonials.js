import React, { useEffect } from "react";
import "./styles/Testimonials.css";
import revdp1 from "../Assests/revdp1.svg";
const Testimonials = () => {
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
        <div className="tm-card tm-card1" style={{marginLeft:"50px"}}>
          <div className="tm-card-text">
            The instructor of this course is very sweet, she explains all the
            concepts very elaboratively. Also mentors are actually the best, if
            I asked something they will make sure I understand my doubt till the
            end. Also the assignments and projects they gave me, made sure that
            I get the industry exposure.
          </div>
          <div className="tm-line"></div>
          <div className="tm-pro-cont">
            <img src={revdp1} alt="revdp"></img>
            <div >
              <div className="tm-card-head">By Salmaan Ahmed,</div>
              <div className="tm-card-head1">UI UX Designer, Bankly</div>
            </div>
          </div>
        </div>
        <div className="tm-card">
          <div className="tm-card-text">
            The instructor of this course is very sweet, she explains all the
            concepts very elaboratively. Also mentors are actually the best, if
            I asked something they will make sure I understand my doubt till the
            end. Also the assignments and projects they gave me, made sure that
            I get the industry exposure.
          </div>
          <div className="tm-line"></div>
          <div className="tm-pro-cont">
            <img src={revdp1} alt="revdp"></img>
            <div >
              <div className="tm-card-head">By Salmaan Ahmed,</div>
              <div className="tm-card-head1">UI UX Designer, Bankly</div>
            </div>
          </div>
        </div>
        <div className="tm-card">
          <div className="tm-card-text">
            The instructor of this course is very sweet, she explains all the
            concepts very elaboratively. Also mentors are actually the best, if
            I asked something they will make sure I understand my doubt till the
            end. Also the assignments and projects they gave me, made sure that
            I get the industry exposure.
          </div>
          <div className="tm-line"></div>
          <div className="tm-pro-cont">
            <img src={revdp1} alt="revdp"></img>
            <div >
              <div className="tm-card-head">By Salmaan Ahmed,</div>
              <div className="tm-card-head1">UI UX Designer, Bankly</div>
            </div>
          </div>
        </div>
        <div className="tm-card">
          <div className="tm-card-text">
            The instructor of this course is very sweet, she explains all the
            concepts very elaboratively. Also mentors are actually the best, if
            I asked something they will make sure I understand my doubt till the
            end. Also the assignments and projects they gave me, made sure that
            I get the industry exposure.
          </div>
          <div className="tm-line"></div>
          <div className="tm-pro-cont">
            <img src={revdp1} alt="revdp"></img>
            <div >
              <div className="tm-card-head">By Salmaan Ahmed,</div>
              <div className="tm-card-head1">UI UX Designer, Bankly</div>
            </div>
          </div>
        </div>
        <div className="tm-card tm-card2" style={{marginRight:"50px"}}>
          <div className="tm-card-text">
            The instructor of this course is very sweet, she explains all the
            concepts very elaboratively. Also mentors are actually the best, if
            I asked something they will make sure I understand my doubt till the
            end. Also the assignments and projects they gave me, made sure that
            I get the industry exposure.
          </div>
          <div className="tm-line"></div>
          <div className="tm-pro-cont">
            <img src={revdp1} alt="revdp"></img>
            <div >
              <div className="tm-card-head">By Salmaan Ahmed,</div>
              <div className="tm-card-head1">UI UX Designer, Bankly</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
