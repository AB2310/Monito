import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"; // Your homepage component
import CategoryPage from "./pages/CategoryPage"; // New category page component
import DogDetailsPage from "./pages/DogDetailsPage";
import './Global.css';


function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/dog/:name" element={<DogDetailsPage />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
