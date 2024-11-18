// Promotions.jsx
import React from 'react';
import "../App.css";

const Promotions = () => {
  const promotionsData = [
    {
      title: "20% Off Your First Ride!",
      description: "Use code: FIRST20 at checkout.",
    },
    {
      title: "Refer a Friend & Earn Credits!",
      description: "Get $10 for every friend you refer. No limits!",
    },
    {
      title: "Weekend Special: 15% Off!",
      description: "Available for rides booked on Saturday and Sunday.",
    },
    {
      title: "Happy Hour Deals: 30% Off!",
      description: "Enjoy 30% off rides from 5 PM to 7 PM.",
    },
    {
      title: "Free Ride for New Users!",
      description: "Sign up and enjoy your first ride on us.",
    },
  ];

  return (
    <section className="promotions">
      <h2>Current Promotions</h2>
      <div className="promotion-cards-container">
        {promotionsData.map((promotion, index) => (
          <div className="promotion-card" key={index}>
            <h3>{promotion.title}</h3>
            <p>{promotion.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Promotions;
