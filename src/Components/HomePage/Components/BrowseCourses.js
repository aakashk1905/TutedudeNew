import React from "react";
import "./styles/BrowseCourses.css";
import bcdes from "../Assests/bcdes.svg";
import code from "../Assests/code.svg";
import business from "../Assests/business.svg";
import Coursecard from "./Coursecard";

import ae from "../Assests/courses/ae.png";
import ai from "../Assests/courses/ai.png";
import appdev from "../Assests/courses/appdev.png";
import cp from "../Assests/courses/cp.png";
import cpp from "../Assests/courses/cpp.png";
import DBMS from "../Assests/courses/DBMS.png";
import Devops from "../Assests/courses/Devops.png";
import dm from "../Assests/courses/dm.png";
import ds from "../Assests/courses/ds.png";
import dsa from "../Assests/courses/dsa.png";
import fm from "../Assests/courses/fm.png";
import frm from "../Assests/courses/frm.png";
import Hacking from "../Assests/courses/Hacking.png";
import java from "../Assests/courses/java.png";
import mern from "../Assests/courses/mern.png";
import php from "../Assests/courses/php.png";
import pr from "../Assests/courses/pr.png";
import ps from "../Assests/courses/ps.png";
import python from "../Assests/courses/python.png";
import react from "../Assests/courses/react.png";
import stockmarket from "../Assests/courses/stockmarket.png";
import ta from "../Assests/courses/ta.png";
import uiux from "../Assests/courses/uiux.png";

