import React, { useReducer } from 'react';

//  reducer is a pure function
//  https://en.wikipedia.org/wiki/Pure_function

//  action tells the reducer about the change to be applied
//  action usually has the structure: {type: 'actionType', payload: ...}
const sampleReducer = (state, action) => {
  switch (action.type) {
    case 'updateFirstName': {
      //    using the spread operator for cloning
      //    this is not a recommended approach
      //    consider using immer.js
      const newState = { ...state };
      newState.firstName = action.payload; //  updating the cloned state, not the original
      return newState;
    }
    case 'updateLastName': {
      const newState = { ...state };
      newState.lastName = action.payload;
      return newState;
    }
    //    if the action type is not supported in the reducer
    //    return the old state
    default:
      return state;
  }
};

const Sample = () => {
  const initialState = {
    firstName: 'Raman',
    lastName: 'K V',
  };

  const [state, dispatch] = useReducer(sampleReducer, initialState);

  return (
    <>
      <h3>Sample Component</h3>
    </>
  );
};

export default Sample;
