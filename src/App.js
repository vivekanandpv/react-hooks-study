import React, { useState } from 'react';
import Sample from './Sample';

function App() {
  const [showSample, setShowSample] = useState(true);

  const toggle = () => {
    setShowSample((v) => {
      return !v;
    });
  };

  return (
    <>
      <h3>
        React Hooks Study <button onClick={toggle}>Toggle Sample</button>
      </h3>

      <hr />

      {showSample ? <Sample /> : null}
    </>
  );
}

export default App;
