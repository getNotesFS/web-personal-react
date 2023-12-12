import { useRef, useState } from 'react';

import './MusicPlayer.css';
import { tracks } from '../../data/tracks.js';

// import components
import DisplayTrack from './DisplayTrack';
import Controls from './Controls';
import ProgressBar from './ProgressBar';

import PlayList from './PlayList.jsx';

const AudioPlayer = () => {
  // states
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(
    tracks[trackIndex]
  );
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  // reference
  const audioRef = useRef();
  const progressBarRef = useRef();

  const handleNext = () => {
    if (trackIndex >= tracks.length - 1) {
      setTrackIndex(0);
      setCurrentTrack(tracks[0]);
    } else {
      setTrackIndex((prev) => prev + 1);
      setCurrentTrack(tracks[trackIndex + 1]);
    }
  };

  return (
<>
  <div className="audio-player">
    <div className="track-info">
      <DisplayTrack
        currentTrack={currentTrack}
        audioRef={audioRef}
        setDuration={setDuration}
        progressBarRef={progressBarRef}
        handleNext={handleNext}
      />
    </div>
    
    <Controls
      audioRef={audioRef}
      progressBarRef={progressBarRef}
      duration={duration}
      setTimeProgress={setTimeProgress}
      tracks={tracks}
      trackIndex={trackIndex}
      setTrackIndex={setTrackIndex}
      setCurrentTrack={setCurrentTrack}
      handleNext={handleNext}
    />
    
    <div className="progress-and-playlist">
      <ProgressBar
        progressBarRef={progressBarRef}
        audioRef={audioRef}
        timeProgress={timeProgress}
        duration={duration}
      />
      
      <PlayList
        tracks={tracks}
        setTrackIndex={setTrackIndex}
        setCurrentTrack={setCurrentTrack}
        trackIndex={trackIndex}
      />
    </div>
  </div>
</>

  );
};
export default AudioPlayer;