const BrowseCourses = () => {
  const courses = [
    {
      text: "MERN Stack",
      cimg: mern,
      col: "#0086D1",
      bg: "rgba(0, 134, 209, 0.11)",
      slug: "mernstack",
    },
    {
      text: "React JS",
      cimg: react,
      col: "#0086D1",
      bg: "rgba(0, 134, 209, 0.11)",
      slug: "reactjs",
    },
    {
      text: "React Native",
      cimg: react,
      col: "#0086D1",
      bg: "rgba(0, 134, 209, 0.11)",
      slug: "reactnative",
    },
    {
      text: "App Development",
      cimg: appdev,
      col: "#0086D1",
      bg: "rgba(0, 134, 209, 0.11)",
      slug: "appdevelopment",
    },
    {
      text: "Python",
      cimg: python,
      col: "#0086D1",
      bg: "rgba(0, 134, 209, 0.11)",
      slug: "python",
    },
    {
      text: "Java",
      cimg: java,
      col: "#0086D1",
      bg: "rgba(0, 134, 209, 0.11)",
      slug: "java",
    },
    {
      text: "C++",
      cimg: cpp,
      col: "#0086D1",
      bg: "rgba(0, 134, 209, 0.11)",
      slug: "cpp",
    },
    {
      text: "PHP/MySQL Web Development",
      cimg: php,
      col: "#0086D1",
      bg: "rgba(0, 134, 209, 0.11)",
      slug: "webdevelopment",
    },
    {
      text: "DevOPS",
      cimg: Devops,
      col: "#2BA700",
      bg: "rgba(43, 167, 0, 0.13)",
      slug: "devops",
    },
    {
      text: "DBMS",
      cimg: DBMS,
      col: "#2BA700",
      bg: "rgba(43, 167, 0, 0.13)",
      slug: "dbms",
    },
    {
      text: "Ethical Hacking",
      cimg: Hacking,
      col: "#2BA700",
      bg: "rgba(43, 167, 0, 0.13)",
      slug: "ethicalhacking",
    },
    {
      text: "Competitive Programming",
      cimg: cp,
      col: "#2BA700",
      bg: "rgba(43, 167, 0, 0.13)",
      slug: "competitiveprogramming",
    },
    {
      text: "Data Structures & Algorithms",
      cimg: dsa,
      col: "#2BA700",
      bg: "rgba(43, 167, 0, 0.13)",
      slug: "datastructure",
    },
    {
      text: "Data Science",
      cimg: ds,
      col: "#2BA700",
      bg: "rgba(43, 167, 0, 0.13)",
      slug: "datascience",
    },
    {
      text: "Digital Marketing",
      cimg: dm,
      col: "#2BA700",
      bg: "rgba(43, 167, 0, 0.13)",
      slug: "digitalmarketing",
    },
    {
      text: "Stock Market",
      cimg: stockmarket,
      col: "#2BA700",
      bg: "rgba(43, 167, 0, 0.13)",
      slug: "stockmarket",
    },
    {
      text: "Financial Risk Managment",
      cimg: frm,
      col: "#D17100",
      bg: "rgba(209, 113, 0, 0.11)",
      slug: "riskmanagement",
    },
    {
      text: "Technical Analysis",
      cimg: ta,
      col: "#D17100",
      bg: "rgba(209, 113, 0, 0.11)",
      slug: "technicalanalysis",
    },
    {
      text: "Financial Modelling & Valuation",
      cimg: fm,
      col: "#D17100",
      bg: "rgba(209, 113, 0, 0.11)",
      slug: "financialmodelling",
    },
    {
      text: "UI UX Designing",
      cimg: uiux,
      col: "#D17100",
      bg: "rgba(209, 113, 0, 0.11)",
      slug: "uiux",
    },
    {
      text: "Adobe Photoshop",
      cimg: ps,
      col: "#D17100",
      bg: "rgba(209, 113, 0, 0.11)",
      slug: "photoshop",
    },
    {
      text: "Adobe After Effects",
      cimg: ae,
      col: "#D17100",
      bg: "rgba(209, 113, 0, 0.11)",
      slug: "aftereffects",
    },
    {
      text: "Adobe Premiere Pro",
      cimg: pr,
      col: "#D17100",
      bg: "rgba(209, 113, 0, 0.11)",
      slug: "premierepro",
    },
    {
      text: "Adobe Illustrator",
      cimg: ai,
      col: "#D17100",
      bg: "rgba(209, 113, 0, 0.11)",
      slug: "illustrator",
    },
  ];

  return (
    <div className="bc-cont">
      <div className="home-wu-top">
        <div className="home-hr-head">
          Browse our <b className="home-hr-head-col">Courses</b>
        </div>
        <div className="home-wu-text">
          Explore a wide range of courses where learning is fun, easy, and
          absolutely free!
        </div>
      </div>
      <div className="bc-mid">
        <div className="bc-mid-chip">All Courses</div>
        <div className="bc-mid-chip">
          <img src={bcdes} alt="bcdes" />
          Design
        </div>
        <div className="bc-mid-chip">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
          >
            <path
              d="M13.125 19.25H9.625"
              stroke="#0086D1"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.375 23.625V19.25"
              stroke="#0086D1"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.9375 19.25V23.625"
              stroke="#0086D1"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 19.25V23.625"
              stroke="#0086D1"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.9375 21.4375H7"
              stroke="#0086D1"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M23.1875 19.25V23.625H25.8125"
              stroke="#0086D1"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.75 23.625V19.25L17.9375 22.3125L20.125 19.25V23.625"
              stroke="#0086D1"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.25 14.875V4.375C5.25 4.14294 5.34219 3.92038 5.50628 3.75628C5.67038 3.59219 5.89294 3.5 6.125 3.5H16.625L22.75 9.625V14.875"
              stroke="#0086D1"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.625 3.5V9.625H22.75"
              stroke="#0086D1"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Development
        </div>
        <div className="bc-mid-chip">
          <img src={code} alt="bcdes" /> IT & Software
        </div>
        <div className="bc-mid-chip">
          <img src={business} alt="bcdes" /> Business
        </div>
      </div>
      <div className="bc-chips-cont">
        {courses.map((course, index) => {
          return (
            <Coursecard
              key={index}
              cimg={course.cimg}
              text={course.text}
              col={course.col}
              bg={course.bg}
              slug={course.slug}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BrowseCourses;
