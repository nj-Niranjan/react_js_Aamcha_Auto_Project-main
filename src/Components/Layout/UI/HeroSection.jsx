import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const HeroSection = ({ setShowAbout }) => {
  const navigate = useNavigate();

  const handleStartRide = () => {
    navigate('/book-ride'); 
  };

  const handleLogoClick = () => {
    setShowAbout(prev => !prev);
  };

  return (
    <main className="hero-section main">
      <div className="hero-section-container grid grid-two-cols">
        <div className="hero-content">
          <h1 className="hero-section-heading-xl">Get The <br /> Best Ride Here</h1>
          <p className="hero-section-paragraph">
            The Ride You Need, <br /> The Pay Drivers Deserve
          </p>
          <button className="hero-section-btn hero-section-btn-darken hero-section-btn-inline hero-section-bg-white-box" onClick={handleStartRide}>
            Start Ride <FaArrowRight />
          </button>
        </div>
        <div className="hero-section-hero-image">
          <img src="/images/epv.png" alt="EV Auto" className="hero-section-banner-image" />
        </div>
      </div>

      <div className="hero-section-logo-container" onClick={handleLogoClick}>
        <img src="/images/logo1.png" alt="hero-section-Company Logo" className="hero-section-logo" />
      </div>
    </main>
  );
};
