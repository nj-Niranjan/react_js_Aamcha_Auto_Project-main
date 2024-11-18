import React from "react"; 
import "../../../App.css";

export const Blog = () => {
  return (
    <div className="blog-page">
      <h1 className="blog-title">Latest News & Updates</h1>
      <div className="blog-posts">

        <div className="blog-post">
          <img src="/images/fleet.jpg" alt="Expanding Our Fleet" className="blog-image" />
          <h3>Expanding Our Fleet</h3>
          <p className="blog-author">By John Doe | October 20, 2024</p>
          <p>
            We are excited to announce the addition of new vehicles to our fleet, providing you with more options for your rides! Our expanded fleet includes eco-friendly options and luxury vehicles to cater to all our customers’ needs.
          </p>
          <a href="/read-more" className="read-more">Read More</a>
        </div>

        <div className="blog-post">
          <img src="/images/safety.jpg" alt="New Safety Features" className="blog-image" />
          <h3>New Safety Features</h3>
          <p className="blog-author">By Jane Smith | October 18, 2024</p>
          <p>
            Learn about the new safety features we are implementing to ensure your safety during rides. Our vehicles are now equipped with advanced GPS tracking and emergency contact features to enhance your security.
          </p>
          <a href="/read-more" className="read-more">Read More</a>
        </div>

        <div className="blog-post">
          <img src="/images/training.jpg" alt="Driver Training Program" className="blog-image" />
          <h3>Driver Training Program</h3>
          <p className="blog-author">By Alex Johnson | October 15, 2024</p>
          <p>
            Discover our comprehensive driver training program designed to enhance the safety and quality of our services. Our training focuses on defensive driving techniques and customer service excellence.
          </p>
          <a href="/read-more" className="read-more">Read More</a>
        </div>

        <div className="blog-post">
          <img src="/images/partnership.jpg" alt="New Partnerships" className="blog-image" />
          <h3>New Partnerships</h3>
          <p className="blog-author">By Emily Davis | October 10, 2024</p>
          <p>
            We are thrilled to announce new partnerships with local businesses to enhance your experience. Enjoy exclusive discounts when you ride with us!
          </p>
          <a href="/read-more" className="read-more">Read More</a>
        </div>

        <div className="blog-post">
          <img src="/images/feedback.jpg" alt="Customer Feedback" className="blog-image" />
          <h3>Your Feedback Matters</h3>
          <p className="blog-author">By Mark Wilson | October 5, 2024</p>
          <p>
            We value your feedback! Help us improve our services by sharing your experience with us. Your input helps us to better meet your needs.
          </p>
          <a href="/read-more" className="read-more">Read More</a>
        </div>

      </div>
    </div>
  );
};
