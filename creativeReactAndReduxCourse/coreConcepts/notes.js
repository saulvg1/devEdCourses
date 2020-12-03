/* 
Props In React

Here you would export the functional component 

*/
import React from 'react';
const Tweet = () => {
  return (
    <div className="tweet">
      <h2>Name</h2>
      <h3>This is the actual tweet</h3>
      <button>Delete</button>
      <button>Like</button>
    </div>
  );
};
export default Tweet;
