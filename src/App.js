import React, { useState } from 'react';
import Sample from './Sample';

function App() {
  const [index, setIndex] = useState(0);

  const changeProp = () => {
    setIndex((v) => {
      return v + 1;
    });
  };

  return (
    <>
      <h3>
        React Hooks Study{' '}
        <button onClick={changeProp}>Change Prop to Sample</button>
      </h3>

      <hr />

      <Sample index={index} />
    </>
  );
}

export default App;
