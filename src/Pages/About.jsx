import React from 'react';
import data from "../api/Data.json"; 
import { FaCar, FaLeaf, FaHandshake, FaUsers, FaChartLine } from 'react-icons/fa';
import "../App.css"; 

export const About = () => {
  return (
    <main className="about-section">
      <div className="about-hero-image">
        <img src="/images/logo1.png" alt="About Aamcha Auto" className="about-hero-image" />
      </div>
      
      <div className="about-container">
        <h1 className="about-heading-xl">About {data.company.name}</h1>
        <p className="about-paragraph">{data.company.description}</p>

        <h2 className="about-subheading">Our Mission</h2>
        <p className="about-paragraph">
          At {data.company.name}, our mission is to make transportation accessible and affordable for everyone.
        </p>

        <h2 className="about-subheading">Why Choose {data.company.name}?</h2>
        <div className="about-features-grid">
          {data.services.map((service) => (
            <div className="about-feature-box" key={service.service_name}>
              <FaCar className="about-icon" />
              <h3 className="about-feature-title">{service.service_name}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}

          <div className="about-feature-box">
            <FaLeaf className="about-icon" />
            <h3 className="about-feature-title">Eco-Friendly Options</h3>
            <p>{data.services.find(service => service.service_name === 'Eco-Friendly Rides')?.description}</p>
          </div>

          <div className="about-feature-box">
            <FaHandshake className="about-icon" />
            <h3 className="about-feature-title">Customer-Centric</h3>
            <p>We ensure each ride is safe, smooth, and tailored to your needs.</p>
          </div>

          <div className="about-feature-box">
            <FaUsers className="about-icon" />
            <h3 className="about-feature-title">Professional Drivers</h3>
            <ul>
              {data.drivers.map((driver) => (
                <li key={driver.name}>
                  {driver.name} - {driver.experience} of experience, Rating: {driver.rating}⭐
                </li>
              ))}
            </ul>
          </div>

          <div className="about-feature-box">
            <FaChartLine className="about-icon" />
            <h3 className="about-feature-title">Affordable Pricing</h3>
            <ul>
              {data.ride_types.map((ride) => (
                <li key={ride.type}>
                  {ride.type}: {ride.capacity}, Fare: {ride.fare_per_km} per km
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h2 className="about-subheading">Our Vision</h2>
        <p className="about-paragraph">
          We aim to become the leading provider of eco-friendly and affordable transportation solutions across India.
        </p>

        <h2 className="about-subheading">Explore Our Services</h2>
        <ul className="about-services-list">
          {data.services.map((service) => (
            <li key={service.service_name}>* {service.service_name} - {service.description}</li>
          ))}
        </ul>

        <div className="about-hero-image">
          <img src="/images/logo1.png" alt="About Aamcha Auto" className="about-hero-image" />
        </div>
      </div>
    </main>
  );
};
