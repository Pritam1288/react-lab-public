// Import React so we can create a component
import React from 'react';

// Import the CSS file to style this component
import './CourseCardProps.css';

/*
  This is a functional React component called CourseCardProps.
  It receives data through "props" (short for properties), which are like parameters.
  Props allow us to reuse the same component with different data.
*/
const CourseCardProps = (props) => {
  return (
    // This is the outer wrapper of the card
    <div className="course-card">

      {/* Image for the course, received from props */}
      <img src={props.image} alt="Course" className="course-image" />

      {/* Badge label at the top like "Pega Constellation" */}
      <span className="badge">{props.tag}</span>+

      {/* Title of the course */}
      <h3>{props.title}</h3>

      {/* Description text */}
      <p>{props.description}</p>

      {/* Date of the course (bolded) */}
      <p><strong>{props.date}</strong></p>

      {/* Number of classes and schedule */}
      <p>{props.classes}</p>

      {/* Pricing section with current and old prices */}
      <div className="price-section">
        <span className="new-price">€{props.price}</span>
        <span className="old-price">€{props.oldPrice}</span>
      </div>

      {/* A button at the bottom of the card */}
      <button className="view-button">View Details</button>
    </div>
  );
};

// Export the component so it can be used in other files like App.js
export default CourseCardProps;
