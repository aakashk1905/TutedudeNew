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

const Main = () => {
  return (
    <div>
      <Hero />
      <HowRefund />
      <Whyus />
      <BrowseCourses />
      <Internship />
      <ComboPack />
      <HowDifferent />
      <Testimonials />
      <Videoreview />
      <IntroFaq />
      <IntroFooter />
    </div>
  );
};

export default Main;
