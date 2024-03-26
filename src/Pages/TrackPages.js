import React, { useEffect, useRef, useState } from "react";
import HowDifferent from "../Components/HomePage/Components/HowDifferent";
import Testimonials from "../Components/HomePage/Components/Testimonials";
import Videoreview from "../Components/HomePage/Components/VideoReview";
import IntroFaq from "../Components/HomePage/Components/IntroFaq";
import IntroFooter from "../Components/HomePage/Components/IntroFooter";
import TrackHero from "../Components/TrackPages/TrackHero";
import StipendCard from "../Components/TrackPages/StipendCard";
import TrackKeyFeatures from "../Components/TrackPages/TrackKeyFeatures";
import TrackCourseCurric from "../Components/TrackPages/TrackCourseCurric";
import TrackHiringCompanies from "../Components/TrackPages/TrackHiringCompanies";
import TrackTools from "../Components/TrackPages/TrackTools";
import { useNavigate, useParams } from "react-router-dom";
import tracks from "../contents/Tracks.json";
import SignUp from "../Components/SignUp";
import Login from "../Components/Login";
import useCart from "../contexts/Cart";
import Cookies from "js-cookie";

const TrackPages = () => {
  const { slug } = useParams();
  const { setSelectedCourse } = useCart();
  const name = Cookies.get("user_name");
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const [showSign, setShowSign] = useState(false);
  const reviews = [
    {
      name: "Rekha M",
      review:
        "TuteDude's Data Science course offers comprehensive learning with structured content, interactive features, excellent support, and a supportive community. Ideal for beginners and advanced learners alike, it provides a top-tier educational experience in a flexible, self-paced format.",
      desig: " Data science,Student",
    },
    {
      name: "Suraj Thakkar",
      desig: "Digital Marketing, Student",
      review:
        "TuteDude's digital marketing course at 699rs offers exceptional value with top-notch education. The unique money-back guarantee makes it risk-free. After completing the course, I received a full refund, essentially making it free. This showcases TuteDude's dedication to student satisfaction. ",
    },
    {
      name: "Vedant Sharma",
      student: "Financial Modelling, Student",
      review:
        "Tutedude provides what young learners need. This platform is quite holistic and provides you with the best learning material, mentors, assignments, and much more. They have started providing their course under Feedback Offers. And they also provide us a refund on course completion.",
    },
    {
      name: "Tanay Singh",
      student: "UI UX Design, Student",
      review:
        "I wanted to express my heartfelt thanks for the UI/UX course. The curriculum was comprehensive, the instructors were knowledgeable and supportive, and the most interesting part is that after completing this course, I got an internship. Customer service is also very good. Thank you, Tutedude.",
    },
    {
      name: "Sarvesh Kumar",
      desig: "Desig, Student",
      review:
        "I'm happy to share that I had a great experience with Tutedude! The platform sounds like a truly helpful resource for developers and anyone seeking digital knowledge. It's wonderful to know that the mentor was supportive and stood by their word.",
    },
  ];
  const ids = [
    "fullstackdevelopment",
    "pythondevelopment",
    "appdevelopment",
    "datascience",
    "uiuxtrack",
  ];
  const customSlideToExploreRef = useRef(null);
  const [showFloatSelected, setShowFloatSelected] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      if (customSlideToExploreRef.current) {
        const customSlideToExploreRect =
          customSlideToExploreRef.current.getBoundingClientRect();
        const scrollPosition = window.scrollY || window.pageYOffset;
        if (scrollPosition >= customSlideToExploreRect.top) {
          setShowFloatSelected(true);
        } else {
          setShowFloatSelected(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    window.gtag("event", "conversion", {
      send_to: "AW-711435738/CRmfCMKls7oDENrLntMC",
    });
  }, []);
  if (!ids.includes(slug)) navigate("/");
  return (
    <div>
      {showSign && (
        <SignUp setShowSign={setShowSign} setShowLogin={setShowLogin} />
      )}
      {showLogin && (
        <Login setShowLogin={setShowLogin} setShowSign={setShowSign} />
      )}
      {showFloatSelected && (
        <div className="mobile-floater">
          <div
            className="mobile-floater-inner"
            onClick={() => {
              if (!name) {
                setShowSign(true);
              } else {
                setSelectedCourse(tracks[slug].curric);
                navigate("/trackpayment");
              }
            }}
          >
            Enroll Now
          </div>
        </div>
      )}
      <TrackHero setShowLogin={setShowSign} data={tracks[slug]} />
      <div ref={customSlideToExploreRef}>
        <StipendCard />
      </div>
      <TrackKeyFeatures />
      <TrackCourseCurric data={tracks[slug]} />
      {slug === "fullstackdevelopment" && <TrackTools />}
      <TrackHiringCompanies data={tracks[slug]} />
      <HowDifferent />
      <Testimonials reviews={reviews} />
      <Videoreview />
      <IntroFaq />
      <IntroFooter />
    </div>
  );
};

export default TrackPages;
