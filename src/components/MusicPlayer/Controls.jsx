import { useState, useEffect, useRef, useCallback } from 'react';

// icons
import {
  IoPlayBackSharp,
  IoPlayForwardSharp,
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
  IoPlaySharp,
  IoPauseSharp,
} from 'react-icons/io5';

import {
  IoMdVolumeHigh,
  IoMdVolumeOff,
  IoMdVolumeLow,
} from 'react-icons/io';

const Controls = ({
  audioRef,
  progressBarRef,
  duration,
  setTimeProgress,
  tracks,
  trackIndex,
  setTrackIndex,
  setCurrentTrack,
  handleNext,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(60);
  const [muteVolume, setMuteVolume] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const playAnimationRef = useRef();

  const repeat = useCallback(() => {
    const currentTime = audioRef.current.currentTime;
    setTimeProgress(currentTime);
    progressBarRef.current.value = currentTime;
    progressBarRef.current.style.setProperty(
      '--range-progress',
      `${(progressBarRef.current.value / duration) * 100}%`
    );

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, duration, progressBarRef, setTimeProgress]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat]);

  const skipForward = () => {
    audioRef.current.currentTime += 15;
  };

  const skipBackward = () => {
    audioRef.current.currentTime -= 15;
  };

  const handlePrevious = () => {
    if (trackIndex === 0) {
      let lastTrackIndex = tracks.length - 1;
      setTrackIndex(lastTrackIndex);
      setCurrentTrack(tracks[lastTrackIndex]);
    } else {
      setTrackIndex((prev) => prev - 1);
      setCurrentTrack(tracks[trackIndex - 1]);
    }
  };

  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100;
      audioRef.current.muted = muteVolume;
    }
  }, [volume, audioRef, muteVolume]);

  return (

    <>
      <div className="controls-wrapper">
        <div className="playback-controls">
          <button onClick={handlePrevious} aria-label='anterior'>
            <IoPlaySkipBackSharp color="white" />
          </button>
          <button className='skipBackward' onClick={skipBackward} aria-label='volver 5 segundos atrás'>
            <IoPlayBackSharp color="white" />
          </button>
          <button onClick={togglePlayPause} className="play-pause-btn" aria-label='pausar o reproducir'>
            {isPlaying ? <IoPauseSharp color="inherit" /> : <IoPlaySharp color="inherit" />}
          </button>
          <button className='skipForward' onClick={skipForward} aria-label='avanzar 5 segundos adelante'>
            <IoPlayForwardSharp color="white" />
          </button>
          <button onClick={handleNext} aria-label='siguiente'>
            <IoPlaySkipForwardSharp color="white" />
          </button>

        </div>
        <div className="volume-controls">
          <button onClick={() => setMuteVolume((prev) => !prev)} className="volume-btn" aria-label='volumen'>
            {muteVolume || volume < 5 ? (
              <IoMdVolumeOff color="white" />
            ) : volume < 40 ? (
              <IoMdVolumeLow color="white" />
            ) : (
              <IoMdVolumeHigh color="white" />
            )}
          </button>
          <div className='show-volume-slider'>

            <input
              type="range"
              className="volume-slider"
              name="volumen"
              aria-label='volumen de la canción'
              min={0}
              max={100}
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
            />
          </div>
        </div>
      </div>
 
    </>

  );
};

export default Controls;
