import React, { useState } from 'react';
import Description from './Description';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  
  const handleClick = () => {
    // Toggle between 0 and 1
    setCounter(prevCounter => (prevCounter === 0 ? 1 : 0));
  };
  
  return (
    <div className="counter-container">
      <button onClick={handleClick}>
        {counter === 0 ? 'View Expanded Description' : 'View Concise Description'}
      </button>
      <Description counter={counter} />
    </div>
  );
};

export default Counter;