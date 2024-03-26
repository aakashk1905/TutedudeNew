import React, { useEffect, useRef, useState } from "react";
import Hero from "../Components/Hero";
import WhyRefund from "../Components/WhyRefund";
import HowRefund from "../Components/HowRefund";
import UnlockCourse from "../Components/UnlockCourse";
import Curriculum from "../Components/Curriculum";
import Certificate from "../Components/Certificate";
// import CaseStudies from "../Components/CaseStudies";
import Upsell from "../Components/Upsell";
import Experiences from "../Components/Experiences";
// import Reviews from "../Components/Reviews";
import IntroFaq from "../Components/IntroFaq";
import IntroFooter from "../Components/IntroFooter";
import Cookies from "js-cookie";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";
import { useNavigate, useParams } from "react-router-dom";

import contents from "../contents/Contents.json";
import { Helmet } from "react-helmet";

const Category = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSign, setShowSign] = useState(false);
  const name = Cookies.get("user_name");
  const [bought, setBought] = useState(Cookies.get("bought") || false);
  const { slug } = useParams();
  const navigate = useNavigate();

  const ids = [
    "mernstack",
    "webdevelopment",
    "appdevelopment",
    "ethicalhacking",
    "java",
    "python",
    "cpp",
    "datastructure",
    "competitiveprogramming",
    "aftereffects",
    "photoshop",
    "premierepro",
    "digitalmarketing",
    "fundamentalanalysis",
    "technicalanalysis",
    "illustrator",
    "financialmodelling",
    "datascience",
    "uiux",
    "ml",
    "reactnative",
    "riskmanagement",
    "dbms",
    "devops",
    "reactjs",
  ];

  if (!ids.includes(slug)) {
    Cookies.remove("slug");
    alert("wrong URL!!!");
    navigate("/");
  }

  const customSlideToExploreRef = useRef(null);
  const [showFloatSelected, setShowFloatSelected] = useState(false);

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
    window.gtag("event", "conversion", {
      send_to: "AW-711435738/CRmfCMKls7oDENrLntMC",
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>{contents[slug]?.title}</title>
      </Helmet>
      {showSign && (
        <SignUp setShowSign={setShowSign} setShowLogin={setShowLogin} />
      )}
      {showLogin && (
        <Login
          setBought={setBought}
          slug={slug}
          setShowLogin={setShowLogin}
          setShowSign={setShowSign}
        />
      )}
      {showFloatSelected && (
        <div className="mobile-floater">
          {bought ? (
            <div
              className="mobile-floater-inner"
              onClick={() => window.open("https://tutedude.com/dashboard")}
            >
              Got to Dashboard
            </div>
          ) : (
            <div
              className="mobile-floater-inner"
              onClick={() => {
                if (!name) {
                  setShowLogin(true);
                } else {
                  navigate(`/payment/${slug}`);
                }
              }}
            >
              Enroll Now
            </div>
          )}
        </div>
      )}
      <Hero
        setShowLogin={setShowLogin}
        setShowSign={setShowSign}
        bought={bought}
        cont={contents[slug]}
        slug={slug}
      />
      <div ref={customSlideToExploreRef}>
        <HowRefund
          bought={bought}
          setShowLogin={setShowLogin}
          cname={contents[slug].title}
        />
      </div>
      <WhyRefund />
      <UnlockCourse />
      <Curriculum
        bought={bought}
        setShowLogin={setShowLogin}
        topics1={contents[slug].topics1}
        topics2={contents[slug].topics2}
        details={contents[slug].details}
      />
      <Certificate name={contents[slug].name} />

      <Upsell />
      <Experiences />
      <IntroFaq />
      <IntroFooter />
    </>
  );
};

export default Category;
