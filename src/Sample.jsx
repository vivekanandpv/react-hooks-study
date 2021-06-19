import React, { useEffect, useState } from 'react';

const Sample = (props) => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter((v) => {
      return v + 1;
    });
  };

  //  Specifying the filtration criterion for the useEffect
  useEffect(() => {
    console.log('useEffect: for counter change', counter);
    //    stay away from state changes within the useEffect
    //    it may turn out to be recursive
  }, [counter]); //  runs only for counter updates (props change does not matter)

  return (
    <>
      <h3>
        Sample Component: Counter: {counter}; Index: {props.index}
      </h3>
      <hr />
      <button onClick={increment}>Increment</button>
    </>
  );
};

export default Sample;
