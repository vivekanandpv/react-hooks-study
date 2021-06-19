import React, { useEffect, useState } from 'react';

const Sample = () => {
  const [counter, setCounter] = useState(0);

  //  state change in this case
  //  (because of the implementation of useEffect here),
  //  doesn't cause the effect re-run
  const increment = () => {
    setCounter((v) => {
      return v + 1;
    });
  };

  //  useEffect must be imported

  //  emulating componentDidMount
  useEffect(() => {
    console.log('useEffect: emulating componentDidMount');
  }, []);

  return (
    <>
      <h3>Sample Component: {counter}</h3>
      <hr />
      <button onClick={increment}>Increment</button>
    </>
  );
};

export default Sample;
