import React from "react";
import "./ProductSection.css";
import gift from "../../assets/images/gift.png"
import prod1 from "../../assets/images/prod1.png"
import prod2 from "../../assets/images/prod2.png"
import prod3 from "../../assets/images/prod3.png"
import prod4 from "../../assets/images/prod4.png"
import prod5 from "../../assets/images/prod5.png"
import prod6 from "../../assets/images/prod6.png"
import prod7 from "../../assets/images/prod7.png"
import prod8 from "../../assets/images/prod8.png"
import { IoIosArrowForward } from "react-icons/io";


const ProductSection = () => {
const products = [
  {
    id: 1,
    image: prod1,
    name: "Reflex Plus Adult Cat Food Salmon",
    detail1: "Dog Food",
    detail2: "385gm",
    price: "140.000 VND",
    label: "Free Toy & Free Shaker",
  },
  {
    id: 2,
    image: prod2,
    name: "Reflex Plus Adult Cat Food Salmon",
    detail1: "Cat Food",
    detail2: "1.5kg",
    price: "165.000 VND",
    label: "Free Toy & Free Shaker",
  },
  {
    id: 3,
    image: prod3,
    name: "Cat Scratching Ball Toy Kitten Sisal Rope Ball",
    detail1: "Toy",
    detail2: "",
    price: "1.100.000 VND",
    label: "Free Cat Food",
  },
  {
    id: 4,
    image: prod4,
    name: "Cute Pet Cat Warm Nest",
    detail1: "Toy",
    detail2: "",
    price: "410.000 VND",
    label: "Free Cat Food",
  },
  {
    id: 5,
    image: prod5,
    name: "NaturVet Dogs - Omega-Gold Plus Salmon Oil",
    detail1: "Dog Food",
    detail2: "385gm",
    price: "350.000 VND",
    label: "Free Toy & Free Shaker",
  },
  {
    id: 6,
    image: prod6,
    name: "Costumes Fashion Pet Clother Cowboy Rider",
    detail1: "Costume",
    detail2: "1.5kk",
    price: "500.000 VND",
    label: "Free Toy & Free Shaker",
  },
  {
    id: 7,
    image: prod7,
    name: "Costumes Chicken Drumsti ck Headband",
    detail1: "Costume",
    detail2: "",
    price: "400.000 VND",
    label: "Free Cat Food",
  },
  {
    id: 8,
    image: prod8,
    name: "Plush Pet Toy",
    detail1: "Toy",
    detail2: "",
    price: "250.000 VND",
    label: "Free Food & Shaker",
  },
  // Add more product objects as needed
];


  return (
    <div className="product-section">
      <div className="product-header">
              <div className="product-header-column1">
                <h4>Hard to choose right products for your pets?</h4>
                <h2>Our Products</h2>
              </div>
              <button className="view-more-prodbtn">View More &nbsp;<i><IoIosArrowForward /></i></button>
     </div>
     <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} className="product-image" />
                <h3 className="product-name">{product.name}</h3>
                <p className="product-details">
                    <div><span className="details-title">Product:</span> <span className="details-value">{product.detail1}</span>&nbsp;</div>
                    
                    {product.detail2 && (
                    <div>&nbsp;<b>•</b> &nbsp;<span className="details-title">Size:</span> <span className="details-value">{product.detail2}</span></div>)}
                    
                    
                </p>
                <p className="product-price">{product.price}</p>
                <div className="product-label">
                  <span className="label-icon"><img src={gift} alt="gift"/></span><b>•</b> {product.label}
                </div>
              </div>
            ))}
        </div>    
    </div>
  );
};

export default ProductSection;
