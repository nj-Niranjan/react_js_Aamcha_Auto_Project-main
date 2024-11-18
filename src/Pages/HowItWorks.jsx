import React from 'react';
import "../App.css";

const HowItWorks = () => {
  const steps = [
    {
      title: "1. Choose Your Ride",
      description: "Select from a variety of vehicle options.",
    },
    {
      title: "2. Confirm Your Pickup",
      description: "Enter your location and confirm your booking.",
    },
    {
      title: "3. Enjoy Your Ride",
      description: "Relax and enjoy the journey!",
    },
  ];

  return (
    <section className="how-it-works">
      <div className="how-it-works-cloud big-cloud">
        <h2 className="how-it-works-header">How It Works</h2>
      </div>
      <div className="how-it-works-steps-container">
        {steps.map((step, index) => (
          <div className="how-it-works-cloud step-cloud" key={index}>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
      <div className="how-it-works-background-images">
        <img src="/images/man-pointing.png" alt="Background 1" className="how-it-works-bg-image left" />
        <img src="/images/woman-pointing.png" alt="Background 2" className="how-it-works-bg-image right" />
      </div>
    </section>
  );
};

export default HowItWorks;
