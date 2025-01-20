import React from "react";
import "./KnowledgeSection.css";
import knowledgeImg1 from "../../assets/images/knowledge1.png";
import knowledgeImg2 from "../../assets/images/knowledge2.png";
import knowledgeImg3 from "../../assets/images/knowledge3.png";
import { IoIosArrowForward } from "react-icons/io";

const KnowledgeSection = () => {
  const knowledgeItems = [
    {
      id: 1,
      image: knowledgeImg1,
      tag: "Pet knowledge",
      title: "What is a Pomeranian? How to Identify Pomeranian Dogs",
      description:
        "The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circu…",
    },
    {
      id: 2,
      image: knowledgeImg2,
      tag: "Pet knowledge",
      title: "Dog Diet You Need To Know",
      description:
        "Dividing a dog’s diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially…",
    },
    {
      id: 3,
      image: knowledgeImg3,
      tag: "Pet knowledge",
      title:
        "Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively",
      description:
        "Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog.",
    },
  ];

  return (
    <div className="knowledge-section">
      <div className="knowledge-header">
        <div className="header-column">
          <h4>You already know?</h4>
          <h2>Useful Pet Knowledge</h2>
        </div>
        <button className="view-more-btn">
          View More &nbsp;<i><IoIosArrowForward /></i>
        </button>
      </div>
      <div className="knowledge-grid">
        {knowledgeItems.map((item) => (
          <div key={item.id} className="knowledge-card">
            <img
              src={item.image}
              alt={item.title}
              className="knowledge-image"
            />
            <span className="knowledge-tag">{item.tag}</span>
            <h3 className="knowledge-title">{item.title}</h3>
            <p className="knowledge-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KnowledgeSection;
