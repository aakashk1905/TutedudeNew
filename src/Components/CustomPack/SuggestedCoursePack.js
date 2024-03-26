import React, { useRef, useState } from "react";
import "./styles/SuggestedCoursePack.css";
import scp1 from "../../Assests/scp1.png";
import financeguru from "../../Assests/financeguru.png";
import techallround from "../../Assests/techallrounder.png";
import techpro from "../../Assests/techpro.png";
import scprefundabs from "../../Assests/scprefundabs.svg";
import useCart from "../../contexts/Cart";
import { useNavigate } from "react-router-dom";
const SuggestedCoursePack = () => {
  const navigate = useNavigate();
  const { setSelectedCourse } = useCart();
  const containerRef = useRef(null);
  const [dragStartX, setDragStartX] = useState(null);

  const handleDragStart = (event) => {
    event.preventDefault(); // Prevent text selection
    setDragStartX(event.clientX);
    containerRef.current.style.cursor = "grabbing";
  };

  const handleDragMove = (event) => {
    if (dragStartX !== null) {
      const deltaX = event.clientX - dragStartX;
      containerRef.current.scrollLeft -= deltaX;
      setDragStartX(event.clientX);
    }
  };

  const handleDragEnd = () => {
    setDragStartX(null);
    containerRef.current.style.cursor = "grab";
  };

  const cardCont = [
    {
      name: "Creative Maven Pack",
      img: scp1,
      courses: [
        "Adobe Illustrator",
        "Adobe Photoshop",
        "Adobe Premier pro",
        "Adobe After effects",
      ],
      content: [
        {
          course_name: "Illustrator",
          slug: "illustrator",
          category: "visual_arts",
        },
        {
          slug: "photoshop",
          course_name: "Photoshop",
          category: "visual_arts",
        },
        {
          course_name: "Premiere Pro",
          slug: "premierepro",
          category: "visual_arts",
        },
        {
          slug: "aftereffects",
          course_name: "After Effects",
          category: "visual_arts",
        },
      ],
    },
    {
      name: "Finance guru Combo",
      img: financeguru,
      courses: [
        "Stock Market Investing",
        "Financial Modelling Valuation",
        "Financial Risk Management",
        "Data Science",
      ],
      content: [
        {
          slug: "fundamentalanalysis",
          course_name: "Fundamental Analysis",
          category: "bussiness",
        },
        {
          course_name: "Financial Modelling & Valuation",
          slug: "financialmodelling",
          category: "bussiness",
        },
        {
          slug: "riskmanagement",
          course_name: "Risk Management",
          category: "bussiness",
        },
        {
          course_name: "Data Science",
          slug: "datascience",
          category: "technical",
        },
      ],
    },
    {
      name: "Tech All-Rounder",
      img: techallround,
      courses: ["App development", "React Native", "DevOps", "Data Science"],
      content: [
        {
          course_name: "App Development",
          slug: "appdevelopment",
          category: "technical",
        },
        {
          course_name: "React Native",
          slug: "reactnative",
          category: "technical",
        },
        {
          slug: "devops",
          course_name: "DevOps",
          category: "technical",
        },
        {
          course_name: "Data Science",
          slug: "datascience",
          category: "technical",
        },
      ],
    },
    {
      name: "TechPro Bundle",
      img: techpro,
      courses: [
        "Web Developement with MERN",
        "Data Science",
        "Python",
        "UI/UX Designing",
      ],
      content: [
        {
          course_name: "MERN Stack",
          slug: "mernstack",
          category: "technical",
        },
        {
          course_name: "Data Science",
          slug: "datascience",
          category: "technical",
        },
        {
          course_name: "Python",
          slug: "python",
          category: "technical",
        },
        {
          course_name: "UI/UX",
          slug: "uiux",
          category: "visual_arts",
        },
      ],
    },
  ];
  return (
    <div className="scp-cont">
      <div className="usr-head">Suggested course Packs for you</div>

      <div
        className="scp-cards-cont"
        ref={containerRef}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onDragStart={(event) => event.preventDefault()}
        onDragOver={(event) => event.preventDefault()}
        // onSelectStart={(event) => event.preventDefault()}
      >
        {cardCont.map((sc, ind) => (
          <div className="scp-card" key={ind}>
            <img
              src={scprefundabs}
              alt="scprefundabs"
              className="scprefundabs"
            />
            <img src={sc.img} alt="scp1" className="scp-card-img"></img>
            <div className="scp-card-head">{sc.name}</div>
            <div className="scp-card-head2">
              This Includes:
              <div className="scp-card-mid-cont">
                {sc.courses &&
                  sc.courses.map((scc, i) => (
                    <div className="scp-card-list" key={i}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <path
                          d="M15.1712 8.95871L12.0139 5.80142C11.7662 5.55379 11.4302 5.41471 11.0799 5.41479C10.7296 5.41488 10.3937 5.55411 10.146 5.80186C9.89841 6.04962 9.75934 6.3856 9.75942 6.73589C9.7595 7.08618 9.89873 7.4221 10.1465 7.66973L12.2939 9.81715H4.55212C4.20185 9.81715 3.86594 9.95629 3.61826 10.204C3.37059 10.4516 3.23145 10.7876 3.23145 11.1378C3.23145 11.4881 3.37059 11.824 3.61826 12.0717C3.86594 12.3194 4.20185 12.4585 4.55212 12.4585H12.2939L10.1465 14.6059C9.89873 14.8535 9.7595 15.1895 9.75942 15.5398C9.75934 15.89 9.89841 16.226 10.146 16.4738C10.3937 16.7215 10.7296 16.8608 11.0799 16.8608C11.4302 16.8609 11.7662 16.7219 12.0139 16.4742L15.1712 13.3169C15.7481 12.7384 16.0721 11.9548 16.0721 11.1378C16.0721 10.3208 15.7481 9.5372 15.1712 8.95871Z"
                          fill="#6BB870"
                        />
                      </svg>
                      {scc}
                    </div>
                  ))}
              </div>
            </div>
            <div className="scp-price-cont">
              <div className="scp-ogp">₹2,796</div>
              <div className="scp-disp">₹1,499</div>
              <div className="scp-sav">You save ₹1297</div>
            </div>
            <div className="scp-line"></div>
            <div
              className="scp-cta"
              onClick={() => {
                setSelectedCourse((ssc) => {
                  const updatedCourses = [...ssc];

                  sc.content.forEach((item) => {
                    if (
                      updatedCourses.findIndex(
                        (obj) => obj.slug === item.slug
                      ) === -1
                    ) {
                      updatedCourses.push(item);
                    }
                  });

                  return updatedCourses;
                });
                navigate("/packpayment");
              }}
            >
              Enroll Now
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestedCoursePack;
