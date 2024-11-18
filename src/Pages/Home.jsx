import React, { useState } from "react";
import { HeroSection } from "../Components/Layout/UI/HeroSection"; 
import HeroSection2 from "../Components/Layout/UI/HeroSection2";
import { About } from "./About"; 
import Features from "./Features";
import HowItWorks from "./HowItWorks"; 
import ServiceTypes from "./ServiceType";
import DriverProfiles from "./DriverProfiles"; 
import Testimonials from "./Testimonials"; 
import Promotions from "./Promotions"; 
import FAQ from "./FAQ"; 

export const Home = () => {
  const [showAbout, setShowAbout] = useState(false); 

  return (
    <>
      <HeroSection setShowAbout={setShowAbout} />
      {showAbout && <About />} 
      <HeroSection2 />
      <DriverProfiles />
      <Features />
      <HowItWorks />
      <ServiceTypes />
      <Testimonials />
      <Promotions />
      <FAQ />
      
      
      
    </>
  );
};
