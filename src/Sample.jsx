import React, { useCallback, useState } from 'react';
import Demo from './Demo';

const Sample = (props) => {
  console.log('Sample rendering...');
  const [index, setIndex] = useState(0);

  const handler = useCallback(() => {
    console.log('Sample: handler called');
  });

  const increment = () => {
    setIndex((v) => v + 1);
  };
  return (
    <>
      <h3>
        Sample Component <button onClick={increment}>Increment</button>
      </h3>
      <hr />
      <Demo handler={handler} />
    </>
  );
};

export default Sample;
