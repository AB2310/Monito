import React from "react";
import "./DogDetailsPage.css";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";

const DogDetailsPage = ({ dog }) => {
  // Sample data for dog details
  const breadcrumbPaths = [
    { label: "Home", link: "/" },
    { label: "Dog", link: "/category" },
    { label: dog.name, link: `/category/dog/${dog.name.toLowerCase().replace(/\s/g, "-")}` },
  ];

  const details = [
    {
        name: "Shiba Inu Sepia",
        sku: "#1000078",
        price: "34.000.000 VND",
        mainImage: "https://via.placeholder.com/600x400",
        images: [
          "https://via.placeholder.com/80",
          "https://via.placeholder.com/80",
          "https://via.placeholder.com/80",
          "https://via.placeholder.com/80",
        ],
        gender: "Female",
        age: "2 Months",
        size: "Small",
        color: "Apricot & Tan",
        vaccinated: true,
        dewormed: true,
        cert: "Yes (MKA)",
        microchip: true,
        location: "Vietnam",
        publishedDate: "12-Oct-2022",
        additionalInfo: "Pure breed Shih Tzu. Good body structure. With MKA cert and Microchip. Father from champion lineage.",
        guarantees: [
          {
            icon: "https://via.placeholder.com/20",
            text: "100% health guarantee for pets",
          },
          {
            icon: "https://via.placeholder.com/20",
            text: "100% guarantee of pet identification",
          },
        ],
        socialLinks: [
          { icon: "fab fa-facebook", url: "https://facebook.com" },
          { icon: "fab fa-twitter", url: "https://twitter.com" },
          { icon: "fab fa-instagram", url: "https://instagram.com" },
          { icon: "fab fa-youtube", url: "https://youtube.com" },
        ],
      },
  ];

  return (
    <div className="dog-details-container">
      <div className="breadcrumb-section">
        <Breadcrumb paths={breadcrumbPaths} />
      </div>

      <div className="dog-details-main">
        {/* Left Section: Images */}
        <div className="dog-main-image">
          <img src={dog.mainImage} alt={dog.name} />
          <div className="dog-thumbnails">
            {dog.images.map((image, index) => (
              <img key={index} src={image} alt={`Thumbnail ${index + 1}`} />
            ))}
          </div>
        </div>

        {/* Right Section: Details */}
        <div className="dog-info">
          <h1>{dog.name}</h1>
          <h2>{dog.price}</h2>
          <div className="dog-buttons">
            <button className="primary-btn">Contact us</button>
            <button className="outline-btn">Chat with Monito</button>
          </div>

          <ul className="details-list">
            {details.map((detail, index) => (
              <li key={index}>
                <span>{detail.label}:</span> {detail.value}
              </li>
            ))}
          </ul>

          <div className="guarantee-section">
            {dog.guarantees.map((guarantee, index) => (
              <div key={index} className="guarantee-badge">
                <img src={guarantee.icon} alt={`Guarantee ${index + 1}`} />
                {guarantee.text}
              </div>
            ))}
          </div>

          <div className="share-section">
            <span>Share:</span>
            {dog.socialLinks.map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DogDetailsPage;
