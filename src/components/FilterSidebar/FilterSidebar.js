// import React from "react";
// import "./FilterSidebar.css";

// const FilterSidebar = () => {
//   return (
//     <div className="filter-sidebar">
//       <h1 className="filter-title">Filter</h1>
      
//       {/* Gender Filter */}
//       <div className="filter-group">
//         <h3 className="filter-subtitle">Gender</h3>
//         <label className="filter-option">
//           <input type="checkbox" />
//           Male
//         </label>
//         <label className="filter-option">
//           <input type="checkbox" />
//           Female
//         </label>
//       </div>

//       {/* Color Filter */}
//       <div className="filter-group">
//         <h3 className="filter-subtitle">Color</h3>
//         <label className="filter-option">
//           <input type="checkbox" />
//           <span className="color-indicator" style={{ backgroundColor: "red" }}></span>
//           Red
//         </label>
//         <label className="filter-option">
//           <input type="checkbox" />
//           <span className="color-indicator" style={{ backgroundColor: "#FFB672" }}></span>
//           Apricot
//         </label>
//         <label className="filter-option">
//           <input type="checkbox" />
//           <span className="color-indicator" style={{ backgroundColor: "black" }}></span>
//           Black
//         </label>
//         <label className="filter-option">
//           <input type="checkbox" />
//           <span className="color-indicator" style={{ backgroundImage: "linear-gradient(to right, black 50%, white 50%)" }}></span>
//           Black & White
//         </label>
//         <label className="filter-option">
//           <input type="checkbox" />
//           <span className="color-indicator" style={{ backgroundColor: "silver" }}></span>
//           Silver
//         </label>
//         <label className="filter-option">
//           <input type="checkbox" />
//           <span className="color-indicator" style={{ backgroundColor: "#FFF7CE" }}></span>
//           Tan
//         </label>
//       </div>

//       {/* Price Filter */}
//       <div className="filter-group">
//         <h3 className="filter-subtitle">Price</h3>
//         <div className="price-range">
//           <input type="number" placeholder="Min" />
          
//           <input type="number" placeholder="Max" />
//         </div>
//       </div>

//       {/* Breed Filter */}
//       <div className="filter-group">
//         <h3 className="filter-subtitle">Breed</h3>
//         <label className="filter-option">
//           <input type="checkbox" />
//           Small
//         </label>
//         <label className="filter-option">
//           <input type="checkbox" />
//           Medium
//         </label>
//         <label className="filter-option">
//           <input type="checkbox" />
//           Large
//         </label>
//       </div>
//     </div>
//   );
// };

// export default FilterSidebar;




// import React, { useState } from "react";
// import "./FilterSidebar.css";

// const FilterSidebar = ({ onGenderChange }) => {
//   const [selectedGenders, setSelectedGenders] = useState([]);

//   const handleGenderChange = (e) => {
//     const value = e.target.value;
//     const checked = e.target.checked;

//     const updatedGenders = checked
//       ? [...selectedGenders, value] // Add gender if checked
//       : selectedGenders.filter((gender) => gender !== value); // Remove if unchecked

//     setSelectedGenders(updatedGenders);
//     onGenderChange(updatedGenders); // Notify parent component
//   };

//   return (
//     <div className="filter-sidebar">
//       <h1 className="filter-title">Filter</h1>

//       {/* Gender Filter */}
//       <div className="filter-group">
//         <h3 className="filter-subtitle">Gender</h3>
//         <label className="filter-option">
//           <input
//             type="checkbox"
//             value="Male"
//             checked={selectedGenders.includes("Male")}
//             onChange={handleGenderChange}
//           />
//           Male
//         </label>
//         <label className="filter-option">
//           <input
//             type="checkbox"
//             value="Female"
//             checked={selectedGenders.includes("Female")}
//             onChange={handleGenderChange}
//           />
//           Female
//         </label>
//       </div>
//          {/* Color Filter */}
//        <div className="filter-group">
//          <h3 className="filter-subtitle">Color</h3>
//          <label className="filter-option">
//            <input type="checkbox" />
//            <span className="color-indicator" style={{ backgroundColor: "red" }}></span>
//            Red
//          </label>
//          <label className="filter-option">
//            <input type="checkbox" />
//            <span className="color-indicator" style={{ backgroundColor: "#FFB672" }}></span>
//            Apricot
//          </label>
//          <label className="filter-option">
//            <input type="checkbox" />
//            <span className="color-indicator" style={{ backgroundColor: "black" }}></span>
//            Black
//          </label>
//          <label className="filter-option">
//            <input type="checkbox" />
//            <span className="color-indicator" style={{ backgroundImage: "linear-gradient(to right, black 50%, white 50%)" }}></span>
//            Black & White
//          </label>
//          <label className="filter-option">
//            <input type="checkbox" />
//            <span className="color-indicator" style={{ backgroundColor: "silver" }}></span>
//            Silver
//          </label>
//          <label className="filter-option">
//            <input type="checkbox" />
//            <span className="color-indicator" style={{ backgroundColor: "#FFF7CE" }}></span>
//            Tan
//          </label>
//        </div>

