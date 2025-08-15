import React, { useState, useRef } from 'react';
import './FAQSection.css';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const answerRefs = useRef([]);

  const faqs = [
    {
      question: "Why is matrimony.com better compared to other matrimonial websites?",
      answer: "matrimony.com stands out as India's leading matchmaking platform with over 80 Lakh success stories, a testament to its trust and effectiveness. Unlike traditional matrimonial sites, matrimony.com offers verified profiles, personalized matchmaking services, and advanced search tools that help users find compatible partners with ease and confidence. Its focus on safety, authenticity, and meaningful connections makes it a preferred choice for millions."
    },
    {
      question: "Is matrimony.com a trustworthy matchmaking platform?",
      answer: "Yes, matrimony.com is a highly trustworthy platform with stringent verification processes and privacy measures to ensure authentic connections and user safety."
    },
    {
      question: "What is the difference between free membership vs paid membership?",
      answer: "Free membership offers basic search and limited communication, while paid membership provides unlimited communication, priority customer support, and advanced matchmaking features."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              key={index}
            >
              <div 
                className="faq-question" 
                onClick={() => toggleFAQ(index)}
              >
                <span className="faq-number">{String(index + 1).padStart(2, '0')}</span>
                <h3>{faq.question}</h3>
                <span className="toggle-icon">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </div>
              
              <div 
                className="faq-answer"
                ref={el => answerRefs.current[index] = el}
                style={{
                  maxHeight: activeIndex === index ? `${answerRefs.current[index]?.scrollHeight}px` : '0'
                }}
              >
                <div className="answer-content">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;