import React, { useState } from "react";
import "./Styles/Carousel.css";
import cs1 from "../Assests/cs1.png";
import leftArr from "../Assests/leftArr.svg";
import rightArr from "../Assests/rightArr.svg";
import certificate from "../Assests/certificate.svg";

const Carousel = () => {
  const images = [cs1, certificate, cs1];
  const imageText = [
    {
      title: "Railway Booking App",
      author: "Salman Ahmad",
      type: "UI/UX CaseStudy",
    },
    {
      title: "Certificate Design",
      author: "Aakash Kumar",
      type: "Certif Test",
    },
    {
      title: "Railway Booking App",
      author: "Jatin Pawar",
      type: "UI/UX CaseStudy",
    },
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePreviousClick = () => {
    const newIndex =
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
  };

  const handleNextClick = () => {
    const newIndex =
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
  };

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="carousel">
      <div className="car-img-cont">
        <img
          className="carousel-image"
          src={images[currentImageIndex]}
          alt=""
          style={{ transition: "opacity 0.5s ease-in-out" }}
        />
        <div className="carr-data-cont">
          <div className="carr-head-cont">
            <div className="carr-head">
              {imageText[currentImageIndex].title}
            </div>
            <div className="carr-author">
              By {imageText[currentImageIndex].author}
            </div>
          </div>
          <div className="carr-type">{imageText[currentImageIndex].type}</div>
        </div>

        <button
          className="carousel-arrow arr-left"
          onClick={handlePreviousClick}
        >
          <img src={leftArr} alt="Left"></img>
        </button>

        <button className="carousel-arrow arr-right" onClick={handleNextClick}>
          <img src={rightArr} alt="Left"></img>
        </button>
      </div>
      <div className="carousel-dots">
        {images.map((image, index) => (
          <button
            key={index}
            className={index === currentImageIndex ? "active dots-active" : ""}
            onClick={() => handleDotClick(index)}
          >
            •
          </button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
