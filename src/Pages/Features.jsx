import React from 'react';
import "../App.css";

const Features = () => {
  const featuresData = [
    { title: "Easy Booking", description: "Book your ride in seconds with our user-friendly app." },
    { title: "Live Tracking", description: "Track your ride in real-time for a hassle-free experience." },
    { title: "Affordable Prices", description: "Enjoy competitive rates without compromising quality." },
  ];

  return (
    <section className="features">
      <h2 className="features-header">Features That Make <br /> Us Unique</h2>
      <div className="feature-background">
        <img src="/images/Features 1.png" alt="Easy Booking" />
        <img src="/images/Features 2.jpg" alt="Live Tracking" />
      </div>
      <div className="features-grid">
        {featuresData.map((feature, index) => (
          <div className="feature-card" key={index}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
