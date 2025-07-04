// SmoothScroll.tsx
// This React component shows how to smoothly scroll to a section of the page using a button and the useRef hook.
// It is a great example for students learning about refs, DOM manipulation, and user interaction in React.

import React, { useRef } from 'react';
import './SmoothScroll.css';

// The SmoothScroll component definition
export default function SmoothScroll() {
  // 1. Create a reference to attach to the 'Contact Us' section.
  //    useRef is a React hook that lets you persist values (like DOM nodes) across renders.
  //    Here, contactRef will point to a <div> element (or null before it's attached).
  const contactRef = useRef<HTMLDivElement>(null);

  // 2. Define a function to scroll to the contact section when the button is clicked.
  //    This function uses the ref to access the DOM node and calls scrollIntoView for smooth scrolling.
  const handleScrollToContact = () => {
    // Check if the ref is attached to a DOM node
    if (contactRef.current) {
      // scrollIntoView is a built-in browser method that scrolls the page to the element.
      // The 'behavior: smooth' option makes the scroll animated instead of jumping instantly.
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 3. Render the component UI
  return (
    <div className="app">
      {/* Header section with a button to trigger smooth scroll */}
      <header className="header">
        <h1>Welcome to Swiftrinity Academy</h1>
        <p>Click the button to scroll to the Contact Us section below</p>
        {/* When the button is clicked, handleScrollToContact runs */}
        <button className="btn-scroll" onClick={handleScrollToContact}>
          Contact Us
        </button>
      </header>

      {/* Spacer to create vertical space so scrolling is visible */}
      <div className="spacer">
        <p>Scroll down for more content...</p>
      </div>

      {/* The ref is attached to this div, so we can scroll to it programmatically */}
      <div ref={contactRef} className="contact-section">
        <h2>Contact Us</h2>
        <p>Email: support@swiftrinity.dev</p>
        <p>We're here to help you master React and DX Components!</p>
      </div>
    </div>
  );
}
