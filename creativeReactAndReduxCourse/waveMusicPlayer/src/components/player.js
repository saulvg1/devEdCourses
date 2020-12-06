import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';

const Player = ({ currentSong }) => {
  //ref , the useRef needs to be the child of the exported function
  const audioRef = useRef(null);
  //eventHandlers
  const playSongHandler = () => {
    console.log(audioRef);
  };
  return (
    <div className="player">
      <div className="time-control">
        <p>Start Time</p>
        <input type="range" />
        <p>End Times</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          className="skip-forward"
          size="2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={faPlay}
        />
        <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleRight} />
      </div>
      <audio ref={audioRef} src={currentSong.audio} />
    </div>
  );
};
export default Player;
