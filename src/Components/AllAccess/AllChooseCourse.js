import React, { useState } from "react";
import "../CustomPack/styles/ChooseCourse.css";
import searchImg from "../../Assests/search.png";

const AllChooseCourse = () => {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const courses = [
    {
      course_name: "UI/UX",
      slug: "uiux",
      category: "visual_arts",
    },
    {
      course_name: "Python",
      slug: "python",
      category: "technical",
    },
    {
      course_name: "Java",
      slug: "java",
      category: "technical",
    },
    {
      course_name: "MERN Stack",
      slug: "mernstack",
      category: "technical",
    },
    {
      course_name: "Web Development with PHP/MySQL",
      slug: "webdevelopment",
      category: "technical",
    },
    {
      course_name: "App Development",
      slug: "appdevelopment",
      category: "technical",
    },
    {
      course_name: "Ethical Hacking",
      slug: "ethicalhacking",
      category: "technical",
    },
    {
      course_name: "Illustrator",
      slug: "illustrator",
      category: "visual_arts",
    },
    {
      course_name: "Premiere Pro",
      slug: "premierepro",
      category: "visual_arts",
    },
    {
      course_name: "Financial Modelling & Valuation",
      slug: "financialmodelling",
      category: "bussiness",
    },
    {
      course_name: "Technical Analysis",
      slug: "technicalanalysis",
      category: "bussiness",
    },
    {
      course_name: "Digital Marketing",
      slug: "digitalmarketing",
      category: "bussiness",
    },
    {
      course_name: "Data Structures & Algorithms",
      slug: "datastructure",
      category: "technical",
    },
    {
      course_name: "C++",
      slug: "cpp",
      category: "technical",
    },
    {
      course_name: "React Native",
      slug: "reactnative",
      category: "technical",
    },
    {
      course_name: "Data Science",
      slug: "datascience",
      category: "technical",
    },
    {
      slug: "competitiveprogramming",
      course_name: "Competetive Programming",
      category: "technical",
    },
    {
      slug: "aftereffects",
      course_name: "After Effects",
      category: "visual_arts",
    },
    {
      slug: "photoshop",
      course_name: "Photoshop",
      category: "visual_arts",
    },
    {
      slug: "fundamentalanalysis",
      course_name: "Fundamental Analysis",
      category: "bussiness",
    },
    {
      slug: "riskmanagement",
      course_name: "Risk Management",
      category: "bussiness",
    },
    {
      slug: "dbms",
      course_name: "DataBase Management System",
      category: "technical",
    },
    {
      slug: "devops",
      course_name: "DevOps",
      category: "technical",
    },
    {
      slug: "reactjs",
      course_name: "React Js",
      category: "technical",
    },
    {
      course_name: "Machine Learning",
      slug: "machinelearning",
      category: "technical",
    },
  ];
  const filteredCourses = courses.filter(
    (course) =>
      course.course_name.toLowerCase().includes(search.toLowerCase()) ||
      course.slug.toLowerCase().includes(search.toLowerCase())
  );
  const technical = filteredCourses.filter(
    (c, i) => c.category === "technical"
  );
  const visual = filteredCourses.filter((c, i) => c.category === "visual_arts");
  const bussiness = filteredCourses.filter(
    (c, i) => c.category === "bussiness"
  );
  return (
    <div className="chc-cont">
      <div className="usr-head">All 25 Courses You Get</div>
      <div className="chc-input-cont">
        <img src={searchImg} alt="search" />
        <input
          value={search}
          onChange={handleChange}
          placeholder="Search Courses...."
        />
      </div>
      <div className="chc-course-cat">
        <div className="chc-course-head">Technical Courses</div>
        <div className="chc-courses-cont">
          {technical.length > 0 ? (
            technical.map((course, ind) => {
              const selected = false;
              return (
                <div
                  className={`chc-card ${selected ? "chc-selected" : ""}`}
                  key={ind}
                  //   onClick={() => navigate(`/category/${course.slug}`)}
                  onClick={() => {
                    window.open(
                      `${window.location.origin}/category${course.slug}`,
                      "_blank"
                    );
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <div
                    className={`chc-title ${selected && "chc-title-selected"}`}
                  >
                    {course.course_name}
                  </div>
                  <div className="chc-cta-cont">
                    {!selected && (
                      <div
                        className="chc-cta"
                        // onClick={() => navigate(`/category/${course.slug}`)}
                        onClick={() => {
                          window.open(
                            `${window.location.origin}/category/${course.slug}`,
                            "_blank"
                          );
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="49"
                          height="37"
                          viewBox="0 0 49 37"
                          fill="none"
                        >
                          <path
                            d="M46.5763 12.2682C41.7195 4.77462 33.4275 0.217078 24.4979 0.133301C15.5685 0.217078 7.27647 4.77462 2.41963 12.2682C-0.139877 16.0244 -0.139877 20.9644 2.41963 24.7207C7.27374 32.2188 15.5662 36.7811 24.498 36.8676C33.4275 36.7838 41.7195 32.2263 46.5764 24.7328C49.1413 20.9737 49.1413 16.0271 46.5763 12.2682ZM41.6066 21.315C37.8985 27.1965 31.4506 30.7848 24.4979 30.8364C17.5453 30.7849 11.0975 27.1965 7.38928 21.315C6.23326 19.6167 6.23326 17.3842 7.38928 15.6859C11.0974 9.8044 17.5452 6.21609 24.4979 6.16454C31.4505 6.216 37.8984 9.8044 41.6066 15.6859C42.7626 17.3842 42.7626 19.6167 41.6066 21.315Z"
                            fill="#7A38E7"
                          />
                          <path
                            d="M24.4978 26.5417C28.9391 26.5417 32.5394 22.9414 32.5394 18.5001C32.5394 14.0589 28.9391 10.4585 24.4978 10.4585C20.0565 10.4585 16.4562 14.0589 16.4562 18.5001C16.4562 22.9414 20.0565 26.5417 24.4978 26.5417Z"
                            fill="#7A38E7"
                          />
                        </svg>
                        View
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            <div>No Such Course Found !!!</div>
          )}
        </div>
        <div className="chc-course-head">Creative/Art Courses</div>
        <div className="chc-courses-cont">
          {visual.length > 0 ? (
            visual.map((course, ind) => {
              const selected = false;
              return (
                <div
                  className={`chc-card ${selected ? "chc-selected" : ""}`}
                  key={ind}
                  //   onClick={() => navigate(`/category/${course.slug}`)}
                  onClick={() => {
                    window.open(
                      `${window.location.origin}/category/${course.slug}`,
                      "_blank"
                    );
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <div
                    className={`chc-title ${selected && "chc-title-selected"}`}
                  >
                    {course.course_name}
                  </div>
                  <div className="chc-cta-cont">
                    {!selected && (
                      <div
                        className="chc-cta"
                        // onClick={() => navigate(`/category/${course.slug}`)}
                        onClick={() => {
                          window.open(
                            `${window.location.origin}/category/${course.slug}`,
                            "_blank"
                          );
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="49"
                          height="37"
                          viewBox="0 0 49 37"
                          fill="none"
                        >
                          <path
                            d="M46.5763 12.2682C41.7195 4.77462 33.4275 0.217078 24.4979 0.133301C15.5685 0.217078 7.27647 4.77462 2.41963 12.2682C-0.139877 16.0244 -0.139877 20.9644 2.41963 24.7207C7.27374 32.2188 15.5662 36.7811 24.498 36.8676C33.4275 36.7838 41.7195 32.2263 46.5764 24.7328C49.1413 20.9737 49.1413 16.0271 46.5763 12.2682ZM41.6066 21.315C37.8985 27.1965 31.4506 30.7848 24.4979 30.8364C17.5453 30.7849 11.0975 27.1965 7.38928 21.315C6.23326 19.6167 6.23326 17.3842 7.38928 15.6859C11.0974 9.8044 17.5452 6.21609 24.4979 6.16454C31.4505 6.216 37.8984 9.8044 41.6066 15.6859C42.7626 17.3842 42.7626 19.6167 41.6066 21.315Z"
                            fill="#7A38E7"
                          />
                          <path
                            d="M24.4978 26.5417C28.9391 26.5417 32.5394 22.9414 32.5394 18.5001C32.5394 14.0589 28.9391 10.4585 24.4978 10.4585C20.0565 10.4585 16.4562 14.0589 16.4562 18.5001C16.4562 22.9414 20.0565 26.5417 24.4978 26.5417Z"
                            fill="#7A38E7"
                          />
                        </svg>
                        View
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            <div>No Such Course Found !!!</div>
          )}
        </div>
        <div className="chc-course-head">Bussiness Courses</div>
        <div className="chc-courses-cont">
          {bussiness.length > 0 ? (
            bussiness.map((course, ind) => {
              const selected = false;
              return (
                <div
                  className={`chc-card ${selected ? "chc-selected" : ""}`}
                  key={ind}
                  //   onClick={() => navigate(`/category/${course.slug}`)}
                  onClick={() => {
                    window.open(
                      `${window.location.origin}/category/${course.slug}`,
                      "_blank"
                    );
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <div
                    className={`chc-title ${selected && "chc-title-selected"}`}
                  >
                    {course.course_name}
                  </div>
                  <div className="chc-cta-cont">
                    {!selected && (
                      <div
                        className="chc-cta"
                        // onClick={() => navigate(`/category/${course.slug}`)}
                        onClick={() => {
                          window.open(
                            `${window.location.origin}/category/${course.slug}`,
                            "_blank"
                          );
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="49"
                          height="37"
                          viewBox="0 0 49 37"
                          fill="none"
                        >
                          <path
                            d="M46.5763 12.2682C41.7195 4.77462 33.4275 0.217078 24.4979 0.133301C15.5685 0.217078 7.27647 4.77462 2.41963 12.2682C-0.139877 16.0244 -0.139877 20.9644 2.41963 24.7207C7.27374 32.2188 15.5662 36.7811 24.498 36.8676C33.4275 36.7838 41.7195 32.2263 46.5764 24.7328C49.1413 20.9737 49.1413 16.0271 46.5763 12.2682ZM41.6066 21.315C37.8985 27.1965 31.4506 30.7848 24.4979 30.8364C17.5453 30.7849 11.0975 27.1965 7.38928 21.315C6.23326 19.6167 6.23326 17.3842 7.38928 15.6859C11.0974 9.8044 17.5452 6.21609 24.4979 6.16454C31.4505 6.216 37.8984 9.8044 41.6066 15.6859C42.7626 17.3842 42.7626 19.6167 41.6066 21.315Z"
                            fill="#7A38E7"
                          />
                          <path
                            d="M24.4978 26.5417C28.9391 26.5417 32.5394 22.9414 32.5394 18.5001C32.5394 14.0589 28.9391 10.4585 24.4978 10.4585C20.0565 10.4585 16.4562 14.0589 16.4562 18.5001C16.4562 22.9414 20.0565 26.5417 24.4978 26.5417Z"
                            fill="#7A38E7"
                          />
                        </svg>
                        View
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            <div>No Such Course Found !!!</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllChooseCourse;
