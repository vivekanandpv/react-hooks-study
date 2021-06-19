import React from 'react';

const Demo = (props) => {
  return (
    <>
      <h3>Demo Component</h3>
      <button onClick={() => props.handler()}>Do something</button>
    </>
  );
};

export default Demo;
