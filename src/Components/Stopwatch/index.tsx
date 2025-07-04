// Import React and Hooks (useState and useEffect)
import React, { useState, useEffect } from 'react';
import './Stopwatch.css'; // Import the CSS for styling

/*
  This is a Stopwatch component.
  It shows a digital-style stopwatch with Start, Stop, and Reset buttons.
  It updates the time every 10 milliseconds using React state and effects.
*/
function Stopwatch(props) {

  const {
    startLabel = 'Start',
    stopLabel = 'Stop',
    resetLabel = 'Reset',
    onStart,
    onStop,
    onReset
  } = props;

  // State to store the elapsed time in milliseconds
  const [time, setTime] = useState(0); // Example: 0 means stopwatch just started

  // State to track whether the stopwatch is currently running
  const [isRunning, setIsRunning] = useState(false); // false = paused

  /*
    useEffect is used to run side effects in React — here we use it to start and stop the timer.
    It runs whenever isRunning changes.
  */
  useEffect(() => {
    let interval;

    if (isRunning) {
      // If stopwatch is running, increase time every 10 milliseconds
      interval = setInterval(() => {
        // Use previous time and add 10 ms
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      // If stopwatch is stopped, clear the timer
      clearInterval(interval);
    }

    // Clean up the interval when component is destroyed or isRunning changes
    return () => clearInterval(interval);
  }, [isRunning]); // Dependency array: only re-run when isRunning changes

  const handleStart = () => {
    setIsRunning(true);
    if (onStart) onStart('Start button clicked');
  };

  const handleStop = () => {
    setIsRunning(false);
    if (onStop) onStop('Stop button clicked');
  };

  // Function to reset the stopwatch (back to 0 and paused)
  const handleReset = () => {
    setTime(0);         // Set time to 0
    setIsRunning(false); // Stop the stopwatch
    if (onReset) onReset('Reset button clicked');
  };

  /*
    This helper function formats milliseconds into seconds and milliseconds.
    For example, 3456 ms becomes "3:456".
  */
  const formatTime = (ms) => {
    const seconds = Math.floor(ms / 1000);                        // Get full seconds
    const milliseconds = (ms % 1000).toString().padStart(3, '0'); // Format milliseconds to 3 digits
    return `${seconds}:${milliseconds}`;                          // Combine into "seconds:milliseconds"
  };

  // What gets displayed on the screen
  return (
    <div className="stopwatch-container">
      {/* Show formatted stopwatch time */}
      <h2 className="digital-display">Stopwatch: {formatTime(time)}</h2>

      {/* Control buttons */}
      <div className="button-group">
        <button className="start-btn" onClick={handleStart}>{startLabel}</button>
        <button className="stop-btn" onClick={handleStop}>{stopLabel}</button>
        <button className="reset-btn" onClick={handleReset}>{resetLabel}</button>
      </div>
    </div>
  );
}

// Export the component so it can be used in App.js or elsewhere
export default Stopwatch;
