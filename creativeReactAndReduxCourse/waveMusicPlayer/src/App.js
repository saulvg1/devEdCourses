import { useState } from 'react';
//adding components
import Player from './components/player.js';
import Song from './components/song.js';
import Library from './components/library.js';
//import util
import data from './data.js';

function App() {
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <h1>Music player</h1>
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
      />
      <Library songs={songs} currentSong={currentSong} />
    </div>
  );
}

export default App;
