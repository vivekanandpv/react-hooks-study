import React, { useEffect, useState } from 'react';

const Sample = (props) => {
  const [counter, setCounter] = useState(0);

  //  state change or props change in this case
  //  (because of the implementation of useEffect here),
  //  causes the effect re-run
  const increment = () => {
    setCounter((v) => {
      return v + 1;
    });
  };

  //  emulating componentDidUpdate for state of props change
  useEffect(() => {
    console.log(
      'useEffect: emulating componentDidUpdate : state or prop change'
    );
  });

  return (
    <>
      <h3>Sample Component: {counter}</h3>
      <hr />
      <button onClick={increment}>Increment</button>
    </>
  );
};

export default Sample;
