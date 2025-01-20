import React from "react";
import { Link } from "react-router-dom";
import "./Breadcrumb.css";

const Breadcrumb = ({ paths }) => {
  return (
    <nav className="breadcrumb">
      {paths.map((path, index) => (
        <span key={index} className="breadcrumb-item">
          {index !== paths.length - 1 ? (
            <>
              <Link to={path.link}>{path.label}</Link>
              <span className="breadcrumb-separator"> &gt; </span>
            </>
          ) : (
            <span className="breadcrumb-current">{path.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
