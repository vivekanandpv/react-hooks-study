import React, { useState } from 'react';

const Sample = () => {
  const [counter, setCounter] = useState(0);

  const changeCounter = (op) => {
    if (op === 'inc') {
      //  counter++ or counter-- doesn't work!
      //  we should use setCounter to change counter

      //  this is a preferred approach
      setCounter((v) => {
        //    v is the current counter
        return v + 1; //  return the new counter
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