//        {/* Price Filter */}
//        <div className="filter-group">
//          <h3 className="filter-subtitle">Price</h3>
//          <div className="price-range">
//            <input type="number" placeholder="Min" />
          
//            <input type="number" placeholder="Max" />
//          </div>
//        </div>

//        {/* Breed Filter */}
//        <div className="filter-group">
//          <h3 className="filter-subtitle">Breed</h3>
//          <label className="filter-option">
//            <input type="checkbox" />
//            Small
//          </label>
//          <label className="filter-option">
//            <input type="checkbox" />
//            Medium
//          </label>
//          <label className="filter-option">
//            <input type="checkbox" />
//            Large
//          </label>
//        </div>
      
//     </div>
//   );
// };

// export default FilterSidebar;





import React, { useState } from "react";
import "./FilterSidebar.css";

const FilterSidebar = ({ onFiltersChange }) => {
  const [selectedGenders, setSelectedGenders] = useState([]);
  const [selectedBreeds, setSelectedBreeds] = useState([]);

  const handleGenderChange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;

    const updatedGenders = checked
      ? [...selectedGenders, value]
      : selectedGenders.filter((gender) => gender !== value);

    setSelectedGenders(updatedGenders);
    onFiltersChange({ genders: updatedGenders, breeds: selectedBreeds });
  };

  const handleBreedChange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;

    const updatedBreeds = checked
      ? [...selectedBreeds, value]
      : selectedBreeds.filter((breed) => breed !== value);

    setSelectedBreeds(updatedBreeds);
    onFiltersChange({ genders: selectedGenders, breeds: updatedBreeds });
  };

  return (
    <div className="filter-sidebar">
      <h1 className="filter-title">Filter</h1>

      {/* Gender Filter */}
      <div className="filter-group">
        <h3 className="filter-subtitle">Gender</h3>
        <label className="filter-option">
          <input
            type="checkbox"
            value="Male"
            checked={selectedGenders.includes("Male")}
            onChange={handleGenderChange}
          />
          Male
        </label>
        <label className="filter-option">
          <input
            type="checkbox"
            value="Female"
            checked={selectedGenders.includes("Female")}
            onChange={handleGenderChange}
          />
          Female
        </label>
      </div>

      {/* Color Filter */}
        <div className="filter-group">
          <h3 className="filter-subtitle">Color</h3>
          <label className="filter-option">
            <input type="checkbox" />
            <span className="color-indicator" style={{ backgroundColor: "red" }}></span>
            Red
          </label>
          <label className="filter-option">
            <input type="checkbox" />
            <span className="color-indicator" style={{ backgroundColor: "#FFB672" }}></span>
            Apricot
          </label>
          <label className="filter-option">
            <input type="checkbox" />
            <span className="color-indicator" style={{ backgroundColor: "black" }}></span>
            Black
          </label>
          <label className="filter-option">
            <input type="checkbox" />
            <span className="color-indicator" style={{ backgroundImage: "linear-gradient(to right, black 50%, white 50%)" }}></span>
            Black & White
          </label>
          <label className="filter-option">
            <input type="checkbox" />
            <span className="color-indicator" style={{ backgroundColor: "silver" }}></span>
            Silver
          </label>
          <label className="filter-option">
            <input type="checkbox" />
            <span className="color-indicator" style={{ backgroundColor: "#FFF7CE" }}></span>
            Tan
          </label>
        </div>

        {/* Price Filter */}
        <div className="filter-group">
          <h3 className="filter-subtitle">Price</h3>
          <div className="price-range">
            <input type="number" placeholder="Min" />
          
            <input type="number" placeholder="Max" />
          </div>
        </div>

      {/* Breed Filter */}
      <div className="filter-group">
        <h3 className="filter-subtitle">Breed</h3>
        <label className="filter-option">
          <input
            type="checkbox"
            value="Small"
            checked={selectedBreeds.includes("Small")}
            onChange={handleBreedChange}
          />
          Small
        </label>
        <label className="filter-option">
          <input
            type="checkbox"
            value="Medium"
            checked={selectedBreeds.includes("Medium")}
            onChange={handleBreedChange}
          />
          Medium
        </label>
        <label className="filter-option">
          <input
            type="checkbox"
            value="Large"
            checked={selectedBreeds.includes("Large")}
            onChange={handleBreedChange}
          />
          Large
        </label>
      </div>
    </div>
  );
};

export default FilterSidebar;

