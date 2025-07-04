import React, { useState } from 'react';
import './DarkModeToggle.css';

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  // Starts with light mode (false)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Toggles between light and dark
  };

  let appClass = isDarkMode ? 'app dark' : 'app light';
  // Chooses the right class name for the background

  let buttonText = isDarkMode ? '🌙 Switch to Light Mode' : '☀️ Switch to Dark Mode';
  // Changes the button label based on current mode

  return (
    <div className={appClass}>
      <h1>Swiftrinity Theme Toggle</h1>
      <button className="toggle-button" onClick={toggleTheme}>
        {buttonText}
      </button>
    </div>
  );
}
