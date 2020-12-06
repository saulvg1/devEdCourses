import { useState } from 'react';
//adding components
import Player from './components/player.js';
import Song from './components/song.js';
//import util
import data from './data.js';

function App() {
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);

  return (
    <div className="App">
      <h1>Music player</h1>
      <Song currentSong={currentSong} />
      <Player currentSong={currentSong} />
    </div>
  );
}

export default App;
