import React, { useState } from 'react';
import "../App.css";
import { FaPlus, FaMinus } from 'react-icons/fa';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What services do you offer?",
      answer: "We offer a variety of transportation services, including ride-sharing, rentals, and chauffeur services tailored to your needs."
    },
    {
      question: "How can I contact support?",
      answer: "You can reach us through our contact page, via email at support@aamchaauto.com, or call us at 1-800-123-4567."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including credit cards, debit cards, and mobile wallets for your convenience."
    },
    {
      question: "Is my personal information safe?",
      answer: "Yes, we prioritize your privacy and security. All personal data is encrypted and securely stored."
    },
    {
      question: "Can I cancel my ride?",
      answer: "Yes, you can cancel your ride through the app or by contacting customer support. Please note that cancellation policies apply."
    }
  ];

  return (
    <section className="faq">
      <div className="faq-left">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-items">
          {faqData.map((item, index) => (
            <div className="faq-item" key={index}>
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <h3>{item.question}</h3>
                {openIndex === index ? <FaMinus className="faq-icon" /> : <FaPlus className="faq-icon" />}
              </div>
              {openIndex === index && <p className="faq-answer">{item.answer}</p>}
            </div>
          ))}
        </div>
      </div>
      <div className="faq-right">
        <div className="faq-gif-container">
          <img src="/images/person1.gif" alt="Informational GIF" className="faq-gif" />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
