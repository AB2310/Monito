import React, { useState } from "react";
import "./Carousel.css";
import { Link } from "react-router-dom";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex + 4 < items.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="carousel-container">
      <button
        className="carousel-arrow carousel-arrow-left"
        onClick={handlePrev}
        disabled={currentIndex === 0}
      >
        &#8249;
      </button>
      <div className="carousel-items">
        {items.slice(currentIndex, currentIndex + 4).map((item, index) => (
          <div className="carousel-card" key={index}>
            <Link style={{ textDecoration: "none"}} to={`/dog/${item.name}`} reloadDocument={true}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>
              Gender: <b>{item.gene}</b> &nbsp; • &nbsp; Age:{" "}
              <b>{item.age}</b>
            </p>
            <h3>{item.price}</h3>
            </Link>
          </div>
        ))}
      </div>
      <button
        className="carousel-arrow carousel-arrow-right"
        onClick={handleNext}
        disabled={currentIndex + 4 >= items.length}
      >
        &#8250;
      </button>
    </div>
  );
};

export default Carousel;
