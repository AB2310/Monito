// import React from "react";
// import Navbar from "../components/Navbar/Navbar";
// import HeroSection from "../components/HeroSection/HeroSection";
// import "./HomePage.css";
// import PetCardsSection from "../components/PetCardsSection/PetCardsSection";
// import Footer from "../components/Footer/Footer";

// const HomePage = () => {
//   return (
//     <div className="homepage-container">
//       <Navbar />
//       <HeroSection />
//       <PetCardsSection />
//       <Footer />
//     </div>
//   );
// };

// export default HomePage;

// import React from "react";
// import Navbar from "../components/Navbar/Navbar";
// import HeroSection from "../components/HeroSection/HeroSection";
// import PetsSection from "../components/PetCardsSection/PetCardsSection"; // Import the new PetsSection
// import "./HomePage.css";

// const HomePage = () => {
//   return (
//     <div className="homepage-container">
//       <Navbar />
//       <HeroSection />
//       <PetsSection /> {/* Add the PetsSection here */}
//     </div>
//   );
// };

// export default HomePage;

import React from "react";
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/HeroSection/HeroSection";
import PetsSection from "../components/PetCardsSection/PetCardsSection";
import BannerSection from "../components/Banner/Banner"; 
import ProductSection from "../components/ProductSection/ProductSection";
import PartnerLogos from "../components/PartnerLogos/PartnerLogos";
import AdoptionBanner from "../components/AdoptionBanner/AdoptionBanner";
import KnowledgeSection from "../components/KnowledgeSection/KnowledgeSection";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";

import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/category">Category</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>,
    <div className="homepage-container">
      <Navbar />
      <HeroSection />
      <PetsSection />
      <BannerSection /> 
      <ProductSection />
      <PartnerLogos />
      <AdoptionBanner />
      <KnowledgeSection />
      <Footer />

    </div>
  );
};



export default HomePage;


