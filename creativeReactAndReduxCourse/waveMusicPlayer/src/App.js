import { useState, useRef } from 'react';
//adding components
import Player from './components/player.js';
import Song from './components/song.js';
import Library from './components/library.js';
//import util
import data from './data.js';

function App() {
  //ref , the useRef needs to be the child of the exported function
  const audioRef = useRef(null);
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  //

  return (
    <div className="App">
      <h1>Music player</h1>
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        audioRef={audioRef}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
      />
      <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setSongs={setSongs}
      />
    </div>
  );
}

export default App;
