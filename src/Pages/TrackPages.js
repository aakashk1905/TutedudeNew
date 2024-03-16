import React from "react";
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

const TrackPages = () => {
  return (
    <div>
      <TrackHero />
      <StipendCard />
      <TrackKeyFeatures />
      <TrackCourseCurric />
      <TrackTools />
      <TrackHiringCompanies />
      <HowDifferent />
      <Testimonials />
      <Videoreview />
      <IntroFaq />
      <IntroFooter />
    </div>
  );
};

export default TrackPages;
