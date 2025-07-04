// Step 1: Import React and the useState hook from React library
import React, { useState } from 'react';

// Step 2: Import external CSS to apply styles
import './Counter.css';

/*
  This is a functional React component named "Counter".
  It demonstrates how to use **state** in React with the help of `useState`.

  What is state?
  - State is used to store data that can change over time.
  - In this example, we are storing a number called "count".
*/

function Counter() {
/*
  This is a functional React component called "Counter".
  It demonstrates how to use state in React using the `useState` hook.

  🔹 What is useState?
    - `useState` is a React Hook that lets you add a *state variable* to your component.
    - In simple words, it allows you to store a value (like a number, text, etc.) 
      that can change when the user interacts with your app.

  🔹 Syntax: 
    const [stateVariable, setFunction] = useState(initialValue);

    - `stateVariable` holds the current value (in our case, `count`).
    - `setFunction` is used to update the value (in our case, `setCount`).
    - `initialValue` is the starting value (in our case, `0`).
*/

  const [count, setCount] = useState(0); // 0 is the initial value

  // Step 4: Define a function that resets the count to 0
  const handleReset = () => {
    setCount(0);
  };

  // Step 5: Return the JSX UI
  return (
    <div className="counter-container">
      {/* Display the current value of the count */}
      <h2>Count: {count}</h2>
      {/* Two buttons: one to increase the count, one to reset */}
      <div className="button-group">
        <button type="button" aria-label="Increase count" onClick={() => setCount(count + 1)}>Increase</button>
        <button type="button" aria-label="Reset count" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

// Step 6: Export the component so it can be used in App.js
export default Counter;
