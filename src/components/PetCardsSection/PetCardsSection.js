import React from "react";
import "./PetCardsSection.css";
import { Link } from "react-router-dom";
import pet1 from "../../assets/images/pet1.png";
import pet2 from "../../assets/images/pet2.png";
import pet3 from "../../assets/images/pet3.png";
import pet4 from "../../assets/images/pet4.png";
import pet5 from "../../assets/images/pet5.png";
import pet6 from "../../assets/images/pet6.png";
import pet7 from "../../assets/images/pet7.png";
import pet8 from "../../assets/images/pet8.png";
import { IoIosArrowForward } from "react-icons/io";

const PetCardsSection = () => {
  const pets = [
    {
      id: 1,
      name: "MO231 - Pomeranian White",
      image: pet1, // Replace with actual image paths
      gene: "Male",
      age: "02 months",
      price: "6.900.000 VND",
    },
    {
      id: 2,
      name: "MO502 - Poodle Tiny Yellow",
      image: pet2,
      gene: "Female",
      age: "02 months",
      price: "3.900.000 VND",
    },
    {
      id: 3,
      name: "MO102 - Poodle Tiny Sepia",
      image: pet3,
      gene: "Male",
      age: "02 months",
      price: "4.000.000 VND",
    },
    {
      id: 4,
      name: "MO512 - Alaskan Malamute Grey",
      image: pet4,
      gene: "Male",
      age: "02 months",
      price: "8.900.000 VND",
    },
    {
        id: 5,
        name: "MO232 - Pembroke Corgi Cream",
        image: pet5,
        gene: "Male",
        age: "02 months",
        price: "7.900.000 VND",
      },
      {
        id: 6,
        name: "MO503 - Pembroke Corgi Tricolor",
        image: pet6,
        gene: "Female",
        age: "02 months",
        price: "9.000.000 VND",
      },
      {
        id: 7,
        name: "MO233 - Pomeranian White",
        image: pet7,
        gene: "Female",
        age: "02 months",
        price: "6.500.000 VND",
      },
      {
        id: 8,
        name: "MO513 - Poodle Tiny Dairy Cow",
        image: pet8,
        gene: "Male",
        age: "02 months",
        price: "5.000.000 VND",
      },
    // Add more pets as necessary
  ];

  return (
    <div className="pets-section">
      <div className="section-header">
        <div className="section-header-column1">
          <h4>Whats new?</h4>
          <h2>Take a Look at Some of Our Pets</h2>
        </div>
        <button className="view-more-btn"><a href="/category">View More</a> &nbsp;<i><IoIosArrowForward /></i></button>
      </div>
      <div className="pets-grid">
        {pets.map((pet) => (
          <div className="pet-card" key={pet.id}>
            <Link style={{ textDecoration: "none"}} to={`/dog/${pet.name}`} reloadDocument={true}>
            <img src={pet.image} alt={pet.name} className="pet-image" />
            <div className="pet-details">
              <h3>{pet.name}</h3>
              <p>Gene: <b>{pet.gene}</b> &nbsp; • &nbsp; Age: <b>{pet.age}</b></p>
              <h3 className="pet-price">{pet.price}</h3>  
            </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetCardsSection;
