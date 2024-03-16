import React, { useEffect, useState } from "react";
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
import { useParams } from "react-router-dom";

import contents from "../contents/Contents.json";

const Category = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSign, setShowSign] = useState(false);
  const [bought, setBought] = useState(Cookies.get("bought") || false);
  const { slug } = useParams();

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
    window.location.href = "https://tutedude.com";
  }

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
    return (
      <Login
        setBought={setBought}
        setShowLogin={setShowLogin}
        setShowSign={setShowSign}
      />
    );

  return (
    <>
      <Hero
        setShowLogin={setShowLogin}
        setShowSign={setShowSign}
        bought={bought}
        cont={contents[slug]}
        slug={slug}
      />
      <HowRefund bought={bought} setShowLogin={setShowLogin} />
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
      {/* <CaseStudies /> */}
      <Upsell />
      <Experiences />
      {/* <Reviews /> */}
      <IntroFaq />
      <IntroFooter />
    </>
  );
};

export default Category;
