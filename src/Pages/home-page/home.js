import HeroSection from "../../Components/heroSection-components/hero";
import ProjectSection from "../../Components/project-components/project";
import PrincipleSection from "../../Components/principles-components/principle";
import WorkedSection from "../../Components/workedCompany-components/worked";
import Testimonial from "../../Components/testimonial-components/testimonial";
import Footer from "../../Components/footer-components/footer";
import Navbar from "../../Components/navbar-components/nav";

import React from "react";
import "./index.css";
function Home() {
  return (
    <div className="Home-parent-page">
      <Navbar />
      <HeroSection />
      <ProjectSection />
      <PrincipleSection />
      <WorkedSection />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default Home;
