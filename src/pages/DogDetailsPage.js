import React from "react";
import { useParams } from "react-router-dom";
import "./DogDetailsPage.css";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
// import PetCardsSection2 from "../components/PetCardsSection2/PetCardsSection2";
import Carousel from "../components/Carousel/Carousel";
import pet1 from "./../assets/images/pet1.png";
import pet2 from "./../assets/images/pet2.png";
import pet3 from "./../assets/images/pet3.png";
import pet4 from "./../assets/images/pet4.png";
import pet5 from "./../assets/images/pet5.png";
import pet6 from "./../assets/images/pet6.png";
import pet7 from "./../assets/images/pet7.png";
import pet8 from "./../assets/images/pet8.png";
import pet2_1 from "./../assets/images/pet2_1.png";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import badge1 from "./../assets/images/badge1.png";
import badge2 from "./../assets/images/badge2.png";
import { BsChatLeftDots } from "react-icons/bs";
import { PiShareNetworkBold } from "react-icons/pi";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiDatadog } from "react-icons/si";

const DogDetailsPage = () => {
  const { name } = useParams(); // Get the name from the route
  const dogs = [
    {
          id: 1,
          image: pet2,
          name: "MO502 - Poodle Tiny Yellow",
          gender: "Female",
          age: "02 months",
          price: "3.900.000 VND",
        },
        {
          id: 2,
          image: pet3,
          name: "MO102 - Poodle Tiny Sepia",
          gender: "Male",
          age: "02 months",
          price: "4.000.000 VND",
        },
        {
          id: 3,
          name: "MO512 - Alaskan Malamute Grey",
          image: pet4,
          gender: "Male",
          age: "02 months",
          price: "8.900.000 VND",
        },
        {
          id: 4,
          image: pet6,
          name: "MO502 - Pembroke Corgi Tricolor",
          gender: "Female",
          age: "02 months",
          price: "9.000.000 VND",
        },
        {
          id: 5,
          image: pet5,
          name: "MO231 - Pembroke Corgi Cream",
          gender: "Male",
          age: "02 months",
          price: "7.900.000 VND",
        },
        {
          id: 6,
          name: "M0231 - Pomeranian White",
          image: pet7,
          gender: "Male",
          age: "02 months",
          price: "6.000.000 VND",
        },
        {
          id: 7,
          image: pet8,
          name: "MO512 - Poodle Tiny Dairy Cow",
          gender: "Female",
          age: "02 months",
          price: "5.000.000 VND",
        },
        {
          id: 8,
          image: pet4,
          name: "M0512 - Alaskan Malamute Grey",
          gender: "Male",
          age: "04 months",
          price: "9.000.000 VND",
        },
        {
          id: 10,
          image: pet2,
          name: "MO502 - Poodle Tiny Yellow",
          gender: "Female",
          age: "04 months",
          price: "3.900.000 VND",
        },
        {
          id: 11,
          image: pet3,
          name: "MO102 - Poodle Tiny Sepia",
          gender: "Male",
          age: "02 months",
          price: "4.000.000 VND",
        },
        {
          id: 13,
          image: pet6,
          name: "MO231 - Pembroke Corgi Tricolor",
          gender: "Female",
          age: "02 months",
          price: "8.900.000 VND",
        },
        {
          id: 14,
          image: pet1,
          name: "MO231 - Pomeranian White",
          gender: "Male",
          age: "02 months",
          price: "4.000.000 VND",
        },
  ];
  const dogData = [
    {
      id: 1,
      name: "MO502 - Poodle Tiny Yellow",
      sku: "#1001",
      price: "3.900.000 VND",
      mainImage: pet2,
      images: [
        pet2_1,
        "https://via.placeholder.com/80",
        "https://via.placeholder.com/80",
      ],
      gender: "Female",
      age: "02 months",
      size: "Small",
      color: "Yellow",
      vaccinated: true,
      dewormed: true,
      cert: "Yes (MKA)",
      microchip: true,
      location: "Vietnam",
      publishedDate: "12-Oct-2022",
      additionalInfo:["Small family friendly dog.", "Good with children", "Playful and energetic."],
      guarantees: [
        {
          icon: badge1,
          text: "100% health guarantee for pets",
        },
        {
          icon: badge2,
          text: "100% guarantee of pet identification",
        },
      ],
    },
    {
      id: 2,
      name: "MO102 - Poodle Tiny Sepia",
      sku: "#1002",
      price: "4.000.000 VND",
      mainImage: pet3,
      images: [
        "https://via.placeholder.com/80",
        "https://via.placeholder.com/80",
        "https://via.placeholder.com/80",
      ],
      gender: "Male",
      age: "02 months",
      size: "Small",
      color: "Sepia",
      vaccinated: true,
      dewormed: true,
      cert: "Yes (MKA)",
      microchip: true,
      location: "Vietnam",
      publishedDate: "10-Oct-2022",
      additionalInfo: ["Small family friendly dog.", "Good with children", "Playful and energetic."],
      guarantees: [
        {
          icon: badge1,
          text: "100% health guarantee for pets",
        },
        {
          icon: badge2,
          text: "100% guarantee of pet identification",
        },
      ],
    },
    {
      id: 3,
      name: "MO512 - Alaskan Malamute Grey",
      sku: "#1003",
      price: "8.900.000 VND",
      mainImage: pet4,
      images: [
        "https://via.placeholder.com/80",
        "https://via.placeholder.com/80",
        "https://via.placeholder.com/80",
      ],
      gender: "Male",
      age: "04 months",
      size: "Medium",
      color: "Grey",
      vaccinated: true,
      dewormed: true,
      cert: "Yes (MKA)",
      microchip: true,
      location: "Hanoi, Vietnam",
      publishedDate: "15-Oct-2022",
      additionalInfo: [
        "Loyal and protective.",
        "Great family companion.",
        "Highly intelligent and trainable.",
      ],
      guarantees: [
        {
          icon: badge1,
          text: "100% health guarantee for pets",
        },
        {
          icon: badge2,
          text: "100% guarantee of pet identification",
        },
      ],
    },
    {
      id: 4,
      name: "MO231 - Pomeranian White",
      sku: "#1004",
      price: "6.900.000 VND",
      mainImage: pet1,
      images: [
        "https://via.placeholder.com/80",
        "https://via.placeholder.com/80",
        "https://via.placeholder.com/80",
      ],
      gender: "Male",
      age: "02 months",
      size: "Medium",
      color: "White",
      vaccinated: true,
      dewormed: true,
      cert: "Yes (MKA)",
      microchip: true,
      location: "Hanoi, Vietnam",
      publishedDate: "15-Nov-2023",
      additionalInfo: [
        "Loyal and protective.",
        "Great family companion.",
        "Highly intelligent and trainable.",
      ],
      guarantees: [
        {
          icon: badge1,
          text: "100% health guarantee for pets",
        },
        {
          icon: badge2,
          text: "100% guarantee of pet identification",
        },
      ],
    },
    // Add more dogs here
  ];

  // Find the dog details based on the ID
  const dog = dogData.find((dog) => dog.name.toLowerCase() === decodeURIComponent(name.toLowerCase()));

  if (!dog) {
    return <div className="nodog"><SiDatadog size={500} />;</div>
  }

  const breadcrumbPaths = [
    { label: "Home", link: "/" },
    { label: "Dog", link: "/category" },
    { label: dog.name, link: `/dog/${dog.id}` },
  ];

  return (
        <div className="dog-details-header">
        <Navbar />
        <div className="dog-details-container">
          <div className="dog-details-main">
            {/* Left Section: Images */}
            <div className="dog-main-image">
              <img src={dog.mainImage} alt={dog.name} />
              {/* <div className="dog-thumbnails">
                {dog.images.map((image, index) => (
                  <img key={index} src={image} alt={`Thumbnail ${index + 1}`} />
                ))}
              </div> */}
              <div className="guarantee-section">
                {dog.guarantees.map((guarantee, index) => (
                  <div key={index} className="guarantee-badge">
                    <img src={guarantee.icon} alt={`Guarantee ${index + 1}`} />
                    {guarantee.text}
                  </div>
                ))}
              </div>

              <div className="share-section">
                <span><b><PiShareNetworkBold /></b> &nbsp; Share:</span>
                <div className="share-social">
                  <a href="#" ><FaFacebook /></a>
                  <a href="#"><FaTwitter /></a>
                  <a href="#"><FaInstagram /></a>
                  <a href="#"><FaYoutube /></a>
                </div>
              </div>
            </div>

            {/* Right Section: Details */}
            <div className="dog-info">
                <div className="dog-breadcrumb-section">
            <Breadcrumb paths={breadcrumbPaths}/>
          </div >
                <h5>SKU {dog.sku}</h5>
              <h1>{dog.name}</h1>
              <h2>{dog.price}</h2>
              <div className="dog-buttons">
                <button className="dprimary-btn">Contact us</button>
                <button className="doutline-btn"><i><BsChatLeftDots /></i> &nbsp; Chat with Monito</button>
              </div>

              <div className="details-list">
                <div className="sku-section">
                  <span className="dl">SKU</span> : <span className="dl">{dog.sku}</span>
                </div>
                <div className="gender-section"> 
                  <span className="dl">Gender</span> : <span className="dl">{dog.gender}</span>
                </div>
                <div className="age-section">
                  <span className="dl">Age</span> : <span className="dl">{dog.age}</span>
                </div>
                <div className="size-section">
                  <span className="dl">Size</span> : <span className="dl">{dog.size}</span>
                </div>
                <div className="color-section">
                  <span className="dl">Color</span> : <span className="dl">{dog.color}</span>
                </div>
                <div className="vaccinated-section">
                  <span className="dl">Vaccinated</span> : <span className="dl">{dog.vaccinated ? "Yes" : "No"}</span>
                </div>
                <div className="dewormed-section">
                  <span className="dl">Dewormed</span> : <span className="dl">{dog.dewormed ? "Yes" : "No"}</span>
                </div>
                <div className="cert-section">
                  <span className="dl">Cert</span> : <span className="dl">{dog.cert}</span>
                </div>
                <div className="microchip-section">
                  <span className="dl">Microchip</span> : <span className="dl">{dog.microchip ? "Yes" : "No"}</span>
                </div>
                <div className="location-section">
                  <span className="dl"> Location</span> : <span className="dl">{dog.location}</span>
                </div>
                <div className="published-date-section">
                  <span className="dl">Published Date</span> : <span className="dl">{dog.publishedDate}</span>
                </div>
                <div className="additional-info-section">
                  <span className="dl">Additional Information</span> : <span className="dl">{dog.additionalInfo.map((info, index) => (<p key={index}>{info}</p>))}</span>
                </div>
              </div>

              
            </div>
          </div>
        </div>
        {/* <PetCardsSection2 /> */}
        <div className="carousel-heading">
          <h4>Whats new?</h4>
          <h2>See More Puppies</h2>
          <Carousel items={dogs} />
        </div>
        <Footer />
     </div>
  );    
};  

export default DogDetailsPage;
