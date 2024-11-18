import React from "react";
import { FaShieldAlt, FaUserShield, FaCheckCircle, FaPhoneAlt, FaClipboardCheck } from "react-icons/fa";
import "../../../../src/App.css";

export const Safety = () => {
  return (
    <div className="safety-page">
      <h1 className="safety-title">Your Safety is Our Priority</h1>
      <p className="safety-description">
        At Aamcha Auto, we take your safety very seriously. We have implemented various safety measures to ensure you have a secure ride.
      </p>

      <div className="safety-measures">
        <div className="safety-card">
          <FaShieldAlt className="safety-icon" />
          <h3>Verified Drivers</h3>
          <p>All our drivers are background-checked and trained to provide the safest ride possible.</p>
        </div>

        <div className="safety-card">
          <FaUserShield className="safety-icon" />
          <h3>In-App Safety Features</h3>
          <p>Use our app's emergency features to contact authorities or share your trip details with loved ones.</p>
        </div>

        <div className="safety-card">
          <FaCheckCircle className="safety-icon" />
          <h3>24/7 Customer Support</h3>
          <p>Our customer support team is available 24/7 to assist you in case of any issues during your ride.</p>
        </div>

        <div className="safety-card">
          <FaPhoneAlt className="safety-icon" />
          <h3>Emergency Contact</h3>
          <p>Set up an emergency contact in the app to notify them in case of an emergency.</p>
        </div>

        <div className="safety-card">
          <FaClipboardCheck className="safety-icon" />
          <h3>Ride Tracking</h3>
          <p>Track your ride in real-time and share your location with friends and family.</p>
        </div>

        <div className="safety-card">
          <FaCheckCircle className="safety-icon" />
          <h3>Health & Hygiene Measures</h3>
          <p>We ensure that all our vehicles are regularly sanitized for your safety.</p>
        </div>
      </div>

      <div className="safety-cta">
        <h2>Have Questions?</h2>
        <p>Contact our support team for any inquiries regarding our safety measures.</p>
        <button className="safety-btn btn-primary">Contact Support</button>
      </div>
    </div>
  );
};

export default Safety;
