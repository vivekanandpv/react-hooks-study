import React, { useState } from 'react';

const Sample = () => {
  console.log('Sample component rendering...');

  const [counter, setCounter] = useState(0);

  //    this call triggers the component re-rendering
  const changeCounter = (op) => {
    if (op === 'inc') {
      setCounter((v) => {
        return v + 1;
      });
    } else {
      setCounter((v) => {
        return v - 1;
      });
    }
  };

  return (
    <>
      <h3>Sample Component</h3>
      <p>Counter: {counter}</p>
      <button onClick={() => changeCounter('inc')}>Increment</button>
      <button onClick={() => changeCounter('dec')}>Decrement</button>
    </>
  );
};

export default Sample;
