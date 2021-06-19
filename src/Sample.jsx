import React, { useEffect, useState } from 'react';

const Sample = (props) => {
  const [counter, setCounter] = useState(0);
  const [secondCounter, setSecondCounter] = useState(0);

  const increment = () => {
    setCounter((v) => {
      return v + 1;
    });
  };

  const decrement = () => {
    setSecondCounter((v) => {
      return v - 1;
    });
  };

  useEffect(() => {
    console.log('useEffect: for counter change', counter);
  }, [counter]);

  useEffect(() => {
    console.log('useEffect: for secondCounter change', secondCounter);
  }, [secondCounter]);

  return (
    <>
      <h3>
        Sample Component: Counter: {counter}; Second Counter: {secondCounter}
      </h3>
      <hr />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
};

export default Sample;
