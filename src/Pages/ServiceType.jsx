import React from 'react';
import "../App.css";

const ServiceTypes = () => {
  const services = [
    {
      title: "Standard Ride",
      description: "Comfortable rides at affordable prices.",
    },
    {
      title: "Luxury Ride",
      description: "Experience luxury with our premium services.",
    },
    {
      title: "Shared Ride",
      description: "Economical rides by sharing with others.",
    },
  ];

  return (
    <section className="service-types">
      <h2>Our Service Types</h2>
      <div className="service-list">
        {services.map((service, index) => (
          <div className="service-item" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceTypes;
