import React, { useState } from 'react';

const Sample = () => {
  const [counter, setCounter] = useState(0);

  const changeCounter = (op) => {
    if (op === 'inc') {
      //  state changes (using hooks or in class components using setState)
      //  are asynchronous. That means, the counter is changed asynchronous
      //  Never write the code thinking that immediately after setCounter,
      //  the counter is changed.

      console.log('Before setCounter: inc:', counter);
      setCounter((v) => {
        console.log('Inside setCounter: inc:', v);
        return v + 1;
      });
      console.log('After setCounter: inc:', counter);
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
