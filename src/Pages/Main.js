import { useEffect, useState } from "react";
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
import Cookies from "js-cookie";
import SignUp from "../Components/SignUp";
import Login from "../Components/Login";

const Main = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSign, setShowSign] = useState(false);
  const reviews = [
    {
      name: "Rekha M",
      review:
        "TuteDude's Data Science course is an exceptional choice for learners seeking comprehensive knowledge and robust support. With a well-structured curriculum, interactive learning, outstanding doubt clarification, and a supportive community, this course provides a top-tier educational experience. It's ideal for both beginners and those looking to advance their data science skills in a flexible, self-paced ",
      desig: " Data science,Student",
    },
    {
      name: "Suraj Thakkar",
      desig: "Digital Marketing, Student",
      review:
        "I just finished a digital marketing course at TuteDude, and I'm thrilled with the experience. At 699rs, it's highly affordable for the quality education you receive. The icing on the cake? TuteDude offers a unique money-back guarantee, which I was pleasantly surprised to take advantage of. After completing the course and submitting the assignment, I received a full refund, effectively making my digital marketing education entirely free!",
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

  useEffect(() => {
    const email = Cookies.get("user_email");
    const name = Cookies.get("user_name");
    if (!email || !name) {
      setShowLogin(true);
    }
  }, []);

  if (showSign)
    return <SignUp setShowSign={setShowSign} setShowLogin={setShowLogin} />;

  if (showLogin)
    return <Login setShowLogin={setShowLogin} setShowSign={setShowSign} />;
  return (
    <div>
      <Hero setShowLogin={setShowLogin} setShowSign={setShowSign} />
      <HowRefund />
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
