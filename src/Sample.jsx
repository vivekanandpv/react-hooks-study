import React, { useState } from 'react';

const Sample = () => {
  //  useState introduces the state variable and a mutator of the state variable
  //  importing useState is required
  const [name, setName] = useState('Default Name');
  //  name is state variable, setName is the dispatcher or mutator for the name

  //  Always remember, function components DO NOT HAVE this!
  //  name is bound by using {name}
  return (
    <>
      <h3>Sample Component</h3>
      <p>Name: {name}</p>
    </>
  );
};

export default Sample;
