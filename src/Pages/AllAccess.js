import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Components/Navbar";
import AllAccessHero from "../Components/AllAccess/AllAccessHero";
import DiscoverAllAccess from "../Components/AllAccess/DiscoverAllAccess";
import AllAccessBenefits from "../Components/AllAccess/AllAccessBenefits";
import Customhow from "../Components/CustomPack/Customhow";
import AllChooseCourse from "../Components/AllAccess/AllChooseCourse";
import IntroFaq from "../Components/IntroFaq";
import IntroFooter from "../Components/IntroFooter";
import AllFloatSelected from "../Components/AllAccess/AllFloatSelected";
import SignUp from "../Components/SignUp";
import Login from "../Components/Login";
import Cookies from "js-cookie";

const AllAccess = () => {
  const [showFloatSelected, setShowFloatSelected] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSign, setShowSign] = useState(false);
  const customSlideToExploreRef = useRef(null);

  useEffect(() => {
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
  const query = [
    {
      text: "How does the package course offer work?",
      extras:
        "When you select 4 or more courses, you'll get a discount of 45% on each course. You can complete these courses at your own pace, within the given time period according to the number of courses.",
    },
    {
      text: "Can I mix and match courses for the package offer?",
      extras:
        "Yes, you're free to choose any combination of courses to make up your package as long as it contains at least 4 courses to avail the discount.",
    },
    {
      text: "Is there a time limit to complete courses in the package?",
      extras:
        "No, you have the flexibility to complete any of the courses at any time within the time window. There is no set time frame for each individual course.",
    },
    {
      text: "How do I qualify for the refund offer?",
      extras:
        "No, you have the flexibility to complete any of the courses at any time within the give month window. There is no set time frame for each individual course.",
    },
    {
      text: "Does the refund offer apply to package courses as well?",
      extras:
        "Yes, the refund offer is applicable to both individual and package courses. In the case of package courses, each course fee will be refunded upon its successful completion within the total given time period.",
    },
  ];
  return (
    <div>
      <Navbar setShowLogin={setShowLogin} setShowSign={setShowSign} />
      <AllAccessHero />
      <DiscoverAllAccess />
      <Customhow />
      <div ref={customSlideToExploreRef}>
        <AllAccessBenefits />
      </div>

      <AllChooseCourse />

      <IntroFaq customFaq={query} />
      <IntroFooter />
      {showFloatSelected && <AllFloatSelected />}
    </div>
  );
};

export default AllAccess;
