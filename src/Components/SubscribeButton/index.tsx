import React, { useState } from 'react';
import './SubscribeButton.css';

// This component lets users subscribe or unsubscribe by clicking a button.
// It uses React state (useState) to remember if the user is subscribed.
export default function SubscribeButton() {
  // useState creates a piece of state called isSubscribed.
  // false means the user is not subscribed at first.
  const [isSubscribed, setIsSubscribed] = useState(false);

  // This function runs when the button is clicked.
  // It toggles the isSubscribed state between true and false.
  const handleClick = () => {
    if (isSubscribed) {
      setIsSubscribed(false); // If already subscribed, unsubscribe
    } else {
      setIsSubscribed(true);  // If not subscribed, subscribe
    }
  };

  // We'll use these variables to set the button's label and style.
  let buttonLabel;
  let buttonClass;

  // Decide what the button should say and how it should look
  if (isSubscribed) {
    buttonLabel = 'Subscribed ✅'; // Show this if subscribed
    buttonClass = 'subscribe-button subscribed'; // Add a class for styling
  } else {
    buttonLabel = 'Subscribe 🔔'; // Show this if not subscribed
    buttonClass = 'subscribe-button unsubscribed'; // Add a class for styling
  }

  // Render the button. When clicked, it runs handleClick.
  return (
    <button className={buttonClass} onClick={handleClick}>
      {buttonLabel}
    </button>
  );

  // Ternary version (for future lessons):
  // This is a shorter way to write the same logic using a ternary operator.
  // return (
  //   <button className="subscribe-button" onClick={handleClick}>
  //     {isSubscribed ? 'Subscribed ✅' : 'Subscribe 🔔'}
  //   </button>
  // );
}
