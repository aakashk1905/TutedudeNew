import React, { useState } from "react";
import "./styles/ChooseCourse.css";
import searchImg from "../../Assests/search.png";
import useCart from "../../contexts/Cart";
import courses from "../../contents/Courses.json";
const ChooseCourse = () => {
  const { setSelectedCourse, selectedCourse } = useCart();
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

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
    <div className="chc-cont" id="choose">
      <div className="usr-head">Choose your courses </div>
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
              const selected = selectedCourse?.some(
                (selected) => selected.course_name === course.course_name
              );
              return (
                <div
                  className={`chc-card pointer  ${
                    selected ? "chc-selected" : ""
                  }`}
                  key={ind}
                  onClick={() => {
                    if (!selected) {
                      setSelectedCourse((sc) => [...sc, course]);
                    } else {
                      setSelectedCourse((sc) =>
                        sc.filter(
                          (selectedCourse) =>
                            selectedCourse.course_name !== course.course_name
                        )
                      );
                    }
                  }}
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
                        onClick={() => {
                          window.open(
                            `${window.location.origin}/category/${course.slug}`,
                            "_blank"
                          );
                        }}
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
                    {!selected ? (
                      <div
                        className="chc-cta"
                        // onClick={() =>
                        //   setSelectedCourse((sc) => [...sc, course])
                        // }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="48"
                          height="49"
                          viewBox="0 0 48 49"
                          fill="none"
                        >
                          <rect
                            x="20"
                            y="4.5"
                            width="8"
                            height="40"
                            fill="#7A38E7"
                          />
                          <rect
                            x="4"
                            y="28.5"
                            width="8"
                            height="40"
                            transform="rotate(-90 4 28.5)"
                            fill="#7A38E7"
                          />
                        </svg>
                        Add
                      </div>
                    ) : (
                      <div
                        className="chc-cta chc-cta-selected"
                        onClick={() =>
                          setSelectedCourse((sc) =>
                            sc.filter(
                              (selectedCourse) =>
                                selectedCourse.course_name !==
                                course.course_name
                            )
                          )
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="48"
                          height="49"
                          viewBox="0 0 48 49"
                          fill="none"
                        >
                          <rect
                            x="44"
                            y="20.5"
                            width="8"
                            height="40"
                            transform="rotate(90 44 20.5)"
                            fill="white"
                          />
                          <rect
                            x="4"
                            y="28.5"
                            width="8"
                            height="40"
                            transform="rotate(-90 4 28.5)"
                            fill="white"
                          />
                        </svg>
                        Remove
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
              const selected = selectedCourse?.some(
                (selected) => selected.course_name === course.course_name
              );
              return (
                <div
                  className={`chc-card pointer ${
                    selected ? "chc-selected" : ""
                  }`}
                  key={ind}
                  onClick={() => {
                    if (!selected) {
                      setSelectedCourse((sc) => [...sc, course]);
                    } else {
                      setSelectedCourse((sc) =>
                        sc.filter(
                          (selectedCourse) =>
                            selectedCourse.course_name !== course.course_name
                        )
                      );
                    }
                  }}
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
                        onClick={() => {
                          window.open(
                            `${window.location.origin}/category/${course.slug}`,
                            "_blank"
                          );
                        }}
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
                    {!selected ? (
                      <div
                        className="chc-cta"
                        onClick={() =>
                          setSelectedCourse((sc) => [...sc, course])
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="48"
                          height="49"
                          viewBox="0 0 48 49"
                          fill="none"
                        >
                          <rect
                            x="20"
                            y="4.5"
                            width="8"
                            height="40"
                            fill="#7A38E7"
                          />
                          <rect
                            x="4"
                            y="28.5"
                            width="8"
                            height="40"
                            transform="rotate(-90 4 28.5)"
                            fill="#7A38E7"
                          />
                        </svg>
                        Add
                      </div>
                    ) : (
                      <div
                        className="chc-cta chc-cta-selected"
                        onClick={() =>
                          setSelectedCourse((sc) =>
                            sc.filter(
                              (selectedCourse) =>
                                selectedCourse.course_name !==
                                course.course_name
                            )
                          )
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="48"
                          height="49"
                          viewBox="0 0 48 49"
                          fill="none"
                        >
                          <rect
                            x="44"
                            y="20.5"
                            width="8"
                            height="40"
                            transform="rotate(90 44 20.5)"
                            fill="white"
                          />
                          <rect
                            x="4"
                            y="28.5"
                            width="8"
                            height="40"
                            transform="rotate(-90 4 28.5)"
                            fill="white"
                          />
                        </svg>
                        Remove
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
              const selected = selectedCourse?.some(
                (selected) => selected.course_name === course.course_name
              );
              return (
                <div
                  className={`chc-card pointer ${
                    selected ? "chc-selected" : ""
                  }`}
                  key={ind}
                  onClick={() => {
                    if (!selected) {
                      setSelectedCourse((sc) => [...sc, course]);
                    } else {
                      setSelectedCourse((sc) =>
                        sc.filter(
                          (selectedCourse) =>
                            selectedCourse.course_name !== course.course_name
                        )
                      );
                    }
                  }}
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
                        onClick={() => {
                          window.open(
                            `${window.location.origin}/category/${course.slug}`,
                            "_blank"
                          );
                        }}
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
                    {!selected ? (
                      <div
                        className="chc-cta"
                        onClick={() =>
                          setSelectedCourse((sc) => [...sc, course])
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="48"
                          height="49"
                          viewBox="0 0 48 49"
                          fill="none"
                        >
                          <rect
                            x="20"
                            y="4.5"
                            width="8"
                            height="40"
                            fill="#7A38E7"
                          />
                          <rect
                            x="4"
                            y="28.5"
                            width="8"
                            height="40"
                            transform="rotate(-90 4 28.5)"
                            fill="#7A38E7"
                          />
                        </svg>
                        Add
                      </div>
                    ) : (
                      <div
                        className="chc-cta chc-cta-selected"
                        onClick={() =>
                          setSelectedCourse((sc) =>
                            sc.filter(
                              (selectedCourse) =>
                                selectedCourse.course_name !==
                                course.course_name
                            )
                          )
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="48"
                          height="49"
                          viewBox="0 0 48 49"
                          fill="none"
                        >
                          <rect
                            x="44"
                            y="20.5"
                            width="8"
                            height="40"
                            transform="rotate(90 44 20.5)"
                            fill="white"
                          />
                          <rect
                            x="4"
                            y="28.5"
                            width="8"
                            height="40"
                            transform="rotate(-90 4 28.5)"
                            fill="white"
                          />
                        </svg>
                        Remove
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

export default ChooseCourse;
