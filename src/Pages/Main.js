import { useEffect, useRef, useState } from "react";
import BrowseCourses from "../Components/HomePage/Components/BrowseCourses";
import ComboPack from "../Components/HomePage/Components/ComboPack";
import Hero from "../Components/HomePage/Components/Hero";
import HowDifferent from "../Components/HomePage/Components/HowDifferent";
import HowRefund from "../Components/HomePage/Components/HowRefund";
import Internship from "../Components/HomePage/Components/Internship";
import IntroFaq from "../Components/HomePage/Components/IntroFaq";
import IntroFooter from "../Components/HomePage/Components/IntroFooter";
import Testimonials from "../Components/HomePage/Components/Testimonials";
import Videoreview from "../Components/HomePage/Components/VideoReview";
import Whyus from "../Components/HomePage/Components/Whyus";
// import Cookies from "js-cookie";
import SignUp from "../Components/SignUp";
import Login from "../Components/Login";
import WhyRefund from "../Components/WhyRefund";

const Main = () => {
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
  const customSlideToExploreRef = useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {showSign && (
        <SignUp setShowSign={setShowSign} setShowLogin={setShowLogin} />
      )}
      {showLogin && (
        <Login setShowLogin={setShowLogin} setShowSign={setShowSign} />
      )}
      <Hero setShowLogin={setShowLogin} setShowSign={setShowSign} />
      <div ref={customSlideToExploreRef}>
        <HowRefund cname={"Any"} />
      </div>
      <WhyRefund />
      <Whyus />

      <BrowseCourses />
      <Internship />
      <ComboPack />
      <HowDifferent />
      <Testimonials reviews={reviews} />
      <Videoreview />
      <IntroFaq />
      <IntroFooter />
    </div>
  );
};

export default Main;
