import { playAudio } from '../util.js';
const LibrarySong = ({
  setSongs,
  songs,
  song,
  id,
  setCurrentSong,
  audioRef,
  isPlaying,
}) => {
  const songSelectHandler = () => {
    setCurrentSong(song);
    //add active state
    playAudio(isPlaying, audioRef);
  };

  return (
    <div
      className={`library-song ${song.active ? 'selected' : ''}`}
      onClick={songSelectHandler}
    >
      <img src={song.cover} alt="album-cover"></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};
export default LibrarySong;
