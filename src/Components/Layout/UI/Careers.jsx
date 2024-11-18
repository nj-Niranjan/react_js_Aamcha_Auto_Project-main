import React from "react"; 
import { FaBriefcase, FaUsers, FaHandsHelping, FaClock, FaDollarSign, FaGraduationCap } from "react-icons/fa";
import "../../../App.css"; 

export const Careers = () => {
  return (
    <div className="careers-page">
      <h1 className="careers-title">Join Our Team</h1>
      <p className="careers-description">
        At Aamcha Auto, we are always looking for talented individuals to join our team. 
        If you are passionate about the auto industry and customer service, we want to hear from you!
      </p>

      <div className="careers-benefits">
        <div className="careers-card">
          <FaBriefcase className="careers-icon" />
          <h3>Exciting Opportunities</h3>
          <p>Explore a variety of roles in a fast-paced environment.</p>
        </div>

        <div className="careers-card">
          <FaUsers className="careers-icon" />
          <h3>Team Environment</h3>
          <p>Work alongside talented and motivated individuals.</p>
        </div>

        <div className="careers-card">
          <FaHandsHelping className="careers-icon" />
          <h3>Impactful Work</h3>
          <p>Make a difference in the lives of our customers and drivers.</p>
        </div>

        <div className="careers-card">
          <FaClock className="careers-icon" />
          <h3>Flexible Hours</h3>
          <p>Enjoy flexible working hours that suit your lifestyle.</p>
        </div>

        <div className="careers-card">
          <FaDollarSign className="careers-icon" />
          <h3>Competitive Salary</h3>
          <p>We offer competitive salaries and benefits packages.</p>
        </div>

        <div className="careers-card">
          <FaGraduationCap className="careers-icon" />
          <h3>Continuous Learning</h3>
          <p>Opportunities for professional development and training.</p>
        </div>
      </div>

      <div className="careers-cta">
        <h2>Available Positions</h2>
        <p>Check our latest job openings and apply today!</p>
        <button className="careers-btn btn-primary">View Openings</button>
      </div>

      <div className="careers-faq">
        <h2>Frequently Asked Questions</h2>
        <ul>
          <li><strong>Q:</strong> What positions are currently open?</li>
          <li><strong>A:</strong> Please click the "View Openings" button to see our latest job listings.</li>
          <li><strong>Q:</strong> How can I apply for a job?</li>
          <li><strong>A:</strong> You can apply directly through our website or contact our HR department at <a href="mailto:hr@aamchaauto.com">hr@aamchaauto.com</a>.</li>
          <li><strong>Q:</strong> What is the interview process like?</li>
          <li><strong>A:</strong> Our interview process typically includes a phone screen followed by one or more in-person interviews.</li>
        </ul>
      </div>
    </div>
  );
};

export default Careers;
