import React, { useEffect } from 'react';

const Sample = () => {
  //  emulating componentDidMount, componentWillUnmount
  useEffect(() => {
    console.log('useEffect: emulating componentDidMount');
    return () => {
      console.log('useEffect: emulating componentWillUnmount');
    };
  }, []);

  return (
    <>
      <h3>Sample Component</h3>
      <hr />
    </>
  );
};

export default Sample;
