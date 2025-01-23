import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CategoryPage.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import AllDogsBanner from "../components/AllDogsBanner/AllDogsBanner";
import FilterSidebar from "../components/FilterSidebar/FilterSidebar";
import pet1 from "./../assets/images/pet1.png";
import pet2 from "./../assets/images/pet2.png";
import pet3 from "./../assets/images/pet3.png";
import pet4 from "./../assets/images/pet4.png";
import pet5 from "./../assets/images/pet5.png";
import pet6 from "./../assets/images/pet6.png";
import pet7 from "./../assets/images/pet7.png";
import pet8 from "./../assets/images/pet8.png";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import { SiDatadog } from "react-icons/si";

const CategoryPage = () => {
  const breadcrumbPaths = [
    { label: "Home", link: "/" },
    { label: "Dog", link: "/category" },
  ];

    const productsData = [
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

  const [filteredProducts, setFilteredProducts] = useState(productsData);

  const handleFiltersChange = ({ genders = [], breeds = [] }) => {
    const filtered = productsData.filter((product) => {
      const genderMatch = genders.length === 0 || genders.includes(product.gender);
      const breedMatch =
        breeds.length === 0 ||
        (breeds.includes("Small") && product.age === "02 months") ||
        (breeds.includes("Medium") && product.age === "04 months") ||
        (breeds.includes("Large") && product.age === "06 months");

      return genderMatch && breedMatch; // Combine filters with AND logic
    });

    setFilteredProducts(filtered);
  };

  return (
    <div className="category-header">
      <Navbar />
      <div className="category-header-content">
        <div className="breadcrumb-section">
          <Breadcrumb paths={breadcrumbPaths} />
        </div>
        <div className="category-banner">
          <AllDogsBanner />
        </div>

        <div className="category-page">
          <div className="filter-section">
            <FilterSidebar onFiltersChange={handleFiltersChange} />
          </div>
          <div className="category-section">
            <div className="category-section-header">
              <h1>Dogs</h1>
              <h4>{filteredProducts.length} puppies</h4>
            </div>
            <div className="category-grid">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div key={product.id} className="category-card">
                    <Link style={{ textDecoration: "none"}} to={`/dog/${product.name}`} reloadDocument={true}>
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>
                      Gender: <b>{product.gender}</b> &nbsp; • &nbsp; Age: <b>{product.age}</b>
                    </p>
                    <h3>{product.price}</h3>
                    </Link>
                  </div>
                ))
              ) : (
                <div className="no-dogs-found">
                <SiDatadog size={300} />
                <h3>No dogs found!! </h3>
              </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CategoryPage;
