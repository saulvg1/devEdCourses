import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadGames } from './actions/gamesAction.js';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  });
  return (
    <div className="App">
      <h2>react with vite</h2>
      <h2>ignite</h2>
    </div>
  );
}

export default App;
