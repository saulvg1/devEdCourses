//adding components
import Player from './components/player.js';
import Song from './components/song.js';

function App() {
  return (
    <div className="App">
      <h1>Music player</h1>
      <Song />
      <Player />
    </div>
  );
}

export default App;
