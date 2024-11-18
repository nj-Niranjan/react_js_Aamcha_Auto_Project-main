import React from "react";
import "../../../App.css";

export const PressPage = () => {
  return (
    <div className="press-page">
      <div className="press-hero-section">
        <h1 className="press-hero-title">Aamcha Auto Press Room</h1>
        <p className="press-hero-tagline">Stay updated with our latest news and announcements!</p>
      </div>

      <p className="press-description">
        Welcome to the Aamcha Auto Press Room. Here you can find our latest press releases and news articles.
      </p>

      <div className="press-releases-container">
        {pressReleases.map((release) => (
          <div className="press-release-box" key={release.id}>
            <img src={release.image} alt={release.title} className="press-image" />
            <h3>{release.title}</h3>
            <p>{release.description}</p>
            <iframe
              title={release.videoTitle}
              src={release.videoUrl}
              className="press-video"
              allowFullScreen
            />
            <div className="social-share">
              <a href={`https://twitter.com/share?text=${release.title}&url=${release.url}`} target="_blank" rel="noopener noreferrer">Share on Twitter</a>
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${release.url}`} target="_blank" rel="noopener noreferrer">Share on Facebook</a>
            </div>
          </div>
        ))}
      </div>

      <div className="press-cta-section">
        <h2>Stay Updated!</h2>
        <p>Subscribe to our newsletter for the latest updates and press releases.</p>
        <button className="press-btn btn-subscribe">Subscribe Now</button>
      </div>
    </div>
  );
};

const pressReleases = [
  {
    id: 1,
    image: "path/to/image1.jpg",
    title: "New Partnership with Local Businesses",
    description: "Aamcha Auto has partnered with local businesses to enhance rider experience.",
    videoTitle: "New Partnership Video",
    videoUrl: "https://www.youtube.com/embed/video_id",
    url: "https://example.com/press-release-1",
  },
  {
    id: 2,
    image: "path/to/image2.jpg",
    title: "Launch of Our New App Feature",
    description: "We are thrilled to announce the launch of our new feature that allows users to track their rides in real-time.",
    videoTitle: "New App Feature Video",
    videoUrl: "https://www.youtube.com/embed/video_id",
    url: "https://example.com/press-release-2",
  },
  {
    id: 3,
    image: "path/to/image3.jpg",
    title: "Aamcha Auto Celebrates Milestone",
    description: "Join us in celebrating a milestone of over 1 million rides completed!",
    videoTitle: "Milestone Celebration Video",
    videoUrl: "https://www.youtube.com/embed/video_id",
    url: "https://example.com/press-release-3",
  },
  {
    id: 4,
    image: "path/to/image4.jpg",
    title: "Expanding to New Cities",
    description: "We are excited to announce the expansion of Aamcha Auto to three new cities: Pune, Bangalore, and Hyderabad.",
    videoTitle: "Expansion Video",
    videoUrl: "https://www.youtube.com/embed/video_id",
    url: "https://example.com/press-release-4",
  },
  {
    id: 5,
    image: "path/to/image5.jpg",
    title: "Introduction of Eco-Friendly Rides",
    description: "As part of our commitment to sustainability, we are introducing electric vehicles into our fleet.",
    videoTitle: "Eco-Friendly Rides Video",
    videoUrl: "https://www.youtube.com/embed/video_id",
    url: "https://example.com/press-release-5",
  },
  {
    id: 6,
    image: "path/to/image6.jpg",
    title: "Collaboration with Local Artists",
    description: "Aamcha Auto is proud to collaborate with local artists for our fleet branding.",
    videoTitle: "Artists Collaboration Video",
    videoUrl: "https://www.youtube.com/embed/video_id",
    url: "https://example.com/press-release-6",
  },
  {
    id: 7,
    image: "path/to/image7.jpg",
    title: "Launch of Aamcha Auto Rewards Program",
    description: "Introducing our new rewards program where loyal customers can earn points for every ride.",
    videoTitle: "Rewards Program Video",
    videoUrl: "https://www.youtube.com/embed/video_id",
    url: "https://example.com/press-release-7",
  },
  {
    id: 8,
    image: "path/to/image8.jpg",
    title: "Support for Local Charities",
    description: "This month, Aamcha Auto will donate a portion of every ride to local charities.",
    videoTitle: "Charity Support Video",
    videoUrl: "https://www.youtube.com/embed/video_id",
    url: "https://example.com/press-release-8",
  },
];

export default PressPage;
